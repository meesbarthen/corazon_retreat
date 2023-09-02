import Hero from '../components/Hero';
import SideImageContentBanner from '../components/SideImageContentBanner';
import BannerWithQuote from '@/components/BannerWithQuote';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import QuoteBanner from '@/components/QuoteBanner';
import ColorBanner from '@/components/ColorBanner';
import FAQ from '@/components/FAQ';
import ImageSwiper from '@/components/ImageSwiper';

export default function Home() {
  return (
    <div>
      <Hero />
      <ColorBanner />
      <QuoteBanner>
        <p className="text-xl leading-6 text-white p-10 text-center">
          <strong className="sans_titel">
            We warmly welcome you to our house and join our mother-daughter
            retreat this november
          </strong>
        </p>
      </QuoteBanner>
      <SideImageContentBanner
        title="Lieve moeder en dochter,"
        imageSrc="/first_photo.jpg"
        buttonLabel="Get to know us!"
        buttonLink="#"
      >
        <p>
          Zijn jullie klaar voor een verdiepende, unieke en bijzondere ervaring
          om jullie moeder-dochterrelatie te versterken? Willen jullie echt
          waardevolle quality time met elkaar doorbrengen, en ook de tijd nemen
          om weer verbinding te maken met jullie innerlijke zelf? Verlangen
          jullie naar rust, tijd voor jezelf en willen jullie nieuwe inzichten
          krijgen over hoe jullie een leven vol geluk en plezier kunnen leiden?
          Zijn jullie enthousiast om gedurende 5 dagen plezier te beleven, zowel
          met elkaar als met andere inspirerende vrouwen? Dan nodigen we jullie
          van harte uit voor het moeder-dochter Blossom Your Heart Retreat in
          ons huis. Deze week biedt jullie de gelegenheid om verbinding, plezier
          en groei te ervaren en jullie onderlinge band te versterken.
        </p>
      </SideImageContentBanner>
      <ColorBanner />
      <QuoteBanner>
        <div className="flex flex-col">
          <p className="text-xl leading-6 text-white pt-10 text-center">
            <strong className="sans_titel">
              “I thought that my job was to teach my daughter everything she
              needed to know, but it turns out her job was to teach me
              everything I didn’t.”
            </strong>
          </p>
          <p className="text-xl leading-6 text-white mt-5 pb-10 text-center">
            - Lauren Tingley
          </p>
        </div>
      </QuoteBanner>
      <BannerWithQuote
        imageSrc="/merel-cornelie.jpg"
        title="Welkom"
        paragraphs={[
          'Wij, Cornelie en Merel, moeder en dochter, zijn in 2022 gestart met Corazón Retreat. We organiseren retreats in een veilige omgeving op een prachtige locatie op Ibiza. Onze passie is om vrouwen te helpen een diepere verbinding met zichzelf te vinden en hun innerlijke kracht te ontdekken, zodat ze in staat zijn om hun leven ten volle te leven. Terwijl wij vorig jaar individuele retreats met liefde hebben gegeven, zijn wij nu super enthousiast over ons nieuwe concept: de Moeder- en Dochter retreats.',
          'De afgelopen jaren hebben wij afzonderlijk en samen een hele reis afgelegd, waardoor onze band nog specialer en dieper is geworden. Dat gunnen wij iedereen. Het is namelijk van groot belang om een goede relatie met elkaar te hebben; dit heeft immers een positieve invloed op je hele leven. Daarom kunnen wij niet wachten om dit met jullie te delen.',
          'De afgelopen jaren ben ik steeds dichter bij mezelf gekomen. Ik leerde naar mijn intuïtie te luisteren, me uit te spreken en bewuste keuzes te maken. Niet altijd makkelijk, maar ik voel me nu authentieker en gelukkiger. Voorheen zette ik mezelf op de achtergrond en negeerde verlangens. Nu geloof ik meer in mezelf en sta ik steviger. Hierdoor ben ik naar mijn idee een leuker mens geworden.',
        ]}
        actionLink="#"
        actionLabel="Sample Action"
      />
      <ColorBanner />
      <QuoteBanner />
      {/* <CTASection /> */}
      <Features />
      <ColorBanner />
      <QuoteBanner />
      <ImageSwiper
        title="Een sfeerimpressie"
        images={[
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider1.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider2.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider3.jpeg',
          },

          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider5.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider6.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider7.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider8.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider9.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider10.jpeg',
          },
          {
            title: 'Homepage Sider Image',
            src: '/homepage-slider11.jpeg',
          },
        ]}
      />
      <ColorBanner />
      <QuoteBanner />
      <Testimonials />
      <ColorBanner />
      <QuoteBanner />
      <FAQ />
    </div>
  );
}
