import React, { useState } from "react";
import "./page4.css";
import Line7Svg from '../../images/Line 7.svg'
import { useLocation } from 'react-router-dom';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";
interface ProductInfo {
  productHashCode?: string
}

export const FactorySidePage4 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);

  const [ productHashCode ] = useState(messages?.productHashCode || '');

  return (
    <div className="FactorySidePage4">
      <Header/>
      <div className="FactorySidePage4-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage4-1-1">
          <InnerHeader 
            pageTitle = '配件入库'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='提交入库信息'/>
          <div className="FactorySidePage4-box">
            <div className="FactorySidePage4-box-1">
              <div className="FactorySidePage4-box-1-name">入库哈希编码</div>
              <div className="FactorySidePage4-box-1-hash">
                {/* 0x70df8fa2db2e53c25de9f962a6458bac63ecfc8d3947ae176ba42590962f8275 */}
                {productHashCode}
              </div>
            </div>
            <img className="FactorySidePage4-line" src={Line7Svg}/>
            <div className="FactorySidePage4-box-1">
              <div className="FactorySidePage4-box-1-name">当前入库状态</div>
              <div className="FactorySidePage4-box-1-hash">已入库</div>
            </div>
            <div className="FactorySidePage4-box-2">
              <div className="FactorySidePage4-box-2-title">已入库</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
