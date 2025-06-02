"use client";

import Image from "next/image";
import { Banner } from "./Banner";
import { Hero } from "./Hero";
import { InfoCard } from "./InfoCard";
import { useBreakpoint } from "../useBreakpoint";

export const AboutUs = () => {
  const { lg } = useBreakpoint();

  return (
    <section
      id="about-us"
      className="pt-32 relative w-screen flex-col justify-center items-center text-black"
    >
      <div className="mx-auto flex flex-col justify-center">
        <div className="absolute -z-10 w-full h-full -left-32">
          <Image src="/thailand.webp" alt="" width={1000} height={400} />
        </div>

        {lg && <Hero />}

        <InfoCard />

        <Banner />
      </div>
    </section>
  );
};
