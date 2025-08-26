"use client";

import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Truck, Ship, Package } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    icon: <Truck className="h-8 w-8 text-orange-500" />,
    title: "Transport Terestru",
    description:
      "Transportul terestru include transportarea mărfurilor cu autocamioane",
    link: "Detalii",
    image: "/truck-transport-logistics.png",
  },
  {
    icon: <Ship className="h-8 w-8 text-blue-500" />,
    title: "Transport Maritim și Oceanic",
    description: "Transportul mărfurilor pe mare cu containere",
    link: "Detalii",
    image: "/cargo-ship-maritime-transport.png",
  },
  {
    icon: <Package className="h-8 w-8 text-red-500" />,
    title: "Servicii Vamale",
    description:
      "Servicii complete de vămuire pentru transportul internațional",
    link: "Detalii",
    image: "/customs-warehouse-logistics.png",
  },
];

export function ServiceCards() {
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

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="service-card animate-fade-in-up bg-white opacity-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={192}
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 text-blue-600 hover:text-blue-700"
                  >
                    {service.link}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
