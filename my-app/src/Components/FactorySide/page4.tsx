import React, { useState } from "react";
import "./page4.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import BackPng from '../../images/Back.png'
import { useNavigate, useLocation } from 'react-router-dom';

interface ProductInfo {
  productHashCode?: string
}

export const FactorySidePage4 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);

  const [productHashCode, setProductHashCode] = useState(messages?.productHashCode || '');
  const navigate = useNavigate();

  const handleProductHashCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductHashCode(event.target.value);
  };

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
    <div className="FactorySidePage4">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="view-3">
            <div className="overlap-6">
              <div className="overlap-group-2">
                <div className="text-wrapper-5">已入库</div>
              </div>
              <img className="line-3" alt="Line" src={Line7Svg} />
              <img className="line-4" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-6">入库哈希编码</div>
              <div className="text-wrapper-7">{productHashCode}</div>
              <div className="text-wrapper-8">当前入库状态</div>
              <div className="text-wrapper-9">已入库</div>
            </div>
          </div>
          <div className="text-wrapper-10">提交入库信息</div>
        </div>
      </div>
    </div>
  );
});
