import React from "react";
import Logo from "../logo/index.component";
// import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { INSTAGRAM_LINK, TIKTOK_LINK } from "@/static/links";
import { FACEBOOK_LINK } from "@/static/links";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();
  const div1 = [
    <Logo key={0} className={"text-white mb-[10px]"} />,
    /**     <div key={1} className=" flex gap-2 items-center">
      <IoLocationOutline className=" text-[18px]" />
      <span>{t("branches")}</span>
    </div>,
*/
    <div key={2} className=" flex gap-2 items-center">
      <CiMail className=" text-[18px]" />
      <span>fhakem75@gmail.com</span>
    </div>,

    <div key={3} className=" flex gap-2 items-center">
      <LuPhone className=" text-[18px]" />
      <span>+201092725145</span>
    </div>,
  ];

  const div2 = [
    <span key={0} className=" mb-[10px]">
      {t("CollectionKARA")}
    </span>,
    <Link key={1} href="/">
      كولكشن ستره شتوى
    </Link>,
    <Link key={2} href="/">
      قمصان ستره
    </Link>,
    <Link key={3} href="/">
      بناطيل ستره
    </Link>,
    <Link key={4} href="/">
      شروال ستره
    </Link>,
  ];

  const div3 = [
    <span key={0} className=" mb-[10px]">
      {t("importantLinks")}
    </span>,
    <Link key={1} href="/about-us">
      {t("aboutUs")}
    </Link>,
    <Link key={2} href="/return-policy">
      {t("replacementAndReturnPolicy")}
    </Link>,
    <Link key={5} href="/contact-us">
      {t("contactUs")}
    </Link>,
  ];
  const div4 = [
    <span key={0} className=" mb-[10px]">
      {t("followUs")}
    </span>,
    <div key={1} className="flex gap-6 items-center">
      <Link href={FACEBOOK_LINK}>
        <FaFacebookF className=" text-[18px]" />
      </Link>
      <Link href={INSTAGRAM_LINK}>
        <BsInstagram className=" text-[18px]" />
      </Link>
      <Link href={TIKTOK_LINK}>
        <FaTiktok className=" text-[18px]" />
      </Link>
    </div>,
  ];

  return (
    <div className=" bg-footer w-full py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6  w-ful px-main">
        <div className=" flex flex-col gap-2 text-white">
          {div1.map((item) => {
            return item;
          })}
        </div>
        <div className=" flex flex-col gap-2 text-white">
          {div2.map((item) => {
            return item;
          })}
        </div>
        <div className=" flex flex-col gap-2 text-white">
          {div3.map((item) => {
            return item;
          })}
        </div>
        <div className=" flex flex-col gap-2 text-white">
          {div4.map((item) => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
}
