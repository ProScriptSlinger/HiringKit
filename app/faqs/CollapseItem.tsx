import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

interface CollapseItemProp {
  index: number;
  title: string;
  content: string;
  activeId: number;
  setActiveId: Function;
}

const CollapseItem = (props: CollapseItemProp) => {
  const { index, title, content, activeId, setActiveId } = props;

  return (
    <>
      <h2
        id={`accordion-collapse-header-${index}`}
        onClick={() => setActiveId(index)}
      >
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target={`#accordion-collapse-body-${index}`}
          aria-expanded="true"
          aria-controls={`accordion-collapse-body-${index}`}
        >
          <span className="text-black">{title}</span>
          {activeId == index ? (
            <FaChevronDown size={15} />
          ) : (
            <FaChevronRight size={15} />
          )}
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`${index !== activeId && "hidden"}`}
        aria-labelledby={`accordion-collapse-header-${index}`}
      >
        <div className="p-5 border  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </>
  );
};

export default CollapseItem;
