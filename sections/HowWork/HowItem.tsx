import Image from "next/image";
import NumOne from "@/components/icons/NumOne";
import NumTwo from "@/components/icons/NumTwo";
import NumThree from "@/components/icons/NumThree";
interface HowItemProp {
  index: number;
  imgSrc: string;
  title: string;
  des: string;
}

export default (props: HowItemProp) => {
  const { imgSrc, title, des, index } = props;
  return (
    <div className="flex flex-col items-start gap-8 w-[400px]">
      <div className="how-item-container flex flex-col w-[341px] h-[341px]">
        <div
          className={`item-border border-2 border-[#c2cfe63a] w-full h-full`}
        />
        <img
          className="absolute top-0 left-0 item-img"
          src={imgSrc}
          alt={imgSrc}
        />
        <div
          className={`absolute translate-x-10 -translate-y-10  w-full h-full`}
        >
          {index == 0 ? <NumOne /> : index == 1 ? <NumTwo /> : <NumThree />}
        </div>
      </div>
      <div className="text-[24px] font-bold">{title}</div>
      <div className="text-[#64748B]">{des}</div>
    </div>
  );
};
