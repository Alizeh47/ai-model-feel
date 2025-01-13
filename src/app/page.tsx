import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/banners/hero.jpg"
            alt="Winter collection hero image"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="font-serif text-[64px] leading-[72px] mb-6">
            FEEL GOOD
          </h1>
          <p className="font-serif text-[32px] leading-[40px] mb-8">
            CLASSY TRENDY MODERN
          </p>
          {/* Barcode Element */}
          <div className="w-48 h-16 mb-8">
            <Image
              src="/images/ui/barcode.svg"
              alt="Barcode design element"
              width={192}
              height={64}
            />
          </div>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            SHOP NOW
          </Button>
        </div>
      </section>

      {/* Latest Collection */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-[48px] leading-[56px] text-center mb-12">
            Latest Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection Items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden">
                <Image
                  src={`/images/products/winter-${item}.jpg`}
                  alt={`Winter collection item ${item}`}
                  width={400}
                  height={600}
                  className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white">
                    View Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-[48px] leading-[56px] text-center mb-12">
            Best Selling Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Cards */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden mb-4">
                  <Image
                    src={`/images/products/jacket-${item}.jpg`}
                    alt={`Winter jacket ${item}`}
                    width={400}
                    height={500}
                    className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xl mb-2">Winter Jacket {item}</h3>
                <p className="text-lg font-medium">$299.99</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-navy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-[32px] leading-[40px] mb-6">
            Stay Updated
          </h2>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="outline" className="text-white border-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 