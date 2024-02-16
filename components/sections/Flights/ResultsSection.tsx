import TicketCard from "@/components/Cards/TicketCard";
import Destination from "@/components/Destination";
import { ticketsData } from "@/constants";
import React from "react";

const ResultsSection = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-row justify-between items-center">
          <span className="text-colorGreen font-[600] text-[19px]">Results (25)</span>

          <div className="max-w-[400px] w-full h-[50px] flex flex-row items-center justify-between text-[14px]">
            <div className="bg-[#FFFFFF] text-colorGreen font-[500] max-w-[170px] h-[inherit] w-full rounded-[25px] flex flex-row items-center justify-center">
              Filter
            </div>

            <div className="bg-[#FFFFFF] text-colorGreen font-[500] max-w-[170px] h-[inherit] w-full rounded-[25px] flex flex-row items-center justify-center">
            <select name="" id="" className="outline-none">
              <option value="">TICKET OF CLASS</option>
            </select>
            </div>
            
          </div>
        </div>

        <div className="flex flex-row justify-between gap-6 ">
          <div className="w-full max-w-[10] ">
            {ticketsData.map((item, index) => (
              <TicketCard
                data={item}
                key={item.id}
                index={index}
                dataLength={ticketsData.length}
              />
            ))}
          </div>
          <Destination />
        </div>
      </div>
    </>
  );
};

export default ResultsSection;
