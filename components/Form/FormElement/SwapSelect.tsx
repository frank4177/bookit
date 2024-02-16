"use client";

import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { MdSwapHorizontalCircle } from "react-icons/md";

const SwapSelect = () => {
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("es");

  const handleSwapLanguages = () => {
    const tempLanguage = fromLanguage;
    setFromLanguage(toLanguage);
    setToLanguage(tempLanguage);
  };
  return (
    <>
      <div className="bg-bg-lightGreen flex flex-row items-center h-[60px] w-full  justify-between px-5 rounded-[30px]">
        <div className="flex flex-row items-center  gap-1 ">
          <ImLocation />{" "}
          <select
            id="fromLanguage"
            value={fromLanguage}
            onChange={(e) => setFromLanguage(e.target.value)}
            className="max- bg-[inherit]  text-[13px] outline-none text-colorGreen font-[600] px-1 sele"
          >
            <option value="en">NEW YORK (JFK)</option>
            <option value="es">MUMBAI (BOM)</option>
          </select>
        </div>
        <MdSwapHorizontalCircle
          onClick={handleSwapLanguages}
          color="#3D5654"
          size={35}
          className="h-fit cursor-pointer min-w-[35px]"
        />
        <div className="flex flex-row items-center  gap-1">
          <ImLocation />{" "}
          <select
            id="toLanguage"
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
            className="bg-[inherit]  text-[13px] outline-none text-colorGreen font-[600] px-1 sele"
          >
            <option value="en">NEW YORK (JFK)</option>
            <option value="es">MUMBAI (BOM)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SwapSelect;
