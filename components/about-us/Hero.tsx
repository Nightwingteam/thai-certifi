import React from "react";
import { title } from "../primitives";

export const Hero = () => {
  return (
    <div className="flex flex-col text-center justify-center">
      <div className="flex flex-col text-center justify-center">
        <span className={title({ weight: "semibold" })}>
          We are your trusted partner{" "}
        </span>
      </div>
      <div className="flex justify-center text-center pt-6">
        <span className={title({ weight: "semibold" })}>
          for{" "}
          <span className={title({ color: "secondary", weight: "semibold" })}>
            NBTC Certification
          </span>{" "}
          in Thailand
        </span>
      </div>
      <div className="flex text-center my-4 text-black text-[22px] mx-96">
        With a dedicated team of consultants, we offers coordinating and
        consulting services as our client's partner to accelerate process to
        achieve their certificates.
      </div>
    </div>
  );
};
