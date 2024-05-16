import SemiComma from "@/components/icons/SemiComma";
import { title } from "process";

interface ElevateItemProp {
  color: string;
  title: string;
  des: string;
  key: number;
  index: number;
}
export default (props: ElevateItemProp) => {
  const { color, title, des, index } = props;
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <SemiComma index={index} color={color} />
        <div className="text-[30px]">{title}</div>
      </div>
      <div>{des}</div>
    </div>
  );
};
