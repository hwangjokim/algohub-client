'use client';
import { checkContains } from "@/common/util/dom";
import { useCallback, useEffect, useRef } from "react";

/**
 * @param handleToggle toggle 관리용 setState 핸들러
 * @example
 *  const handleToggle = () => setShowMenu(false);
    const ref = useOutsideClick(handleToggle);
 */
export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(handleToggle: () => void) => {
  const ref = useRef<T | null>(null);
  const handleOutsideClick = useCallback(({ target }: MouseEvent) => {
    const [check] = checkContains(target!, ref);
    if (!check) handleToggle();
  }, [handleToggle]);

  useEffect(() => {
    // click대신 mousedown으로 빠르게 진행
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return ref;
};
