import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Retreats", href: "/retreats" },
  // { name: "Company", href: "#" },
];

const navigation2 = [
  { name: "Accommodation", href: "/accommodation" },
  { name: "Contact", href: "/contact" },
  // { name: "Retreats", href: "#" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#A8C0BF]">
      <video
        autoPlay
        loop
        muted
        height={1080}
        className="min-h-fit h-auto w-[100vw] object-contain"
        src="/corazon-retreat.mp4"></video>
    </div>
  );
}
