import { CATEGORY } from "@/static/links";
import requestService from "@/static/request";
import { Category } from "@prisma/client";

interface CategoryResponse {
  data: Category[];
}

export async function GetAllCategories(
  filter: Record<
    string,
    string | number | boolean | Record<string, string | number | boolean> | null
  > = {},
  limit?: number
): Promise<[] | Category[]> {
  try {
    const response = await requestService.get(CATEGORY, undefined, undefined, {
      limit: limit | 6,
      filter,
    });

    const responseData = response.data as CategoryResponse;

    return responseData.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}
