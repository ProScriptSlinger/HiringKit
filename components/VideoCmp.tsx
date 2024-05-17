"use client";

import { useState } from "react";
import Image from "next/image";
import PlayBtn from "./PlayBtn";
import Modal from "./Modal";

export interface VideoProp {
  imgSrc: string;
  videoSrc?: string;
  left?: boolean;
}

const VideoCmp = (props: VideoProp) => {
  const [modalVisible, setModalVisible] = useState<Boolean>(false);
  const { imgSrc, videoSrc, left } = props;

  return (
    <>
      <div className="relative flex items-center justify-center w-[540px] h-[250px] md:h-[402px]  max-w-[85vw]">
        <div className="relative top-0 left-0 w-full h-full">
          <div
            className={`${
              left ? "-translate-x-4" : "translate-x-4"
            } -translate-y-4  border-2 border-[#E2E8F0] w-full h-full`}
          />
          <Image
            className="absolute top-0 left-0"
            src={imgSrc}
            width={540}
            height={405}
            alt={imgSrc}
          />
        </div>
        <div className="absolute">
          <PlayBtn onClick={() => setModalVisible(true)} />
        </div>
      </div>
      <Modal props={{ visible: modalVisible, setVisible: setModalVisible }}>
        <div className="max-w-[1124px] w-[80vw]">
          {modalVisible && (
            <video
              autoPlay
              loop
              width="100%"
              height="100%"
              controls
              preload="none"
            >
              <source
                src={videoSrc || "/videos/video_banner.mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Modal>
    </>
  );
};

export default VideoCmp;
