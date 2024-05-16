import "./how.css";
import { data } from "./data";
import HowItem from "./HowItem";
export default () => {
  return (
    <div className="mt-16 relative w-full">
      <div className="banner-polygon h-[480px] md:h-[550px]" />
      <div className="absolute top-20 flex flex-col  px-16 w-full">
        <div className="text-[48px] text-center text-white font-bold">
          How It Works
        </div>
        <div className="flex gap-16 pt-16 justify-center">
          {data.map((item, index) => (
            <HowItem key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
