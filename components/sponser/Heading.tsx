import React from "react";
import { title } from "../primitives";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

export const Heading = () => {
  return (
    <div className="flex flex-col">
      <p>
        <span className={title({ color: "secondary" })}>
          Website Localization{" "}
        </span>
        <span className={title()}>in Thailand</span>
      </p>
      <p className="pt-2 lg:text-lg max-w-7xl">
        Expanding your business to Thailand? Don&#39;t risk misunderstandings or
        legal pitfalls. We specialize in <strong>website localization</strong>{" "}
        and <strong>marketing compliance </strong>
        tailored for foreigners entering the Thai market. From flawless Thai
        language translation to cultural adaptation, <br />
        we ensure your brand speaks authentically to Thai audiences while
        meeting all local regulations.
      </p>
      <div className="pt-4">
        <Link
          isExternal
          href="https://nightwingdigital.co/"
          title="nightwingdigital.co homepage"
        >
          {" "}
          <Button variant="solid" color="secondary" size="lg">
            <p className="uppercase text-white">VISIT NIGHTWINGDIGITAL.CO</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
