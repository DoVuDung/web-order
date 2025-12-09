# Google OAuth Setup Guide

## 📋 Overview

This guide explains how to enable Google login for your Web Order application using Clerk authentication.

---

## 🔐 Step 1: Configure Clerk Dashboard

### 1. Go to Clerk Dashboard
- Visit: https://dashboard.clerk.com
- Select your application: **Web Order**

### 2. Enable Google OAuth

1. Navigate to **User & Authentication** → **Social Connections**
2. Find **Google** in the list
3. Click **Enable** on Google
4. You'll see two options:
   - **Use Clerk's development credentials** (for testing)
   - **Use custom credentials** (for production)

### 3. Development Setup (Quick Start)

For development, you can use Clerk's built-in Google OAuth:

1. Toggle **Enable Google** to ON
2. Leave "Use Clerk development keys" selected
3. Click **Save**

✅ **Done!** Google login is now enabled for development.

### 4. Production Setup (Custom Credentials)

For production, you need to create your own Google OAuth application:

#### A. Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Select **Web application**
6. Configure:
   - **Name**: Web Order
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (development)
     - `https://your-domain.vercel.app` (production)
   - **Authorized redirect URIs**:
     - `https://accounts.clerk.dev/v1/oauth_callback` (Clerk's callback)
     - `https://your-domain.vercel.app/sign-in` (your app)

7. Click **Create**
8. Copy the **Client ID** and **Client Secret**

#### B. Configure Clerk with Google Credentials

1. Back in Clerk Dashboard → **Social Connections** → **Google**
2. Select **Use custom credentials**
3. Enter:
   - **Client ID**: Your Google OAuth Client ID
   - **Client Secret**: Your Google OAuth Client Secret
4. Click **Save**

---

## 📝 Step 2: Update Environment Variables

Your `.env.local` should already have Clerk configuration:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Sign-in/Sign-up URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

No additional environment variables needed for Google OAuth!

---

## 🎨 Step 3: Customize Sign-In UI (Optional)

The sign-in pages (`/sign-in` and `/sign-up`) are already created with Clerk components.

### Customize Appearance

Update `/src/app/sign-in/[[...sign-in]]/page.tsx`:

```tsx
<SignIn 
  appearance={{
    elements: {
      rootBox: "mx-auto",
      card: "shadow-2xl border border-gray-200 dark:border-gray-700",
      headerTitle: "text-2xl font-bold",
      headerSubtitle: "text-gray-600",
      socialButtonsBlockButton: "border-2 hover:bg-gray-50",
      formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
    },
    layout: {
      socialButtonsPlacement: "top", // Google button at top
      socialButtonsVariant: "blockButton",
    },
  }}
  routing="path"
  path="/sign-in"
  signUpUrl="/sign-up"
/>
```

---

## 🧪 Step 4: Test Google Login

### Development Testing

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000`

3. Click **Sign In** button in navbar

4. You should see:
   - **Continue with Google** button (with Google logo)
   - Email/password fields
   - Link to sign up

5. Click **Continue with Google**

6. Authenticate with your Google account

7. You'll be redirected back to the app, signed in! ✅

### What to Check

- [ ] Google button appears on sign-in page
- [ ] Click redirects to Google OAuth
- [ ] After Google auth, user is created in Clerk
- [ ] User is redirected back to app
- [ ] User is authenticated (see UserButton in navbar)
- [ ] User info appears in Clerk dashboard

---

## 🔒 Security Considerations

### 1. Allowed Domains

Configure which domains can use your OAuth:

**Clerk Dashboard** → **User & Authentication** → **Restrictions**
- Add allowed domains
- Block disposable email providers (optional)

### 2. User Metadata

After Google sign-in, Clerk automatically populates:
- `user.firstName` - From Google profile
- `user.lastName` - From Google profile
- `user.emailAddresses` - Google email
- `user.imageUrl` - Google profile picture

### 3. Role Assignment

By default, Google users get `customer` role. To make someone admin:

```bash
# Via API
curl -X PATCH http://localhost:3000/api/admin/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -d '{
    "userId": "user_...",
    "role": "admin"
  }'
```

Or in Clerk Dashboard:
1. Go to **Users**
2. Click on user
3. **Public metadata** → Add `{"role": "admin"}`

---

## 🌍 Additional OAuth Providers

You can enable other providers the same way:

### Available Providers in Clerk:
- ✅ Google
- Facebook
- GitHub
- Microsoft
- Apple
- Twitter/X
- LinkedIn
- Discord
- And more...

To enable:
1. Go to **Social Connections** in Clerk
2. Toggle the provider ON
3. Configure credentials (if needed)

---

## 🐛 Troubleshooting

### Issue 1: "Sign-in redirect URL mismatch"

**Solution:** Check Authorized redirect URIs in Google Console match:
- `https://accounts.clerk.dev/v1/oauth_callback`
- Your app URLs

### Issue 2: "Access blocked: This app's request is invalid"

**Solution:** 
- Verify OAuth consent screen is configured in Google Console
- Make sure app is in "Testing" or "Published" state

### Issue 3: User gets "customer" role instead of "admin"

**Solution:** 
- Roles must be set manually in Clerk
- Go to user's **Public metadata** and set `{"role": "admin"}`

### Issue 4: Google button doesn't appear

**Solution:**
- Verify Google is enabled in Clerk Dashboard
- Clear cache and reload page
- Check browser console for errors

---

## 📊 Post-Setup Checklist

After setting up Google OAuth:

- [ ] Test Google sign-in flow
- [ ] Test Google sign-up flow
- [ ] Verify user data synced correctly
- [ ] Test role-based access (admin, customer)
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Configure OAuth consent screen (production)
- [ ] Add privacy policy URL (production)
- [ ] Add terms of service URL (production)

---

## 🚀 Quick Start Commands

```bash
# Start dev server
npm run dev

# Open app
open http://localhost:3000

# Test sign-in
open http://localhost:3000/sign-in

# View Prisma Studio
npx prisma studio

# Check database
psql $DATABASE_URL
```

---

## 📚 Resources

- [Clerk Google OAuth Docs](https://clerk.com/docs/authentication/social-connections/google)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [Clerk Dashboard](https://dashboard.clerk.com)

---

**Setup Time:** ~10 minutes  
**Difficulty:** Easy  
**Status:** ✅ Ready to implement

