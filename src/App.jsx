import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Community from './Components/Community';
import Tracker from './Components/Tracker';
import VirtualSession from './Components/VirtualSession';
import Signup from './Components/Signup';
import Login from './Components/Login';  // Import the Login component
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// A function to check if the user is logged in (e.g., checking localStorage)
const isLoggedIn = () => {
  return localStorage.getItem('isAuthenticated') === 'true';  // Modify this based on your auth logic
};

const App = () => {
  const [auth, setAuth] = useState(isLoggedIn());

  useEffect(() => {
    // You can update this state if the authentication status changes
    setAuth(isLoggedIn());
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        {/* Routes for login and signup */}
        {!auth ? (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/*' element={<Navigate to='/login' />} /> {/* Redirect to login if not authenticated */}
          </>
        ) : (
          <>
            {/* Protected Routes */}
            <Route path='/' element={<Dashboard />} />
            <Route path='/community' element={<Community />} />
            <Route path='/tracker' element={<Tracker />} />
            <Route path='/virtual-sessions' element={<VirtualSession />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
