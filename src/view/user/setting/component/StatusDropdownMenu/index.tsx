import { IcnBtnArrowDown } from "@/asset/svg";
import Dropdown from "@/common/component/Dropdown";
import Menu from "@/common/component/Menu/Menu";
import StatusIcon from "../StatusIcon";
import { dropdownStyle, storyArrowDownStyle, triggerButtonStyle } from "./index.css";

const StatusDropdonwMenu = () => {
  return (
    <Menu
      label="status"
      renderTriggerButton={
        <div className={triggerButtonStyle}>
          <IcnBtnArrowDown
            className={storyArrowDownStyle}
            width={12}
            height={12}
          />
          <span>상태</span>
        </div>
      }
      renderList={
        <Dropdown className={dropdownStyle}>
          <li>
            <StatusIcon status="Favorites" />
          </li>
          <li>
            <StatusIcon status="Progress" />
          </li>
          <li>
            <StatusIcon status="Queued" />
          </li>
          <li>
            <StatusIcon status="Done" />
          </li>
        </Dropdown>
      }
    />
  );
};

export default StatusDropdonwMenu;
