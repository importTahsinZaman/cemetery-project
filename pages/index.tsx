import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="my-8 flex">
      <div className="w-[70%] border-r-[2.5px] border-dashed border-black">
        <h1 className="mx-3 border-2 border-black p-2 text-center text-4xl font-semibold">
          The Life and Legacy <br></br>of John Axford Higgons
        </h1>
        <div className="flex flex-row">
          <Image
            className="m-5"
            src={`https://i.imgur.com/KYdrxqB.jpg`}
            alt={""}
            width={482}
            height={688}
          ></Image>
          <h2 className="py-5 px-2 text-lg">
            While the genealogy of John Axford Higgons' ancestors remains
            relatively obscure, it is known that his family originated from the
            British Isles. Immigration was present in both his paternal and
            maternal lineages, as his father was an English immigrant and his
            mother, though born in New York, was the child of English
            immigrants...
          </h2>
        </div>
      </div>
      <div className="border-r-[2.5px w-[30%]">
        <h1 className="mx-3 border-2 border-black p-2 text-center text-4xl font-semibold">
          The Life and Legacy <br></br>of John Axford Higgons
        </h1>
        <h2 className="py-5 px-2 text-lg">
          While the genealogy of John Axford Higgons' ancestors remains
          relatively obscure, it is known that his family originated from the
          British Isles. Immigration was present in both his paternal and
          maternal lineages, as his father was an English immigrant and his
          mother, though born in New York, was the child of English
          immigrants...
        </h2>
      </div>
    </div>
  );
}
