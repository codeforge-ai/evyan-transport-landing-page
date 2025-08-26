import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6 inline-block rounded bg-blue-600 px-3 py-2 text-lg font-bold text-white">
              TOPTRANS
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              TopTrans Global - compania lider din România în domeniul
              transportului internațional și logisticii.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-500" />
              <Twitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              <Linkedin className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-600" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Servicii</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Transport Maritim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Transport Terestru
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Transport Aerian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Servicii Vamale
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Link-uri Rapide</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Despre Noi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  TopTrans Academy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Cariere
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  Știri
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">+40 751 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">info@toptrans-global.ro</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-500" />
                <span className="text-gray-300">București, România</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TopTrans Global. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
