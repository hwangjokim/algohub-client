const getPageNumbers = (count: number, currentPage: number) => {
  // 7 이하일 경우 전부 표시
  if (count <= 7) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  const pages: (number | "ellipsis")[] = [];
  // 첫 페이지는 항상 추가
  pages.push(1);

  // 현재 페이지가 첫 4페이지 이내일 경우
  if (currentPage <= 4) {
    pages.push(...Array.from({ length: 4 }, (_, i) => i + 2));
    pages.push("ellipsis");
  }
  // 중간에 있을 경우
  else if (currentPage > 4 && currentPage < count - 3) {
    pages.push("ellipsis");
    pages.push(...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i));
    pages.push("ellipsis");
  }
  // 마지막 4페이지 이내일 경우
  else {
    pages.push("ellipsis");
    pages.push(...Array.from({ length: 4 }, (_, i) => count - 4 + i));
  }

  // 마지막 페이지는 항상 추가
  pages.push(count);

  return pages;
};

export default getPageNumbers;
