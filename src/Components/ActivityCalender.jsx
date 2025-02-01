import React from "react";
import "../Styles/Dashboard.css";

const ActivityCalendar = () => {
  return (
    <div className="calendar">
      <h2>Your Active Days</h2>
      <div className="calendar-grid">
        {[...Array(31)].map((_, i) => (
          <div key={i} className={`day ${i % 5 === 0 ? "active" : ""}`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCalendar;
