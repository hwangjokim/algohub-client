"use client";

import { IcnBtnPin, IcnCalendarTable } from "@/asset/svg";
import type { TableColumns } from "@/shared/type/Table";
import Header from "./Header";
import Table from "./TableElements/Table";
import TableCaption from "./TableElements/TableCaption";
import { pinStyle } from "./index.css";

type DataTableProps = {
  columns: TableColumns[];
  data: [];
};

export const studyManaging: TableColumns[] = [
  {
    key: "pin",
    headerName: <IcnBtnPin width={20} height={20} className={pinStyle.active} />,
    width: 30,
    sort: true,
    justify: "left",
  },
  {
    key: "groupName",
    headerName: "그룹명",
    width: 120,
    justify: "left",
  },
  {
    key: "duration",
    headerName: (
      <>
        <IcnCalendarTable width={20} height={20} />
        기간
      </>
    ),
    width: 100,
    sort: true,
  },
  {
    key: "role",
    headerName: "역할",
    width: 60,
  },
  {
    key: "isPublic",
    headerName: "공개여부",
    width: 60,
  },
  {
    key: "status",
    headerName: "상태",
    width: 100,
    dropdownFilter: true,
  },
  {
    key: "withdraw",
    headerName: "회원탈퇴",
    width: 60,
    justify: "right",
  },
];

export function DataTableDemo({ columns, data }: DataTableProps) {
  // 정렬 필터 검색 페이징 헤더 셀width

  return (
    <Table>
      <TableCaption>스터디 리스트</TableCaption>
      <Header columns={studyManaging} type="스터디관리" />
      {/* <TableBody>
        {data.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell>$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
