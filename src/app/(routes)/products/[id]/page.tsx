'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types/product.types';
import { formatCurrency } from '@/lib/utils/formatting';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
        setSelectedVariant(data.variants[0].id);
        setSelectedImage(data.images[0]);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen animate-pulse bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="aspect-square rounded-lg bg-gray-200" />
            <div className="space-y-4">
              <div className="h-8 w-2/3 rounded bg-gray-200" />
              <div className="h-4 w-1/3 rounded bg-gray-200" />
              <div className="h-24 w-full rounded bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-500">Product not found</p>
      </div>
    );
  }

  const currentVariant = product.variants.find((v) => v.id === selectedVariant);

  const handleAddToCart = async () => {
    if (!currentVariant) return;

    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          variantId: currentVariant.id,
          quantity,
        }),
      });

      if (!response.ok) throw new Error('Failed to add to cart');
      
      // Show success message or update cart UI
    } catch (error) {
      console.error('Error adding to cart:', error);
      // Show error message
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={selectedImage || product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`relative aspect-square overflow-hidden rounded-lg ${
                    selectedImage === image
                      ? 'ring-2 ring-indigo-500'
                      : 'hover:opacity-75'
                  }`}
                >
                  <Image
                    src={image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-lg text-gray-500">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < product.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(currentVariant?.price || 0)}
              </p>
              {currentVariant?.compareAtPrice && (
                <p className="text-lg text-gray-500 line-through">
                  {formatCurrency(currentVariant.compareAtPrice)}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-2 text-gray-500">{product.description}</p>
            </div>

            {/* Variants */}
            {product.variants.length > 1 && (
              <div>
                <h2 className="text-lg font-medium text-gray-900">Variants</h2>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`rounded-md border p-2 text-sm ${
                        selectedVariant === variant.id
                          ? 'border-indigo-500 bg-indigo-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h2 className="text-lg font-medium text-gray-900">Quantity</h2>
              <div className="mt-2 flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-md border border-gray-300 p-2 hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-md border border-gray-300 p-2 hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!currentVariant || currentVariant.inventory === 0}
                className="flex flex-1 items-center justify-center space-x-2 rounded-md bg-indigo-600 px-8 py-3 text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="flex items-center justify-center rounded-md border border-gray-300 p-3 hover:bg-gray-50">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Inventory Status */}
            {currentVariant && (
              <p
                className={`text-sm ${
                  currentVariant.inventory > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {currentVariant.inventory > 0
                  ? `${currentVariant.inventory} in stock`
                  : 'Out of stock'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 