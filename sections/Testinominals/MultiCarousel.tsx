"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Comma from "@/components/icons/Comma";
import Image from "next/image";

interface PropType {
  word: string;
  avatar: string;
  name: string;
  position: string;
}
interface CarouselProps {
  items: PropType[];
}

const MultiCarousel = (props: CarouselProps) => {
  const items = props.items;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Testinominal = (props: PropType) => {
    const { word, avatar, name, position } = props;
    return (
      <div className="radius-4 mx-16 flex flex-col gap-4 p-4 min-h-[220px] justify-between max-w-[288px] bg-slate-50 shadow-sm rounded-md">
        <div>
          <Comma />
          <div className="text-[#94A3B8]">{word}</div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={avatar}
              alt={name}
              width={30}
              height={30}
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div className="flex-col">
            <div className="text-[18px] font-bold gap-2">{position}</div>
            <div>{name}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true} // Enable autoplay
      autoPlaySpeed={3000} // Set autoplay speed (in milliseconds)
      infinite={true} // Enable infinite loop
      className=""
    >
      {items.map((item, index) => (
        <div key={index}>
          <Testinominal {...item} />
        </div>
      ))}
    </Carousel>
  );
};

export default MultiCarousel;
