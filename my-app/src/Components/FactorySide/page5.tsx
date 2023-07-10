import React, { useState } from "react";
import "./page5.css";
import Line7Svg from '../../images/Line 7.svg'
import OkPng from '../../images/Ok.png'
import { useLocation } from 'react-router-dom';

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
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper-5">提交入库信息</div>
          <div className="view-4">
            <div className="overlap-7">
              <div className="text-wrapper-8">入库成功</div>
              <img className="ok" alt="Ok" src={OkPng} />
              <div className="text-wrapper-9">备注</div>
              <img className="line-4" alt="Line" src={Line7Svg} />
              <img className="line-5" alt="Line" src={Line7Svg} />
              <img className="line-6" alt="Line" src={Line7Svg} />
              <img className="line-7" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-10">产品名称</div>
              <div className="text-wrapper-11">{productName}</div>
              <div className="text-wrapper-12">产品型号</div>
              <div className="text-wrapper-13">{productModeNumber}</div>
              <div className="text-wrapper-14">产品序列号范围</div>
              <div className="text-wrapper-15">{serialNumberRange_min}-{serialNumberRange_max}</div>
              <div className="text-wrapper-16">
                {productDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
