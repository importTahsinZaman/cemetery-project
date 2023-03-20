import PageTransition from "@/components/PageTransition";
import Head from "next/head";
import { useRef } from "react";

export default function biography() {
  const iFrame = useRef(null);

  const css = `
  .navbar-fixed-top{
    display: none !important;
    visibility: hidden !important;
  }
  `;
  return (
    <>
      <PageTransition></PageTransition>
      {iFrame && (
        <Head>
          <style>{css}</style>
        </Head>
      )}
      <iframe
        className="h-[100vh] w-[100]"
        ref={iFrame}
        src="https://www.docdroid.net/lS1h3L0/johnahiggonsbio-pdf"
        width="100%"
        height="100%"
      ></iframe>
    </>
  );
}
