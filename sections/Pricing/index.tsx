"use client";
import { useState } from "react";
import { data } from "./data";
import CustomSpin from "./CustomSpin";
import Card from "./Card";
import ScrollAnimation from "react-scroll-animation-wrapper";

export default () => {
  const [isYearly, setYearly] = useState<boolean>(false);
  return (
    <div id="prices" className="bg-[#FCFCFC]">
      <div className="relative flex flex-col items-center py-[20px]">
        {/* <div className="bg-[#FBFBFB] w-full h-[670px]" /> */}
        <div className="flex flex-col items-center  ">
          <div className="font-bold text-[48px] text-center max-w-[768px]">
            <div className="text-black/90 font-extrabold text-center text-[25px] md:text-[30px] lg:text-[40px] font-title">
              Find the right plan for your <br />
              business
            </div>
            <CustomSpin checked={isYearly} setChecked={setYearly} />
          </div>
          <div className="grid grid-rows-4 grid-flow-col md:grid-rows-2 lg:grid-rows-1 gap-4 mt-8">
            {data.map((item, index) => (
              // <ScrollAnimation
              //   animateOnlyOnScrollDown={false}
              //   initiallyVisible={false}
              //   animateOnce={true}
              //   animateIn={"animate__fadeIn"}
              //   animateOut="animate__fadeOut"
              //   offset={-100}
              //   delay={200}
              //   duration={0.7}
              // >
              <Card isYearly={isYearly} key={index} {...item} />
              // </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
