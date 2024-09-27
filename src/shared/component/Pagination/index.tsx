"use client";

import { IcnBtnArrowLeft, IcnBtnArrowRight, IcnList } from "@/asset/svg";
import { joinClassName } from "@/common/util/string";
import type { ComponentProps, PropsWithChildren } from "react";
import {
  ellipsisStyle,
  iconSizeStyle,
  navStyle,
  paginationContentStyle,
  paginationItemStyle,
  paginationLinkStyle,
} from "./index.css";

interface PaginationProps extends PropsWithChildren<ComponentProps<"nav">> {
  count: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  count,
  currentPage,
  onPageChange,
  className,
  ...props
}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < count) {
      onPageChange(currentPage + 1);
    }
  };

  // 페이지 생성 함수
  const getPageNumbers = () => {
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

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={joinClassName(navStyle, className)}
      {...props}
    >
      <PaginationContent>
        <PaginationItem
          aria-label="이전 페이지로 이동"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <IcnBtnArrowLeft className={iconSizeStyle} />
        </PaginationItem>

        <div className={paginationContentStyle({ type: "content" })}>
          {getPageNumbers().map((page, index) =>
            page === "ellipsis" ? (
              <PaginationEllipsis key={`ellipsis-${index}`} />
            ) : (
              <PaginationItem
                key={page}
                onClick={() => onPageChange(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationItem>
            ),
          )}
        </div>

        <PaginationItem
          aria-label="다음 페이지로 이동"
          onClick={handleNext}
          disabled={currentPage === count}
        >
          <IcnBtnArrowRight className={iconSizeStyle} />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

const PaginationContent = ({ ...props }: ComponentProps<"ul">) => (
  <ul className={paginationContentStyle({ type: "wrapper" })} {...props} />
);

type PaginationItemProps = {
  isActive?: boolean;
} & ComponentProps<"button">;

const PaginationItem = ({
  onClick,
  isActive,
  disabled,
  ...props
}: PaginationItemProps) => (
  <li className={paginationItemStyle}>
    <button
      onClick={onClick}
      disabled={disabled}
      aria-current={isActive ? "page" : undefined}
      aria-disabled={disabled ? "true" : undefined}
      className={paginationLinkStyle({ isActive })}
      {...props}
    />
  </li>
);

const PaginationEllipsis = ({
  ...props
}: ComponentProps<"span">) => (
  <li className={paginationItemStyle}>
    <span aria-hidden className={ellipsisStyle} {...props}>
      <IcnList className={iconSizeStyle} />
    </span>
  </li>
);

export default Pagination;
