import React, { useState } from "react";
import { MessageSquare, ThumbsUp, Users } from "lucide-react";
import "../Styles/Community.css"

const Community = () => {
  const [posts, setPosts] = useState([
    {
      author: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      timeAgo: "2 hours ago",
      content:
        "Just completed my first 30-day yoga challenge! Feeling stronger and more flexible than ever. Who else has tried this program?",
      likes: 24,
      comments: [],
      gradient: "from-pink-500 to-rose-400",
    },
    {
      author: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      timeAgo: "5 hours ago",
      content:
        "Looking for a meditation buddy! I practice every morning at 7 AM EST. Anyone interested in joining?",
      likes: 15,
      comments: [],
      gradient: "from-purple-500 to-violet-400",
    },
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newPostEntry = {
      author: "You",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      timeAgo: "Just now",
      content: newPost,
      likes: 0,
      comments: [],
      gradient: "from-green-500 to-teal-400",
    };
    setPosts([newPostEntry, ...posts]);
    setNewPost("");
  };

  const handleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleComment = (index, comment) => {
    if (comment.trim() === "") return;
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
  };

  const groups = [
    {
      name: "Morning Yoga Enthusiasts",
      members: 1234,
      image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Mindful Living",
      members: 856,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=150",
    },
    {
      name: "Healthy Recipes Share",
      members: 2045,
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=150",
    },
  ];

  return (
    <div className="p-6 max-w-screen-lg mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:flex-grow">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex space-x-4">
              <img src={posts[0].avatar} alt="Your avatar" className="w-10 h-10 rounded-full" />
              <input
                type="text"
                placeholder="Share your wellness journey..."
                className="flex-grow px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600" onClick={handlePost}>
                Post
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${post.gradient}`}>
                      {post.author}
                    </h3>
                    <p className="text-sm text-gray-600">{post.timeAgo}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-4">{post.content}</p>
                <div className="flex items-center space-x-6 text-gray-600">
                  <button className="flex items-center space-x-2 hover:text-rose-500" onClick={() => handleLike(index)}>
                    <ThumbsUp size={20} /> <span>{post.likes}</span>
                  </button>
                  <div>
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      className="px-2 py-1 border rounded"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleComment(index, e.target.value);
                      }}
                    />
                  </div>
                  <MessageSquare size={20} /> <span>{post.comments.length}</span>
                </div>
                <div className="mt-4 space-y-2">
                  {post.comments.map((comment, cIndex) => (
                    <p key={cIndex} className="text-gray-700 text-sm">- {comment}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80">
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Groups</h2>
            <div className="space-y-4">
              {groups.map((group, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img src={group.image} alt={group.name} className="w-12 h-12 rounded-lg object-cover" />
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-800">{group.name}</h3>
                    <p className="text-sm text-gray-600">
                      <Users size={14} className="inline mr-1" />
                      {group.members} members
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
