import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-14 py-4">
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <HeroSection/>
        </section>
      </main>
    </main>
  );
}
