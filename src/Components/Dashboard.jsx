import React from "react";
import Nav from "./Nav";
import Cards from "./Cards";
import ActivityCalendar from "./ActivityCalender";
import ActivitiesList from "./ActivityList";
import Graphs from "./Graphs";
import "../Styles/Dashboard.css";
import "./ChatBot"
import ChatBot from "./ChatBot";



const Dashboard = () => {
  return (
    <div className="dashboard">  
      <main className="content">
        <h1>Hello, Alex!</h1>
        <p>Ready for today's challenges?</p>
        <div className="stats">
          <Cards title="Steps" value="8,745" goal="8,000" avg="9,450" />
          <Cards title="Calories burned" value="700" goal="500" avg="646" />
          <Cards title="Activity time" value="2h 45min" goal="2h" avg="2h 30m" />
        </div>
        <Graphs/>
        <ActivityCalendar />
        <ActivitiesList />
        <ChatBot/>
        {/* <Community/> */}
      </main>
    </div>
  );
};

export default Dashboard;
