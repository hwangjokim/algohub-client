/**
 * 카멜케이스를 케밥케이스로 변경하는 함수
 *
 * @param {string} str - 카멜케이스 string
 * @returns {string} 케밥케이스로 변환한 string
 *
 * @example
 * camelToKebab('camelCaseString'); // 'camel-case-string'
 */
export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * props, default, conditional className을 조합하는 함수
 * @param {(string | undefined)[]} cn 조합할 className 리스트
 * @returns typeof string으로 필터링 후 classNames.join(' ')
 * @example
 * ({ className }) => <div className={joinClassName(className, defaultStyle)} />
 * ({ className }) => <div className={joinClassName(className, error && errorStyle, defaultStyle)} />
 */
export function joinClassName(...cn: (string | undefined)[]) {
  return cn.filter((c) => c && typeof c === "string").join(" ");
}
