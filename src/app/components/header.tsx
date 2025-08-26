import { Phone } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/app/components/language-switcher";

export function Header() {
  const t = useTranslations("header");
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="" scroll={true}>
            <svg
              width="220"
              height="60"
              viewBox="0 0 220 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#001F54" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="1" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="40"
                fontFamily="Arial, sans-serif"
                fontWeight="700"
                fontSize="36"
                fill="url(#grad1)"
              >
                BDGCARGO
              </text>
            </svg>
          </Link>
          <nav className="hidden items-center space-x-8 md:flex">
            <Link href="#servicii-logistice" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                {t("modTransport")}
              </p>
            </Link>
            <Link href="#despre-noi" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                {t("aboutUs")}
              </p>
            </Link>
            <Link href="#transport-international" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                {t("services")}
              </p>
            </Link>
            <Link href="#contact" scroll={true}>
              <p className="text-gray-700 transition-colors hover:text-blue-600">
                {t("contact")}
              </p>
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="text-right text-sm">
              <div className="font-semibold text-blue-600">
                <Link
                  href="tel:+40753850578"
                  className="text-gray-600 transition-colors hover:text-blue-600"
                >
                  {t("callUs")}
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
