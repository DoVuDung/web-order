# Testing Guide - Grab Food API

## 🚀 Quick Start Testing

### 1. Start the Development Server

```bash
npm run dev
```

The server will start at `http://localhost:3000`

### 2. Get a Test Grab Food URL

Visit Grab Food website and copy any restaurant URL:
- Example: `https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA`
- Example: `https://food.grab.com/vn/vi/restaurant/com-tam-thuan-kieu-delivery/2-C4ZZJEFCVNTLJA`

### 3. Test the Crawl API

#### Option A: Using curl (Terminal)

```bash
# Simple test without authentication (will fail with 401)
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA"
  }'
```

#### Option B: Using Swagger UI (Recommended)

1. Open: `http://localhost:3000/api-docs`
2. Find the `POST /api/craw` endpoint
3. Click "Try it out"
4. Enter your Grab Food URL in the request body:
   ```json
   {
     "url": "https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA"
   }
   ```
5. Click "Execute"

#### Option C: Using Browser Console

```javascript
// First, sign in to the app to get authenticated
// Then run this in browser console:

fetch('http://localhost:3000/api/craw', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA'
  })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.error(err));
```

### 4. Verify the Results

After crawling, check:
1. **View crawled data**: Go to `http://localhost:3000/orders` to see the menu
2. **Check database**: 
   ```bash
   npx prisma studio
   ```
   Then browse the Restaurant and Product tables

3. **Get all restaurants**:
   ```bash
   curl http://localhost:3000/api/restaurants | jq
   ```

## 📝 Test Scenarios

### Scenario 1: First Time Crawl

```bash
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA"
  }'
```

**Expected Result:**
- Status: 200 OK
- Response includes restaurant data with products
- Data saved to database

### Scenario 2: Duplicate URL Crawl

Run the same request again:

**Expected Result:**
- Status: 200 OK
- Response returns existing restaurant data
- No duplicate records created

### Scenario 3: Invalid URL

```bash
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/not-grab-food"
  }'
```

**Expected Result:**
- Status: 400 Bad Request
- Error: "Must be a valid Grab Food or Shopee Food URL"

### Scenario 4: Rate Limiting

Make 11+ requests within 1 minute:

**Expected Result:**
- First 10 requests: Success
- 11th request: 429 Too Many Requests
- Headers include `Retry-After` and rate limit info

## 🧪 Testing with Real Grab Food URLs

### Popular Vietnamese Restaurants to Test

```bash
# Bánh Mì Huỳnh Hoa
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA"
  }'

# Cơm Tấm Thuận Kiều
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/com-tam-thuan-kieu-delivery/2-C4ZZJEFCVNTLJA"
  }'

# Phở 24
curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/pho-24-ben-thanh-delivery/2-CYNBDWTDYAAVTA"
  }'
```

## 🔍 Debugging Tips

### Check Server Logs

The crawl process logs important information:
```bash
npm run dev
# Watch the console output when you make requests
```

Look for:
- "Starting crawl for URL: ..."
- "Restaurant already exists: ..."
- "Creating new restaurant: ..."
- Product count information

### Inspect Database

```bash
# Open Prisma Studio
npx prisma studio

# Or use psql directly
psql $DATABASE_URL

# Query restaurants
SELECT * FROM "Restaurant";

# Query products
SELECT * FROM "Product";
```

### Check Rate Limiting

```bash
# Make a request and check headers
curl -i -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{"url": "https://food.grab.com/vn/vi/restaurant/..."}'

# Look for these headers:
# X-RateLimit-Limit: 10
# X-RateLimit-Remaining: 9
# X-RateLimit-Reset: ...
```

## 🐛 Common Issues

### Issue 1: 401 Unauthorized

**Cause:** No authentication token
**Solution:** 
1. Sign in at `http://localhost:3000`
2. Use the browser console method
3. Or disable auth temporarily for testing (not recommended)

### Issue 2: Rate Limited

**Cause:** Too many requests
**Solution:** Wait 1 minute or restart the server

### Issue 3: Database Connection Error

**Cause:** DATABASE_URL not set or database not running
**Solution:**
```bash
# Check .env.local file exists
cat .env.local

# Test database connection
npx prisma db pull
```

### Issue 4: Crawl Failed

**Cause:** Grab Food changed their HTML structure
**Solution:** Update the crawler in `/src/lib/craw/grab.ts`

## 📊 Testing Checklist

- [ ] Server starts without errors
- [ ] Can access Swagger UI at `/api-docs`
- [ ] Can crawl a new restaurant
- [ ] Restaurant data appears in database
- [ ] Can view menu at `/orders`
- [ ] Duplicate URL returns existing data
- [ ] Invalid URL returns 400 error
- [ ] Rate limiting works after 10 requests
- [ ] Can view all restaurants via API
- [ ] Images load correctly in UI

## 🎯 Performance Testing

### Test Crawl Speed

```bash
time curl -X POST http://localhost:3000/api/craw \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA"
  }'
```

**Expected:** 2-5 seconds for a new restaurant

### Test Rate Limiting

```bash
# Run 15 requests and count successes/failures
for i in {1..15}; do
  echo "Request $i:"
  curl -s -o /dev/null -w "%{http_code}\n" \
    -X POST http://localhost:3000/api/craw \
    -H "Content-Type: application/json" \
    -d '{"url": "https://food.grab.com/vn/vi/restaurant/test"}'
  sleep 0.5
done
```

**Expected:**
- First 10 requests: 200 or 400 (if invalid URL)
- Requests 11-15: 429 (rate limited)

## 🔗 Useful Commands

```bash
# View all restaurants
curl http://localhost:3000/api/restaurants | jq

# Count restaurants in database
echo "SELECT COUNT(*) FROM \"Restaurant\";" | psql $DATABASE_URL

# Count products in database
echo "SELECT COUNT(*) FROM \"Product\";" | psql $DATABASE_URL

# Clear all data (careful!)
npx prisma migrate reset

# Regenerate Prisma client
npx prisma generate

# Push schema changes
npm run db
```

## 📝 Notes

- The crawler respects rate limits (10 requests/minute)
- Duplicate restaurants are detected by `grabLink`
- Products are automatically associated with restaurants
- Images are loaded from Grab Food CDN
- All timestamps are in UTC

---

**Happy Testing! 🎉**

