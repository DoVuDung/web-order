import OrderCraw from "./components/OrderCraw";
import type { Metadata } from "next";
import { Card, CardBody } from "@heroui/react";

export const metadata: Metadata = {
  title: "Web Order - Food Delivery App",
  description: "Order food online with our easy-to-use web ordering system. Browse restaurants, add items to cart, and place group orders with friends.",
  keywords: ["food delivery", "online ordering", "restaurant", "group orders", "web order"],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 lg:p-12">
      <div className="w-full max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Order Together 🍔
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create group orders with friends and colleagues. Share the cost, enjoy together!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="glass-effect">
            <CardBody className="text-center p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Easy Ordering</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Paste any Grab Food or Shopee Food link to start
              </p>
            </CardBody>
          </Card>

          <Card className="glass-effect">
            <CardBody className="text-center p-6">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-semibold text-lg mb-2">Group Orders</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Invite friends with a simple group ID
              </p>
            </CardBody>
          </Card>

          <Card className="glass-effect">
            <CardBody className="text-center p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-lg mb-2">Split Payments</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track who paid with bank transfer verification
              </p>
            </CardBody>
          </Card>
        </div>

        {/* Order Craw Component */}
        <Card className="glass-effect">
          <CardBody className="p-6 sm:p-8">
            <OrderCraw />
          </CardBody>
        </Card>

        {/* Info Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Supported platforms: <span className="font-semibold">Grab Food</span> • <span className="font-semibold">Shopee Food</span>
          </p>
        </div>
      </div>
    </main>
  );
}
