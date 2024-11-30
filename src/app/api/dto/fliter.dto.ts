import { NextApiRequest, NextApiResponse } from "next";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

// Define a DTO (Data Transfer Object) class for validation
class FilterDto {
  limit: number;
  skip: number;
  id: string; // dynamic parameter
}

// Function to merge query parameters, body, and params
const mergeParams = (query: object, body: object, params: object) => {
  const merged = {};

  const mergeValues = (source: object, target: object) => {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (!Array.isArray(target[key]))
          target[key] = target[key] ? [target[key]] : [];

        if (Array.isArray(source[key])) {
          if (Array.isArray(target[key])) {
            target[key] = [...new Set([...target[key], ...source[key]])];
          } else if (target[key] !== undefined) {
            target[key] = [...new Set([target[key], ...source[key]])];
          } else {
            target[key] = [...source[key]];
          }
        } else {
          if (Array.isArray(target[key])) {
            target[key] = [...new Set([...target[key], source[key]])];
          } else if (target[key] !== undefined) {
            target[key] = [...new Set([target[key], source[key]])];
          } else {
            target[key] = source[key];
          }
        }
      }
    }
  };

  mergeValues(params, merged); // Use `params` for dynamic route parameters
  mergeValues(query, merged); // Use `query` for query parameters
  mergeValues(body, merged); // Use `body` for request body

  return merged;
};

// Custom error handler (you can replace with a more structured error handling approach)
class BadRequestException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BadRequestException";
  }
}

// Your API route
export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Merge params (from req.query for dynamic routes), query, and body
    const merged = mergeParams(req.query, req.body, req.query); // req.query includes dynamic params for routes like /[id]

    // Transform into a class instance and validate
    const transformed = plainToClass(FilterDto, merged);
    const errors = await validate(transformed);

    if (errors.length > 0) {
      const errorMessage = errors
        .map((error) => Object.values(error.constraints))
        .join(", ");
      throw new BadRequestException(errorMessage);
    }

    // Return the filtered and validated data
    res.status(200).json({ message: "Request successful", data: transformed });
  } catch (error) {
    if (error instanceof BadRequestException) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default handler;
