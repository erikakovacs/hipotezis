"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type Ref,
} from "react";
import { Button } from "@/components/kutya-panzio/Button";
import { useDemoModal } from "@/components/kutya-panzio/DemoProvider";
import {
  buildDemoFormSubject,
  DEMO_FORM_ACTION,
  DEMO_FORM_SUCCESS_URL,
  validateDemoRequest,
} from "@/lib/demo-request";

type FormState = {
  name: string;
  business: string;
  email: string;
  phone: string;
  currentProcess: string;
};

const emptyForm: FormState = {
  name: "",
  business: "",
  email: "",
  phone: "",
  currentProcess: "",
};

export function DemoModal() {
  const { open, success, closeDemo } = useDemoModal();
  if (!open) return null;
  return <DemoDialog onClose={closeDemo} success={success} />;
}

function DemoDialog({
  onClose,
  success,
}: {
  onClose: () => void;
  success: boolean;
}) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const sentAtRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const timeout = window.setTimeout(() => firstFieldRef.current?.focus(), 20);
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [onClose]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    setError(null);

    const validationError = validateDemoRequest(form);
    if (validationError) {
      event.preventDefault();
      setError(validationError);
      return;
    }

    if (subjectRef.current) {
      subjectRef.current.value = buildDemoFormSubject(form.business);
    }
    if (sentAtRef.current) {
      sentAtRef.current.value = new Date().toISOString();
    }

    setSubmitting(true);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Bezárás"
        className="absolute inset-0 bg-ink/45"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[1.6rem] bg-paper p-5 shadow-2xl sm:max-w-lg sm:rounded-[1.6rem] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm text-ink-soft hover:bg-cream-deep"
        >
          Bezárás
        </button>

        {success ? (
          <div className="py-6">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-sage">
              Megérkezett
            </p>
            <h2
              id={titleId}
              className="mt-3 font-serif text-3xl tracking-tight text-ink"
            >
              Köszönöm, hamarosan jelentkezem.
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Átnézem, hogyan kezelitek most a jelentkezéseket, és egy rövid
              üzenetben megmutatom, mit lehetne egy helyre hozni. Legyen szó
              panzióról, napköziről, kiképzésről, kozmetikáról vagy menhelyről.
            </p>
            <Button className="mt-8" onClick={onClose}>
              Rendben
            </Button>
          </div>
        ) : (
          <>
            <h2
              id={titleId}
              className="pr-16 font-serif text-[1.7rem] tracking-tight text-ink sm:text-3xl"
            >
              Írd meg, hol dolgozol
            </h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Írd meg, hogyan kezelitek most a jelentkezéseket. Ha több
              szolgáltatásotok is van, azt is írd ide, és megmutatom, mit
              lehetne egy helyre hozni.
            </p>
            <form
              action={DEMO_FORM_ACTION}
              method="POST"
              className="mt-5 space-y-3 sm:mt-6 sm:space-y-4"
              onSubmit={onSubmit}
            >
              <input type="hidden" name="_next" value={DEMO_FORM_SUCCESS_URL} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input ref={subjectRef} type="hidden" name="_subject" defaultValue="" />
              <input ref={sentAtRef} type="hidden" name="Beküldve" defaultValue="" />
              <Field
                ref={firstFieldRef}
                name="Név"
                label="Neved"
                value={form.name}
                onChange={(value) => update("name", value)}
                autoComplete="name"
                required
              />
              <Field
                name="Vállalkozás"
                label="Üzleted neve"
                value={form.business}
                onChange={(value) => update("business", value)}
                autoComplete="organization"
                required
              />
              <Field
                name="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={(value) => update("email", value)}
                autoComplete="email"
                required
              />
              <Field
                name="Telefon"
                label="Telefon"
                type="tel"
                value={form.phone}
                onChange={(value) => update("phone", value)}
                autoComplete="tel"
                required
              />
              <label className="block text-left">
                <span className="text-sm font-medium text-ink">
                  Hogyan kezelitek most a jelentkezéseket?
                </span>
                <textarea
                  name="Jelenlegi jelentkezési folyamat"
                  value={form.currentProcess}
                  onChange={(event) =>
                    update("currentProcess", event.target.value)
                  }
                  rows={3}
                  required
                  className="mt-1.5 w-full rounded-2xl border border-line bg-cream/50 px-4 py-3 text-ink outline-none ring-terracotta/0 transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                  placeholder="Például: a panzió Messengeren megy, a menhely külön táblázatban..."
                />
              </label>
              {error ? (
                <p className="text-sm text-terracotta" role="alert">
                  {error}
                </p>
              ) : null}
              <Button type="submit" className="w-full" disabled={submitting}>
                {submitting ? "Küldés..." : "Elküldöm"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

type FieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  ref?: Ref<HTMLInputElement>;
};

function Field({
  name,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
  ref,
}: FieldProps) {
  return (
    <label className="block text-left">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        ref={ref}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        required={required}
        className="mt-1.5 w-full rounded-2xl border border-line bg-cream/50 px-4 py-3 text-ink outline-none ring-terracotta/0 transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
      />
    </label>
  );
}
