'use client';

import { useState } from 'react';
import { ProductGrid } from '@/components/organisms/product-grid/product-grid';
import { ProductFilterPanel } from '@/components/molecules/product-filters/product-filters';
import { Product, ProductFilters as ProductFilterType } from '@/lib/types/product.types';

const MOCK_CATEGORIES = ['Clothing', 'Shoes', 'Accessories', 'Sportswear'];
const MOCK_BRANDS = ['Nike', 'Adidas', 'Puma', 'Under Armour'];
const MOCK_COLORS = ['Black', 'White', 'Red', 'Blue', 'Green'];
const MOCK_SIZES = ['XS', 'S', 'M', 'L', 'XL'];

export default function ProductsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<ProductFilterType>({});

  const handleFilterChange = async (newFilters: ProductFilterType) => {
    setIsLoading(true);
    setFilters(newFilters);

    try {
      // Convert filters to query params
      const params = new URLSearchParams();
      Object.entries(newFilters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else if (value !== undefined) {
          params.append(key, value.toString());
        }
      });

      // Fetch filtered products
      const response = await fetch(`/api/products?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Handle error state here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="pb-24 pt-6">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {/* Filters */}
          <div className="hidden lg:block">
            <h2 className="sr-only">Product filters</h2>
            <ProductFilterPanel
              initialFilters={filters}
              onFilterChange={handleFilterChange}
              categories={MOCK_CATEGORIES}
              brands={MOCK_BRANDS}
              availableColors={MOCK_COLORS}
              availableSizes={MOCK_SIZES}
            />
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={products} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
} 