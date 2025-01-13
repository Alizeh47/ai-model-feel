import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-oceanside.jpg"
          alt="Person in black coat against oceanside"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
      </div>

      {/* Staggered Typography */}
      <div className="relative z-10 flex h-full flex-col items-start justify-center px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            <span className="block">CLASSY</span>
            <span className="block pl-24">TRENDY</span>
            <span className="block pl-48">MODERN</span>
          </h1>
          <p className="max-w-md text-lg text-white/90">
            We've partnered with the finest Italian and New York manufacturers to ensure the highest quality in our products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 