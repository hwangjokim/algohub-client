import { IcnBtnArrowDown, IcnBtnSort } from "@/asset/svg";
import { match } from "ts-pattern";
import { ascIconStyle, sortIconStyle } from "./index.css";

type SortIconProps = {
  direction?: "asc" | "desc";
  onClick: () => void;
};

const SortIcon = ({ direction: isActive, onClick }: SortIconProps) => {
  return (
    <>
      {match(isActive)
        .with(undefined, () => (
          <IcnBtnSort
            className={sortIconStyle}
            width={20}
            height={20}
            onClick={onClick}
          />
        ))
        .with("asc", () => (
          <IcnBtnArrowDown
            className={ascIconStyle}
            width={20}
            height={20}
            onClick={onClick}
          />
        ))
        .with("desc", () => (
          <IcnBtnArrowDown
            className={sortIconStyle}
            width={20}
            height={20}
            onClick={onClick}
          />
        ))
        .exhaustive()}
    </>
  );
};

export default SortIcon;
