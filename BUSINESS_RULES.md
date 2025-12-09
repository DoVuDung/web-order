# Business Rules - Group Ordering System

## 📋 Overview

This document defines the business rules for a group ordering platform that supports:
- **Grab Food** and **Shopee Food** integration
- Collaborative group ordering
- Direct payment to Grab/Shopee platforms
- Bank transfer tracking to identify who paid

---

## 🎯 Core Principles

1. **Group Collaboration**: Multiple users can join a group and order together
2. **Platform Flexibility**: Support both Grab Food and Shopee Food
3. **Payment Transparency**: Track all payments via bank transfers
4. **Order Ownership**: Each user owns their individual items within a group order
5. **Payment Verification**: System tracks who transferred money to verify payments

---

## 👥 Group Ordering Rules

### Group Creation & Management

#### Rule 1.1: Group Creation
- **Who**: Any authenticated user can create a group
- **When**: Before starting an order
- **How**: 
  - User clicks "Create Group"
  - System generates unique Group ID
  - Creator becomes Group Owner
  - Group status: `ACTIVE`
- **Limits**:
  - Maximum 20 members per group
  - Group expires after 24 hours of inactivity
  - One active group per user at a time

#### Rule 1.2: Group Joining
- **Who**: Any authenticated user
- **When**: Before or during order placement
- **How**:
  - User enters Group ID
  - System validates Group ID exists and is active
  - User is added as Group Member
  - User can see all group members' carts
- **Restrictions**:
  - Cannot join if group is `LOCKED` (order placed)
  - Cannot join if group is `COMPLETED`
  - Cannot join if group is full (20 members)

#### Rule 1.3: Group Roles
- **Group Owner**: 
  - Created the group
  - Can lock/unlock group for ordering
  - Can remove members (before order placement)
  - Can cancel group order (if no payments made)
- **Group Member**:
  - Can add items to personal cart
  - Can view all group members' carts
  - Can modify own items before group order is locked
  - Cannot remove other members

#### Rule 1.4: Group States
```
ACTIVE → LOCKED → PROCESSING → COMPLETED
   ↓         ↓
CANCELLED  CANCELLED
```

- **ACTIVE**: Group is open, members can join and modify carts
- **LOCKED**: Group owner locked the order, no more changes allowed
- **PROCESSING**: Order placed on Grab/Shopee, payment in progress
- **COMPLETED**: Order delivered and all payments verified
- **CANCELLED**: Group order cancelled (before payment or by owner)

---

## 🍔 Restaurant & Platform Rules

### Rule 2.1: Platform Support
- **Supported Platforms**: 
  - Grab Food (grab.com)
  - Shopee Food (shopee.vn/food)
- **Restaurant Selection**:
  - One restaurant per group order
  - All group members order from the same restaurant
  - Restaurant is selected by Group Owner
  - Restaurant link must be valid Grab or Shopee Food URL

### Rule 2.2: Restaurant Data
- **Crawling Rules**:
  - System crawls restaurant menu from provided URL
  - Menu data cached for 1 hour
  - If restaurant already exists in DB, use cached data
  - If new restaurant, crawl and save to database
- **Menu Updates**:
  - Prices may change, use price at time of order
  - Products may become unavailable
  - System shows real-time availability when possible

### Rule 2.3: Product Availability
- **Stock Check**: 
  - If product stock = 0, mark as unavailable
  - Users cannot add unavailable items to cart
  - System warns if product becomes unavailable during checkout
- **Price Changes**:
  - Price locked when added to cart
  - If price changes before order, show warning
  - Final price is price at time of order placement

---

## 🛒 Cart & Order Rules

### Rule 3.1: Personal Cart
- **Cart Ownership**: Each user has their own cart within a group
- **Cart Visibility**: 
  - User can see own cart
  - User can see all group members' carts (read-only)
  - Cart totals shown per user and per group
- **Cart Operations**:
  - Add items: User can add any available product
  - Remove items: User can remove own items only
  - Update quantity: User can modify own item quantities
  - Clear cart: User can clear own cart (before order locked)

### Rule 3.2: Group Cart Aggregation
- **Total Calculation**:
  - Group Total = Sum of all individual cart totals
  - Each user sees: "Your Total" and "Group Total"
  - Delivery fee split equally among all members
  - Service fee split equally among all members
