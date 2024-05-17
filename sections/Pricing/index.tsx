"use client";
import { useState } from "react";
import { data } from "./data";
import CustomSpin from "./CustomSpin";
import Card from "./Card";
import ScrollAnimation from "react-scroll-animation-wrapper";

export default () => {
  const [isYearly, setYearly] = useState<boolean>(false);
  return (
    <div id="prices">
      <div className="relative flex flex-col items-center mt-[60px]">
        <div className="bg-[#101D2D] w-full h-[670px]" />
        <div className="flex flex-col items-center  absolute top-0 pt-16">
          <div className="font-bold text-[48px] text-center max-w-[768px]">
            <div className="text-[48px] text-[#F1F5F9] font-bold text-center">
              Find the right plan for your <br />
              business
            </div>
            <CustomSpin checked={isYearly} setChecked={setYearly} />
          </div>
          <div className="grid grid-rows-4 grid-flow-col md:grid-rows-2 lg:grid-rows-1 gap-4 mt-16">
            {data.map((item, index) => (
              <ScrollAnimation
                animateOnlyOnScrollDown={false}
                initiallyVisible={false}
                animateOnce={true}
                animateIn={"animate__fadeIn"}
                animateOut="animate__fadeOut"
                offset={-100}
                delay={200}
                duration={0.7}
              >
                <Card isYearly={isYearly} key={index} {...item} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
