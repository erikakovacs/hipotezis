"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type DemoContextValue = {
  open: boolean;
  success: boolean;
  openDemo: () => void;
  closeDemo: () => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const openDemo = useCallback(() => setOpen(true), []);
  const closeDemo = useCallback(() => {
    setOpen(false);
    setSuccess(false);
  }, []);

  return (
    <DemoContext.Provider value={{ open, success, openDemo, closeDemo }}>
      <HashOpener />
      <SuccessRedirectOpener
        onOpen={() => {
          setSuccess(true);
          setOpen(true);
        }}
      />
      {children}
    </DemoContext.Provider>
  );
}

function HashOpener() {
  const { openDemo } = useDemoModal();

  useEffect(() => {
    if (window.location.hash === "#bemutato") {
      openDemo();
    }
  }, [openDemo]);

  return null;
}

function SuccessRedirectOpener({ onOpen }: { onOpen: () => void }) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("demo") !== "siker") return;

    onOpen();
    params.delete("demo");
    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  }, [onOpen]);

  return null;
}

export function useDemoModal() {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemoModal csak DemoProvider-en belül használható");
  }
  return ctx;
}
