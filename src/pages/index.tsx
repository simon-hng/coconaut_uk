import { Events } from '@components/Events';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Nutrition } from '@components/Nutrition';
import { OurMission } from '@components/OurMission';
import { ShopTeaser } from '@components/ShopTeaser';
import { Video } from '@components/Video';
import * as React from 'react';

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Nutrition />
      <ShopTeaser />
      <Events />
      <OurMission />
      <Video />
    </main>
  );
};

export default Index;
