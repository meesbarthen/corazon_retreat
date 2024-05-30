import Features from "@/components/Features";
import SideImageContentBanner from "@/components/SideImageContentBanner";
import ColorBanner from "@/components/ColorBanner";
import QuoteBanner from "@/components/QuoteBanner";
import ImageSwiper from "@/components/ImageSwiper";
import Testimonials from "@/components/Testimonials";
import BannerWithQuote from "@/components/BannerWithQuote";
import Image from "next/image";
import Schedule from "@/components/Schedule";
import Link from "next/link";
import MultiStepProcess from "@/components/MultiStepProcess";

const features = [
  {
    title: "Sharing circles and ceremonies",
    text: "Verbinding is ons uitgangspunt. Wij creëren talloze momenten waarop we met elkaar verbinden, delen en oprecht naar elkaar luisteren. Dit is een ruimte waar je volledig je authentieke zelf kunt zijn en waar alles welkom is.",
  },
  {
    title: "Yoga",
    text: "Ons aanbod omvat vooral rustige yogasessies, zoals Yin yoga. We hebben hiervoor gekozen omdat yoga een mooie manier is om je zenuwstelsel te kalmeren en stress te verminderen. Het nodigt ook uit tot introspectie, om weer in contact te komen met wat er zich in het lichaam afspeelt.",
  },
  {
    title: "Liefdevolle beweging",
    text: "We houden van beweging, maar geloven niet dat we ons lichaam te veel moeten pushen. Wij zijn geen retreat dat keihard gaat trainen. Wij willen op een liefdevolle, zachte manier in verbinding blijven met ons lichaam.",
  },
  {
    title: "Breathwork",
    text: "Breathwork is een mooie manier om diep met jezelf te verbinden, los te laten wat je niet meer dient, mooie inzichten te verkrijgen of juist de rust te geven die je nodig hebt.",
  },
  {
    title: "Energetische Healing, Massage en Transformational Cupping",
    text: "De eerste dagen staan in teken van veel RUST! Door middel van een energetische healing, een massage en een Transformational Cupping behandeling zorgen we ervoor dat je weer helemaal landt in je lichaam en alle stress van thuis kan loslaten.",
  },
  {
    title: "Tijd voor Stilte en Reflectie",
    text: "Wij geloven in het belang van momenten van stilte en reflectie. Hierbij kun je echt even verbinding maken met jezelf, schrijven in je journal en de geleerde lessen integreren.",
  },
  {
    title: "Wandelingen",
    text: "We houden van de natuur en wandelen en vinden dit een magische combinatie om met jezelf te verbinden, vooral als we dit in stilte doen. Dit kan echt een moment zijn om een stroom van creatieve nieuwe ideeën toe te laten.",
  },
  {
    title: "Sound Healing",
    text: "Stel je voor: je ligt heerlijk op je yogamat, omringd door betoverende klanken van klankschalen, gongs en andere helende instrumenten. Geluid heeft een genezend vermogen, daarom vinden wij een Sound Healing onmisbaar tijdens ons retreat. Het is een manier om volledig te kunnen ontspannen, los te laten wat je niet meer dient en mooie inzichten te verkrijgen.",
  },
  {
    title: "Intieme groep",
    text: "Wij houden de groep klein en intiem, zodat we veel persoonlijke aandacht kunnen bieden. Maximaal 11 personen kunnen meedoen.",
  },
];

const testimonials = [
  {
    title: "Verwend en Verzorgd: Mijn Magische Retreat",
    text: "Een magische, liefdevolle en helende ervaring op een prachtige plek. Ik voelde me verwend, verzorgd, veilig en geliefd. Perfecte balans voor Body, Mind & Soul. Mijn ziel werd opgelicht door liefde, warmte en vertrouwen. Een onvergetelijke ervaring die mij dichter bij mezelf bracht.’",
    name: "Anne",
    avatar: "/anne.jpeg",
  },
  {
    title: "Journey naar Zelfliefde",
    text: "Op het retreat voelde ik meteen een fijne energie en het gevoel dat je alles kunt loslaten. De groep en het team waren liefdevol en alles was tot in de puntjes verzorgd. Ik ervoer liefde, vreugde, en het loslaten van het oude. Ik ben ongelooflijk dankbaar voor deze ervaring!",
    name: "Nathalie",
    avatar: "/nathalie.jpeg",
  },
  {
    title: "Transformatie Week",
    text: "Het was een geweldige en transformerende week voor mij. Dankbaar dat ik bij jullie mocht zijn.",
    name: "Christel",
    avatar: "/christel.jpeg",
  },
];

