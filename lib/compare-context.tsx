"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CompareValue = {
  handles: string[];
  toggle: (handle: string) => void;
  has: (handle: string) => boolean;
  clear: () => void;
};

const CompareContext = createContext<CompareValue | null>(null);
const KEY = "aestora-compare";

export function CompareProvider({ children }: { children: ReactNode }) {
  const [handles, setHandles] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setHandles(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(handles));
  }, [handles, ready]);

  const toggle = useCallback((handle: string) => {
    setHandles((prev) => {
      if (prev.includes(handle)) return prev.filter((h) => h !== handle);
      if (prev.length >= 3) return [...prev.slice(1), handle];
      return [...prev, handle];
    });
  }, []);

  const has = useCallback((handle: string) => handles.includes(handle), [handles]);
  const clear = useCallback(() => setHandles([]), []);

  const value = useMemo(
    () => ({ handles, toggle, has, clear }),
    [handles, toggle, has, clear],
  );

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
