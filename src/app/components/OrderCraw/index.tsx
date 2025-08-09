"use client";
import { useDebounce } from "@/hooks";
import { addToast, Input } from "@heroui/react";
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
      console.log('debouncedValue: ', debouncedValue);
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
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Crawled data:", data);
      
      // Store the crawled data in global state
      setCrawledData(data);
      
      console.log(`Crawl Successful! Found ${data.products?.length || 0} items from ${data.name}`);
      
      // Try to use toast, fallback to console if not available
      try {
        addToast({
          title: "Crawl Successful",
          description: `Found ${data.products?.length || 0} items from ${data.name}`,
          color: "success",
        });
      } catch {
        console.log("Toast not available, using console log instead");
      }
      
      // Navigate to orders page after successful crawl
      setTimeout(() => {
        router.push("/orders");
      }, 1000); // Small delay
      
    } catch (error) {
      console.error("Error during crawling:", error);
      addToast({
        title: "Crawl Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  }, [debouncedValue, router, setCrawledData]);

  useEffect(() => {
    if (!debouncedValue) return;
    handleCraw();
    // Cleanup function to reset loading state
    return () => {
      setIsLoading(false);
    };
  }, [debouncedValue, handleCraw]);


  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
          🍔 Order Together
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Paste a Grab Food restaurant URL to start ordering
        </p>
      </div>
      
      <div className="space-y-4">
        <Input
          isClearable
          className="w-full"
          placeholder="https://food.grab.com/vn/vi/restaurant/..."
          type="url"
          variant="bordered"
          onClear={() => {
            setInputValue("");
          }}
          size="lg"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          disabled={isLoading}
          classNames={{
            input: "text-sm sm:text-base",
            label: "text-sm sm:text-base"
          }}
        />
        {isLoading && (
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            🔄 Crawling restaurant data...
          </p>
        )}
        
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            After crawling, go to{" "}
            <button
              onClick={() => router.push("/orders")}
              className="text-[#6c47ff] hover:underline font-medium"
            >
              Orders page
            </button>{" "}
            to view menu items
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderCraw;
