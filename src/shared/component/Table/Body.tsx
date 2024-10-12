import type { TableColumns, TableType } from "@/shared/type/table";
import TableCell from "./TableElements/TableCell";
import { tableCellTextStyle } from "./TableElements/index.css";

type BodyProps<T> = {
  type: TableType;
  rows: T[];
  cols: TableColumns<T>[];
};

const Body = <T,>({ rows, cols, type }: BodyProps<T>) => {
  return (
    <tbody>
      {rows.map((row, idx) => (
        // TODO: api 연결 후, raw data에 고유 id값 추가 등의 방안으로 key 교체하기
        <tr key={idx}>
          {cols.map(({ key, align, Cell }) => (
            <TableCell
              key={key?.toString()}
              align={align}
              type={type}
              className={tableCellTextStyle[type]}
            >
              {Cell(row)}
            </TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
