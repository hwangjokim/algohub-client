import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableCaptionStyle } from "./TableElements.css";

const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => (
  <caption className={clsx(tableCaptionStyle, className)} {...props} />
);

export default TableCaption;
