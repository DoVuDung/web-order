# Troubleshooting Guide

## Common Errors and Solutions

### Error: Cannot render a sync or defer <script> outside the main document

**Fixed**: Added `async` attribute to the script tag in `layout.tsx`. This allows the script to load asynchronously without blocking the page render.

### Error: Clerk: Failed to load Clerk

This error typically occurs when:

1. **Missing Environment Variables**
   - Ensure you have a `.env.local` file with:
     ```env
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
     CLERK_SECRET_KEY=sk_test_...
     ```

2. **Invalid Clerk Keys**
   - Verify your Clerk keys are correct
   - Make sure you're using test keys (pk_test_/sk_test_) for development
   - Check your Clerk dashboard: https://dashboard.clerk.com

3. **Network Issues**
   - Clerk needs to load JavaScript from their CDN
   - Check browser console for network errors
   - Verify you're not blocking third-party scripts

4. **ClerkProvider Configuration**
   - The ClerkProvider should wrap your app in `layout.tsx`
   - Make sure it's properly configured

**Quick Fix Steps:**

1. Create `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Clerk keys from https://dashboard.clerk.com

3. Restart the development server:
   ```bash
   npm run dev
   ```

4. Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### Script Tag Error

**Solution**: The script tag in `layout.tsx` now has the `async` attribute, which fixes the React hydration warning.

### Database Connection Issues

If you see Prisma errors:

1. Check your `DATABASE_URL` in `.env.local`
2. Run database migrations:
   ```bash
   npm run db
   ```
3. Verify PostgreSQL is running

### CORS Errors

If you see CORS errors when testing APIs:

1. Verify OPTIONS handlers are in place (they are)
2. Check that the origin matches your allowed origins
3. Test with curl first to isolate browser issues

## Environment Setup Checklist

- [ ] `.env.local` file exists
- [ ] `DATABASE_URL` is set correctly
- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set
- [ ] `CLERK_SECRET_KEY` is set
- [ ] Database is running and accessible
- [ ] Dependencies are installed (`npm install`)
- [ ] Development server is running (`npm run dev`)

## Getting Clerk Keys

1. Go to https://dashboard.clerk.com
2. Sign in or create an account
3. Create a new application or select existing one
4. Go to "API Keys" section
5. Copy the "Publishable key" (starts with `pk_test_`)
6. Copy the "Secret key" (starts with `sk_test_`)
7. Add them to your `.env.local` file

## Still Having Issues?

1. Check the browser console for detailed error messages
2. Check the terminal where `npm run dev` is running
3. Verify all environment variables are loaded:
   ```bash
   # In your terminal, check if variables are loaded
   echo $NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   ```
4. Restart the development server after changing `.env.local`

