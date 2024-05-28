import { Disclosure } from "@headlessui/react";
import {
  HeartIcon,
  MinusSmallIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";

type FAQProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function FAQ({ faqs }: FAQProps) {
  return (
    <div className="bg-[#F4F3ED]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-32">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900">
            Veelgestelde vragen
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
