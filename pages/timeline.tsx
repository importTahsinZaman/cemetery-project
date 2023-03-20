import Head from "next/head";
import PageTransition from "@/components/PageTransition";

export default function timeline() {
  const css = `
  .tl-slide.tl-full-image-background p, .tl-slide.tl-full-color-background p, .tl-slide.tl-full-image-background h1, .tl-slide.tl-full-color-background h1, .tl-slide.tl-full-image-background h2, .tl-slide.tl-full-color-background h2, .tl-slide.tl-full-image-background h3, .tl-slide.tl-full-color-background h3, .tl-slide.tl-full-image-background h4, .tl-slide.tl-full-color-background h4, .tl-slide.tl-full-image-background h5, .tl-slide.tl-full-color-background h5, .tl-slide.tl-full-image-background h6, .tl-slide.tl-full-color-background h6 {
    color: #162d1c !important;
    text-shadow: none !important;
  }
  @import url("https://fonts.googleapis.com/css2?family=Newsreader:opsz@6..72&display=swap");
  
  * {
    font-family: "Newsreader", serif;
  }

  .tl-slide-content-container{
    overflow: hidden !important;
  }
  .tl-slidenav-icon {
  color: #162d1c !important;
  }

  .tl-slidenav-title{
    color: #162d1c !important;
    }
    .tl-slidenav-description{
    color: #162d1c !important;

    }
`;

  return (
    <div className="flex h-screen w-[100%]">
      <PageTransition></PageTransition>
      <Head>
        <link
          title="timeline-styles"
          rel="stylesheet"
          href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css"
        ></link>
        <script type="text/javascript">
          timeline = new TL.Timeline('timeline-embed',
          'https://docs.google.com/spreadsheets/d/1LnwogYjXlV3WjsXrCoMVkqb4PFkx9pH7jA7ekb6knrU/edit#gid=0');
        </script>
        <style>{css}</style>
      </Head>

      <div id="timeline-embed" className="h-screen w-screen"></div>
    </div>
  );
}
