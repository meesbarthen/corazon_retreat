import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Retreats', href: '/retreats' },
  // { name: "Company", href: "#" },
];

const navigation2 = [
  { name: 'Accommodation', href: '/accommodation' },
  { name: 'Contact', href: '/contact' },
  // { name: "Retreats", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#A8C0BF] h-full min-h-full">
      <header className="absolute inset-x-0 top-0 z-50 bg-transparent min-h-fit">
        <nav
          className="flex items-center justify-between p-6 pt-4 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:flex-1 lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-bold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <img className="h-12 w-auto" src="/corazon-logo-wit.png" alt="" />
            </Link>
          </div>

          <div className="flex lg:flex-1 lg:justify-end items-center">
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation2.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-bold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#A8C0BF] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-12 w-auto"
                  src="/corazon-logo-wit.png"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6">
                <div className="space-y-2 pt-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 pt-2">
                  {navigation2.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14 h-full min-h-full md:h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 -z-10 md:h-full w-full object-cover"
          src="/corazon-retreat.mp4"
        ></video>
      </div>
    </div>
  );
}
