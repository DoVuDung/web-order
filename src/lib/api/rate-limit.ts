import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (for production, use Redis or similar)
interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

/**
 * Simple rate limiter middleware
 * 
 * @param request - Next.js request
 * @param options - Rate limit options
 * @returns Response if rate limited, null if allowed
 */
export function rateLimit(
  request: NextRequest,
  options: {
    windowMs?: number; // Time window in milliseconds
    maxRequests?: number; // Maximum requests per window
    keyGenerator?: (request: NextRequest) => string; // Custom key generator
  } = {}
): NextResponse | null {
  const {
    windowMs = 60 * 1000, // 1 minute default
    maxRequests = 100, // 100 requests per minute default
    keyGenerator = (req) => {
      // Default: use IP address
      const forwarded = req.headers.get('x-forwarded-for');
      const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
      return ip;
    },
  } = options;

  const key = keyGenerator(request);
  const now = Date.now();

  // Clean up expired entries
  Object.keys(store).forEach((k) => {
    if (store[k].resetTime < now) {
      delete store[k];
    }
  });

  // Get or create entry
  if (!store[key] || store[key].resetTime < now) {
    store[key] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return null; // Allow request
  }

  // Increment count
  store[key].count++;

  // Check if limit exceeded
  if (store[key].count > maxRequests) {
    return NextResponse.json(
      {
        error: "Too many requests",
        code: 'RATE_LIMIT_EXCEEDED',
        retryAfter: Math.ceil((store[key].resetTime - now) / 1000),
      },
      {
        status: 429,
        headers: {
          'Retry-After': Math.ceil((store[key].resetTime - now) / 1000).toString(),
          'X-RateLimit-Limit': maxRequests.toString(),
          'X-RateLimit-Remaining': Math.max(0, maxRequests - store[key].count).toString(),
          'X-RateLimit-Reset': new Date(store[key].resetTime).toISOString(),
        },
      }
    );
  }

  return null; // Allow request
}

/**
 * Rate limit configuration presets
 */
export const rateLimitPresets = {
  // Strict rate limit for authentication endpoints
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5, // 5 requests per 15 minutes
  },
  
  // Moderate rate limit for API endpoints
  api: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 100, // 100 requests per minute
  },
  
  // Lenient rate limit for public endpoints
  public: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 200, // 200 requests per minute
  },
  
  // Very strict for sensitive operations
  sensitive: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 10, // 10 requests per hour
  },
  
  // Crawling endpoint (prevent abuse)
  crawl: {
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 10, // 10 crawls per minute
  },
};

/**
 * Rate limit wrapper for API routes
 */
export function withRateLimit(
  preset: keyof typeof rateLimitPresets | { windowMs: number; maxRequests: number },
  handler: (request: NextRequest) => Promise<NextResponse>
) {
  return async (request: NextRequest): Promise<NextResponse> => {
    const config = typeof preset === 'string' ? rateLimitPresets[preset] : preset;
    
    const rateLimitResponse = rateLimit(request, config);
    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    return handler(request);
  };
}

