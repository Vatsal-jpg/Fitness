import React from "react";
import "../Styles/Dashboard.css";

const ActivitiesList = () => {
  return (
    <div className="activities">
      <h2>My Activities</h2>
      <div className="activity">🏃 Running - 7:00 AM</div>
      <div className="activity">🏋️ Gym - 8:00 PM</div>
      <div className="activity">🧘 Meditation - 10:30 PM</div>
    </div>
  );
};

export default ActivitiesList;
