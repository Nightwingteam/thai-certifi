"use client";

import { AboutUs } from "@/components/about-us/AboutUs";
import { LogoImage, WhatsappIcon } from "@/components/icons";
import { License } from "@/components/license/License";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { ArrowNarrowRight } from "@untitled-ui/icons-react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <section
        id="home"
        className="relative flex flex-col justify-center items-center h-screen home-background text-white"
      >
        <div className="relative z-20 container mx-auto h-screen flex flex-col justify-center">
          <LogoImage />
          <div className="py-2">
            <span className={title()}>Streamline&nbsp;</span>
            <span className={title({ color: "secondary" })}>
              NBTC Certification
            </span>
          </div>
          <span className={title()}>
            for seamless market entry in{" "}
            <span className={title({ color: "secondary" })}>Thailand</span>
          </span>

          <div className="flex mt-8 gap-4">
            <Button
              endContent={<ArrowNarrowRight />}
              size="lg"
              className="bg-secondary"
            >
              Free Consulting
            </Button>
            <Button
              startContent={<WhatsappIcon />}
              size="lg"
              color="primary"
              className="border border-white"
            >
              Whatsapp
            </Button>
          </div>
        </div>
      </section>

      <AboutUs />

      <License />
    </div>
  );
}
