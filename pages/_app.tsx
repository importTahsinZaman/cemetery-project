import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="px-10 py-6">
      <Head>
        <script src="https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js"></script>
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}
