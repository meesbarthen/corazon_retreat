import ImageSwiper from "@/components/ImageSwiper";
import ColorBanner from "@/components/ColorBanner";
import QuoteBanner from "@/components/QuoteBanner";

const images = [
  {
    title: "Accommodation 1",
    src: "/accom_1.jpg",
  },
  {
    title: "Accommodation 2",
    src: "/accom_2.jpg",
  },
  {
    title: "Accommodation 2",
    src: "/homepage-slider6.jpeg",
  },
  {
    title: "Accommodation 3",
    src: "/accom_3.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_11.jpeg",
  },
  {
    title: "Accommodation 4",
    src: "/accom_4.jpg",
  },
  {
    title: "Accommodation 5",
    src: "/accom_5.jpg",
  },
  {
    title: "Accommodation",
    src: "/about_picture.jpeg",
  },
  {
    title: "Accommodation 6",
    src: "/accom_6.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_12.jpeg",
  },
  {
    title: "Accommodation 7",
    src: "/accom_7.jpg",
  },
  {
    title: "Accommodation 8",
    src: "/accom_8.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_13.jpeg",
  },
  {
    title: "Accommodation 9",
    src: "/accom_9.jpg",
  },
  {
    title: "Accommodation 10",
    src: "/accom_10.jpg",
  },
  {
    title: "Accommodation",
    src: "/accom_14.jpeg",
  },
  {
    title: "Accommodation",
    src: "/background_hero.webp",
  },
];

export default function index() {
  return (
    <div className="w-screen">
      <ImageSwiper
        images={images}
        title="Ons geweldige accomodatie"
        colorWay="dark"
      />
      <ColorBanner />
      <QuoteBanner />
      <div className="bg-[#F4F3ED]">
        <div className="py-16 max-w-7xl mx-auto">
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
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
