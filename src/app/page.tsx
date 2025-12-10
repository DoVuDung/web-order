import OrderCraw from "./components/OrderCraw";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Order - Food Delivery App",
  description: "Order food online with our easy-to-use web ordering system. Browse restaurants, add items to cart, and place group orders with friends.",
  keywords: ["food delivery", "online ordering", "restaurant", "group orders", "web order"],
};

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 lg:p-24">
      <div className="w-full max-w-4xl">
        <OrderCraw/>
      </div>
    </main>
  );
}
