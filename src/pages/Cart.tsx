
import React from 'react';
import Layout from '@/components/Layout/Layout';

const Cart = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          Shopping Cart
        </h1>
        <p className="text-muted-foreground">
          Your selected items will appear here.
        </p>
      </div>
    </Layout>
  );
};

export default Cart;
