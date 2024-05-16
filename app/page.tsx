import Header from "@/sections/Header";
import Banner from "@/sections/Banner";
import Icons from "@/sections/Icons";
import Testinominals from "@/sections/Testinominals";
import Exclusively from "@/sections/Exclusively";
import WhyUse from "@/sections/WhyUse";
import HowUse from "@/sections/HowUse";
import Payment from "@/sections/Payment";
import Elevate from "@/sections/Elevate";
import GoodBye from "@/sections/GoodBye";
import Footer from "@/sections/Footer";
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
      <Elevate />
      <GoodBye />
      <Footer />
      {/* <Payment /> */}
    </main>
  );
}
