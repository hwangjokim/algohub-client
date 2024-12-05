"use client";

import type { ProblemContent } from "@/api/problems/type";
import { IcnEdit } from "@/asset/svg";
import { editIconStyle } from "@/shared/component/ProblemList/index.css";
import useA11yHoverHandler from "@/shared/hook/useA11yHandler";
import useGetGroupId from "@/shared/hook/useGetGroupId";
import { getTierImage } from "@/shared/util/img";
import {
  activeStyle,
  itemStyle,
  textStyle,
  titleStyle,
} from "@/view/group/problem-list/PendingList/index.css";
import clsx from "clsx";

import { format } from "date-fns";
import Link from "next/link";

export type PendingListItemProps = Pick<
  ProblemContent,
  "problemId" | "title" | "startDate" | "level"
> & {
  className?: string;
  onEdit: (id: number) => void;
};

const PendingListItem = ({
  problemId,
  title,
  startDate,
  level,
  className,
  onEdit,
}: PendingListItemProps) => {
  const Icon = getTierImage(level);
  const groupId = useGetGroupId();
  const { isActive, handleBlur, handleFocus, handleMouseOut, handleMouseOver } =
    useA11yHoverHandler();

  return (
    <li
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      aria-label={`${level}: ${title}`}
      className={clsx(itemStyle, isActive && activeStyle, className)}
    >
      <Icon width={25} height={32} />
      <Link
        className={titleStyle}
        href={`/group/${groupId}/problem-list/${problemId}`}
      >
        <span className={textStyle}>{title}</span>
      </Link>
      <time dateTime={startDate} className={textStyle}>
        {format(startDate, "yyyy.MM.dd")}
      </time>
      <IcnEdit
        onClick={() => onEdit(problemId)}
        className={editIconStyle({ isActive })}
        width={24}
        height={24}
      />
    </li>
  );
};

export default PendingListItem;
