import { Link } from "@heroui/link";
import React from "react";
import { LogoImage, WhatsappColoredImage } from "../icons";

export const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col h-96 w-full items-center justify-center py-3">
      <div className="flex flex-col justify-center items-center py-12">
        <LogoImage />
        <div className="flex gap-3 items-center">
          <p className="text-3xl mb-6">
            Have a project in mind?{" "}
            <i className="font-semibold text-secondary">Lets Discuss</i>
          </p>
          <div className="mb-10">
            <WhatsappColoredImage />
          </div>
        </div>
      </div>

      <Link
        isExternal
        className="flex items-center gap-1 px-2"
        href="https://nightwingdigital.co/"
        title="nightwingdigital.co homepage"
      >
        <span className="text-default-600">
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
