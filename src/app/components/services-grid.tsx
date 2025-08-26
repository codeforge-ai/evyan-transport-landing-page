"use client";

import { Card, CardContent } from "@/shared/components/ui/card";
import { Truck, Ship, Plane, Package, Warehouse, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    icon: <Truck className="h-12 w-12 text-red-500" />,
    title: "Transport Maritim de Marfă",
    description: "Transportul mărfurilor pe mare cu containere și nave cargo",
    image: "/cargo-ship-containers-port.png",
  },
  {
    icon: <Ship className="h-12 w-12 text-blue-500" />,
    title: "Transport Maritim Internațional",
    description:
      "Servicii complete de transport maritim către toate destinațiile",
    image: "/international-shipping-vessel-ocean.png",
  },
  {
    icon: <Truck className="h-12 w-12 text-green-500" />,
    title: "Transport Terestru",
    description:
      "Transport rutier profesional pentru toate tipurile de mărfuri",
    image: "/truck-highway-road-transport.png",
  },
  {
    icon: <Warehouse className="h-12 w-12 text-purple-500" />,
    title: "Servicii de Depozitare",
    description: "Soluții complete de depozitare și management al stocurilor",
    image: "/warehouse-storage-logistics-facility.png",
  },
  {
    icon: <Plane className="h-12 w-12 text-indigo-500" />,
    title: "Transport Aerian",
    description: "Transport aerian rapid pentru mărfuri urgente și de valoare",
    image: "/cargo-plane-air-freight-airport.png",
  },
  {
    icon: <Package className="h-12 w-12 text-orange-500" />,
    title: "Servicii Vamale",
    description: "Asistență completă pentru procedurile vamale și documentație",
    image: "/customs-border-control-documentation.png",
  },
  {
    icon: <Globe className="h-12 w-12 text-teal-500" />,
    title: "Logistică Globală",
    description: "Soluții logistice integrate pentru comerțul internațional",
    image: "/global-logistics-world-map-network.png",
  },
  {
    icon: <Ship className="h-12 w-12 text-cyan-500" />,
    title: "Transport Internațional",
    description: "Servicii de transport către toate destinațiile mondiale",
    image: "/international-transport-global-shipping.png",
  },
  {
    icon: <Truck className="h-12 w-12 text-pink-500" />,
    title: "Distribuție și Livrare",
    description: "Servicii de distribuție și livrare la destinație finală",
    image: "/delivery-truck-distribution-center.png",
  },
];

export default function ServicesGrid() {
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

    const cards = sectionRef.current?.querySelectorAll(".service-grid-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="animate-fade-in-up mb-4 text-center text-4xl font-bold opacity-0">
          Transport <span className="text-blue-600">Internațional</span>
        </h2>
        <p className="animate-fade-in-up animate-stagger-1 mx-auto mb-16 max-w-2xl text-center text-gray-600 opacity-0">
          Oferim o gamă completă de servicii logistice către orice destinație
          din lume
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-grid-card hover-lift animate-fade-in-up bg-white opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={128}
                    className="h-32 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
