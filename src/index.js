import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Register';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 讓 Register 頁面接收註冊方法並將其傳遞給 App
root.render(
  <React.StrictMode>
    <Register onRegister={(newUser) => {
      // 在註冊頁面註冊後，將新帳號傳回 App.js
      // 假設你已經在 App.js 內有 onRegister 方法
      // 可以在這裡呼叫 App 的 onRegister 方法，或是將 users 資料做更新
    }} />
  </React.StrictMode>
);
