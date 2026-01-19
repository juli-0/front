import React from 'react';
import AdminHeader from './component/AdminHeader';
import AdminSidebar from './component/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminMyPageLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar />
      관리자 마이페이지 레이아웃
      <Outlet />
    </div>
  );
};

export default AdminMyPageLayout;