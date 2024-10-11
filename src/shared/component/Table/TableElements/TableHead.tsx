import type { PageType } from "@/shared/type/table";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableHeadStyle } from "./TableElements.css";

type TableHeadProps = {
  textAlign?: "left" | "right";
  type?: PageType;
  width?: number;
} & ComponentProps<"th">;

const TableHead = ({
  className,
  type,
  textAlign,
  width,
  ...props
}: TableHeadProps) => {
  const padding = type === "내가푼문제" ? "dense" : undefined;
  return (
    <th
      className={clsx(tableHeadStyle({ textAlign, padding }), className)}
      style={{ width: `${width}px` }}
      {...props}
    />
  );
};

export default TableHead;
