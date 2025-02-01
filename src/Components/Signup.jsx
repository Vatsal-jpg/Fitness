import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate for redirect
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook for redirecting after successful signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup (replace with actual signup logic, e.g., API call)
    if (name && email && password) {
      localStorage.setItem('isAuthenticated', 'true');  // Set auth status in localStorage
      navigate('/');  // Redirect to the home page (Dashboard)
    } else {
      alert('Please fill in all fields.');  // Handle missing fields
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Fitness Background"
        className="absolute w-full h-full object-cover opacity-20"
      />
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md p-8 rounded-2xl bg-black/60 backdrop-blur-xl border border-purple-500/20 relative z-10"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
          Create Account
        </h2>
       
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-gray-300 text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/40 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-400 text-white"
                placeholder="Create a password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            Create Account
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 hover:text-purple-300">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUp;
