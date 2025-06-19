
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag, Star } from 'lucide-react';

const FeaturedProducts = () => {
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
      authentic: true,
      sustainable: true,
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
      authentic: true,
      sustainable: true,
      story: 'Made with traditional blue pottery techniques using natural dyes'
    },
    {
      id: 3,
      name: 'Madhubani Painting Canvas',
      artisan: 'Sunita Jha',
      location: 'Madhubani, Bihar',
      price: 2800,
      originalPrice: 3200,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      reviews: 31,
      authentic: true,
      sustainable: false,
      story: 'Traditional Madhubani art celebrating nature and mythology'
    },
    {
      id: 4,
      name: 'Handcrafted Brass Lamp',
      artisan: 'Arjun Sharma',
      location: 'Moradabad, UP',
      price: 1200,
      originalPrice: 1500,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.6,
      reviews: 12,
      authentic: true,
      sustainable: true,
      story: 'Hand-forged brass with intricate traditional patterns'
    }
  ];

  return (
    <section className="py-16 bg-terracotta-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cultural font-bold text-foreground mb-4">
            Featured Treasures
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked authentic creations from master artisans, each piece telling a story of tradition and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="craft-card group">
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
                        Authentic
                      </Badge>
                    )}
                    {product.sustainable && (
                      <Badge className="bg-golden-500 text-white text-xs">
                        Sustainable
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Heart className="h-4 w-4" />
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
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="text-sm text-muted-foreground mb-2">
                    by <span className="text-terracotta-600 font-medium">{product.artisan}</span>
                    <br />
                    <span className="text-xs">{product.location}</span>
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
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {product.story}
                  </p>

                  <Button className="w-full bg-terracotta-600 hover:bg-terracotta-700 text-white">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
