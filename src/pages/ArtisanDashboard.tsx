
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  TrendingUp, Package, DollarSign, Users, Upload, BookOpen, 
  Award, Truck, Camera, MapPin, Star, Volume2, Gift,
  Coins, Leaf, Target, Clock, CheckCircle, AlertCircle,
  Trophy, Medal, Shield, Zap
} from 'lucide-react';

const ArtisanDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setUploadedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🧵</span>
              </div>
              <div>
                <h1 className="text-3xl font-cultural font-bold text-foreground">राजेश कुमार</h1>
                <p className="text-muted-foreground flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Kutch, Gujarat • Master Weaver
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Badge className="bg-golden-100 text-golden-800">GI Certified</Badge>
              <Badge className="bg-green-100 text-green-800">Eco Champion</Badge>
            </div>
          </div>
          <Button variant="outline" className="flex items-center">
            <Volume2 className="h-4 w-4 mr-2" />
            Voice Guide
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹45,231</div>
              <p className="text-xs text-green-600">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">5 pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-green-600">12 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.9</div>
              <p className="text-xs text-muted-foreground">★★★★★</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="craft-upload" className="space-y-4">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="craft-upload">Upload Craft</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
          </TabsList>

          {/* Craft Upload Tool */}
          <TabsContent value="craft-upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Craft Upload Tool
                </CardTitle>
                <CardDescription>Upload your craft with AI-powered categorization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="craft-upload"
                  />
                  <label htmlFor="craft-upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <img src={uploadedImage} alt="Uploaded craft" className="max-w-xs mx-auto rounded-lg" />
                    ) : (
                      <>
                        <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <p className="text-lg font-medium">Drag & drop your craft photos</p>
                        <p className="text-muted-foreground">or click to browse</p>
                      </>
                    )}
                  </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Craft Name</Label>
                    <Input placeholder="e.g., Handwoven Silk Saree" />
                  </div>
                  <div className="space-y-2">
                    <Label>Category (AI Suggested)</Label>
                    <Input value="Textiles → Sarees → Silk" disabled className="bg-muted" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Craft Story Builder */}
            <Card>
              <CardHeader>
                <CardTitle>Craft Story Builder</CardTitle>
                <CardDescription>Tell the story behind your craft</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Materials Used</Label>
                    <Textarea placeholder="Pure silk threads, natural dyes..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Crafting Process</Label>
                    <Textarea placeholder="Hand-spun threads, traditional loom..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Cultural Tradition</Label>
                    <Textarea placeholder="Passed down through 5 generations..." />
                  </div>
                </div>
                <Button className="w-full">Generate Story with AI</Button>
              </CardContent>
            </Card>

            {/* Pricing Assistant */}
            <Card>
              <CardHeader>
                <CardTitle>Smart Pricing Assistant</CardTitle>
                <CardDescription>Get AI-powered pricing suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label>Labor Hours</Label>
                    <Input type="number" placeholder="120" />
                  </div>
                  <div className="space-y-2">
                    <Label>Material Cost</Label>
                    <Input type="number" placeholder="2500" />
                  </div>
                  <div className="space-y-2">
                    <Label>Skill Level</Label>
                    <select className="w-full p-2 border rounded">
                      <option>Master</option>
                      <option>Expert</option>
                      <option>Skilled</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>Region Factor</Label>
                    <Input value="Gujarat (+15%)" disabled className="bg-muted" />
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Suggested Price Range:</span>
                    <span className="text-2xl font-bold text-green-600">₹8,500 - ₹12,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Based on similar crafts in your region</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Learning Hub */}
          <TabsContent value="learning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Learning Hub
                </CardTitle>
                <CardDescription>Enhance your digital skills and craft knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'eCommerce 101', progress: 80, lessons: 8, icon: '💻' },
                    { title: 'Smartphone Photography', progress: 60, lessons: 6, icon: '📸' },
                    { title: 'Social Media Marketing', progress: 40, lessons: 10, icon: '📱' },
                    { title: 'Digital Finance', progress: 90, lessons: 5, icon: '💰' },
                    { title: 'Sustainable Crafting', progress: 20, lessons: 12, icon: '🌱' },
                    { title: 'Fair Pricing Strategies', progress: 100, lessons: 4, icon: '💡' }
                  ].map((course, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{course.icon}</span>
                          <div>
                            <h4 className="font-medium">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">{course.lessons} lessons</p>
                          </div>
                        </div>
                        {course.progress === 100 && (
                          <Badge className="bg-green-100 text-green-800">Certified</Badge>
                        )}
                      </div>
                      <Progress value={course.progress} className="mb-2" />
                      <p className="text-sm text-muted-foreground">{course.progress}% complete</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Order Management */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Order Management
                </CardTitle>
                <CardDescription>Simple interface with audio prompts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: '#ORD-001', product: 'Kutch Embroidered Dupatta', customer: 'Priya Sharma', status: 'crafting', amount: '₹3,200' },
                    { id: '#ORD-002', product: 'Traditional Mirror Work Bag', customer: 'Amit Patel', status: 'ready', amount: '₹1,800' },
                    { id: '#ORD-003', product: 'Hand-block Printed Saree', customer: 'Sarah Johnson', status: 'shipped', amount: '₹8,500' }
                  ].map((order, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          order.status === 'crafting' ? 'bg-yellow-500' :
                          order.status === 'ready' ? 'bg-green-500' : 'bg-blue-500'
                        }`} />
                        <div>
                          <h4 className="font-medium">{order.product}</h4>
                          <p className="text-sm text-muted-foreground">{order.id} • {order.customer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{order.amount}</p>
                        <Badge variant={order.status === 'crafting' ? 'secondary' : 'default'}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Income & Impact Tracker */}
          <TabsContent value="income" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="h-5 w-5 mr-2" />
                    Real-time Earnings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-green-600">₹45,231</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Gross Sales</span>
                        <span>₹48,500</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Platform Fee (5%)</span>
                        <span>-₹2,425</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Logistics (2%)</span>
                        <span>-₹844</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-bold text-green-600">
                        <span>Net Earnings</span>
                        <span>₹45,231</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Your Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>CO₂ Saved</span>
                      <span className="font-bold text-green-600">127 kg</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Customers Reached</span>
                      <span className="font-bold">89 people</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Traditions Preserved</span>
                      <span className="font-bold">3 techniques</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Family Members Supported</span>
                      <span className="font-bold">5 people</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Rewards & Recognition */}
          <TabsContent value="rewards" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Rewards & Recognition
                </CardTitle>
                <CardDescription>Your achievements and badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <Medal className="h-12 w-12 mx-auto text-golden-500 mb-2" />
                    <h4 className="font-medium">Master Weaver</h4>
                    <p className="text-sm text-muted-foreground">50+ textiles sold</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Leaf className="h-12 w-12 mx-auto text-green-500 mb-2" />
                    <h4 className="font-medium">Eco Champion</h4>
                    <p className="text-sm text-muted-foreground">100kg CO₂ saved</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Users className="h-12 w-12 mx-auto text-blue-500 mb-2" />
                    <h4 className="font-medium">Community Favorite</h4>
                    <p className="text-sm text-muted-foreground">4.9/5 rating</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-4">Government Scheme Access</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span>MUDRA Loan Eligible</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span>GI Tag Verified</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span>TRIFED Partnership</span>
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Market Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Traditional Textiles</span>
                      <span className="text-green-600">↑ 35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Eco-friendly Crafts</span>
                      <span className="text-green-600">↑ 28%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Festival Season</span>
                      <span className="text-green-600">↑ 45%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Repeat Customers</span>
                      <span>67%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>International Orders</span>
                      <span>23%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Average Order Value</span>
                      <span>₹4,200</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Supply Chain Tracker */}
          <TabsContent value="supply-chain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Supply Chain Tracker
                </CardTitle>
                <CardDescription>Track your orders from creation to delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      order: '#ORD-001',
                      product: 'Kutch Embroidered Dupatta',
                      status: 'In Progress',
                      steps: [
                        { step: 'Materials Sourced', date: '20 Mar', completed: true },
                        { step: 'Embroidery Started', date: '22 Mar', completed: true },
                        { step: 'Quality Check', date: '28 Mar', completed: false },
                        { step: 'Ready for Pickup', date: 'Pending', completed: false }
                      ]
                    },
                    {
                      order: '#ORD-002',
                      product: 'Mirror Work Bag',
                      status: 'Delivered',
                      steps: [
                        { step: 'Design Finalized', date: '15 Mar', completed: true },
                        { step: 'Crafting Complete', date: '18 Mar', completed: true },
                        { step: 'Quality Approved', date: '20 Mar', completed: true },
                        { step: 'Delivered', date: '25 Mar', completed: true }
                      ]
                    }
                  ].map((order, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <h4 className="font-medium">{order.product}</h4>
                          <p className="text-sm text-muted-foreground">Order {order.order}</p>
                        </div>
                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
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
