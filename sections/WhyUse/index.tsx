"use client";
import { tree } from "next/dist/build/templates/app-page";
import { data } from "./data";
import WhyItem from "./WhyItem";
import ScrollAnimation from "react-scroll-animation-wrapper";
export default () => {
  return (
    <div className="flex flex-col items-center" id="use">
      <div className="border-b-2 border-[#F1F5F9] w-[60vw] mt-[40px]" />
      <ScrollAnimation
        animateOnlyOnScrollDown={false}
        initiallyVisible={false}
        animateOnce={true}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        offset={-100}
        delay={200}
        duration={0.7}
      >
        <div className="font-extrabold text-center pt-[40px] md:pt-[80px] text-[25px] md:text-[30px] lg:text-[40px] px-2 font-title">
          Why Use HiringKit’s AI-Powered Video <br></br>Interview Software?
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnlyOnScrollDown={false}
        initiallyVisible={false}
        animateOnce={true}
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        offset={-100}
        delay={200}
        duration={0.7}
      >
        <div className="grid grid-cols-12 gap-12 px-2 md:px-20 pt-[30px] w-full max-w-[1400px]">
          {data.map((item, index) => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 px-2">
              <WhyItem key={index} {...item} index={index} />
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};
