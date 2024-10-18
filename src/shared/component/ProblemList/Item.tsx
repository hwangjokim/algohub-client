"use client";

import CheckBox from "@/common/component/CheckBox";
import {
  itemStyle,
  textStyle,
  titleStyle,
  wrongCheckBoxStyle,
} from "@/shared/component/ProblemList/index.css";
import type { Problem } from "@/shared/type";
import { getTierImage } from "@/shared/util/img";
import clsx from "clsx";

import { format } from "date-fns";
import Link from "next/link";

type ProblemListItemProps = Problem & { className?: string };

const JSX_BY_STATUS = {
  wrong: <input type="checkbox" disabled className={wrongCheckBoxStyle} />,
  unsolved: <CheckBox checked={false} style={{ cursor: "default" }} />,
  solved: <CheckBox checked={true} style={{ cursor: "default" }} />,
};

const ProblemListItem = ({
  problemId,
  title,
  endDate,
  level,
  solved,
  className,
  accuracy,
  memberCount,
  submitMemberCount,
}: ProblemListItemProps) => {
  const Icon = getTierImage(level);

  const isExpired = new Date(endDate).getTime() - new Date().getTime() <= 0;

  const status = solved ? "solved" : isExpired ? "wrong" : "unsolved";

  return (
    <li
      aria-label={`${level}: ${title}`}
      className={clsx(itemStyle, className)}
    >
      <Icon width={25} height={32} />
      <Link
        className={`${titleStyle} ${textStyle}`}
        href={`/problem/${problemId}`}
      >
        <span className={textStyle}>{title}</span>
      </Link>
      <time dateTime={endDate} className={textStyle}>
        {format(endDate, "yyyy.MM.dd")}
      </time>
      <span className={textStyle}>{`${submitMemberCount}/${memberCount}`}</span>
      <span className={textStyle}>{accuracy}</span>
      {JSX_BY_STATUS[status]}
    </li>
  );
};

export default ProblemListItem;
