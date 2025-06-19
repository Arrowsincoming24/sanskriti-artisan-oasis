
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Package, DollarSign, Users, ArrowRight, Truck, Eye } from 'lucide-react';

const ArtisanDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-cultural font-bold text-foreground">Artisan Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Rajesh Kumar</p>
          </div>
          <Button variant="outline">Add New Product</Button>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Products Sold</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">2 pending approval</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customer Rating</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">Based on 89 reviews</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="space-y-4">
          <TabsList>
            <TabsTrigger value="products">Products Sold</TabsTrigger>
            <TabsTrigger value="analytics">Market Analytics</TabsTrigger>
            <TabsTrigger value="profit">Profit Transparency</TabsTrigger>
            <TabsTrigger value="supply">Supply Chain</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>Your latest product sales and orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Handwoven Silk Saree', customer: 'Priya Sharma', amount: '₹8,500', date: '2 days ago' },
                    { name: 'Wooden Jewelry Box', customer: 'Amit Patel', amount: '₹2,200', date: '3 days ago' },
                    { name: 'Brass Tea Set', customer: 'Sarah Johnson', amount: '₹4,800', date: '5 days ago' },
                  ].map((sale, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{sale.name}</p>
                        <p className="text-sm text-muted-foreground">Customer: {sale.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{sale.amount}</p>
                        <p className="text-sm text-muted-foreground">{sale.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                  <CardDescription>Popular categories and seasonal demands</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Textiles & Fabrics</span>
                      <span className="text-green-600">↑ 25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Wooden Crafts</span>
                      <span className="text-green-600">↑ 18%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Metal Works</span>
                      <span className="text-green-600">↑ 12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Customer Demographics</CardTitle>
                  <CardDescription>Your customer base analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Domestic (India)</span>
                      <span>65%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>International</span>
                      <span>35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Repeat Customers</span>
                      <span>42%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profit" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Profit Breakdown</CardTitle>
                <CardDescription>Transparent view of your earnings and platform fees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-4">Last Month's Earnings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Gross Sales</span>
                        <span className="font-medium">₹45,231</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Platform Fee (5%)</span>
                        <span>-₹2,262</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Payment Processing (2%)</span>
                        <span>-₹905</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-green-600">
                        <span>Net Earnings</span>
                        <span>₹42,064</span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Impact Created</h4>
                    <p className="text-sm text-muted-foreground">Your earnings have supported 3 family members and preserved traditional weaving techniques.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="supply" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Tracker</CardTitle>
                <CardDescription>Track your products from creation to delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      order: '#ORD-001',
                      product: 'Handwoven Silk Saree',
                      status: 'Delivered',
                      steps: [
                        { step: 'Raw Material Sourced', date: '15 Mar', completed: true },
                        { step: 'Weaving Started', date: '18 Mar', completed: true },
                        { step: 'Quality Check', date: '25 Mar', completed: true },
                        { step: 'Shipped', date: '28 Mar', completed: true },
                        { step: 'Delivered', date: '30 Mar', completed: true },
                      ]
                    },
                    {
                      order: '#ORD-002',
                      product: 'Wooden Jewelry Box',
                      status: 'In Transit',
                      steps: [
                        { step: 'Wood Preparation', date: '20 Mar', completed: true },
                        { step: 'Carving & Design', date: '22 Mar', completed: true },
                        { step: 'Finishing & Polish', date: '26 Mar', completed: true },
                        { step: 'Shipped', date: '28 Mar', completed: true },
                        { step: 'In Transit', date: 'Expected 2 Apr', completed: false },
                      ]
                    }
                  ].map((order, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="font-medium">{order.product}</h4>
                          <p className="text-sm text-muted-foreground">Order {order.order}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="space-y-3">
                        {order.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${
                              step.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`} />
                            <div className="flex-1 flex justify-between">
                              <span className={step.completed ? 'text-foreground' : 'text-muted-foreground'}>
                                {step.step}
                              </span>
                              <span className="text-sm text-muted-foreground">{step.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ArtisanDashboard;
