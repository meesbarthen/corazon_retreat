const features = [
  {
    name: "Pick up + drop off airport",
  },
  {
    name: "Gezonde maaltijden",
  },
  {
    name: "Onbeperkt drinken en snacks",
  },
  {
    name: "Yoga",
  },
  {
    name: "Breathwork",
  },
  {
    name: "Wandelingen",
  },
  {
    name: "Sound Healing",
  },
  {
    name: "Dagelijkse workshops",
  },
  {
    name: "Energy Healing + 30 minuten massage",
    description:
      "Receive holistic energy healing along with a rejuvenating 30-minute massage.",
  },
  {
    name: "Transformational Cupping sessie",
  },
  {
    name: "Vier of vijf overnachtingen",
  },
  {
    name: "Begeleid door ervaren vrouwen",
  },
];

export default function WhatToExpect() {
  return (
    <div className="bg-[#F2E7D4] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Wat kan ik verwachten?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-sans mb-10">
            Het Blossom Your Heart Retreat vindt plaats van donderdagavond 23
            november tot dinsdag 28 november 2023. Jullie zijn van harte welkom
            om vanaf donderdagavond of uiterlijk op vrijdagochtend voor 11.00
            uur aan te komen. Dit geeft jullie de gelegenheid om het huis en de
            omgeving te verkennen en je snel thuis te voelen. De eerste
            ceremonie staat gepland op vrijdag rond 13.00 uur. We sluiten het
            retreat af op 28 november met een gezamenlijk ontbijt, gevolgd door
            een eindceremonie die tot ongeveer 14.00 uur zal duren.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-7xl ">
          <dl className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center w-full">
                <dt className="flex flex-col items-center gap-x-3 text-base font-sans leading-7 text-gray-900">
                  <img
                    src="/Corazon_BeeldmerkBruin.png"
                    alt=""
                    className="h-8 w-8 self-center"
                  />
                  <p className="text-center mt-4">{feature.name}</p>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  {/* Add your content for feature.description here */}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd-Uf0Iqw8l4TjsL53ep0yQKUGeqTXeWWIlWnH3clO14kAakw/viewform"
          target="_blank"
          className="rounded-md flex justify-center items-center max-w-xs bg-[#AE8466] mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 font-sans">
          Ja, ik wil hier bij zijn!
        </a>
      </div>
    </div>
  );
}
