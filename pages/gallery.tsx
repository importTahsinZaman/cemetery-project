import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function gallery() {
  const images: any = [
    "https://i.imgur.com/ZFYoKmb.jpg",

    "https://i.imgur.com/J0lWgLF.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  return (
    <div className="relative h-full min-h-screen w-full">
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
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image}
                  layout="fill"
                  objectFit="contain"
                  className="animate-fadeIn"
                  alt={""}
                />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute inset-y-1/2 right-0 z-20 m-auto cursor-pointer text-5xl text-gray-400"
      />

      <div className="fixed left-[50%] bottom-[2%] z-20 flex translate-x-[-50%] justify-center self-center p-2">
        {images.map((_, index) => {
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
