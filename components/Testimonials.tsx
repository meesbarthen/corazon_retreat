const testimonials = [
  {
    title: 'Transformative Week',
    text: 'Het was een geweldige week, maar ook een transformerende week voor mij. Super veel dank hiervoor. Dankbaar dat ik bij jullie mocht zijn. Dikke knuffel',
    name: 'Christel',
    avatar: 'christel.jpeg',
  },
  {
    title: 'Thuis bij Corazón',
    text: 'De plek voelt zo speciaal, het uitzicht, de inrichting, de sfeer, maar vooral jouw buitengewoon lieve energie. Heel erg bedankt dat ik me echt thuis mocht voelen...Dikke knuffel',
    name: 'Anoush',
    avatar: 'anoush.jpeg',
  },
  {
    title: 'Magische Momenten op Corazón',
    text: "Wow, wat een gastvrijheid! Wat een liefde! Wat een magische plek! We hadden een 'once in a lifetime' ervaring met jou en Anna. De hele setting, de fantastische warmte, het weer, de veganistische ervaring, de retraite, de rituelen, te veel om op te noemen. We zullen dit nooit en te nimmer vergeten! xxx",
    name: 'Marlous',
    avatar: 'Marlous.jpeg',
  },
  {
    title: 'Journey naar Zelfliefde',
    text: 'Ik wil heel graag delen wat de retraite voor mij heeft betekend. Bij aankomst op de retraite locatie voelde ik meteen een hele fijne energie en het gevoel dat je alles los kunt laten. De groep was erg aardig, het team was zo hartelijk en alles was tot in de puntjes verzorgd. De gezonde lunch was zo lekker en het stimuleerde me om weer gezonder te gaan eten, het is de eerste stap naar zelfliefde. Voor mij was het heel confronterend om tijdens een sessie bij een patroon te komen waar ik blijkbaar nog steeds in zat en het was echt een uitnodiging om eraan te werken. Ik ervoer veel liefde, vreugde en het loslaten van het oude en het onder ogen zien van het nieuwe. Ik ben ongelooflijk dankbaar voor deze ervaring en kijk er met veel plezier op terug!',
    name: 'Nathalie',
    avatar: 'nathalie.jpeg',
  },
  {
    title: 'Homecoming retreat Ibiza',
    text: 'Wat een magische, liefdevolle en helende ervaring op een prachtige plek. Ik voelde me zo verwend, verzorgd, veilig en geliefd! Tijdens het retreat was er een perfect balans in aandacht voor Body, Mind & Soul: Mijn body is aan het werk gezet tijdens de hikes, ontspannen tijdens de yoga en gevoed met heerlijk eten. Mijn mind is tot rust gekomen tijdens de meditaties en gevuld met waardevolle inzichten tijdens de oefeningen. Mijn soul is opgelicht door liefde, warmte en vertrouwen! Dank jullie wel voor deze bijzondere en onvergetelijke ervaring die mij weer een stapje dichter bij mezelf heeft gebracht en het licht in mij heeft versterkt! Een mooier cadeau had ik mezelf niet kunnen geven! Liefs, Anne',
    name: 'Anne',
    avatar: 'anne.jpeg',
  },
  {
    title: 'Hart Aan, Verstand Uit',
    text: 'Woorden geven aan deze ervaring is eigenlijk onmogelijk voor mij. Mijn ervaring van de Corazón-retraite staat in mijn hart geschreven, maar ik zal een poging doen er woorden aan te geven. Met een gevoel van opwinding ging ik naar de Corazón retraite waar Merel, Cornelie en Anna mij met open harten ontvingen. Ik werd gezien en gehoord en mocht zijn zoals ik me op dat moment prettig voelde. Deze omgeving alleen al was een geschenk op zich. Merel, Cornelie en Anna creëerden een veilige sfeer om het leven in al zijn facetten te verkennen. Dit alles zonder oordeel. Iets zeggen was oké. Niets zeggen werd ook geaccepteerd. De kracht van de organisatie door moeder en dochter is dat je als deelnemer voelt en ervaart dat alle onderwerpen die aan bod komen van alle tijden zijn. Het meest verrast was ik door de uitnodiging om letterlijk mijn intuïtie te volgen met een krijtje op het lichaam van een andere deelnemer. Hierdoor kwam ik mooi in de flow. Het was verstand uit en hart aan',
    name: 'Lotte',
    avatar: 'LOTTE.png',
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#F4F3ED] py-16">
      <div className="max-w-7xl mx-auto space-y-12 px-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Mooie woorden</h1>
          <p className="max-w-xl mx-auto font-sans">
            Duiken in de ervaringen van onze deelnemers biedt een mozaïek van
            emoties, openbaringen en diepe verbindingen. Van intuïtieve
            ontdekkingen tot bevrijdende realisaties, elke stem echoot het hart
            van wat Corazón Retreat werkelijk is.
          </p>
        </div>
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 justify-items-center gap-y-8">
          {testimonials.map((item) => (
            <div key={item.name}>
              <div className="bg-white shadow-lg p-8 rounded-xl relative text-center mb-8">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white "></div>
                <h3 className="text-xl font-bold">"{item.title}”</h3>
                <p className="text-center text-gray-600 text-sm mt-4 font-sans">
                  ‟{item.text}”
                </p>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <img
                  className="w-16 h-16 rounded-full mb-2 object-cover object-center"
                  src={item.avatar}
                  alt={item.name}
                />
                <div className="text-center mt-2">
                  <p className="font-bold">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
