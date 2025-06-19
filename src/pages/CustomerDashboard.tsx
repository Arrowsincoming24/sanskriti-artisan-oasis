
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingBag, CreditCard, Truck, Clock, Star, Package } from 'lucide-react';

const CustomerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-cultural font-bold text-foreground">Customer Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Sarah Johnson</p>
          </div>
          <Button className="bg-forest-600 hover:bg-forest-700">Continue Shopping</Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹28,450</div>
              <p className="text-xs text-muted-foreground">Supporting 8 artisans</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">In transit</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">2 back in stock</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-4">
          <TabsList>
            <TabsTrigger value="orders">Order Timeline</TabsTrigger>
            <TabsTrigger value="products">Product Details</TabsTrigger>
            <TabsTrigger value="payments">Payment History</TabsTrigger>
            <TabsTrigger value="tracking">Supply Chain</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
                <CardDescription>Track all your orders and their current status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      orderId: '#ORD-1234',
                      product: 'Handwoven Silk Saree',
                      artisan: 'Rajesh Kumar',
                      amount: '₹8,500',
                      status: 'Delivered',
                      date: '2024-03-30',
                      timeline: [
                        { step: 'Order Placed', date: '25 Mar', time: '10:30 AM', completed: true },
                        { step: 'Artisan Confirmed', date: '25 Mar', time: '02:15 PM', completed: true },
                        { step: 'In Production', date: '26 Mar', time: '09:00 AM', completed: true },
                        { step: 'Quality Check', date: '28 Mar', time: '03:30 PM', completed: true },
                        { step: 'Shipped', date: '29 Mar', time: '11:45 AM', completed: true },
                        { step: 'Delivered', date: '30 Mar', time: '04:20 PM', completed: true },
                      ]
                    },
                    {
                      orderId: '#ORD-1235',
                      product: 'Wooden Jewelry Box',
                      artisan: 'Meera Devi',
                      amount: '₹2,200',
                      status: 'In Transit',
                      date: '2024-04-01',
                      timeline: [
                        { step: 'Order Placed', date: '28 Mar', time: '02:15 PM', completed: true },
                        { step: 'Artisan Confirmed', date: '28 Mar', time: '05:30 PM', completed: true },
                        { step: 'In Production', date: '29 Mar', time: '10:00 AM', completed: true },
                        { step: 'Quality Check', date: '01 Apr', time: '01:45 PM', completed: true },
                        { step: 'Shipped', date: '01 Apr', time: '06:30 PM', completed: true },
                        { step: 'In Transit', date: 'Expected 3 Apr', time: '', completed: false },
                      ]
                    }
                  ].map((order, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="font-medium text-lg">{order.product}</h4>
                          <p className="text-sm text-muted-foreground">
                            {order.orderId} • Artisan: {order.artisan}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{order.amount}</p>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {order.timeline.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center space-x-4">
                            <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                              step.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`} />
                            <div className="flex-1 flex justify-between items-center">
                              <span className={step.completed ? 'text-foreground' : 'text-muted-foreground'}>
                                {step.step}
                              </span>
                              <div className="text-sm text-muted-foreground">
                                {step.date} {step.time && `• ${step.time}`}
                              </div>
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

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Detailed information about your purchased items</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Handwoven Silk Saree',
                      artisan: 'Rajesh Kumar',
                      location: 'Varanasi, Uttar Pradesh',
                      technique: 'Traditional Banarasi Weaving',
                      materials: 'Pure Mulberry Silk, Gold Zari',
                      story: 'This saree represents 300 years of family weaving tradition passed down through generations.',
                      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=300&fit=crop'
                    },
                    {
                      name: 'Wooden Jewelry Box',
                      artisan: 'Meera Devi',
                      location: 'Saharanpur, Uttar Pradesh',
                      technique: 'Hand Carving and Inlay Work',
                      materials: 'Sheesham Wood, Brass Inlay',
                      story: 'Crafted using traditional tools and techniques that have been preserved for over 400 years.',
                      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
                    }
                  ].map((product, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex gap-6">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-32 h-32 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-lg mb-2">{product.name}</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Artisan:</span>
                              <p className="font-medium">{product.artisan}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Location:</span>
                              <p className="font-medium">{product.location}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Technique:</span>
                              <p className="font-medium">{product.technique}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Materials:</span>
                              <p className="font-medium">{product.materials}</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <span className="text-muted-foreground">Artisan Story:</span>
                            <p className="text-sm mt-1">{product.story}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Secure payment transactions and receipts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      orderId: '#ORD-1234',
                      date: '30 Mar 2024',
                      amount: '₹8,500',
                      method: 'UPI (GPay)',
                      status: 'Completed',
                      breakdown: {
                        productCost: '₹8,000',
                        shipping: '₹200',
                        platformFee: '₹300',
                        total: '₹8,500'
                      }
                    },
                    {
                      orderId: '#ORD-1235',
                      date: '28 Mar 2024',
                      amount: '₹2,200',
                      method: 'Credit Card',
                      status: 'Completed',
                      breakdown: {
                        productCost: '₹2,000',
                        shipping: '₹100',
                        platformFee: '₹100',
                        total: '₹2,200'
                      }
                    }
                  ].map((payment, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="font-medium">Order {payment.orderId}</h4>
                          <p className="text-sm text-muted-foreground">{payment.date} • {payment.method}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-lg">{payment.amount}</p>
                          <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                            {payment.status}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Product Cost</span>
                          <span>{payment.breakdown.productCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>{payment.breakdown.shipping}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Platform Fee</span>
                          <span>{payment.breakdown.platformFee}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-medium">
                          <span>Total</span>
                          <span>{payment.breakdown.total}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tracking" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Supply Chain Transparency</CardTitle>
                <CardDescription>Complete journey of your products from artisan to your doorstep</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-6">
                    <h4 className="font-medium mb-4">Handwoven Silk Saree - Order #ORD-1234</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Raw Material Sourcing</h5>
                          <p className="text-sm text-muted-foreground">Pure mulberry silk from local farmers</p>
                        </div>
                        <span className="text-xs text-muted-foreground">15 Mar 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Artisan Workshop</h5>
                          <p className="text-sm text-muted-foreground">Traditional loom weaving by Rajesh Kumar</p>
                        </div>
                        <span className="text-xs text-muted-foreground">18-25 Mar 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Quality Assurance</h5>
                          <p className="text-sm text-muted-foreground">Sanskriti platform verification</p>
                        </div>
                        <span className="text-xs text-muted-foreground">26 Mar 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Packaging & Dispatch</h5>
                          <p className="text-sm text-muted-foreground">Eco-friendly packaging, shipped via BlueDart</p>
                        </div>
                        <span className="text-xs text-muted-foreground">28 Mar 2024</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <h5 className="font-medium">Delivered</h5>
                          <p className="text-sm text-muted-foreground">Successfully delivered to customer</p>
                        </div>
                        <span className="text-xs text-muted-foreground">30 Mar 2024</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">Impact Created</h5>
                      <p className="text-sm text-green-700">
                        Your purchase supported Rajesh Kumar's family of 4 and helped preserve the 300-year-old Banarasi weaving tradition.
                        Approximately 35% of the sale value went directly to the artisan.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CustomerDashboard;
