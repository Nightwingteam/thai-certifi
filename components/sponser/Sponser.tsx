import { useRef, useEffect } from "react";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "@untitled-ui/icons-react";
import { NightwingPCImage } from "../icons";
import { Heading } from "./Heading";
import { SponserCardList } from "./SponserCardList";

export const Sponser = () => {
  const cardListRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: 600,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center text-black">
      <div className="relative pattern-background h-screen w-screen">
        <div className="absolute">
          <div className="ml-24">
            <Heading />
          </div>

          <div className="relative mt-20 flex justify-center h-full">
            <div className="w-screen max-w-[1220px] h-full">
              <div
                ref={cardListRef}
                className="flex gap-4 no-scrollbar scroll-smooth overflow-x-auto"
              >
                <SponserCardList />
              </div>
            </div>
          </div>

          <div className="ml-24 flex gap-6 mt-6">
            <Button
              size="lg"
              isIconOnly
              radius="full"
              variant="bordered"
              className="w-16 h-16 bg-white/[52%] border-white text-secondary"
              onPress={scrollLeft}
            >
              <ChevronLeft />
            </Button>
            <Button
              size="lg"
              isIconOnly
              radius="full"
              variant="bordered"
              className="w-16 h-16 bg-white/[52%] border-white text-secondary"
              onPress={scrollRight}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-30">
        <NightwingPCImage />
      </div>
    </div>
  );
};
