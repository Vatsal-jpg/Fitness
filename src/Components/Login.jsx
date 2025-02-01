/*import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirect
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for redirecting after successful login

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with actual login logic, e.g., API call)
    if (email === 'user@example.com' && password === 'password123') {
      localStorage.setItem('isAuthenticated', 'true');  // Set auth status in localStorage
      navigate('/');  // Redirect to the home page (Dashboard)
    } else {
      alert('Invalid credentials. Please try again.');  // Handle invalid login
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Fitness Background"
        className="absolute w-full h-full object-cover opacity-20"
      />
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-cyan-500/20 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Welcome Back
        </h2>
       
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-cyan-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-cyan-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Login
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the user exists in localStorage (for demonstration purposes)
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    if (storedEmail === email && storedPassword === password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/'); // Redirect to the home page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Fitness Background"
        className="absolute w-full h-full object-cover opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-cyan-500/20 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-cyan-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-cyan-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-cyan-500/30 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Login
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

