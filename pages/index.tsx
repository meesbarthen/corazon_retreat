import Hero from "../components/Hero";
import Banner from "../components/Banner";
import MoederDochter from "@/components/MoederDochter";
import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <MoederDochter />
      <CTASection />
    </div>
  );
}
