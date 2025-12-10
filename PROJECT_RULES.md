# Project Rules & Development Guidelines

## 📋 Overview

This document defines the development rules, coding standards, and technical guidelines for the Web Order project. These rules ensure code quality, maintainability, and consistency across the codebase.

---

## 🎯 Core Principles

1. **Type Safety First**: Use TypeScript strictly, avoid `any` types
2. **Security by Default**: All API routes must be authenticated and validated
3. **Performance Matters**: Optimize for speed and user experience
4. **Documentation**: Code should be self-documenting, complex logic must be commented
5. **Consistency**: Follow established patterns and conventions

---

## 📁 Project Structure Rules

### Rule 1.1: Directory Organization

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (must have auth)
│   ├── components/        # Page-specific components
│   └── [routes]/          # Route pages
├── components/            # Shared/reusable components
├── lib/                   # Utilities, helpers, configs
│   ├── api/              # API utilities (auth, validation, etc.)
│   ├── prisma/           # Database schema and migrations
│   └── utils.ts          # General utilities
├── hooks/                 # Custom React hooks
├── store/                 # State management (Zustand)
└── types/                 # TypeScript type definitions
```

**Rules:**
- ✅ Components in `app/components/` are page-specific
- ✅ Shared components go in `components/`
- ✅ API utilities must be in `lib/api/`
- ✅ Database code only in `lib/prisma/`
- ❌ No circular dependencies
- ❌ No direct database access outside `lib/api/`

### Rule 1.2: File Naming Conventions

- **Components**: PascalCase, e.g., `GroupManager.tsx`, `OrderCraw.tsx`
- **Utilities**: camelCase, e.g., `auth.ts`, `validation.ts`
- **Types**: PascalCase, e.g., `User.ts`, `Order.ts`
- **Hooks**: camelCase with `use` prefix, e.g., `useAuth.ts`, `useDebounce.ts`
- **API Routes**: lowercase with hyphens, e.g., `route.ts`, `[groupId]/route.ts`

---

## 💻 Coding Standards

### Rule 2.1: TypeScript Rules

#### Required Practices
- ✅ Always use TypeScript types, avoid `any`
- ✅ Use interfaces for object shapes
- ✅ Use type unions for enums when possible
- ✅ Export types from `types/` directory
- ✅ Use `const` assertions for literal types

#### Forbidden Practices
- ❌ No `any` types (use `unknown` if needed)
- ❌ No `@ts-ignore` without explanation
- ❌ No implicit `any` in function parameters
- ❌ No `as` type assertions unless absolutely necessary

**Example:**
```typescript
// ✅ Good
interface User {
  id: string;
  email: string;
  role: 'admin' | 'customer';
}

// ❌ Bad
const user: any = { id: '1', email: 'test@test.com' };
```

### Rule 2.2: React Component Rules

#### Component Structure
1. Imports (external, then internal)
2. Types/Interfaces
3. Component definition
4. Exports

#### Required Practices
- ✅ Use functional components only
- ✅ Use `'use client'` directive for client components
- ✅ Extract complex logic to custom hooks
- ✅ Use proper prop types with interfaces
- ✅ Handle loading and error states

#### Forbidden Practices
- ❌ No class components
- ❌ No inline styles (use Tailwind CSS)
- ❌ No direct DOM manipulation
- ❌ No `console.log` in production code

**Example:**
```typescript
// ✅ Good
'use client';

import { useState } from 'react';
import { Button } from '@heroui/react';

interface Props {
  title: string;
  onSubmit: () => void;
}

export default function MyComponent({ title, onSubmit }: Props) {
  const [loading, setLoading] = useState(false);
  // Component logic
}

// ❌ Bad
export default function MyComponent(props: any) {
  console.log(props);
  return <div style={{ color: 'red' }}>{props.title}</div>;
}
```

### Rule 2.3: API Route Rules

#### Required Structure
```typescript
// 1. Imports
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api/authorization';
import { validateRequest } from '@/lib/api/validation';
import { withRateLimit } from '@/lib/api/rate-limit';
import { corsOptionsResponse } from '@/lib/api/cors';

