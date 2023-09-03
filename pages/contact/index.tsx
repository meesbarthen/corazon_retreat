import PictureHalfScreen from '@/components/PictureHalfScreen';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import ColorBanner from '@/components/ColorBanner';
import ContactForm from '@/components/ContactForm';
import QuoteBanner from '@/components/QuoteBanner';

export default function index() {
  return (
    <div className="">
      <PictureHalfScreen />
      {/* <ColorBanner /> */}
      <Contact />
      <ColorBanner />
      <QuoteBanner />
      <ContactForm />
      <ColorBanner />
      <QuoteBanner />
      <FAQ />
    </div>
  );
}
