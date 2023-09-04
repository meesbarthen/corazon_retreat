import Features from '@/components/Features';
import SideImageContentBanner from '@/components/SideImageContentBanner';
import ColorBanner from '@/components/ColorBanner';
import QuoteBanner from '@/components/QuoteBanner';
import WhatToExpect from '@/components/WhatToExpect';

const features = [
  {
    title: 'Sharing circles and ceremonies',
    text: 'Verbinding is ons uitgangspunt. Wij creëren talloze momenten waarop we met elkaar verbinden, delen en oprecht naar elkaar luisteren. Dit is een ruimte waar je volledig je authentieke zelf kunt zijn en waar alles welkom is.',
  },
  {
    title: 'Yoga',
    text: 'Ons aanbod omvat vooral rustige yogasessies, zoals Yin yoga. We hebben hiervoor gekozen omdat yoga een mooie manier is om je zenuwstelsel te kalmeren en stress te verminderen. Het nodigt ook uit tot introspectie, om weer in contact te komen met wat er zich in het lichaam afspeelt.',
  },
  {
    title: 'Liefdevolle beweging',
    text: 'We houden van beweging, maar geloven niet dat we ons lichaam te veel moeten pushen. Wij zijn geen retreat dat keihard gaat trainen. Wij willen op een liefdevolle, zachte manier in verbinding blijven met ons lichaam.',
  },
  {
    title: 'Breathwork',
    text: 'Breathwork is een mooie manier om diep met jezelf te verbinden, los te laten wat je niet meer dient, mooie inzichten te verkrijgen of juist de rust te geven die je nodig hebt.',
  },
  {
    title: 'Energetische Healing, Massage en Transformational Cupping',
    text: 'De eerste dagen staan in teken van veel RUST! Door middel van een energetische healing, een massage en een Transformational Cupping behandeling zorgen we ervoor dat je weer helemaal landt in je lichaam en alle stress van thuis kan loslaten.',
  },
  {
    title: 'Tijd voor Stilte en Reflectie',
    text: 'Wij geloven in het belang van momenten van stilte en reflectie. Hierbij kun je echt even verbinding maken met jezelf, schrijven in je journal en de geleerde lessen integreren.',
  },
  {
    title: 'Wandelingen',
    text: 'We houden van de natuur en wandelen en vinden dit een magische combinatie om met jezelf te verbinden, vooral als we dit in stilte doen. Dit kan echt een moment zijn om een stroom van creatieve nieuwe ideeën toe te laten.',
  },
  {
    title: 'Sound Healing',
    text: 'Stel je voor: je ligt heerlijk op je yogamat, omringd door betoverende klanken van klankschalen, gongs en andere helende instrumenten. Geluid heeft een genezend vermogen, daarom vinden wij een Sound Healing onmisbaar tijdens ons retreat. Het is een manier om volledig te kunnen ontspannen, los te laten wat je niet meer dient en mooie inzichten te verkrijgen.',
  },
  {
    title: 'Intieme groep',
    text: 'Wij houden de groep klein en intiem, zodat we veel persoonlijke aandacht kunnen bieden. Maximaal 11 personen kunnen meedoen.',
  },
];

export default function index() {
  return (
    <>
      <div className="bg-[#F2E7D4]">
        <SideImageContentBanner
          title="Het mother-daughter heart connection retreat"
          buttonLabel="Yes, I'am ready!"
          buttonLink="#"
          imageSrc="/corazon_groepsfoto.jpeg"
        >
          <p className="font-bold text-xl">Wilen jullie:</p>
          <ul className="mt-4 flex flex-col gap-1 first-letter tracking-tight">
            <li className="flex flex-row gap-2">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              De band met je moeder of dochter verdiepen?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 "
              />{' '}
              Meer verbinding met jezelf ervaren?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Vreugde in je leven vergroten?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Even tot rust komen en opladen?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Leren hoe je je diep kunt verbinden met je lichaam?
            </li>
            <li className="flex flex-row gap-2 align-center">
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Gelijkgestemde vrouwen ontmoeten waarbij je helemaal jezelf kunt
              zijn?
            </li>
            <li className="flex flex-row gap-2 align-center">
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Inzichten krijgen om meer vanuit verbinding met jezelf te leven?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Meer vertrouwen in jezelf ontwikkelen?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Heerlijk in de watten gelegd worden?
            </li>
            <li className="flex flex-row gap-2 align-center">
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Bewust met je lichaam bezig zijn door gezonde voeding en beweging?
            </li>
            <li className="flex flex-row gap-2 align-center">
              {' '}
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-6 w-6 self-center"
              />{' '}
              Iets nieuws ervaren?
            </li>
          </ul>
        </SideImageContentBanner>
      </div>
      <ColorBanner />
      <QuoteBanner />
      <Features
        features={features}
        title="Het Blossom Your Heart Retreat draait om de volgende pijlers:"
      />
      <ColorBanner />
      <QuoteBanner />
      <WhatToExpect />
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
      <SideImageContentBanner
        imageSrc="/merel_with_heart.jpg"
        title=' "Blossom Your Heart Retreat"'
      >
        <ul className="mt-4 flex flex-col gap-1 first-letter tracking-tight">
          <li className="flex flex-row gap-2">
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            Neem bij 3 personen of voor betaling in termijnen contact met ons
            op.
          </li>
          <li className="flex flex-row gap-2">
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            €155,- exclusief BTW voor een extra overnachting voor 2 personen,
            inclusief 2 maaltijden
          </li>
          <li className="flex flex-row gap-2">
            {' '}
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            Vier overnachtingen
          </li>
          <li className="flex flex-row gap-2">
            {' '}
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            2-persoonskamer voor moeder en dochter
          </li>
          <li className="flex flex-row gap-2">
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            Alle gezonde en glutenvrije maaltijden (ontbijt, lunch en diner)
          </li>
          <li className="flex flex-row gap-2">
            {' '}
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            Lokaal transport
          </li>
          <li className="flex flex-row gap-2">
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            Dagelijkse workshops (inclusief massage, Energetische Healing,
            Transformational Cupping, wandeltocht, intensieve begeleiding)
          </li>
          <li className="flex flex-row gap-2">
            {' '}
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            En nog veel meer verrassingen
          </li>
          <li className="flex flex-row gap-2">
            <img
              src="/Corazon_BeeldmerkBruin.png"
              alt=""
              className="h-6 w-6 self-center"
            />{' '}
            Het vliegticket is niet inbegrepen en dient zelf geboekt te worden.
            Houd rekening met de vliegtijden en de start van het retreat
            (uiterlijk 25 november om 11.00 uur).
          </li>
        </ul>
      </SideImageContentBanner>
    </>
  );
}
