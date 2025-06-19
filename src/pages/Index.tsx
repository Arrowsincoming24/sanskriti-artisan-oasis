
import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Home/Hero';
import FeaturedArtisans from '@/components/Home/FeaturedArtisans';
import FeaturedProducts from '@/components/Home/FeaturedProducts';
import ImpactSection from '@/components/Home/ImpactSection';
import CraftCategories from '@/components/Home/CraftCategories';
import Testimonials from '@/components/Home/Testimonials';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CraftCategories />
      <FeaturedProducts />
      <FeaturedArtisans />
      <ImpactSection />
      <Testimonials />
    </Layout>
  );
};

export default Index;
