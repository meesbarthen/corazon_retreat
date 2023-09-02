const features = [
  {
    title: 'Verbinden',
    text: 'Op de eerste plaats geloven wij dat je alleen diep kunt verbinden met anderen als je contact kunt maken met jezelf. Als je écht weet wat er in jou leeft. Van daaruit kun je verbinding maken met elkaar, in het bijzonder met je moeder, dochter of andere inspirerende vrouwen. Hier kun je echte sisterhood ervaren. Wij vrouwen hebben elkaar nodig en zijn geen concurrenten van elkaar. Door elkaar te steunen, voelen we ons veel meer gedragen in het leven.',
  },
  {
    title: 'Terugkomen in je vrouwelijke kracht',
    text: 'Door rust in jezelf te vinden en weer de veiligheid in je lichaam te voelen, kunnen we terugkeren naar onze zachtheid en vrouwelijkheid. Door middel van dans, yoga en diverse methodes gaan wij weer verbinden met ons gevoel. Alles mag er zijn en we mogen luisteren naar onze innerlijke stem, want daar ligt een schat aan wijsheid.',
  },
  {
    title: 'Self care',
    text: 'Door middel van massage, Transformational Cupping, meditatie, Energetische Healing, helende maaltijden en drankjes word je in alle facetten verzorgd. Dit helpt je om weer helemaal opgeladen en herboren naar huis terug te keren.',
  },
  {
    title: 'Inzichten opdoen',
    text: 'Door zelfreflectie, stilte, sharing circles en wandelingen in stilte, zul je inzichten krijgen die je helpen in je leven, zodat je bewuste keuzes maakt vanuit je hart.',
  },
  {
    title: 'Plezier hebben',
    text: 'Dit is geen traditioneel retreat. We houden het luchtig en streven naar veel plezier. Wij zijn geen mediators of psychologen die jullie problemen gaan oplossen. Onze intentie is een onvergetelijke week te bieden met veel plezier, waarbij je verbinding met jezelf en anderen kunt maken.',
  },
  {
    title: 'Nieuwe dingen ontdekken',
    text: 'Avontuur in en buiten jezelf. Er is nog zoveel te ontdekken! Wees nieuwsgierig en sta open voor nieuwe ervaringen. ',
  },
];

export default function Features() {
  return (
    <div className="bg-[#F4F3ED]">
      <div className="py-8 px-4 mx-auto max-w-7xl sm:py-16 lg:px-6">
        <div className="max-w-screen-xl mb-8 lg:mb-16">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight text-gray-900 font-serif max-w-4xl mx-auto text-center">
            Wat staat je te wachten tijdens het Blossom Your Heart Retreat?
          </h2>
          <p className="text-gray-500 sm:text-xl font-sans text-center">
            Bij ons retreat draait alles om verbinding met jezelf en anderen. In
            het bijzonder met je moeder of dochter.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((item) => (
            <div className="flex flex-col gap-4" key={item.title}>
              <img
                src="/Corazon_BeeldmerkBruin.png"
                alt=""
                className="h-8 w-8 self-center"
              />
              <div className="">
                <h3 className="mb-2 text-xl font-bold text-center ">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-sans text-center px-8">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
