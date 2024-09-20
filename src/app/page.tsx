
import FAQ from "@/components/pages/home/faq";
import HeroSection from "@/components/pages/home/herosection";
import HomeAbout from "@/components/pages/home/homeabout/page";
import Pricing from "@/components/pages/home/pricing";
import SponsorLogo from "@/components/pages/home/sponsorlogo";


export default function Home() {
  
  return (
    <>
      <HeroSection />
      <SponsorLogo/>
      <HomeAbout/>
      <FAQ/>
      <Pricing/>
    </>
  );
}
