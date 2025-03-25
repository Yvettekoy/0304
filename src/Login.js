import React, { useState } from 'react';
import './App.css'; // 引入樣式檔案

// 假設這是你靜態的 users 陣列
const users = [
  {
    id: 1,
    name: 'John Doe',
    account: 'john.doe',
    password: 'password123',
  },
  {
    id: 2,
    name: 'Jane Smith',
    account: 'jane.smith',
    password: 'password456',
  },
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // 記錄登入的使用者

  // 處理登入邏輯
  const handleLogin = (e) => {
    e.preventDefault();

    // 查找是否有匹配的帳號和密碼
    const user = users.find(
      (user) => user.account === username && user.password === password
    );

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user); // 記錄目前登入的使用者
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('登入失敗：帳號或密碼錯誤');
    }
  };

  return (
    <div className="App">
      <h1>登入頁面</h1>

      {isLoggedIn ? (
        <div>
          <h2>歡迎，{currentUser.name}！</h2>
          <button onClick={() => setIsLoggedIn(false)}>登出</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>帳號:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>密碼:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">登入</button>
        </form>
      )}

      {errorMessage && <p className="error">{errorMessage}</p>}

      {/* 回上頁按鈕 */}
      <button onClick={() => window.history.back()}>回到上一頁</button>
    </div>
  );
};

export default Login;
