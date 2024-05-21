import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface PropType {
  path: string;
}

const Breadcrumb = (props: PropType) => {
  const { path } = props;

  return (
    <div className="flex gap-2 items-center py-4 ml-4">
      <FaHome size={25} className="ml-4 text-gray-500" />
      <Link href="/">
        <span className="  hover:text-black text-gray-500 cursor-pointer">
          Home /{" "}
        </span>
      </Link>
      <span className="text-black">{path}</span>
    </div>
  );
};

export default Breadcrumb;
