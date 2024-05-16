interface FooterItemProps {
  title: string;
  content: string[];
}

export const Item = ({ label }: { label: string }) => (
  <div className="text-[#64748B] text-[14px] hover:text-[#2174EA] cursor-pointer">
    {label}
  </div>
);

export default (props: FooterItemProps) => {
  const { title, content } = props;
  return (
    <div className="flex flex-col gap-4 items-start w-full">
      <div className="font-bold">{title}</div>
      <div className="flex flex-col gap-1">
        {content.map((item, index) => (
          <Item label={item} key={index} />
        ))}
      </div>
    </div>
  );
};
