import { Link } from "@heroui/link";
import { ArrowNarrowRight } from "@untitled-ui/icons-react";
import React from "react";

export const ConsultButton = () => {
  return (
    <a
      href="mailto:thaicertifi@gmail.com"
      className="flex h-16 items-center bg-white rounded-lg p-[0.5px]"
    >
      <div className="text-xs font-semibold text-white bg-secondary w-full flex justify-center px-2 lg:py-2 lg:px-4 items-center h-full text-center my-2 rounded-l-lg">
        Free Consulting
      </div>
      <div className="lg:w-12 ml-2">
        <ArrowNarrowRight className="text-secondary" />
      </div>
    </a>
  );
};
