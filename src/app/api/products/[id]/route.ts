import { NextResponse } from 'next/server';
import type { Product } from '@/lib/types/product.types';

// Mock data - Replace with your database implementation
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic T-Shirt',
    description: 'A comfortable and stylish t-shirt for everyday wear.',
    category: 'Clothing',
    brand: 'Nike',
    featured: true,
    rating: 4.5,
    reviewCount: 128,
    variants: [
      {
        id: '1-1',
        name: 'Black - S',
        sku: 'TS-BLK-S',
        price: 29.99,
        compareAtPrice: 39.99,
        inventory: 10,
        color: 'Black',
        size: 'S',
        imageUrl: '/images/products/t-shirt-black.jpg',
      },
      {
        id: '1-2',
        name: 'Black - M',
        sku: 'TS-BLK-M',
        price: 29.99,
        compareAtPrice: 39.99,
        inventory: 15,
        color: 'Black',
        size: 'M',
        imageUrl: '/images/products/t-shirt-black.jpg',
      },
    ],
    images: [
      '/images/products/t-shirt-black.jpg',
      '/images/products/t-shirt-black-2.jpg',
    ],
    tags: ['new', 'featured'],
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  // Add more mock products here
];

interface RouteContext {
  params: {
    id: string;
  };
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const product = MOCK_PRODUCTS.find((p) => p.id === context.params.id);

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 