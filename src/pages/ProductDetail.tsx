
import React from 'react';
import Layout from '@/components/Layout/Layout';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          Product Details
        </h1>
        <p className="text-muted-foreground">
          Product ID: {id}
        </p>
      </div>
    </Layout>
  );
};

export default ProductDetail;
