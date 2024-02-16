import { AvatarTypes } from "@/types";
import Image from "next/image";
import React from "react";

interface IAvatarProps {
  data: AvatarTypes[];
  count: number;
}

const Avatar = ({ data, count }: IAvatarProps) => {
  return (
    <>
      <div className="flex flex-row items-center">
        {data.slice(0, count).map((item, index) => (
          <Image
            alt="pic"
            src={item.image}
            height={50}
            width={50}
            className={`w-[40px] h-[40px] rounded-full  border-[3px] border-[#425C5A] ${
              index !== 0 ? "-ml-[10px]" : ""
            } z-10 overflow-hidden`}
            key={item.id}
          />
        ))}
        <div className="w-[40px] h-[40px] rounded-full text-white bg-[#C99C33] border-[3px] border-[#425C5A] flex flex-row font-bold text-[14px] justify-center items-center -ml-[15px] z-10">
          <span>+</span> {data.length - count}
        </div>
      </div>
    </>
  );
};

export default Avatar;
