import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { badRequestResponse } from "./auth";

/**
 * Request validation middleware
 */
export async function validateRequest<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): Promise<{ success: true; data: T } | { success: false; response: NextResponse }> {
  try {
    let body: unknown;

    // Try to parse JSON body
    try {
      body = await request.json();
    } catch {
      // If no body, use empty object
      body = {};
    }

    // Validate with Zod schema
    const result = schema.safeParse(body);

    if (!result.success) {
      return {
        success: false,
        response: badRequestResponse(
          "Validation failed",
          result.error.errors.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          }))
        ),
      };
    }

    return { success: true, data: result.data };
  } catch (error) {
    return {
      success: false,
      response: badRequestResponse(
        "Invalid request format",
        error instanceof Error ? error.message : "Unknown error"
      ),
    };
  }
}

/**
 * Validate query parameters
 */
export function validateQuery<T>(
  request: NextRequest,
  schema: z.ZodSchema<T>
): { success: true; data: T } | { success: false; response: NextResponse } {
  try {
    const { searchParams } = new URL(request.url);
    const query: Record<string, string> = {};
    
    searchParams.forEach((value, key) => {
      query[key] = value;
    });

    const result = schema.safeParse(query);

    if (!result.success) {
      return {
        success: false,
        response: badRequestResponse(
          "Invalid query parameters",
          result.error.errors.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          }))
        ),
      };
    }

    return { success: true, data: result.data };
  } catch (error) {
    return {
      success: false,
      response: badRequestResponse(
        "Invalid query format",
        error instanceof Error ? error.message : "Unknown error"
      ),
    };
  }
}

/**
 * Common validation schemas
 */
export const schemas = {
  // ID validation
  id: z.string().min(1, "ID is required"),
  
  // Pagination
  pagination: z.object({
    page: z.string().optional().transform((val) => (val ? parseInt(val, 10) : 1)),
    limit: z.string().optional().transform((val) => (val ? parseInt(val, 10) : 10)),
  }),

  // URL validation
  url: z.string().url("Invalid URL format"),
  
  // Grab/Shopee URL
  restaurantUrl: z.string().refine(
    (url) => url.includes("grab.com") || url.includes("shopee.vn/food"),
    "Must be a valid Grab Food or Shopee Food URL"
  ),

  // Email
  email: z.string().email("Invalid email format"),

  // Price
  price: z.number().positive("Price must be positive"),
  
  // Quantity
  quantity: z.number().int().positive("Quantity must be a positive integer"),

  // Group ID
  groupId: z.string().min(1, "Group ID is required"),

  // Bank account
  bankAccount: z.object({
    bankName: z.string().min(1, "Bank name is required"),
    accountNumber: z.string().min(1, "Account number is required"),
    accountHolderName: z.string().min(1, "Account holder name is required"),
    isDefault: z.boolean().optional(),
  }),

  // Payment transfer
  paymentTransfer: z.object({
    amount: z.number().positive("Amount must be positive"),
    transactionId: z.string().optional(),
    bankName: z.string().optional(),
    transferDate: z.string().optional(),
    notes: z.string().optional(),
  }),
};

