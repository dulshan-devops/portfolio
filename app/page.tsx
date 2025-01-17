import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        {/* <Hero /> */}
        <NavBar />
        <Header />
        <Grid/>
        <RecentProjects />
        <Clients />
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
