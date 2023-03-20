import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PageTransition() {
  const router = useRouter();

  const [pageURL, setPageURL] = useState("");

  console.log(router.asPath);

  return (
    <>
      <div className="fixed top-[0px] left-[100%] z-50 flex h-[100vh] w-[100vw] animate-slide_out items-center justify-center overflow-hidden bg-[#eae8dd]">
        <h1 className="font-AncientFont text-7xl">THE APUSH TIMES</h1>
      </div>
      {/* <div className="fixed top-[-100%] left-[100%] z-[49] h-[230vh] w-[230vw] overflow-hidden bg-red-100 animate-in slide-in-from-left duration-1000"></div> */}
    </>
  );
}
