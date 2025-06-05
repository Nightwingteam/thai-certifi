"use client";

import React from "react";
import Image from "next/image";
import { title } from "../primitives";
import { useBreakpoint } from "../useBreakpoint";
import { motion } from "framer-motion";

export const Banner = () => {
  const { lg } = useBreakpoint();

  return (
    <section className="lg:grid lg:place-content-center h-screen pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-screen max-w-screen-xl flex flex-col lg:flex-row gap-20 px-4 py-16 sm:py-24 items-center lg:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/kstc.webp"
            alt=""
            width={lg ? 400 : 200}
            height={lg ? 400 : 200}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-left"
        >
          <div className="flex flex-col">
            <span className={title({ weight: "semibold" })}>
              We are your trusted partner{" "}
            </span>
          </div>
          <div className="flex lg:pt-6">
            <span className={title({ weight: "semibold" })}>
              for{" "}
              <span
                className={title({ color: "secondary", weight: "semibold" })}
              >
                NBTC Certification
              </span>{" "}
              in Thailand
            </span>
          </div>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            Specializing in fast, hassle-free compliance for telecommunications
            equipment. With deep expertise in Thai regulations and years of
            experience, we simplify the certification process from document
            preparation and testing coordination to NBTC submissions and
            approvals.
          </p>

          <div className="mt-4 -ml-8 lg:gap-6 flex sm:mt-6">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-end justify-between rounded-lg p-2"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/hand-star.webp"
                  alt=""
                  width={lg ? 160 : 100}
                  height={200}
                />

                <div>
                  <p className="text-4xl lg:text-6xl font-semibold text-secondary">
                    25
                  </p>

                  <p className="text-lg font-medium">Year of Experience</p>
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-end justify-between rounded-lg p-2"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/success.webp"
                  alt=""
                  width={lg ? 150 : 100}
                  height={200}
                />

                <div>
                  <p className="text-4xl lg:text-6xl font-semibold text-secondary">
                    98%
                  </p>

                  <p className="text-lg font-medium">Successful Client</p>
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
