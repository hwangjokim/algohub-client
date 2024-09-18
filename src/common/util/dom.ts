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

/**
 * @description button 외의 태그에서 클릭 이벤트를 사용할 때 스크린 리더로도 접근할 수 있게 keydown 이벤트 핸들러를 부착해야 함.
 * @param {() => void} handleClick onClick에 사용될 핸들러 함수
 * @return handleKeyDown 핸들러 함수
 */
export const handleKeyDown =
  (handleClick: () => void) => (event: React.KeyboardEvent<HTMLDivElement | SVGElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

/**
 * @description keydown이 가능한 요소의 자식요소를 focus & keydown할 때 부모 요소가 가로채는 현상 방지하는 함수
 * @example
 * // 아래 상황에서 button에 focus를 두고 키보드를 사용해 클릭하면 부모인 div의 keydown이 가로채버림
 * // 이때 handleStopPropagationKeyDown을 사용하면 위 버그 방지 가능
 * <div
      className={buttonStyle}
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown(handleClick)}
      tabIndex={0}
      aria-label={`${name}님의 알림: ${message}, ${date}`}
    >
      <button
        className={deleteIconStyle()}
        onClick={handleDeleteClick}
        onKeyDown={handleStopPropagationKeyDown}
      />
    </div>
 */
export const handleStopPropagationKeyDown = (
  event: React.KeyboardEvent<HTMLElement | SVGElement>,
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.stopPropagation();
  }
};
