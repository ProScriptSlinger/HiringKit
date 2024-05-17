"use client";
import menu from "./menu";
import { TxtBtnProp } from "@/components/TxtBtn";
import TxtBtn from "@/components/TxtBtn";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/utils/customHooks";
import Logo from "@/components/icons/Logo";

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
      <div className="flex items-center">
        <Logo />
        {menu.map((item, index) => (
          <TxtBtn key={index} {...item} />
        ))}
      </div>
      <div className="flex">
        <TxtBtn label="Sign in" path="signin" />
        <TxtBtn label="Sign up" path="signup" />
      </div>
    </div>
  );
};
