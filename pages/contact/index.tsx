import PictureHalfScreen from "@/components/PictureHalfScreen";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ColorBanner from "@/components/ColorBanner";

export default function index() {
  return (
    <div className="">
      <PictureHalfScreen />
      <ColorBanner />
      <Contact />
      <FAQ />
    </div>
  );
}
