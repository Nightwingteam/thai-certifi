import React from "react";
import {
  ConnectionIcon,
  DesignIcon,
  ServiceIcon,
  TeamworkIcon,
} from "../icons";
import { Card } from "./Card";

export const SponserCardList = () => {
  return (
    <div className="flex gap-4 relative pt-20">
      {serviceList.map((service, index) => (
        <Card key={index} icon={service.icon}>
          <div className="flex flex-col text-start">
            <p className="text-2xl font-semibold">{service.titile}</p>
            <span className="text-start pt-2">{service.caption}</span>
          </div>
        </Card>
      ))}

      <div className="w-[600px] h-[300px]" />
    </div>
  );
};

export const serviceList = [
  {
    icon: <ServiceIcon />,
    titile: "Maintenance & Support",
    caption:
      "We uphold the highest quality with uncompromising testing and quality assurance. Our comprehensive testing ensures your platforms function impeccably, providing users with a seamless and error-free experience.",
  },
  {
    icon: <DesignIcon />,
    titile: "UX/UI Design",
    caption:
      "Our commitment to design marries visual appeal with user-centric functionality. We deliver immersive experiences and seamless interfaces across various platforms, mirroring your brand ethos while enhancing user engagement.",
  },
  {
    icon: <TeamworkIcon />,
    titile: "Strategy & Consulting",
    caption:
      "The foundation of any impactful digital presence is a thorough strategic plan. our expertise extends beyond traditional boundaries, focusing on digital strategies and consulting to ensure your online platforms",
  },
  {
    icon: <ConnectionIcon />,
    titile: "Corporate & Brand Websites",
    caption:
      "Elevate your corporate identity and brand perception with our meticulously designed websites. Our team blends innovative design with strategic functionality to create custom sites that are not only visually stunning but also optimized for performance and user experience.",
  },
];
