import { NextResponse } from 'next/server';
import type { Product, ProductSearchParams } from '@/lib/types/product.types';

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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const params: ProductSearchParams = {
      query: searchParams.get('query') || undefined,
      category: searchParams.getAll('category'),
      brand: searchParams.getAll('brand'),
      colors: searchParams.getAll('colors'),
      sizes: searchParams.getAll('sizes'),
      sortBy: searchParams.get('sortBy') as ProductSearchParams['sortBy'],
      page: Number(searchParams.get('page')) || 1,
      limit: Number(searchParams.get('limit')) || 12,
    };

    if (searchParams.has('priceRange.min') || searchParams.has('priceRange.max')) {
      params.priceRange = {
        min: Number(searchParams.get('priceRange.min')) || 0,
        max: Number(searchParams.get('priceRange.max')) || Infinity,
      };
    }

    // Filter products based on search parameters
    let filteredProducts = [...MOCK_PRODUCTS];

    // Apply text search
    if (params.query) {
      const searchRegex = new RegExp(params.query, 'i');
      filteredProducts = filteredProducts.filter(
        (product) =>
          searchRegex.test(product.name) ||
          searchRegex.test(product.description) ||
          searchRegex.test(product.brand)
      );
    }

    // Apply category filter
    const categories = params.category || [];
    if (categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categories.includes(product.category)
      );
    }

    // Apply brand filter
    const brands = params.brand || [];
    if (brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        brands.includes(product.brand)
      );
    }

    // Apply color filter
    const colors = params.colors || [];
    if (colors.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.variants.some((variant) =>
          colors.includes(variant.color || '')
        )
      );
    }

    // Apply size filter
    const sizes = params.sizes || [];
    if (sizes.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.variants.some((variant) =>
          sizes.includes(variant.size || '')
        )
      );
    }

    // Apply price range filter
    if (params.priceRange) {
      filteredProducts = filteredProducts.filter((product) =>
        product.variants.some(
          (variant) =>
            variant.price >= params.priceRange!.min &&
            variant.price <= params.priceRange!.max
        )
      );
    }

    // Apply sorting
    if (params.sortBy) {
      filteredProducts.sort((a, b) => {
        switch (params.sortBy) {
          case 'price-asc':
            return (
              Math.min(...a.variants.map((v) => v.price)) -
              Math.min(...b.variants.map((v) => v.price))
            );
          case 'price-desc':
            return (
              Math.max(...b.variants.map((v) => v.price)) -
              Math.max(...a.variants.map((v) => v.price))
            );
          case 'newest':
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          case 'rating':
            return (b.rating || 0) - (a.rating || 0);
          default:
            return 0;
        }
      });
    }

    // Apply pagination
    const startIndex = (params.page - 1) * params.limit;
    const endIndex = startIndex + params.limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return NextResponse.json({
      products: paginatedProducts,
      total: filteredProducts.length,
      page: params.page,
      totalPages: Math.ceil(filteredProducts.length / params.limit),
    });
  } catch (error) {
    console.error('Error processing products request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 