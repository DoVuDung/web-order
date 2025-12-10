#!/usr/bin/env node

/**
 * Test script for Pizza Napoli restaurant
 * URL: https://food.grab.com/vn/en/restaurant/pizza-napoli-burger-fast-food-delivery/5-C6BGBA3KVBN2L2
 */

const testUrl = 'https://food.grab.com/vn/en/restaurant/pizza-napoli-burger-fast-food-delivery/5-C6BGBA3KVBN2L2';
const API_URL = process.env.API_URL || 'http://localhost:3000';

async function testPizzaNapoli() {
  console.log('🍕 Testing Pizza Napoli Crawler');
  console.log('================================\n');
  console.log(`Restaurant: Pizza Napoli - Burger & Fast Food`);
  console.log(`URL: ${testUrl}\n`);
  
  try {
    console.log('📡 Sending crawl request to API...');
    const startTime = Date.now();
    
    const response = await fetch(`${API_URL}/api/craw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: testUrl })
    });
    
    const duration = Date.now() - startTime;
    const data = await response.json();
    
    console.log(`\n⏱️  Request completed in ${duration}ms`);
    console.log(`📊 Status: ${response.status} ${response.statusText}\n`);
    
    if (response.ok) {
      console.log('✅ SUCCESS - Restaurant data crawled!\n');
      console.log('📋 Restaurant Details:');
      console.log('─────────────────────');
      console.log(`   Name: ${data.name || 'N/A'}`);
      console.log(`   ID: ${data.id || 'N/A'}`);
      console.log(`   Platform: ${data.platform || 'GRAB'}`);
      console.log(`   Products Found: ${data.products?.length || 0}`);
      console.log(`   Created: ${new Date(data.createdAt).toLocaleString() || 'N/A'}`);
      
      if (data.products && data.products.length > 0) {
        console.log('\n🍽️  Sample Menu Items:');
        console.log('─────────────────────');
        
        // Show first 10 products
        data.products.slice(0, 10).forEach((product, index) => {
          const price = new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
          }).format(product.price);
          
          const hasImage = product.imageUrl && 
                          product.imageUrl.length > 10 && 
                          !product.imageUrl.includes('plus-white.svg');
          
          console.log(`   ${index + 1}. ${product.name}`);
          console.log(`      💰 ${price}`);
          console.log(`      🖼️  ${hasImage ? 'Image available' : 'No image'}`);
          if (index < 9) console.log('');
        });
        
        if (data.products.length > 10) {
          console.log(`\n   ... and ${data.products.length - 10} more items`);
        }
      }
      
      console.log('\n✨ What to do next:');
      console.log('   1. Visit: http://localhost:3000/orders');
      console.log('   2. Browse the menu items');
      console.log('   3. Create a group order');
      console.log('   4. Share group ID with friends');
      
    } else {
      console.log('❌ FAILED - Crawl unsuccessful\n');
      console.log(`Error: ${data.error || 'Unknown error'}`);
      console.log(`Code: ${data.code || 'N/A'}`);
      
      if (data.details) {
        console.log('\n📝 Details:');
        console.log(JSON.stringify(data.details, null, 2));
      }
      
      if (response.status === 401) {
        console.log('\n💡 Tip: You need to sign in first!');
        console.log('   1. Visit: http://localhost:3000/sign-in');
        console.log('   2. Sign in with Google or email');
        console.log('   3. Run this test again');
      }
      
      if (response.status === 429) {
        console.log('\n⏳ Rate limit exceeded!');
        console.log('   Wait 1 minute and try again');
      }
    }
    
    // Check rate limit headers
    const rateLimit = response.headers.get('X-RateLimit-Limit');
    const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining');
    const rateLimitReset = response.headers.get('X-RateLimit-Reset');
    
    if (rateLimit) {
      console.log('\n🚦 Rate Limit Info:');
      console.log(`   Limit: ${rateLimit} requests per minute`);
      console.log(`   Remaining: ${rateLimitRemaining}`);
      if (rateLimitReset) {
        console.log(`   Reset at: ${new Date(rateLimitReset).toLocaleTimeString()}`);
      }
    }
    
    return { success: response.ok, data };
    
  } catch (error) {
    console.log('❌ ERROR - Request failed\n');
    console.log(`Message: ${error.message}`);
    console.log('\n💡 Make sure:');
    console.log('   1. Development server is running (npm run dev)');
    console.log('   2. Database is connected');
    console.log('   3. You are signed in');
    
    return { success: false, error: error.message };
  }
}

async function testGetRestaurant() {
  console.log('\n\n📖 Fetching restaurant from database...\n');
  
  try {
    const response = await fetch(`${API_URL}/api/restaurants`);
    const restaurants = await response.json();
    
    if (response.ok && restaurants.length > 0) {
      const pizzaNapoli = restaurants.find(r => 
        r.name.toLowerCase().includes('pizza') || 
        r.name.toLowerCase().includes('napoli')
      );
      
      if (pizzaNapoli) {
        console.log('✅ Pizza Napoli found in database!');
        console.log(`   Name: ${pizzaNapoli.name}`);
        console.log(`   ID: ${pizzaNapoli.id}`);
        console.log(`   Products: ${pizzaNapoli.products?.length || 0}`);
      } else {
        console.log('ℹ️  Pizza Napoli not found in database yet');
        console.log(`   Total restaurants: ${restaurants.length}`);
      }
    } else {
      console.log('ℹ️  No restaurants in database yet');
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
}

// Run test
console.log('\n');
testPizzaNapoli()
  .then(async (result) => {
    if (result.success) {
      await testGetRestaurant();
    }
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Test completed! 🎉\n');
  })
  .catch(console.error);



