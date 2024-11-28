import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  const locale = pathname.split("/")[1];

  if (!locale || !routing.locales.includes(locale as Locales)) {
    return NextResponse.redirect(
      new URL(`/${routing.defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/about-us",
    "/(en|ar)/:path*",
    "/",
    "/return-policy",
    "/contact-us",
  ],
};
