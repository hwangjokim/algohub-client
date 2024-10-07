import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCellStyle } from "./TableElements.css";

const TableCell = ({ className, ...props }: ComponentProps<"td">) => (
  <td className={clsx(tableCellStyle, className)} {...props} />
);
export default TableCell;
