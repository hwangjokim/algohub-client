import type { MutableRefObject } from "react";

/**
 * @description refs.map((ref) => ref.current?.contains(target as Node))를 리턴하는 함수
 * @param target MouseEvent.target
 * @param refs
 * @returns {boolean[]} refs 순서대로 HTMLElement.contains() 결과 boolean[]
 * @example 
 * 
 * ({ target }: MouseEvent) => {
    const [notiBtn, noti, profileBtn, profile] = checkContains(
      target!,
      notificationBtnRef,
      notificationRef,
      profileBtnRef,
      profileMenuRef,
    );
 */
export const checkContains = (
  target: EventTarget,
  ...refs: MutableRefObject<HTMLElement | null>[]
) => {
  return refs.map((ref) => ref.current?.contains(target as Node));
};
