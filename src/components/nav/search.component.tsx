import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function Search(props: { smallNav: string }) {
  const t = useTranslations();
  return (
    <div
      className={cn(
        ` hover:border-gray-600  w-[500px] gap-4 items-center border px-[20px] border-grey-400 outline-gray-600  rounded-3xl`,
        props.smallNav
      )}
    >
      <IoSearchOutline className=" text-gray-400" />
      <input
        type="text"
        placeholder={t("search")}
        className=" outline-none py-[5px] w-full"
      />
    </div>
  );
}
