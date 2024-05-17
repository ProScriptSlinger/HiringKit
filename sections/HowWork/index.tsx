"use client";
import "./how.css";
import { data } from "./data";
import HowItem from "./HowItem";
import ScrollAnimation from "react-scroll-animation-wrapper";

export default () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mt-16 relative w-full">
        <div className="banner-polygon h-[480px] md:h-[550px]" />
        <div className="absolute top-20 flex flex-col  px-16 w-full">
          <div className="text-[48px] text-center text-white font-bold">
            How It Works
          </div>
          <div className="flex gap-16 pt-16 justify-center">
            {data.map((item, index) => (
              <ScrollAnimation
                animateOnlyOnScrollDown={false}
                initiallyVisible={false}
                animateOnce={true}
                animateIn={
                  index % 2 == 0 ? "animate__fadeInUp" : "animate__fadeIn"
                }
                animateOut="animate__fadeOut"
                offset={-100}
                delay={200}
                duration={0.4}
              >
                <HowItem key={index} index={index} {...item} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
      <div className="border-b-2 border-[#F1F5F9] w-full my-4 max-w-[1104px] mt-[300px]" />
    </div>
  );
};
