import OrderCraw from "./components/OrderCraw";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 sm:p-8 lg:p-24">
      <div className="w-full max-w-4xl">
        <OrderCraw/>
      </div>
    </main>
  );
}
