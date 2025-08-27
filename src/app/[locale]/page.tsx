"use client";
import { Header } from "@/app/components/header";
import { Hero } from "@/app/components/hero";
import { ServiceCards } from "@/app/components/service-cards";
import { AboutSection } from "@/app/components/about-section";
import { AdditionalServices } from "@/app/components/additional-services";
import ServicesGrid from "@/app/components/services-grid";
import { PartnersSection } from "@/app/components/partners-section";
import { ContactSection } from "@/app/components/contact-section";
import { Footer } from "@/app/components/footer";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParallaxProvider>
        <Header />
        <Hero />
        <ServiceCards />
        <AboutSection />
        <ServicesGrid />
        <AdditionalServices />
        <PartnersSection />
        <ContactSection />
        <Footer />
      </ParallaxProvider>
    </main>
  );
}
