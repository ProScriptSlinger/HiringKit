import Leave from "@/components/icons/Leave";
import Button from "./Button";

export default () => {
  return (
    <div className="bg-[#F1F5F9]  py-32 mt-[50px]">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-start">
          <div className="text-[48px] font-bold text-center text-[#1e293b]">
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
        <Button />
      </div>
    </div>
  );
};
