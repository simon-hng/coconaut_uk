import { Discover } from '@components/Discover';
import { Layout } from '@components/Global';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Nutrition } from '@components/Nutrition';
import { Mission } from '@components/Mission';
import { ShopTeaser } from '@components/ShopTeaser';
import { Sustainability } from '@components/Sustainability';
import { Video } from '@components/Video';
import * as React from 'react';

const Index = () => {
  return (
    <Layout title='Coconaut home' description={'Buy coconut water'} image={''}>
      <Header />
      <Hero />
      <Nutrition />
      <ShopTeaser />
      <Discover />
      <Mission />
      <Video />
      <Sustainability />
    </Layout>
  );
};

export default Index;
