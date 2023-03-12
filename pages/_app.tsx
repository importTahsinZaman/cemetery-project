import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="px-10 py-6">
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}
