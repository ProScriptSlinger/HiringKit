import Leave from "@/components/icons/Leave";
import Button from "./Button";

export default () => {
  return (
    <div className="bg-[#F1F5F9]  py-16 md:py-32 mt-[2400px] md:mt-[1170px] lg:mt-[300px] ">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-end  md:items-start">
          <div className=" text-[25px] md:text-[30px] lg:text-[40px] font-bold text-center text-[#1e293b]">
            Try It Out
            {/* updates, and <span className="text-[#10B981]">confusion</span>. */}
          </div>
          <Leave />
        </div>
        <div className="text-center max-w-[768px] text-[#64748B]">
          Request a Demo or Start Your Free Trial! Be among the first to
          experience the power of AI in video interviews. See why hiring
          managers will prefer
          <span className="text-[#10B981] mx-2 text-[18px]">HiringKit</span>. No
          credit card required
        </div>
        <div className="w-[170px]">
          <Button />
        </div>
      </div>
    </div>
  );
};
