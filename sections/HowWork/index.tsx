"use client";
import "./how.css";
import { data } from "./data";
import HowItem from "./HowItem";
import ScrollAnimation from "react-scroll-animation-wrapper";

export default () => {
  return (
    <div
      id="work"
      className="flex flex-col items-center gap-4 h-[2080px] lg:h-[700px]"
    >
      <div className="mt-16 relative w-full">
        <div className="banner-polygon h-[480px]" />
        <div className="absolute top-20 flex flex-col px-16 w-full">
          <div className="text-center text-black/90 font-extrabold text-[25px] md:text-[30px] lg:text-[40px] font-title">
            How It Works
          </div>
          <div className="flex flex-col lg:flex-row items-start gap-16 pt-16 justify-center">
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
                duration={0.7}
              >
                <HowItem key={index} index={index} {...item} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
