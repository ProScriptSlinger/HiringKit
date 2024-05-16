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

export default (props: TextPartProp) => {
  const { title, des, word, user } = props;

  return (
    <div className="flex flex-col max-w-[484px]">
      <div className="text-[#1E293B] text-[36px] font-bold">{title}</div>
      <div className="pl-4 border-l-2 border-black text-[#64748B] text-[18px]">
        {des}
      </div>
      <Comma />
      <div
        className="text-[#64748B] text-[16px] italic"
        style={{ fontFamily: "Playfair Display" }}
      >
        {word}
      </div>
      <div className="flex gap-1 items-center pt-4">
        <img
          src={user.avatar}
          alt={user.avatar}
          width={32}
          style={{ borderRadius: "100%" }}
        />
        <div className="text-[16px] font-medium">{user.name}</div>·
        <div className="text-[16px]  font-medium text-[#64748B]">
          {user.position}
        </div>
      </div>
    </div>
  );
};
