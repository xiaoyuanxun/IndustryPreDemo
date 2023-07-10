import React, { useState } from "react";
import "./page1.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png';
import Line6Svg from '../../images/Line 6.svg';
import Line7Svg from '../../images/Line 7.svg';
import BackPng from '../../images/Back.png';
import OkPng from '../../images/Ok.png';
import { useNavigate, useLocation } from 'react-router-dom';

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

  const [productName, setProductName] = useState(messages?.productName || '');
  const [productModeNumber, setProductModeNumber] = useState(messages?.productModeNumber || '');
  const [productDescription, setProductDescription] = useState(messages?.productDescription|| '');

  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/system');
  };
  
  const handleGoToExperimenPage = () => {
    navigate('/experiment/2');
  };

  const handleGoToDataPage = () => {
    navigate('/data');
  };

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
