import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function documents() {
  const documents = [
    {
      docIndex: "A",
      img: "https://lh6.googleusercontent.com/U7DB1v_yBibal00U0FKpWdA_IeWfyCotns8E3ENPRTREO6Fb5WXul69Xpl4CHgsRjPxefQxXZwxvg6c-NrlQQzitI50ez4_UIW8vJcyFr0SDdnCfNsiy-5IgLhl3RNEOA8nrhyAfIVC2gzqS9B7VL3Q",
      caption: "1854 US Presbyterian Church Marriage Records",
      transcription: "Jan. 18th, Oliver Harvey Willard to Rebecca Ann Berstler",
      citation:
        "Third Presbyterian Church. “Presbyterian Church Records.” www.ancestry.com, January 18, 1854. https://www.ancestry.com/discoveryui-content/view/1500969850:61048?tid=&pid=&queryId=6b50a405e0ac14f11da1763366e28c38&_phsrc=klS180&_phstart=successSource.",
      analysis:
        "According to the U.S. Presbyterian Church Marriage Records, Oliver Harvey Willard and Rebecca Ann Berstler were married on January 18, 1854.  This is from the Third Presbyterian Church in Philadelphia. <br /> It can be inferred that Oliver Harvey Willard and Rebecca Ann Berstler were religious, as their marriage record is kept in a presbyterian church database. ",
    },
    {
      docIndex: "B",
      img: "https://lh3.googleusercontent.com/TLHva60yIh7ilhNpvk8U7a9hr-AloP3gq5uFICX4QdIK03y8XkXKax1c1_qQz0C-ObItEO1xSf8pe9LWhmV-G3GWfFq0VyEHZgMtBXIno007fGla2H1ahLtsm-wU1qCyDRliod_g9d7ewyJFCiWci4I",
      caption: "another one",
      transcription: "",
      citation: "",
      analysis: "",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === documents.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? documents.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  function createAnalysis(analysis: string) {
    return { __html: analysis };
  }

  function printToLetter(number: number) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    let charIndex = number % alphabet.length;
    let quotient = number / alphabet.length;
    if (charIndex - 1 == -1) {
      charIndex = alphabet.length;
      quotient--;
    }
    result = alphabet.charAt(charIndex - 1) + result;
    if (quotient >= 1) {
      printToLetter(parseInt(quotient));
    } else {
      console.log(result);
    }
    return result;
  }

  return (
    <div className="relative mt-5 flex h-full min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mx-3 w-[80%] border-2 border-black p-2 text-center text-4xl font-semibold">
        The Higgons Documents
      </h1>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />
      <div className="relative m-auto flex h-[50vh] min-h-screen w-full overflow-hidden">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {documents.map((content: any, index: number) => {
            if (index === currentSlide) {
              return (
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-3xl">{`{Document ${printToLetter(
                    index + 1
                  )}}`}</h1>
                  <Image
                    className="w-[50%]"
                    key={content.id}
                    src={content.img}
                    alt={content.caption}
                    width={300}
                    height={300}
                  ></Image>
                  <h2>({content.caption})</h2>
                  <br />
                  <div className="w-[80%]">
                    <h2 className="font-bold">Transcription:</h2>
                    <h2>{content.transcription}</h2>
                    <br />
                    <h2 className="font-bold">Citation:</h2>
                    <h2>{content.citation}</h2>
                    <br />
                    <h1 className="font-bold">Analysis:</h1>
                    <h1
                      dangerouslySetInnerHTML={createAnalysis(content.analysis)}
                    ></h1>
                  </div>
                </div>
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />

      <div className="absolute left-[50%] bottom-[2%] z-20 flex translate-x-[-50%] justify-center self-center p-2">
        {documents.map((_: any, index: number) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "mx-2 mb-2 h-3 w-3 cursor-pointer rounded-full bg-gray-700"
                  : "mx-2 mb-2 h-3 w-3 cursor-pointer rounded-full bg-gray-300"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
