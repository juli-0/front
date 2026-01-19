import React from 'react';
import MainHero from './MainHero';
import MainProvide from './MainProvide';
import MainCommunity from './MainCommunity';
import MainSafetyScore from './MainSafetyScore';
import MainSelectLocation from './MainSelectLocation';

const Main = () => {
  return (
    <div>
      메인 페이지
      <MainHero />
      <MainProvide />
      <MainCommunity />
      <MainSafetyScore />
      <MainSelectLocation />
    </div>
  );
};

export default Main;