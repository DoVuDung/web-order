# Clerk Authentication Setup Guide

## 🔐 Quick Setup

### Step 1: Get Your Clerk Keys

1. **Go to Clerk Dashboard**: https://dashboard.clerk.com
2. **Sign in** or **Create a free account**
3. **Create a new application** or select your existing one
4. **Go to API Keys** section (in the sidebar)
5. You'll see two keys:
   - **Publishable Key** (starts with `pk_test_` or `pk_live_`)
   - **Secret Key** (starts with `sk_test_` or `sk_live_`)

### Step 2: Update Your .env File

Open your `.env` file and replace the placeholder values:

```env
# Database Configuration
DATABASE_URL="postgresql://postgres:1234@localhost:5432/web-order?schema=public"

# Clerk Authentication
# Get these from https://dashboard.clerk.com → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Environment
NODE_ENV=development
```

### Step 3: Restart Your Development Server

After updating the `.env` file:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## 📋 Detailed Instructions

### Creating a Clerk Account

1. Visit https://dashboard.clerk.com
2. Click **"Sign Up"** or **"Sign In"**
3. Create your account (free tier available)

### Creating an Application

1. After signing in, click **"Create Application"**
2. Choose:
   - **Application name**: `Web Order` (or any name)
   - **Authentication options**: 
     - ✅ Email/Password
     - ✅ Google (optional, for social login)
3. Click **"Create Application"**

### Getting Your API Keys

1. In your Clerk dashboard, click on your application
2. In the left sidebar, click **"API Keys"**
3. You'll see:
   - **Publishable key**: Copy this (starts with `pk_test_`)
   - **Secret key**: Click **"Show"** and copy (starts with `sk_test_`)

### Copy Keys to .env

1. Open `.env` file in your project root
2. Replace:
   - `pk_test_your_key_here` → Your actual publishable key
   - `sk_test_your_key_here` → Your actual secret key
3. Save the file

---

## ✅ Verify Setup

After updating your `.env` file:

1. **Restart your dev server**:
   ```bash
   npm run dev
   ```

2. **Visit**: http://localhost:3000
3. **Click "Sign In"** in the navbar
4. You should see the Clerk sign-in form (not an error)

---

## 🚨 Troubleshooting

### Error: "Publishable key not valid"

**Solution**: 
- Make sure you copied the **entire** key (they're long!)
- Check for extra spaces or line breaks
- Verify the key starts with `pk_test_` or `pk_live_`
- Make sure you're using the correct environment (test vs live)

### Error: "Secret key not valid"

**Solution**:
- Make sure you copied the **entire** key
- Check for extra spaces
- Verify the key starts with `sk_test_` or `sk_live_`
- Make sure you clicked "Show" to reveal the full key

### Keys Not Working After Update

**Solution**:
1. Stop your dev server (Ctrl+C)
2. Delete `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

---

## 🔒 Security Notes

- ✅ **Never commit** your `.env` file to Git
- ✅ **Never share** your secret keys publicly
- ✅ Use **test keys** (`pk_test_`, `sk_test_`) for development
- ✅ Use **live keys** (`pk_live_`, `sk_live_`) only in production

---

## 📚 Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Clerk Dashboard](https://dashboard.clerk.com)
- [Clerk Next.js Guide](https://clerk.com/docs/quickstarts/nextjs)

---

**Need Help?** Check the Clerk dashboard or their documentation for more details.

