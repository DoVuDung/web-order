# API Testing Guide

## Quick Start

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Access Swagger UI (Interactive API Documentation):**
   - Open: http://localhost:3000/api-docs
   - Test endpoints directly from the browser

3. **Get OpenAPI JSON spec:**
   - http://localhost:3000/api/swagger

## Available API Endpoints

### 1. Crawl Restaurant Data
**POST** `/api/craw`
- **Description**: Scrapes Grab Food restaurant page and stores menu items
- **Authentication**: Required (Bearer token)
- **Rate Limit**: Applied
- **Request Body:**
  ```json
  {
    "url": "https://food.grab.com/vn/vi/restaurant/..."
  }
  ```

**Example with curl:**
```bash
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/..."
  }'
```

### 2. Get All Restaurants
**GET** `/api/restaurants`
- **Description**: Retrieve all restaurants with their products
- **Authentication**: Not required
- **Response**: Array of restaurants with products

**Example with curl:**
```bash
curl http://localhost:3000/api/restaurants
```

### 3. Delete Restaurant
**DELETE** `/api/restaurants?id=RESTAURANT_ID`
- **Description**: Delete a restaurant by ID (cascades to products)
- **Authentication**: Not required
- **Query Parameter**: `id` (required)

**Example with curl:**
```bash
curl -X DELETE "http://localhost:3000/api/restaurants?id=RESTAURANT_ID"
```

### 4. Get All Users (Admin Only)
**GET** `/api/admin/users`
- **Description**: Retrieve all users with their roles
- **Authentication**: Required (Admin role)
- **Response**: Array of users

**Example with curl:**
```bash
curl http://localhost:3000/api/admin/users \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN"
```

### 5. Update User Role (Admin Only)
**PATCH** `/api/admin/users`
- **Description**: Update a user's role
- **Authentication**: Required (Admin role)
- **Request Body:**
  ```json
  {
    "userId": "user_123",
    "role": "moderator"
  }
  ```

**Example with curl:**
```bash
curl -X PATCH http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -d '{
    "userId": "user_123",
    "role": "moderator"
  }'
```

### 6. Delete User (Admin Only)
**DELETE** `/api/admin/users`
- **Description**: Delete a user account
- **Authentication**: Required (Admin role)
- **Request Body:**
  ```json
  {
    "userId": "user_123"
  }
  ```

**Example with curl:**
```bash
curl -X DELETE http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_CLERK_TOKEN" \
  -d '{
    "userId": "user_123"
  }'
```

## CORS Preflight (OPTIONS)

All API endpoints support OPTIONS requests for CORS preflight:
```bash
curl -X OPTIONS http://localhost:3000/api/craw \
  -H "Origin: http://localhost:3000" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type, Authorization"
```

## Testing with Swagger UI

1. Start the dev server: `npm run dev`
2. Open http://localhost:3000/api-docs
3. Click "Try it out" on any endpoint
4. Fill in the required parameters
5. Click "Execute" to test

## Testing with Postman/Insomnia

1. Import the OpenAPI spec from: http://localhost:3000/api/swagger
2. Set up authentication:
   - Type: Bearer Token
   - Token: Your Clerk JWT token
3. Test endpoints directly

## Authentication Setup

To get a Clerk token for testing:

1. Sign in through the app at http://localhost:3000
2. Get the token from browser DevTools → Application → Cookies → `__session`
3. Or use Clerk's API to generate a test token

## Environment Variables Required

Make sure you have these in `.env.local`:
```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

## Common Test Scenarios

### Test 1: Crawl a Restaurant
```bash
# First, get a valid Grab Food URL
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"url": "https://food.grab.com/vn/vi/restaurant/..."}'
```

### Test 2: List All Restaurants
```bash
curl http://localhost:3000/api/restaurants | jq
```

### Test 3: Test CORS
```bash
curl -X OPTIONS http://localhost:3000/api/restaurants \
  -H "Origin: http://localhost:3000" \
  -v
```

## Response Examples

### Success Response (200)
```json
{
  "id": "restaurant_123",
  "name": "Restaurant Name",
  "grabLink": "https://food.grab.com/...",
  "products": [...]
}
```

### Error Response (400)
```json
{
  "error": "Invalid GrabFood link"
}
```

### Error Response (401)
```json
{
  "error": "Unauthorized"
}
```

### Error Response (429)
```json
{
  "error": "Too many requests"
}
```

## Rate Limiting

The `/api/craw` endpoint has rate limiting. If you hit the limit:
- Wait for the cooldown period
- Check response headers for `Retry-After`

## Troubleshooting

1. **Server not starting?**
   - Check if port 3000 is available
   - Verify database connection
   - Check environment variables

2. **Authentication errors?**
   - Verify Clerk keys are set correctly
   - Check token validity
   - Ensure user has required role

3. **CORS errors?**
   - Verify OPTIONS handler is working
   - Check origin matches allowed origins
   - Test with curl first to isolate browser issues

