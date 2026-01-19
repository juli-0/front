import React from 'react';
import RegionNoticeBanner from './RegionNoticeBanner';
import FilterPanel from './FilterPanel';
import CardGrid from './CardGrid';
import IconButton from '../../../components/button/IconButton';

const ProvideList = () => {
  return (
    <div>
      정보제공 리스트 페이지
      <RegionNoticeBanner />
      <FilterPanel />
      <CardGrid />
      <IconButton 
        iconName="plus-gray" 
        iconSize="small" 
        iconColor="gray02" 
        border="gray02" 
        borderWidth="medium" 
        color="gray05" 
        size="medium" 
        shape="pill" 
        padding="small" 
        backgroundColor="white"
      >
        더보기
      </IconButton>
    </div>
  );
};

export default ProvideList;