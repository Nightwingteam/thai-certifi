"use client";

import { AboutUs } from "@/components/about-us/AboutUs";
import { Footer } from "@/components/footer/Footer";
import { Home } from "@/components/home/Home";
import { License } from "@/components/license/License";
import { Service } from "@/components/service/Service";
import { Sponser } from "@/components/sponser/Sponser";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Home />

      <AboutUs />

      <License />

      <Service />

      <Sponser />

      <Footer />
    </div>
  );
}
