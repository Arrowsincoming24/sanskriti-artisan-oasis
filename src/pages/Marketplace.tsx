
import React from 'react';
import Layout from '@/components/Layout/Layout';

const Marketplace = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          Marketplace
        </h1>
        <p className="text-muted-foreground">
          Discover authentic handcrafted treasures from traditional Indian artisans.
        </p>
      </div>
    </Layout>
  );
};

export default Marketplace;
