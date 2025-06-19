
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-cultural font-bold text-terracotta-600">
              SANSKRITI
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-700 hover:text-terracotta-600 transition-colors">
              Marketplace
            </Link>
            <Link to="/artisans" className="text-gray-700 hover:text-terracotta-600 transition-colors">
              Artisans
            </Link>
            <Link to="/impact" className="text-gray-700 hover:text-terracotta-600 transition-colors">
              Impact
            </Link>
            <Link to="/learn" className="text-gray-700 hover:text-terracotta-600 transition-colors">
              Learn
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-terracotta-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
