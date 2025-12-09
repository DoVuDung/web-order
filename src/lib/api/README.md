# API Security & Authorization Guide

Quick reference for using the API security utilities.

## 🔐 Authentication & Authorization

### Basic Usage

```typescript
import { requireAuth } from "@/lib/api/authorization";

export const GET = requireAuth(async (auth, request) => {
  // auth.userId - Current user ID
  // auth.userRole - Current user role
  // auth.isAdmin - Is user admin?
  // auth.isModerator - Is user moderator?
  
  return NextResponse.json({ data: "..." });
});
```

### Role-Based Access

```typescript
import { requireAdmin, requireModerator, requireRole } from "@/lib/api/authorization";

// Admin only
export const DELETE = requireAdmin(async (auth, request) => { /* ... */ });

// Moderator or Admin
export const PATCH = requireModerator(async (auth, request) => { /* ... */ });

// Specific role
export const POST = requireRole('moderator')(async (auth, request) => { /* ... */ });
```

### Custom Authorization

```typescript
import { withAuthorization } from "@/lib/api/authorization";

export const GET = withAuthorization(
  request,
  {
    requiredRole: 'moderator',
    allowOwner: async (userId, req) => {
      // Check if user owns the resource
      return await isResourceOwner(userId, req);
    },
    customCheck: async (auth, req) => {
      // Custom authorization logic
      return true;
    },
  },
  async (auth, request) => {
    // Handler
  }
);
```

## ✅ Input Validation

### Request Body Validation

```typescript
import { validateRequest, schemas } from "@/lib/api/validation";
import { z } from "zod";

const schema = z.object({
  url: schemas.restaurantUrl,
  name: z.string().min(1),
});

export const POST = async (request: NextRequest) => {
  const validation = await validateRequest(request, schema);
  if (!validation.success) {
    return validation.response; // Returns 400 with error details
  }
  
  const { url, name } = validation.data; // Type-safe!
  // ...
};
```

### Query Parameter Validation

```typescript
import { validateQuery, schemas } from "@/lib/api/validation";

const querySchema = z.object({
  id: schemas.id,
  page: z.string().optional(),
});

export const GET = async (request: NextRequest) => {
  const validation = validateQuery(request, querySchema);
  if (!validation.success) {
    return validation.response;
  }
  
  const { id, page } = validation.data;
  // ...
};
```

## 🚦 Rate Limiting

### Apply Rate Limiting

```typescript
import { withRateLimit } from "@/lib/api/rate-limit";

// Use preset
export const POST = withRateLimit('api', async (request) => {
  // 100 requests per minute
});

// Custom rate limit
export const GET = withRateLimit(
  { windowMs: 60000, maxRequests: 50 },
  async (request) => {
    // 50 requests per minute
  }
);
```

### Rate Limit Presets

- `auth`: 5 requests / 15 minutes
- `api`: 100 requests / minute
- `public`: 200 requests / minute
- `sensitive`: 10 requests / hour
- `crawl`: 10 requests / minute

## 🔄 Complete Example

```typescript
import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/api/authorization";
import { validateRequest, schemas } from "@/lib/api/validation";
import { withRateLimit } from "@/lib/api/rate-limit";
import { z } from "zod";

const createGroupSchema = z.object({
  name: z.string().min(1).max(100),
  restaurantId: schemas.id,
});

export const POST = withRateLimit(
  'api',
  requireAuth(async (auth, request: NextRequest) => {
    // Validate input
    const validation = await validateRequest(request, createGroupSchema);
    if (!validation.success) {
      return validation.response;
    }
    
    const { name, restaurantId } = validation.data;
    
    // Your business logic
    // ...
    
    return NextResponse.json({ success: true });
  })
);
```

## 🛠️ Error Responses

### Standardized Errors

```typescript
import { 
  unauthorizedResponse,
  forbiddenResponse,
  badRequestResponse,
  notFoundResponse,
  internalErrorResponse
} from "@/lib/api/auth";

// 401 Unauthorized
return unauthorizedResponse("Authentication required");

// 403 Forbidden
return forbiddenResponse("Admin access required");

// 400 Bad Request
return badRequestResponse("Invalid input", { details: [...] });

// 404 Not Found
return notFoundResponse("Resource not found");

// 500 Internal Error
return internalErrorResponse("Operation failed", error);
```

## 📋 Common Validation Schemas

Available in `schemas` object:

- `schemas.id` - String ID validation
- `schemas.url` - URL validation
- `schemas.restaurantUrl` - Grab/Shopee URL
- `schemas.email` - Email validation
- `schemas.price` - Positive number
- `schemas.quantity` - Positive integer
- `schemas.groupId` - Group ID validation
- `schemas.pagination` - Page and limit
- `schemas.bankAccount` - Bank account object
- `schemas.paymentTransfer` - Payment transfer object

## 🔗 Related Files

- `/src/lib/api/auth.ts` - Authentication utilities
- `/src/lib/api/authorization.ts` - Authorization middleware
- `/src/lib/api/validation.ts` - Input validation
- `/src/lib/api/rate-limit.ts` - Rate limiting
- `/src/lib/api/swagger.ts` - Swagger configuration

## 📚 Documentation

- Full security docs: `/SECURITY.md`
- API summary: `/API_SECURITY_SUMMARY.md`
- Swagger UI: `/api-docs`

