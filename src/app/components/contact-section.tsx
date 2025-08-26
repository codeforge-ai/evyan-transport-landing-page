"use client";
import { useEffect, useRef } from "react";
import type React from "react";
import { useTranslations } from "next-intl";

import { Card, CardContent } from "@/shared/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslations("contactSection");

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
    <section id="contact" ref={sectionRef} className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="animate-fade-in-up mb-4 text-center text-4xl font-bold">
          {t("titleMain")}{" "}
          <span className="text-blue-600">{t("titleAccent")}</span>
        </h2>
        <p className="animate-fade-in-up mx-auto mb-16 max-w-2xl text-center text-gray-600">
          {t("subtitle")}
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Information Cards Only */}
          <Card className="contact-item opacity-0 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {t("phoneTitle")}
                  </h3>
                  <a
                    href="tel:+40753850578"
                    className="text-gray-600 transition-colors hover:text-blue-600"
                  >
                    {t("phoneValue")}
                  </a>
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
                  <h3 className="font-semibold text-gray-800">
                    {t("emailTitle")}
                  </h3>
                  <p className="text-gray-600">{t("emailValue")}</p>
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
                  <h3 className="font-semibold text-gray-800">
                    {t("addressTitle")}
                  </h3>
                  <p className="text-gray-600">{t("addressValue")}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
