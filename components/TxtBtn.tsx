import Link from "next/link";

export interface TxtBtnProp {
  label: string;
  path: string;
}

const TxtBtn = (props: TxtBtnProp) => {
  const scrolltoHash = function (element_id: any) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  const { label, path } = props;
  return (
    <div
      className="cursor-pointer text-[#94A3B8] px-4 hover:text-[#1666EA]"
      onClick={() => scrolltoHash(path)}
    >
      {label}
    </div>
  );
};
export default TxtBtn;
