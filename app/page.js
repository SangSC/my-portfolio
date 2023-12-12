// components
// import Services from "@/components/Services";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative mb-8">
        <Hero />
      </div>
      <div className="relative mb-20">
        <About />
      </div>
      {/* <Services /> */}
      <div className="relative mb-12">
        <Work />
      </div>
    </main>
  );
}
