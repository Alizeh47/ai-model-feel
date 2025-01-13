import React from 'react';
import { motion } from 'framer-motion';

const PlusSignLogo = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <rect x="22" y="8" width="4" height="32" fill="currentColor" />
    <rect
      x="40"
      y="22"
      width="4"
      height="32"
      transform="rotate(90 40 22)"
      fill="currentColor"
    />
  </svg>
);
// ... existing code ...