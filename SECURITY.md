# Security Documentation

## 🔒 Security Overview

This document outlines the security measures implemented in the Web Order application, including API security, authentication, authorization, and frontend security.

---

## 🛡️ API Security

### Authentication

All protected API endpoints require authentication via **Clerk**. The authentication flow:

1. User authenticates through Clerk
2. Clerk provides JWT token in session
3. API routes verify token via `auth()` from `@clerk/nextjs/server`
4. Token is validated on each request

### Authorization

Role-Based Access Control (RBAC) is implemented with three roles:

- **Customer**: Default role, basic access
- **Moderator**: Elevated permissions for order management
- **Admin**: Full system access

#### Authorization Helpers

```typescript
// Require authentication only
requireAuth(handler)

// Require specific role
requireRole('admin')(handler)
requireAdmin(handler)
requireModerator(handler)

// Require owner or role
requireOwnerOrRole('moderator', getResourceOwnerId)(handler)

// Group-specific authorization
requireGroupOwner(groupIdExtractor)(handler)
requireGroupMember(groupIdExtractor)(handler)
```

### Rate Limiting

Rate limiting is implemented to prevent abuse:

- **Auth endpoints**: 5 requests per 15 minutes
- **API endpoints**: 100 requests per minute
- **Public endpoints**: 200 requests per minute
- **Sensitive operations**: 10 requests per hour
- **Crawl endpoints**: 10 requests per minute

Rate limit headers included in responses:
- `X-RateLimit-Limit`: Request limit
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Reset time
- `Retry-After`: Seconds to wait

### Input Validation

All API inputs are validated using **Zod** schemas:

```typescript
// Request body validation
const validation = await validateRequest(request, schema);

// Query parameter validation
const validation = validateQuery(request, schema);
```

Common validation schemas:
- IDs, URLs, emails
- Pagination parameters
- Restaurant URLs (Grab/Shopee)
- Bank account information
- Payment transfers

### Error Handling

Standardized error responses:

```typescript
{
  error: "Error message",
  code: "ERROR_CODE",
  details?: {} // Development only
}
```

Error codes:
- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Insufficient permissions
- `BAD_REQUEST`: Invalid input
- `NOT_FOUND`: Resource not found
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `INTERNAL_ERROR`: Server error

---

## 🌐 Frontend Security

### Security Headers

Implemented via `next.config.ts`:

- **X-Frame-Options**: `DENY` - Prevents clickjacking
- **X-Content-Type-Options**: `nosniff` - Prevents MIME sniffing
- **X-XSS-Protection**: `1; mode=block` - XSS protection
- **Strict-Transport-Security**: Forces HTTPS
- **Content-Security-Policy**: Restricts resource loading
- **Permissions-Policy**: Restricts browser features
- **Referrer-Policy**: Controls referrer information

### CORS Configuration

API routes include CORS headers:
- `Access-Control-Allow-Origin`: Configured per environment
- `Access-Control-Allow-Methods`: GET, POST, PUT, DELETE, PATCH, OPTIONS
- `Access-Control-Allow-Headers`: Content-Type, Authorization
- `Access-Control-Max-Age`: 86400 seconds

### XSS Prevention

- React automatically escapes content
- Input sanitization on user inputs
- Content Security Policy restricts inline scripts
- No `dangerouslySetInnerHTML` without sanitization

### CSRF Protection

- Clerk handles CSRF protection
- SameSite cookies enabled
- State parameter in OAuth flows
- Token-based authentication

---

## 🔐 Authentication Flow

### User Authentication

1. User visits protected route
2. Middleware checks authentication
3. If not authenticated, redirects to `/sign-in`
4. After sign-in, redirects back to original route
5. Session stored in secure HTTP-only cookies

### API Authentication

1. Frontend includes Clerk session token
2. API route calls `auth()` from Clerk
3. Clerk validates token
4. Returns user information
5. Authorization checks performed

### Token Management

- Tokens stored in HTTP-only cookies (Clerk)
- Tokens automatically refreshed
- Tokens invalidated on logout
- No token storage in localStorage

---

