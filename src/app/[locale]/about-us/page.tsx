import { useTranslations } from "next-intl";
import React from "react";

export default function AboutUs() {
  const t = useTranslations();
  const aboutUs = t("aboutUs");
  console.log(aboutUs);
  return (
    <div className=" w-full flex flex-col">
      <div className=" bg-gray-400 w-full h-[100px] flex items-center justify-center text-white font-bold text-3xl">
        {t("aboutUs")}
      </div>
      <div className=" flex flex-col gap-4 px-main py-20">
        <h1>{t("aboutUsTitle")}</h1>
        <div dangerouslySetInnerHTML={{ __html: t("aboutUsDescription") }} />
      </div>
    </div>
  );
}
