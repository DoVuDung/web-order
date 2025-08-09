import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Orders",
  description: "View and manage your food orders. Track order status and order history.",
  keywords: ["my orders", "order history", "order tracking", "food delivery"],
};

function MyOrder() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          My Orders
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Your order history will appear here. Start ordering to see your orders!
        </p>
      </div>
    </div>
  )
}

export default MyOrder