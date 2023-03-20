import Image from "next/image";
import { galleryData } from "./galleryData";
import PageTransition from "@/components/PageTransition";

export default function gallery() {
  return (
    <>
      <PageTransition></PageTransition>
      <h1 className="mx-3 my-5 border-2 border-black p-2 text-center text-4xl font-semibold">
        Life in Philadelphia
      </h1>
      {galleryData.map((content: any, index: number) => {
        return (
          <div>
            <div className="flex flex-row items-center justify-center pt-5">
              <div className=" w-[50vw]">
                <h1 className="text-4xl font-semibold">{content.title}</h1>
                <h2 className="text-lg">{content.description}</h2>
              </div>
              <div className="w-[50vw]">
                <Image
                  src={content.img}
                  alt={""}
                  width={3000}
                  height={3000}
                ></Image>
              </div>
            </div>
            <hr className="my-2 border-[1.4px] border-black bg-black"></hr>
          </div>
        );
      })}
    </>
  );
}
