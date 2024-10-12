import ProblemListItem from "@/shared/component/ProblemList/Item";
import type { PropsWithChildren } from "react";

type ProblemListProps = PropsWithChildren;

const ProblemList = ({ children, ...props }: ProblemListProps) => {
  return <ul {...props}>{children}</ul>;
};

ProblemList.Item = ProblemListItem;

export default ProblemList;
