import { Link } from "@heroui/link";
import React from "react";
import { LogoImage, WhatsappColoredImage } from "../icons";

export const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col h-96 w-full items-center justify-center py-3">
      <div className="flex flex-col justify-center items-center py-12">
        <div className="mx-6">
          <LogoImage />
        </div>
        <div className="flex gap-3 items-center text-center">
          <p className="text-sm md:text-lg lg:text-3xl mb-6">
            Have a project in mind?{" "}
            <Link
              isExternal
              href="https://api.whatsapp.com/send/?phone=66642466403&text&type=phone_number&app_absent=0"
              title="nightwingdigital.co homepage"
            >
              <i className="font-semibold text-sm md:text-lg lg:text-3xl text-secondary">
                Lets Discuss
              </i>
            </Link>
          </p>
          <div className="mb-10">
            <WhatsappColoredImage />
          </div>
        </div>
      </div>

      <Link
        isExternal
        className="flex text-center items-center gap-1 px-2"
        href="https://nightwingdigital.co/"
        title="nightwingdigital.co homepage"
      >
        <span className="text-xs lg:text-md text-default-600">
          Copyright © 2025{" "}
          <span className="text-secondary">
            Nightwing Digital Solutions Co., Ltd.
          </span>{" "}
          All rights reserved.
        </span>
      </Link>
    </footer>
  );
};
