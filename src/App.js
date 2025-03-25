import React, { useState } from 'react';
import './App.css';

const App = () => {
  // 將 users 改為 useState 以便更新
  const [users, setUsers] = useState([
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
  ]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // 目前登入的使用者資料
  const [newName, setNewName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // 處理登入邏輯
  const handleLogin = (e) => {
    e.preventDefault();

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

  // 處理更新使用者資料
  const handleUpdate = () => {
    if (newName) currentUser.name = newName;
    if (newPassword) currentUser.password = newPassword;

    // 更新當前用戶資料
    setCurrentUser({ ...currentUser });
    setNewName('');
    setNewPassword('');
    alert('資料已更新');
  };

  // 處理登出
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null); // 清除目前登入的使用者
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  // 註冊新帳號
  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>React 登入系統</h1>

      {/* 顯示登入表單 */}
      {!isLoggedIn ? (
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
      ) : (
        // 登入後顯示的內容
        <div>
          <h2>歡迎，{currentUser.name}！</h2>
          <h3>修改帳號資料</h3>
          <div>
            <label>新名稱:</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label>新密碼:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <button onClick={handleUpdate}>更新資料</button>
          <button onClick={handleLogout}>登出</button>
        </div>
      )}

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default App;
