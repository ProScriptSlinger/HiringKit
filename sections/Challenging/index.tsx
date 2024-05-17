"use client";
import { useState } from "react";
import IconBtn from "./IconBtn";
import { useEffect } from "react";
import "./BounceUpAnimation.css";
import ScrollAnimation from "react-scroll-animation-wrapper";
const data = [
  {
    label: "Overflow of Unqualified Applicants",
    des: "There are too many applications from unqualified job seekers, making it difficult to identify the right candidates.",
    imgSrc: "/images/features-home-01.jpg",
  },
  {
    label: "AI Resume Impact on Screening",
    des: "AI-generated resumes can bypass algorithms rather than showcase actual skills, severely affecting the screening process.",
    imgSrc: "/images/features-home-01.jpg",
  },
  {
    label: "Skill Exaggeration in Resumes",
    des: "Candidates often exaggerate their skills in resumes, making it difficult to accurately analyze them.",
    imgSrc: "/images/features-home-01.jpg",
  },
  {
    label: "Unconscious Bias in Screening",
    des: "Unconscious bias during screening might result in undeserving candidates being selected.",
    imgSrc: "/images/features-home-01.jpg",
  },
  {
    label: "Scalability Issues in Manual Screening",
    des: "Manual screening with 30-minute phone calls for each candidate is not scalable.",
    imgSrc: "/images/features-home-01.jpg",
  },
  {
    label: "Tech Talent Identification Challenges",
    des: "The huge number of applications for tech positions makes identifying qualified candidates a time-consuming and resource-intensive task.",
    imgSrc: "/images/features-home-01.jpg",
  },
];

export default () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [isBouncing, setIsBouncing] = useState<boolean>(false);
  const handleClick = (iconType: number) => {
    setActiveId(iconType);
    setIsBouncing(true);
    // Reset animation after a certain duration
    setTimeout(() => {
      setIsBouncing(false);
    }, 500); // Adjust duration as needed
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveId((prevState) => (prevState + 1 > 5 ? 0 : prevState + 1));
      setIsBouncing(true);
      // Reset animation after a certain duration
      setTimeout(() => {
        setIsBouncing(false);
      }, 500);
    }, 3000); // Update state every 1000ms (1 second)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center mt-16">
      <div className="bg-[#F1F5F9] w-full md:h-[670px] h-[400px]" />
      <div className="flex flex-col max-w-[768px] absolute top-0 pt-16">
        <div className="font-bold text-center text-[25px] md:text-[30px] lg:text-[40px]">
          Technical Screenings Can Be Challenging
        </div>
        <div
          className={`box ${
            isBouncing ? "bounce-up" : ""
          }  text-[18px] text-center min-h-[54px] mt-8`}
        >
          {data[activeId].des}
        </div>
        <div className="flex justify-between w-full pt-8">
          {data.map((item, index) => (
            <IconBtn
              key={index}
              iconType={index}
              label={item.label}
              onClick={handleClick}
              isActive={index !== activeId}
            />
          ))}
        </div>
        <ScrollAnimation
          animateOnlyOnScrollDown={false}
          initiallyVisible={true}
          animateOnce={true}
          animateIn={"animate__fadeInUp"}
          animateOut="animate__fadeOut"
          offset={-100}
          delay={200}
          duration={0.4}
        >
          <div className={`max-w-[768px] mt-8 shadow-lg`}>
            <img
              src={data[activeId].imgSrc}
              width="100%"
              alt={data[activeId].label}
            />
          </div>
        </ScrollAnimation>
      </div>
      <div className=" mt-[260px]" />
    </div>
  );
};
