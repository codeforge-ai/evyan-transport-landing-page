import Image from "next/image";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Parallax } from "react-scroll-parallax";

export function Hero() {
  const t = useTranslations("hero");
  return (
    <section
      className="relative aspect-[1/1] h-screen max-h-svh w-svw bg-cover bg-center sm:h-2/4"
      style={{ backgroundImage: "url('/road.jpg')", width: "100%" }}
    >
      {/* Overlay (opțional, dacă vrei să întuneci fundalul puțin) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text peste imagine */}
      <div className="absolute inset-0 z-20 container mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl leading-tight font-bold">
            {t("fastTransport")}
            <br />
            {t("affordable")}
            <br />
            <span className="text-blue-300">{t("international")}</span>
          </h1>

          <p className="text-white-100 mb-8 px-2 py-2 text-xl">
            {t("subtitle")}
          </p>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
            >
              {t("learnMore")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>

      <Parallax
        translateY={[300, -350]}
        className="pointer-events-none absolute right-5 bottom-70 z-10 sm:bottom-10 md:right-1 md:bottom-25 lg:right-1 lg:bottom-25"
      >
        <Image
          alt="Camion"
          width={220} // adjust width as needed
          height={200} // adjust height as needed
          src="/truck-nobg.png"
          className="h-auto w-80 md:w-lg lg:w-2xl xl:w-2xl"
        />
      </Parallax>
    </section>
  );
}
