import React, { useState } from "react";
import { Calendar, CheckCircle, MapPin, PlusCircle, Trash, Video, Play } from "lucide-react";

const initialGoals = [
  { id: "1", title: "Run 5K", deadline: "2025-02-02T07:00:00", completed: false },
  { id: "2", title: "Meditate Daily", deadline: "2025-02-02T10:00:00", completed: false },
];

const onlineSessions = [
  {
    id: "1",
    title: "Live Morning Yoga Flow",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
    duration: "60 min",
    instructor: "Sarah Chen",
    startTime: "08:00 AM",
    participants: 24
  },
  {
    id: "2",
    title: "Group HIIT Workout",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80",
    duration: "45 min",
    instructor: "Mike Johnson",
    startTime: "10:30 AM",
    participants: 18
  },
  {
    id: "3",
    title: "Mindful Meditation",
    thumbnail: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=500&q=80",
    duration: "30 min",
    instructor: "Emma Wilson",
    startTime: "06:00 PM",
    participants: 32
  }
];

function App() {
  const [goals, setGoals] = useState(initialGoals);
  const [newGoal, setNewGoal] = useState({ title: "", deadline: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const toggleComplete = (id) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  const addGoal = () => {
    if (newGoal.title && newGoal.deadline) {
      setGoals([...goals, { id: Date.now().toString(), ...newGoal, completed: false }]);
      setNewGoal({ title: "", deadline: "" });
    }
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const searchNearby = () => {
    const query = encodeURIComponent(searchQuery);
    window.open(`https://www.google.com/maps/search/${query}`, "_blank");
  };

  const joinSession = (sessionId) => {
    // In a real app, this would handle session joining logic
    console.log(`Joining session ${sessionId}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Personal Health & Community Care
        </h1>
       
        {/* Search Section */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-4 mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for gyms, yoga, wellness centers..."
              className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={searchNearby}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <MapPin size={20} />
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Goals Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                <Calendar size={24} className="text-blue-400" />
                Health Goals
              </h2>
             
              {/* Add Goal Form */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Goal Title"
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  value={newGoal.title}
                  onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                />
                <input
                  type="datetime-local"
                  className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                />
                <button
                  onClick={addGoal}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  <PlusCircle size={20} />
                  Add
                </button>
              </div>

              {/* Goals List */}
              <div className="space-y-4">
                {goals.map(goal => (
                  <div
                    key={goal.id}
                    className={`p-4 rounded-lg border ${
                      goal.completed
                        ? 'bg-gray-700 border-gray-600'
                        : 'bg-gray-700 border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className={`text-lg font-medium ${
                          goal.completed ? 'text-gray-400 line-through' : 'text-white'
                        }`}>
                          {goal.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mt-1">
                          <Calendar size={16} />
                          <span className="text-sm">
                            Target: {new Date(goal.deadline).toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleComplete(goal.id)}
                          className={`p-2 rounded-full transition-colors ${
                            goal.completed
                              ? 'text-green-400 hover:bg-gray-600'
                              : 'text-gray-400 hover:bg-gray-600'
                          }`}
                        >
                          <CheckCircle size={20} />
                        </button>
                        <button
                          onClick={() => deleteGoal(goal.id)}
                          className="p-2 text-red-400 hover:bg-gray-600 rounded-full transition-colors"
                        >
                          <Trash size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Online Sessions Section */}
          <div className="bg-gray-800 rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <Video size={24} className="text-purple-500" />
              Live Sessions
            </h2>
            <div className="space-y-4">
              {onlineSessions.map(session => (
                <div
                  key={session.id}
                  className="bg-gray-700 rounded-lg overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={session.thumbnail}
                      alt={session.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Play size={48} className="text-white" />
                    </div>
                    <span className="absolute top-2 right-2 bg-purple-500 text-white text-sm px-2 py-1 rounded">
                      {session.duration}
                    </span>
                    <span className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
                      {session.startTime}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium text-lg group-hover:text-purple-400 transition-colors">
                      {session.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      Instructor: {session.instructor}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {session.participants} participants
                      </span>
                      <button
                        onClick={() => joinSession(session.id)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        Join Session
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;