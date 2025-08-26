import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-900/80 to-blue-800/60">
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full">
          <iframe
            src="https://www.youtube.com/embed/wQMx7wc4jh8?autoplay=1&mute=1&controls=0&loop=1&playlist=wQMx7wc4jh8&modestbranding=1&showinfo=0&rel=0"
            title="Unique and Rare Short 4K Video: Cargo ship sailing, full of containers, drone view"
            frameBorder="0"
            allow="autoplay; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-1/2 left-1/2 h-[100vh] w-[177.77vh] -translate-x-1/2 -translate-y-1/2 transform"
            style={{ backgroundColor: "white" }}
          ></iframe>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-5xl leading-tight font-bold">
            Transport Rapid și
            <br />
            Accesibil
            <br />
            <span className="text-blue-300">Internațional</span>
          </h1>

          <p className="mb-8 text-xl text-blue-100">
            TopTrans Global - partenerul tău de încredere în domeniul
            transportului internațional și logisticii
          </p>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
            >
              Află Mai Mult
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent px-8 py-3 text-white hover:bg-white hover:text-blue-900"
            >
              <Play className="mr-2 h-5 w-5" />
              Urmărește Video
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
