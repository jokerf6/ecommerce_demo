// src/exceptions.ts

export class BadRequestException extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.name = "BadRequestException";
    this.statusCode = 400; // Set the HTTP status code for BadRequest
    Object.setPrototypeOf(this, BadRequestException.prototype); // Ensure proper inheritance
  }
}
