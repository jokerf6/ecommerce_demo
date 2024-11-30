import { parseQueryParams } from "@/lib/queryParsed";
import { GetLocale } from "@/static/getLocale";
import { localizedObject } from "@/static/localizedObject";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const locale = await GetLocale(req);
  const { limit, skip, filterObj } = parseQueryParams(req);
  try {
    const categories = await prisma.category.findMany({
      include: { Children: true },
      where: filterObj,
      skip: skip,
      take: limit,
    });

    return NextResponse.json(
      {
        message: "Get Categories Successfully",
        data: localizedObject(categories, locale),
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching Categories", error: error.message },
      { status: 500 }
    );
  }
}
