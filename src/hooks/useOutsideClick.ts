import { useEffect } from "react";

/** 
 * @param handleOutsideClick 클릭한 요소가 ref인지 확인하여 setState를 호출하는 이벤트 핸들러
 * @example
 * // 다수의 ref와 setState를 사용할 때
 * const handleOutsideClick = ({ target }: MouseEvent) => {
 *   const refs = [ref1, ref2];
 *   const setStates = [setState1, setState2];
 *   const checks = checkContains(target!, ...refs);
 *   checks.forEach((check, index) => {
 *     if (!check) setStates[index](false);
 *   });
 * };
 *
 * @example
 * // 하나의 ref와 setState만 사용할 때
 * const handleOutsideClick = ({ target }: MouseEvent) => {
 *   const [check] = checkContains(target!, ref);
 *   if (!check) setState(false);
 * };
 */
export const useOutsideClick = (
  handleOutsideClick: (e: MouseEvent) => void,
) => {
  useEffect(() => {
    // click대신 mousedown으로 빠르게 진행
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);
};
