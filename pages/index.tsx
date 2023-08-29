import Hero from "../components/Hero";
import Banner from "../components/IntroBanner";
import MoederDochter from "@/components/MoederDochter";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FastBanner from "@/components/QuoteBanner";
import FastBanner2 from "@/components/ColorBanner";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <FastBanner2 />
      <FastBanner />
      <Banner />
      <MoederDochter />
      {/* <CTASection /> */}
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
}
