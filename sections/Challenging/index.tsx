"use client";
import Card from "./Card";
import { useState } from "react";
import ScrollAnimation from "react-scroll-animation-wrapper";

const data = [
  {
    title: "Overflow of Unqualified Applicants",
    des: "There are too many applications from unqualified job seekers, making it difficult to identify the right candidates.",
    imgSrc: "/images/tech-bg-1.jpg",
  },
  {
    title: "AI Resume Impact on Screening",
    des: "AI-generated resumes can bypass algorithms rather than showcase actual skills, severely affecting the screening process.",
    imgSrc: "/images/tech-bg-2.jpg",
  },
  {
    title: "Skill Exaggeration in Resumes",
    des: "Candidates often exaggerate their skills in resumes, making it difficult to accurately analyze them.",
    imgSrc: "/images/tech-bg-3.jpg",
  },
  {
    title: "Unconscious Bias in Screening",
    des: "Unconscious bias during screening might result in undeserving candidates being selected.",
    imgSrc: "/images/tech-bg-4.jpg",
  },
  {
    title: "Scalability Issues in Manual Screening",
    des: "Manual screening with 30-minute phone calls for each candidate is not scalable.",
    imgSrc: "/images/tech-bg-5.jpg",
  },
  {
    title: "Tech Talent Identification Challenges",
    des: "The huge number of applications for tech positions makes identifying qualified candidates a time-consuming and resource-intensive task.",
    imgSrc: "/images/tech-bg-6.jpg",
  },
];

export default () => {
  const [activeId, setActiveId] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  return (
    <div className="flex flex-col items-start relative mt-[50px]">
      <div className="bg-[#FBFBFB] w-full md:h-[650px] h-[400px]" />
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
        <div className="flex flex-col items-center w-full absolute gap-8 top-5 mt-8 px-4">
          <div className="font-bold text-center text-[25px] md:text-[30px] lg:text-[40px]">
            Technical Screenings Can Be Challenging
          </div>
          <div className="max-w-[1200px] flex flex-col lg:flex-row items-start gap-4 transition-all">
            <div className="flex flex-col items-center gap-4">
              {data.map(
                (item, index) =>
                  ((page == 0 && index < 3) ||
                    (page == 1 && index > 2 && index < 6)) && (
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
              <div className="flex gap-4">
                <div
                  className={`${
                    page == 0 ? "border-black" : "border-[#F1F5F9]"
                  } border-2 rounded-full p-2 px-4 text-black`}
                  onClick={() => setPage(0)}
                >
                  1
                </div>
                <div
                  className={`${
                    page == 1 ? "border-black" : "border-[#F1F5F9]"
                  } border-2 rounded-full p-2 px-4 text-black`}
                  onClick={() => setPage(1)}
                >
                  2
                </div>
              </div>
            </div>
            <div>
              <img
                src={data[activeId].imgSrc}
                alt={data[activeId].title}
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};
