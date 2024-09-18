import { IcnBtnDeleteCircle } from "@/asset/svg";
import { handleKeyDown } from "@/common/util/dom";
import Image, { type StaticImageData } from "next/image";
import { type FocusEvent, useState } from "react";
import {
  alarmStyle,
  containerStyle,
  dateStyle,
  deleteIconStyle,
  listStyle,
  messageStyle,
  nameStyle,
  profileImageStyle,
  profileStyle
} from "./index.css";

type AlarmListProps = {
  profileImg: StaticImageData;
  name: string;
  message: string;
  date: string;
  onClick: () => void;
};

const AlarmListItem = ({
  onClick,
  profileImg,
  name,
  message,
  date,
}: AlarmListProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = (event: FocusEvent<HTMLDivElement | SVGElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(true);
    }
  };
  const handleBlur = (event: FocusEvent<HTMLDivElement | SVGElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(false);
    }
  };

  const handleMouseOver = () => {
    setIsActive(true);
  };
  const handleMouseOut = () => {
    setIsActive(false);
  };

  const handleDeleteClick = () => {
    alert("delete");
  };

  return (
    <li
      className={listStyle}
      aria-label={`${name}님의 알림: ${message}, ${date}`}
    >
      <div
        className={containerStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          role="button"
          className={alarmStyle}
          onClick={onClick}
          onKeyDown={handleKeyDown(onClick)}
          tabIndex={0}
        >
          <div className={profileStyle}>
            <Image
              src={profileImg}
              className={profileImageStyle}
              alt={`${name}님의 프로필 이미지`}
            />
            <div>
              <strong className={nameStyle}>{name}</strong>
              <span className={messageStyle}>{message}</span>
            </div>
          </div>
          <time className={dateStyle} aria-label={date}>
            {date}
          </time>
        </div>
        <IcnBtnDeleteCircle
          role="button"
          className={deleteIconStyle}
          width={"1.6rem"}
          height={"1.6rem"}
          onClick={handleDeleteClick}
          onKeyDown={handleKeyDown(handleDeleteClick)}
          aria-hidden={!isActive}
          aria-label={`${name}님의 알림 삭제`}
          style={{ visibility: isActive ? "visible" : "hidden" }}
          tabIndex={0}
        />
      </div>
    </li>
  );
};

export default AlarmListItem;
