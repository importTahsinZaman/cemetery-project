import Head from "next/head";

export default function biography() {
  const css = `
  .navbar.navbar-fixed-top.navbar-flex {
    display: none !important;
    visibility: hidden !important;
  }
  `;
  return (
    <>
      <Head>
        <style>{css}</style>
      </Head>
      <embed
        className="h-[100vh] w-[100%] overflow-hidden "
        src="https://www.docdroid.net/CJphxrk/higgonsbiography-pdf"
        width="100%"
        height="100%"
        type="application/pdf"
      ></embed>
    </>
  );
}
