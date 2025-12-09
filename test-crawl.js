#!/usr/bin/env node

/**
 * Test script for Grab Food crawler
 * Usage: node test-crawl.js
 */

const testUrls = [
  {
    name: 'Bánh Mì Huỳnh Hoa',
    url: 'https://food.grab.com/vn/vi/restaurant/banh-mi-huynh-hoa-delivery/2-C3BEYLWUNAJVWA'
  },
  {
    name: 'Cơm Tấm Thuận Kiều',
    url: 'https://food.grab.com/vn/vi/restaurant/com-tam-thuan-kieu-delivery/2-C4ZZJEFCVNTLJA'
  },
  {
    name: 'Phở 24 Bến Thành',
    url: 'https://food.grab.com/vn/vi/restaurant/pho-24-ben-thanh-delivery/2-CYNBDWTDYAAVTA'
  }
];

const API_URL = process.env.API_URL || 'http://localhost:3000';

async function testCrawl(testCase) {
  console.log(`\n🔍 Testing: ${testCase.name}`);
  console.log(`URL: ${testCase.url}`);
  
  try {
    const startTime = Date.now();
    
    const response = await fetch(`${API_URL}/api/craw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: testCase.url })
    });
    
    const duration = Date.now() - startTime;
    const data = await response.json();
    
    console.log(`Status: ${response.status} ${response.statusText}`);
    console.log(`Duration: ${duration}ms`);
    
    if (response.ok) {
      console.log(`✅ Success!`);
      console.log(`Restaurant: ${data.name || 'N/A'}`);
      console.log(`Products: ${data.products?.length || 0}`);
      console.log(`Restaurant ID: ${data.id || 'N/A'}`);
      
      if (data.products && data.products.length > 0) {
        console.log(`\nSample products:`);
        data.products.slice(0, 3).forEach((product, index) => {
          console.log(`  ${index + 1}. ${product.name} - ${product.price} VND`);
        });
      }
    } else {
      console.log(`❌ Failed!`);
      console.log(`Error: ${data.error || 'Unknown error'}`);
      if (data.details) {
        console.log(`Details:`, data.details);
      }
    }
    
    // Check rate limit headers
    const rateLimit = response.headers.get('X-RateLimit-Limit');
    const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
    
    if (rateLimit) {
      console.log(`\nRate Limit: ${rateLimitRemaining}/${rateLimit} remaining`);
    }
    
    return { success: response.ok, status: response.status, data };
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function testRateLimit() {
  console.log('\n\n🚦 Testing Rate Limiting...');
  console.log('Making 12 requests to test rate limit (10 per minute)...\n');
  
  let successCount = 0;
  let rateLimitCount = 0;
  
  for (let i = 1; i <= 12; i++) {
    console.log(`Request ${i}:`);
    
    const result = await testCrawl({
      name: `Rate Limit Test ${i}`,
      url: testUrls[0].url
    });
    
    if (result.success) {
      successCount++;
    } else if (result.status === 429) {
      rateLimitCount++;
    }
    
    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n\n📊 Rate Limit Test Results:');
  console.log(`✅ Successful requests: ${successCount}`);
  console.log(`🚫 Rate limited: ${rateLimitCount}`);
  console.log(`Expected: ~10 successful, ~2 rate limited`);
}

async function testGetRestaurants() {
  console.log('\n\n📋 Testing GET /api/restaurants...');
  
  try {
    const response = await fetch(`${API_URL}/api/restaurants`);
    const data = await response.json();
    
    if (response.ok) {
      console.log(`✅ Success!`);
      console.log(`Total restaurants: ${data.length}`);
      
      if (data.length > 0) {
        console.log(`\nRestaurants:`);
        data.forEach((restaurant, index) => {
          console.log(`  ${index + 1}. ${restaurant.name} (${restaurant.products?.length || 0} products)`);
        });
      }
    } else {
      console.log(`❌ Failed: ${data.error}`);
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
}

async function runTests() {
  console.log('🧪 Grab Food Crawler Test Suite');
  console.log('================================\n');
  console.log(`API URL: ${API_URL}`);
  console.log(`\nℹ️  Note: Authentication is required for crawling.`);
  console.log(`   If you get 401 errors, sign in at ${API_URL} first.\n`);
  
  // Test individual URLs
  for (const testCase of testUrls) {
    await testCrawl(testCase);
    console.log('\n' + '-'.repeat(60));
    
    // Wait between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  // Test getting all restaurants
  await testGetRestaurants();
  
  // Test rate limiting (optional, commented out by default)
  // await testRateLimit();
  
  console.log('\n\n✨ All tests completed!');
  console.log('\nNext steps:');
  console.log('1. Check database: npx prisma studio');
  console.log('2. View in app: http://localhost:3000/orders');
  console.log('3. View API docs: http://localhost:3000/api-docs');
}

// Run tests
runTests().catch(console.error);

