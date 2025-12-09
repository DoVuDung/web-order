import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Web Order API',
      version: '1.0.0',
      description: 'API documentation for Web Order - Group Food Ordering Platform',
      contact: {
        name: 'API Support',
        email: 'support@weborder.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
        description: 'Development server',
      },
      {
        url: 'https://web-order.vercel.app',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        ClerkAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Clerk Authentication Token. Get token from Clerk session.',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
              description: 'Error message',
            },
            code: {
              type: 'string',
              description: 'Error code',
              enum: ['UNAUTHORIZED', 'FORBIDDEN', 'BAD_REQUEST', 'NOT_FOUND', 'INTERNAL_ERROR', 'RATE_LIMIT_EXCEEDED'],
            },
            details: {
              type: 'object',
              description: 'Additional error details (development only)',
            },
          },
          required: ['error', 'code'],
        },
        Restaurant: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Restaurant ID',
            },
            name: {
              type: 'string',
              description: 'Restaurant name',
            },
            platform: {
              type: 'string',
              enum: ['GRAB', 'SHOPEE'],
              description: 'Platform (Grab or Shopee)',
            },
            grabLink: {
              type: 'string',
              nullable: true,
              description: 'Grab Food URL',
            },
            shopeeLink: {
              type: 'string',
              nullable: true,
              description: 'Shopee Food URL',
            },
            products: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Product',
              },
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            description: {
              type: 'string',
              nullable: true,
            },
            price: {
              type: 'number',
            },
            imageUrl: {
              type: 'string',
              nullable: true,
            },
            stock: {
              type: 'number',
            },
            restaurantId: {
              type: 'string',
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            firstName: {
              type: 'string',
              nullable: true,
            },
            lastName: {
              type: 'string',
              nullable: true,
            },
            emailAddress: {
              type: 'string',
            },
            role: {
              type: 'string',
              enum: ['admin', 'moderator', 'customer'],
            },
            lastSignInAt: {
              type: 'number',
              nullable: true,
            },
            createdAt: {
              type: 'number',
            },
          },
        },
        CrawlRequest: {
          type: 'object',
          required: ['url'],
          properties: {
            url: {
              type: 'string',
              format: 'uri',
              description: 'Grab Food or Shopee Food restaurant URL',
              example: 'https://food.grab.com/vn/vi/restaurant/...',
            },
          },
        },
        UpdateUserRoleRequest: {
          type: 'object',
          required: ['userId', 'role'],
          properties: {
            userId: {
              type: 'string',
              description: 'User ID to update',
            },
            role: {
              type: 'string',
              enum: ['admin', 'moderator', 'customer'],
              description: 'New role for the user',
            },
          },
        },
        DeleteUserRequest: {
          type: 'object',
          required: ['userId'],
          properties: {
            userId: {
              type: 'string',
              description: 'User ID to delete',
            },
          },
        },
      },
      responses: {
        UnauthorizedError: {
          description: 'Authentication required',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                error: 'Unauthorized',
                code: 'UNAUTHORIZED',
              },
            },
          },
        },
        ForbiddenError: {
          description: 'Insufficient permissions',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                error: 'Forbidden - Insufficient permissions',
                code: 'FORBIDDEN',
              },
            },
          },
        },
        BadRequestError: {
          description: 'Invalid request',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                error: 'Validation failed',
                code: 'BAD_REQUEST',
                details: [
                  {
                    path: 'url',
                    message: 'Must be a valid Grab Food or Shopee Food URL',
                  },
                ],
              },
            },
          },
        },
        NotFoundError: {
          description: 'Resource not found',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                error: 'Resource not found',
                code: 'NOT_FOUND',
              },
            },
          },
        },
        RateLimitError: {
          description: 'Too many requests',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                error: 'Too many requests',
                code: 'RATE_LIMIT_EXCEEDED',
                retryAfter: 60,
              },
            },
          },
          headers: {
            'Retry-After': {
              schema: {
                type: 'integer',
              },
              description: 'Seconds to wait before retrying',
            },
            'X-RateLimit-Limit': {
              schema: {
                type: 'integer',
              },
              description: 'Request limit per window',
            },
            'X-RateLimit-Remaining': {
              schema: {
                type: 'integer',
              },
              description: 'Remaining requests in current window',
            },
          },
        },
        InternalServerError: {
          description: 'Internal server error',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error',
              },
              example: {
                error: 'Internal server error',
                code: 'INTERNAL_ERROR',
              },
            },
          },
        },
      },
    },
    security: [
      {
        ClerkAuth: [],
      },
    ],
    tags: [
      {
        name: 'Restaurants',
        description: 'Restaurant management endpoints',
      },
      {
        name: 'Crawling',
        description: 'Web scraping endpoints for restaurant data',
      },
      {
        name: 'Admin',
        description: 'Admin-only endpoints for user management',
      },
      {
        name: 'Groups',
        description: 'Group ordering endpoints',
      },
      {
        name: 'Payments',
        description: 'Payment tracking endpoints',
      },
    ],
  },
  apis: [
    './src/app/api/**/route.ts',
    './src/lib/api/**/*.ts',
  ],
};

export const swaggerSpec = swaggerJsdoc(options);

