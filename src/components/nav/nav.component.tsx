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

export default function Nav({ dir,lang }: { dir: string,lang:string }) {
//  const t = useTranslations();

  return (
    <div className=" flex flex-col shadow-xl  sticky top-0 z-50  bg-white" >
      <Locale  dir={dir} lang={lang} />
    <NavigationMenu dir={dir as "ltr" | "rtl"} className="flex  z-50 flex-row justify-between items-center w-full px-[100px] py-[30px]">
    <NavigationMenuList  >
        <NavigationMenuItem  >
          <Link href="/">
            <h1 className="text-6xl  font-bold text-primary">KARA</h1>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

       <Search />      
      <NavigationMenuList className="flex flex-row gap-5">{...icons}</NavigationMenuList>
   
      </NavigationMenu>

    <hr />
    <NavigationMenu dir={dir as "ltr" | "rtl"} className="flex z-50  flex-row justify-center w-full py-[10px]">
    <NavigationMenuList>
        <NavigationMenuItem className="text-lg">  
          <Link href="/">
               <span>اكسسوارات</span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    

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
      <IoPersonOutline className="w-6 h-6" />
    </Link>
  </NavigationMenuItem>,
];
