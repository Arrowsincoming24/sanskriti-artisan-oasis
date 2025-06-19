
import React from 'react';
import Layout from '@/components/Layout/Layout';

const ArtisanProfiles = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-cultural font-bold text-foreground mb-6">
          Artisan Profiles
        </h1>
        <p className="text-muted-foreground">
          Meet the talented artisans behind our authentic crafts.
        </p>
      </div>
    </Layout>
  );
};

export default ArtisanProfiles;
