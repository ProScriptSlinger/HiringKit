"use client";

import { FaHome } from "react-icons/fa";
import { useState } from "react";
import CollapseItem from "./CollapseItem";
import { data } from "./data";
import Link from "next/link";

const Faqs = () => {
  const [activeId, setActiveId] = useState<number>(-1);
  return (
    <div className="flex flex-col p-8 transition-all">
      {/* <Link href="/">
        <FaHome
          className="my-8 text-black/70 cursor-pointer hover:text-[#1C64F2]/70"
          size={30}
        />
      </Link> */}
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
