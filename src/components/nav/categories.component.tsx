import React from "react";
import { NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import { useQuery } from "@tanstack/react-query";
import { GetAllCategories } from "@/services/category";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { CategoryType } from "@/static/interface";

export default function CategoryLine() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => GetAllCategories({ isActive: true, parentId: null }),
  });

  return (
    <NavigationMenuList className=" flex flex-row gap-4">
      {!isLoading &&
        data.map((item: CategoryType, idx: number) => {
          return (
            <NavigationMenuItem key={idx} className="text-lg">
              <TooltipProvider>
                <Tooltip>
                  <div className="flex w-full">
                    <TooltipTrigger>{item.name}</TooltipTrigger>
                    {item.Children.map((item: CategoryType, idx: number) => {
                      return (
                        <TooltipContent key={idx} className=" shadow-md">
                          <div className=" flex py-2 flex-col gap-2 w-full">
                            <Link href="" className=" hover:underline">
                              {item.name}
                            </Link>
                          </div>
                        </TooltipContent>
                      );
                    })}
                  </div>
                </Tooltip>
              </TooltipProvider>
            </NavigationMenuItem>
          );
        })}
      {isLoading && <Skeleton className=" w-100 h-[10px]" />}
    </NavigationMenuList>
  );
}
