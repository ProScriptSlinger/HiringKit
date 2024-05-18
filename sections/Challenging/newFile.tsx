"use client";
import Card from "./Card";
import { useState } from "react";
import { data } from ".";

export default () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  return (
    <div className="flex flex-col items-center relative mt-[50px]">
      <div className="bg-[#FBFBFB] w-full md:h-[670px] h-[400px]" />
      <div className="flex flex-col items-center w-full absolute gap-8 top-5 mt-8">
        <div className="font-bold text-center text-[25px] md:text-[30px] lg:text-[40px]">
          Technical Screenings Can Be Challenging
        </div>
        <div className="max-w-[1152px] flex items-center gap-4">
          <div className="flex flex-col gap-4">
            {data.map(
              (item, index) =>
                ((page == 0 && index < 3) || (page == 1 && index < 5)) && (
                  <div key={index}>
                    <Card
                      key={index}
                      activeId={activeId}
                      setActiveId={setActiveId}
                      index={index}
                      {...item}
                    />
                  </div>
                )
            )}
            <div className="flex gap4">
              <div className="border-[#F1F5F9] radius-full p-4" />
            </div>
          </div>
          <div>
            <img
              src={data[activeId].imgSrc}
              alt={data[activeId].title}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
