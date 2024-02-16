import Image from "next/image";
import React from "react";
import Button from "../Button";
import { FlightTypes } from "@/types";

interface ITicketCardTypes {
  data?: FlightTypes;
  index: number;
  dataLength: number;
}

const TicketCard = ({ data, index, dataLength }: ITicketCardTypes) => {
  const isLastItem = index + 1 === dataLength;
  return (
    <>
      <div
        className={`h-[150px] bg-white rounded-[20px] w-full ${
          isLastItem ? "" : "border-b-[2px]"
        }  border-dashed border-gray-300 relative flex flex-row items-center justify-between px-6`}
      >
        <Image
          src={data?.airlineLogo}
          alt=""
          height={200}
          width={200}
          className="w-[80px]"
        />

        <div className="flex flex-col space-y-2">
          <span className="text-colorGreen font-[500] text-[25px]">
            {data?.airport_dept}
          </span>
          <span className="text-[14px] text-colorGreen">{data?.time_dept}</span>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <span className="text-colorGreen font-[500] text-[12px] uppercase">
            {data?.airline}
          </span>
          <span className="text-[14px] text-goldenBrown font-bold">
            {data?.duration}
          </span>
          <span className="text-[14px] text-colorGreen">{data?.type}</span>
        </div>

        <div className="flex flex-col justify-center items-end space-y-2">
          <span className="text-colorGreen text-[25px] font-[500] ">
            {data?.airport_arrival}
          </span>
          <span className="text-[13px] text-colorGreen">
            {data?.time_arrival}
          </span>
        </div>

        <div className="flex flex-col justify-center items-end space-y-2">
          <span className="text-colorGreen text-[14px] font-bold ">
            ${data?.price}
          </span>
          <Button
            title="Book Now"
            classNam="h-[30px] w-[100px]"
          />
        </div>

        {/* Curve and dashed seperator. It doesn't display on the last item in the array */}
        {isLastItem ? null : (
          <div className="h-[40px] w-[40px] rounded-full bg-bg-lightGreen absolute -bottom-5 -left-5 z-10"></div>
        )}
        {isLastItem ? null : (
          <div className="h-[40px] w-[40px] rounded-full bg-bg-lightGreen absolute -bottom-5 -right-5 z-10"></div>
        )}
      </div>
    </>
  );
};

export default TicketCard;