- **Order Summary**:
  - Shows breakdown: Items + Delivery + Service + Tax
  - Shows per-user breakdown
  - Shows who ordered what

### Rule 3.3: Order Placement
- **Who Can Place Order**: Group Owner only
- **When**: After group is locked
- **Process**:
  1. Group Owner reviews group cart
  2. Group Owner locks the group (no more changes)
  3. System calculates final totals
  4. Group Owner places order on Grab/Shopee
  5. System tracks order status
- **Order Confirmation**:
  - Order ID from Grab/Shopee stored
  - Order status synced from platform
  - All group members notified

---

## 💰 Payment Rules

### Rule 4.1: Payment Methods

#### Direct Payment to Platform
- **Grab Food**: 
  - Payment goes directly to Grab
  - Methods: Credit Card, GrabPay, Cash on Delivery
  - System tracks Grab order ID
- **Shopee Food**:
  - Payment goes directly to Shopee
  - Methods: Credit Card, ShopeePay, Bank Transfer, Cash on Delivery
  - System tracks Shopee order ID

#### Bank Transfer Tracking
- **Purpose**: Track who paid for the group order
- **How It Works**:
  1. Group Owner places order on Grab/Shopee
  2. Group Owner pays for entire order (or one member pays)
  3. Other members transfer money to the payer's bank account
  4. Payer marks transfers as received in system
  5. System tracks payment status per user

### Rule 4.2: Payment Responsibility

#### Rule 4.2.1: Initial Payment
- **Who Pays First**: 
  - Group Owner pays to Grab/Shopee by default
  - Can be delegated to another member (with consent)
  - Only one person pays to platform initially
