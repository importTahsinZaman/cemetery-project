import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-w-screen flex min-h-[75vh] flex-row  bg-[#1E1D1D]">
        <div className="flex flex-col items-center p-10 text-white">
          <h1>John Higgons</h1>
          <p>
            While the genealogy of John Axford Higgons’s ancestors remains
            relatively obscure, it is known that his family originated from the
            British Isles. Immigration was present in both his paternal and
            maternal lineages, as his father was an English immigrant and his
            mother, though born in New York, was the child of English
            immigrants. The surname ‘Higgons’ is most likely a mutation of the
            surname ‘Higgins.’ The surname Higgins is commonly linked to Ireland
            or the areas affected by the Norman Conquest.{" "}
          </p>
        </div>
      </div>
      <div className="">
        <Image
          className="absolute right-[2.5%] top-[10%] h-[80%] w-[35%] rounded-[174px]"
          src={"/../public/rev.png"}
          alt={""}
          width={482}
          height={688}
        ></Image>
      </div>
      <div className="min-w-screen min-h-screen bg-[#E1D0B1]"></div>
    </>
  );
}
