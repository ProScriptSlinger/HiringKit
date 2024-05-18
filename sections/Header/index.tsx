"use client";
import menu from "./menu";
import { TxtBtnProp } from "@/components/TxtBtn";
import TxtBtn from "@/components/TxtBtn";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/utils/customHooks";
import Logo from "@/components/icons/Logo";
import Dropdown from "@/components/Dropdown";
import Modal from "@/components/Modal";

export default () => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<Boolean>(false);

  // Usage in a component
  const screenSize = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="py-4 bg-[#FBFBFB] flex items-center justify-around z-50 transition-all "
      style={{
        position: isSticky ? "fixed" : "static",
        boxShadow: "0 2px 4px 0 #00000012",
        top: 0,
        width: "100%",
        zIndex: 9999999,
      }}
    >
      {screenSize == "sm" || !screenSize ? (
        <div className="flex items-center justify-between w-full px-4 md:px-8">
          <div className="flex flex-col items-center text-black mr-4">
            <Logo />
            <div className="font-bold text-[14px]">HiringKit</div>
          </div>

          <Dropdown setModalVisible={setModalVisible} list={menu} />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <div className="flex flex-col items-center text-black mr-8">
              <Logo />
              <div className="font-bold text-[14px]">HiringKit</div>
            </div>

            {menu.map((item, index) => (
              <TxtBtn key={index} {...item} />
            ))}
          </div>
        </>
      )}
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
              <source src={"/videos/video_banner.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Modal>
    </div>
  );
};
