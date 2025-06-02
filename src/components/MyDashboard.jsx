import React from 'react';
import MyFavorites from './MyFavorites';
import DailyWellnessLog from './DailyWellnessLog';
import MyProfile from './MyProfile';

const Dashboard = ({wellnessLogs}) => {

    console.log(wellnessLogs)
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>

      <section className="dashboard-section profile">
        <MyProfile />
      </section>

      <section className="dashboard-section daily-log">
        <h2>Today’s Wellness Log</h2>
        <DailyWellnessLog />
      </section>

      <section className="dashboard-section favorites">
        <h2>Your Favorite Foods</h2>
        <MyFavorites />
      </section>
    </div>
  );
};

export default Dashboard;