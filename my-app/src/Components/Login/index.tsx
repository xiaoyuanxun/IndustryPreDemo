import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import schooLogoPng from '../../images/school_logo.png'
import { useNavigate } from 'react-router-dom';

// interface UserData {
//   username: string;
//   password: string;
// }

export const Login = React.memo(() => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login", 
        { username: userId, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log('登陆成功')
        // 登录成功
        // 处理成功登录后的逻辑，例如跳转到其他页面
        navigate('/system');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("*用户名或密码不匹配");
      } else {
        console.error("登录请求错误:", error);
        setErrorMessage("*登录请求错误");
      }
    }
  };

  return (
    <div className="login-screen">
      <div className="login-screen-box">
        <div className="login-screen-box-header">
          <img className="login-screen-box-header-logo" alt="school-logo" src={schooLogoPng} />
          <div className="login-screen-box-header-title">区块链物联网实训系统</div>
          <div className="login-screen-box-header-student">学生端</div>
        </div>
        <div className="login-screen-box-1">
          <div className="login-screen-box-1-title">用户ID/学号</div>
          <input
            className="login-screen-box-1-input"
            type="text"
            value={userId}
            onChange={handleUserIdChange}
            placeholder="请输入用户ID或学号"
          />
        </div>
        <div className="login-screen-box-2">
          <div className="login-screen-box-2-title">密码</div>
          <input
            className="login-screen-box-2-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="请输入密码"
          />
        </div>
        {errorMessage && <div className="login-screen-box-3">{errorMessage}</div>}
        <div className="login-screen-box-4" onClick={handleLogin}>
            <div className="login-screen-box-4-title">登录</div>
        </div>
      </div>
    </div>
  );
});
