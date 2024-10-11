import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCellStyle, tableCellTextStyle } from "./index.css";

type TableCellProps = {
  textAlign?: "left" | "right";
} & ComponentProps<"td">;

const TableCell = ({ className, textAlign, ...props }: TableCellProps) => (
  <td className={clsx(tableCellStyle({ textAlign }), tableCellTextStyle, className)} {...props} />
);
export default TableCell;
