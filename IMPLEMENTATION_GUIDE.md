# Implementation Guide - Group Ordering with Payment Tracking

## 📋 Overview

This guide outlines the implementation steps to add group ordering functionality with Grab/Shopee Food integration and bank transfer payment tracking to the existing Web Order application.

---

## 🗄️ Database Changes

### Step 1: Update Database Schema

The schema has been updated with the following new models:

1. **GroupOrder** - Manages group orders
2. **GroupMember** - Tracks group members and their carts
3. **BankAccount** - Stores user bank account information
4. **PaymentTransfer** - Tracks bank transfers between members

### Step 2: Run Migration

```bash
# Generate Prisma client with new schema
npx prisma generate

# Create and apply migration
npx prisma migrate dev --name add_group_ordering

# Or push schema directly (development)
npm run db
```

### Step 3: Update Existing Data

- Existing `Restaurant` records need `platform` field set to `GRAB`
- Existing `grabLink` should remain, new `shopeeLink` field added

---

## 🔧 Backend Implementation

### API Routes to Create

#### 1. Group Management APIs

**`/api/groups`**
- `POST /api/groups` - Create new group
- `GET /api/groups/:groupId` - Get group details
- `PATCH /api/groups/:groupId` - Update group (lock, cancel, etc.)
- `DELETE /api/groups/:groupId` - Delete group

**`/api/groups/:groupId/members`**
- `POST /api/groups/:groupId/members` - Join group
- `DELETE /api/groups/:groupId/members/:userId` - Leave/remove member
- `GET /api/groups/:groupId/members` - List all members

**`/api/groups/:groupId/cart`**
- `GET /api/groups/:groupId/cart` - Get group cart (all members)
- `POST /api/groups/:groupId/cart` - Add item to personal cart
- `PATCH /api/groups/:groupId/cart/:itemId` - Update cart item
- `DELETE /api/groups/:groupId/cart/:itemId` - Remove cart item

#### 2. Order Management APIs

**`/api/groups/:groupId/orders`**
- `POST /api/groups/:groupId/orders/place` - Place order on Grab/Shopee
- `PATCH /api/groups/:groupId/orders/status` - Update order status
- `GET /api/groups/:groupId/orders` - Get order details

#### 3. Payment APIs

**`/api/bank-accounts`**
- `GET /api/bank-accounts` - Get user's bank accounts
- `POST /api/bank-accounts` - Add bank account
- `PATCH /api/bank-accounts/:id` - Update bank account
- `DELETE /api/bank-accounts/:id` - Delete bank account

**`/api/groups/:groupId/payments`**
- `GET /api/groups/:groupId/payments` - Get payment status for all members
- `POST /api/groups/:groupId/payments/transfer` - Record bank transfer
- `PATCH /api/groups/:groupId/payments/:transferId/verify` - Verify payment receipt
- `GET /api/groups/:groupId/payments/summary` - Get payment summary

#### 4. Restaurant APIs (Update)

**`/api/restaurants`** (Update existing)
- Support both `grabLink` and `shopeeLink`
- Detect platform from URL
- Update crawler to support Shopee Food

---

## 🎨 Frontend Implementation

### Components to Create/Update

#### 1. Group Management Components

**`/src/app/components/GroupManager/`** (Update existing)
- [ ] Add database integration (replace localStorage)
- [ ] Add member list display
- [ ] Add group status indicator
- [ ] Add lock/unlock functionality

**`/src/app/components/GroupCart/`** (New)
- Display all members' carts
- Show individual totals and group total
- Allow Group Owner to lock group
- Show order summary

**`/src/app/components/GroupMemberList/`** (New)
- List all group members
- Show member roles (Owner/Member)
- Allow Owner to remove members
- Show member cart totals

#### 2. Payment Components

**`/src/app/components/BankAccountManager/`** (New)
- Add/edit/delete bank accounts
- Set default account
- Show account details (masked for privacy)

**`/src/app/components/PaymentTracker/`** (New)
- Show payment status per member
- Display payer's bank account details
- Allow members to record transfers
- Allow payer to verify payments
- Show payment deadline

**`/src/app/components/PaymentSummary/`** (New)
- Show total amounts
- Show per-member breakdown
- Show delivery/service fee split
- Show payment status

#### 3. Order Components

**`/src/app/components/OrderPlacer/`** (New)
- Group Owner places order
- Redirect to Grab/Shopee
- Enter platform order ID
- Track order status

**`/src/app/components/OrderStatus/`** (New)
- Display current order status
- Show order timeline
- Update status manually (if needed)

#### 4. Restaurant Components (Update)

**`/src/app/components/OrderCraw/`** (Update existing)
- Support Shopee Food URLs
- Detect platform automatically
- Show platform selector

---

## 🔄 State Management Updates

### Update Zustand Store

**`/src/store/store.ts`** - Add new state:

```typescript
interface Store {
  // Existing state...
  
  // Group ordering
  currentGroup: GroupOrder | null;
  groupMembers: GroupMember[];
  groupCart: Record<string, CartItem[]>; // userId -> cart items
  
  // Payment tracking
  bankAccounts: BankAccount[];
  paymentTransfers: PaymentTransfer[];
  
  // Actions
  setCurrentGroup: (group: GroupOrder) => void;
  addGroupMember: (member: GroupMember) => void;
  updateGroupCart: (userId: string, items: CartItem[]) => void;
  lockGroup: () => void;
  placeGroupOrder: (platformOrderId: string) => void;
  recordPaymentTransfer: (transfer: PaymentTransfer) => void;
  verifyPayment: (transferId: string) => void;
}
```

---

## 🔐 Authentication & Authorization

### Update Middleware

**`/src/middleware.ts`** - Add group route protection:
- Group members can access their group pages
- Group Owner has additional permissions
- Admin can access all groups

