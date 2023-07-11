import React, { useState } from "react";
import "./page5.css";
import Line7Svg from '../../images/Line 7.svg'
import OkPng from '../../images/Ok.png'
import { useLocation } from 'react-router-dom';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

interface ProductInfo {
  productName?: string,
  productModeNumber?: string,
  productDescription?: string,
  serialNumberRange_min?: string,
  serialNumberRange_max?: string,
}

export const FactorySidePage5 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);
  
  const [ productName ] = useState(messages?.productName || '');
  const [ productModeNumber ] = useState(messages?.productModeNumber || '');
  const [ productDescription ] = useState(messages?.productDescription|| '');
  const [ serialNumberRange_min ] = useState(messages?.serialNumberRange_min || '');  
  const [ serialNumberRange_max ] = useState(messages?.serialNumberRange_max || '');

  return (
    <div className="FactorySidePage5">
      <Header/>
      <div className="FactorySidePage5-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage5-1-1">
          <InnerHeader 
            pageTitle = '配件入库'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='提交入库信息'/>
          <div className="FactorySidePage5-box">
            <div className="FactorySidePage5-box-1">
              <img className="FactorySidePage5-logo" src={OkPng}/>
              <div className="FactorySidePage5-box-1-title">入库成功</div>
            </div>
            <img className="FactorySidePage5-line" src={Line7Svg}/>
            <div className="FactorySidePage5-box-2">
              <div className="FactorySidePage5-box-2-title">产品名称</div>
              <div className="FactorySidePage5-box-2-value">
                {/* 1型电池 */}
                {productName}
              </div>
            </div>
            <img className="FactorySidePage5-line" src={Line7Svg}/>
            <div className="FactorySidePage5-box-2">
              <div className="FactorySidePage5-box-2-title">产品型号</div>
              <div className="FactorySidePage5-box-2-value">
                {/* TEST-123 */}
                {productModeNumber}
              </div>
            </div>
            <img className="FactorySidePage5-line" src={Line7Svg}/>
            <div className="FactorySidePage5-box-2">
              <div className="FactorySidePage5-box-2-title">产品序列号范围</div>
              <div className="FactorySidePage5-box-2-value">
                {/* 100-200 */}
                {serialNumberRange_min}-{serialNumberRange_max}
              </div>
            </div>
            <img className="FactorySidePage5-line" src={Line7Svg}/>
            <div className="FactorySidePage5-box-2">
              <div className="FactorySidePage5-box-2-title">备注</div>
              <div className="FactorySidePage5-box-2-value">
                {/* 这是个电池，通过工厂端配件库信息对应进行上传，并且上传后通过工厂端进行确认入库信息后完成入库 */}
                {productDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});