import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableBodyStyle } from "./TableElements.css";

const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => (
  <tbody className={clsx(tableBodyStyle, className)} {...props} />
);

export default TableBody;