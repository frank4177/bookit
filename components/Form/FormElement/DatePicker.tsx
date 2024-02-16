"use client";

import React, {  useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { HiOutlineCalendarDays } from "react-icons/hi2";

const DateComponent = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(currentDate);

  return (
    <div className="flex flex-row items-center gap-1 bg-bg-lightGreen h-[60px] justify-center px-3 rounded-[30px]">
      <HiOutlineCalendarDays
        color="#3D5654"
        size={20}
        className="min-w-[25px] h-[25px]"
      />
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd MMMM yyyy"
        placeholderText="Select a date"
        className="outline-none bg-[inherit] text-[14px] text-colorGreen font-[500] w-[150px]"
      />
    </div>
  );
};

export default DateComponent;
