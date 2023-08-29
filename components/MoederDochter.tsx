const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "37" },
  { label: "Countries", value: "12" },
  { label: "Raised", value: "$25M" },
];

export default function MoederDochter() {
  return (
    <div className="bg-[#F4F3ED] py-4 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/merel-cornelie.jpg"
                alt=""
              />
              <figure className="relative isolate mt-40">
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                  <p>
                    “Door onze unieke moeder-dochter reis ontdekken we samen de
                    essentie van ware verbinding.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  <strong className="font-semibold text-white">
                    Cornelie Barthen en Merel Barthen,
                  </strong>
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Het Hart van Moeder-Dochter Verbinding
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Wij, Cornelie en Merel, moeder en dochter, zijn in 2022
                  gestart met Corazón Retreat. We organiseren retreats in een
                  veilige omgeving op een prachtige locatie op Ibiza. Onze
                  passie is om vrouwen te helpen een diepere verbinding met
                  zichzelf te vinden en hun innerlijke kracht te ontdekken,
                  zodat ze in staat zijn om hun leven ten volle te leven.
                  Terwijl wij vorig jaar individuele retreats met liefde hebben
                  gegeven, zijn wij nu super enthousiast over ons nieuwe
                  concept: de Moeder- en Dochter retreats.
                </p>
                <p className="mt-8">
                  De afgelopen jaren hebben wij afzonderlijk en samen een hele
                  reis afgelegd, waardoor onze band nog specialer en dieper is
                  geworden. Dat gunnen wij iedereen. Het is namelijk van groot
                  belang om een goede relatie met elkaar te hebben; dit heeft
                  immers een positieve invloed op je hele leven. Daarom kunnen
                  wij niet wachten om dit met jullie te delen.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-[#AE8466] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Get to know us!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
