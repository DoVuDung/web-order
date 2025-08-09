# Web Order - Food Delivery Application

A modern, full-stack food ordering application built with Next.js, featuring group ordering capabilities, real-time updates, and comprehensive admin management.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database
- **Clerk** account for authentication

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DoVuDung/web-order.git
   cd web-order
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables:**
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/weborder"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   ```

5. **Setup database:**
   ```bash
   npm run db
   ```

6. **Start development server:**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see the application.

## 🏗️ Architecture Overview

### Technology Stack

#### Frontend
- **Next.js 15.4.6** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling framework
- **HeroUI 2.8.2** - Component library
- **Framer Motion** - Animations
- **next-themes** - Theme management

#### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database

#### Authentication & Authorization
- **Clerk** - Authentication service
- **Role-based access control** (Admin, Moderator, User)

#### State Management
- **Zustand** - Global state management
- **React Context** - Theme and UI state

#### Additional Tools
- **Cheerio** - Web scraping for restaurant data
- **Axios** - HTTP client
- **React Icons** - Icon library

### Application Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── components/        # Reusable components
│   ├── my-order/          # User order history
│   ├── orders/            # Order management
│   └── about/             # About page
├── components/            # Shared components
│   ├── Navbar/           # Navigation component
│   ├── OrderCraw/        # Web scraping component
│   ├── GroupManager/     # Group ordering management
│   └── withAuth.tsx      # HOC for authentication
├── hooks/                 # Custom React hooks
│   ├── useAuth.ts        # Authentication hook
│   └── useDebounce.ts    # Debounce utility
├── lib/                   # Utility functions
│   ├── craw/             # Web scraping utilities
│   ├── prisma/           # Database schema
│   └── utils.ts          # Helper functions
└── store/                 # State management
    └── store.ts          # Zustand store
```

## 💾 Database Design

### Schema Overview

#### Core Entities

**User Table**
```sql
- id: String (CUID)
- name: String
- email: String (unique)
- password: String
- role: Role (ADMIN, MODERATOR, CUSTOMER)
- orders: Order[]
- createdAt: DateTime
- updatedAt: DateTime
```

**Restaurant Table**
```sql
- id: String (CUID)
- name: String
- description: String?
- address: String
- phone: String?
- email: String?
- website: String?
- imageUrl: String?
- isActive: Boolean
- createdAt: DateTime
- updatedAt: DateTime
- menuItems: MenuItem[]
- orders: Order[]
```

**MenuItem Table**
```sql
- id: String (CUID)
- name: String
- description: String?
- price: Decimal
- category: String?
- imageUrl: String?
- isAvailable: Boolean
- restaurantId: String
- restaurant: Restaurant
- orderItems: OrderItem[]
- createdAt: DateTime
- updatedAt: DateTime
```

**Order System**
```sql
Order:
- id: String (CUID)
- userId: String
- restaurantId: String
- status: OrderStatus
- totalAmount: Decimal
- orderItems: OrderItem[]
- createdAt: DateTime
- updatedAt: DateTime

OrderItem:
- id: String (CUID)
- orderId: String
- menuItemId: String
- quantity: Int
- price: Decimal
- order: Order
- menuItem: MenuItem
```

### Database Commands

```bash
# Push schema changes to database
npm run db

# Generate Prisma client
npx prisma generate

# Reset database (development only)
npx prisma migrate reset

# View database in Prisma Studio
npx prisma studio
```

## 🔧 Technical Features

### Authentication & Authorization

#### Role-Based Access Control
- **Admin**: Full system access, user management, analytics
- **Moderator**: Order management, limited admin features
- **User**: Basic ordering, profile management

#### Implementation
```typescript
// Authentication Hook
const { user, isAdmin, hasPermission } = useAuth('admin');

// HOC Protection
export default withAuth(AdminComponent, 'admin');

