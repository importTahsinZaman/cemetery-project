import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-[#F9F3E5]"></div>
      <div className="min-h-screen min-w-screen bg-blue-100"></div>
    </>
  );
}