### Update useAuth Hook

**`/src/hooks/useAuth.ts`** - Add group-specific permissions:
- `isGroupOwner(groupId: string)`
- `isGroupMember(groupId: string)`
- `canLockGroup(groupId: string)`
- `canPlaceOrder(groupId: string)`

---

## 🌐 Platform Integration

### Grab Food Integration

**Update `/src/lib/craw/grab.ts`**:
- Already implemented
- Keep as is

### Shopee Food Integration

**Create `/src/lib/craw/shopee.ts`**:
- Similar structure to Grab crawler
- Parse Shopee Food HTML structure
- Extract menu items, prices, images

**Update `/src/app/api/craw/route.ts`**:
- Detect platform from URL
- Call appropriate crawler (Grab or Shopee)
- Save with correct platform field

---

## 📱 Pages to Create/Update

### New Pages

1. **`/src/app/groups/[groupId]/page.tsx`**
   - Group dashboard
   - Show group info, members, cart
   - Order placement
   - Payment tracking

2. **`/src/app/groups/[groupId]/payment/page.tsx`**
   - Payment management page
   - Bank account details
   - Transfer recording
   - Payment verification

3. **`/src/app/bank-accounts/page.tsx`**
   - Manage bank accounts
   - Add/edit/delete accounts

### Updated Pages

1. **`/src/app/orders/page.tsx`**
   - Support group orders
   - Show group context if in group
   - Link to group payment page

2. **`/src/app/page.tsx`**
   - Add platform selector (Grab/Shopee)
   - Update URL input placeholder

---

## 🧪 Testing Checklist

### Unit Tests
- [ ] Group creation logic
- [ ] Member joining/leaving
- [ ] Cart aggregation
- [ ] Payment calculation (with fees)
- [ ] Payment transfer verification

### Integration Tests
- [ ] Group order flow (create → join → order → pay)
- [ ] Payment tracking flow
- [ ] Platform detection (Grab vs Shopee)
- [ ] Order status updates

### E2E Tests
- [ ] Complete group order scenario
- [ ] Payment verification scenario
- [ ] Dispute resolution scenario

---

## 📊 Database Queries to Optimize

### Frequently Used Queries

1. **Get Group with Members and Carts**
```prisma
groupOrder.findUnique({
  where: { groupId },
  include: {
    members: {
      include: { user: true }
    },
    restaurant: true,
    payments: {
      include: {
        fromUser: true,
        toUser: true
      }
    }
  }
})
```

2. **Get Payment Status Summary**
```prisma
paymentTransfer.groupBy({
  by: ['status'],
  where: { groupOrderId },
  _count: true,
  _sum: { amount: true }
})
```

3. **Get User's Active Groups**
```prisma
groupMember.findMany({
  where: {
    userId,
    groupOrder: {
      status: { in: ['ACTIVE', 'LOCKED', 'PLACED'] }
    }
  },
  include: { groupOrder: true }
})
```

---

## 🚀 Deployment Steps

### 1. Database Migration
```bash
# Production migration
npx prisma migrate deploy
```

### 2. Environment Variables
Add to `.env`:
```
# Group ordering settings
MAX_GROUP_MEMBERS=20
DEFAULT_PAYMENT_DEADLINE_HOURS=24
MAX_PAYMENT_DEADLINE_DAYS=7
```

### 3. Feature Flags
Consider adding feature flags for:
- Group ordering (enable/disable)
- Shopee Food support (enable/disable)
- Payment tracking (enable/disable)

---

## 📝 Documentation Updates

### Update Existing Docs

1. **README.md**
   - Add group ordering features
   - Add payment tracking features
   - Update tech stack if needed

2. **PROJECT_GUIDE.md**
   - Add group ordering architecture
   - Add payment flow diagrams
   - Update API documentation

### New Documentation

1. **API_DOCUMENTATION.md**
   - Document all new API endpoints
   - Include request/response examples
   - Include error codes

2. **PAYMENT_GUIDE.md**
   - User guide for payment tracking
   - How to add bank accounts
   - How to verify payments

---

## 🔄 Migration Strategy

### Phase 1: Database & Backend (Week 1)
- [ ] Update Prisma schema
- [ ] Run migrations
- [ ] Create API routes
- [ ] Update crawler for Shopee

### Phase 2: Frontend Components (Week 2)
- [ ] Create group management components
- [ ] Create payment components
- [ ] Update existing components
- [ ] Update state management

### Phase 3: Integration & Testing (Week 3)
- [ ] Integrate all components
- [ ] Test complete flows
- [ ] Fix bugs
- [ ] Performance optimization

### Phase 4: Documentation & Deployment (Week 4)
- [ ] Update documentation
- [ ] User testing
- [ ] Deploy to staging
- [ ] Deploy to production

---

## ⚠️ Important Considerations

### Security
- Encrypt bank account details
- Validate payment transfers
- Rate limit API endpoints
- Sanitize user inputs

### Performance
- Cache restaurant data
- Optimize group cart queries
- Use database indexes
- Implement pagination for large groups

### User Experience
- Clear payment instructions
- Real-time updates (WebSockets or polling)
- Mobile-responsive design
- Clear error messages

### Legal/Compliance
- Privacy policy for bank account data
- Terms of service for group orders
- Payment dispute resolution process
- Data retention policies

---

## 🎯 Success Metrics

### Key Performance Indicators
- Number of groups created per day
- Average group size
- Payment verification rate
- Time to payment completion
- User satisfaction score

### Monitoring
- Group order completion rate
- Payment dispute rate
- API response times
- Error rates
- User engagement metrics

---

**Last Updated**: 2025-01-XX  
**Status**: Planning Phase  
**Next Steps**: Begin Phase 1 - Database & Backend Implementation

