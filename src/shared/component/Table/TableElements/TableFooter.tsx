import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableFooterStyle } from "./TableElements.css";

const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => (
  <tfoot className={clsx(tableFooterStyle, className)} {...props} />
);

export default TableFooter;
