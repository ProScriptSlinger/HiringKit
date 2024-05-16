import Header from "@/sections/Header";
import Banner from "@/sections/Banner";
import Icons from "@/sections/Icons";
import Testinominals from "@/sections/Testinominals";
import Exclusively from "@/sections/Exclusively";
import WhyUse from "@/sections/WhyUse";
import HowUse from "@/sections/HowUse";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[100vw] overflow-x-hidden">
      <Header />
      <Banner />
      <Icons />
      <WhyUse />
      <Exclusively />
      <Testinominals />
      <HowUse />
    </main>
  );
}
