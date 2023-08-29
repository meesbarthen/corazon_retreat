import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bakersville = localFont({
  src: "./fonts/LibreBaskerville-Regular.ttf",
  variable: "--bakersville-regular",
});

const surt = localFont({
  src: "./fonts/patheos-regular.otf",
  variable: "--patheos-regular",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      {router.pathname !== "/" && <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
