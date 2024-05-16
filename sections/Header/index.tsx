"use client";
import menu from "./menu";
import { TxtBtnProp } from "@/components/TxtBtn";
import TxtBtn from "@/components/TxtBtn";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/utils/customHooks";

export default () => {
  const [isSticky, setSticky] = useState<boolean>(false);

  // Usage in a component
  const screenSize = useScreenSize();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
      className="py-4 bg-[#101D2D] flex justify-around z-50"
      style={{
        position: isSticky ? "fixed" : "static",
        top: 0,
        width: "100%",
      }}
    >
      <div className="flex">
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
