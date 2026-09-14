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
  openDemo: () => void;
  closeDemo: () => void;
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openDemo = useCallback(() => setOpen(true), []);
  const closeDemo = useCallback(() => setOpen(false), []);

  return (
    <DemoContext.Provider value={{ open, openDemo, closeDemo }}>
      <HashOpener />
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

export function useDemoModal() {
  const ctx = useContext(DemoContext);
  if (!ctx) {
    throw new Error("useDemoModal csak DemoProvider-en belül használható");
  }
  return ctx;
}
