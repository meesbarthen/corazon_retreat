import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="relative isolate bg-[#F4F3ED]">
      <div className="mx-auto flex flex-col-reverse md:flex-row max-w-7xl justify-between">
        <div className="relative px-6 pb-12 pt-12 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg text-[#AE8466]">
            <h2 className="text-3xl font-bold tracking-tight">Informatie</h2>
            <dl className="mt-10 space-y-4 text-base leading-7 font-sans">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>La Isla Bonita, Spanje</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+31 651911944">
                    Cornelie: +31 6 51911944
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-white font-sans"
                    href="tel:+31 642747849"
                  >
                    Merel: +31 6 42747849
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6" aria-hidden="true" />
                </dt>
                <dd>
                  <a
                    className="hover:text-white"
                    href="mailto:cornelie@barthen.com"
                  >
                    cornelie@barthen.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="relative px-6 pb-12 pt-12 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg items-start text-[#AE8466]">
            <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
            <p className="mt-6 text-lg leading-8 font-sans">
              Ben je nieuwsgierig of voel je dit is helemaal wat voor mij? Vul
              dan je gegevens in via het contactformulier en wij sturen je een
              e-mail met meer informatie. Of bel{' '}
              <a className="underline" href="tel:+31 642747849">
                Merel
              </a>{' '}
              of{' '}
              <a className="underline" href="tel:+31 651911944">
                Cornelie
              </a>{' '}
              voor een vrijblijvend gesprek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
