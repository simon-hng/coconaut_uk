import { Events } from '@components/Events';
import { Layout } from '@components/Global';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Nutrition } from '@components/Nutrition';
import { OurMission } from '@components/OurMission';
import { ShopTeaser } from '@components/ShopTeaser';
import { Video } from '@components/Video';
import * as React from 'react';

const Index = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Nutrition />
      <ShopTeaser />
      <Events />
      <OurMission />
      <Video />
    </Layout>
  );
};

export default Index;
