import Image from "next/image";

export default function gallery() {
  return (
    <>
      <div>
        <div className="flex flex-row pt-5">
          <div className="w-[50vw]">
            <h1 className="text-4xl font-semibold">awdwadwa</h1>
            <h2 className="text-lg">awdwadwa</h2>
          </div>
          <div className="w-[50vw]">
            <Image
              src={`https://residential.columbia.edu/sites/default/files/content/Building%20Profiles/Building%20Photos/600%20West%20122nd%20Street%20Main.jpg`}
              alt={""}
              width={3000}
              height={3000}
            ></Image>
          </div>
        </div>
        <hr className="my-2 border-[1.4px] border-black bg-black"></hr>
      </div>
    </>
  );
}
