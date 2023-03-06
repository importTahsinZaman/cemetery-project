import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

// Top navbar
export default function Navbar() {
  const router = useRouter();
  const location = router.pathname;
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="fixed z-50 w-full border-b-2 border-black bg-primary_bg text-black">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-2 md:block">
            <a href="/">
              <h2 className="text-xl font-bold">HIGGONS</h2>
            </a>
            <div className="md:hidden">
              <button
                className="rounded-md p-1 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className={
                  location === "/" ? "border-x-2 border-black px-4" : ""
                }
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={
                  location === "/biography"
                    ? "border-x-2 border-black px-4"
                    : ""
                }
              >
                <Link href="/biography"> Biography</Link>
              </li>
              <li
                className={
                  location === "/timeline" ? "border-x-2 border-black px-4" : ""
                }
              >
                <Link href="/timeline"> Timeline</Link>
              </li>
              <li
                className={
                  location === "/documents"
                    ? "border-x-2 border-black px-4"
                    : ""
                }
              >
                <Link href="/documents">Documents</Link>
              </li>
              <li
                className={
                  location === "/gallery" ? "border-x-2 border-black px-4" : ""
                }
              >
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
