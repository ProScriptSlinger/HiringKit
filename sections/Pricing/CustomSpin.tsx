"use client";

export default ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: Function;
}) => {
  return (
    <div className="flex gap-4 text-[14px] text-[#64748B] justify-center pt-8">
      <div>Pay Monthly</div>
      <label className="inline-flex items-center cursor-pointer ">
        <input
          onClick={() => {
            console.log("checked----->", checked);
            setChecked(!checked);
          }}
          type="checkbox"
          checked={checked}
          className="sr-only peer"
          readOnly
        />
        <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#334155]"></div>
      </label>
      <div>
        Pay Yearly <span className="text-[#10AA81]">(-30%)</span>
      </div>
      <div className="flex justify-center gap-8"></div>
    </div>
  );
};
