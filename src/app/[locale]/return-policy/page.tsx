import { useTranslations } from "next-intl";
import React from "react";

export default function AboutUs() {
  const t = useTranslations();

  return (
    <div className=" w-full flex flex-col">
      <div className=" bg-gray-400 w-full h-[100px] flex items-center justify-center text-white font-bold text-3xl">
        {t("replacementAndReturnPolicy")}
      </div>
      <div className=" flex flex-col gap-4 px-main py-20"></div>
    </div>
  );
}
