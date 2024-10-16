import { IcnBtnArrowDown } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import StatusIcon from "../StatusIcon";
import {
  arrowDownStyle,
  dropdownStyle,
  textStyle,
  triggerButtonStyle,
} from "./index.css";

const StatusDropdonwMenu = () => {
  return (
    <Menu
      label="status"
      renderTriggerButton={
        <div className={triggerButtonStyle}>
          <IcnBtnArrowDown
            className={arrowDownStyle}
            width={12}
            height={12}
          />
          <span className={textStyle}>상태</span>
        </div>
      }
      renderList={
        <Dropdown className={dropdownStyle}>
          <li>
            <StatusIcon status="bookmarked" />
          </li>
          <li>
            <StatusIcon status="inProgress" />
          </li>
          <li>
            <StatusIcon status="queued" />
          </li>
          <li>
            <StatusIcon status="done" />
          </li>
        </Dropdown>
      }
    />
  );
};

export default StatusDropdonwMenu;