// 2. OPTIONS handler for CORS
export async function OPTIONS(request: NextRequest) {
  return corsOptionsResponse(request);
}

// 3. Main handlers (GET, POST, etc.)
export async function GET(request: NextRequest) {
  // Handler logic
}
```

#### Required Practices
- ✅ All routes must have `OPTIONS` handler for CORS
- ✅ Protected routes must use `requireAuth` or role-based auth
- ✅ All inputs must be validated with Zod schemas
- ✅ Rate limiting on all public endpoints
- ✅ Proper error handling with try-catch
- ✅ Return proper HTTP status codes

#### Forbidden Practices
- ❌ No unprotected sensitive endpoints
- ❌ No unvalidated user input
- ❌ No direct database queries in routes (use Prisma client)
- ❌ No exposing sensitive data in error messages

**Example:**
```typescript
// ✅ Good
export async function POST(request: NextRequest) {
  try {
    const auth = await requireAuth();
    const validation = await validateRequest(request, schema);
    
    // Business logic
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// ❌ Bad
export async function POST(request: NextRequest) {
  const data = await request.json(); // No validation!
  // Direct DB access, no auth, no error handling
}
```

---

## 🔐 Security Rules

### Rule 3.1: Authentication & Authorization

#### Required Practices
- ✅ All API routes must check authentication
- ✅ Use `requireAuth()` for basic auth
- ✅ Use `requireAdmin()`, `requireModerator()`, `requireRole()` for RBAC
- ✅ Never trust client-side authentication
- ✅ Validate user permissions on every request

#### Forbidden Practices
- ❌ No client-side role checks for security
- ❌ No bypassing authentication
- ❌ No exposing user IDs or sensitive data
- ❌ No storing passwords in plain text

### Rule 3.2: Input Validation

#### Required Practices
- ✅ Validate all user inputs with Zod schemas
- ✅ Sanitize strings before database operations
- ✅ Validate URLs before processing
- ✅ Check data types and ranges
- ✅ Use `validateRequest()` for request bodies
- ✅ Use `validateQuery()` for query parameters

#### Validation Schema Location
- Define schemas in `src/lib/api/validation.ts`
- Reuse common schemas (idSchema, urlSchema, etc.)

**Example:**
```typescript
// ✅ Good
const createGroupSchema = z.object({
  restaurantId: schemas.id,
  name: z.string().min(1).max(100),
});

const validation = await validateRequest(request, createGroupSchema);

// ❌ Bad
const data = await request.json();
// No validation!
```

### Rule 3.3: Data Protection

#### Required Practices
- ✅ Encrypt sensitive data (bank accounts, passwords)
- ✅ Use environment variables for secrets
- ✅ Never commit `.env` files
- ✅ Use HTTPS in production
- ✅ Implement CORS properly
- ✅ Set security headers (done in `next.config.ts`)

#### Forbidden Practices
- ❌ No hardcoded secrets
- ❌ No exposing database credentials
- ❌ No logging sensitive data
- ❌ No storing credit card info

---

## 🗄️ Database Rules

### Rule 4.1: Prisma Usage

#### Required Practices
- ✅ Use Prisma Client for all database operations
- ✅ Define schema in `src/lib/prisma/schema.prisma`
- ✅ Use migrations for schema changes
- ✅ Use transactions for multi-step operations
- ✅ Handle database errors gracefully
- ✅ Use proper indexes for performance

#### Prisma Client Pattern
```typescript
// ✅ Good - Singleton pattern
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

#### Forbidden Practices
- ❌ No raw SQL queries (unless absolutely necessary)
- ❌ No direct database connections
- ❌ No schema changes without migrations
- ❌ No N+1 queries (use `include` or `select`)

### Rule 4.2: Schema Design Rules

#### Required Practices
- ✅ Use `@id @default(cuid())` for primary keys
- ✅ Use `@unique` for unique constraints
- ✅ Use `@index` for frequently queried fields
- ✅ Use `onDelete: Cascade` for dependent relations
- ✅ Use enums for fixed value sets
- ✅ Add `createdAt` and `updatedAt` to all models

#### Forbidden Practices
- ❌ No nullable fields without reason
- ❌ No missing foreign key constraints
- ❌ No missing cascade deletes
- ❌ No storing sensitive data unencrypted

---

## 🎨 UI/UX Rules

### Rule 5.1: Component Library

#### Required Practices
- ✅ Use HeroUI components (`@heroui/react`)
- ✅ Use Tailwind CSS for styling
- ✅ Follow design system patterns
- ✅ Ensure responsive design (mobile-first)
- ✅ Support dark/light themes
- ✅ Use semantic HTML

#### Forbidden Practices
- ❌ No custom CSS files (use Tailwind)
- ❌ No inline styles
- ❌ No hardcoded colors (use theme variables)
- ❌ No breaking responsive layouts

### Rule 5.2: User Experience

#### Required Practices
- ✅ Show loading states for async operations
- ✅ Display error messages clearly
- ✅ Provide feedback for user actions
- ✅ Use proper form validation
- ✅ Implement proper error boundaries
- ✅ Ensure accessibility (ARIA labels, keyboard navigation)

#### Forbidden Practices
- ❌ No silent failures
- ❌ No blocking UI without feedback
- ❌ No confusing error messages
- ❌ No inaccessible components

---

## 🧪 Testing Rules

### Rule 6.1: Testing Requirements

#### Required Practices
- ✅ Test API endpoints (unit tests)
- ✅ Test critical business logic
- ✅ Test authentication flows
- ✅ Test error handling
- ✅ Test edge cases

#### Forbidden Practices
- ❌ No untested critical paths
- ❌ No tests that depend on external services
- ❌ No flaky tests

---

## 📝 Documentation Rules

### Rule 7.1: Code Documentation

#### Required Practices
- ✅ Document complex functions with JSDoc
- ✅ Document API endpoints with Swagger/OpenAPI
- ✅ Add comments for non-obvious logic
- ✅ Keep README.md updated
- ✅ Document breaking changes

#### API Documentation
- All API routes must have Swagger annotations
- Use `@swagger` tags in route files
- Keep OpenAPI spec in `src/lib/api/swagger.ts`

**Example:**
```typescript
/**
 * @swagger
 * /api/groups:
 *   post:
 *     summary: Create a new group order
 *     tags: [Groups]
 *     security:
 *       - bearerAuth: []
 */
```

### Rule 7.2: Commit Messages

#### Format
```
type(scope): subject

body (optional)

footer (optional)
```

#### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example:**
```
feat(groups): add group creation API endpoint

- Implement POST /api/groups
- Add validation for restaurant selection
- Add rate limiting

Closes #123
```

---

## 🚀 Deployment Rules

### Rule 8.1: Environment Variables

#### Required Variables
```env
# Database
DATABASE_URL=postgresql://...

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Environment
NODE_ENV=production
```

#### Forbidden Practices
- ❌ No committing `.env` files
- ❌ No hardcoded environment values
- ❌ No exposing secrets in code

### Rule 8.2: Build & Deployment

#### Required Practices
- ✅ All builds must pass TypeScript checks
- ✅ All builds must pass ESLint
- ✅ No build warnings (fix or suppress with reason)
- ✅ Test production build locally before deploy
- ✅ Use proper deployment platform (Vercel recommended)

#### Build Checklist
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] All environment variables set
- [ ] Database migrations applied
- [ ] Prisma Client generated

---

## 🔄 Git Workflow Rules

### Rule 9.1: Branch Strategy

#### Branch Naming
- `main`: Production-ready code
- `develop`: Development branch
- `feature/`: New features
- `fix/`: Bug fixes
- `hotfix/`: Urgent production fixes

#### Required Practices
- ✅ Create feature branches from `develop`
- ✅ Keep branches up to date
- ✅ Use descriptive branch names
- ✅ Delete merged branches

### Rule 9.2: Pull Requests

#### Required Practices
- ✅ Descriptive PR title
- ✅ Clear description of changes
- ✅ Link to related issues
- ✅ Request review before merging
- ✅ Ensure CI/CD passes
- ✅ Update documentation if needed

---

## ⚡ Performance Rules

### Rule 10.1: Optimization

#### Required Practices
- ✅ Use Next.js Image component for images
- ✅ Implement proper caching strategies
- ✅ Use React.memo for expensive components
- ✅ Lazy load heavy components
- ✅ Optimize bundle size
- ✅ Use proper database indexes

#### Forbidden Practices
- ❌ No unnecessary re-renders
- ❌ No large bundle sizes
- ❌ No unoptimized images
- ❌ No blocking operations in render

---

## 🐛 Error Handling Rules

### Rule 11.1: Error Management

#### Required Practices
- ✅ Use try-catch for async operations
- ✅ Return proper HTTP status codes
- ✅ Log errors server-side
- ✅ Show user-friendly error messages
- ✅ Handle edge cases gracefully

#### Error Response Format
```typescript
{
  error: string;        // User-friendly message
  code?: string;        // Error code for debugging
  details?: unknown;    // Additional details (dev only)
}
```

#### Forbidden Practices
- ❌ No exposing stack traces to users
- ❌ No silent error swallowing
- ❌ No generic "Error occurred" messages

---

## 📦 Dependency Management

### Rule 12.1: Package Management

#### Required Practices
- ✅ Use `npm` (not yarn or pnpm) for consistency
- ✅ Lock dependencies with `package-lock.json`
- ✅ Keep dependencies up to date
- ✅ Review security vulnerabilities
- ✅ Document why each dependency is needed

#### Forbidden Practices
- ❌ No unnecessary dependencies
- ❌ No duplicate packages
- ❌ No outdated security-vulnerable packages

---

## 🔍 Code Review Rules

### Rule 13.1: Review Checklist

#### Before Submitting PR
- [ ] Code follows project structure
- [ ] TypeScript types are correct
- [ ] No `any` types
- [ ] All API routes have auth
- [ ] Input validation implemented
- [ ] Error handling in place
- [ ] Tests pass
- [ ] No console.logs
- [ ] Documentation updated
- [ ] Build succeeds

---

## 📊 Monitoring & Logging

### Rule 14.1: Logging

#### Required Practices
- ✅ Log errors with context
- ✅ Log important events (order placed, payment received)
- ✅ Use structured logging
- ✅ Don't log sensitive data

#### Forbidden Practices
- ❌ No console.log in production
- ❌ No logging passwords or tokens
- ❌ No excessive logging

---

## 🎯 Priority Rules

### High Priority (Must Follow)
1. Security rules (authentication, validation)
2. Type safety (no `any` types)
3. Error handling
4. API route structure

### Medium Priority (Should Follow)
1. Code organization
2. Documentation
3. Performance optimization

### Low Priority (Nice to Have)
1. Code style consistency
2. Advanced optimizations
3. Comprehensive testing

---

## 📋 Quick Reference

### Common Patterns

#### API Route Template
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api/authorization';
import { validateRequest } from '@/lib/api/validation';
import { corsOptionsResponse } from '@/lib/api/cors';

export async function OPTIONS(request: NextRequest) {
  return corsOptionsResponse(request);
}

export async function POST(request: NextRequest) {
  try {
    const auth = await requireAuth();
    const validation = await validateRequest(request, schema);
    
    // Business logic here
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

#### Component Template
```typescript
'use client';

import { useState } from 'react';
import { Button } from '@heroui/react';

interface Props {
  title: string;
  onSubmit: () => void;
}

export default function MyComponent({ title, onSubmit }: Props) {
  const [loading, setLoading] = useState(false);
  
  // Component logic
  
  return (
    <div>
      <h1>{title}</h1>
      <Button onClick={onSubmit} isLoading={loading}>
        Submit
      </Button>
    </div>
  );
}
```

---

## 🔄 Rule Updates

### Version Control
- **Version**: 1.0
- **Last Updated**: 2025-01-XX
- **Review Frequency**: Quarterly

### Change Process
1. Propose rule change in issue/PR
2. Discuss with team
3. Update this document
4. Communicate changes to team

---

## 📞 Questions?

If you're unsure about a rule or need clarification:
1. Check existing code for patterns
2. Review related documentation
3. Ask in team discussion
4. Update this document if needed

---

**Remember**: Rules exist to help, not hinder. If a rule doesn't make sense for your use case, discuss it with the team before breaking it.


