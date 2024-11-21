"use client";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = async (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };

  return (
    <div>
      <button onClick={() => changeLocale("en")}>English</button>
      <button onClick={() => changeLocale("ar")}>Arabic</button>
    </div>
  );
}
