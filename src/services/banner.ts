import { BANNER } from "@/static/links";
import requestService from "@/static/request";
import { Banner } from "@prisma/client";

// Define the expected response type
interface BannerResponse {
  data: Banner[];
}

export async function GetAllBanners(): Promise<[] | Banner[]> {
  try {
    const response = await requestService.get(BANNER, undefined, undefined, {
      filter: { isActive: true },
    });

    const responseData = response.data as BannerResponse;

    return responseData.data;
  } catch (error) {
    console.error("Error fetching banners:", error);
    return [];
  }
}
