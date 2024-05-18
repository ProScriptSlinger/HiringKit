import MultiCarousel from "./MultiCarousel";
import { data } from "./data";

export default () => {
  return (
    <div
      id="testinominals"
      className="flex flex-col items-center mt-[600px] md:400px lg:mt-8 gap-4 w-full"
    >
      <div className="border-b-2 border-[#F1F5F9] w-[60vw] mb-8" />
      {/* <div className="border-b-2 border-[#F1F5F9] w-[60vw] mb-8" /> */}
      <div className="font-bold text-[25px] md:text-[30px] lg:text-[40px]">
        Early User Testimonials
      </div>
      <div className="flex justify-center py-8 w-full">
        <div className="max-w-[1200px] w-full">
          <MultiCarousel items={data} />
        </div>
      </div>
    </div>
  );
};
