import { NextRequest } from "next/server";

export async function GetLocale(req: NextRequest) {
  return req.headers.get("referer").split("/")[3];
}
