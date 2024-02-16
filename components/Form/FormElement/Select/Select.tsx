import React from 'react'
import { FaUser } from "react-icons/fa";
import { TravellerOptonTypes } from './types';

interface ISelectProps{
    options: TravellerOptonTypes[]
    icon?: JSX.Element
}

const Select = ({options, icon}: ISelectProps) => {
  return (
    <>
        <div className="flex flex-row items-center gap-1 bg-bg-lightGreen h-[60px]  justify-center px-3 rounded-[30px] ">
          {icon}
          <select
            className="max- bg-[inherit] w-[150px] text-[13px] outline-none text-colorGreen font-[600] px-1 sele"
          >
            {options.map((item)=> (
              <option value="en" key={item.id}>{item.option}</option>
            ))}
            
          </select>
        </div>
    </>
  )
}

export default Select