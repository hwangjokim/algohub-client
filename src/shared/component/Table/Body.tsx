import type { TableColumns } from "@/shared/type/Table";
import TableBody from "./TableElements/TableBody";
import TableCell from "./TableElements/TableCell";
import TableRow from "./TableElements/TableRow";

type BodyProps<T> = {
  rows: T[];
  cols: TableColumns<T>[];
};

const Body = <T,>({ rows, cols }: BodyProps<T>) => {
  return (
    <TableBody>
      {rows.map((row, idx) => (
        // api 연결 후, raw data에 고유 id값 추가 등의 방안으로 key 교체하기
        <TableRow key={idx}>
          {cols.map((col) => (
            <TableCell key={col.key as string} textAlign={col.justify}>
              {col.Cell(row)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
