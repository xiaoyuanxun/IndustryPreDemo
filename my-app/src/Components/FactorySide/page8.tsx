import React, { useState } from "react";
import "./page8.css";
import Line6Svg from '../../images/Line 6.svg'
import OkPng from '../../images/Ok.png'
import { useLocation } from 'react-router-dom';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";
import LongLine from '../../images/SupplierPage2Line.png';
import ProgressPng from '../../images/SupplierPage2Progress.png';

interface ProductInfo {
  outStorageCode?: string,
}

export const FactorySidePage8 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);
  
  const [ outStorageCode ] = useState(messages?.outStorageCode || '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(outStorageCode);
      alert('已复制到剪贴板');
    } catch (error) {
      console.error('复制失败:', error);
    }
  }

  return (
    <div className="FactorySidePage8">
      <Header/>
      <div className="FactorySidePage8-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage8-1-1">
          <InnerHeader 
                pageTitle = '配件出库'
                sideName = '工厂端'
                address = '0xf39...266'
          />
          <PageFunctionTitle titleName='完成提交'/>
          <div className="FactorySidePage8-box">
            <div className="FactorySidePage8-box-1">
              <img className="FactorySidePage8-ok" alt="Ok" src={OkPng} />
              <div className="FactorySidePage8-box-1-title">
                提交成功
              </div>
            </div>
            <div className="FactorySidePage8-box-2">
              <div className="FactorySidePage8-box-2-title">
                出库哈希编码
              </div>
              <div className="FactorySidePage8-box-2-box">
                <div className="FactorySidePage8-box-2-box-hash">
                {/* 0xc7ecef7dde2193bc6a6cba6b0b7f98bd6ec8739b7a928cbf09945ba93c8979cc */}
                  {outStorageCode}
                </div>
              </div>
              <div className="FactorySidePage8-box-2-box-copy" onClick={handleCopy}>
                <div className="FactorySidePage8-box-2-box-copy-title">
                  复制
                </div>
              </div>
            </div>
            <img className="FactorySidePage8-box-line" alt="Line" src={LongLine} />
          </div>
          <div className="FactorySidePage8-progress">
              <div className="FactorySidePage8-progress-title">
                3/3
              </div>
              <img className="FactorySidePage8-progress-image" alt="progress" src={ProgressPng} />
          </div>
        </div>
      </div>
    </div>
  );
});
