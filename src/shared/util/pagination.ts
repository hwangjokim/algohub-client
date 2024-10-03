/** start번호부터 end까지의 number 배열 반환
 * @example
 * getRange(2, 5) // [2, 3, 4, 5]
 */
export const getRange = (start: number, end: number) => {
  if (start > end) {
    throw new Error("'start' 값은 'end' 값보다 클 수 없습니다.");
  }

  if (start < 0 || end < 1) {
    throw new Error("'start'와 'end' 값은 1 이상의 양수여야 합니다.");
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};

export const getPageNumbers = (totalPages: number, currentPage: number) => {
  // 7 이하일 경우 전부 표시
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];
  // 첫 페이지는 항상 추가
  pages.push(1);

  // 현재 페이지가 첫 4페이지 이내일 경우
  if (currentPage <= 4) {
    pages.push(...getRange(2, 5));
    pages.push("ellipsis");
  }
  // 중간에 있을 경우
  else if (currentPage > 4 && currentPage < totalPages - 3) {
    pages.push("ellipsis");
    pages.push(...getRange(currentPage - 1, currentPage + 1));
    pages.push("ellipsis");
  }
  // 마지막 4페이지 이내일 경우
  else {
    pages.push("ellipsis");
    pages.push(...getRange(totalPages - 4, totalPages - 1));
  }

  // 마지막 페이지는 항상 추가
  pages.push(totalPages);

  return pages;
};
