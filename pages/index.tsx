import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-w-screen flex min-h-screen grow flex-row  border-b-2 border-black bg-[#e9d8c2]">
        <div className="flex min-w-[50%] max-w-[50%] items-center justify-center">
          <div className="flex flex-col items-center p-10 ">
            <div className="text-black">
              <h1 className="my-5 text-9xl">John A. Higgons</h1>
              <h2 className="mt-2 text-3xl">1863 - 1951</h2>
              <p className="text-lg">
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
        <div className="flex min-w-[50%] max-w-[50%] items-center justify-center border-l-2 border-black bg-[#fef9f3]">
          <Image
            className="h-[76%] w-[70%] border-2 border-black"
            src={"/../public/ai-enhanced.png"}
            alt={""}
            width={482}
            height={688}
          ></Image>
        </div>
      </div>
      <div className="min-w-screen min-h-screen bg-[#3C3C3C] ">
        <div className="p-4">
          <h1>Background</h1>
          <p>
            ​The Cemetery project, a centerpiece of the AP United States History
            course at Masterman, is the pinnacle of research at Julia R.
            Masterman. In partnership with the Woodlands Cemetery, students, in
            groups of five or six, create a complete and comprehensive biography
            of a prominent person in the 19th century. The Woodlands Cemetery
            provides a lengthy list of deceased people buried in the cemetery,
            out of which the students select their subject of research. Finding
            and investigating primary and secondary sources was the predominant
            portion of the project. Students visited the Woodlands Cemetery, the
            site of their selected person’s grave, to inspect the tombstone of
            that person and likely, his family. The Philadelphia Archives
            offered an abundance of sources, ranging from birth records to death
            certificates, from marriage records to deeds. Online resources such
            as Ancestry.com contained heaps of genealogical information and
            specific facts about a complex family history. Since records of
            women prior to the 20th century and the suffrage movement were
            irregularly documented at best, there were only three options for
            this project—all of whom were men. Males had more priority than
            females and thus yielded more information. In the preliminary years
            of this project, an attempt was made to successfully research and
            write a biography of a woman, but the records and documents that
            were found were very limited in content and value, not to mention
            the scarcity of information. Out of the three choices, Albany native
            John Gardiner was selected for his enterprise and his relevance to
            events of his time. He bought a brewery, turned it into a successful
            business, and cemented his legacy in brewing history. He was also
            the President of the Southwestern National Bank, a member of the
            Board of Trustees of several institutions, including the Central
            Presbyterian Church, the Franklin Institute, St. Andrew’s Society,
            and the Commercial Exchange. Up until the time of his death, he was
            deeply engaged in official work and worked tirelessly to improve the
            community.
          </p>
        </div>
      </div>
    </>
  );
}
