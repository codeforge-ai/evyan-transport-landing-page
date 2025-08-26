"use client";
import { useEffect, useRef } from "react";

const partners = [
  {
    name: "DHL",
    logo: "/dhl-logo.png",
  },
  {
    name: "FedEx",
    logo: "/fedex-logo.png",
  },
  {
    name: "UPS",
    logo: "/generic-delivery-logo.png",
  },
  {
    name: "Maersk",
    logo: "/maersk-shipping-logo.png",
  },
  {
    name: "MSC",
    logo: "/msc-mediterranean-shipping-logo.png",
  },
  {
    name: "CMA CGM",
    logo: "/cma-cgm-shipping-logo.png",
  },
  {
    name: "COSCO",
    logo: "/placeholder.svg?height=80&width=120&text=COSCO",
  },
  {
    name: "Hapag-Lloyd",
    logo: "/placeholder.svg?height=80&width=120&text=Hapag-Lloyd",
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
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                className="max-h-16 max-w-full object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
