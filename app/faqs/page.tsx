"use client";

import { useState } from "react";
import CollapseItem from "./CollapseItem";
import { data } from "./data";

const Faqs = () => {
  const [activeId, setActiveId] = useState<number>(-1);
  return (
    <div className="flex flex-col px-2 sm:px-8 md:px-16 transition-all bg-[#FCFCFC] pb-8">
      {/* <Link href="/">
        <FaHome
          className="my-8 text-black/70 cursor-pointer hover:text-[#1C64F2]/70"
          size={30}
        />
      </Link> */}
      <div className="text-[25px] pb-2 md:text-[30px] lg:text-[40px] font-title text-center">
        FAQ's
      </div>
      {data.map((item, index) => (
        <CollapseItem
          index={index}
          key={index}
          {...item}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
};

export default Faqs;
