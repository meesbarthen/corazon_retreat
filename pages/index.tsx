import Hero from "../components/Hero";
import SideImageContentBanner from "../components/SideImageContentBanner";
import BannerWithQuote from "@/components/BannerWithQuote";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import QuoteBanner from "@/components/QuoteBanner";
import ColorBanner from "@/components/ColorBanner";
import FAQ from "@/components/FAQ";
import ImageSwiper from "@/components/ImageSwiper";
import Header from "@/components/Header";
import VideoContainer from "@/components/VideoContainer";
import RetreatCard from "@/components/RetreatCard";

const testimonials = [
  {
    title: "Hart Aan, Verstand Uit",
    text: "Woorden schieten tekort voor mijn ervaring bij Corazón Retreat. Met een gevoel van opwinding werd ik warm ontvangen door Merel en Cornelie. Ik voelde me gezien en gehoord, en kon mezelf zijn. De veilige sfeer die zij creëerden, zonder oordeel, was een geschenk. Zowel praten als stil zijn werd geaccepteerd. De kracht van hun organisatie is voelbaar. Het was verstand uit en hart aan.",
    name: "Christel",
    avatar: "/LOTTE.png",
  },
  {
    title: "Thuis bij Corazón",
    text: "De plek voelt zo speciaal, het uitzicht, de inrichting, de sfeer, maar vooral jullie buitengewoon lieve energie. Heel erg bedankt dat ik me echt thuis mocht voelen!",
    name: "Anoush",
    avatar: "/anoush.jpeg",
  },
  {
    title: "Een Magische Ervaring om Nooit te Vergeten",
    text: "Wow, wat een gastvrijheid! Wat een liefde! Wat een magische plek! We hadden een 'once in a lifetime' ervaring met jou en Anna. De hele setting, de fantastische warmte, het weer, de veganistische ervaring, de retraite, de rituelen, te veel om op te noemen. We zullen dit nooit en te nimmer vergeten! xxx",
    name: "Marlous",
    avatar: "/Marlous.jpeg",
  },
];

const faqs = [
  {
    question: "Is het niet heel zweverig?",
    answer:
      "Absoluut niet! Onze retreats hebben een down-to-earth benadering. We combineren praktische en aardse activiteiten met ontspanning en persoonlijke ontwikkeling. Denk aan yoga, meditatie, en wandelingen in de natuur.",
  },
  {
    question: "Heb ik genoeg tijd tussendoor tijdens het retreat?",
    answer:
      "Jazeker, wij geloven dat het erg belangrijk is om rust te nemen tussendoor om ervaringen te integreren. Daarom hebben we een uitgebalanceerd programma samengesteld met voldoende vrije tijd.",
  },
  {
    question: "Kan ik een extra nacht verblijven?",
    answer:
      "Dat kan, maar alleen een dag voor aanvang van het retreat. Na de eindceremonie is het retreat afgelopen en kun je niet langer op de retreat locatie verblijven.",
  },
  {
    question: "Hoe is de kamerindeling?",
    answer:
      "Je slaapt met z’n tweeën of je per moeder-dochter duo op een tweepersoonskamer. In een tweepersoonsbed met aparte dekbedden.",
  },
  {
    question: "Is er een follow-up gesprek?",
    answer:
      "Voorafgaand aan het retreat zal er via Zoom een kennismakingsgesprek plaatsvinden en na afloop een evaluatiegesprek per individu of moeder-dochter duo.",
  },
  {
    question: "Is een moeder dochter retreat voor alle leeftijden?",
    answer:
      "Wij hebben een minimumleeftijd van 21 jaar, omdat we geloven dat vanaf die leeftijd de scherpe randjes van de moeder-dochterrelatie afgaan en er opening is voor heling en diepere verbinding. We staan open voor andere zienswijzen,dus overleg is mogelijk over eventueel jongere deelnemers.",
  },
  {
    question: "Hoe groot is de groep?",
    answer: "De groep kan uit maximaal 11 deelnemers bestaan.",
  },
  {
    question: "Wat zijn de annuleringsvoorwaarden?",
    answer:
      "We gaan ervan uit dat je het retreat niet zonder goede reden annuleert. Indien je binnen een maand voor aanvang van het retreat toch daartoe genoodzaakt bent, doen wij beiden -jij en Corazón retreat- ons uiterste best om jouw plek op te vullen. Slagen wij hier beiden niet in, dan berekenen we 50% annuleringskosten. In geval van uitzonderlijke omstandigheden, zoals restricties die gepaard gaan met bijvoorbeeld COVID, laten wij het retreat op een later tijdstip doorgang vinden of we retourneren het reeds betaalde bedrag.",
  },
  {
    question: "Wat moet ik zelf meenemen?",
    answer:
      "Wij sturen hier ruim voor aanvang van het retreat uitgebreide informatie over. Alleen handbagage volstaat, want je hebt niet veel nodig tijdens het retreat. Sowieso makkelijk zittende kleding, iets speciaals voor de laatste avond en je journal.",
  },
  {
    question: "Wordt er rekening gehouden met dieetwensen of allergieën?",
    answer:
      "Jazeker. De maaltijden zijn glutenvrij, gezond en zo veel mogelijk vegetarisch, maar we vinden het lekker om af en toe een visje of zelfs vlees toe te voegen. Op ons intakeformulier kun je precies aangeven wat je dieetwensen en allergieën zijn, zodat we daar rekening mee kunnen houden.",
  },
  {
    question: "Wat is de prijs van het retreat?",
    answer:
      "De prijs bedraagt 1.888,00 per persoon voor een 6-daags retreat inclusief verblijf op een 2-persoonskamer, alle maaltijden, workshops, yoga, massages, healing en vervoer.",
  },
  {
    question:
      "Is het Moeder-Dochter Retreat ook geschikt voor schoonmoeders en schoondochters, of stiefmoeders en stiefdochters?",
    answer:
      "Absoluut! Iedereen met een moeder- of dochterfiguur in hun leven is van harte welkom om deel te nemen aan dit speciale retreat.",
  },
];

