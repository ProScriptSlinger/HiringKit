import { BiCalendarCheck } from "react-icons/bi";
import { AiOutlineRobot } from "react-icons/ai";
import { MdBarChart } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";

interface UseItemProp {
  index: number;
  title: string;
  des: string;
}

export default (props: UseItemProp) => {
  const { index, title, des } = props;
  return (
    <div className="flex flex-col items-start gap-4">
      <div
        className="w-20 h-20  bg-[#2174EA] text-white hover:bg-gray-200 hover:text-[#2174EA] transition-all cursor-pointer flex justify-center items-center"
        style={{ borderRadius: "100%" }}
      >
        {index == 0 ? (
          <BiCalendarCheck size={30} />
        ) : index == 1 ? (
          <AiOutlineRobot size={30} />
        ) : index == 2 ? (
          <MdBarChart size={30} />
        ) : index == 3 ? (
          <FaShareAlt size={30} />
        ) : index == 4 ? (
          <FaPlug size={30} />
        ) : (
          <IoMdHappy size={30} />
        )}
      </div>
      <div className="font-bold text-[24px]">{title}</div>
      <div className="text-[#64748B]">{des}</div>
    </div>
  );
};
