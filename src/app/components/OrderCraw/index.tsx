"use client";
import { useDebounce } from "@/hooks";
import { addToast, Input, Button } from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/store/store";

type OrderCrawProps = {
  onChange?: (value: string) => void;
};

function OrderCraw({ onChange }: OrderCrawProps) {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setCrawledData } = useStore();

  useEffect(() => {
    if (onChange) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange]);

  const handleCraw = useCallback(async () => {
    if (!debouncedValue) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/craw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: debouncedValue }),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to fetch data");
      }
      
      const data = await response.json();
      
      // Store the crawled data in global state
      setCrawledData(data);
      
      console.log(`✅ Crawl Successful! Found ${data.products?.length || 0} items from ${data.name}`);
      
      // Try to use toast
      try {
        addToast({
          title: "✅ Crawl Successful",
          description: `Found ${data.products?.length || 0} items from ${data.name}`,
          color: "success",
        });
      } catch {
        // Toast not available
      }
      
      // Navigate to orders page
      setTimeout(() => {
        router.push("/orders");
      }, 1000);
      
    } catch (error) {
      console.error("Error during crawling:", error);
      try {
        addToast({
          title: "❌ Crawl Failed",
          description: error instanceof Error ? error.message : "An unknown error occurred",
          color: "danger",
        });
      } catch {
        alert(`❌ Error: ${error instanceof Error ? error.message : "Failed to crawl restaurant"}`);
      }
    } finally {
      setIsLoading(false);
    }
  }, [debouncedValue, router, setCrawledData]);

  useEffect(() => {
    if (!debouncedValue) return;
    handleCraw();
    
    return () => {
      setIsLoading(false);
    };
  }, [debouncedValue, handleCraw]);

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          Paste Restaurant Link
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          From Grab Food or Shopee Food
        </p>
      </div>
      
      <div className="space-y-4">
        <Input
          isClearable
          className="w-full"
          placeholder="https://food.grab.com/vn/vi/restaurant/..."
          type="url"
          variant="bordered"
          onClear={() => setInputValue("")}
          size="lg"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          disabled={isLoading}
          classNames={{
            input: "text-sm sm:text-base",
            label: "text-sm sm:text-base"
          }}
          startContent={
            <span className="text-2xl">🔗</span>
          }
        />
        
        {isLoading && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400"></div>
              <p className="text-sm text-blue-600 dark:text-blue-400">
                Crawling restaurant data...
              </p>
            </div>
          </div>
        )}
        
        <div className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          💡 Tip: After crawling, you can view the menu on the{" "}
          <button
            onClick={() => router.push("/orders")}
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Orders page
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCraw;
