import { IcnBtnArrowDown, IcnBtnSort } from "@/asset/svg";
import { ascIconStyle, sortIconStyle } from "./index.css";

type SortIconProps = {
  direction?: "asc" | "desc";
  onClick: () => void;
};

const SortIcon = ({ direction: isActive, onClick }: SortIconProps) => {
  switch (isActive) {
    case undefined:
      return (
        <IcnBtnSort
          className={sortIconStyle}
          width={20}
          height={20}
          onClick={onClick}
        />
      );
    case "asc":
      return (
        <IcnBtnArrowDown
          className={ascIconStyle}
          width={20}
          height={20}
          onClick={onClick}
        />
      );
    case "desc":
      return (
        <IcnBtnArrowDown
          className={sortIconStyle}
          width={20}
          height={20}
          onClick={onClick}
        />
      );
    default:
      return null;
  }
};

export default SortIcon;
