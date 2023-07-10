import React, { useState } from "react";
import "./page1.css";
import Line7Svg from '../../images/Line 7.svg';
import OkPng from '../../images/Ok.png';
import { useLocation } from 'react-router-dom';

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
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper-5">创建成功</div>
          <div className="view-4">
            <div className="overlap-7">
              <div className="text-wrapper-8">提交成功</div>
              <img className="ok" alt="Ok" src={OkPng} />
              <div className="text-wrapper-9">备注</div>
              <img className="line-4" alt="Line" src={Line7Svg} />
              <img className="line-5" alt="Line" src={Line7Svg} />
              <img className="line-6" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-10">产品名称</div>
              <div className="text-wrapper-11">{productName}</div>
              <div className="text-wrapper-12">产品型号</div>
              <div className="text-wrapper-13">{productModeNumber}</div>
              <div className="text-wrapper-14">
                {productDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
