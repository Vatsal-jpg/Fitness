import React from "react";
import { Home, Calendar, Activity, Bell, Settings, Search, MessageCircle, TvMinimalPlay } from "lucide-react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "../Styles/Dashboard.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">Aura!!</h2>
      </div>
      <div className="nav-center">
        <Link to="/" className="nav-item">
          <Home size={20} />
        </Link>
        <Link to="/community" className="nav-item">
          <Calendar size={20} />
        </Link>
        <Link to="/tracker" className="nav-item">
          <MessageCircle size={20} />
        </Link>
        <Link to="/virtual-sessions" className="nav-item">
          <Activity size={20} />
        </Link>
        <Link to="/virtual-sessions" className="nav-item">
          <TvMinimalPlay size={20} />
        </Link>
      </div>
      <div className="nav-right">
        <div className="search-bar">
          <Search size={20} />
          <input type="text" placeholder="Search activities..." />
        </div>
        <div className="nav-item">
          <Bell size={20} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
