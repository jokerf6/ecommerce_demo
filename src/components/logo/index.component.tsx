import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Logo({ className }: { className: string }) {
  return (
    <Link href="/">
      <h1 className={cn("text-6xl  font-bold text-primary", className)}>
        KARA
      </h1>
    </Link>
  );
}
