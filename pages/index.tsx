import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-w-screen flex min-h-screen grow flex-row  bg-[#e9d8c2]">
        <div className="flex min-w-[50%] max-w-[50%] items-center justify-center">
          <div className="flex  flex-col items-center p-10 text-black">
            <h1 className="my-5 text-9xl">
              John A. Higgons
              <h2 className="mt-2 text-3xl">1863 - 1951</h2>
            </h1>
            <p className="text-lg">
              While the genealogy of John Axford Higgons’s ancestors remains
              relatively obscure, it is known that his family originated from
              the British Isles. Immigration was present in both his paternal
              and maternal lineages, as his father was an English immigrant and
              his mother, though born in New York, was the child of English
              immigrants. The surname ‘Higgons’ is most likely a mutation of the
              surname ‘Higgins.’ The surname Higgins is commonly linked to
              Ireland or the areas affected by the Norman Conquest.{" "}
            </p>
          </div>
        </div>
        <div className="flex min-w-[50%] max-w-[50%] items-center justify-center border-l-2 border-black bg-[#fef9f3]">
          <Image
            className="h-[75%] w-[70%] border-2 border-black"
            src={"/../public/rev.png"}
            alt={""}
            width={482}
            height={688}
          ></Image>
        </div>
      </div>
      <div className="min-w-screen min-h-screen bg-[#E1D0B1]"></div>
    </>
  );
}
