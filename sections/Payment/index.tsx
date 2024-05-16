import CustomSpin from "./CustomSpin";
export default () => {
  return (
    <div>
      {/* <div className="flex flex-col mt-[330px] items-center relative">
        <div className="border-b-2 border-[#F1F5F9] w-[60vw] mb-8" />
        <div className="text-[48px] font-bold text-center">
          Find the right plan for your <br />
          business
        </div>
        <CustomSpin />
      </div> */}
      <div className="relative flex flex-col items-center mt-[60px]">
        <div className="bg-[#101D2D] w-full h-[670px]" />
        <div className="flex flex-col max-w-[768px] absolute top-0 pt-16">
          <div className="font-bold text-[48px] text-center">
            <div className="text-[48px] text-[#F1F5F9] font-bold text-center">
              Find the right plan for your <br />
              business
            </div>
            <CustomSpin />
          </div>
          {/* <div
            className={`box ${
              isBouncing ? "bounce-up" : ""
            }  text-[18px] text-center min-h-[54px] mt-8`}
          >
            {data[activeId].des}
          </div> */}
          {/* <div className="flex justify-between w-full pt-8">
            {data.map((item, index) => (
              <IconBtn
                key={index}
                iconType={index}
                label={item.label}
                onClick={handleClick}
                isActive={index !== activeId}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};
