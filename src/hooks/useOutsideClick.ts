import { checkContains } from "@/utils/dom";
import { useCallback, useEffect, useRef } from "react";

/**
 * @param setState toggle 관리용 setState
 */
export const useOutsideClick = <
  T extends React.Dispatch<React.SetStateAction<boolean>>,
>(
  setState: T,
) => {
  const ref = useRef<HTMLDivElement>(null);
  const handleOutsideClick = useCallback(({ target }: MouseEvent) => {
    const [check] = checkContains(target!, ref);
    if (!check) setState(false);
  }, []);
  useEffect(() => {
    // click대신 mousedown으로 빠르게 진행
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return ref;
};
