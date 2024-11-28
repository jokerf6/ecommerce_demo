"use client";
import { LANGUAGES } from "@/static/languages";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Locale({ lang, dir }: { lang: string; dir: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  const getLocalizedPath = (newLang: string) => {
    // Replace the current locale (lang) in the pathname with the new one
    const localizedPath = pathname.replace(`/${lang}`, `/${newLang}`);
    return localizedPath;
  };
  return (
    <div
      className=" bg-secondary py-[5px] gap-4  flex flex-row-reverse px-main"
      dir={dir}
    >
      {LANGUAGES.map((item: string) => (
        <Link
          key={item}
          className={` text-[14px] ${
            lang === item ? "font-bold text-primary" : " text-gray-600"
          } `}
          href={getLocalizedPath(item)} // Use the dynamic localized path
        >
          {t(item)}
        </Link>
      ))}
    </div>
  );
}
