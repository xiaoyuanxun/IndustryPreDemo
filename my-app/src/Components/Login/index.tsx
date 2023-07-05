import React from "react";
import "./index.css";
import schooLogoPng from '../../images/school_logo.png'

export const Login = React.memo(() => {
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
              <div className="text-wrapper-2">登陆</div>
            </div>
          </div>
          <div className="view-2">
            <div className="div-wrapper">
              {/* <div className="text-wrapper-3">请输入用户ID或学号</div> */}
              <input
              className="text-wrapper-3"
              type="text"
            //   value={userId}
            //   onChange={handleUserIdChange}
              placeholder="请输入用户ID或学号"
            />
            </div>
            <div className="text-wrapper-4">用户ID/学号</div>
          </div>
          <div className="view-3">
            <div className="div-wrapper">
              {/* <div className="text-wrapper-3">请输入密码</div> */}
              <input
              className="text-wrapper-3"
              type="password"
            //   value={userId}
            //   onChange={handleUserIdChange}
              placeholder="请输入密码"
            />
            </div>
            <div className="text-wrapper-4">密码</div>
          </div>
          <div className="text-wrapper-5">*用户ID或密码不匹配</div>
        </div>
      </div>
    </div>
  );
});
