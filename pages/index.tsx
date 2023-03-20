import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="my-8 flex h-20 flex-col items-center justify-center text-center text-black">
        <h1 className="text-5xl font-bold">
          APUSH STUDENTS COMPLETE CEMETERY PROJECT <br></br> -- READ RESEARCH
          BELOW --
        </h1>
        <hr className="mt-2 w-[70%] border-[1.5] border-black"></hr>
      </div>
      <div className="my-2 flex">
        <PageTransition></PageTransition>
        <div className="w-[70%] border-r-[2.5px] border-dashed border-black">
          <h1 className="mx-3 border-2 border-black p-2 text-center text-4xl font-semibold text-black">
            The Life and Legacy of<br></br>John Axford Higgons (1863 - 1951)
          </h1>
          <div className="flex flex-row">
            <div>
              <h2 className="py-2 px-3 pt-3 text-lg">
                While the genealogy of John Axford Higgons' ancestors remains
                relatively obscure, it is known that his family originated from
                the British Isles. Immigration was present in both his paternal
                and maternal lineages, as his father was an English immigrant
                and his mother, though born in New York, was the child of
                English immigrants...{" "}
                <Link className="underline" href="/biography">
                  Continue Reading
                </Link>
              </h2>
              <h1 className="ml-3 text-2xl font-semibold">
                What is the Cemetery Project?
              </h1>
              <h2 className="p-3 py-2 text-lg">
                The Cemetery Project is an annual historical research project
                conducted by 11th-grade A.P. United States History (APUSH)
                students at Julia R. Masterman High School. The project aims to
                reinforce students’ historical and critical thinking skills,
                academic writing abilities, capacity for contextualization, and
                ambition for investigation. It is a several-month-long endeavor
                that sees groups of students working to structure and present
                their findings through multiple mediums. The project begins at
                the Woodlands Cemetery in West Philadelphia, one of the city’s
                many historic sites and the final resting place for celebrated
                surgeons, high-ranking military officials, and university
                founders.
              </h2>
              <h2 className="hidden px-3 text-lg 2xl:block">
                The project begins at the Woodlands Cemetery in West
                Philadelphia, one of the city’s many historic sites and the
                final resting place for celebrated surgeons, high-ranking
                military officials, and university founders. In early fall, all
                APUSH students participate in an excursion to the location where
                they, in their respective groups, navigate through the tens of
                thousands of graves and select a few top candidates for their
                project. While only certain deceased may be researched given
                time period restrictions and other specifications, there are
                still thousands buried for students to choose from whose stories
                have yet to be researched. After narrowing down their selections
                to a singular candidate, groups are given the go-ahead to begin
                an in-depth investigation on their subject.
              </h2>

              <h2 className="hidden px-3 pt-2 text-lg 2xl:block">
                Tasked with finding dozens of primary and secondary sources to
                connect the pieces of their subject’s life, students searched
                through archives, virtual repositories, libraries, and the
                general internet to acquire information on their subject and
                relevant context. All research is eventually compiled into a
                formal paper and a website, both detailing the context of the
                time period through which the subject lived, a biography, and
                summaries of evidence gathered through research. The project is
                submitted in late winter.
              </h2>
            </div>
            <Image
              className="min-h-[25]2%] m-5 max-h-[25%] min-w-[45%] max-w-[45%]"
              src={`https://i.imgur.com/BrWAabY.jpg`}
              alt={""}
              width={3000}
              height={3000}
            ></Image>
          </div>
          <h2 className="px-2 text-lg 2xl:hidden">
            The project begins at the Woodlands Cemetery in West Philadelphia,
            one of the city’s many historic sites and the final resting place
            for celebrated surgeons, high-ranking military officials, and
            university founders. In early fall, all APUSH students participate
            in an excursion to the location where they, in their respective
            groups, navigate through the tens of thousands of graves and select
            a few top candidates for their project. While only certain deceased
            may be researched given time period restrictions and other
            specifications, there are still thousands buried for students to
            choose from whose stories have yet to be researched. After narrowing
            down their selections to a singular candidate, groups are given the
            go-ahead to begin an in-depth investigation on their subject.
          </h2>

          <h2 className="px-2 pt-2 text-lg 2xl:hidden">
            Tasked with finding dozens of primary and secondary sources to
            connect the pieces of their subject’s life, students searched
            through archives, virtual repositories, libraries, and the general
            internet to acquire information on their subject and relevant
            context. All research is eventually compiled into a formal paper and
            a website, both detailing the context of the time period through
            which the subject lived, a biography, and summaries of evidence
            gathered through research. The project is submitted in late winter.
          </h2>
          <h1 className=" pt-2 text-3xl font-semibold">
            A Reverend of Many Talents
          </h1>
          <div className="flex">
            <Image
              className=" max-h-[25%] min-h-[25%] min-w-[42%] max-w-[42%] pt-2"
              src={`https://i.imgur.com/xJHq7Tm.jpg`}
              alt={""}
              width={3000}
              height={3000}
            ></Image>
            <h2 className="py-2 pl-1 pr-2 text-lg">
              Out of three final candidates found during the excursion to the
              Woodlands Cemetery, Reverend John Axford Higgons, D.D., was
              selected as the subject by this group because of the established
              denominational records associated with church ministry. The
              Reverend was a man of many talents, working as a clerk, banker,
              and minister in churches all over the east coast. He persevered
              through the death of his child, the destruction of his church and
              home, and the paralysis of his son. He attended prestigious
              educational institutions and rose to become a sought-after guest
              speaker at religious meetings in New York, Pennsylvania, New
              Jersey, and Massachusetts. Yet, through it all, he maintained an
              unwavering commitment to his faith, morals, community, and family
              until his death in 1951.
            </h2>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="p-5">
            <h1 className="text-2xl font-bold">Table of Contents</h1>
            <br />
            <ul className="text-base">
              <li className="py-1">
                <Link className="" href="/biography">
                  1. Biography - Read an extensive biography on Higgons's life
                </Link>
              </li>
              <li className="py-1">
                <Link className="" href="/timeline">
                  2. Timeline - View the major events that affected Higgons in
                  chronological order
                </Link>
              </li>
              <li className="py-1">
                <Link className="" href="/documents">
                  3. Documents - Read the documents used to craft Higgons's
                  story
                </Link>
              </li>
              <li className="py-1">
                <Link className="" href="/gallery">
                  4. Gallery - View snapshots of the journey of putting together
                  the pieces of Higgons's life
                </Link>
              </li>
            </ul>
          </div>
          <h2 className="text-md border-t-2 border-b-2 border-r-2 border-[#162d1c] py-5 px-4">
            This project was completed by Larry Huang (2), Aakash Jha (2), Tino
            Karakousis (2), Justin Liu (2), Aryan Patel (2), Tahsin Zaman (2) in
            2023
          </h2>
        </div>
      </div>
    </>
  );
}
