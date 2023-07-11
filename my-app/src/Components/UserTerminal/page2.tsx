import React from "react";
import "./page2.css";
import CancelPng from '../../images/Cancel.png'
import ErrorPng from '../../images/Error.png'
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

export const UserTerminalPage2 = React.memo(() => {
  return (
    <div className="UserTerminalPage2">
      <Header/>
      <div className="UserTerminalPage2-1">
        <Sidebar activeNumber={1}/>
        <div className="UserTerminalPage2-1-1">
          <InnerHeader 
            pageTitle = '新能源车主'
            sideName = '用户端'
            address = '0x3C4...3BC'
          />
          <PageFunctionTitle titleName='查询产品信息'/>
          <div className="UserTerminalPage2-box">
            <div className="UserTerminalPage2-box-1">
              <img className="UserTerminalPage2-cancel" src={CancelPng}/>
              <div className="UserTerminalPage2-box-1-title">查询失败</div>
            </div>
            <div className="UserTerminalPage2-box-2">
              当您看到此提示可能是因为您所输入的产品型号与序列号不符，请再次检查后重新输入。
              <br />
              如您确认输入无误则代表此信息无法被成功检索，不符合本产品的区块链物联网溯源标准。
            </div>
          </div>
        </div>
      </div>


      {/* <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper-5">查询产品信息</div>

          <div className="overlap-6">
            <div className="view-3">
              <div className="overlap-7">
                <div className="text-wrapper-6">查询失败</div>
                <img className="cancel" alt="Cancel" src={CancelPng}/>
              </div>
            </div>
            <p className="p">
              当您看到此提示可能是因为您所输入的产品型号与序列号不符，请再次检查后重新输入。
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; 如您确认输入无误则代表此信息无法被成功检索，不符合本产品的区块链物联网溯源标准。
            </p>
            <img className="error" alt="Error" src={ErrorPng} />
          </div>
        </div>
      </div> */}
    </div>
  );
});
