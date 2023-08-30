import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Libre_Baskerville } from "next/font/google";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const libreBakerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libreBakerville",
  style: ["normal"],
});
const patheos = localFont({
  src: "./fonts/patheos-regular.otf",
  variable: "--patheos-regular",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <main className={`${libreBakerville.variable} font-sans ${patheos}`}>
        {router.pathname !== "/" && <Header />}
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
