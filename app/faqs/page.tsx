"use client";

import { useState } from "react";
import CollapseItem from "./CollapseItem";
import { data } from "./data";
import Breadcrumb from "@/components/Breadcrumb";

const Faqs = () => {
  const [activeId, setActiveId] = useState<number>(-1);
  return (
    <>
      {/* <Breadcrumb path="Faqs" /> */}
      <div className="flex flex-col px-2 sm:px-8 md:px-16 transition-all py-8">
        <div className="text-[25px] py-6 md:text-[30px] lg:text-[40px] font-title text-center">
          {`FAQ's`}
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
    </>
  );
};

export default Faqs;
