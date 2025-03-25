import React, { useState } from 'react';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // 處理註冊邏輯
  const handleRegister = async (e) => {
    e.preventDefault();

    // 檢查帳號是否已經存在
    const newUser = { id: Date.now(), name, account, password }; // 使用當前時間戳生成 ID

    // 將新用戶傳遞給父組件 (App.js)
    onRegister(newUser);

    setSuccessMessage('註冊成功！');
    setErrorMessage('');
  };

  return (
    <div className="App">
      <h1>註冊頁面</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>名稱:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>帳號 (Email):</label>
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
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
        <button type="submit">註冊</button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default Register;
