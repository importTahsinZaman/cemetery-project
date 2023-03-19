import Head from "next/head";

export default function biography() {
  const css = `
  .navbar-fixed-top{
    display: none !important;
    visibility: hidden !important;
  }
  `;
  return (
    <>
      <Head>
        <style>{css}</style>
      </Head>
      <iframe
        className="h-[100vh] w-[100] "
        src="https://www.docdroid.net/CJphxrk/higgonsbiography-pdf"
        width="100%"
        height="100%"
      ></iframe>
    </>
  );
}
