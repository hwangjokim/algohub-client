import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCellStyle } from "./TableElements.css";

type TableCellProps = {
  textAlign?: "left" | "right";
} & ComponentProps<"td">;

const TableCell = ({ className, textAlign, ...props }: TableCellProps) => (
  <td className={clsx(tableCellStyle({ textAlign }), className)} {...props} />
);
export default TableCell;
