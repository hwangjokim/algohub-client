import type { PageType } from "@/shared/type/Table";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableHeaderStyle } from "./TableElements.css";

/**
 * variant
 * 1. 기본(디자인 없음) - 문제 리스트 (풀 문제, 진행 문제, 만료 문제, 대기 문제), 멤버 리스트
 * 2. border bottom - 스터디 관리
 * 3. border top - solvedList - 검색
 * 3. background color mg5 - 알람 설정
 * 5. dense - 내가 푼 문제
 */
type TableHeaderProps = {
  type?: PageType;
} & ComponentProps<"thead">;

const TableHeader = ({ className, type, ...props }: TableHeaderProps) => (
  <thead className={clsx(tableHeaderStyle({ type }), className)} {...props} />
);

export default TableHeader;
