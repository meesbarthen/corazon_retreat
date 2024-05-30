import SideImageContentBanner from "@/components/SideImageContentBanner";
import BannerWithQuote from "@/components/BannerWithQuote";
import QuoteBanner from "@/components/QuoteBanner";
import ColorBanner from "@/components/ColorBanner";
import ImageSwiper from "@/components/ImageSwiper";

const images = [
  {
    title: "Accom 1",
    src: "/about_1.jpeg",
  },
  {
    title: "About 2",
    src: "/about_2.jpeg",
  },
  {
    title: "About 3",
    src: "/about_3.jpeg",
  },
  {
    title: "about 4",
    src: "/about_4.jpeg",
  },
  {
    title: "about 5",
    src: "/about_5.jpeg",
  },
];

export default function index() {
  return (
    <div className="">
      <SideImageContentBanner
        title="Ons liefdevolle team"
        showButton={false}
        imageSrc="/group_picture.jpg"
      >
        <p className="font-sans ">
          Wij hebben dit met zorg samengesteld, omdat ieder van hen op zijn
          eigen manier veel voor ons betekent. Deze professionals, elk een
          expert in hun vakgebied, hebben ons de afgelopen jaren geïnspireerd en
          geholpen dichter bij onszelf te komen. Bij hen voelen we ons veilig en
          gewaardeerd, en we koesteren hun authenticiteit, oprechtheid en
          liefde. Met veel trots stellen we hen aan jullie voor...
        </p>
      </SideImageContentBanner>

      <ColorBanner />
      <QuoteBanner />
      <BannerWithQuote
        imagePosition="left" // or "right"
        imageSrc="/LOTTE.png"
        // quote="Mijn reis naar binnen bracht me niet alleen dichter bij mezelf, maar ook bij de harten van degenen die ik liefheb."
        // quoteAuthor="Cornelie Barthen"
        title="Lotte"
        paragraphs={[
          "Lotte is een stille kracht: heel gevoelig, lief, eerlijk en ons baken in de keuken. Vanuit die plek houdt ze alles in de gaten en weet ze precies wat jij nodig hebt. Normaal gesproken geeft ze helende Transformational Cupping Behandelingen, maar nu is ze onze kok. Met veel passie en betrokkenheid heeft ze de lekkerste recepten uitgezocht en voorgeproefd, zodat ze zeker weet dat het lekker is en je energie op peil blijft. Haar maaltijden zitten vol liefde, zijn voedzaam, zonovergoten en lokaal van het eiland Ibiza. Wat boffen we met Lotte in de keuken!",
        ]}
        showButton={false}
        colorWay="dark"
      />
      {/* <ColorBanner />
      <QuoteBanner /> */}
      <BannerWithQuote
        imagePosition="right" // or "right"
        imageSrc="/fiona.jpg"
        title="Fiona"
        paragraphs={[
          "Fiona is onze lieve yogi en fotograaf, die liefde, wijsheid en rust belichaamt. Ze is recent moeder geworden van een dochter. Tijdens het retreat geeft ze yin yogalessen, een meditatieve yoga die helpt je lagen van zijn te ontdekken, te gronden en meer ademruimte te creëren. Iedere les is een reis naar diepere lagen van jezelf en je bewustzijn. Daarnaast maakt Fiona foto's, zowel tijdens het retreat als portretfoto’s. Haar warme persoonlijkheid zorgt ervoor dat je je snel op je gemak voelt en je ware zelf kunt laten zien en stralen.",
        ]}
        showButton={false}
      />
      {/* <ColorBanner />
      <QuoteBanner /> */}
      <BannerWithQuote
        imagePosition="left" // or "right"
        imageSrc="/maria.jpeg"
        title="Maria "
        paragraphs={[
          "Maria (Van Loon) is direct, eerlijk en what you see is what you get. Dankzij haar helderziendheid en heldervoelendheid is ze vaak spot on. Ze 'weet' veel en kan je helpen met antwoorden op je vragen en je richting geven. Als zelfstandig therapeute is ze gespecialiseerd in zintuigtherapie, waarbij ze het energiesysteem in balans brengt zodat je je vitaler voelt. Tijdens een behandeling houdt ze je voeten vast en beoordeelt zo je energiehuishouding, waarmee ze helpt je zielsverlangen naar voren te brengen. Bovendien geeft ze de beste massages, hoewel ze niet van de zachte aanpak is. Haar massages, gebaseerd op sportmassage en drukpuntmassage, verlichten lichamelijke ongemakken. Een behandeling van Maria is een bijzondere geestelijke en fysieke ervaring!",
        ]}
        showButton={false}
        colorWay="dark"
      />
      {/* <ColorBanner />
      <QuoteBanner /> */}
      <BannerWithQuote
        imagePosition="right" // or "right"
        imageSrc="/sadhana.jpeg"
        // quote="De weg naar binnen is een pad vol uitdagingen, maar aan het eind ervan vind je de pure essentie van wie je werkelijk bent."
        // quoteAuthor="Merel Barthen"
        title="Sadhana "
        paragraphs={[
          "Sadhana is onze temperamentvolle en passievolle danstherapeut, bekend om haar liefdevolle en eerlijke benadering. Ze helpt ons door beweging vanuit het bekkengebied weer te voelen en onze vrouwelijkheid naar boven te halen. Na haar inspirerende en plezierige lessen voel je echt een verschil: meer zelfwaarde, liefde en vertrouwen. Haar lessen zijn meer dan alleen dans; het is therapie. Ze opent verschillende niveaus van vrijheid in je systeem, helpt je blokkades op te heffen en geeft je als vrouw meer kracht en zelfvertrouwen. Bij Sadhana leer je jezelf beter kennen en ervaar je een diepe bewustwording.",
        ]}
        showButton={false}
      />
    </div>
  );
}
