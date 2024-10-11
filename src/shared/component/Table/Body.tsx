import type { TableColumns } from "@/shared/type/table";
import TableCell from "./TableElements/TableCell";
import { tableBodyStyle, tableRowStyle } from "./TableElements/index.css";

type BodyProps<T> = {
  rows: T[];
  cols: TableColumns<T>[];
};

const Body = <T,>({ rows, cols }: BodyProps<T>) => {
  return (
    <tbody className={tableBodyStyle}>
      {rows.map((row, idx) => (
        // api 연결 후, raw data에 고유 id값 추가 등의 방안으로 key 교체하기
        <tr className={tableRowStyle} key={idx}>
          {cols.map((col) => (
            <TableCell key={col.key?.toString()} textAlign={col.justify}>
              {col.Cell(row)}
            </TableCell>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default Body;
