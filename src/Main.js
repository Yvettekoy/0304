// src/Main.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// 引入其他頁面
import Home from './Home';
import Profile from './Profile';

const Main = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/profile">個人資料</Link>
            </li>
          </ul>
        </nav>

        {/* 頁面內容 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
