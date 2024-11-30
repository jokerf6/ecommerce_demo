export function normalizePagination(limit?: string, skip?: string) {
  const parsedLimit = limit ? parseInt(limit, 10) : 10; // Default to 10
  const parsedSkip = skip ? parseInt(skip, 10) : 0; // Default to 0

  // Ensure values are positive integers
  return {
    limit: Math.max(parsedLimit, 1), // Ensures limit is at least 1
    skip: Math.max(parsedSkip, 0), // Ensures skip is at least 0
  };
}
