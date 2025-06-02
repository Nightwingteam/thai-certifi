import clsx from "clsx";
import { ReactNode } from "react";

interface CardProps {
  icon: JSX.Element;
  children: ReactNode;
}

export const Card = ({ children, icon }: CardProps) => {
  return (
    <div
      className={clsx(
        "flex-shrink-0 relative bg-white/[52%] text-black rounded-2xl border border-white w-[600px] h-[250px]"
      )}
    >
      <div className="absolute -top-6 left-6 z-10 w-16 h-16 bg-gradient-to-br from-[#FF96AB] to-secondary rounded-full">
        <p className="text-3xl h-full w-full flex justify-center items-center p-3 text-white">
          {icon}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center px-8 h-full pt-6">
        {children}
      </div>
    </div>
  );
};
