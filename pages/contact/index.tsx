import PictureHalfScreen from "@/components/PictureHalfScreen";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ColorBanner from "@/components/ColorBanner";
import ContactForm from "@/components/ContactForm";
import QuoteBanner from "@/components/QuoteBanner";

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
];

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
      <FAQ faqs={faqs} />
    </div>
  );
}
