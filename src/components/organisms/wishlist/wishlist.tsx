'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button/button';
import { useCart } from '@/lib/hooks/useCart';
import { formatPrice } from '@/lib/utils/formatting';

type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

const mockWishlist: WishlistItem[] = [
  {
    id: 'WISH-1',
    name: 'Premium Winter Jacket',
    price: 299.99,
    image: '/images/products/jacket-2.jpg',
    description: 'Warm and stylish winter jacket perfect for outdoor adventures.'
  }
  // Add more mock items as needed
];

export const Wishlist = () => {
  const [items, setItems] = useState<WishlistItem[]>(mockWishlist);
  const [isLoading, setIsLoading] = useState(false);
  const { addItem } = useCart();

  const removeFromWishlist = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const moveToCart = (item: WishlistItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image
    });
    removeFromWishlist(item.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-2 mb-6">
        <Heart className="w-6 h-6 text-red-500" />
        <h2 className="text-2xl font-canela">My Wishlist</h2>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
              <div className="aspect-square bg-gray-200 rounded mb-4" />
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white p-6 rounded-lg shadow-sm group"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                
                <h3 className="font-medium mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium">{formatPrice(item.price)}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => moveToCart(item)}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}

      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-gray-500">
            Start adding items you love to your wishlist
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}; 