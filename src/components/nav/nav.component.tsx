import {
  Link,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import React from "react";
import IconWithnumber from "../iconWithnumber.component";
import { CiHeart } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import Locale from "./locale.component";
import Search from "./search.component";
import Logo from "../logo/index.component";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Nav({ dir, lang }: { dir: string; lang: string }) {
  //  const t = useTranslations();

  return (
    <div className=" flex flex-col shadow-xl  sticky top-0 z-50  bg-white">
      <Locale dir={dir} lang={lang} />
      <NavigationMenu
        dir={dir as "ltr" | "rtl"}
        className="flex  z-50 flex-row justify-between items-center w-full global-padding py-[30px] px-main"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Logo className="" />
          </NavigationMenuItem>
        </NavigationMenuList>

        <Search smallNav="xl:flex lg:flex hidden" data={["ss"]} />
        <NavigationMenuList className="flex flex-row gap-5">
          {...icons}
        </NavigationMenuList>
      </NavigationMenu>
      <div className=" w-full px-main pb-[10px]">
        <Search smallNav="xl:hidden lg:hidden flex w-full  " data={["ss"]} />
      </div>

      <hr className=" xl:flex lg:flex hidden" />
      <NavigationMenu
        dir={dir as "ltr" | "rtl"}
        className="xl:flex lg:flex hidden z-1   flex-row justify-center w-full py-[10px]"
      >
        <NavigationMenuList className=" flex flex-row gap-4">
          <NavigationMenuItem className="text-lg">
            <TooltipProvider>
              <Tooltip>
                <div className="flex w-full">
                  <TooltipTrigger>اكسسوارات</TooltipTrigger>
                  <TooltipContent className=" shadow-md">
                    <div className=" flex py-2 flex-col gap-2 w-full">
                      <Link href="" className=" hover:underline">
                        تيشرتات
                      </Link>
                    </div>
                  </TooltipContent>
                </div>
              </Tooltip>
            </TooltipProvider>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-lg">
            <TooltipProvider>
              <Tooltip>
                <div className="flex w-full">
                  <TooltipTrigger>اكسسوارات</TooltipTrigger>
                  <TooltipContent className=" shadow-md">
                    <div className=" flex py-2 flex-col gap-2 w-full">
                      <Link href="" className=" hover:underline">
                        تيشرتات
                      </Link>
                    </div>
                  </TooltipContent>
                </div>
              </Tooltip>
            </TooltipProvider>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-lg">
            <TooltipProvider>
              <Tooltip>
                <div className="flex w-full">
                  <TooltipTrigger>اكسسوارات</TooltipTrigger>
                  <TooltipContent className=" shadow-md">
                    <div className=" flex py-2 flex-col gap-2 w-full">
                      <Link href="" className=" hover:underline">
                        تيشرتات
                      </Link>
                    </div>
                  </TooltipContent>
                </div>
              </Tooltip>
            </TooltipProvider>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-lg">
            <TooltipProvider>
              <Tooltip>
                <div className="flex w-full">
                  <TooltipTrigger>اكسسوارات</TooltipTrigger>
                  <TooltipContent className=" shadow-md">
                    <div className=" flex py-2 flex-col gap-2 w-full">
                      <Link href="" className=" hover:underline">
                        تيشرتات
                      </Link>
                    </div>
                  </TooltipContent>
                </div>
              </Tooltip>
            </TooltipProvider>
          </NavigationMenuItem>

          <NavigationMenuItem className="text-lg">
            <TooltipProvider>
              <Tooltip>
                <div className="flex w-full">
                  <TooltipTrigger>اكسسوارات</TooltipTrigger>
                  <TooltipContent className=" shadow-md">
                    <div className=" flex py-2 flex-col gap-2 w-full">
                      <Link href="" className=" hover:underline">
                        تيشرتات
                      </Link>
                    </div>
                  </TooltipContent>
                </div>
              </Tooltip>
            </TooltipProvider>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
const icons = [
  <NavigationMenuItem key="title" className="text-lg">
    <Link href="/">
      <IconWithnumber
        count={10}
        icon={<CiHeart className="w-7 h-7 text-primary" />}
      />
    </Link>
  </NavigationMenuItem>,
  <NavigationMenuItem key="cart" className="text-lg">
    <Link href="/">
      <IconWithnumber
        count={0}
        icon={<CiShoppingBasket className="w-7 h-7 text-primary" />}
      />
    </Link>
  </NavigationMenuItem>,
  <NavigationMenuItem key="search" className="text-lg">
    <Link href="/">
      <IoPersonOutline className="w-6 h-6 text-primary" />
    </Link>
  </NavigationMenuItem>,
];
