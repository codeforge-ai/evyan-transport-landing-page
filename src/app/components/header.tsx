import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Transport Internațional
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Servicii Logistice
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Despre Noi
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              TopTrans Academy
            </a>
            <a
              href="#"
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="text-right text-sm">
              <div className="text-gray-600">Numărul de contact</div>
              <div className="font-semibold text-blue-600">+40 751 123 456</div>
            </div>
            <Phone className="h-5 w-5 text-blue-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
