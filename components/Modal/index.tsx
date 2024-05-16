import React, { useRef } from "react";

import { useClickOutside } from "@/utils/customHooks";
export interface ModalProp {
  visible: Boolean;
  setVisible: Function;
}

const ModalComponent: React.FC<{
  children?: React.ReactNode;
  props: ModalProp;
}> = ({ children, props }) => {
  const { visible, setVisible } = props;
  const divRef = useRef<HTMLDivElement>(null);

  useClickOutside(divRef, () => {
    setVisible(false);
  });
  return (
    <div
      id="default-modal"
      tabIndex={1}
      aria-hidden="true"
      className={`${
        !visible && "hidden"
      } flex justify-center  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 items-center w-full md:inset-0 h-[calc(100%)] max-h-full bg-gray-900/70`}
    >
      <div
        ref={divRef}
        className="relative p-4 max-h-full"
        style={{ width: "fit-content" }}
      >
        <div className="rounded-lg shadow dark:bg-gray-700">{children}</div>
        <div className="absolute top-0 right-1 flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
          <button
            type="button"
            className="text-gray-400 bg-transparent  hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
            onClick={() => setVisible(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
