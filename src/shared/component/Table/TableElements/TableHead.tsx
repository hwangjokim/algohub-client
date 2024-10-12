import type { TableType } from "@/shared/type/table";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableHeadStyle } from "./index.css";

type TableHeadProps = {
  textAlign?: "left" | "right";
  type?: TableType;
  width?: number;
} & ComponentProps<"th">;

const TableHead = ({
  className,
  type,
  textAlign,
  width,
  ...props
}: TableHeadProps) => {
  return (
    <th
      className={clsx(tableHeadStyle({ textAlign }), className)}
      style={{ width: `${width}px` }}
      {...props}
    />
  );
};

export default TableHead;
