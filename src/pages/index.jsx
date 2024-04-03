import Image from "next/image";
import { Poppins } from "next/font/google";
import Nav from "@/sections/Nav";
import Hero from "@/sections/Hero";
import Input from "@/sections/Input";
import Statistics from "@/sections/Statistics";
import Advertise from "@/sections/Advertise";
import Footer from "@/sections/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="max-container">
        <Nav />
        <Hero />
        <section className="bg-bgGray">
          <Input />
          <Statistics />
        </section>
        <Advertise />
        <Footer />
      </div>
    </main>
  );
}
