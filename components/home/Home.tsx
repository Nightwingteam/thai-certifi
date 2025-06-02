"use client";

import { LogoImage, WhatsappIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { ConsultButton } from "../ConsultButton";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center h-screen home-background text-white"
    >
      <div className="relative z-20 container mx-auto h-screen flex flex-col justify-center text-center lg:text-start items-center lg:items-start">
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

        <div className="flex mt-8 gap-6">
          <ConsultButton />

          <Button
            startContent={<WhatsappIcon />}
            size="lg"
            color="primary"
            className="border border-white h-16"
          >
            Whatsapp
          </Button>
        </div>
      </div>
    </section>
  );
};
