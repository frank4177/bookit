
import Button from "@/components/Button";
import Date from "@/components/Form/FormElement/DatePicker";
import Select from "@/components/Form/FormElement/Select/Select";
import SwapSelect from "@/components/Form/FormElement/SwapSelect";
import Tab from "@/components/Form/FormElement/Tab";
import { travellerOptions, tripData, classOptions } from "@/constants";
import React from "react";
import { FaUser } from "react-icons/fa";
import { PiArmchairFill } from "react-icons/pi";

const SearchForm = () => {
  return (
    <>
      <div className="bg-red-600 rounded-[30px]  p-3 result  gap-5 ">
        <SwapSelect />
        <Date />
        <Select
          options={travellerOptions}
          icon={<FaUser className="iconStyle" />}
        />
        <Tab data={tripData} />
        <Select
          options={classOptions}
          icon={<PiArmchairFill className="iconStyle" />}
        />
        <Button title="Search" classNam="h-[60px] max-w-[250px]"/>
      </div>
    </>
  );
};

export default SearchForm;
