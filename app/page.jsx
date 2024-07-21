import Image from "next/image";

// import component
import { Navbar } from "@/components/navbar/navbar";
import { BodyContent } from "@/components/content/bodyContentn";

export default function Home() {
  return (
    <main className="relative w-full h-[100vh] overflow-x-hidden overflow-y-auto bg-custom-almost-white">
      <section className="relative w-full h-full  bg-custom-almost-white">
        {/*//! NAVBAR */}
        <Navbar/>

        {/*//! CONTENT BODY */}
        <BodyContent/>
      </section>
    </main>
  );
}
