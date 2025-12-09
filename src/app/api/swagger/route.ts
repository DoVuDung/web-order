import { swaggerSpec } from '@/lib/swagger/config';
import { NextResponse } from 'next/server';

/**
 * @swagger
 * /api/swagger:
 *   get:
 *     summary: Get OpenAPI specification
 *     tags: [Swagger]
 *     description: Returns the OpenAPI 3.0 specification for the API
 *     responses:
 *       200:
 *         description: OpenAPI specification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
export async function GET() {
  return NextResponse.json(swaggerSpec);
}

