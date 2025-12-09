import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Web Order API',
      version: '1.0.0',
      description: 'API documentation for Web Order - Food Delivery Application',
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
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Clerk authentication token',
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
            details: {
              type: 'string',
              description: 'Detailed error information',
            },
          },
        },
        Restaurant: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Restaurant unique identifier',
            },
            name: {
              type: 'string',
              description: 'Restaurant name',
            },
            grabLink: {
              type: 'string',
              format: 'uri',
              description: 'Grab Food restaurant URL',
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
              description: 'Product unique identifier',
            },
            name: {
              type: 'string',
              description: 'Product name',
            },
            description: {
              type: 'string',
              nullable: true,
              description: 'Product description',
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Product price in VND',
            },
            imageUrl: {
              type: 'string',
              format: 'uri',
              nullable: true,
              description: 'Product image URL',
            },
            stock: {
              type: 'integer',
              default: 0,
              description: 'Product stock quantity',
            },
            restaurantId: {
              type: 'string',
              description: 'Restaurant ID',
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
        CrawlRequest: {
          type: 'object',
          required: ['url'],
          properties: {
            url: {
              type: 'string',
              format: 'uri',
              description: 'Grab Food restaurant URL to crawl',
              example: 'https://food.grab.com/vn/vi/restaurant/...',
            },
          },
        },
        CrawlResponse: {
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
            grabLink: {
              type: 'string',
              format: 'uri',
              description: 'Grab Food restaurant URL',
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
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'User unique identifier',
            },
            firstName: {
              type: 'string',
              nullable: true,
              description: 'User first name',
            },
            lastName: {
              type: 'string',
              nullable: true,
              description: 'User last name',
            },
            emailAddress: {
              type: 'string',
              format: 'email',
              description: 'User email address',
            },
            role: {
              type: 'string',
              enum: ['admin', 'moderator', 'user'],
              description: 'User role',
            },
            lastSignInAt: {
              type: 'number',
              nullable: true,
              description: 'Last sign in timestamp',
            },
            createdAt: {
              type: 'number',
              description: 'Account creation timestamp',
            },
          },
        },
        UsersResponse: {
          type: 'object',
          properties: {
            users: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/User',
              },
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
              enum: ['admin', 'moderator', 'user'],
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
        SuccessResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Operation completed successfully',
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Restaurants',
        description: 'Restaurant management endpoints',
      },
      {
        name: 'Crawling',
        description: 'Web scraping endpoints for Grab Food',
      },
      {
        name: 'Admin',
        description: 'Admin-only endpoints for user management',
      },
    ],
  },
  apis: [
    './src/app/api/**/*.ts', // Path to the API files
    './src/app/api/**/route.ts', // Alternative path pattern
  ],
};

export const swaggerSpec = swaggerJsdoc(options);

