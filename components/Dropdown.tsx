"use client";
import { TxtBtnProp } from "./TxtBtn";
import { LuMenuSquare } from "react-icons/lu";
import { useState } from "react";

export default ({ list }: { list: TxtBtnProp[] }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div onClick={() => setVisible(!visible)}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <LuMenuSquare size={20} />
      </button>
      <div
        id="dropdown"
        className={`${
          !visible && "hidden"
        } z-10 absolute right-4 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mr-4`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {list.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
