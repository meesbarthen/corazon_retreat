import CTASection from "@/components/CTASection";
import BannerWithQuote from "@/components/BannerWithQuote";

export default function index() {
  return (
    <div className="">
      <CTASection />
      <BannerWithQuote
        imagePosition="left" // or "right"
        imageSrc="/Cornelie.jpg"
        quote="Mijn reis naar binnen bracht me niet alleen dichter bij mezelf, maar ook bij de harten van degenen die ik liefheb."
        quoteAuthor="Cornelie Barthen"
        title="Cornelie"
        paragraphs={[
          "Mijn grootste trots zijn mijn 3 bijzondere kinderen, die mij elke dag heel veel leren en vreugde geven. Na Merels geboorte nam ik de rol van moeder fulltime op me. Terwijl mijn man Tjeerd aan zijn onderneming werkte, zorgde ik voor ons gezin. Binnen 2 jaar werd Tijn geboren en daarna volgde Mees. Ik had mijn handen vol, maar genoot enorm van het moederschap. Rond mijn 40e begon ik aan zelfontwikkeling: opleidingen in NLP, familieopstellingen, gelaatkunde, Transformational Cupping en meer. Tijdens vrijwilligerswerk bij Make-A-Wish ontdekte ik mijn organisatorische talenten en vervulde ik wensen voor ernstig zieke kinderen. Dit was naast het moederschap de mooiste baan ter wereld.",
          "Merel spiegelde me altijd het meest. We botsten soms, maar zijn altijd hecht geweest. Ongeveer 3 jaar geleden vonden we dezelfde coach, ontdekten daarbij dat we veel dezelfde patronen hadden en door daar samen over te praten werd onze band hechter. Een week in Bali blijft een van mijn gelukkigste momenten: samen op scooters van de ene naar de andere spirituele ervaring. Vanaf dat moment zijn we alleen maar closer geworden. We zijn naar retreats geweest en daar werden we als inspiratie en voorbeeld gezien door andere vrouwen.Hoe mooi is het dat we nu samen moeder-dochter retreats gaan organiseren. De jongens hebben de website gemaakt, dus het is een mooi familieproject.",
          "De afgelopen jaren ben ik steeds dichter bij mezelf gekomen. Ik leerde naar mijn intuïtie te luisteren, me uit te spreken en bewuste keuzes te maken. Niet altijd makkelijk, maar ik voel me nu authentieker en gelukkiger. Voorheen zette ik mezelf op de achtergrond en negeerde verlangens. Nu geloof ik meer in mezelf en sta ik steviger. Hierdoor ben ik naar mijn idee een leuker mens geworden.",
        ]}
        showButton={false}
      />
      <BannerWithQuote
        imagePosition="right" // or "right"
        imageSrc="/merel.jpg"
        quote="De weg naar binnen is een pad vol uitdagingen, maar aan het eind ervan vind je de pure essentie van wie je werkelijk bent."
        quoteAuthor="Merel Barthen"
        title="Merel"
        paragraphs={[
          "In 2020 was ik op Bali, waar ik een tijdje in Ubud verbleef. Mijn ouders kwamen me voor enkele weken opzoeken, en mijn moeder bleef een week langer. Samen verkenden we mijn favoriete plekjes en namen deel aan activiteiten zoals ecstatic dance, yoga en ceremonies.Ik herinner me nog zo goed dat mama daar verschillende keren moest huilen van geluk en ze zei: “Ik heb me nog nooit zo levendig gevoeld.” Toen kwam het idee om samen retreats te gaan geven, omdat wij dit gevoel zo graag met anderen wilden delen.",
          "De afgelopen jaren hebben we veel “werk” verricht. Ik merk dat ik nu best moeite heb met dat woord, aangezien het nooit echt werk hoeft te zijn. De spirituele scène kan een schaduwzijde hebben door altijd maar weer iets nieuws te willen oplossen, waardoor je tegen jezelf zegt: “Ik ben nog steeds niet goed genoeg.” Ik geloof dat perfectie niet het doel moet zijn en dat niet alles opgelost kan worden, maar het draait erom steeds dichter bij jezelf te komen en constant te blijven luisteren naar je innerlijke verlangens en dus naar wat je hart wil. Hoe meer je luistert naar je innerlijke stem, hoe meer voldoening je zult ervaren. Echt luisteren en erop vertrouwen. Een van mijn mooiste lessen van de afgelopen jaren is ook: elke emotie is een geschenk met een boodschap. Ik vond mezelf altijd te gevoelig. Maar hoe meer ik alles toelaat, hoe vrijer en gelukkiger ik me voel. Het leven wordt niet opeens makkelijk, maar je kunt jezelf dragen te midden van alles wat ontstaat, en dat vind ik zo mooi. Hoe meer ik voel, hoe meer waarheid ik zie. En waarheid is liefde. Het durven voelen, of naar mezelf luisteren en mijn intuïtie volgen, is niet altijd vanzelfsprekend geweest. Ik had weinig tot geen contact met mijn lichaam, wat leidde tot angsten, depressies, een eetstoornis, burn-out, maar ook tot vluchten in andere dingen zoals feesten, enzovoort. Ik stond echt ver van mezelf, ging constant over mijn eigen grenzen heen en luisterde totaal niet naar mijn gevoel. Dit is slechts de korte versie en ik wil hier niet te diep op ingaan. Wel wil ik zeggen, dat ik geloof dat de weg naar binnen de weg is om jouw interne en externe wereld te veranderen, en dat dit zoveel voldoening zal schenken. Je komt veel meer in contact te staan met je eigen authentieke zelf, en dat is wat we in deze wereld nodig hebben. Tenslotte nog wat praktische informatie: ik heb afgelopen jaren verschillende opleidingen gevolgd, waaronder een Holistisch & Relatiecoach-opleiding, waar ik de tools heb geleerd om mensen te begeleiden en te ondersteunen in hun processen. ",
        ]}
        showButton={false}
      />
    </div>
  );
}
