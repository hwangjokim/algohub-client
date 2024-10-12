import type { TableType } from "@/shared/type/table";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCellStyle } from "./index.css";

type TableCellProps = {
  textAlign?: "left" | "right";
  type: TableType;
} & ComponentProps<"td">;

const TableCell = ({
  className,
  textAlign,
  type,
  ...props
}: TableCellProps) => (
  <td
    className={clsx(tableCellStyle({ textAlign, type }), className)}
    {...props}
  />
);
export default TableCell;
