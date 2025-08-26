import { Card, CardContent } from "@/shared/components/ui/card";
import { Shield, Settings, Truck } from "lucide-react";

const additionalServices = [
  {
    icon: <Shield className="h-12 w-12 text-red-500" />,
    title: "Asigurări Transport",
    description:
      "Servicii complete de asigurare pentru protecția mărfurilor în transport",
  },
  {
    icon: <Settings className="h-12 w-12 text-blue-500" />,
    title: "Consultanță Logistică",
    description:
      "Consultanță specializată pentru optimizarea proceselor logistice",
  },
  {
    icon: <Truck className="h-12 w-12 text-green-500" />,
    title: "Transport Specializat",
    description: "Transport specializat pentru mărfuri speciale și oversized",
  },
];

export function AdditionalServices() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold">
          Servicii <span className="text-blue-600">Suplimentare</span>
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
