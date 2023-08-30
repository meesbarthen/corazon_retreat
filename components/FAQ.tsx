import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Is dit retreat open voor alle leeftijden?",
    answer:
      "Wij hebben een minimale van 21, maar wij kunnen altijd uitzonderingen maken. Wij willen wel een gesprek om te kijken of",
  },
  {
    question: "Heb ik genoeg tijd tussendoor?",
    answer:
      "Ja, zeker heb je genoeg vrije tijd. Wij geloven dat het erg belangrijk is om rust te nemen tussendoor om ook dingen te integreren. Wij zijn wel een retreat dat we wel  van je vragen om elke sessie mee te doen of  er in ieder geval bij te zitten, omdat we een veilige setting willen creëren.",
  },
  {
    question: "Voor wie is ons retreat niet?",
    answer:
      "Voor vrouwen die geen verandering willen in hun leven en zichzelf niet uit hun comfortzone willen halen. Ook niet voor vrouwen die 5 dagen hun eigen schema willen bepalen en maar doen waar ze zin in hebben. Wij willen commited vrouwen die op zoek zijn naar vernieuwing in hun leven en nieuwsgierig zijn naar meer.",
  },
  {
    question: "Hoe groot is de groep?",
    answer: "Max 11 deelnemers",
  },
  {
    question: "Kan ik een extra nacht verblijven?",
    answer:
      "De nacht ervoor mag je blijven maar helaas de dagen erna niet. Dan willen wij graag weer in onze eigen cocon.",
  },
  {
    question: "Hoe zit het met transport van en naar de locatie?",
    answer:
      "Wij halen jullie op en brengen jullie weer naar het vliegveld. Je hebt dus geen vervoer nodig tijdens de retreat dagen.",
  },
  {
    question: "Hoe zit het met overnachten?",
    answer:
      "Je slaapt met je moeder/dochter op 1 kamer. Als jullie daar problemen mee hebben, stuur ons dan een berichtje.",
  },
  {
    question: "Wat moet ik zelf meenemen?",
    answer:
      "Wij sturen later nog alle informatie wat je moet meenemen. Maar het is zo min mogelijk, maar sowieso  een journal etc.",
  },
  {
    question: "Is er een follow up gesprek?",
    answer: "Ja we gaan een zoom doen met iedereen en 1 apart gesprek.",
  },
  {
    question: "Wordt er rekening gehouden met dieetwensen of allergieën?",
    answer:
      "Ja wij serveren glutenvrije, gezonde maaltijden, maar als je vegan bent of andere dieetwensen/allergieeen dan nemen we daar ook rekening mee.",
  },
  // More questions...
];

export default function FAQ() {
  return (
    <div className="bg-[#F2E7D4]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
