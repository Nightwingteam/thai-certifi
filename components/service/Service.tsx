import { Button } from "@heroui/button";
import Image from "next/image";
import { ThaicertLogo } from "../thaicert";
import { Card } from "./Card";
import { DashedLine, FlexDashedLine } from "./Line";

export const Service = () => {
  return (
    <section
      id="service"
      className="pb-32 relative flex flex-col justify-center items-center text-black"
    >
      <div className="building-background h-[140vh] w-screen" />
      <div className="absolute -top-20">
        <div className="bg-primary rounded-[88px] px-12 py-20 min-w-[1400px]">
          <h1 className="text-white text-4xl flex items-center text-center justify-center pb-20">
            Applications Work Process
          </h1>
          <div className="relative flex items-center justify-between w-full mx-auto">
            <Card number={1} variant="outline">
              <p>Submit your request</p>
              <ThaicertLogo />
              <p>via email or website.</p>
            </Card>

            <DashedLine />
            <Card number={2}>
              <p>We will review your request and contact you with details.</p>
            </Card>
            <DashedLine />

            <Card number={3}>
              <p>Collect necessary documents</p>
            </Card>

            <DashedLine />

            <Card number={4}>
              <p>Request equipment test results (if required)</p>
            </Card>
          </div>

          <div className="relative flex items-center justify-center max-w-4xl w-full mx-auto mt-20">
            <Card number={5}>
              <p>We will review your request and contact you with details.</p>
            </Card>

            <FlexDashedLine />
            <Card number={6}>
              <p>Submit documents to NBTC and wait for the process.</p>
            </Card>

            <FlexDashedLine />

            <Card number={7} variant="outline">
              <Image src="/kstc-sm.webp" alt="" width={100} height={100} />
              <p className="pt-2">Licensed by NBTC.</p>
            </Card>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-32">
          <p className="text-[46px] font-medium text-center text-white max-w-5xl">
            Trusted by global manufacturers and distributors, we ensure your
            products meet NBTC standards swiftly saving you time, costs, and
            risks.
          </p>
          <div className="flex gap-4 mt-8">
            <Button
              size="lg"
              className="border border-secondary bg-transparent"
            >
              Contact us
            </Button>
            <Button size="lg" variant="bordered" className="border-white">
              Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
