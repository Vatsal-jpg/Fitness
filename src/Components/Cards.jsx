import React from "react";
import "../Styles/Dashboard.css";

const Card = ({ title, value, goal, avg }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="value">{value}</p>
      <p>Goal: {goal} | Avg: {avg}</p>
    </div>
  );
};

export default Card;
