
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Award, Calendar } from 'lucide-react';

const FeaturedArtisans = () => {
  const artisans = [
    {
      id: 1,
      name: 'Ravi Kumar',
      specialty: 'Banarasi Weaving',
      location: 'Varanasi, Uttar Pradesh',
      experience: '25 years',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      story: 'Master weaver carrying forward 5 generations of silk weaving tradition',
      products: 23,
      earnings: '₹2.5L',
      rating: 4.9,
      verified: true
    },
    {
      id: 2,
      name: 'Meera Devi',
      specialty: 'Blue Pottery',
      location: 'Jaipur, Rajasthan',
      experience: '18 years',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      story: 'Renowned for reviving traditional blue pottery techniques',
      products: 31,
      earnings: '₹3.1L',
      rating: 4.8,
      verified: true
    },
    {
      id: 3,
      name: 'Sunita Jha',
      specialty: 'Madhubani Painting',
      location: 'Madhubani, Bihar',
      experience: '22 years',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      story: 'Award-winning artist preserving ancient Mithila art traditions',
      products: 45,
      earnings: '₹1.8L',
      rating: 4.7,
      verified: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cultural font-bold text-foreground mb-4">
            Meet Our Master Artisans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with the skilled craftspeople behind each creation. Every purchase directly supports their livelihood and preserves traditional arts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisans.map((artisan) => (
            <Card key={artisan.id} className="craft-card group">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-full overflow-hidden mx-auto w-32 h-32">
                    <img
                      src={artisan.image}
                      alt={artisan.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {artisan.verified && (
                    <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 translate-y-1/2">
                      <Badge className="bg-forest-500 text-white">
                        <Award className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {artisan.name}
                  </h3>
                  <p className="text-terracotta-600 font-medium mb-1">
                    {artisan.specialty}
                  </p>
                  <div className="flex items-center justify-center text-muted-foreground text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {artisan.location}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm text-center mb-6">
                  {artisan.story}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-foreground">
                      {artisan.products}
                    </div>
                    <div className="text-xs text-muted-foreground">Products</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-forest-600">
                      {artisan.earnings}
                    </div>
                    <div className="text-xs text-muted-foreground">Earned</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-golden-600">
                      {artisan.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  {artisan.experience} of experience
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50">
                    View Profile
                  </Button>
                  <Button className="flex-1 bg-terracotta-600 hover:bg-terracotta-700 text-white">
                    Shop Work
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50">
            Meet All Artisans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisans;
