export default ({ label }: { label?: string }) => {
  return (
    <button
      type="button"
      className="w-full font-title text-[#1F70E4]  justify-center  bg-white rounded-full hover:bg-blue-200 focus:ring-4 focus:outline-none ring-blue-200 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {label ?? "Request Demo"}
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  );
};
