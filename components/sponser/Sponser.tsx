import { useRef, useEffect } from "react";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "@untitled-ui/icons-react";
import { NightwingPCImage } from "../icons";
import { Heading } from "./Heading";
import { SponserCardList } from "./SponserCardList";
import { useBreakpoint } from "../useBreakpoint";

export const Sponser = () => {
  const cardListRef = useRef<HTMLDivElement>(null);
  const { lg } = useBreakpoint();
  const scrollLeft = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: lg ? -500 : -450,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardListRef.current) {
      cardListRef.current.scrollBy({
        left: lg ? 500 : 450,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center text-black">
      <div className="relative pattern-background min-h-[120vh] lg:h-screen w-screen">
        <div className="absolute">
          <div className="mx-12 lg:ml-24 -mt-16 lg:mx-0 lg:-mt-0">
            <Heading />
          </div>

          <div className="relative lg:mt-20 flex justify-center h-full">
            <div className="w-screen max-w-screen-lg lg:max-w-[1220px] h-full">
              <div
                ref={cardListRef}
                className="flex gap-4 no-scrollbar scroll-smooth overflow-x-auto"
              >
                <SponserCardList />
              </div>
            </div>
          </div>

          <div className="lg:ml-24 mx-32 flex lg:justify-start justify-between lg:gap-10 mt-6">
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
