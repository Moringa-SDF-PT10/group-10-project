import React from "react";
import MyFavorites from "./MyFavorites";
import DailyWellnessLog from "./DailyWellnessLog";
import MyProfile from "./MyProfile";

function MyDashboard({
  favorites = [],
  foods = [],
  wellnessLogs,
  onToggleFavorite,
  onDeleteFood,
  handleWellnessSubmit,
  commentsById = {},
  onLeaveComment,
}) {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to Your Dashboard</h1>

      <section className="dashboard-section profile">
        <MyProfile />
      </section>

      <section className="dashboard-section daily-log">
        <h2>My Daily Wellness Log</h2>
        <div className="wellness-logs-list">
          {wellnessLogs.length === 0 ? (
            <p className="no-wellness-message">No wellness logs yet.</p>
          ) : (
            wellnessLogs.map((log, idx) => (
              <div key={idx} className="wellness-log-entry">
                <strong>Entry {idx + 1}:</strong>
                <ul>
                  <li>Slept Well: {log.sleptWell ? "Yes" : "No"}</li>
                  <li>Ate Healthy: {log.ateHealthy ? "Yes" : "No"}</li>
                  <li>Exercised: {log.exercised ? "Yes" : "No"}</li>
                  <li>Socialized: {log.socialized ? "Yes" : "No"}</li>
                  <li>
                    Drank Enough Water: {log.drankEnoughWater ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="dashboard-section favorites">
        <h2>My Favorite Foods</h2>
        <MyFavorites
          foods={foods}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
          onDeleteFood={onDeleteFood}
          commentsById={commentsById}
          onLeaveComment={onLeaveComment}
        />
      </section>
    </div>
  );
}

export default MyDashboard;
