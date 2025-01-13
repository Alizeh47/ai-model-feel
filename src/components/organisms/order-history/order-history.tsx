'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Package } from 'lucide-react';
import { formatPrice } from '@/lib/utils/formatting';

type Order = {
  id: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
  total: number;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
};

const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-02-20',
    status: 'delivered',
    total: 299.97,
    items: [
      {
        id: 'PROD-1',
        name: 'Winter Jacket',
        price: 199.99,
        quantity: 1,
        image: '/images/products/jacket-1.jpg'
      },
      {
        id: 'PROD-2',
        name: 'Wool Scarf',
        price: 49.99,
        quantity: 2,
        image: '/images/products/scarf-1.jpg'
      }
    ]
  }
  // Add more mock orders as needed
];

export const OrderHistory = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'processing':
        return 'text-blue-600';
      case 'shipped':
        return 'text-orange-600';
      case 'delivered':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-canela mb-6">Order History</h2>

      {isLoading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <motion.div
              key={order.id}
              layout
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedOrder(
                  expandedOrder === order.id ? null : order.id
                )}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    <span className="font-medium">Order {order.id}</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`text-sm ${getStatusColor(order.status)} capitalize`}>
                    {order.status}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedOrder === order.id ? 180 : 0 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedOrder === order.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t">
                      <div className="space-y-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4">
                            <div className="relative w-16 h-16">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{item.name}</h4>
                              <p className="text-sm text-gray-500">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                            <p className="font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t">
                        <span className="font-medium">Total</span>
                        <span className="font-medium">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}; 