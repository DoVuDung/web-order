# Swagger API Documentation Setup

This project uses Swagger/OpenAPI 3.0 for API documentation.

## Accessing the Documentation

- **Swagger UI**: Visit `/api-docs` in your browser
- **OpenAPI JSON**: Available at `/api/swagger`

## Features

- ✅ Complete API documentation for all endpoints
- ✅ Interactive API testing with Swagger UI
- ✅ Request/Response schemas
- ✅ Authentication documentation
- ✅ Error response documentation

## Documented Endpoints

### Restaurants
- `GET /api/restaurants` - Get all restaurants
- `DELETE /api/restaurants?id={id}` - Delete a restaurant

### Crawling
- `POST /api/craw` - Crawl Grab Food restaurant page

### Admin (Requires Authentication)
- `GET /api/admin/users` - Get all users
- `PATCH /api/admin/users` - Update user role
- `DELETE /api/admin/users` - Delete a user

## Adding New Endpoints

To document a new API endpoint, add JSDoc comments using Swagger annotations:

```typescript
/**
 * @swagger
 * /api/your-endpoint:
 *   get:
 *     summary: Your endpoint summary
 *     tags: [YourTag]
 *     description: Detailed description
 *     responses:
 *       200:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/YourSchema'
 */
export async function GET() {
  // Your implementation
}
```

## Configuration

Swagger configuration is located in `src/lib/swagger/config.ts`. You can:
- Add new schemas in `components.schemas`
- Add new tags in `tags`
- Update server URLs in `servers`

## Dependencies

- `swagger-jsdoc` - Generates OpenAPI spec from JSDoc comments
- `swagger-ui-react` - React component for Swagger UI

## Development

The Swagger spec is automatically generated from JSDoc comments in API route files. After adding or updating documentation:

1. Restart the development server
2. Visit `/api-docs` to see the updated documentation