- **Payment Amount**: 
  - Full order total (all members' items + fees)
  - Payer pays entire amount upfront

#### Rule 4.2.2: Reimbursement
- **Who Gets Reimbursed**: The person who paid to Grab/Shopee
- **Reimbursement Amount**: 
  - Each member pays their individual total
  - Formula: `Member Payment = (Member Items Total) + (Delivery Fee / Group Size) + (Service Fee / Group Size)`
- **Payment Tracking**:
  - Members transfer money to payer's bank account
  - Payer confirms receipt in system
  - System marks member as "PAID" when confirmed

### Rule 4.3: Bank Account Management

#### Rule 4.3.1: Bank Account Registration
- **Who**: All users must register at least one bank account
- **Required Fields**:
  - Bank Name (e.g., Vietcombank, Techcombank)
  - Account Number
  - Account Holder Name
  - Can add multiple accounts
- **Privacy**: 
  - Bank account visible to group members when payment needed
  - Hidden from public view
  - Only shown when user needs to receive payment

#### Rule 4.3.2: Payment Transfer Process
1. **Order Placed**: Group Owner places order, pays to Grab/Shopee
2. **Payment Request**: System calculates each member's share
3. **Transfer Instructions**: 
   - System shows payer's bank account details
   - Members transfer their share
   - Members enter transfer reference/transaction ID
4. **Payment Confirmation**:
   - Payer reviews transfers in system
   - Payer marks each transfer as "RECEIVED" or "NOT RECEIVED"
   - System updates payment status
5. **Payment Verification**:
   - Payer can upload screenshot of bank statement
   - System stores transfer reference for audit
   - Disputes handled manually by admin

### Rule 4.4: Payment Status

#### Payment States
```
PENDING → TRANSFERRED → VERIFIED → COMPLETED
    ↓
FAILED
```

- **PENDING**: Member hasn't transferred money yet
- **TRANSFERRED**: Member claims to have transferred (entered transaction ID)
- **VERIFIED**: Payer confirmed receipt of transfer
- **COMPLETED**: All members paid, payment fully verified
- **FAILED**: Transfer failed or disputed

#### Rule 4.4.1: Payment Deadlines
- **Default Deadline**: 24 hours after order delivery
- **Extension**: Group Owner can extend deadline (max 7 days)
- **Overdue**: 
  - System sends reminders
  - After deadline, member marked as "OVERDUE"
  - Admin can intervene for disputes

### Rule 4.5: Payment Disputes

#### Rule 4.5.1: Dispute Scenarios
- **Member claims paid but payer says not received**:
  - Member provides transaction ID/screenshot
  - Payer checks bank statement
  - If verified, mark as paid
  - If not found, mark as failed, member must retry
- **Wrong amount transferred**:
  - If overpaid: Payer refunds excess or applies to next order
  - If underpaid: Member transfers remaining amount
- **Payer not confirming**:
  - After 48 hours, admin can verify manually
  - Admin can mark as verified with evidence

#### Rule 4.5.2: Dispute Resolution
- **First Level**: Payer and member resolve directly
- **Second Level**: Group Owner mediates
- **Third Level**: Admin intervention
- **Evidence Required**: 
  - Bank transfer screenshots
  - Transaction IDs
  - Bank statements (last 4 digits of account visible)

---

## 🔐 User Roles & Permissions

### Rule 5.1: User Roles

#### Customer (Default)
- Create groups
- Join groups
- Add items to cart
- Place individual orders
- View own order history
- Manage own bank accounts
- Confirm/deny payment receipts

#### Group Owner
- All Customer permissions
- Lock/unlock group orders
- Remove members (before order locked)
- Place order on Grab/Shopee
- Cancel group order (before payment)
- Extend payment deadlines
- Verify member payments

#### Admin
- All permissions
- View all groups and orders
- Resolve payment disputes
- Manage users
- View system analytics
- Manually verify payments
- Cancel any order

### Rule 5.2: Access Control
- **Public Pages**: Home, About, Sign In, Sign Up
- **Authenticated Pages**: Orders, My Orders, Groups, Profile
- **Group Pages**: Only accessible to group members
- **Admin Pages**: Only accessible to admins

---

## 📊 Order Status Flow

### Rule 6.1: Order Lifecycle

```
DRAFT → ACTIVE → LOCKED → PLACED → CONFIRMED → PREPARING → 
DELIVERING → DELIVERED → PAYMENT_PENDING → PAYMENT_VERIFIED → COMPLETED
```

#### Status Definitions

1. **DRAFT**: Group created, no items added yet
2. **ACTIVE**: Group active, members adding items
3. **LOCKED**: Group owner locked order, no more changes
4. **PLACED**: Order placed on Grab/Shopee, waiting confirmation
5. **CONFIRMED**: Grab/Shopee confirmed the order
6. **PREPARING**: Restaurant preparing food
7. **DELIVERING**: Food out for delivery
8. **DELIVERED**: Food delivered to destination
9. **PAYMENT_PENDING**: Waiting for members to transfer money
10. **PAYMENT_VERIFIED**: All payments received and verified
11. **COMPLETED**: Order fully completed

#### Rule 6.2: Status Transitions
- **Cannot go backwards** (except CANCELLED)
- **CANCELLED** can happen at any stage before DELIVERED
- **After DELIVERED**, order cannot be cancelled
- **Payment status** tracked separately from order status

---

## 🔔 Notification Rules

### Rule 7.1: Notification Triggers
- **Group Events**:
  - New member joined
  - Group locked
  - Group cancelled
- **Order Events**:
  - Order placed
  - Order status changed
  - Order delivered
- **Payment Events**:
  - Payment request sent
  - Payment received (for payer)
  - Payment confirmed (for member)
  - Payment overdue reminder

### Rule 7.2: Notification Channels
- **In-App**: Real-time notifications in UI
- **Email**: Important events (order placed, payment due)
- **SMS** (Optional): Critical events only

---

## 🚫 Restrictions & Limits

### Rule 8.1: Group Limits
- **Max Members**: 20 per group
- **Max Items per User**: 50 items
- **Max Group Total**: 10,000,000 VND (configurable)
- **Group Duration**: 24 hours max (can extend)

### Rule 8.2: Order Limits
- **Min Order Value**: 50,000 VND (per user)
- **Max Order Value**: 5,000,000 VND (per user)
- **Delivery Areas**: As per Grab/Shopee restrictions

### Rule 8.3: Payment Limits
- **Payment Deadline**: 24 hours (default), max 7 days
- **Max Payment Amount**: 5,000,000 VND per transaction
- **Payment Retries**: Max 3 attempts per member

---

## 🔄 Integration Rules

### Rule 9.1: Grab Food Integration
- **Order Placement**: 
  - Redirect to Grab app/website
  - System tracks order via order ID
  - Manual order ID entry if needed
- **Status Sync**: 
  - Poll Grab API if available
  - Manual status update by Group Owner
  - Webhook support (if Grab provides)

### Rule 9.2: Shopee Food Integration
- **Order Placement**: 
  - Redirect to Shopee app/website
  - System tracks order via order ID
  - Manual order ID entry if needed
- **Status Sync**: 
  - Poll Shopee API if available
  - Manual status update by Group Owner
  - Webhook support (if Shopee provides)

### Rule 9.3: Data Synchronization
- **Menu Data**: Cached for 1 hour, refresh on demand
- **Price Data**: Locked at order time
- **Order Status**: Updated manually or via API (if available)
- **Payment Status**: Updated by users (payer confirms)

---

## 📝 Data & Privacy Rules

### Rule 10.1: Data Storage
- **User Data**: 
  - Name, email, phone (required)
  - Bank account details (encrypted)
  - Order history (stored permanently)
- **Group Data**: 
  - Group info stored for 90 days after completion
  - Cart data cleared after order completion
- **Payment Data**: 
  - Transaction IDs stored
  - Bank account details (last 4 digits visible)
  - Full account details only visible to payer when needed

### Rule 10.2: Privacy
- **Public**: Restaurant names, menu items, prices
- **Group Members**: Other members' names, cart items, payment status
- **Private**: Bank account full details, personal contact info
- **Admin Only**: All data for dispute resolution

---

## ⚠️ Error Handling & Edge Cases

### Rule 11.1: Order Failures
- **Grab/Shopee Order Fails**:
  - Group Owner can retry
  - If fails 3 times, group unlocked, members can modify
  - Group can be cancelled
- **Restaurant Rejects Order**:
  - Order cancelled automatically
  - Group unlocked
  - Members notified

### Rule 11.2: Payment Failures
- **Member Cannot Pay**:
  - Can request extension (Group Owner approves)
  - Can be removed from order (before delivery)
  - After delivery, must pay or admin intervenes
- **Payer Payment Fails**:
  - Order cancelled if payment not completed
  - Group unlocked
  - Alternative payer can be assigned

### Rule 11.3: Member Leaves
- **Before Order Locked**: 
  - Member can leave freely
  - Their items removed from group cart
- **After Order Locked**: 
  - Member cannot leave
  - Must pay their share
  - Can be removed by Group Owner (before delivery only)

---

## 📈 Reporting & Analytics

### Rule 12.1: User Reports
- **Personal**: 
  - Order history
  - Payment history
  - Group participation history
- **Group**: 
  - Group order summary
  - Payment status per member
  - Order timeline

### Rule 12.2: Admin Reports
- **System**: 
  - Total orders
  - Total revenue (if applicable)
  - Active groups
  - Payment disputes
  - User activity

---

## 🔧 System Configuration

### Rule 13.1: Configurable Settings
- **Group Limits**: Max members, max order value
- **Payment Deadlines**: Default and max extension
- **Notification Preferences**: Per user
- **Platform Support**: Enable/disable Grab or Shopee

### Rule 13.2: Maintenance
- **Scheduled Maintenance**: Notify users 24 hours before
- **Emergency Maintenance**: Immediate notification
- **Data Backup**: Daily automated backups
- **System Updates**: Deploy during low-traffic hours

---

## 📋 Summary Checklist

### For Group Owner:
- [ ] Create group
- [ ] Share Group ID with members
- [ ] Select restaurant (Grab or Shopee)
- [ ] Wait for members to add items
- [ ] Review group cart
- [ ] Lock group when ready
- [ ] Place order on Grab/Shopee
- [ ] Pay for entire order
- [ ] Share bank account details
- [ ] Verify member payments
- [ ] Mark order as completed

### For Group Member:
- [ ] Join group with Group ID
- [ ] Browse restaurant menu
- [ ] Add items to personal cart
- [ ] Review group total
- [ ] Wait for order to be placed
- [ ] Transfer money to payer's account
- [ ] Enter transaction ID
- [ ] Wait for payment confirmation

---

## 📞 Support & Escalation

### Rule 14.1: Support Levels
1. **Self-Service**: FAQ, help docs
2. **Community**: Group Owner helps members
3. **Admin Support**: For disputes and technical issues
4. **Emergency**: Critical payment or order issues

### Rule 14.2: Escalation Path
- **Level 1**: User tries to resolve (payment confirmation)
- **Level 2**: Group Owner mediates
- **Level 3**: Admin reviews and resolves
- **Level 4**: External dispute resolution (if needed)

---

**Document Version**: 1.0  
**Last Updated**: 2025-01-XX  
**Next Review**: Quarterly

