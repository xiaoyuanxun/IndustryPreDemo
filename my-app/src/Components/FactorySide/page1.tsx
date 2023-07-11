import React, { useState } from "react";
import "./page1.css";
import Line7Svg from '../../images/Line 7.svg';
import OkPng from '../../images/Ok.png';
import { useLocation } from 'react-router-dom';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

interface ProductInfo {
  productName?: string;
  productModeNumber?: string;
  productDescription?: string;
}

// export const FactorySidePage1 = React.memo((props: ProductInfo) => {
  export const FactorySidePage1 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log(messages?.productName);

  const [ productName ] = useState(messages?.productName || '');
  const [ productModeNumber ] = useState(messages?.productModeNumber || '');
  const [ productDescription ] = useState(messages?.productDescription|| '');

  return (
    <div className="FactorySidePage1">
      <Header/>
      <div className="FactorySidePage1-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage1-1-1">
          <InnerHeader 
            pageTitle = '新增配件'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='创建成功'/>
          <div className="FactorySidePage1-box">
            <div className="FactorySidePage1-box-1">
              <img className="FactorySidePage1-logo" src={OkPng}/>
              <div className="FactorySidePage1-box-1-title">提交成功</div>
            </div>
            <img className="FactorySidePage1-line" src={Line7Svg}/>
            <div className="FactorySidePage1-box-2">
              <div className="FactorySidePage1-box-2-title">产品名称</div>
              <div className="FactorySidePage1-box-2-name">
                {/* 1型电池 */}
                {productName}
              </div>
            </div>
            <img className="FactorySidePage1-line" src={Line7Svg}/>
            <div className="FactorySidePage1-box-2">
              <div className="FactorySidePage1-box-2-title">产品型号</div>
              <div className="FactorySidePage1-box-2-name">
                {/* TEST-123 */}
                {productModeNumber}
              </div>
            </div>
            <img className="FactorySidePage1-line" src={Line7Svg}/>
            <div className="FactorySidePage1-box-2">
              <div className="FactorySidePage1-box-2-title">备注</div>
              <div className="FactorySidePage1-box-2-name">
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