import Hero from "../components/Hero";
import SideImageContentBanner from "../components/SideImageContentBanner";
import BannerWithQuote from "@/components/BannerWithQuote";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import QuoteBanner from "@/components/QuoteBanner";
import ColorBanner from "@/components/ColorBanner";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <ColorBanner />
      <QuoteBanner />
      <SideImageContentBanner
        title="Lieve moeder en dochter,"
        content="Zijn jullie klaar voor een verdiepende, unieke en bijzondere ervaring om jullie moeder-dochterrelatie te versterken? Willen jullie echt waardevolle quality time met elkaar doorbrengen, en ook de tijd nemen om weer verbinding te maken met jullie innerlijke zelf? Verlangen jullie naar rust, tijd voor jezelf en willen jullie nieuwe inzichten krijgen over hoe jullie een leven vol geluk en plezier kunnen leiden? Zijn jullie enthousiast om gedurende 5 dagen plezier te beleven, zowel met elkaar als met andere inspirerende vrouwen? Dan nodigen we jullie van harte uit voor het moeder-dochter Blossom Your Heart Retreat in ons huis. Deze week biedt jullie de gelegenheid om verbinding, plezier en groei te ervaren en jullie onderlinge band te versterken."
        buttonLabel="Get to know us!"
        buttonLink="#"
        imageSrc="/WhatToExpect.jpg"
      />

      <BannerWithQuote
        imageSrc="/merel-cornelie.jpg"
        quote="Door onze unieke moeder-dochter reis ontdekken we samen de essentie van ware verbinding."
        quoteAuthor="Cornelie Barthen en Merel Barthen"
        title="Het Hart van Moeder-Dochter Verbinding"
        paragraphs={[
          "Wij, Cornelie en Merel, moeder en dochter, zijn in 2022 gestart met Corazón Retreat. We organiseren retreats in een veilige omgeving op een prachtige locatie op Ibiza. Onze passie is om vrouwen te helpen een diepere verbinding met zichzelf te vinden en hun innerlijke kracht te ontdekken, zodat ze in staat zijn om hun leven ten volle te leven. Terwijl wij vorig jaar individuele retreats met liefde hebben gegeven, zijn wij nu super enthousiast over ons nieuwe concept: de Moeder- en Dochter retreats.",
          "De afgelopen jaren hebben wij afzonderlijk en samen een hele reis afgelegd, waardoor onze band nog specialer en dieper is geworden. Dat gunnen wij iedereen. Het is namelijk van groot belang om een goede relatie met elkaar te hebben; dit heeft immers een positieve invloed op je hele leven. Daarom kunnen wij niet wachten om dit met jullie te delen.",
          "De afgelopen jaren ben ik steeds dichter bij mezelf gekomen. Ik leerde naar mijn intuïtie te luisteren, me uit te spreken en bewuste keuzes te maken. Niet altijd makkelijk, maar ik voel me nu authentieker en gelukkiger. Voorheen zette ik mezelf op de achtergrond en negeerde verlangens. Nu geloof ik meer in mezelf en sta ik steviger. Hierdoor ben ik naar mijn idee een leuker mens geworden.",
        ]}
        actionLink="#"
        actionLabel="Sample Action"
      />

      {/* <CTASection /> */}
      <Features />
      <Testimonials />
      <FAQ />
      <ColorBanner />
    </div>
  );
}
