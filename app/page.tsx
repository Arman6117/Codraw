import BrainStormSection from "@/components/BrainStorm/BrainStormSection";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src={"/Aare.svg"}
        alt=""
        width={1000}
        height={1000}
        className="absolute object-cover h-screen w-screen grayscale opacity-5  -z-30"
      />

      <header className="px-14 py-4">
        <Navbar />
      </header>

      <main className="flex relative flex-col space-y-36">
    

        <section className="px-14 py-4">
          <HeroSection />
        </section>
      
        <section className="px-14 py-5 h-screen " >
          <BrainStormSection/>
        </section>
      </main>
    </>
  );
}
