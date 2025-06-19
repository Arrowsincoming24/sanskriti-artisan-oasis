
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-terracotta-50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-cultural font-bold text-terracotta-600 mb-4">
              SANSKRITI
            </h3>
            <p className="text-muted-foreground mb-4">
              Empowering traditional artisans and preserving cultural heritage through authentic handcrafted treasures.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-terracotta-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-terracotta-600 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-terracotta-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/marketplace" className="hover:text-terracotta-600 transition-colors">All Products</a></li>
              <li><a href="/textiles" className="hover:text-terracotta-600 transition-colors">Textiles</a></li>
              <li><a href="/pottery" className="hover:text-terracotta-600 transition-colors">Pottery</a></li>
              <li><a href="/jewelry" className="hover:text-terracotta-600 transition-colors">Jewelry</a></li>
              <li><a href="/woodwork" className="hover:text-terracotta-600 transition-colors">Woodwork</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/help" className="hover:text-terracotta-600 transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="hover:text-terracotta-600 transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="hover:text-terracotta-600 transition-colors">Returns</a></li>
              <li><a href="/authenticity" className="hover:text-terracotta-600 transition-colors">Authenticity</a></li>
              <li><a href="/contact" className="hover:text-terracotta-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Impact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/artisans" className="hover:text-terracotta-600 transition-colors">Meet Artisans</a></li>
              <li><a href="/sustainability" className="hover:text-terracotta-600 transition-colors">Sustainability</a></li>
              <li><a href="/community" className="hover:text-terracotta-600 transition-colors">Community Impact</a></li>
              <li><a href="/transparency" className="hover:text-terracotta-600 transition-colors">Transparency</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 SANSKRITI. All rights reserved. Made with ❤️ for artisans.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="/privacy" className="hover:text-terracotta-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-terracotta-600 transition-colors">Terms of Service</a>
            <a href="/blockchain" className="hover:text-terracotta-600 transition-colors">Blockchain Verification</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
