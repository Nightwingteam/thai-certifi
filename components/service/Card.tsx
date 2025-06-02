import clsx from "clsx";
import { ReactNode } from "react";

interface CardProps {
  number: number;
  variant?: "outline" | "solid";
  children: ReactNode;
}

export const Card = ({ children, number, variant = "solid" }: CardProps) => {
  return (
    <div
      className={clsx(
        "flex-shrink-0 relative rounded-3xl lg:rounded-[44px] border border-white w-[100px] h-[160px] lg:w-[200px] lg:h-[200px]",
        {
          "bg-transparent text-white": variant == "outline",
          "bg-white text-black": variant == "solid",
        }
      )}
    >
      <div className="absolute -top-3 -left-3 z-10 w-12 h-12 bg-secondary rounded-full">
        <p className="text-3xl h-full w-full flex justify-center items-center text-center text-white font-medium">
          {number}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-2 h-full">
        {children}
      </div>
    </div>
  );
};
