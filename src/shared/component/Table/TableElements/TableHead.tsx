import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableHeadStyle } from "./TableElements.css";

const TableHead = ({ className, ...props }: ComponentProps<"th">) => (
  <th className={clsx(tableHeadStyle, className)} {...props} />
);

export default TableHead;
