'use client';

import { useState } from 'react';
import type { ProductFilters } from '@/lib/types/product.types';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from 'lucide-react';

interface ProductFilterPanelProps {
  initialFilters?: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
  categories: string[];
  brands: string[];
  availableColors: string[];
  availableSizes: string[];
}

export const ProductFilterPanel = ({
  initialFilters,
  onFilterChange,
  categories,
  brands,
  availableColors,
  availableSizes,
}: ProductFilterPanelProps) => {
  const [filters, setFilters] = useState<ProductFilters>(initialFilters || {});

  const handleFilterChange = (
    filterType: keyof ProductFilters,
    value: string | number | string[] | { min: number; max: number }
  ) => {
    const newFilters = { ...filters };

    if (filterType === 'priceRange' && typeof value === 'object' && !Array.isArray(value)) {
      newFilters.priceRange = value;
    } else if (Array.isArray(newFilters[filterType])) {
      const arrayValue = value as string;
      const currentArray = (newFilters[filterType] as string[]) || [];
      if (currentArray.includes(arrayValue)) {
        (newFilters[filterType] as string[]) = currentArray.filter((v) => v !== arrayValue);
      } else {
        (newFilters[filterType] as string[]) = [...currentArray, arrayValue];
      }
    } else if (filterType === 'sortBy') {
      newFilters.sortBy = value as 'price-asc' | 'price-desc' | 'newest' | 'rating';
    } else {
      (newFilters[filterType] as any) = value;
    }

    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const FilterSection = ({
    title,
    items,
    filterType,
  }: {
    title: string;
    items: string[];
    filterType: keyof ProductFilters;
  }) => (
    <Disclosure defaultOpen>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between py-2">
            <span className="text-sm font-medium text-gray-900">{title}</span>
            <ChevronUpIcon
              className={`${
                open ? 'rotate-180 transform' : ''
              } h-5 w-5 text-gray-500`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-2 pb-4">
            {items.map((item) => (
              <label
                key={item}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <input
                  type="checkbox"
                  checked={
                    filters[filterType]
                      ? (filters[filterType] as string[])?.includes(item)
                      : false
                  }
                  onChange={() => handleFilterChange(filterType, item)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{item}</span>
              </label>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  return (
    <div className="space-y-6 divide-y divide-gray-200">
      <FilterSection title="Categories" items={categories} filterType="category" />
      <FilterSection title="Brands" items={brands} filterType="brand" />
      <FilterSection
        title="Colors"
        items={availableColors}
        filterType="colors"
      />
      <FilterSection title="Sizes" items={availableSizes} filterType="sizes" />

      <div className="pt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
        <div className="flex items-center space-x-4">
          <input
            type="number"
            placeholder="Min"
            value={filters.priceRange?.min || ''}
            onChange={(e) =>
              handleFilterChange('priceRange', {
                min: Number(e.target.value),
                max: filters.priceRange?.max || Infinity,
              })
            }
            className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.priceRange?.max || ''}
            onChange={(e) =>
              handleFilterChange('priceRange', {
                min: filters.priceRange?.min || 0,
                max: Number(e.target.value),
              })
            }
            className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Sort By</h3>
        <select
          value={filters.sortBy || ''}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}; 