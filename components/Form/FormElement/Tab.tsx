"use client";

import React, { useState } from "react";
import { TabType } from "./types";

interface ITabProps {
  data: TabType[];
}
const Tab = ({ data }: ITabProps) => {
  const [selected, setSelected] = useState<number>(1);

  const handleClick = (param: number) => {
    setSelected(param);
  };
  return (
    <>
      <div className="flex flex-row items-center gap-1 bg-bg-lightGreen h-[60px] w-full max-w-[590px] justify-between p-1 rounded-[40px]">
        {data.map((item) => {
          const activeTab = item.id === selected ? "rounded-[30px] bg-bg-green text-white " : "text-colorGreen";
          return (
            <div
              className={`text-[13px] h-[50px] w-[130px] flex flex-row items-center justify-center  font-[600] ${activeTab} cursor-pointer`}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tab;
