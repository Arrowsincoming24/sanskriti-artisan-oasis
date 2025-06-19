
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ArtisanLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/artisan-dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-terracotta-50 to-golden-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-terracotta-100 rounded-full w-16 h-16 flex items-center justify-center">
            <Users className="h-8 w-8 text-terracotta-600" />
          </div>
          <CardTitle className="text-2xl font-cultural">Artisan Login</CardTitle>
          <CardDescription>
            Access your artisan dashboard to manage your crafts and analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="artisan@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-terracotta-600 hover:bg-terracotta-700">
              Login to Dashboard
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-terracotta-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArtisanLogin;
