import { FaCheck } from "react-icons/fa";
import Button from "../GoodBye/Button";
import Chip from "./Chip";
interface CardItemProp {
  price: string;
  des: string;
  title: string;
  services: string[];
  isPopular?: boolean;
  isYearly: boolean;
}

export default (props: CardItemProp) => {
  const { price, des, title, services, isYearly, isPopular } = props;

  return (
    <div className=" max-w-[304px]  bg-white shadow-lg">
      <div className="p-8 flex flex-col gap-8 justify-between relative min-h-[635px]">
        {isPopular && (
          <div className="absolute -top-2 right-3">
            <Chip />
          </div>
        )}
        <div className="flex flex-col">
          <div className="font-semibold text-[30px] font-title">{title}</div>
          <div className="flex gap-1 items-center">
            <span className="text-[32px] font-medium text-[#64748B]">$</span>
            <span
              className="text-[48px] font-semibold"
              style={{ fontFamily: "Playfair Display" }}
            >
              {isYearly ? (parseFloat(price) * 12 * 0.7).toFixed(1) : price}
            </span>
            <span className="text-[18px] font-medium text-[#64748B] mt-4">
              /mo
            </span>
          </div>
          <div className="text-[#64748B] text-[16px]">{des}</div>
          <div className="border-b-2 border-[#F1F5F9] w-full my-4 max-w-[80vw]" />
          <div className="flex flex-col gap-1">
            {services.map((item, index) => (
              <div
                className="flex items-center gap-2 -ml-4 italic text-[18px]"
                style={{ fontFamily: "Playfair Display" }}
              >
                <FaCheck color="#10AA81" size={16} />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-[10px] border-[#F1F5F9]">
          <Button label="Start free trial" />
        </div>
      </div>
    </div>
  );
};
