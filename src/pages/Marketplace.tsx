
import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, Filter, Grid, List, Heart, ShoppingCart, Star, MapPin, Award, Eye } from 'lucide-react';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All Products', count: 1247 },
    { id: 'textiles', name: 'Textiles & Fabrics', count: 342 },
    { id: 'pottery', name: 'Pottery & Ceramics', count: 156 },
    { id: 'jewelry', name: 'Jewelry & Accessories', count: 289 },
    { id: 'woodcraft', name: 'Wood & Metal Craft', count: 98 },
    { id: 'paintings', name: 'Paintings & Art', count: 167 },
    { id: 'home-decor', name: 'Home Decor', count: 195 }
  ];

  const products = [
    {
      id: 1,
      name: 'Handwoven Banarasi Silk Saree',
      artisan: 'Ravi Kumar',
      location: 'Varanasi, UP',
      price: 15000,
      originalPrice: 18000,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      reviews: 24,
      category: 'textiles',
      authentic: true,
      sustainable: true,
      giTag: 'Banarasi Silk',
      inStock: true,
      quickDelivery: false,
      story: 'Crafted using traditional handloom techniques passed down through generations'
    },
    {
      id: 2,
      name: 'Blue Pottery Decorative Vase',
      artisan: 'Meera Devi',
      location: 'Jaipur, Rajasthan',
      price: 3500,
      originalPrice: 4200,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      reviews: 18,
      category: 'pottery',
      authentic: true,
      sustainable: true,
      giTag: 'Blue Pottery',
      inStock: true,
      quickDelivery: true,
      story: 'Made with traditional blue pottery techniques using natural dyes'
    },
    // ... more products would go here
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-r from-terracotta-50 to-golden-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-cultural font-bold text-foreground mb-4">
              Authentic Indian Crafts Marketplace
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover handcrafted treasures from master artisans across India. Every purchase supports traditional craftsmanship and artisan livelihoods.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search for products, artisans, or crafts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              <div className="flex gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="h-12">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Price Range</DropdownMenuItem>
                    <DropdownMenuItem>Authentic Only</DropdownMenuItem>
                    <DropdownMenuItem>Sustainable Only</DropdownMenuItem>
                    <DropdownMenuItem>Quick Delivery</DropdownMenuItem>
                    <DropdownMenuItem>GI Tagged</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-terracotta-100 text-terracotta-700'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Traditional Craft Regions */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">By Region</h4>
                <div className="space-y-2">
                  {['Rajasthan', 'Gujarat', 'Uttar Pradesh', 'West Bengal', 'Karnataka', 'Tamil Nadu'].map(region => (
                    <button key={region} className="w-full text-left text-sm px-3 py-2 rounded-md hover:bg-gray-50">
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Special Features</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">GI Tagged</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Sustainable</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Quick Delivery</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">Customizable</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Supporting {filteredProducts.length} artisans
                </span>
              </div>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className="craft-card group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col space-y-2">
                        {product.authentic && (
                          <Badge className="bg-forest-500 text-white text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Authentic
                          </Badge>
                        )}
                        {product.sustainable && (
                          <Badge className="bg-golden-500 text-white text-xs">
                            Sustainable
                          </Badge>
                        )}
                        {product.giTag && (
                          <Badge className="bg-purple-500 text-white text-xs">
                            GI Tagged
                          </Badge>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Discount */}
                      {product.originalPrice > product.price && (
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-terracotta-500 text-white">
                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                          </Badge>
                        </div>
                      )}

                      {/* Stock Status */}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <Badge variant="destructive">Out of Stock</Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <span className="text-terracotta-600 font-medium">by {product.artisan}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {product.location}
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating)
                                  ? 'text-golden-500 fill-golden-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-foreground">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        {product.quickDelivery && (
                          <Badge variant="outline" className="text-xs">
                            Quick Delivery
                          </Badge>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                        {product.story}
                      </p>

                      <div className="flex space-x-2">
                        <Button 
                          className="flex-1 bg-terracotta-600 hover:bg-terracotta-700 text-white"
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                        <Button variant="outline" size="icon">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-terracotta-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-terracotta-600 mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Verified Artisans</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-forest-600 mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-golden-600 mb-2">₹2Cr+</div>
              <div className="text-sm text-muted-foreground">Earned by Artisans</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Authentic Products</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
