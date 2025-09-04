"use client";

import dynamic from "next/dynamic";
import { Footer } from "@/components/footer/Footer";

const Home = dynamic(() => import("@/components/home/Home").then(m => m.Home), { ssr: false });
const AboutUs = dynamic(() => import("@/components/about-us/AboutUs").then(m => m.AboutUs), { ssr: false });
const License = dynamic(() => import("@/components/license/License").then(m => m.License), { ssr: false });
const Service = dynamic(() => import("@/components/service/Service").then(m => m.Service), { ssr: false });
const Sponser = dynamic(() => import("@/components/sponser/Sponser").then(m => m.Sponser), { ssr: false });

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      <Home />
      <AboutUs />
      <License />
      <Service />
      <Sponser />
      <Footer />
    </div>
  );
}
