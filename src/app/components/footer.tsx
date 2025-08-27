import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="bg-black-600 mb-6 inline-block rounded text-lg font-bold text-white">
              <Image
                src="/logo.png"
                alt="logo"
                width={120}
                height={80}
                className="max-h-18 max-w-full object-contain grayscale filter transition-all duration-300 hover:grayscale-0"
              />
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              {t("companyDescription")}
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-500" />
              <Twitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              <Linkedin className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-600" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">{t("servicesTitle")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("serviceMaritime")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("serviceTerrestrial")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("serviceAerial")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  {t("serviceCustoms")}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              {t("quickLinksTitle")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#despre-noi" scroll={true}>
                  <p className="text-gray-300 transition-colors hover:text-white">
                    {t("quickLinkAboutUs")}
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#" scroll={true}>
                  <p className="text-gray-300 transition-colors hover:text-white">
                    {t("quickLinkCompany")}
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">{t("contactTitle")}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">{t("contactPhone")}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-300">{t("contactEmail")}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-500" />
                <span className="text-gray-300">{t("contactAddress")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
