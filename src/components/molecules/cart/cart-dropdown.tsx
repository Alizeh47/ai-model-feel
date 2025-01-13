'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart, CartItem } from '@/lib/hooks/useCart';
import { Button } from '@/components/ui/button/button';
import { formatPrice } from '@/lib/utils/formatting';

export const CartDropdown = () => {
  const { items, total, removeItem } = useCart();

  return (
    <div className="relative group">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingCart className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-navy text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {items.length}
          </span>
        )}
      </Button>
      
      <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-lg rounded-lg hidden group-hover:block z-50">
        {items.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="max-h-96 overflow-auto">
              {items.map((item: CartItem) => (
                <div key={item.id} className="flex items-center p-4 border-b">
                  <div className="relative w-16 h-16">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.quantity} × {formatPrice(item.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <Link href="/checkout">
                <Button className="w-full">Checkout</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}; 