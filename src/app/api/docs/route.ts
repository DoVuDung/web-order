import { NextResponse } from 'next/server';
import { swaggerSpec } from '@/lib/api/swagger';

/**
 * GET /api/docs
 * Get Swagger/OpenAPI specification
 */
export async function GET() {
  return NextResponse.json(swaggerSpec);
}

