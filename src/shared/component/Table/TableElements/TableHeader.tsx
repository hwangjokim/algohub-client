import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableHeaderStyle } from "./TableElements.css";

const TableHeader = ({ className, ...props }: ComponentProps<"thead">) => (
  <thead className={clsx(tableHeaderStyle, className)} {...props} />
);

export default TableHeader;
