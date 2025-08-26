"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const partners = [
  {
    name: "COSCO Shipping",
    logo: "/cosco-shipping-logo.webp",
  },
  {
    name: "MSC",
    logo: "/msc-logo.webp",
  },
  {
    name: "ZIM",
    logo: "/zim-logo.webp",
  },
  {
    name: "Hapag-Lloyd",
    logo: "/hapag-lloyd-logo.webp",
  },
  {
    name: "Turkish Airlines",
    logo: "/turkish-airlines-logo.webp",
  },
  {
    name: "Lufthansa",
    logo: "/lufthansa-logo.webp",
  },
  {
    name: "CMA CGM",
    logo: "/cma-cgm-logo.webp",
  },
  {
    name: "Evergreen",
    logo: "/evergreen-logo.webp",
  },
  {
    name: "Sealand",
    logo: "/sealand-logo.webp",
  },
  {
    name: "Maersk",
    logo: "/maersk-logo.webp",
  },
  {
    name: "ONE",
    logo: "/one-logo.webp",
  },
  {
    name: "Coyne Airways",
    logo: "/coyne-airways-logo.webp",
  },
];

export function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fade-in-up");
        });
      },
      { threshold: 0.1 },
    );

    const logos = sectionRef.current?.querySelectorAll(".partner-logo");
    logos?.forEach((logo) => observer.observe(logo));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="animate-fade-in-up mb-4 text-center text-4xl font-bold opacity-0">
          Partenerii <span className="text-blue-600">Noștri</span>
        </h2>
        <p className="animate-fade-in-up animate-stagger-1 mx-auto mb-16 max-w-2xl text-center text-gray-600 opacity-0">
          Colaborăm cu cei mai mari operatori logistici din lume pentru a vă
          oferi servicii de calitate superioară
        </p>

        <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-logo hover-lift animate-scale-in flex items-center justify-center rounded-lg bg-gray-50 p-6 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={120}
                height={80}
                className="max-h-16 max-w-full object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
