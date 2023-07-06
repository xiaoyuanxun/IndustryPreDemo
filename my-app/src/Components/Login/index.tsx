import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import schooLogoPng from '../../images/school_logo.png'
import { useNavigate } from 'react-router-dom';

interface UserData {
  username: string;
  password: string;
}

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
      const response = await axios.post("http://localhost:8000/login", { username: userId, password });
      if (response.status === 200) {
        console.log('登陆成功')
        // 登录成功
        // 处理成功登录后的逻辑，例如跳转到其他页面
        navigate('/system');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("用户名或密码不匹配");
      } else {
        console.error("登录请求错误:", error);
        setErrorMessage("登录请求错误");
      }
    }
  };

  return (
    <div className="login-screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="tittle">
            <h1 className="text-wrapper">区块链物联网实训系统</h1>
            <div className="div">学生端</div>
            <img className="image" alt="Image" src={schooLogoPng} />
          </div>
          <div className="view">
            <div className="overlap-group">
              {/* <div className="text-wrapper-2">登陆</div> */}
              <button className="text-wrapper-2" onClick={handleLogin}>
              登录
            </button>
            </div>
          </div>
          <div className="view-2">
            <div className="div-wrapper">
            <input
                className="text-wrapper-3"
                type="text"
                value={userId}
                onChange={handleUserIdChange}
                placeholder="请输入用户ID或学号"
              />
            </div>
            <div className="text-wrapper-4">用户ID/学号</div>
          </div>
          <div className="view-3">
            <div className="div-wrapper">
            <input
                className="text-wrapper-3"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="请输入密码"
              />
            </div>
            <div className="text-wrapper-4">密码</div>
          </div>
          {errorMessage && <div className="text-wrapper-5">{errorMessage}</div>}
          {/* <div className="text-wrapper-5">*用户ID或密码不匹配</div> */}
        </div>
      </div>
    </div>
  );
});
