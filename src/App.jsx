import React, { useState } from 'react';
import './App.css';
import Header from './components/header'; // 引入你的导航栏组件
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 注意这里导入Routes而不是Switch

// 引入其他页面组件
import Features from './pages/Features';
import Home from './pages/Home';
import SubmitHomework from './pages/SubmitHomework';
import AboutWebsite from './pages/AboutWebsite';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Card from './pages/DropDown/Card'
import Rocket from './pages/DropDown/Rocket'
import Clock from './pages/DropDown/Clock'

function App() {
  return (
    <Router>
      <Header /> {/* 这里添加了你的导航栏组件 */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/homework" element={<SubmitHomework />} />
        <Route path="/aboutwebsite" element={<AboutWebsite />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/card" element={<Card  />} />
        <Route path="/rocket" element={<Rocket  />} />
        <Route path="/clock" element={<Clock  />} />
        {/* 如果你希望添加一个默认或根路由，可以像下面这样添加 */}
      </Routes>
    </Router>
  );
}

export default App;
