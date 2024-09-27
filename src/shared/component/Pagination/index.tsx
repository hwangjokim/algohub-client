"use client";

import { IcnBtnArrowLeft, IcnBtnArrowRight, IcnList } from "@/asset/svg";
import { type ComponentProps, type PropsWithChildren, forwardRef } from "react";
import {
  ellipsisStyle,
  gapLeftStyle,
  gapRightStyle,
  iconSizeStyle,
  navStyle,
  paginationContentStyle,
  paginationItemStyle,
  paginationLinkStyle,
} from "./index.css";

interface PaginationProps extends PropsWithChildren<ComponentProps<"nav">> {
  count: number; // 전체 페이지 수
  currentPage: number; // 현재 페이지 (부모에서 전달)
  onPageChange: (page: number) => void; // 페이지 변경 핸들러
}

const Pagination = ({
  count,
  currentPage,
  onPageChange,
  ...props
}: PaginationProps) => {
  console.log({ currentPage });
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

  // 페이지 번호 리스트 생성
  const generatePageNumbers = () => {
    const pages: React.ReactNode[] = [];
    const maxVisiblePages = 7;

    if (count <= maxVisiblePages) {
      // 총 페이지 수가 7개 이하인 경우 모든 페이지 표시
      for (let i = 1; i <= count; i++) {
        pages.push(
          <PaginationItem
            key={i}
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationItem>,
        );
      }
    } else {
      // 첫 번째 페이지는 항상 표시
      pages.push(
        <PaginationItem
          key={1}
          onClick={() => onPageChange(1)}
          isActive={currentPage === 1}
        >
          1
        </PaginationItem>,
      );

      if (currentPage > 4) {
        // 현재 페이지가 4보다 큰 경우 "..." 추가
        pages.push(<PaginationEllipsis key="start-ellipsis" />);
      }

      // 중앙에 표시할 페이지들 (현재 페이지 기준으로 앞뒤 2개씩)
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(count - 1, currentPage + 1);

      if (currentPage <= 4) {
        // 현재 페이지가 4 이하일 때는 2~5 페이지 표시
        startPage = 2;
        endPage = 5;
      } else if (currentPage >= count - 3) {
        // 마지막 4개 페이지는 2~마지막에서 4까지 표시
        startPage = count - 4;
        endPage = count - 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem
            key={i}
            onClick={() => onPageChange(i)}
            isActive={i === currentPage}
          >
            {i}
          </PaginationItem>,
        );
      }

      if (currentPage < count - 3) {
        // 현재 페이지가 마지막에서 3개 이전인 경우 "..." 추가
        pages.push(<PaginationEllipsis key="end-ellipsis" />);
      }

      // 마지막 페이지는 항상 표시
      pages.push(
        <PaginationItem
          key={count}
          onClick={() => onPageChange(count)}
          isActive={currentPage === count}
        >
          {count}
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={`${navStyle}`}
      {...props}
    >
      <PaginationContent>
        <PaginationItem
          aria-label="이전 페이지로 이동"
          className={`${gapLeftStyle}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <IcnBtnArrowLeft className={iconSizeStyle} />
        </PaginationItem>

        {generatePageNumbers()}

        <PaginationItem
          aria-label="다음 페이지로 이동"
          className={`${gapRightStyle}`}
          onClick={handleNext}
          disabled={currentPage === count}
        >
          <IcnBtnArrowRight className={iconSizeStyle} />
        </PaginationItem>
      </PaginationContent>
    </nav>
  );
};

interface PaginationContentProps extends ComponentProps<"ul"> {}

const PaginationContent = ({
  className,
  children,
  ...props
}: PaginationContentProps) => (
  <ul className={paginationContentStyle({ type: "wrapper" })} {...props}>
    {children}
  </ul>
);

type PaginationItemProps = {
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
} & ComponentProps<"button">;

const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, children, onClick, isActive, disabled, ...props }, ref) => (
    <li ref={ref} className={`${paginationItemStyle}`}>
      <button
        onClick={onClick}
        disabled={disabled}
        aria-current={isActive ? "page" : undefined}
        aria-disabled={disabled ? "true" : undefined}
        className={paginationLinkStyle({ isActive })}
        {...props}
      >
        {children}
      </button>
    </li>
  ),
);

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <li className={`${paginationItemStyle}`}>
    <span aria-hidden className={`${ellipsisStyle}`} {...props}>
      <IcnList className={iconSizeStyle} />
    </span>
  </li>
);

export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem };

