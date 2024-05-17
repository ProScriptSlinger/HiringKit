"use client";
import Testinominal from "./Testinominal";
import { content } from "./testinominals";
import ScrollAnimation from "react-scroll-animation-wrapper";

export default () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      {content.map((item, index) => (
        <ScrollAnimation
          animateOnlyOnScrollDown={false}
          initiallyVisible={false}
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
