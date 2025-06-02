import Image from "next/image";
import { ConsultButton } from "../ConsultButton";
import { title } from "../primitives";
import { useBreakpoint } from "../useBreakpoint";

export const License = () => {
  const { lg } = useBreakpoint();

  return (
    <section
      id="license"
      className="pb-32 relative flex flex-col justify-center items-center text-black"
    >
      {!lg && <ConsultButton />}
      <div className="mx-auto flex flex-col items-center gap-6 mt-16 lg:mt-0">
        <div className="lg:grid lg:grid-cols-2 items-center justify-between lg:h-60">
          <div className="flex flex-col gap-4 lg:max-w-2xl px-12 lg:px-0">
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

          {lg && (
            <div className="flex justify-end">
              <ConsultButton />
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          {" "}
          <Image
            src="/doc.webp"
            alt=""
            width={lg ? 600 : 400}
            height={lg ? 600 : 400}
          />{" "}
          <div className="flex flex-col gap-4 mx-12 lg:mx-0">
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
