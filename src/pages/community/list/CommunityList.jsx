import React from 'react';
import RegionNoticeBanner from './RegionNoticeBanner';
import FilterPanel from './FilterPanel';
import CommunityListWrap from './CommunityListWrap';
import LoadMoreButton from './LoadMoreButton';

const CommunityList = () => {
  return (
    <div>
      커뮤니티 리스트 페이지
      <RegionNoticeBanner />
      <FilterPanel />
      <CommunityListWrap />
      <LoadMoreButton />
    </div>
  );
};

export default CommunityList;