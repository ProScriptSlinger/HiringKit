import Leave from "@/components/icons/Leave";
import Button from "./Button";

export default () => {
  return (
    <div className="bg-[#F1F5F9]  py-32 mt-16">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-start">
          <div className="text-[48px] font-bold text-center text-[#1e293b]">
            Say goodbye to long queues, big <br />
            updates, and <span className="text-[#10B981]">confusion</span>.
          </div>
          <Leave />
        </div>
        <div className="text-center max-w-[768px] text-[#64748B]">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum — semper quis lectus nulla
          at volutpat diam ut venenatis.
        </div>
        <Button />
      </div>
    </div>
  );
};