// Route Protection (middleware)
if (isAdminRoute(req)) {
  await auth.protect();
}
```

### Group Ordering System

#### Features
- Create/join group orders
- Shared cart management
- Real-time collaboration
- Group-specific restaurant data

#### State Management
```typescript
interface GroupState {
  currentGroupId: string | null;
  groupCrawledData: Record<string, CrawledRestaurant>;
  setCurrentGroupId: (id: string) => void;
  setGroupCrawledData: (groupId: string, data: CrawledRestaurant) => void;
}
```

### Web Scraping Integration

#### Restaurant Data Extraction
- **Cheerio-based** HTML parsing
- **Dynamic content** handling
- **Error resilience** with fallbacks
- **Rate limiting** for respectful scraping

#### Implementation
```typescript
// Crawling service
const crawlRestaurant = async (url: string) => {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  return extractRestaurantData($);
};
```

### Performance Optimizations

#### Build Configuration
```typescript
// next.config.ts
const nextConfig = {
  productionBrowserSourceMaps: true,
  experimental: {
    optimizePackageImports: ['@heroui/react', '@clerk/nextjs'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
};
```

#### Bundle Analysis
- **Code splitting**: Automatic route-based splitting
- **Dynamic imports**: Lazy loading for large components
- **Tree shaking**: Unused code elimination
- **Source maps**: Production debugging support

### Security Implementation

#### Headers & Protection
```typescript
// Security headers
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
```

#### Authentication Security
- **JWT tokens** via Clerk
- **CSRF protection** built-in
- **Rate limiting** on API routes
- **Input validation** with TypeScript

## 🎨 UI/UX Design

### Design System
- **HeroUI Components**: Consistent design language
- **Dark/Light Themes**: Automatic system preference detection
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliance

### Color Scheme
```css
/* Light Mode */
--background: 255 255 255;
--foreground: 0 0 0;

/* Dark Mode */
--background: 0 0 0;
--foreground: 255 255 255;
```

### Responsive Breakpoints
```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🔄 Development Workflow

### Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db          # Push database schema

# Database
npx prisma studio    # Database GUI
npx prisma generate  # Generate client
npx prisma migrate   # Run migrations
```

### Code Quality

#### ESLint Configuration
- **Next.js Core Web Vitals**
- **TypeScript support**
- **Custom rules** for consistency

#### TypeScript Setup
- **Strict mode** enabled
- **Path aliases** configured
- **Type generation** from Prisma

### Git Workflow

```bash
# Feature development
git checkout -b feature/new-feature
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# Create Pull Request
# Code review and merge
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect repository** to Vercel
2. **Configure environment variables**
3. **Set build command**: `npm run build`
4. **Deploy automatically** on push

### Environment Variables
```env
# Production Database
DATABASE_URL=postgresql://...

# Clerk Production Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...

# Optional: Custom Domain
NEXT_PUBLIC_CLERK_DOMAIN=your-domain.com
```

### Performance Monitoring

#### Metrics to Track
- **Core Web Vitals**: LCP, FID, CLS
- **Bundle Size**: First Load JS
- **API Response Times**: Database queries
- **Error Rates**: Client and server errors

## 📊 Analytics & Monitoring

### Built-in Analytics
- **User engagement** tracking
- **Order completion** rates
- **Performance metrics**
- **Error monitoring**

### Recommended Tools
- **Vercel Analytics**: Performance insights
- **Sentry**: Error tracking
- **PostHog**: User analytics
- **Prisma Pulse**: Database monitoring

## 🤝 Contributing

### Development Setup

1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Run linting and type checking
5. Submit pull request

### Code Standards

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for formatting
- **Conventional Commits** for git messages

### Testing Guidelines

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Type checking
npm run type-check
```

## 📝 API Documentation

### Authentication Endpoints
```
POST /api/auth/sign-in    # User login
POST /api/auth/sign-up    # User registration
POST /api/auth/sign-out   # User logout
```

### Order Management
```
GET    /api/orders        # Get user orders
POST   /api/orders        # Create new order
PATCH  /api/orders/:id    # Update order
DELETE /api/orders/:id    # Cancel order
```

### Admin Endpoints
```
GET    /api/admin/users   # Get all users
PATCH  /api/admin/users/:id # Update user role
DELETE /api/admin/users/:id # Delete user
```

## 🐛 Troubleshooting

### Common Issues

#### Database Connection
```bash
# Check database connection
npx prisma db pull

# Reset database
npx prisma migrate reset
```

#### Authentication Issues
```bash
# Verify Clerk configuration
echo $NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
echo $CLERK_SECRET_KEY
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **Authentication**: [Clerk Docs](https://clerk.com/docs)
- **Database**: [Prisma Docs](https://prisma.io/docs)
- **UI Components**: [HeroUI Docs](https://heroui.com)

---

**Created by**: Andy Do  
**License**: MIT  
**Version**: 0.1.0
