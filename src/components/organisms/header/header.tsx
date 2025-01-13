import React from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex-1 text-center lg:flex-none">
            <Link href="/" className="text-xl font-canela">
              LUXURY STORE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-8">
            <Link href="/products" className="text-text hover:text-accent">
              Products
            </Link>
            <Link href="/collections" className="text-text hover:text-accent">
              Collections
            </Link>
            <Link href="/about" className="text-text hover:text-accent">
              About
            </Link>
          </nav>

          {/* Cart */}
          <div className="flex items-center">
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-white">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-16 w-full bg-primary pb-4 lg:hidden">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="/products" className="text-text hover:text-accent">
                Products
              </Link>
              <Link href="/collections" className="text-text hover:text-accent">
                Collections
              </Link>
              <Link href="/about" className="text-text hover:text-accent">
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 