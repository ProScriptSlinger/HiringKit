import { MouseEventHandler } from "react";

import { FaUserTimes } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoIosEye } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { DiTechcrunch } from "react-icons/di";

const IconBtn: React.FC<{
  isActive: boolean;
  className?: string;
  iconType: number;
}> = ({ className, iconType, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${
        isActive && "opacity-60"
      } `}
    >
      <div
        className={`border-round shadow-md h-12 w-12 bg-white rounded-full flex justify-center items-center  cursor-pointer ${className}`}
      >
        {iconType == 0 ? (
          <FaUserTimes
            size={isActive ? 8 : 25}
            className=" transition-all"
            color="black"
          />
        ) : iconType == 1 ? (
          <AiOutlineRobot
            size={isActive ? 8 : 25}
            className=" transition-all"
            color="black"
          />
        ) : iconType == 2 ? (
          <GiMagnifyingGlass
            size={isActive ? 8 : 25}
            className=" transition-all"
            color="black"
          />
        ) : iconType == 3 ? (
          <IoIosEye
            size={isActive ? 8 : 25}
            className=" transition-all"
            color="black"
          />
        ) : iconType == 4 ? (
          <FaPhone
            size={isActive ? 8 : 25}
            className=" transition-all"
            color="black"
          />
        ) : (
          <DiTechcrunch
            size={isActive ? 10 : 25}
            className=" transition-all"
            color="black"
          />
        )}
      </div>
    </div>
  );
};

export default IconBtn;
