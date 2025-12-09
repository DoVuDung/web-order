import { NextRequest, NextResponse } from 'next/server';

/**
 * Creates a CORS preflight response for OPTIONS requests
 * This must match the CORS headers configured in next.config.ts
 * 
 * @param request - Optional request object to extract origin from
 */
export function corsOptionsResponse(request?: NextRequest) {
  // Get origin from request if provided, otherwise use default
  let origin: string;
  
  if (request) {
    const requestOrigin = request.headers.get('origin');
    // Validate origin against allowed origins
    const allowedOrigins = process.env.NODE_ENV === 'production'
      ? ['https://web-order.vercel.app']
      : ['http://localhost:3000', 'http://127.0.0.1:3000'];
    
    if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
      origin = requestOrigin;
    } else {
      origin = process.env.NODE_ENV === 'production'
        ? 'https://web-order.vercel.app'
        : 'http://localhost:3000';
    }
  } else {
    origin = process.env.NODE_ENV === 'production'
      ? 'https://web-order.vercel.app'
      : 'http://localhost:3000';
  }

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400',
    },
  });
}

