import clsx from "clsx";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  color?: ColorCardType;
}

type ColorCardType = "default" | "secondary";

export const Card = ({ children, color = "default" }: CardProps) => {
  return (
    <div
      className={clsx("overflow-hidden rounded-xl shadow-xs py-12 lg:py-4", {
        "bg-secondary text-white": color == "secondary",
        "bg-white": color == "default",
      })}
    >
      {children}
    </div>
  );
};
