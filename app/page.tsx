import { LogoImage, WhatsappIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import { ArrowNarrowRight } from "@untitled-ui/icons-react";

export default function Home() {
  return (
    <div>
      <section
        id="intro"
        className="home-background absolute top-0 left-0 w-screen h-screen z-0 flex flex-col justify-center"
      >
        <div className="container mx-auto max-w-7xl px-6">
          <LogoImage />
          <div className="py-2">
            <span className={title()}>Streamline&nbsp;</span>
            <span className={title({ color: "secondary" })}>
              NBTC Certification
            </span>
          </div>
          <span className={title()}>
            for seamless market entry in{" "}
            <span className={title({ color: "secondary" })}>Thailand</span>
          </span>

          <div className="flex mt-8 gap-4">
            <Button
              endContent={<ArrowNarrowRight />}
              size="lg"
              className="bg-secondary"
            >
              Free Consulting
            </Button>
            <Button
              startContent={<WhatsappIcon />}
              size="lg"
              color="primary"
              className="border border-white"
            >
              Whatsapp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
