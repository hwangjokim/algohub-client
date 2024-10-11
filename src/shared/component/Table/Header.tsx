import { IcnBtnArrowDown, IcnBtnSort } from "@/asset/svg";
import type {
  PageType,
  TableColumns
} from "@/shared/type/Table";
import TableHead from "./TableElements/TableHead";
import TableHeader from "./TableElements/TableHeader";
import TableRow from "./TableElements/TableRow";
import { headWrapper } from "./index.css";

type HeaderProps<T> = {
  columns: TableColumns<T>[];
  type: PageType;
};

const Header = <T,>({ columns, type }: HeaderProps<T>) => {
  return (
    <TableHeader type={type}>
      <TableRow>
        {columns.map((v) => (
          <TableHead key={v.key?.toString()} {...v.props} width={v.width}>
            <div className={headWrapper({ justifyContent: v.justify })}>
              {v.dropdownFilter && <IcnBtnArrowDown width={20} height={20} />}
              <v.Header />
              {v.sort && <IcnBtnSort width={20} height={20} />}
            </div>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default Header;
