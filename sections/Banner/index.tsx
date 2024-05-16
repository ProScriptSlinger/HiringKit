"use client";

import Image from "next/image";
import PlayBtn from "@/components/PlayBtn";
import Modal from "@/components/Modal";
import { useState } from "react";

export default () => {
  const [modalVisible, setModalVisible] = useState<Boolean>(false);

  return (
    <>
      <div className="flex flex-col items-center gap-4 pt-16 px-4 relative">
        <div className="banner-polygon h-[480px] md:h-[672px]  absolute top-0 z-10" />
        <div className="z-20  text-white">
          <div className="text-[30px] md:text-[40px] lg:text-[55px] font-bold text-center">
            Screen Fast, Hire Top 1% Talent with <br />
            AI-Powered Video Interviews
          </div>
          <p className="text-center text-[17px] opacity-80">
            Discover the future of recruitment with HiringKit. Our AI-integrated
            platform generates interview questions,
            <br /> assesses candidates, and provides detailed evaluations,
            saving you time and improving hiring quality.
          </p>
          <div className="relative flex items-center justify-center">
            <div className="absolute">
              <PlayBtn onClick={() => setModalVisible(true)} />
            </div>
            <Image
              src={"/images/wof-hero.jpg"}
              width={768}
              height={432}
              alt="banner-image"
              className="pt-8 top-0 left-0"
            />
          </div>
        </div>
      </div>
      <Modal props={{ visible: modalVisible, setVisible: setModalVisible }}>
        <div className="max-w-[1124px] w-[80vw]">
          {modalVisible && (
            <video
              autoPlay={true}
              width="100%"
              height="100%"
              controls
              preload="none"
            >
              <source src="/videos/video_banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Modal>
    </>
  );
};
