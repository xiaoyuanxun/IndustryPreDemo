import React, { useState } from "react";
import "./page8.css";
import Line6Svg from '../../images/Line 6.svg'
import OkPng from '../../images/Ok.png'
import { useLocation } from 'react-router-dom';

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
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper-5">完成提交</div>
          <div className="view-4">
            <div className="rectangle-wrapper">
              <div className="rectangle" />
            </div>
            <div className="text-wrapper-8">3/3</div>
          </div>
          <div className="view-5">
            <div className="overlap-7">
              <img className="line-4" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-9">提交成功</div>
              <img className="ok" alt="Ok" src={OkPng} />
              <div className="text-wrapper-10">出库哈希编码</div>
              <div className="view-6">
                <div className="overlap-group-2">
                  <div className="text-wrapper-11">{outStorageCode}</div>
                </div>
              </div>
              <div className="view-7">
                <div className="overlap-8" onClick={handleCopy}>
                  <div className="text-wrapper-12">复制</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
