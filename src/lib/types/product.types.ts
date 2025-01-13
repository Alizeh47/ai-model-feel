export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  inventory: number;
  color?: string;
  size?: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
  variants: ProductVariant[];
  images: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  category?: string[];
  brand?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  colors?: string[];
  sizes?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'newest' | 'rating';
}

export interface ProductSearchParams extends ProductFilters {
  query?: string;
  page: number;
  limit: number;
} 