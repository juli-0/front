import React from 'react';
import MyActivityTabs from './MyActivityTabs';
import { Outlet } from 'react-router-dom';

const MyActivity = () => {
  return (
    <div>
      내 활동 페이지
      <MyActivityTabs />
      <Outlet/>
    </div>
  );
};

export default MyActivity;