import { Html, Head, Main, NextScript } from "next/document";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import DoYouRecognize from "@/components/MoederDochter";
import CTASection from "@/components/CTASection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <Header /> */}

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
