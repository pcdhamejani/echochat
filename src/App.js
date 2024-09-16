import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./components/ChatPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import Home from "./components/Home";

const groups = [
  {
    name: "Tech Enthusiasts",
    description: "A group for discussing the latest in technology.",
    tags: ["Tech", "Innovation", "AI"],
    type: "Public",
    members: 120,
  },
  {
    name: "Fitness Freaks",
    description: "For those who love staying fit and healthy.",
    tags: ["Fitness", "Health", "Workout"],
    type: "Private",
    members: 80,
  },
  {
    name: "Book Lovers",
    description: "Join if you're passionate about reading books.",
    tags: ["Books", "Fiction", "Non-fiction"],
    type: "Public",
    members: 200,
  },
  {
    name: "Travel Junkies",
    description: "A group for wanderlusts who love to explore new places.",
    tags: ["Travel", "Adventure", "Photography"],
    type: "Public",
    members: 95,
  },
  {
    name: "Foodies United",
    description: "For people who enjoy cooking and tasting different cuisines.",
    tags: ["Food", "Recipes", "Cooking"],
    type: "Private",
    members: 150,
  },
  {
    name: "Movie Buffs",
    description: "Discuss and review the latest movies and series.",
    tags: ["Movies", "Cinema", "Cinema", "Cinema", "Reviews"],
    type: "Public",
    members: 300,
  },
  {
    name: "Gaming Guild",
    description: "A community for gamers to connect and compete.",
    tags: ["Games", "eSports", "Multiplayer"],
    type: "Private",
    members: 210,
  },
  {
    name: "Music Maniacs",
    description: "For people passionate about music and instruments.",
    tags: ["Music", "Instruments", "Concerts"],
    type: "Public",
    members: 180,
  },
  {
    name: "Eco Warriors",
    description: "Discuss environmental issues and sustainability initiatives.",
    tags: ["Environment", "Green", "Sustainability"],
    type: "Private",
    members: 60,
  },
  {
    name: "Artistic Souls",
    description: "A community for artists and art enthusiasts to share and learn.",
    tags: ["Art", "Creativity", "Painting"],
    type: "Public",
    members: 125,
  },
  {
    name: "Startup Circle",
    description: "Networking for entrepreneurs and aspiring business owners.",
    tags: ["Business", "Startup", "Entrepreneurship"],
    type: "Private",
    members: 70,
  },
  {
    name: "Mindfulness Masters",
    description: "Learn and share about mindfulness, meditation, and mental health.",
    tags: ["Mindfulness", "Meditation", "Mental Health"],
    type: "Public",
    members: 110,
  }
];

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home groups={groups} />} />
          <Route path="/chat/:groupName" element={<ChatPage groups={groups} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;