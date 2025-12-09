import { NextResponse } from 'next/server';

/**
 * Creates a CORS preflight response for OPTIONS requests
 * This must match the CORS headers configured in next.config.ts
 */
export function corsOptionsResponse() {
  const origin = process.env.NODE_ENV === 'production'
    ? 'https://web-order.vercel.app'
    : 'http://localhost:3000';

  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}

