import { IcnBtnDeleteCircle } from "@/asset/svg";
import { handleKeyDown, handleStopPropagationKeyDown } from "@/common/util/dom";
import Image, { type StaticImageData } from "next/image";
import { type FocusEvent, type MouseEvent, useState } from "react";
import {
  buttonStyle,
  dateStyle,
  deleteButtonStyle,
  deleteIconStyle,
  listStyle,
  messageStyle,
  nameStyle,
  profileImageStyle,
  profileStyle,
} from "./index.css";

type AlarmListProps = {
  profileImg: StaticImageData;
  name: string;
  message: string;
  date: string;
  handleClick: () => void;
};

const AlarmListItem = ({
  handleClick,
  profileImg,
  name,
  message,
  date,
}: AlarmListProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsActive(true);
    }
  };
  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
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

  const handleDeleteClick = (event: MouseEvent) => {
    event.stopPropagation();
    alert("delete");
  };

  return (
    <li
      className={listStyle}
      aria-label={`${name}님의 알림: ${message}, ${date}`}
    >
      <div
        className={buttonStyle}
        role="button"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        onKeyDown={handleKeyDown(handleClick)}
        tabIndex={0}
      >
        <button
          className={deleteButtonStyle({ active: isActive })}
          onClick={handleDeleteClick}
          onKeyDown={handleStopPropagationKeyDown}
          aria-hidden={!isActive}
          aria-label={`${name}님의 알림 삭제`}
        >
          <IcnBtnDeleteCircle
            className={deleteIconStyle}
            width={"1.6rem"}
            height={"1.6rem"}
          />
        </button>

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
    </li>
  );
};

export default AlarmListItem;
