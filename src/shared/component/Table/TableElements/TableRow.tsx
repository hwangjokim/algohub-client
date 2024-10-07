import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableRowStyle } from "./TableElements.css";

const TableRow = ({ className, ...props }: ComponentProps<"tr">) => (
  <tr className={clsx(tableRowStyle, className)} {...props} />
);

export default TableRow;
