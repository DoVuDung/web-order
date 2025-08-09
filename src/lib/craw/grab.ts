import axios from "axios";
import * as cheerio from "cheerio";
export interface MenuItem {
  name: string;
  price: string;
  imageUrl?: string;
}

export async function crawlGrabFood(url: string) {
  try {
    const { data: html } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Cache-Control': 'max-age=0'
      },
      timeout: 30000, // 30 second timeout
    });
    
    const $ = cheerio.load(html);
    
    // Debug: Log the HTML structure to understand Grab's layout
    
    
    
    
    // More robust selectors for Grab Food
    let restaurantName = $('h1').first().text().trim();
    if (!restaurantName) {
      restaurantName = $('[data-testid="restaurant-name"]').text().trim();
    }
    if (!restaurantName) {
      restaurantName = $('.restaurant-name').text().trim();
    }
    if (!restaurantName) {
      // Try to extract from title or other common locations
      restaurantName = $('title').text().split('|')[0].trim();
    }
    
    const menuItems: MenuItem[] = [];

    // Debug: Check what elements exist on the page
    console.log('Checking page elements:');
    console.log('- Divs with price symbols:', $('div:contains("₫"), div:contains("$"), div:contains("VND")').length);
    console.log('- Elements with "price" in class:', $('[class*="price"]').length);
    console.log('- Elements with "item" in class:', $('[class*="item"]').length);
    console.log('- Elements with "menuItemPhoto" in class:', $('[class*="menuItemPhoto"]').length);
    console.log('- Elements with "placeholder" in class:', $('[class*="placeholder"]').length);
    console.log('- Images with "realImage" in class:', $('img[class*="realImage"]').length);
    console.log('- All divs count:', $('div').length);
    console.log('- All img tags:', $('img').length);

    // Try multiple selectors for menu items - more comprehensive approach
    const menuSelectors = [
      // Common Grab selectors
      '.menuItem',
      '[data-testid="menu-item"]',
      '.menu-item',
      '.food-item',
      '.item-card',
      '.product-item',
      '.dish-item',
      // CSS modules patterns (with hashes)
      '[class*="menuItem"]',
      '[class*="foodItem"]',
      '[class*="productItem"]',
      '[class*="itemCard"]',
      // Generic selectors for items with prices
      'div:contains("₫")',
      'div:contains("VND")',
      '[class*="item"]',
      '[class*="product"]',
      '[class*="dish"]',
      '[class*="food"]'
    ];
    
    for (const selector of menuSelectors) {
      
      const elements = $(selector);
      
      
      if (elements.length > 0) {
        elements.each((_, el) => {
          const $el = $(el);
          
          // Try to find name and price within this element
          const nameSelectors = [
            // Specific Grab classes
            '[class*="itemNameDescription"]',
            '[class*="itemName"]',
            '[class*="foodName"]',
            '[class*="productName"]',
            '[class*="dishName"]',
            // Generic selectors
            '.itemName', '.item-name', '.food-name', '.product-name', '.dish-name',
            'h3', 'h4', 'h5', 'h6',
            '[class*="name"]', '[class*="title"]',
            'span', 'div', 'p'
          ];
          
          const priceSelectors = [
            // Specific Grab price classes
            '[class*="itemPrice"]',
            '[class*="foodPrice"]',
            '[class*="productPrice"]',
            '[class*="price"]',
            '[class*="cost"]',
            '[class*="amount"]',
            // Generic selectors
            '.itemPrice', '.item-price', '.food-price', '.product-price', '.price',
            'span:contains("₫")', 'div:contains("₫")', 'span:contains("VND")', 'div:contains("VND")'
          ];

          const imageSelectors = [
            // Specific Grab image classes based on actual HTML structure
            '[class*="placeholder"] img[class*="realImage"]',
            '[class*="menuItemPhoto"] img[class*="realImage"]',
            'img[class*="realImage"]',
            '[class*="placeholder"] img',
            '[class*="menuItemPhoto"] img',
            // Generic Grab image classes
            '[class*="menuItemPhoto"]',
            '[class*="placeholder"]',
            '[class*="itemPhoto"]',
            '[class*="foodPhoto"]',
            '[class*="productPhoto"]',
            '[class*="FoodImage"]', // Add this for Grab's newer structure
            '[class*="foodImage"]',
            '[class*="ItemImage"]',
            '[class*="itemImage"]',
            // div with background-image
            'div[style*="background-image"]',
            // Generic selectors
            'img',
            '[class*="image"]',
            '[class*="photo"]',
            '[class*="picture"]'
          ];
          
          let name = '';
          let price = '';
          let imageUrl = '';
          
          // Try to find name
          for (const nameSelector of nameSelectors) {
            const nameEl = $el.find(nameSelector).first();
            if (nameEl.length > 0) {
              const text = nameEl.text().trim();
              // Skip if text contains price symbols or is too short
              if (text && !text.includes('₫') && !text.includes('VND') && text.length > 2) {
                name = text;
                break;
              }
            }
          }
          
          // Try to find price
          for (const priceSelector of priceSelectors) {
            const priceEl = $el.find(priceSelector).first();
            if (priceEl.length > 0) {
              const text = priceEl.text().trim();
              if (text && (text.includes('₫') || text.includes('VND') || /\d/.test(text))) {
                price = text;
                break;
              }
            }
          }

          // Try to find image
          for (const imageSelector of imageSelectors) {
            const imageElements = $el.find(imageSelector);
            
            imageElements.each((_, imgEl) => {
              const $imgEl = $(imgEl);
              
              // Check for various src attributes
              let src = $imgEl.attr('src') || 
                       $imgEl.attr('data-src') || 
                       $imgEl.attr('data-lazy') || 
                       $imgEl.attr('data-original') ||
                       $imgEl.attr('data-bg');
              
              // Check for background-image in style attribute
              if (!src) {
                const style = $imgEl.attr('style');
                if (style && style.includes('background-image')) {
                  const bgMatch = style.match(/background-image:\s*url\(['"]?([^'")]+)['"]?\)/);
                  if (bgMatch && bgMatch[1]) {
                    src = bgMatch[1];
                  }
                }
              }
              
              // Check for srcset attribute
              if (!src) {
                const srcset = $imgEl.attr('srcset');
                if (srcset) {
                  // Extract first URL from srcset
                  const srcsetMatch = srcset.match(/([^\s,]+)/);
                  if (srcsetMatch && srcsetMatch[1]) {
                    src = srcsetMatch[1];
                  }
                }
              }
              
              // Validate image URL
              if (src && src.trim() && 
                  !src.includes('plus-white.svg') && 
                  !src.includes('placeholder.svg') &&
                  !src.includes('blank.svg') &&
                  !src.includes('loading.gif') &&
                  src !== 'data:image/svg+xml;base64,') {
                // Make sure it's a full URL
                if (src.startsWith('//')) {
                  src = 'https:' + src;
                } else if (src.startsWith('/')) {
                  src = 'https://food.grab.com' + src;
                } else if (!src.startsWith('http') && !src.startsWith('data:')) {
                  src = 'https://food.grab.com/' + src;
                }
                
                // Additional validation - check if it looks like a real image
                if (src.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/i) || 
                    src.includes('image') || src.includes('photo') ||
                    src.includes('compressed_webp') || src.includes('food-cms') ||
                    src.includes('grab.com') || src.includes('food.grab') ||
                    src.startsWith('data:image/')) {
                  imageUrl = src;
                  console.log(`Found image with selector ${imageSelector}: ${imageUrl}`);
                  return false; // Break the loop
                }
              }
            });
            
            if (imageUrl) break; // Found a valid image, stop searching
          }
          
          // If we couldn't find structured name/price, try to extract from text content
          if (!name || !price) {
            const fullText = $el.text().trim();
            const lines = fullText.split('\n').map(line => line.trim()).filter(line => line);
            
            for (const line of lines) {
              if (!name && line.length > 2 && !line.includes('₫') && !line.includes('VND')) {
                name = line;
              }
              if (!price && (line.includes('₫') || line.includes('VND') || /\d+[,.]?\d*/.test(line))) {
                price = line;
              }
            }
          }
          
          if (name && price) {
            console.log(`Found item: ${name} - ${price} - ${imageUrl}`);
            menuItems.push({ name, price, imageUrl: imageUrl || undefined });
          }
        });
        
        // If we found items with this selector, break
        if (menuItems.length > 0) {
          console.log(`Found ${menuItems.length} items using selector: ${selector}`);
          break;
        }
      }
    }

    // If still no items found, try a more aggressive approach
    if (menuItems.length === 0) {
      console.log('No items found with structured selectors, trying aggressive approach...');
      
      // Look for any element containing price symbols
      $('*:contains("₫"), *:contains("VND")').each((_, el) => {
        const $el = $(el);
        const text = $el.text().trim();
        const parent = $el.parent();
        
        // Try to find name in siblings or parent
        let name = '';
        parent.find('*').each((_, sibling) => {
          const siblingText = $(sibling).text().trim();
          if (siblingText && siblingText !== text && !siblingText.includes('₫') && !siblingText.includes('VND') && siblingText.length > 2) {
            name = siblingText;
            return false; // break
          }
        });
        
        if (name && text) {
          // Try to find image in the same parent
          let imageUrl = '';
          const img = parent.find('img').first();
          if (img.length > 0) {
            let src = img.attr('src') || img.attr('data-src') || img.attr('data-lazy');
            if (src) {
              if (src.startsWith('//')) {
                src = 'https:' + src;
              } else if (src.startsWith('/')) {
                src = 'https://food.grab.com' + src;
              }
              if (src.includes('http') && (src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png') || src.includes('.webp'))) {
                imageUrl = src;
              }
            }
          }
          menuItems.push({ name, price: text, imageUrl: imageUrl || undefined });
        }
      });
    }

    
    
    // Remove duplicate items based on name and price
    const uniqueMenuItems: MenuItem[] = [];
    const seenItems = new Set<string>();
    
    for (const item of menuItems) {
      // Create a unique key based on name and price (normalized)
      const normalizedName = item.name.toLowerCase().trim();
      const normalizedPrice = item.price.replace(/[^0-9.]/g, '');
      const itemKey = `${normalizedName}|${normalizedPrice}`;
      
      if (!seenItems.has(itemKey)) {
        seenItems.add(itemKey);
        uniqueMenuItems.push(item);
      } else {
        console.log(`Duplicate item removed: ${item.name}`);
      }
    }
    
    console.log(`Total unique items found: ${uniqueMenuItems.length}`);
    console.log(`Restaurant: ${restaurantName}`);
    
    return { 
      restaurantName: restaurantName || 'Unknown Restaurant', 
      menu: uniqueMenuItems 
    };
  } catch (error) {
    console.error('Error crawling Grab Food:', error);
    throw new Error(`Failed to crawl Grab Food: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
