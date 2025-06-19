
import React from 'react';
import Layout from '@/components/Layout/Layout';

const Payment = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          Payment
        </h1>
        <p className="text-muted-foreground">
          Complete your purchase securely.
        </p>
      </div>
    </Layout>
  );
};

export default Payment;
