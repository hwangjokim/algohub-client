import type { TableColumns, TableType } from "@/shared/type/table";
import { memo } from "react";
import TableHead from "./TableElements/TableHead";
import { tableHeaderStyle } from "./TableElements/index.css";
import { headWrapper } from "./index.css";

type HeaderProps<T> = {
  columns: TableColumns<T>[];
  type: TableType;
};

const Header = <T,>({ columns, type }: HeaderProps<T>) => {
  return (
    <thead className={tableHeaderStyle({ type })}>
      <tr>
        {columns.map(({ key, Header, width, align, props }) => (
          <TableHead key={key?.toString()} {...props} width={width}>
            <div className={headWrapper({ align })}>
              <Header />
            </div>
          </TableHead>
        ))}
      </tr>
    </thead>
  );
};

export default memo(Header) as typeof Header;
