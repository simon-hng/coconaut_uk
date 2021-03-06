import { Discover } from '@components/Discover';
import { Layout } from '@components/Global';
import { Hero } from '@components/Hero';
import { Nutrition } from '@components/Nutrition';
import { Mission } from '@components/Mission';
import { ShopTeaser } from '@components/ShopTeaser';
import { Sustainability } from '@components/Sustainability';
import { Video } from '@components/Video';
import { Contact } from '@components/Contact';
import * as React from 'react';

const Index = () => (
  <Layout title='Coconaut home' description={'Buy coconut water'}>
    <Hero />
    <Nutrition />
    <ShopTeaser />
    <Discover />
    <Video />
    <Mission />
    <Sustainability />
    <Contact />
  </Layout>
);

export default Index;
