
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CraftCategories = () => {
  const categories = [
    {
      name: 'Textiles & Fabrics',
      description: 'Handwoven sarees, block prints, embroidery',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: '250+ items'
    },
    {
      name: 'Pottery & Ceramics',
      description: 'Traditional clay work and modern designs',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: '120+ items'
    },
    {
      name: 'Jewelry & Accessories',
      description: 'Silver, brass, and traditional ornaments',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: '180+ items'
    },
    {
      name: 'Wood & Metal Craft',
      description: 'Carved furniture, decorative items',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      count: '95+ items'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cultural font-bold text-foreground mb-4">
            Explore Craft Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic creations from different regions of India, each telling a unique story of tradition and skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={category.name} className="craft-card group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-terracotta-600 font-medium">
                      {category.count}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      View All →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CraftCategories;
