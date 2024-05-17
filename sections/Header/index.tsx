"use client";
import menu from "./menu";
import { TxtBtnProp } from "@/components/TxtBtn";
import TxtBtn from "@/components/TxtBtn";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/utils/customHooks";
import Logo from "@/components/icons/Logo";
import Dropdown from "@/components/Dropdown";

export default () => {
  const [isSticky, setSticky] = useState<boolean>(false);

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
      className="py-4 bg-[#101D2D] flex items-center justify-around z-50 transition-all"
      style={{
        position: isSticky ? "fixed" : "static",
        top: 0,
        width: "100%",
      }}
    >
      {screenSize == "sm" || !screenSize ? (
        <div className="flex items-center justify-between w-full px-4 md:px-8">
          <div className="flex flex-col items-center text-white mr-4">
            <Logo />
            <div className="font-bold text-[14px]">HiringKit</div>
          </div>

          <Dropdown
            list={[
              ...menu,
              { label: "Sign in", path: "signin" },
              { label: "Sign up", path: "signup" },
            ]}
          />
          {/* {menu.map((item, index) => (
            <TxtBtn key={index} {...item} />
          ))} */}
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <div className="flex flex-col items-center text-white mr-4">
              <Logo />
              <div className="font-bold text-[14px]">HiringKit</div>
            </div>

            {menu.map((item, index) => (
              <TxtBtn key={index} {...item} />
            ))}
          </div>
          <div className="flex">
            <TxtBtn label="Sign in" path="signin" />
            <TxtBtn label="Sign up" path="signup" />
          </div>
        </>
      )}
    </div>
  );
};
