import Image from "next/image";
import { title } from "../primitives";
import { Button } from "@heroui/button";
import { ArrowNarrowRight } from "@untitled-ui/icons-react";

export const License = () => {
  return (
    <section
      id="license"
      className="pb-32 relative flex flex-col justify-center items-center text-black"
    >
      <div className="mx-auto flex flex-col items-center gap-6">
        <div className="grid grid-cols-2 items-center justify-between h-60">
          <div className="flex flex-col gap-4 max-w-2xl">
            <p className="text-xl font-semibold">License Applications</p>
            <span
              className={title({
                color: "secondary",
                weight: "semibold",
                size: "sm",
              })}
            >
              SDoC, Class A/B/C, Trade License, Operator Code assistance.
            </span>
          </div>
          <div className="flex justify-end">
            <Button
              className="bg-secondary"
              size="lg"
              endContent={<ArrowNarrowRight />}
            >
              <span className="text-white">Free Consulting</span>
            </Button>
          </div>
        </div>

        <div className="flex">
          {" "}
          <Image src="/doc.webp" alt="" width={600} height={600} />{" "}
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">What is the NBTC?</p>
            <ul className="list-disc font-light">
              <li className="ml-4 my-2 text-xl/8">
                Responsibilities: Frequency control, consumer protection,
                equipment standards.
              </li>
            </ul>

            <p className="text-xl font-semibold">
              Why is NBTC Certification Important?
            </p>
            <ul className="list-disc font-light">
              <li className="ml-4 my-2 text-xl/8">
                Legal requirement for distributing telecom equipment in
                Thailand.
              </li>
              <li className="ml-4 my-2 text-xl/8">
                Ensures compliance with technical standards and consumer safety.
              </li>
            </ul>

            <p className="text-xl font-semibold">Who Needs to Register?</p>
            <ul className="list-disc font-light">
              <li className="ml-4 my-2 text-xl/8">
                Manufacturers, importers, retailers, advertisers
                (local/foreign).
              </li>
              <li className="ml-4 my-2 text-xl/8">
                Requirement for a Thai representative or registered Thai
                company.
              </li>
            </ul>

            <div className="flex flex-col">
              <p className="text-xl font-semibold">Required documents?</p>

              <ul className="text-xl font-light">
                <li className="font-semibold">SDoC</li>
                <li>Company certificate (not older than 3 months)</li>
                <li>Power of attorney</li>
                <li>
                  Copy of the national ID card of the grantor and the authorized
                  person
                </li>
                <li>Test Report</li>
                <li>Catalog</li>
                <li>Brochure</li>
                <li>Picture</li>
                <li>User Manual</li>
                <li>**Sign and stamp the company's seal on every document.</li>
                <li>Processing time: 1 week (excluding device testing time)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
