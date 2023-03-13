import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { docJson } from "./docJson";

export default function documents() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === docJson.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? docJson.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  function generateHTML(text: string) {
    return { __html: text };
  }

  function numberToEncodedLetter(number: number): string {
    function getDictionary() {
      return validateDictionary("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

      function validateDictionary(dictionary: any) {
        for (let i = 0; i < dictionary.length; i++) {
          if (
            dictionary.indexOf(dictionary[i]) !==
            dictionary.lastIndexOf(dictionary[i])
          ) {
            console.log(
              "Error: The dictionary in use has at least one repeating symbol:",
              dictionary[i]
            );
            return undefined;
          }
        }
        return dictionary;
      }
    }
    //Takes any number and converts it into a base (dictionary length) letter combo. 0 corresponds to an empty string.
    //It converts any numerical entry into a positive integer.
    if (isNaN(number)) {
      return "undefined";
    }
    number = Math.abs(Math.floor(number));

    const dictionary = getDictionary();
    let index = number % dictionary.length;
    let quotient = number / dictionary.length;
    let result;

    if (number <= dictionary.length) {
      return numToLetter(number);
    } //Number is within single digit bounds of our encoding letter alphabet

    if (quotient >= 1) {
      //This number was bigger than our dictionary, recursively perform this function until we're done
      if (index === 0) {
        quotient--;
      } //Accounts for the edge case of the last letter in the dictionary string
      result = numberToEncodedLetter(quotient);
    }

    if (index === 0) {
      index = dictionary.length;
    } //Accounts for the edge case of the final letter; avoids getting an empty string

    return result + numToLetter(index);

    function numToLetter(number: number) {
      //Takes a letter between 0 and max letter length and returns the corresponding letter
      if (number > dictionary.length || number < 0) {
        return undefined;
      }
      if (number === 0) {
        return "";
      } else {
        return dictionary.slice(number - 1, number);
      }
    }
  }

  return (
    <div className="relative mt-5 flex h-full min-h-screen w-full flex-col items-center justify-center">
      <h1 className="mx-3 my-5 w-[60%] border-2 border-black p-2 text-center text-4xl font-semibold">
        The Higgons Documents
      </h1>
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute inset-y-1/2 left-[4%] z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />
      <div className="relative m-auto flex min-h-screen w-full">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 h-full w-full"
        >
          {docJson.map((content: any, index: number) => {
            if (index === currentSlide) {
              return (
                <div
                  className="flex flex-col items-center justify-center"
                  key={numberToEncodedLetter(index + 1)}
                >
                  <h1 className="mb-4 text-3xl">{`{Document ${numberToEncodedLetter(
                    index + 1
                  )}}`}</h1>
                  <Image
                    className="w-[50%]"
                    key={content.id}
                    src={content.img}
                    alt={content.caption}
                    width={3000}
                    height={3000}
                  ></Image>
                  {content.img2 && (
                    <Image
                      className="w-[50%]"
                      key={content.id + 1}
                      src={content.img2}
                      alt={""}
                      width={3000}
                      height={3000}
                    ></Image>
                  )}
                  <h2>({content.caption})</h2>
                  <br />
                  <div className="w-[80%]">
                    {content.transcription && (
                      <h2 className="text-xl font-bold">Transcription:</h2>
                    )}
                    {content.transcription && (
                      <h2
                        className="text-lg"
                        dangerouslySetInnerHTML={generateHTML(
                          content.transcription
                        )}
                      ></h2>
                    )}
                    <br />
                    <h2 className="text-xl font-bold">Citation:</h2>
                    <h2
                      className="text-lg"
                      dangerouslySetInnerHTML={generateHTML(content.citation)}
                    ></h2>
                    <br />
                    <h1 className="text-xl font-bold">Analysis:</h1>
                    <h1
                      className="text-lg"
                      dangerouslySetInnerHTML={generateHTML(content.analysis)}
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
        className="absolute inset-y-1/2 right-[4%] z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />

      <div className="absolute left-[50%] bottom-[-5%] z-20 flex translate-x-[-50%] justify-center self-center p-2">
        {docJson.map((_: any, index: number) => {
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