const retreat_list = [
  {
    text: "Vijf luxe overnachtingen:",
    description:
      "Verblijf in een comfortabele 2-persoonskamer, speciaal voor moeder-dochter duo's.",
  },
  {
    text: "Persoonlijke aandacht:",
    description:
      "Maximaal 10/11 deelnemers voor een intieme en persoonlijke sfeer.",
  },
  {
    text: "Gezonde en heerlijke maaltijden:",
    description:
      "Geniet van smakelijke, glutenvrije maaltijden (ontbijt, lunch en diner).",
  },
  {
    text: "Vervoer:",
    description: "Lokaal transport is volledig geregeld.",
  },
  {
    text: "Dagelijkse activiteiten:",
    description:
      "Verwen jezelf met workshops zoals massage, energetische healing, transformational cupping, wandeltochten, intensieve begeleiding, breathwork en soundhealing!",
  },
  {
    text: "Onvergetelijke ervaringen:",
    description:
      "En een fotoshoot om deze mooie herinnering voor altijd vast te leggen.",
  },
  {
    text: "En nog veel meer verrassingen!",
    description: "",
  },
];

const steps = [
  {
    title: "Kennismaking",
    text: "Ons retreat begint met een persoonlijk kennismakingsgesprek. We kunnen niet wachten om jullie als moeder en dochter duo te leren kennen! Deze 6 onvergetelijke dagen samen worden nóg specialer als we jullie wensen en behoeften begrijpen. Het programma van het retreat staat in grote lijnen vast, maar we zien het ook als een co-creatie waarin we graag jullie intenties integreren.",
  },
  {
    title: "Informatieve mail",
    text: "Kort daarna ontvangen jullie een mail met onze spelregels, een vragenlijst en alle essentiële informatie: wat je moet meenemen en waar je aan moet denken. Zo kunnen jullie je volledig voorbereiden op het retreat en ontspannen aan deze bijzondere reis beginnen.",
  },
  {
    title: "Het retreat begint...",
    text: "Het moment is eindelijk daar! We halen jullie op van de luchthaven in Ibiza. De komende week belooft pure ontspanning, diepe verbinding met jezelf en elkaar, en vooral veel plezier. Jullie gaan genieten van onvergetelijke momenten en vol nieuwe energie en inspiratie terugkeren.",
  },
  {
    title: "Reünie!",
    text: "Hoe geweldig is het om elkaar na zo’n bijzondere week online weer te zien? We delen onze ervaringen, reflecteren samen en praten bij. We bespreken ook hoe we de nieuwe ideeën en inzichten kunnen integreren in het dagelijks leven.",
  },
];

const scheduleItems = [
  {
    time: "07:00",
    description: "Snack met thee/koffie",
    image: "/homepage-slider2.jpeg",
  },
  {
    time: "08:00",
    description:
      "Verbind met je lichaam door yoga, een hike, of andere beweging.",
    image: "/homepage-slider3.jpeg",
  },
  {
    time: "09:30",
    description: "Heerlijk gezond ontbijtje.",
    image: "/sfeerimpressie_2.jpeg",
  },
  { time: "11:00-13:00", description: "Activiteit." },
  { time: "13:30", description: "Lunch." },
  {
    time: "14:30-16:30",
    description:
      "Vrije tijd: relax bij het zwembad, lees een boek, of doe waar je zin in hebt.",
  },
  { time: "16:30-18:30", description: "Activiteit" },
  {
    time: "19:00",
    description: "Gezond en heerlijk diner.",
    image: "/retreat_slider_4.jpeg",
  },
  {
    time: "20:00",
    description:
      "Vrije tijd: iets voor jezelf doen, sound healing, een privésessie, of een feestavond.",
  },
];

