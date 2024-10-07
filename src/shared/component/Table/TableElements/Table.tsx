import clsx from "clsx";
import type { ComponentProps } from "react";
import { tableStyle, wrapperStyle } from "./TableElements.css";

const Table = (({ className, ...props }: ComponentProps<'table'>) => (
  <div className={wrapperStyle}>
    <table
      className={clsx(tableStyle, className)}
      {...props}
    />
  </div>
));

export default Table;