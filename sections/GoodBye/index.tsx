import Leave from "@/components/icons/Leave";
import Button from "./Button";

export default () => {
  return (
    <div className="bg-[#1F70E4]  py-16 md:py-32 mt-[100px] ">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-end  md:items-start">
          <div className=" text-[25px] md:text-[30px] lg:text-[40px] font-bold text-center text-white font-title">
            Try It Out
            {/* updates, and <span className="text-[#10B981]">confusion</span>. */}
          </div>
          <Leave />
        </div>
        <div className="text-center max-w-[768px] text-white mx-2">
          Request a Demo or Start Your Free Trial! Be among the first to
          experience the power of AI in video interviews. See why hiring
          managers will prefer HiringKit. No credit card required
        </div>
        <div className="w-[200px] border-[2px] border-[#1C64F2]/20">
          <Button />
        </div>
      </div>
    </div>
  );
};
