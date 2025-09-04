"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "../Card";
import { RunningRabbit, ThailandIcon, Woman } from "../icons";
import { useBreakpoint } from "../useBreakpoint";
import { ServiceModal } from "../ServiceModal";

export const InfoCard = () => {
  const { lg } = useBreakpoint();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-10 lg:mx-60 -mt-[320px] lg:-mt-0 lg:pt-16">
      {!lg && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col text-center justify-center text-white font-semibold"
        >
          <span>We are your trusted partner </span>
          <span className="text-secondary">
            <span className="text-white">for</span> NBTC Certification{" "}
            <span className="text-white"> in Thailand</span>
          </span>{" "}
        </motion.div>
      )}

      {infoList.map((info, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          key={index}
        >
          <div onClick={() => setSelectedService(info.id)} className="cursor-pointer">
            <Card color={index == 1 ? "secondary" : "default"}>
              <div className="flex flex-col text-center p-4 justify-center items-center hover:scale-105 transition-transform duration-200">
                <div className="p-3">{info.icon}</div>

                <h3 className="text-lg font-medium">{info.title}</h3>

                <p className="mt-2 text-sm/relaxed">{info.caption}</p>
                
                <div className="mt-4 text-xs text-foreground/60">Click for more details</div>
              </div>
            </Card>
          </div>
        </motion.div>
      ))}

      {/* Service Modals */}
      <ServiceModal
        isOpen={selectedService === 1}
        onClose={() => setSelectedService(null)}
        title="Speed Without Compromise"
        icon={<RunningRabbit />}
        content={serviceDetails[1]}
      />
      
      <ServiceModal
        isOpen={selectedService === 2}
        onClose={() => setSelectedService(null)}
        title="Thai Representation Solved"
        icon={<Woman />}
        content={serviceDetails[2]}
      />
      
      <ServiceModal
        isOpen={selectedService === 3}
        onClose={() => setSelectedService(null)}
        title="Beyond Certification"
        icon={<ThailandIcon />}
        content={serviceDetails[3]}
      />
    </div>
  );
};
const infoList = [
  {
    id: 1,
    icon: <RunningRabbit />,
    title: "Speed Without Compromise",
    caption:
      "Leverage our pre-approved testing labs and direct NBTC liaisons to cut processing times by up to 50%.",
    link: "/",
  },
  {
    id: 2,
    icon: <Woman />,
    title: "Thai Representation Solved",
    caption:
      "No local entity? We connect you with trusted Thai partners or guide you through company registration.",
  },
  {
    id: 3,
    icon: <ThailandIcon />,
    title: "Beyond Certification",
    caption:
      "Need marketing or website localization? We offer bundled services to ensure full compliance for your Thai market launch.",
    link: "/",
  },
];

const serviceDetails = {
  1: {
    overview: "Our expedited NBTC certification service leverages strategic partnerships with pre-approved testing laboratories and direct relationships with NBTC officials to dramatically reduce your time-to-market. We understand that speed is crucial in the competitive telecommunications industry, which is why we've developed streamlined processes that maintain full compliance while cutting standard processing times in half.",
    benefits: [
      "50% faster processing compared to standard certification routes",
      "Direct access to NBTC liaisons and decision-makers",
      "Pre-approved testing lab network for immediate scheduling",
      "Real-time tracking and updates throughout the process",
      "Priority handling for urgent market entry requirements",
      "Dedicated project manager for seamless coordination"
    ],
    process: [
      "Initial consultation and documentation review within 24 hours",
      "Fast-track testing schedule at our pre-approved laboratories",
      "Parallel processing of documentation while testing is conducted",
      "Direct submission to NBTC through our established channels",
      "Regular status updates and expedited follow-up communications",
      "Certificate delivery and market entry clearance"
    ],
    timeline: "Standard 8-12 weeks reduced to 4-6 weeks average completion time",
    pricing: "Premium service with transparent pricing. Contact us for a customized quote based on your specific equipment and timeline requirements."
  },
  2: {
    overview: "Navigate the complex Thai business landscape with confidence. Our Thai Representation service solves the critical challenge of local entity requirements for NBTC certification. Whether you need a trusted local partner or guidance through Thai company registration, we provide comprehensive solutions that ensure full legal compliance while protecting your business interests.",
    benefits: [
      "Access to vetted network of trusted Thai business partners",
      "Full legal compliance with Thai foreign business regulations",
      "Complete company registration support including BOI applications",
      "Ongoing local representation throughout certification process",
      "Legal protection through properly structured partnerships",
      "Local market expertise and cultural guidance"
    ],
    process: [
      "Assessment of your specific representation needs and business structure",
      "Partner matching or company registration pathway recommendation",
      "Legal documentation preparation and review",
      "Registration filing and government liaison coordination",
      "Ongoing support and compliance monitoring",
      "Market entry strategy consultation"
    ],
    timeline: "Partner matching: 1-2 weeks | Company registration: 4-8 weeks depending on structure",
    pricing: "Flexible pricing based on representation type. Partner matching from $2,500 | Full company registration from $8,500 including government fees."
  },
  3: {
    overview: "Certification is just the beginning. Our Beyond Certification service ensures your complete success in the Thai market through comprehensive support services including marketing localization, website adaptation, and ongoing compliance management. We understand that entering a new market requires more than just regulatory approval – it requires cultural understanding and strategic positioning.",
    benefits: [
      "Complete Thai market localization including language and cultural adaptation",
      "Website development and optimization for Thai audiences",
      "Digital marketing strategy tailored to Thai consumer behavior",
      "Ongoing compliance monitoring and regulatory updates",
      "Local customer support setup and training",
      "Market entry strategy and competitive analysis"
    ],
    process: [
      "Market analysis and localization needs assessment",
      "Cultural adaptation strategy development",
      "Website and marketing material localization",
      "Digital presence establishment and optimization",
      "Launch support and performance monitoring",
      "Ongoing market support and compliance updates"
    ],
    timeline: "Basic localization: 2-4 weeks | Complete market entry package: 6-12 weeks",
    pricing: "Bundled packages starting from $5,000 for basic localization | Complete market entry solutions from $15,000 including ongoing support."
  }
};
