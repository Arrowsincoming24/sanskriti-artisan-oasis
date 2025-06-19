
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TreePine, ShieldCheck, Heart } from 'lucide-react';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: Users,
      value: '1,200+',
      label: 'Artisans Empowered',
      description: 'Across 15 states of India',
      color: 'text-terracotta-600'
    },
    {
      icon: Heart,
      value: '₹50L+',
      label: 'Earnings Generated',
      description: 'Direct to artisan families',
      color: 'text-forest-600'
    },
    {
      icon: TreePine,
      value: '85%',
      label: 'Sustainable Materials',
      description: 'Eco-friendly production',
      color: 'text-forest-600'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Authenticity Guaranteed',
      description: 'Blockchain verified',
      color: 'text-golden-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-terracotta-50 to-golden-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cultural font-bold text-foreground mb-4">
            Creating Positive Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every purchase on SANSKRITI creates a ripple effect of positive change across communities, preserving traditions while supporting sustainable livelihoods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="craft-card text-center">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-4 ${stat.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact story section */}
        <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-cultural font-bold text-foreground mb-4">
                Transparency in Every Transaction
              </h3>
              <p className="text-muted-foreground mb-6">
                See exactly how your purchase creates impact. Our blockchain-powered transparency shows how much goes directly to artisans, covers fair logistics, and supports platform sustainability.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">To Artisan</span>
                  <span className="font-semibold text-forest-600">70%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-forest-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Logistics & Materials</span>
                  <span className="font-semibold text-terracotta-600">20%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-terracotta-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Platform Sustainability</span>
                  <span className="font-semibold text-golden-600">10%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-golden-600 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Artisan community"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
