"use client";
import { useEffect, useRef } from "react";
import type React from "react";

import { Card, CardContent } from "@/shared/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactSection() {
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

    const elements = sectionRef.current?.querySelectorAll(".contact-item");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="animate-fade-in-up mb-4 text-center text-4xl font-bold">
          Contactează-ne <span className="text-blue-600">Acum</span>
        </h2>
        <p className="animate-fade-in-up mx-auto mb-16 max-w-2xl text-center text-gray-600">
          Suntem aici pentru a vă ajuta cu toate nevoile dvs. de transport și
          logistică
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact Information Cards Only */}
          <Card className="contact-item opacity-0 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telefon</h3>
                  <p className="text-gray-600">+40 21 123 4567</p>
                  <p className="text-gray-600">+40 21 123 4568</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="contact-item opacity-0 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@toptrans-global.com</p>
                  <p className="text-gray-600">office@toptrans-global.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="contact-item opacity-0 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-red-100 p-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Adresă</h3>
                  <p className="text-gray-600">Str. Transportului nr. 123</p>
                  <p className="text-gray-600">București, România</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="contact-item opacity-0 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-purple-100 p-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Program</h3>
                  <p className="text-gray-600">Luni - Vineri: 08:00 - 18:00</p>
                  <p className="text-gray-600">Sâmbătă: 09:00 - 14:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
