import Link from "next/link";

export interface TxtBtnProp {
  label: string;
  path: string;
  setModalVisible: Function;
}

const TxtBtn = (props: TxtBtnProp) => {
  const { label, path, setModalVisible } = props;
  const scrolltoHash = function (element_id: any) {
    if (element_id == "faqs") {
      setModalVisible(true);
    } else {
      const element = document.getElementById(element_id);
      element?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  return (
    <div
      className="cursor-pointer font-bold text-black/80 px-4 hover:text-[#2174EA]"
      onClick={() => scrolltoHash(path)}
    >
      {label}
    </div>
  );
};
export default TxtBtn;
