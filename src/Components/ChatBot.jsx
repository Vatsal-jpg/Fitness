import React, { useState } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import "../Styles/ChatBot.css"

const healthResponses = {
  'hello': 'Hello! I\'m your health and wellness assistant. How can I help you today?',
  'workout': 'For beginners, I recommend starting with 3 days of exercise per week. Include cardio and basic strength training. Always warm up first!',
  'diet': 'A balanced diet should include proteins, carbs, healthy fats, and plenty of vegetables. Consider tracking your meals and staying hydrated!',
  'meditation': 'Start with 5-10 minutes of daily meditation. Find a quiet space, focus on your breath, and gradually increase duration.',
  'yoga': 'Yoga is great for flexibility and stress relief. Begin with basic poses like Mountain Pose, Child\'s Pose, and Downward Dog.',
  'sleep': 'Aim for 7-9 hours of sleep. Maintain a consistent schedule and create a relaxing bedtime routine.',
  'stress': 'Try deep breathing exercises, regular exercise, and meditation to manage stress. Don\'t hesitate to seek professional help if needed.',
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! I\'m your wellness assistant. Ask me about workouts, diet, meditation, yoga, sleep, or stress management!', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const getResponse = (query) => {
    const q = query.toLowerCase();
    let response = 'I\'m not sure about that. Try asking about workouts, diet, meditation, yoga, sleep, or stress management!';
   
    for (const [key, value] of Object.entries(healthResponses)) {
      if (q.includes(key)) {
        response = value;
        break;
      }
    }
    return response;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    const botMessage = { text: getResponse(input), isBot: true };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInput('');
  };

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const closeChat = () => {
    setIsVisible(false);
  };

  return (
    <>
      <button className="chat-toggle" onClick={toggleChat}>
        <Bot size={20} />
        Aura Wellness Assistant
      </button>

      <div className={`chatbot ${isVisible ? 'visible' : ''}`}>
        <div className="chatbot-header">
          <div className="header-title">
            <Bot size={20} />
            Wellness Assistant
          </div>
          <button className="close-button" onClick={closeChat}>
            <X size={20} />
          </button>
        </div>
       
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isBot ? 'bot' : 'user'}`}
            >
              <div className="message-content">
                <div className="message-header">
                  {message.isBot ? (
                    <><Bot size={16} /> Assistant</>
                  ) : (
                    <><User size={16} /> You</>
                  )}
                </div>
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="chat-input">
          <div className="input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about health & wellness..."
              className="message-input"
            />
            <button type="submit" className="send-button">
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChatBot;