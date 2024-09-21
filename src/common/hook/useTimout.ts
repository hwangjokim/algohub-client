import type { Timeout } from "@/shared/type";
import { type DependencyList, useEffect, useRef } from "react";

export const useTimeout = (
  callback: () => void,
  duration?: number,
  dependencies?: DependencyList
) => {
  const timeoutRef = useRef<Timeout>();

  useEffect(() => {
    timeoutRef.current = setTimeout(callback, duration);

    return () => clearTimeout(timeoutRef.current);
  }, dependencies);
};
