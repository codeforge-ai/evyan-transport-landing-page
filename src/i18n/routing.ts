import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "da", "no", "sv", "de", "ro"],

  // Used when no locale matches
  defaultLocale: "ro",

  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be provided for all locales
    "/": "/",
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
