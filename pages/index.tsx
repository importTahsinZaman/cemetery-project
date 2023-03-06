import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex min-h-[97vh] grow  flex-row border-b-2 border-black bg-newspaperbg bg-contain">
        <div className="flex w-[50%] min-w-[50%] max-w-[50%] items-center justify-center">
          <div className="flex flex-col items-center p-10">
            <div className="text-black">
              <h1 className="my-5 text-9xl">John A. Higgons</h1>
              <h2 className="mt-2 text-3xl">1863 - 1951</h2>
              <p className="text-xl">
                While the genealogy of John Axford Higgons' ancestors remains
                relatively obscure, it is known that his family originated from
                the British Isles. Immigration was present in both his paternal
                and maternal lineages, as his father was an English immigrant
                and his mother, though born in New York, was the child of
                English immigrants. The surname ‘Higgons’ is most likely a
                mutation of the surname ‘Higgins.’ The surname Higgins is
                commonly linked to Ireland or the areas affected by the Norman
                Conquest...
              </p>
              <Link className="underline" href="/blogs">
                Read Biography
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-[50%] min-w-[50%] max-w-[50%] items-center justify-center border-l-2 border-black bg-primary_bg">
          <Image
            className="h-[76%] w-[70%] border-2 border-black"
            src={"/../public/ai-enhanced.png"}
            alt={""}
            width={482}
            height={688}
          ></Image>
        </div>
      </div>
      <div className="min-w-screen flex min-h-[3vh] justify-around border-b-2 border-black font-semibold">
        <p>Vol. LXXXI</p>
        <p>Five Parts-Part One</p>
        <p>CC</p>
        <p>Monday Morning, March 6 2023</p>
        <p>KTTV (Channel 11)</p>
        <p>92 pages</p>
        <p>Daily 10c</p>
      </div>
      <div className="min-w-screen flex min-h-screen flex-row border-b-2 border-black">
        <div className="w-[40%] min-w-[40%] max-w-[40%]">
          <Image
            className="h-[100%] w-[100%]"
            src={"/../public/HiggonsGrave.jpg"}
            alt={""}
            width={482}
            height={688}
          ></Image>
        </div>
        <div className="w-[60%] min-w-[60%] max-w-[60%] border-l-2 border-black p-5 ">
          <h1 className="text-2xl font-bold">Introduction</h1>
          <p className="text-lg">
            <br />
            The Cemetery Project is an annual historical research project
            conducted by 11th-grade A.P. United States History (APUSH) students
            at Julia R. Masterman High School. The project aims to reinforce
            students’ historical and critical thinking skills, academic writing
            abilities, capacity for contextualization, and ambition for
            investigation. It is a several-month-long endeavor that sees groups
            of students working to structure and present their findings through
            multiple mediums.
            <br />
            <br />
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
            <br />
            <br />
            Tasked with finding dozens of primary and secondary sources to
            connect the pieces of their subject’s life, students searched
            through archives, virtual repositories, libraries, and the general
            internet to acquire information on their subject and relevant
            context. All research is eventually compiled into a formal paper and
            a website, both detailing the context of the time period through
            which the subject lived, a biography, and summaries of evidence
            gathered through research. The project is submitted in late winter.
          </p>
        </div>
      </div>
    </>
  );
}
