"use client";

import { LogoImage, WhatsappIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { ConsultButton } from "../ConsultButton";
import { Link } from "@heroui/link";
import { useBreakpoint } from "../useBreakpoint";
import { motion } from "framer-motion";

export const Home = () => {
  const { lg } = useBreakpoint();

  const sectionVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="home"
      className="relative flex flex-col justify-center items-center h-screen home-background text-white"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.div
        className="lg:ml-60 relative z-20 container mx-auto h-screen flex flex-col justify-center text-center lg:text-start items-center lg:items-start"
        variants={containerVariants}
      >
        <motion.div className="mx-10 lg:mx-0" variants={itemVariants}>
          <LogoImage />
        </motion.div>

        <motion.div className="py-2" variants={itemVariants}>
          <span className={title()}>Streamline&nbsp;</span>
          <span className={title({ color: "secondary" })}>
            NBTC Certification
          </span>
        </motion.div>

        <motion.span className={title()} variants={itemVariants}>
          for seamless market entry in{" "}
          <span className={title({ color: "secondary" })}>Thailand</span>
        </motion.span>

        <motion.div
          className="flex mt-8 gap-4 lg:gap-6"
          variants={itemVariants}
        >
          <ConsultButton />
          <Link
            isExternal
            href={
              "https://api.whatsapp.com/send/?phone=66642466403&text&type=phone_number&app_absent=0"
            }
          >
            <Button
              startContent={<WhatsappIcon />}
              size={lg ? "lg" : "md"}
              color="primary"
              className="border border-white h-16"
            >
              Whatsapp
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
