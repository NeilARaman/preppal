import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center text-2xl font-bold">
            <span className="text-gray-900">Prep</span>
            <span className="text-primary-500">Pal</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="/login" className="btn-outline">Log In</a>
            <a href="/get-started" className="btn-primary">Get Started</a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block px-4 py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#testimonials" className="block px-4 py-2 text-gray-600 hover:text-gray-900">Testimonials</a>
            <div className="px-4 pt-4 space-y-2">
              <a href="/login" className="block w-full btn-outline text-center">Log In</a>
              <a href="/get-started" className="block w-full btn-primary text-center">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 