## 🚫 Authorization Rules

### Public Endpoints

- `GET /api/restaurants` - List restaurants

### Authenticated Endpoints

- `POST /api/craw` - Crawl restaurant data
- All group ordering endpoints
- All payment endpoints

### Admin-Only Endpoints

- `GET /api/admin/users` - List users
- `PATCH /api/admin/users` - Update user role
- `DELETE /api/admin/users` - Delete user
- `DELETE /api/restaurants` - Delete restaurant

### Role Hierarchy

```
Admin (Level 3)
  ↓
Moderator (Level 2)
  ↓
Customer (Level 1)
```

Higher roles inherit permissions from lower roles.

---

## 📊 Security Monitoring

### Logging

- Authentication failures logged
- Authorization failures logged
- Rate limit violations logged
- API errors logged with context

### Error Handling

- No sensitive data in error messages (production)
- Stack traces hidden in production
- Error codes for client handling
- Detailed errors in development

### Audit Trail

- User actions logged (future implementation)
- Admin actions logged
- Payment transactions logged
- Group order changes logged

---

## 🔒 Data Protection

### Sensitive Data

- Bank account numbers: Encrypted at rest
- Payment information: Not stored (handled by platforms)
- User passwords: Handled by Clerk (hashed)
- API keys: Stored in environment variables

### Database Security

- Prisma ORM prevents SQL injection
- Parameterized queries
- Input validation before database operations
- Connection pooling with limits

### Environment Variables

Required environment variables:
```
DATABASE_URL=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

Never commit secrets to version control.

---

## 🛠️ Security Best Practices

### Development

1. **Never log sensitive data**
   ```typescript
   // ❌ Bad
   console.log('Password:', password);
   
   // ✅ Good
   console.log('User authenticated');
   ```

2. **Validate all inputs**
   ```typescript
   // ❌ Bad
   const { url } = await request.json();
   
   // ✅ Good
   const validation = await validateRequest(request, schema);
   ```

3. **Use parameterized queries**
   ```typescript
   // ✅ Prisma handles this automatically
   await prisma.user.findUnique({ where: { id } });
   ```

4. **Check authorization**
   ```typescript
   // ❌ Bad
   if (userId) { /* allow */ }
   
   // ✅ Good
   return requireAdmin(async (auth) => { /* ... */ });
   ```

### Production

1. **Enable HTTPS only**
2. **Use secure cookies**
3. **Implement rate limiting**
4. **Monitor for suspicious activity**
5. **Regular security audits**
6. **Keep dependencies updated**

---

## 🚨 Security Incident Response

### If Security Breach Detected

1. **Immediate Actions**:
   - Revoke affected tokens
   - Disable compromised accounts
   - Review access logs
   - Notify affected users

2. **Investigation**:
   - Review logs for suspicious activity
   - Identify attack vector
   - Assess data exposure
   - Document incident

3. **Remediation**:
   - Patch vulnerability
   - Update security measures
   - Reset affected credentials
   - Monitor for recurrence

4. **Communication**:
   - Notify users if data exposed
   - Update security documentation
   - Share lessons learned

---

## 📝 Security Checklist

### API Security
- [x] Authentication required for protected routes
- [x] Role-based authorization implemented
- [x] Input validation on all endpoints
- [x] Rate limiting configured
- [x] Error handling standardized
- [x] CORS properly configured
- [x] Security headers set

### Frontend Security
- [x] Security headers configured
- [x] XSS protection enabled
- [x] CSRF protection (via Clerk)
- [x] Content Security Policy set
- [x] Secure cookie handling

### Data Protection
- [x] Sensitive data encrypted
- [x] Database queries parameterized
- [x] Environment variables secured
- [x] No secrets in code

### Monitoring
- [ ] Security logging implemented
- [ ] Audit trail for admin actions
- [ ] Error monitoring setup
- [ ] Rate limit monitoring

---

## 🔗 Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [Clerk Security](https://clerk.com/docs/security)
- [Prisma Security](https://www.prisma.io/docs/guides/security)

---

**Last Updated**: 2025-01-XX  
**Version**: 1.0.0

