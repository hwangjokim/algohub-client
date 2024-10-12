import { IcnBtnArrowDown, IcnBtnSort } from "@/asset/svg";
import type { TableColumns, TableType } from "@/shared/type/table";
import { memo } from "react";
import TableHead from "./TableElements/TableHead";
import { tableHeaderStyle, tableRowStyle } from "./TableElements/index.css";
import { headWrapper } from "./index.css";

type HeaderProps<T> = {
  columns: TableColumns<T>[];
  type: TableType;
};

const Header = <T,>({ columns, type }: HeaderProps<T>) => {
  return (
    <thead className={tableHeaderStyle({ type })}>
      <tr className={tableRowStyle}>
        {columns.map((v) => (
          <TableHead key={v.key?.toString()} {...v.props} width={v.width}>
            <div className={headWrapper({ justifyContent: v.justify })}>
              {v.dropdownFilter && <IcnBtnArrowDown width={20} height={20} />}
              <v.Header />
              {v.sort && <IcnBtnSort width={20} height={20} />}
            </div>
          </TableHead>
        ))}
      </tr>
    </thead>
  );
};

export default memo(Header) as typeof Header;
