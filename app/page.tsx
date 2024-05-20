import Header from "@/sections/Header";
import Banner from "@/sections/Banner";
import Icons from "@/sections/Icons";
import Advantages from "@/sections/Advantages";
import Challenging from "@/sections/Challenging";
import WhyUse from "@/sections/WhyUse";
import HowWork from "@/sections/HowWork";
import Payment from "@/sections/Pricing";
// import Elevate from "@/sections/Elevate";
import GoodBye from "@/sections/GoodBye";
import Footer from "@/sections/Footer";
import TopUpBtn from "@/components/TopUp";
import Testinominals from "@/sections/Testinominals";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <Icons />
      <WhyUse />
      <Challenging />
      <Testinominals />
      <HowWork />
      <Advantages />
      <Payment />
      <GoodBye />
      {/* <Footer /> */}
      <TopUpBtn />
      {/* <Elevate /> */}
    </>
  );
}
