import { CategoryType } from "@/static/interface";
import { CATEGORY } from "@/static/links";
import requestService from "@/static/request";

interface CategoryResponse {
  data: CategoryType[];
}

export async function GetAllCategories(
  filter: Record<
    string,
    string | number | boolean | Record<string, string | number | boolean> | null
  > = {},
  limit?: number
): Promise<[] | CategoryType[]> {
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
