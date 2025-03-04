import React, { useState } from 'react';
import './App.css';

// 靜態的 users 陣列，包含帳號、密碼和名稱
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

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);  // 目前登入的使用者資料
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
      setCurrentUser(user);  // 記錄目前登入的使用者
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

  // 處理刪除使用者帳號
  const handleDelete = () => {
    const index = users.findIndex((user) => user.id === currentUser.id);
    if (index > -1) {
      // 刪除該帳號
      users.splice(index, 1);
      setIsLoggedIn(false);  // 登出
      setCurrentUser(null);  // 清除目前登入的使用者
      setErrorMessage('');
      alert('帳號已刪除');
    }
  };

  return (
    <div className="App">
      <h1>React 登入系統</h1>

      {/* 顯示所有帳號及密碼 */}
      <h2>所有帳號資料</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>帳號:</strong> {user.account}, <strong>密碼:</strong> {user.password}
          </li>
        ))}
      </ul>

      {isLoggedIn ? (
        <div>
          <h2>歡迎，{currentUser.name}！</h2>
          <h3>修改或刪除帳號資料</h3>
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
          <button onClick={handleDelete}>刪除帳號</button>
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
    </div>
  );
};

export default App;
