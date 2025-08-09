"use client";
import useStore, { CartItem } from "@/store/store";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button, Chip, Divider } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";
import { openGrabOrder, calculateOrderTotal, validateGrabOrder, type GrabOrder, type GrabOrderItem } from "@/lib/grab/orderUtils";
import { formatVND } from "@/lib/utils";

interface CartComponentProps {
  onClose?: () => void;
}

export default function CartComponent({ }: CartComponentProps) {
  const { 
    cart, 
    crawledData,
    updateCartItemQuantity, 
    removeFromCart, 
    clearCart, 
    getCartTotal,
    getCartItemCount 
  } = useStore();

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateCartItemQuantity(itemId, newQuantity);
    }
  };

  const handleOrderThroughGrab = () => {
    if (!crawledData || cart.length === 0) {
      alert("No items in cart or restaurant data not available");
      return;
    }

    // Convert cart items to Grab order format
    const grabOrderItems: GrabOrderItem[] = cart.map(item => ({
      id: item.productId,
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));

    const grabOrder: GrabOrder = {
      restaurantId: crawledData.id,
      restaurantUrl: crawledData.grabLink,
      items: grabOrderItems,
      totalAmount: calculateOrderTotal(grabOrderItems)
    };

    // Validate order
    const validation = validateGrabOrder(grabOrder);
    if (!validation.isValid) {
      alert(`Order validation failed:\n${validation.errors.join('\n')}`);
      return;
    }

    // Open Grab with the order
    try {
      openGrabOrder(grabOrder);
      
      // Show success message
      alert(`Redirecting to Grab Food...\nRestaurant: ${crawledData.name}\nItems: ${cart.length}\nTotal: ${formatVND(getCartTotal())}`);
      
      // Optionally clear cart after successful order
      // clearCart();
    } catch (error) {
      console.error('Error opening Grab order:', error);
      alert('Failed to open Grab Food. Please try again.');
    }
  };

  const totalAmount = getCartTotal();
  const itemCount = getCartItemCount();

  if (cart.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <h3 className="text-base sm:text-lg font-semibold">Your Cart</h3>
        </CardHeader>
        <CardBody>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4 text-sm sm:text-base">Your cart is empty</p>
            <p className="text-xs sm:text-sm text-gray-400">Add items from the restaurant menu to get started</p>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h3 className="text-base sm:text-lg font-semibold">Your Cart</h3>
          <p className="text-sm text-gray-500">
            {itemCount} item{itemCount !== 1 ? 's' : ''} • {formatVND(totalAmount)}
          </p>
        </div>
        <Button
          size="sm"
          variant="flat"
          color="danger"
          onPress={clearCart}
        >
          Clear All
        </Button>
      </CardHeader>
      <CardBody className="space-y-4">
        {/* Restaurant Info */}
        {crawledData && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-medium text-blue-800">{crawledData.name}</h4>
            <p className="text-xs text-blue-600">Restaurant</p>
          </div>
        )}

        {/* Cart Items */}
        <div className="space-y-3">
          {cart.map((item: CartItem) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 border rounded-lg">
              {item.imageUrl && (
                <div className="relative w-16 h-16 sm:w-12 sm:h-12 overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 64px, 48px"
                  />
                </div>
              )}
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-xs sm:text-sm line-clamp-2">{item.name}</h4>
                <p className="text-green-600 font-semibold text-xs sm:text-sm">{formatVND(item.price)}</p>
              </div>

              <div className="flex items-center gap-1 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <Button
                  size="sm"
                  variant="flat"
                  isIconOnly
                  onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="h-8 w-8 min-w-8"
                >
                  <IoRemoveOutline className="text-sm" />
                </Button>
                
                <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                
                <Button
                  size="sm"
                  variant="flat"
                  isIconOnly
                  onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="h-8 w-8 min-w-8"
                >
                  <IoAddOutline className="text-sm" />
                </Button>
                
                <Button
                  size="sm"
                  variant="flat"
                  color="danger"
                  isIconOnly
                  onPress={() => removeFromCart(item.id)}
                  className="h-8 w-8 min-w-8"
                >
                  <IoTrashOutline />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Order Summary */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm">Subtotal ({itemCount} items)</span>
            <span className="font-medium text-xs sm:text-sm">{formatVND(totalAmount)}</span>
          </div>
          
          <div className="flex justify-between items-center text-sm sm:text-lg font-bold">
            <span>Total</span>
            <span className="text-green-600">{formatVND(totalAmount)}</span>
          </div>
        </div>

        {/* Order Button */}
        <div className="space-y-2 sm:space-y-3">
          <Button
            className="w-full h-10 sm:h-12 text-sm sm:text-base"
            color="primary"
            size="lg"
            onPress={handleOrderThroughGrab}
            disabled={cart.length === 0 || !crawledData}
          >
            Order through Grab Food
          </Button>
          
          {crawledData && (
            <div className="text-center">
              <Chip size="sm" variant="flat" color="success">
                Ordering from {crawledData.name}
              </Chip>
            </div>
          )}
          
          <p className="text-xs text-gray-500 text-center">
            You&apos;ll be redirected to Grab Food app/website to complete your order
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
