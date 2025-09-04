"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { X } from "@untitled-ui/icons-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    overview: string;
    benefits: string[];
    process: string[];
    timeline: string;
    pricing: string;
  };
  icon: React.ReactNode;
}

export const ServiceModal = ({ isOpen, onClose, title, content, icon }: ServiceModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white backdrop-blur-md border-b border-gray-200 p-4 sm:p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-xl">
                  {icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-black">{title}</h2>
              </div>
              <Button
                isIconOnly
                variant="light"
                onPress={onClose}
                className="text-gray-600 hover:text-black"
              >
                <X width={24} height={24} />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
            {/* Overview */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Overview</h3>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base font-medium">{content.overview}</p>
            </section>

            {/* Benefits */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Key Benefits</h3>
              <ul className="space-y-2 sm:space-y-3">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-800 text-sm sm:text-base font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Process */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Our Process</h3>
              <ol className="space-y-3 sm:space-y-4">
                {content.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 pt-1 text-sm sm:text-base font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Timeline & Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <section className="bg-gray-100 rounded-xl p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">Timeline</h3>
                <p className="text-gray-800 text-sm sm:text-base font-medium">{content.timeline}</p>
              </section>
              
              <section className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-200">
                <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">Investment</h3>
                <p className="text-gray-800 text-sm sm:text-base font-medium">{content.pricing}</p>
              </section>
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-4 sm:pt-6">
              <Button
                size="lg"
                color="primary"
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <a href="mailto:info@nightwingdigital.co">Get Started Today</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
