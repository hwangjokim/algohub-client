"use client";

import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IcnBtnArrowLeft, IcnCalenderCard } from "@/asset/svg";
import { ko } from "date-fns/locale";
import {
  arrowWrapperStyle,
  calendarIcnStyle,
  customHeaderWrapperStyle,
  dateDetailStyle,
  dateStyle,
  leftArrowStyle,
  rightArrowStyle,
  wrapperStyle,
} from "./index.css";
registerLocale("ko", ko);

interface CalendarProps {
  initialDate?: Date;
  onChange: (date: Date) => void;
}

const Calendar = ({ onChange, initialDate }: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate ?? new Date()
  );
  const [selected, setSelected] = useState<boolean>(false);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setSelected(true);
    if (date) {
      onChange(date);
    }
  };

  return (
    <div className={wrapperStyle}>
      <div>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          selected={selectedDate}
          className={dateStyle({ selected })}
          renderCustomHeader={renderCustomHeader}
          onChange={handleDateChange}
          locale="ko"
          popperPlacement="bottom-start"
          shouldCloseOnSelect
        />
      </div>

      <IcnCalenderCard className={calendarIcnStyle} />
    </div>
  );
};

interface CustomHeaderProps {
  date: Date;
  decreaseMonth: () => void;
  increaseMonth: () => void;
}

const renderCustomHeader = ({
  date,
  decreaseMonth,
  increaseMonth,
}: CustomHeaderProps) => {
  return (
    <div className={customHeaderWrapperStyle}>
      <button className={arrowWrapperStyle} onClick={decreaseMonth}>
        <IcnBtnArrowLeft className={leftArrowStyle} />
      </button>
      <div className={dateDetailStyle}>{`${date.getFullYear()}년 ${
        date.getMonth() + 1
      }월`}</div>
      <button className={arrowWrapperStyle} onClick={increaseMonth}>
        <IcnBtnArrowLeft className={rightArrowStyle} />
      </button>
    </div>
  );
};

export default Calendar;
