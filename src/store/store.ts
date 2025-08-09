import { create } from "zustand";

export interface Order {
  id: string;
  // Add other order properties here, e.g.:
  name: string;
  quantity: number;
  price: number;
  status: "pending" | "completed" | "cancelled";
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  restaurantId: string;
  restaurantName: string;
  imageUrl?: string;
}

export interface CrawledProduct {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  restaurantId: string;
}

export interface CrawledRestaurant {
  id: string;
  name: string;
  grabLink: string;
  products: CrawledProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface Store {
  orders: Order[];
  cart: CartItem[];
  // Current restaurant data for the active group
  crawledData: CrawledRestaurant | null;
  // Store crawled data per group for group ordering
  groupCrawledData: Record<string, CrawledRestaurant>;
  // Currently active group ID
  currentGroupId: string | null;
  addOrder: (order: Order) => void;
  removeOrder: (id: string) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartItemQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  // Set crawled data for the current group
  setCrawledData: (data: CrawledRestaurant) => void;
  clearCrawledData: () => void;
  // Group ordering actions
  // Initialize or update crawled data for a given group
  setGroupCrawledData: (groupId: string, data: CrawledRestaurant) => void;
  // Change the current active group
  setCurrentGroupId: (groupId: string) => void;
  // Clear current group data
  clearGroup: () => void;
  // Add test data function
  loadTestData: () => void;
}

const useStore = create<Store>((set, get) => ({
  orders: [],
  cart: [],
  crawledData: null,
  groupCrawledData: {},
  currentGroupId: null,
  addOrder: (order: Order) => set((state) => ({ orders: [...state.orders, order] })),
  removeOrder: (orderId: string) => set((state) => ({
    orders: state.orders.filter((order) => order.id !== orderId),
  })),
  updateOrder: (updatedOrder: Order) => set((state) => ({
    orders: state.orders.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    ),
  })),
  addToCart: (item: CartItem) => set((state) => {
    const existingItem = state.cart.find((cartItem) => cartItem.productId === item.productId);
    if (existingItem) {
      // If item already exists, increase quantity
      return {
        cart: state.cart.map((cartItem) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        ),
      };
    } else {
      // Add new item to cart
      return { cart: [...state.cart, item] };
    }
  }),
  removeFromCart: (itemId: string) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== itemId),
  })),
  updateCartItemQuantity: (itemId: string, quantity: number) => set((state) => ({
    cart: state.cart.map((item) =>
      item.id === itemId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter((item) => item.quantity > 0), // Remove items with 0 quantity
  })),
  clearCart: () => set({ cart: [] }),
  getCartTotal: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  getCartItemCount: () => {
    const state = get();
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  },
  setCrawledData: (data: CrawledRestaurant) => {
    const groupId = get().currentGroupId;
    if (groupId) {
      set((state) => ({
        crawledData: data,
        groupCrawledData: { ...state.groupCrawledData, [groupId]: data }
      }));
    } else {
      set({ crawledData: data });
    }
  },
  clearCrawledData: () => set({ crawledData: null }),
  setGroupCrawledData: (groupId: string, data: CrawledRestaurant) =>
    set((state) => ({
      groupCrawledData: { ...state.groupCrawledData, [groupId]: data }
    })),
  setCurrentGroupId: (groupId: string) => {
    set({ currentGroupId: groupId });
    const data = get().groupCrawledData[groupId] || null;
    set({ crawledData: data });
  },
  clearGroup: () => set({ currentGroupId: null, crawledData: null }),
  
  // Load test data to demonstrate image functionality
  loadTestData: () => set({
    crawledData: {
      id: "test-restaurant",
      name: "Test Restaurant - Bánh Mì Bà Đào",
      grabLink: "https://food.grab.com/vn/vi/restaurant/test",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      products: [
        {
          id: "1",
          name: "Bánh Mì Thịt Nướng_25000",
          price: 25000,
          imageUrl: "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023101703130890766/detail/menueditor_item_14caa9ab3aea421b82f2e8ec1d7b0a31_1697535069236749867.webp",
          restaurantId: "test-restaurant"
        },
        {
          id: "2", 
          name: "Cà Phê Sữa Đá_15000",
          price: 15000,
          imageUrl: "https://food.grab.com/static/images/icons/GrabFood/plus-white.svg", // This should show placeholder
          restaurantId: "test-restaurant"
        },
        {
          id: "3",
          name: "Cơm Chiên Dương Châu_35000", 
          price: 35000,
          imageUrl: "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023101703130890766/detail/menueditor_item_2b5f8c7d9e1a432f8c3d4e5f6a7b8c9d_1697535069236749868.webp",
          restaurantId: "test-restaurant"
        },
        {
          id: "4",
          name: "Nước Ép Cam_20000",
          price: 20000,
          imageUrl: "", // This should show placeholder
          restaurantId: "test-restaurant" 
        },
        {
          id: "5",
          name: "Bánh Mì Pate_22000",
          price: 22000,
          imageUrl: "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/VNITE2023101703130890766/detail/menueditor_item_abc123def456_1697535069236749869.webp",
          restaurantId: "test-restaurant"
        }
      ]
    }
  })
}));

export default useStore;