import Comma from "@/components/icons/Comma";

export interface TextPartProp {
  title: string;
  des: string;
  word: string;
  user: {
    avatar: string;
    name: string;
    position: string;
  };
}

export default (props: { textProp: TextPartProp[] }) => {
  const { textProp } = props;

  return (
    <div className="flex flex-col gap-4 px-2">
      {textProp.map((item, index) => (
        <div className="flex flex-col max-w-[484px] gap-1 md:gap-2">
          <div className="text-[#1E293B] font-bold text-[24px] md:text-[26px] lg:text-[30px] font-title">
            {item.title}
          </div>
          <div className="pl-4 border-l-2 border-black text-[#64748B] text-[20px] md:text-[22px] ">
            {item.des}
          </div>
          {/* <Comma /> */}
          <div className="flex items-center gap-2 px-2">
            <div
              className=" text-[20px]"
              // style={{ fontFamily: "Playfair Display" }}
            >
              {item.word}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
