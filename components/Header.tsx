import Link from "next/link";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Retreats", href: "/retreats" },
];

const navigation2 = [
  { name: "Accommodation", href: "/accommodation" },
  { name: "Contact", href: "/contact" },
  // { name: "Retreats", href: "#" },
];

export default function Header() {
  const router = useRouter();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.route]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`z-10 w-full  ${router.route === "/" ? "fixed" : "sticky"} `}>
      <nav
        className={`flex items-center justify-between py-4  lg:px-8 ${
          router.route === "/" ? "bg-transparent" : "bg-[#A8C0BF]"
        } `}
        aria-label="Global">
        <div className="hidden lg:flex lg:flex-1 lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-bold leading-6 text-white hover:text-[#F2E7D4]">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex">
          <Link href="/" className="py-1.5 px-4">
            <img className="h-12 w-auto" src="/corazon-logo-wit.png" alt="" />
          </Link>
        </div>

        <div className="flex lg:flex-1 lg:justify-end items-center">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation2.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-bold leading-6 text-white hover:text-[#F2E7D4]"
                onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#A8C0BF] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <img className="h-12 w-auto" src="/corazon-logo-wit.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 pt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2 pt-2">
                {navigation2.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
