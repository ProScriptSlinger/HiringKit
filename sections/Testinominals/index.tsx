import MultiCarousel from "./MultiCarousel";
import { data } from "./data";

export default () => {
  return (
    <div className="flex flex-col items-center mt-8 gap-4 w-full">
      <div className="border-b-2 border-[#F1F5F9] w-[60vw] mb-8" />
      <div className="text-[40px] font-bold">Early User Testimonials</div>
      <div className="flex justify-center py-8 w-full">
        <div className="max-w-[1200px] w-full">
          <MultiCarousel items={data} />
        </div>
      </div>
    </div>
  );
};
