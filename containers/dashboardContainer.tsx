import Sidebar from "@/components/Sidebar";
import React from "react";

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row min-h-[100vh] bg-bg-lightGreen">
        <Sidebar />
        <div className=" w-[83%] py-[30px] px-[50px]">{children}</div>
      </div>
    </>
  );
};

export default DashboardContainer;