export default function index() {
  return (
    <>
      <div className="relative flex min-h-screen md:h-screen">
        <div className="relative w-full h-auto md:h-full">
          <Image
            src="/retreat-main.jpg"
            alt="Retreat Main"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white bg-black bg-opacity-25 p-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Het leven samen vieren!</h1>
            <p className="text-lg mb-4 font-sans">
              Voor moeders en dochters die klaar zijn voor magie op Ibiza.
            </p>
            <p className="text-lg mb-4 font-sans">
              5 dagen op een innerlijke reis voor een diepere verbinding met
              jezelf en elkaar.
            </p>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={
                "https://docs.google.com/forms/d/e/1FAIpQLSd-Uf0Iqw8l4TjsL53ep0yQKUGeqTXeWWIlWnH3clO14kAakw/viewform"
              }
              className="mt-4 bg-[#AE8466] text-white font-bold py-2 px-4 rounded"
            >
              Ja, let’s go!
            </Link>
          </div>
        </div>
      </div>

      <ColorBanner />
      <QuoteBanner />
      <Testimonials
        title="Mooie woorden van de Corazón tribe"
        testimonials={testimonials}
        ctaLabel="Join Our Next Retreat"
        ctaLink="https://docs.google.com/forms/d/e/1FAIpQLSd-Uf0Iqw8l4TjsL53ep0yQKUGeqTXeWWIlWnH3clO14kAakw/viewform"
        showCTA={true}
        openCTAInNewTab={true}
        bgColor="#FFFFFF"
      />
      <ColorBanner />
      <QuoteBanner />
      <BannerWithQuote
        imagePosition="left" // or "right"
        imageSrc="/about_1.jpeg"
        title="Ontspan, verbind en geniet!"
        paragraphs={[
          "Stel je voor: een prachtige plek op Ibiza waar je samen met je moeder of dochter 6 dagen doorbrengt, ver weg van alles. Je wordt wakker in een oase van rust. Op de achtergrond hoor je het gezang van krekels en vogels. Is het niet fijn?! Je hoeft aan niets te denken. Alles wordt geregeld. Jij mag lekker in de relaxstand. Je lichaam en geest krijgen de gelegenheid om tot rust te komen. En te genieten. Van de plek, het gezonde eten, massages, yoga, kringgesprekken, stiltemomenten, dans en vooral van aandacht en liefde voor elkaar. En zeker niet alleen maar serieus. Het is juist de bedoeling dat we veel plezier gaan maken en dat jullie gaan stralen. Alles is erop gericht om dichter bij jezelf te komen, elkaar beter te begrijpen en de band tussen jullie te verdiepen.",
          "Het is een kans om te genieten van elkaars gezelschap en tegelijkertijd nieuwe inzichten en inspiratie op te doen die je mee naar huis neemt. Dit is een cadeau aan jezelf en je moeder of dochter om te ervaren hoe bijzonder het is om deze tijd met elkaar te delen, en hoe dit jullie band kan versterken.",
        ]}
        showButton={false}
        colorWay="dark"
      />
      <ColorBanner />
      <QuoteBanner />
      <SideImageContentBanner
        imageSrc="/merel_with_heart.jpg"
        title='"Heart 2 heart retreat"'
        openInNewTab={true}
        buttonLabel="Ja, ik wil hier bij zijn!"
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSd-Uf0Iqw8l4TjsL53ep0yQKUGeqTXeWWIlWnH3clO14kAakw/viewform"
      >
        <h3 className="font-semibold text-xl">
          Een onvergetelijke tijd samen voor{" "}
          <span className="underline">€1.888,00 per persoon</span>!
        </h3>
        <ul className="mt-4 flex flex-col gap-2 first-letter tracking-tight">
          {retreat_list.map((item, index) => (
            <li className="flex flex-row gap-2 items-start" key={index}>
              <Image
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 mt-1"
                width={24}
                height={24}
              />
              <p className="p-0 m-0">
                <span className="font-bold">{item.text}</span>{" "}
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="pt-5 italic">
          * Neem contact met ons op bij drie personen of voor
          betalingsmogelijkheden in termijnen.
        </p>
      </SideImageContentBanner>
      <ColorBanner />
      <QuoteBanner />
      <Features
        colorWay="dark"
        title="Wat je gaat ervaren"
        features={[
          {
            title: "Rust",
            text: "Gedurende het retreat hoef je nergens over na te denken, alles is geregeld. Je ervaart hoe het is om écht even te zijn. En je aanwezig te voelen in je lichaam. Je gaat van hoofd naar hart. Van stress naar ontspanning. Je laadt weer helemaal op en komt in je kracht. Bruisend van energie en nieuwe ideeën keer je terug naar huis.",
          },
          {
            title: "Verbinding",
            text: "Voel een diepe verbinding met jezelf en je moeder of dochter. Je gaat jezelf weer zien, maar ook elkaar. Jullie begrijpen elkaar beter, krijgen meer compassie en de band wordt sterker dan ooit.",
          },
          {
            title: "Plezier",
            text: "Geniet van gelukkige momenten samen. Het hoeft allemaal niet zo serieus. Lekker lachen, nieuwe ervaringen opdoen en plezier maken staan centraal. Creëer herinneringen die je een leven lang zal koesteren.",
          },
        ]}
      />
      <ColorBanner />
      <QuoteBanner />
      <BannerWithQuote
        imageSrc="/retreat_slider_1.jpeg"
        title="Ontmoet het team"
        paragraphs={[
          "Wij, Cornelie en Merel, zijn niet de enigen die jullie dit bijzondere gevoel gaan geven. We hebben een liefdevol team samengesteld dat ieder op zijn eigen manier veel voor ons betekent. Deze professionals, elk een expert in hun vakgebied, hebben ons de afgelopen jaren geïnspireerd en geholpen dichter bij onszelf te komen. Bij hen voelen we ons veilig en gewaardeerd, en we koesteren hun authenticiteit, oprechtheid en liefde. Met veel trots stellen we hen aan jullie voor...",
        ]}
        actionLink="/team"
        actionLabel="Ja, ik wil meer over hen weten"
      />
      <ColorBanner />
      <QuoteBanner />
      <Schedule
        title="Hoe ziet een dag eruit op Corazón Retreat?"
        subtitle="De tijden kunnen wat afwijken, maar dit geeft je een idee van hoe een dag eruitziet. De activiteiten variëren dagelijks en behandelen steeds één van onze kernpijlers: rust, verbinding met jezelf of anderen en plezier."
        items={scheduleItems}
      />
      <ColorBanner />
      <QuoteBanner />
      <MultiStepProcess
        title="Wat kunnen jullie nog meer verwachten?"
        colorWay="light"
        steps={steps}
      />
      <ColorBanner />
      <QuoteBanner />
      <div className="bg-[#F4F3ED]">
        <div className="px-6 py-16 max-w-7xl mx-auto lg:px-8">
          <div className="flex flex-col-reverse items-center justify-center gap-10 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#AE8466] sm:text-4xl">
                ¡Mi Casa es su casa!
              </h1>
              <p className="font-sans mt-6 lg:mt-10">
                Graag ontvangen wij jullie in ons eigen, intieme en warm
                ingerichte familiehuis op Ibiza met een betoverend uitzicht.
                Jullie komen op een magische plek in een stille oase terecht.
                Het huis genaamd Can Coll staat bovenaan een berg waar je
                uitkijkt op de zoutmeren van Ses Salinas en in de verte
                Formentera. Je kan hier letterlijk en figuurlijk je leven vanuit
                een hoger perspectief bekijken. Je voelt je hier echt ‘on top of
                the world’ en zo willen we jullie ook laten voelen als jullie
                weer naar huis gaan. Het is midden in de natuur en geeft een
                gevoel van thuiskomen. Onze plek biedt ruimte voor heling. Waar
                je dichter bij jezelf komt en een beetje meer van jezelf gaat
                houden. We kunnen niet wachten om jullie te verwelkomen in ons
                huis!
              </p>
            </div>
            <div className="w-full h-full lg:w-1/2 min-h-[315px]">
              <div className="min-h-[315px]">
                <iframe
                  width="560"
                  height="315"
                  className="rounded-xl w-full h-full min-h-[315px]"
                  src="https://www.youtube.com/embed/OetZ_oGLrMQ?si=orLwUO1E8v3-Ufbr"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ColorBanner />
      <QuoteBanner />
      <ImageSwiper
        title="Een sfeerimpressie"
        images={[
          {
            title: "Retreat Sider Image",
            src: "/retreat_slider_1.jpeg",
          },
          {
            title: "Retreat Sider Image",
            src: "/about_4.jpeg",
          },
          {
            title: "Retreat Sider Image",
            src: "/about_1.jpeg",
          },
          {
            title: "Retreat Sider Image",
            src: "/retreat_slider_4.jpeg",
          },
          {
            title: "Retreat Sider Image",
            src: "/retreat_slider_5.jpeg",
          },
          {
            title: "Retreat Sider Image",
            src: "/group_picture.jpg",
          },
        ]}
      />
    </>
  );
}
