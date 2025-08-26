import { Phone } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                BDGCARGO
              </p>
            </Link>
            <Link href="#servicii-logistice" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                Mod transport
              </p>
            </Link>
            <Link href="#despre-noi" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                Despre Noi
              </p>
            </Link>
            <Link href="#transport-international" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                Servicii Transport
              </p>
            </Link>

            <Link href="#contact" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                Contact
              </p>
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="text-right text-sm">
              <div className="font-semibold text-blue-600">
                <Link
                  href="tel:+40753850578"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  +40 753 850 578
                </Link>
              </div>
            </div>
            <Phone className="h-5 w-5 text-blue-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
