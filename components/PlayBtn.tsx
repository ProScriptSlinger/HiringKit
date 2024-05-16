import { IoPlay } from "react-icons/io5";
import { MouseEventHandler } from "react";
const PlayBtn: React.FC<{
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}> = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`border-round w-20 h-20 bg-white rounded-full flex justify-center items-center opacity-80 cursor-pointer hover:opacity-100 ${className}`}
    >
      <IoPlay size={20} color="#2174EA" />
    </div>
  );
};

export default PlayBtn;
