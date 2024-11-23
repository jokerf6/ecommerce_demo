import React from 'react'
import { NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import { IoSearchOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';

export default function Search() {
    const t = useTranslations();
  return (
    <NavigationMenuList>
        <NavigationMenuItem className=' hover:border-gray-600  w-[500px] flex gap-4 items-center border px-[20px] border-grey-400 outline-gray-600  rounded-3xl'>
            <IoSearchOutline className=' text-gray-400' />
             <input type="text" placeholder={t("search")} className=' outline-none py-[5px] w-full'  />
        </NavigationMenuItem>
    </NavigationMenuList>

  )
}
