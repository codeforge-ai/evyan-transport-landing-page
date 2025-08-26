"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

const languages = [
  { code: "en", flag: "🇺🇸" },
  { code: "da", flag: "🇩🇰" },
  { code: "no", flag: "🇳🇴" },
  { code: "sv", flag: "🇸🇪" },
  { code: "de", flag: "🇩🇪" },
  { code: "ro", flag: "🇷🇴" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("language");

  const currentLanguage = languages.find((lang) => lang.code === locale);

  function handleLanguageChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <span className="h-4 w-4">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{t(locale)}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 ${locale === language.code ? "bg-blue-50 text-blue-600" : ""}`}
          >
            <span>{language.flag}</span>
            <span>{t(language.code)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
