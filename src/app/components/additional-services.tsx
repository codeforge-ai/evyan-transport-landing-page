import { Card, CardContent } from "@/shared/components/ui/card";
import { Shield, Settings, Truck } from "lucide-react";
import { useTranslations } from "next-intl";

export function AdditionalServices() {
  const t = useTranslations("additionalServices");
  const additionalServices = [
    {
      icon: <Shield className="h-12 w-12 text-red-500" />,
      title: t("insuranceTitle"),
      description: t("insuranceDescription"),
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-500" />,
      title: t("consultingTitle"),
      description: t("consultingDescription"),
    },
    {
      icon: <Truck className="h-12 w-12 text-green-500" />,
      title: t("specializedTransportTitle"),
      description: t("specializedTransportDescription"),
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">
          {t("sectionTitleMain")}{" "}
          <span className="text-blue-600">{t("sectionTitleAccent")}</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {additionalServices.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
