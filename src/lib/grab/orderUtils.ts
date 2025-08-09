/**
 * Grab Food Direct Ordering Utilities
 * Handles deep links and URL generation for ordering directly through Grab
 */

export interface GrabOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface GrabOrder {
  restaurantId: string;
  restaurantUrl: string;
  items: GrabOrderItem[];
  totalAmount: number;
}

/**
 * Generate a direct Grab Food URL for ordering specific items
 * This creates a deep link that opens Grab app or website with items pre-selected
 */
export function generateGrabOrderUrl(order: GrabOrder): string {
  const baseUrl = order.restaurantUrl;
  
  // For Grab Food, we can append query parameters to pre-select items
  const url = new URL(baseUrl);
  
  // Add items as query parameters (this is a simplified approach)
  // In practice, Grab's deep linking might require different parameters
  order.items.forEach((item, index) => {
    url.searchParams.append(`item_${index}_id`, item.id);
    url.searchParams.append(`item_${index}_qty`, item.quantity.toString());
  });
  
  // Add source tracking
  url.searchParams.append('source', 'web-order-app');
  url.searchParams.append('utm_source', 'custom_ordering_app');
  
  return url.toString();
}

/**
 * Generate Grab app deep link for mobile devices
 * Format: grab://food/restaurant/{restaurant_id}?items=...
 */
export function generateGrabAppDeepLink(order: GrabOrder): string {
  const restaurantId = extractRestaurantIdFromUrl(order.restaurantUrl);
  
  if (!restaurantId) {
    return order.restaurantUrl; // Fallback to web URL
  }
  
  // Grab app deep link format
  const baseDeepLink = `grab://food/restaurant/${restaurantId}`;
  
  // Add items as URL parameters
  const itemsParam = order.items.map(item => 
    `${item.id}:${item.quantity}`
  ).join(',');
  
  return `${baseDeepLink}?items=${encodeURIComponent(itemsParam)}&source=web-order-app`;
}

/**
 * Extract restaurant ID from Grab Food URL
 * Example: https://food.grab.com/vn/vi/restaurant/banh-mi-ba-dao-delivery/5-CZCAPEDZANNWG6
 */
export function extractRestaurantIdFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    
    // Find the restaurant ID (usually the last part after restaurant name)
    const restaurantIndex = pathParts.findIndex(part => part === 'restaurant');
    if (restaurantIndex !== -1 && pathParts[restaurantIndex + 2]) {
      return pathParts[restaurantIndex + 2];
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting restaurant ID:', error);
    return null;
  }
}

/**
 * Check if device supports Grab app deep links
 */
export function isGrabAppAvailable(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check if we're on mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  return isMobile;
}

/**
 * Open order in Grab with intelligent app/web detection
 */
export function openGrabOrder(order: GrabOrder): void {
  if (isGrabAppAvailable()) {
    // Try app deep link first
    const appLink = generateGrabAppDeepLink(order);
    const webLink = generateGrabOrderUrl(order);
    
    // Attempt to open app, fallback to web
    window.location.href = appLink;
    
    // Fallback to web after a delay if app doesn't open
    setTimeout(() => {
      window.open(webLink, '_blank');
    }, 2000);
  } else {
    // Open web version directly
    const webLink = generateGrabOrderUrl(order);
    window.open(webLink, '_blank');
  }
}

/**
 * Create a shareable Grab order link
 */
export function createShareableOrderLink(order: GrabOrder): string {
  const webLink = generateGrabOrderUrl(order);
  
  // Create a more user-friendly share message
  const shareText = `Check out this order from ${order.items.length} item(s) - Total: ${order.totalAmount.toLocaleString()} ₫`;
  
  // For sharing on social media or messaging apps
  return `${shareText}\n${webLink}`;
}

/**
 * Calculate total amount for an order
 */
export function calculateOrderTotal(items: GrabOrderItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Validate order before sending to Grab
 */
export function validateGrabOrder(order: GrabOrder): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!order.restaurantUrl) {
    errors.push('Restaurant URL is required');
  }
  
  if (!order.items || order.items.length === 0) {
    errors.push('At least one item is required');
  }
  
  if (order.items) {
    order.items.forEach((item, index) => {
      if (!item.id) errors.push(`Item ${index + 1}: ID is required`);
      if (!item.name) errors.push(`Item ${index + 1}: Name is required`);
      if (item.price <= 0) errors.push(`Item ${index + 1}: Price must be greater than 0`);
      if (item.quantity <= 0) errors.push(`Item ${index + 1}: Quantity must be greater than 0`);
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}
