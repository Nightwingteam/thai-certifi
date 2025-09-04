"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Footer } from "@/components/footer/Footer";

const Home = dynamic(() => import("@/components/home/Home").then(m => m.Home), { 
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});
const AboutUs = dynamic(() => import("@/components/about-us/AboutUs").then(m => m.AboutUs), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>
});
const License = dynamic(() => import("@/components/license/License").then(m => m.License), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>
});
const Service = dynamic(() => import("@/components/service/Service").then(m => m.Service), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>
});
const Sponser = dynamic(() => import("@/components/sponser/Sponser").then(m => m.Sponser), { 
  ssr: false,
  loading: () => <div className="min-h-[50vh] flex items-center justify-center">Loading...</div>
});

export default function HomePage() {
  useEffect(() => {
    // Always scroll to top when page loads or refreshes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Also scroll to top on any hash change or navigation
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    
    window.addEventListener('beforeunload', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Home />
      <AboutUs />
      <License />
      <Service />
      <Sponser />
      <Footer />
    </div>
  );
}
