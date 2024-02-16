import React from "react";
import Range from "./Form/FormElement/Range";
import Image from "next/image";

const min = 0;
const max = 5000;
const values = [500, 2500];

const Destination = ({}) => {
  return (
    <>
      <div className="h-[100] max-w-[320px] w-full bg-bg-green rounded-[20px] z-30  space-y-7 overflow-hidden">
        <div className="bg-[#425C5A] p-5 space-y-9">
          {/* Distination Map */}
          <div className="flex flex-row items-center justify-between text-white">
            <div className="flex flex-col justify-center items-start ">
              <span className="text-[11px]">FROM</span>
              <span className="text-[20px]">JFK</span>
            </div>

            <div className="flex flex-col justify-center ">
              <div></div>
              <span className="mt-6 text-[13px]">NON-STOP</span>
            </div>

            <div className="flex flex-col justify-center items-end ">
              <span className="text-[11px]">TO</span>
              <span className="text-[20px]">BOM</span>
            </div>
          </div>

          {/* Fly */}
          <Image src="/thrfly.PNG" alt="flight" width={500} height={500} />
        </div>

        <div className="p-5 space-y-6">
          {/* Tab */}
          <div className="flex flex-row text-white items-center">
            <span className="text-[13px] bg-goldenBrown p-2 rounded-[20px] max-w-[100px] w-full text-center">
              NON-STOP
            </span>
            <span className="text-[13px] p-2 ">ONE-STOP</span>
            <span className="text-[13px] p-2">MORE-STOP</span>
          </div>

          {/* Range */}
          <div>
            <span className="text-[13px] text-white">PRICE</span>
            <Range />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
