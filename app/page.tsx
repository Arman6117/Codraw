import BrainStormSection from "@/components/LandingPage/BrainStorm/BrainStormSection";
import Button from "@/components/Button";
import HeroSection from "@/components/LandingPage/Hero/HeroSection";
import Navbar from "@/components/Navbar";
import RealTimeNotesSection from "@/components/LandingPage/RealTimeNotes/RealTimeNotesSection";
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
      
        <section className="pl-14 py-5 h-screen " >
          <BrainStormSection/>
        </section>
        <section className="pl-14 py-5 h-screen " >
          <RealTimeNotesSection/>
        </section>
        <section className="pl-14 py-5 w-full justify-center items-center flex">

        <Button href="/auth/register" className="py-4 w-1/2 px-10 bg-gray-600 hover:bg-gray-950 transition-all"  >
          Sign Up For Free
        </Button>
        </section>
      </main>
      <footer className="pl-14 py-5 w-full justify-center text-center items-center flex">
        <h1>2024 All Rights Reserved</h1>
      </footer>
    </>
  );
}
