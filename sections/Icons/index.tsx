import Facebook from "@/components/icons/Facebook";
import Tinder from "@/components/icons/Tinder";
import Airbnb from "@/components/icons/Airbnb";
import Hubspot from "@/components/icons/Hubspot";
import Amazon from "@/components/icons/Amazon";

export default () => {
  return (
    <div className="grid grid-rows-5 md:grid-rows-2 lg:grid-rows-1 grid-flow-col  w-full items-center justify-center gap-8 md:gap-24 pt-8 md:pt-16 text-[#C6CED9]">
      <Facebook />
      <Tinder />
      <Airbnb />
      <Hubspot />
      <Amazon />
    </div>
  );
};
