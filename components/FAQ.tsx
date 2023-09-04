import { Disclosure } from '@headlessui/react';
import {
  HeartIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Voor wie is ons retreat?',
    answer:
      'Voor vrouwen, die verandering wensen in hun leven en uit hun comfortzone willen komen. En voor vrouwen die 5 dagen lang verrast, uitgedaagd en verwend willen worden.',
  },
  {
    question: 'Is dit retreat voor alle leeftijden?',
    answer:
      'Wij hebben een minimumleeftijd van 21 jaar, omdat we geloven dat vanaf die leeftijd de scherpe randjes van de moeder-dochterrelatie afgaan en er opening is voor heling en diepere verbinding. We staan open voor andere meningen/zienswijzen,dus overleg is mogelijk over eventueel jongere participanten.',
  },
  {
    question: 'Heb ik genoeg tijd tussendoor tijdens het retreat?',
    answer:
      'Jazeker, je hebt genoeg vrije tijd. Wij geloven dat het erg belangrijk is om rust te nemen tussendoor om ervaringen te integreren. De sessies zijn alleen niet facultatief, omdat we een veilige omgeving voor iedereen willen creëren.',
  },
  {
    question: 'Hoe groot is de groep?',
    answer: 'De groep kan uit maximaal 11 deelnemers bestaan.',
  },
  {
    question: 'Hoe ziet een dag eruit?',
    answer:
      'Wij willen niet te veel delen over het uiteindelijke programma. De pijlers die op onze website behandeld worden, komen in ieder geval aan bod. Kom met een open vizier en laat je verrassen.',
  },
  {
    question: 'Wat zijn de annuleringsvoorwaarden?',
    answer:
      'We gaan ervan uit dat je het retreat niet zonder goede reden annuleert. Indien je binnen een maand voor aanvang van het retreat toch daartoe genoodzaakt bent, doen wij beiden -jij en Corazón retreat- ons uiterste best om jouw plek op te vullen. Slagen wij hier beiden niet in, dan berekenen we 50% annuleringskosten. In geval van uitzonderlijke omstandigheden, zoals restricties die gepaard gaan met bijvoorbeeld COVID, laten wij het retreat op een later tijdstip doorgang vinden of we retourneren het reeds betaalde bedrag.',
  },
  {
    question: 'Kan ik een extra nacht verblijven?',
    answer:
      'Dat kan, maar alleen een dag voor aanvang van het retreat. Na de eindceremonie is het retreat afgelopen en verwachten we dat iedereen de locatie verlaat.',
  },
  {
    question: 'Hoe zit het met transport van en naar de locatie?',
    answer:
      'Wij halen je op van het vliegveld en brengen je na afloop van het retreat weer daar naar toe. Je hebt geen eigen vervoer nodig tijdens de retreatdagen.',
  },
  {
    question: 'Hoe is de kamerindeling?',
    answer:
      'Je slaapt met je moeder en/of dochter(s) op een tweepersoonskamer. In een tweepersoonsbed. Als jullie daar problemen mee hebben, stuur ons dan een berichtje. We kunnen aparte bedden creëren.',
  },
  {
    question: 'Wat moet ik zelf meenemen?',
    answer:
      'Wij sturen hier later nog uitgebreide informatie over. Alleen handbagage volstaat, want je hebt niet veel nodig tijdens het retreat. Sowieso makkelijk zittende kleding, iets speciaals voor de laatste avond en je journal.',
  },
  {
    question: 'Is er een follow-up gesprek?',
    answer:
      'Voorafgaand aan het retreat zal er via Zoom een kennismakingsgesprek plaatsvinden en na afloop een evaluatiegesprek per individu of moeder-dochter samenstelling.',
  },
  {
    question: 'Wordt er rekening gehouden met dieetwensen of allergieën?',
    answer:
      'Jazeker. De maaltijden zijn glutenvrij, gezond en zo veel mogelijk vegetarisch, maar we vinden het lekker om af en toe een visje toe te voegen. Op ons intakeformulier kun je precies aangeven wat je dieetwensen en allergieën zijn, zodat we daar rekening mee kunnen houden.',
  },
];

export default function FAQ() {
  return (
    <div className="bg-[#F4F3ED]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 font-sans">
                        <span className="text-base font-semibold leading-7 max-w-xs">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <img
                              src="/Corazon_BeeldmerkBruin.png"
                              alt=""
                              className="h-6 w-6 self-center"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 font-sans">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
