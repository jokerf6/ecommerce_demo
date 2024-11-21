import {
  Link,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import React from "react";
import { useTranslations } from "next-intl";
import IconWithnumber from "./iconWithnumber.component";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";

export default function Nav() {
  const t = useTranslations();
  const contact = [
    <NavigationMenuItem key="title" className="text-lg">
      <Link href="/">{t("contact")}</Link>
    </NavigationMenuItem>,
  ];

  return (
    <NavigationMenu className="flex  flex-row justify-between w-full">
      <NavigationMenuList className="flex flex-row gap-3">
        {...icons}
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem className="text-lg">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={200} height={100} />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>{...contact}</NavigationMenuList>
    </NavigationMenu>
  );
}
const icons = [
  <NavigationMenuItem key="title" className="text-lg">
    <Link href="/">
      <IconWithnumber count={10} icon={<CiHeart className="w-7 h-7" />} />
    </Link>
  </NavigationMenuItem>,
  <NavigationMenuItem key="cart" className="text-lg">
    <Link href="/">
      <IconWithnumber
        count={0}
        icon={<CiShoppingBasket className="w-7 h-7" />}
      />
    </Link>
  </NavigationMenuItem>,
  <NavigationMenuItem key="search" className="text-lg">
    <Link href="/">
      <IoSearchOutline className="w-6 h-6" />
    </Link>
  </NavigationMenuItem>,
];
