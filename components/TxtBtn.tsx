import Link from "next/link";

export interface TxtBtnProp {
  label: string;
  path: string;
}

const TxtBtn = (props: TxtBtnProp) => {
  const { label, path } = props;
  const scrolltoHash = function (element_id: any) {
    if (element_id == "faqs" || element_id == "prices") {
    } else {
      const element = document.getElementById(element_id);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <div
      className="cursor-pointer font-bold text-black/80 px-4 hover:text-[#2174EA]"
      onClick={() => scrolltoHash(path)}
    >
      {label == "Faqs" ? (
        <Link href="/faqs">{label}</Link>
      ) : label == "Pricing" ? (
        <Link href="/pricing">{label}</Link>
      ) : (
        label
      )}
    </div>
  );
};
export default TxtBtn;
