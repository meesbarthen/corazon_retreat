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
            retreat on Ibiza this november
          </strong>
        </p>
      </QuoteBanner>
      <SideImageContentBanner
        title="Lieve moeder en dochter,"
        imageSrc="/first_photo.jpg"
        buttonLabel="Get to know us!"
        buttonLink="#"
      >
        <p className="tracking-tight">
          Zijn jullie klaar voor een verdiepende, unieke en bijzondere ervaring
          om jullie moeder-dochterrelatie te versterken? Willen jullie 5 dagen
          lang echt waardevolle tijd met elkaar doorbrengen en ook weer
          verbinding maken met jullie innerlijke zelf? Willen jullie plezier
          beleven zowel met elkaar als met andere inspirerende vrouwen?
          Verlangen jullie naar rust, tijd voor jezelf en nieuwe inzichten over
          een leven vol geluk en vreugde? En lijkt het jullie heerlijk om
          verwend te worden met onder andere massages, Energetische Healing,
          boeiende workshops en helend eten? Dan nodigen we jullie van harte uit
          voor het moeder-dochter Blossom Your Heart Retreat in ons huis op
          Ibiza. (Deze week biedt jullie de gelegenheid om verbinding, plezier
          en groei te ervaren en jullie onderlinge band te versterken.)
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
        title="Welkom!"
        paragraphs={[
          'Wij, Cornelie en Merel, moeder en dochter, zijn in 2022 gestart met Corazón Retreat. We organiseren retreats in een veilige omgeving op een prachtige locatie op Ibiza. Onze passie is om vrouwen te helpen een diepere verbinding met zichzelf te vinden en hun innerlijke kracht te ontdekken, zodat ze in staat zijn om hun leven ten volle te leven. In 2022 hebben wij met veel liefde retreats voor individuele vrouwen georganiseerd, maar wij hebben nu een nieuw concept, waar we heel enthousiast over zijn, vooral omdat het nog veel dichter bij ons staat: Moeder- en Dochter Retreats.',
          'De afgelopen jaren hebben wij afzonderlijk en samen een hele reis afgelegd, waardoor onze band nog specialer en dieper is geworden. Dat gunnen wij iedereen. Het is namelijk van groot belang om een goede relatie met elkaar te hebben; dit heeft immers een positieve invloed op je hele leven. Daarom kunnen wij niet wachten om dit met jullie te delen.',
        ]}
        actionLink="/about"
        actionLabel="Lees meer over ons"
      />
      <ColorBanner />
      <QuoteBanner />
      {/* <CTASection /> */}
      <Features
        colorWay="dark"
        title="Wat staat je te wachten tijdens het Blossom Your Heart Retreat?"
        subtitle=" Bij ons retreat draait alles om verbinding met jezelf en anderen. In
        het bijzonder met moeders en dochters."
        features={[
          {
            title: 'Verbinden',
            text: 'Op de eerste plaats geloven wij dat je alleen diep kunt verbinden met anderen als je contact kunt maken met jezelf. Als je écht weet wat er in jou leeft. Van daaruit kun je verbinding maken met elkaar, in het bijzonder met je moeder, dochter(s) of andere inspirerende vrouwen. Hier kun je echte sisterhood ervaren. Wij vrouwen hebben elkaar nodig en zijn geen concurrenten van elkaar. Door elkaar te steunen, voelen we ons veel meer gedragen in het leven.',
          },
          {
            title: 'Terugkomen in onze vrouwelijke kracht',
            text: 'Door rust in jezelf te vinden en weer de veiligheid in je lichaam te voelen, kunnen we terugkeren naar onze zachtheid en vrouwelijkheid. Door middel van dans, yoga en diverse methodes gaan wij weer verbinden met ons gevoel. Alles mag er zijn en we mogen luisteren naar onze innerlijke stem, want daar ligt een schat aan wijsheid.',
          },
          {
            title: 'Self care',
            text: 'Door middel van massage, Transformational Cupping, meditatie, Energetische Healing, helende maaltijden en drankjes worden jullie op alle vlakken verzorgd. Dit helpt om weer helemaal opgeladen en herboren naar huis terug te keren.',
          },
          {
            title: 'Inzichten opdoen',
            text: 'Door zelfreflectie, stilte, sharing circles en wandelingen in stilte, krijgen jullie inzichten, die helpen in het leven, zodat bewuste keuzes vanuit het hart gemaakt kunnen worden.',
          },
          {
            title: 'Plezier hebben',
            text: 'Dit is geen traditioneel retreat. We houden het luchtig en streven naar veel plezier. Wij zijn geen mediators of psychologen, die jullie problemen gaan oplossen. Onze intentie is een onvergetelijke week te bieden met veel plezier, waarbij je verbinding met jezelf en anderen kunt maken.',
          },
          {
            title: 'Op avontuur',
            text: 'Jullie gaan nieuwe dingen beleven met jezelf en elkaar. Er is nog zoveel te ontdekken! Wees nieuwsgierig en sta open voor nieuwe ervaringen.',
          },
        ]}
      />
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
