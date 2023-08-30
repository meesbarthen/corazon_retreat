export default function IntroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F2E7D4] px-6 py-6 sm:py-24 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Lieve moeder en dochter,
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Zijn jullie klaar voor een verdiepende, unieke en bijzondere
                ervaring om jullie moeder-dochterrelatie te versterken? Willen
                jullie echt waardevolle quality time met elkaar doorbrengen, en
                ook de tijd nemen om weer verbinding te maken met jullie
                innerlijke zelf? Verlangen jullie naar rust, tijd voor jezelf en
                willen jullie nieuwe inzichten krijgen over hoe jullie een leven
                vol geluk en plezier kunnen leiden? Zijn jullie enthousiast om
                gedurende 5 dagen plezier te beleven, zowel met elkaar als met
                andere inspirerende vrouwen? Dan nodigen we jullie van harte uit
                voor het moeder-dochter Blossom Your Heart Retreat in ons huis.
                Deze week biedt jullie de gelegenheid om verbinding, plezier en
                groei te ervaren en jullie onderlinge band te versterken.
              </p>
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
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[40rem] lg-[48rem] object-cover object-center max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 h-[35rem]"
            src="/WhatToExpect.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}