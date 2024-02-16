"use client";

import React, { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import { sidebarMenuData, avatarData } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Avatar from "./Avatar";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  const path = pathname ? pathname : "/flights"


  return (
    <div className="w-[17rem]  bg-bg-green rounded-r-[40px] flex flex-col space-y-7 overflow-hidden">
      {/* Profile Details */}
      <div className="flex flex-col items-center space-y-2 my-4">
        <ProfilePicture />
        <span className="text-white text-[22px] font-[500]">ALEX JOHNSON</span>
        <span className="text-white text-[12px]">alex.johnson@gmail.com</span>
      </div>

      {/* Routes */}
      <div className="bg-[#425C5A] pt-5 h-full">
        <ul className="pl-5 space-y-2">
          {sidebarMenuData.map((item) => {
            const activePath =
              item.route === pathname
                ? "bg-bg-lightGreen text-black"
                : "bg-[#425C5A] text-white";
            return (
              <li key={item.id}>
                {item.route === pathname ? (
                  <div className={`h-6 ${activePath} border-none`}>
                    <div className="h-[inherit] bg-[#425C5A] rounded-br-[50px] border-none"></div>
                  </div>
                ) : null}

                <Link
                  href={item.route}
                  key={item.id}
                  className={`flex flex-row ${activePath} items-center h-[50px] rounded-l-[20px] pl-4 gap-2`}
                >
                  <span>{item.icon}</span>
                  <span className="uppercase text-[14px]">{item.title}</span>
                </Link>

                {item.route === pathname ? (
                  <div className={`h-6 ${activePath} border-none`}>
                    <div className="h-[inherit] bg-[#425C5A] rounded-tr-[50px] border-none"></div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        {/* Users */}
        <div className="pl-9 space-y-6 mt-6 ">
          <span className="text-goldenBrown ">Active Users</span>
          <Avatar data={avatarData} count={4} />
          <Image
            src="/connectmap2.PNG"
            height={300}
            width={300}
            alt="lo"
            className="w-[180px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
