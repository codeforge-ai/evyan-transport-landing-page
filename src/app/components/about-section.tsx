import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-4xl font-bold">
              Despre <span className="text-blue-600">TopTrans</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              TopTrans Global este compania lider din România în domeniul
              transportului internațional și logisticii. Oferim o gamă completă
              de servicii logistice, care include transportul maritim, terestru
              și aerian.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="mb-2 text-3xl font-bold text-blue-600">
                  500+
                </div>
                <div className="text-gray-600">Clienți mulțumiți</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Ani de experiență</div>
              </div>
              <div>
                <div className="mb-2 text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Țări</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/large-cargo-ship-with-containers-at-sea.png"
                alt="Cargo ship"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/shipping-containers-at-port-during-sunset.png"
                alt="Port containers"
                width={400}
                height={300}
                className="mt-8 rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-blue-100 opacity-20" />
            <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-orange-100 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
