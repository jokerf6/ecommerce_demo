import { LANGUAGES } from "@/static/languages";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Locale({lang,dir}: {lang: string, dir: string}) {
    const t = useTranslations();
    console.log(lang);
  return (
    <div className=" bg-secondary py-[5px] flex flex-row-reverse px-primary" dir={dir}>
     {
        LANGUAGES.map((item:string) => (
          <Link key={item} className={`mx-2 text-[14px] ${lang === item ? "font-bold text-primary" : " text-gray-600"} `} href={`/${item}`}>{t(item)}</Link>
        ))
     }

    </div>
)
}
