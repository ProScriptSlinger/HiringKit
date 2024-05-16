import Image from "next/image";
import ElevateItem from "./ElevateItem";
import { data } from "./data.ts";

export default () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-[360px] px-4">
      <div className="border-b-2 border-[#F1F5F9] w-[60vw] mb-8" />
      <div className="text-[48px] font-bold text-center">
        Elevate Your Hiring Process with <br />
        AI-Powered Solutions
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-8 max-w-[800px]">
          {data.map((item, index) => (
            <ElevateItem key={index} index={index} {...item} />
          ))}
        </div>
        <Image
          src="/images/target.png"
          width={540}
          height={540}
          alt="Traget"
        ></Image>
      </div>
    </div>
  );
};
