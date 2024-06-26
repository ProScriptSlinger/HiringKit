"use client";
import menu from "./menu";
import { submenu } from "./menu";
import { TxtBtnProp } from "@/components/TxtBtn";
import TxtBtn from "@/components/TxtBtn";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/utils/customHooks";
import Logo from "@/components/icons/Logo";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuType {
  label: string;
  path: string;
}
export default () => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const pathname = usePathname();
  // Usage in a component
  const [currentMenu, setMenu] = useState<MenuType[]>(menu);
  const screenSize = useScreenSize();
  useEffect(() => {
    if (pathname == "/pricing" || pathname == "/faqs") setMenu(submenu);
    else setMenu(menu);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className="py-4 bg-[#FBFBFB] flex items-center justify-around z-50 transition-all font-title"
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
          <Link href="/">
            <div className="flex  items-center text-black mr-4 cursor-pointer">
              <Logo />
              <div className="font-bold text-[24px]">HiringKit</div>
            </div>
          </Link>

          <Dropdown
            list={[
              ...currentMenu,
              { label: "Sign in", path: "signin" },
              { label: "Sign up", path: "signup" },
            ]}
          />
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <Link href="/">
              <div className="flex  items-center text-black mr-8 cursor-pointer">
                <Logo />
                <div className="font-bold text-[24px]">HiringKit</div>
              </div>
            </Link>

            {currentMenu.map((item, index) => (
              <TxtBtn key={index} {...item} />
            ))}
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-[#1E70E3] hover:text-[#28A0FA] font-semibold cursor-pointer ">
              Sign In
            </div>
            <div className="hover:bg-[#28A0FA] rounded-full px-4 py-1 bg-[#1E70E3] text-white font-semibold cursor-pointer">
              Sign Up
            </div>
          </div>
        </>
      )}
    </div>
  );
};
