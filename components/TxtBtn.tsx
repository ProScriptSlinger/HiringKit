import Link from "next/link";

export interface TxtBtnProp {
  label: string;
  path: string;
}

export default (props: TxtBtnProp) => {
  const { label, path } = props;
  return (
    <Link href={`/${path}`} passHref legacyBehavior>
      <div className="cursor-pointer text-[#94A3B8] px-4 hover:text-[#1666EA]">
        {label}
      </div>
    </Link>
  );
};
