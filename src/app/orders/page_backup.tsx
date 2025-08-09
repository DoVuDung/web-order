"use client";
import useStore, { Order, Store, CartItem } from "@/store/store";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import {
  Button,
  Chip,
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
import { IoAddOutline, IoCartOutline } from "react-icons/io5";
import CartComponent from "@/app/components/Cart";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { 
    isOpen: isCartOpen, 
    onOpen: onCartOpen, 
    onOpenChange: onCartOpenChange 
  } = useDisclosure();
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const storeState: Store = useStore((state) => state);
  const { crawledData, addToCart, getCartItemCount } = storeState;
  
  console.log("storeState: ", storeState);
  console.log("crawledData: ", crawledData);
  console.log("crawledData structure:", crawledData ? {
    keys: Object.keys(crawledData),
    name: crawledData.name,
    products: crawledData.products,
    productsLength: crawledData.products?.length
  } : "null");
  
  function handleAddOrder() {
    const newOrder: Order = {
      id: new Date().toISOString(),
      name: "New Order",
      quantity: 1,
      price: 100,
      status: "pending",
    };
    storeState.addOrder(newOrder);
    console.log("New order added:", newOrder);
  }

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

  const cartItemCount = getCartItemCount();
      quantity: 1,
      price: product.price,
      status: "pending",
    };
    storeState.addOrder(newOrder);
    console.log("Product added to order:", newOrder);
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Order Management</h1>
        
        {/* Show crawled restaurant data if available */}
        {crawledData && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">
              {crawledData.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Found {crawledData.products?.length || 0} items from this restaurant
            </p>
            {(!crawledData.products || crawledData.products.length === 0) && (
              <div className="text-red-600 text-sm mb-4">
                Debug: No products found in crawledData. 
                Data structure: {JSON.stringify(Object.keys(crawledData))}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
              {crawledData.products?.map((product) => (
                <Card key={product.id} className="border hover:shadow-md transition-shadow">
                  {product.imageUrl && (
                    <div className="relative w-full h-32 overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                  </CardHeader>
                  <CardBody className="pt-0 pb-2">
                    <p className="text-lg font-bold text-green-600">
                      {product.price.toLocaleString()} ₫
                    </p>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Button 
                      size="sm" 
                      color="primary" 
                      variant="flat"
                      onPress={() => addProductToOrder(product)}
                      className="w-full"
                    >
                      Add to Order
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <Button 
              size="sm" 
              variant="flat" 
              onPress={() => storeState.clearCrawledData()}
              className="mt-2"
            >
              Clear Restaurant Data
            </Button>
          </div>
        )}
        
        <Tabs variant="underlined">
          <Tab key="orders" title="Orders">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
              <Card
                onClick={() => {
                  console.log("Card pressed");
                  onOpen();
                }}
                className="relative "
              >
                <CardBody className="flex flex-row items-center justify-around">
                  <Image
                    src="/image.png"
                    alt="Order Image"
                    width={150}
                    height={150}
                    style={{ borderRadius: "8px" }}
                  />
                  <div className="">
                    <h3>PHỞ NẠM BÒ VIÊN</h3>
                    <Chip color="warning">Tiết kiệm 1.500 đ</Chip>
                    <h3>58.500</h3>
                  </div>
                </CardBody>
                <CardFooter
                  className="bottom-0 right-0  p-2">
                  <Button
                    variant="solid"
                    onPress={() => {
                      console.log("Add Order Button pressed");
                      onOpen();
                      handleAddOrder();
                    }}
                    isIconOnly
                  >
                    <IoAddOutline />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Tab>
          <Tab key="history" title="History">
            <Card>
              <CardHeader>Order History</CardHeader>
              <CardBody>
                <p>Your past orders will be displayed here.</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="settings" title="Settings">
            <Card>
              <CardHeader>Settings</CardHeader>
              <CardBody>
                <p>Adjust your order settings here.</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="help" title="Help">
            <Card>
              <CardHeader>Help</CardHeader>
              <CardBody>
                <p>Get assistance with your orders here.</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="contact" title="Contact">
            <Card>
              <CardHeader>Contact Us</CardHeader>
              <CardBody>
                <p>Contact support for any issues with your orders.</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="feedback" title="Feedback">
            <Card>
              <CardHeader>Feedback</CardHeader>
              <CardBody>
                <p>Share your feedback about our service.</p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="about" title="About">
            <Card>
              <CardHeader>About Us</CardHeader>
              <CardBody>
                <p>Learn more about our company and services.</p>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>

      <Drawer isOpen={isOpen} placement="right" onOpenChange={onOpenChange}>
        <DrawerContent>
          {(onClose) => (
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
    </>
  );
}

export default page;
