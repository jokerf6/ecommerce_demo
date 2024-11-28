"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function Search(props: { smallNav: string; data: string[] }) {
  const t = useTranslations();
  const [show, setShow] = useState(true);
  return (
    <div className={cn("  flex w-[500px] relative", props.smallNav)}>
      <Command className="w-full flex flex-col">
        <CommandInput
          setShow={setShow}
          onFocus={() => setShow(false)}
          show={show ? "hidden" : "flex"}
          className={cn(
            `   z-[100] w-full  gap-4 items-center border px-[20px] border-grey-400   rounded-3xl`,
            props.smallNav
          )}
          placeholder={t("search")}
        />
        <div
          hidden={show}
          className=" max-h-[200px] h-fit  mt-[20px] absolute w-full border-b border-l border-r  "
        >
          <CommandList className="z-100 w-full  bg-white h-full py-[20px] overflow-hidden">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </div>
      </Command>
    </div>
  );
}
