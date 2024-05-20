import IconBtn from "./IconBtn";

export default ({
  des,
  index,
  title,
  activeId,
  setActiveId,
}: {
  activeId: number;
  setActiveId: Function;
  title: string;
  des: string;
  index: number;
}) => {
  return (
    <div
      className={`max-w-[540px] p-4 border-[#EAEAEA] flex justify-center items-center gap-4 rounded-md cursor-pointer ${
        index == activeId ? "bg-[#EAEAEA]" : "bg-transparent"
      } transition-all`}
      style={{ borderWidth: "1px" }}
      onClick={() => setActiveId(index)}
    >
      <div className="flex flex-col items-start gap-2">
        <div className="font-bold text-black">{title}</div>
        <div className="text-[#49505a]">{des}</div>
      </div>
      <IconBtn iconType={index} isActive={false} />
    </div>
  );
};
