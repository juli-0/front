import React from 'react';
import KpiSection from './KpiSection';
import VisitorsTrend from './VisitorsTrend';
import AverageUsage from './AverageUsage';
import CommunityDailyStats from './CommunityDailyStats';
import TopRegions from './TopRegions';

const Dashboard = () => {
  return (
    <div>
      대시보드
      <KpiSection />
      <VisitorsTrend />
      <AverageUsage />
      <CommunityDailyStats />
      <TopRegions />
    </div>
  );
};

export default Dashboard;