import Image from "next/image";
import { useTranslations } from "next-intl";
import { Parallax } from "react-scroll-parallax";

export function AboutSection() {
  const t = useTranslations("aboutSection");
  const company = "BDGCARGO";

  return (
    <section id="despre-noi" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold">
              {t("title", { company })}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {t("description", { company })}
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="mb-2 text-3xl font-bold text-blue-600">
                  1000+
                </div>
                <div className="text-gray-600">{t("clients")}</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-blue-600">
                  500.000+
                </div>
                <div className="text-gray-600">{t("deliveries")}</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">{t("countries")}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Parallax translateY={[-40, 40]} className="rounded-lg shadow-lg">
                <div style={{ height: 300 }}>
                  <Image
                    src="/large-cargo-ship-with-containers-at-sea.png"
                    alt="Cargo ship"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </Parallax>

              <Parallax
                translateY={[40, -40]}
                className="mt-8 rounded-lg shadow-lg"
              >
                <div style={{ height: 300 }}>
                  <Image
                    src="/shipping-containers-at-port-during-sunset.png"
                    alt="Port containers"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </Parallax>
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blue-100 opacity-20" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-orange-100 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
