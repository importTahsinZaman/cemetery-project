import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import PageTransition from "@/components/PageTransition";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="mx-2 my-2 border-2 border-black px-8 py-4">
        <Head>
          <script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
        </Head>
        <Navbar></Navbar>
        <Component {...pageProps} />
      </div>
    </>
  );
}
