import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageHeader from './component/MyPageHeader';
import MyPageSidebar from './component/MyPageSidebar';

const GeneralMyPageLayout = () => {
  return (
    <div>
      <MyPageHeader />
      <MyPageSidebar />
      일반사용자 마이페이지 레이아웃
      <Outlet />
    </div>
  );
};

export default GeneralMyPageLayout;