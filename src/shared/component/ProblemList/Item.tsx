import CheckBox from "@/common/component/CheckBox";
import { getTierImage } from "@/shared/component/ProblemList/img";
import {
  itemStyle,
  textStyle,
  wrongCheckBoxStyle,
} from "@/shared/component/ProblemList/index.css";
import type { Problem } from "@/shared/type";
import Link from "next/link";
import { match } from "ts-pattern";

type ProblemListItemProps = Problem;

const ProblemListItem = ({
  id,
  title,
  date,
  tier,
  status,
  solved,
  total,
}: ProblemListItemProps) => {
  const Icon = getTierImage(tier);

  const accuracy = ((solved / total) * 100).toFixed(0);

  return (
    <li className={itemStyle}>
      <Icon width={25} height={32} />
      <Link href={`/problem/${id}`}>
        <span className={textStyle}>{title}</span>
      </Link>
      <span className={textStyle}>{date}</span>
      <span className={textStyle}>{`${solved}/${total}`}</span>
      <span className={textStyle}>{`${accuracy}%`}</span>
      {match(status)
        .with("wrong", () => (
          <input type="checkbox" disabled className={wrongCheckBoxStyle} />
        ))
        .with("unsolved", () => (
          <CheckBox checked={false} style={{ cursor: "default" }} />
        ))
        .with("solved", () => (
          <CheckBox checked={true} style={{ cursor: "default" }} />
        ))
        .exhaustive()}
    </li>
  );
};

export default ProblemListItem;
