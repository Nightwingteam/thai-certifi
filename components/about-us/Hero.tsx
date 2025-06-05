"use client";

import React from "react";
import { title } from "../primitives";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="hidden lg:flex flex-col text-center justify-center"
    >
      <span className={title({ weight: "semibold" })}>
        We are your trusted partner{" "}
      </span>

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
        consulting services as our client&#39;s partner to accelerate process to
        achieve their certificates.
      </div>
    </motion.div>
  );
};
