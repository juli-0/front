import React from 'react';
import AdimPostTabs from './AdimPostTabs';
import { Outlet } from 'react-router-dom';

const AdminPost = () => {
  return (
    <div>
      관리자 글 관리 페이지
      <AdimPostTabs />
      <Outlet />
    </div>
  );
};

export default AdminPost;