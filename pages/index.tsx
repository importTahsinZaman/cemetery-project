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
            className="m-5 max-h-[25%] min-h-[25%] min-w-[45%] max-w-[45%]"
            src={`https://i.imgur.com/KYdrxqB.jpg`}
            alt={""}
            width={482}
            height={688}
          ></Image>
          <div>
            <h2 className="py-5 px-2 text-lg">
              While the genealogy of John Axford Higgons' ancestors remains
              relatively obscure, it is known that his family originated from
              the British Isles. Immigration was present in both his paternal
              and maternal lineages, as his father was an English immigrant and
              his mother, though born in New York, was the child of English
              immigrants...{" "}
              <Link className="underline" href="/biography">
                Read Biography
              </Link>
            </h2>
            <h1 className="text-3xl font-semibold">
              What is the Cemetery Project?
            </h1>
            <h2 className="py-5 px-2 text-lg">
              The Cemetery Project is an annual historical research project
              conducted by 11th-grade A.P. United States History (APUSH)
              students at Julia R. Masterman High School. The project aims to
              reinforce students’ historical and critical thinking skills,
              academic writing abilities, capacity for contextualization, and
              ambition for investigation. It is a several-month-long endeavor
              that sees groups of students working to structure and present
              their findings through multiple mediums. The project begins at the
              Woodlands Cemetery in West Philadelphia, one of the city’s many
              historic sites and the final resting place for celebrated
              surgeons, high-ranking military officials, and university
              founders.
            </h2>
            <h2 className="hidden px-2 text-lg 2xl:block">
              The project begins at the Woodlands Cemetery in West Philadelphia,
              one of the city’s many historic sites and the final resting place
              for celebrated surgeons, high-ranking military officials, and
              university founders. In early fall, all APUSH students participate
              in an excursion to the location where they, in their respective
              groups, navigate through the tens of thousands of graves and
              select a few top candidates for their project. While only certain
              deceased may be researched given time period restrictions and
              other specifications, there are still thousands buried for
              students to choose from whose stories have yet to be researched.
              After narrowing down their selections to a singular candidate,
              groups are given the go-ahead to begin an in-depth investigation
              on their subject.
            </h2>
            <br />
            <h2 className="hidden px-2 text-lg 2xl:block">
              Tasked with finding dozens of primary and secondary sources to
              connect the pieces of their subject’s life, students searched
              through archives, virtual repositories, libraries, and the general
              internet to acquire information on their subject and relevant
              context. All research is eventually compiled into a formal paper
              and a website, both detailing the context of the time period
              through which the subject lived, a biography, and summaries of
              evidence gathered through research. The project is submitted in
              late winter.
            </h2>
          </div>
        </div>
        <h2 className="px-2 text-lg 2xl:hidden">
          The project begins at the Woodlands Cemetery in West Philadelphia, one
          of the city’s many historic sites and the final resting place for
          celebrated surgeons, high-ranking military officials, and university
          founders. In early fall, all APUSH students participate in an
          excursion to the location where they, in their respective groups,
          navigate through the tens of thousands of graves and select a few top
          candidates for their project. While only certain deceased may be
          researched given time period restrictions and other specifications,
          there are still thousands buried for students to choose from whose
          stories have yet to be researched. After narrowing down their
          selections to a singular candidate, groups are given the go-ahead to
          begin an in-depth investigation on their subject.
        </h2>
        <br />
        <h2 className="px-2 text-lg 2xl:hidden">
          Tasked with finding dozens of primary and secondary sources to connect
          the pieces of their subject’s life, students searched through
          archives, virtual repositories, libraries, and the general internet to
          acquire information on their subject and relevant context. All
          research is eventually compiled into a formal paper and a website,
          both detailing the context of the time period through which the
          subject lived, a biography, and summaries of evidence gathered through
          research. The project is submitted in late winter.
        </h2>
      </div>
      <div className="w-[30%]">
        <h1 className="mx-3 p-2 text-center text-3xl font-semibold">
          What is the Cemetery Project?
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
