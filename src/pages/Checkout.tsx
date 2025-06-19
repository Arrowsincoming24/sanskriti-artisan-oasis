
import React from 'react';
import Layout from '@/components/Layout/Layout';

const Checkout = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          Checkout
        </h1>
        <p className="text-muted-foreground">
          Review your order and proceed to payment.
        </p>
      </div>
    </Layout>
  );
};

export default Checkout;