const firstRetreat = {
  imageSrc: "/mama-merel.jpg",
  title: "Moeder-dochter Heart 2 Heart retreat",
  date: "27 september t/m 2 oktober 2024",
  buttonText: <span>Ja, ik wil meer informatie</span>,
  buttonLink: "/retreats",
  openInNewTab: false,
};

const secondRetreat = {
  imageSrc: "/retreat_slider_1.jpeg",
  title: "Vrouwen Blossom your Heart retreat",
  date: "10 t/m 14 april 2025",
  description:
    "6 dagen van rust, reconnectie met jezelf, gezond eten en veel plezier met andere vrouwen.",
  buttonText: (
    <span>
      Zet me op de mailinglijst voor meer informatie of ik wil me inschrijven!
    </span>
  ),
  buttonLink:
    "https://docs.google.com/forms/d/e/1FAIpQLScbFVQFYz55N43pA1of0_DGNWDd_N8LGAKq4Rg0WTVv3xMHmg/viewform",
  openInNewTab: true,
};

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ColorBanner />
      <QuoteBanner>
        <p className="text-3xl leading-relaxed text-white p-5 md:p-10 text-center">
          Even helemaal jezelf kunnen zijn!
        </p>
      </QuoteBanner>
      <SideImageContentBanner
        title="6 dagen vol liefde, die helemaal in het teken staan van jou!"
        imageSrc="/first_photo.jpg"
        buttonLabel={
          <span className="text-lg">
            Ja dit wil ik met mijn moeder of dochter!
          </span>
        }
        buttonLink="/retreats"
        showButton={true}
        showSecondButton={true}
      >
        <p className="tracking-tight">
          Laat je nu verwennen met heerlijke, gezonde voeding en geniet van de
          warme, liefdevolle zorg die je verdient. Dit is jouw moment om te
          stralen, volledig jezelf te zijn en diep te ontspannen. Ervaar
          plezier, kom tot rust en herontdek je innerlijke kracht en wijsheid.
          Verbind je opnieuw met jezelf, anderen en je moeder of dochter.
        </p>
      </SideImageContentBanner>
      <ColorBanner />
      <QuoteBanner>
        <div className="flex flex-col">
          <p className="text-xl leading-6 text-white pt-10 text-center">
            <strong className="sans_titel">
              “Do you want to meet the love of your life? Look in the mirror.”
            </strong>
          </p>
          <p className="text-xl leading-6 text-white mt-5 pb-10 text-center">
            - Byron Katie
          </p>
        </div>
      </QuoteBanner>
      <RetreatCard
        title="Upcoming Retreats"
        firstRetreat={firstRetreat}
        secondRetreat={secondRetreat}
      />
      <ColorBanner />
      <QuoteBanner />
      <Testimonials
        title="Mooie woorden van de Corazón tribe"
        testimonials={testimonials}
        ctaLabel="Join Our Next Retreat"
        ctaLink="/retreats"
        showCTA={true}
        openCTAInNewTab={true}
      />
      <ColorBanner />
      <QuoteBanner />
      <VideoContainer />
      <ColorBanner />
      <QuoteBanner />
      <BannerWithQuote
        imageSrc="/merel-cornelie.jpg"
        title="Ontmoet je hosts: Cornelie en Merel"
        paragraphs={[
          "Wij, Cornelie en Merel, moeder en dochter, zijn in 2022 gestart met Corazón Retreat. We organiseren retreats in een veilige omgeving op een prachtige locatie op Ibiza. Onze passie is om vrouwen te helpen een diepere verbinding met zichzelf te vinden en hun innerlijke kracht te ontdekken, zodat ze in staat zijn om hun leven ten volle te leven.",
          "De afgelopen jaren hebben wij afzonderlijk en samen een hele reis afgelegd, waardoor onze band nog specialer en dieper is geworden. Dat gunnen wij iedereen. Het is namelijk van groot belang om een goede relatie met jezelf en met elkaar te hebben; dit heeft immers een positieve invloed op je hele leven. Daarom organiseren wij retreats voor moeders en dochters én voor individuele vrouwen.",
        ]}
        actionLink="/about"
        actionLabel="Lees meer over ons"
      />
      <ColorBanner />
      <QuoteBanner />
      <Features
        colorWay="dark"
        title="Met diepe verbinding, veiligheid en oprechte aandacht"
        features={[
          {
            title: "Diepe verbinding",
            text: "Wij creëren een authentieke en vertrouwde sfeer waarin jij je gezien, gehoord, serieus genomen en gewaardeerd voelt. We luisteren onbevooroordeeld naar elkaar, waardoor ervaringen gedeeld kunnen worden en een emotionele verbinding ontstaat. Door samen activiteiten te ondernemen en open gesprekken te voeren, helpen we je niet alleen dichter bij jezelf te komen, maar ook de band met je moeder of dochter te versterken.",
          },
          {
            title: "Veiligheid",
            text: "Bij ons ben je veilig om helemaal jezelf te zijn. We bieden een warm welkom op een veilige, rustige plek waar je kwetsbaar kunt zijn en alles kunt delen wat je wilt, in de grootste vertrouwelijkheid.",
          },
          {
            title: "Oprechte aandacht",
            text: "Jij staat bij ons centraal. We hebben oog voor wat je nodig hebt en willen dat je je goed voelt. Onze activiteiten zijn speciaal ontworpen om jou en je moeder of dochter te helpen ontspannen en groeien. We zijn er helemaal voor jou, zodat je het maximale uit deze ervaring kunt halen.",
          },
        ]}
      />
      <ColorBanner />
      <QuoteBanner />
      <ImageSwiper
        title="Een sfeerimpressie"
        images={[
          {
            title: "Homepage Sider Image",
            src: "/homepage-slider1.jpeg",
          },

          {
            title: "Homepage Sider Image",
            src: "/homepage-slider3.jpeg",
          },

          {
            title: "Homepage Sider Image",
            src: "/homepage-slider6.jpeg",
          },
          {
            title: "Homepage Sider Image",
            src: "/homepage-slider7.jpeg",
          },
          {
            title: "Homepage Sider Image",
            src: "/homepage-slider8.jpeg",
          },
          {
            title: "Homepage Sider Image",
            src: "/homepage-slider9.jpeg",
          },
          {
            title: "Homepage Sider Image",
            src: "/homepage-slider10.jpeg",
          },
          {
            title: "Homepage Sider Image",
            src: "/homepage-slider11.jpeg",
          },
          {
            title: "Homepage Slider Image",
            src: "/sfeerimpressie_1.jpeg",
          },
          {
            title: "Homepage Slider Image",
            src: "/sfeerimpressie_2.jpeg",
          },
        ]}
      />
      <ColorBanner />
      <QuoteBanner />
      <FAQ faqs={faqs} />
    </div>
  );
}
