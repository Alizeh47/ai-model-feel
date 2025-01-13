import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative overflow-hidden">
    <Image
      src={src}
      alt={alt}
      width={400}
      height={500}
      className="object-cover"
    />
    <p className="absolute bottom-4 left-4 text-sm font-medium tracking-wider text-white">
      ADVANCED SWEATER
    </p>
  </div>
);

const GallerySection = () => {
  return (
    <section className="bg-[#F5F5F0] py-24">
      <div className="container mx-auto px-4">
        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl font-medium leading-tight md:text-5xl lg:text-6xl">
            We are a tailoring company where incredible tailoring is the by-product
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GalleryImage
              src="/images/motorcycle-desert.jpg"
              alt="Motorcyclist in desert"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GalleryImage
              src="/images/mountain-climber.jpg"
              alt="Mountain climber"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GalleryImage
              src="/images/wheat-field.jpg"
              alt="Person in wheat field"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection; 