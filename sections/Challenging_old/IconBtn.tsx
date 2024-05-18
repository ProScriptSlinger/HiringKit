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
  label: string;
  onClick: Function;
}> = ({ className, onClick, iconType, label, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 ${
        isActive && "opacity-60"
      } `}
    >
      <div
        onClick={() => onClick(iconType)}
        className={`border-round h-16 w-16 bg-white rounded-full flex justify-center items-center  cursor-pointer ${className}`}
      >
        {iconType == 0 ? (
          <FaUserTimes
            size={isActive ? 18 : 25}
            className=" transition-all"
            color="#2174EA"
          />
        ) : iconType == 1 ? (
          <AiOutlineRobot
            size={isActive ? 18 : 25}
            className=" transition-all"
            color="#2174EA"
          />
        ) : iconType == 2 ? (
          <GiMagnifyingGlass
            size={isActive ? 18 : 25}
            className=" transition-all"
            color="#2174EA"
          />
        ) : iconType == 3 ? (
          <IoIosEye
            size={isActive ? 18 : 25}
            className=" transition-all"
            color="#2174EA"
          />
        ) : iconType == 4 ? (
          <FaPhone
            size={isActive ? 18 : 25}
            className=" transition-all"
            color="#2174EA"
          />
        ) : (
          <DiTechcrunch
            size={isActive ? 18 : 25}
            className=" transition-all"
            color="#2174EA"
          />
        )}
      </div>
      {/* <div>{label}</div> */}
    </div>
  );
};

export default IconBtn;
