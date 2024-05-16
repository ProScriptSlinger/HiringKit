import { data } from "./data";
import WhyItem from "./WhyItem";
export default () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-b-2 border-[#F1F5F9] w-[60vw] mt-[40px]" />
      <div className="grid grid-cols-12 gap-12 px-20 pt-[80px]">
        {data.map((item, index) => (
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <WhyItem key={index} {...item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};
