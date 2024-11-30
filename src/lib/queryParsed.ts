import { NextRequest } from "next/server";

/**
 * A utility function to parse `limit`, `skip`, and `filter` query parameters.
 * @param {NextRequest} req - The Next.js API request object.
 * @returns {object} - An object containing parsed `limit`, `skip`, and `filter`.
 */
export function parseQueryParams(req: NextRequest) {
  const url = new URL(req.url);

  // Extract query parameters
  const limit = +url.searchParams.get("limit") || 10; // Default limit of 10 if not provided
  const skip = +url.searchParams.get("skip") || 0; // Default skip of 0 if not provided
  const filterParam = url.searchParams.get("filter"); // Optional filter parameter (e.g., JSON)

  // Initialize an empty filter object
  let filterObj: Record<string, unknown> = {};

  // If a filter is provided, try parsing it as JSON
  if (filterParam) {
    try {
      filterObj = JSON.parse(filterParam);
    } catch (error) {
      // Return a bad request response if JSON parsing fails
      return {
        error: true,
        message: "Invalid filter parameter",
        errorMessage: error.message,
      };
    }
  }

  return { limit, skip, filterObj, error: false };
}
