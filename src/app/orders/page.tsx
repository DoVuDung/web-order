"use client";
import useStore, { Store, CartItem, CrawledProduct } from "@/store/store";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Tab,
  Tabs,
  useDisclosure,
  Badge,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import CartComponent from "@/app/components/Cart";
import { formatVND } from "@/lib/utils";

function OrdersPage() {
  const { isOpen, onOpenChange } = useDisclosure();
  const { 
    isOpen: isCartOpen, 
    onOpen: onCartOpen, 
    onOpenChange: onCartOpenChange 
  } = useDisclosure();
  
  const storeState: Store = useStore((state) => state);
  const { crawledData, addToCart, getCartItemCount, loadTestData } = storeState;
  
  console.log("storeState: ", storeState);
  console.log("crawledData: ", crawledData);
  console.log("crawledData structure:", crawledData ? {
    keys: Object.keys(crawledData),
    name: crawledData.name,
    products: crawledData.products,
    productsLength: crawledData.products?.length
  } : "null");

  function addProductToCart(product: { id: string; name: string; price: number; imageUrl?: string }) {
    if (!crawledData) {
      alert("Restaurant data not available");
      return;
    }

    const cartItem: CartItem = {
      id: `cart_${product.id}_${Date.now()}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      restaurantId: crawledData.id,
      restaurantName: crawledData.name,
      imageUrl: product.imageUrl,
    };
    
    addToCart(cartItem);
    console.log("Product added to cart:", cartItem);
  }

  // Function to categorize products
  const categorizeProducts = (products: CrawledProduct[]) => {
    const categories = {
      'Bánh Mì': [] as CrawledProduct[],
      'Cơm Chiên': [] as CrawledProduct[], 
      'Cà Phê': [] as CrawledProduct[],
      'Nước Ép': [] as CrawledProduct[],
      'Đồ Uống': [] as CrawledProduct[],
      'Khác': [] as CrawledProduct[]
    };

    products.forEach(product => {
      const name = product.name.toLowerCase();
      
      if (name.includes('bánh mì')) {
        categories['Bánh Mì'].push(product);
      } else if (name.includes('cơm chiên')) {
        categories['Cơm Chiên'].push(product);
      } else if (name.includes('cà phê')) {
        categories['Cà Phê'].push(product);
      } else if (name.includes('nước') || name.includes('juice') || name.includes('ép')) {
        categories['Nước Ép'].push(product);
      } else if (name.includes('pepsi') || name.includes('coca') || name.includes('7up') || name.includes('redbull')) {
        categories['Đồ Uống'].push(product);
      } else {
        categories['Khác'].push(product);
      }
    });

    return categories;
  };

  const cartItemCount = getCartItemCount();
  const categorizedProducts = crawledData?.products ? categorizeProducts(crawledData.products) : {};

  const renderProductGrid = (products: CrawledProduct[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          className="border hover:shadow-md transition-shadow cursor-pointer max-w-full"
        >
          {product.imageUrl && 
           !product.imageUrl.includes('plus-white.svg') && 
           !product.imageUrl.includes('placeholder') &&
           product.imageUrl !== '' &&
           product.imageUrl.length > 10 && (
            <div className="relative w-full h-32 sm:h-36 lg:h-40 overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 25vw, 20vw"
                onError={(e) => {
                  console.log('Image failed to load:', product.imageUrl);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          )}
          {/* Fallback placeholder when no image */}
          {(!product.imageUrl || 
            product.imageUrl.includes('plus-white.svg') || 
            product.imageUrl.includes('placeholder') ||
            product.imageUrl === '' ||
            product.imageUrl.length <= 10) && (
            <div className="relative w-full h-32 sm:h-36 lg:h-40 overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-xs text-center">
                🍽️<br />No Image
              </div>
            </div>
          )}
          <CardHeader className="pb-2 px-2 sm:px-3">
            <h3 className="text-xs sm:text-sm font-medium line-clamp-2 leading-tight">
              {product.name.includes('_') 
                ? `${product.name.split('_')[0]} (${product.name.split('_')[1]})` 
                : product.name}
            </h3>
            {/* Debug info - remove in production */}
            {product.imageUrl && (
              <p className="text-xs text-gray-500 truncate mt-1" title={product.imageUrl}>
                IMG: {product.imageUrl.substring(0, 30)}...
              </p>
            )}
          </CardHeader>
          <CardBody className="pt-0 pb-2 px-2 sm:px-3">
            <p className="text-sm sm:text-lg font-bold text-green-600">
              {formatVND(product.price)}
            </p>
          </CardBody>
          <CardFooter className="pt-0 px-2 sm:px-3 pb-2 sm:pb-3">
            <Button 
              size="sm" 
              color="primary" 
              variant="flat"
              onPress={() => addProductToCart(product)}
              className="w-full text-xs sm:text-sm h-8 sm:h-10"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header with Cart Button */}
        <div className="mb-4 gap-4">
          <div className="flex gap-2 items-end">
            {/* Test Data Button */}
            {/* <Button
              color="secondary"
              variant="flat"
              size="sm"
              onPress={loadTestData}
              className="text-xs sm:text-sm"
            >
              Load Test Data
            </Button> */}
            <Badge 
              content={cartItemCount > 0 ? cartItemCount : undefined} 
              color="danger" 
              size="lg"
              isInvisible={cartItemCount === 0}
            >
              <Button
                color="primary"
                variant="flat"
                startContent={<IoCartOutline />}
                onPress={onCartOpen}
                size="sm"
                className="text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Cart</span>
              </Button>
            </Badge>
          </div>
        </div>
        
        <Tabs variant="underlined" className="w-full">
          {crawledData && crawledData.products && crawledData.products.length > 0 ? (
            <>
              {Object.entries(categorizedProducts).map(([category, products]) => {
                const categoryProducts = products as CrawledProduct[];
                return categoryProducts.length > 0 ? (
                  <Tab key={category} title={`${category} (${categoryProducts.length})`}>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold mb-3">{category}</h3>
                      {renderProductGrid(categoryProducts)}
                    </div>
                  </Tab>
                ) : null;
              })}
              
              {/* All Items Tab */}
              <Tab key="all-items" title={`Tất Cả (${crawledData.products.length})`}>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-3">Tất Cả Món Ăn</h3>
                  {renderProductGrid(crawledData.products)}
                </div>
              </Tab>
            </>
          ) : (
            <Tab key="empty" title="Menu">
              <div className="p-4 text-center">
                <p className="text-sm text-gray-500">No menu items available. Please crawl a restaurant first.</p>
              </div>
            </Tab>
          )}
        </Tabs>
      </div>

      {/* Order Details Drawer */}
      <Drawer isOpen={isOpen} placement="right" onOpenChange={onOpenChange}>
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader>Order Details</DrawerHeader>
              <DrawerBody>
                <p>Here you can view and manage your orders.</p>
                <p>
                  {storeState.orders.length > 0
                    ? storeState.orders.map((order) => (
                        <div key={order.id} className="mb-4">
                          <h3 className="font-bold">{order.name}</h3>
                          <p>Quantity: {order.quantity}</p>
                          <p>Price: {order.price} đ</p>
                          <p>Status: {order.status}</p>
                          <Button
                            variant="solid"
                            color="danger"
                            onPress={() => {
                              storeState.removeOrder(order.id);
                            }}
                          >
                            Remove Order
                          </Button>
                        </div>
                      ))
                    : "No orders found."}
                </p>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer 
        isOpen={isCartOpen} 
        placement="right" 
        onOpenChange={onCartOpenChange} 
        size="lg"
        classNames={{
          base: "max-w-full sm:max-w-lg",
          body: "p-2 sm:p-4"
        }}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader>Shopping Cart</DrawerHeader>
              <DrawerBody>
                <CartComponent />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default OrdersPage;
