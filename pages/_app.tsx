import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const bakersville = localFont({
  src: "./fonts/LibreBaskerville-Regular.ttf",
  variable: "--bakersville-regular",
});

const surt = localFont({
  src: "./fonts/patheos-regular.otf",
  variable: "--patheos-regular",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
