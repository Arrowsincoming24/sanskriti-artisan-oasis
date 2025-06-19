
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, ShoppingBag, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-terracotta-50 to-golden-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-cultural font-bold text-terracotta-600 mb-6">
            SANSKRITI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect traditional artisans with global customers through our transparent marketplace platform
          </p>
          
          {/* Login Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            {/* Artisan Login */}
            <Card className="craft-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-terracotta-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-terracotta-600" />
                </div>
                <CardTitle className="text-2xl font-cultural">For Artisans</CardTitle>
                <CardDescription className="text-base">
                  Showcase your crafts, track sales, and grow your business
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4" />
                    <span>Analytics Dashboard</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Profit Transparency</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4" />
                    <span>Supply Chain Tracking</span>
                  </div>
                </div>
                <Link to="/artisan-login">
                  <Button className="w-full bg-terracotta-600 hover:bg-terracotta-700">
                    Login as Artisan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Customer Login */}
            <Card className="craft-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-forest-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-forest-600" />
                </div>
                <CardTitle className="text-2xl font-cultural">For Customers</CardTitle>
                <CardDescription className="text-base">
                  Discover authentic crafts and support traditional artisans
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Curated Marketplace</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure Payments</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-4 w-4" />
                    <span>Order Tracking</span>
                  </div>
                </div>
                <Link to="/customer-login">
                  <Button className="w-full bg-forest-600 hover:bg-forest-700">
                    Login as Customer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-golden-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Shield className="h-8 w-8 text-golden-600" />
            </div>
            <h3 className="text-xl font-cultural font-semibold mb-2">Transparent Trading</h3>
            <p className="text-muted-foreground">Full visibility into pricing, profits, and supply chain for fair trade practices</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-cultural font-semibold mb-2">Market Analytics</h3>
            <p className="text-muted-foreground">Real-time insights and analytics to help artisans grow their business</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 bg-forest-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Users className="h-8 w-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-cultural font-semibold mb-2">Community First</h3>
            <p className="text-muted-foreground">Empowering traditional artisan communities through technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
