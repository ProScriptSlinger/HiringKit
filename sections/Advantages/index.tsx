"use client";
import Testinominal from "./Testinominal";
import { content } from "./testinominals";
import ScrollAnimation from "react-scroll-animation-wrapper";

export default () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <div className="border-b-2 border-[#F1F5F9] w-full my-4 max-w-[70vw] mt-[200px] md:mt-[300px]" />

      {content.map((item, index) => (
        <ScrollAnimation
          animateOnlyOnScrollDown={false}
          initiallyVisible={true}
          animateOnce={true}
          animateIn={
            index % 2 == 0 ? "animate__fadeInLeft" : "animate__fadeInRight"
          }
          animateOut="animate__fadeOut"
          offset={-100}
          delay={200}
          duration={0.4}
        >
          <Testinominal
            key={index}
            videoProp={item.videoProp}
            textProp={item.textProp}
          />
        </ScrollAnimation>
      ))}
    </div>
  );
};
