
import React from 'react';
import Layout from '@/components/Layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          About SANSKRITI
        </h1>
        <p className="text-muted-foreground">
          Learn about our mission to empower traditional artisans and preserve cultural heritage.
        </p>
      </div>
    </Layout>
  );
};

export default About;
