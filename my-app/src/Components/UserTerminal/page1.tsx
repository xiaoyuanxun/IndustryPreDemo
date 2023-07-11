import React from "react";
import "./page1.css";
import Line7Svg from '../../images/Line 7.svg'
import Arrow2Svg from '../../images/Arrow 2.svg'
import { useLocation } from 'react-router-dom';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

interface ProductInfo {
  supplyId?: string,
  supplyTime?: string,
  enterId?: string,
  enterTime?: string,
  outId?: string,
  outTime?: string
}

export const UserTerminalPage1 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);

  const supplyId = messages?.supplyId || '';
  const supplyTime = messages?.supplyTime || '';
  const enterId = messages?.enterId || '';
  const enterTime = messages?.enterTime || '';
  const outId = messages?.outId || '';
  const outTime = messages?.outTime || '';

  return (
    <div className="UserTerminalPage1">
      <Header/>
      <div className="UserTerminalPage1-1">
        <Sidebar activeNumber={1}/>
        <div className="UserTerminalPage1-1-1">
          <InnerHeader 
            pageTitle = '新能源车主'
            sideName = '用户端'
            address = '0x3C4...3BC'
          />
          <PageFunctionTitle titleName='查询产品信息'/>
          <div className="UserTerminalPage1-box">
            <div className="UserTerminalPage1-box-1">
              <img className="UserTerminalPage1-logo" src={Arrow2Svg}/>
              <div className="UserTerminalPage1-box-1-box">
                <div className="UserTerminalPage1-box-1-box-title">供应商</div>
                <div className="UserTerminalPage1-box-1-box-id">
                  {/* ID: 123 */}
                  ID: {supplyId}
                </div>
              </div>
              <div className="UserTerminalPage1-box-1-time">
                {/* 2023/7/2 10:00:00 */}
                {supplyTime}
              </div>
            </div>
            <img className="UserTerminalPage1-line" src ={Line7Svg}/>

            <div className="UserTerminalPage1-box-2">
              <img className="UserTerminalPage1-logo" src={Arrow2Svg}/>
              <div className="UserTerminalPage1-box-2-box">
                <div className="UserTerminalPage1-box-2-box-title">加工厂</div>
                <div className="UserTerminalPage1-box-2-box-id">
                  {/* ID: 123 */}
                  ID: {enterId}
                </div>
              </div>
              <div className="UserTerminalPage1-box-2-time">
                {/* 2023/7/2 10:00:00 */}
                {enterTime}
              </div>
            </div>
            <img className="UserTerminalPage1-line" src ={Line7Svg}/>

            <div className="UserTerminalPage1-box-2">
              <img className="UserTerminalPage1-logo" src={Arrow2Svg}/>
              <div className="UserTerminalPage1-box-2-box">
                <div className="UserTerminalPage1-box-2-box-title">销售商</div>
                <div className="UserTerminalPage1-box-2-box-id">
                  {/* ID: 123 */}
                  ID: {outId}
                </div>
              </div>
              <div className="UserTerminalPage1-box-2-time">
                {/* 2023/7/2 10:00:00 */}
                {outTime}
              </div>
            </div>
            <img className="UserTerminalPage1-line" src ={Line7Svg}/>
          </div>
        </div>
      </div>
    </div>
  );
});
