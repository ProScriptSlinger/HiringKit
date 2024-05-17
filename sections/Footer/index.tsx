import { data } from "./data";
import FooterItem from "./FooterItem";
import Logo from "@/components/icons/Logo";
import { Item } from "./FooterItem";

const data2 = [
  {
    label: "Blog",
    path: "",
  },
  {
    label: "Cookies",
    path: "",
  },
  {
    label: "Privacy Policy",
    path: "",
  },
  {
    label: "Terms of Use",
    path: "",
  },
];

export default () => {
  return (
    <div className="flex flex-col w-full items-center py-8  bg-[#101D2D] ">
      {/* <div className="grid grid-cols-10 gap-8 py-10 max-w-[1200px]">
        <div className="col-span-2 justify-center">
          <div className="flex flex-col gap-2">
            <Logo />
            <div className="text-[17px] font-bold">
              The smarter way to start your next idea.
            </div>
          </div>
        </div>
        {data.map((item, index) => (
          <div className="col-span-2 justify-center">
            <FooterItem key={index} {...item} />
          </div>
        ))}
      </div> */}
      {/* <div className="border-b-2 border-[#F1F5F9] w-full my-4 max-w-[1104px]" /> */}
      <div className="flex justify-between w-full max-w-[1200px] py-4">
        <div className="text-[#94A3B8] text-[14px]">
          © 2024 <span className=" cursor-pointer">http://HiringKit.co.</span>{" "}
          All rights reserved.
        </div>
        <div className="flex gap-8">
          {data2.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
