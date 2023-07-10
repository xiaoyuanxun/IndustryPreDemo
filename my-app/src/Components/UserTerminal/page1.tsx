import React from "react";
import "./page1.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import BackPng from '../../images/Back.png'
import OkPng from '../../images/Ok.png'
import Arrow2Svg from '../../images/Arrow 2.svg'
import { useNavigate,useLocation } from 'react-router-dom';

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
    <div className="UserTerminalPage1">
      <div className="overlap-wrapper">
        <div className="overlap">

          <div className="text-wrapper-5">查询产品信息</div>
          <div className="div-2">
            <img className="line-4" alt="Line" src={Line7Svg} />
            <div className="text-wrapper-6">供应商</div>
            <div className="text-wrapper-7">ID: {supplyId}</div>
            <div className="text-wrapper-8">{supplyTime}</div>
            <img className="arrow" alt="Arrow" src={Arrow2Svg} />
          </div>
          <div className="div-3">
            <img className="line-4" alt="Line" src={Line7Svg} />
            <div className="text-wrapper-6">加工厂</div>
            <div className="text-wrapper-7">ID: {enterId}</div>
            <div className="text-wrapper-8">{enterTime}</div>
            <img className="arrow" alt="Arrow" src={Arrow2Svg} />
          </div>
          <div className="div-4">
            <img className="line-4" alt="Line" src={Line7Svg} />
            <div className="text-wrapper-6">销售商</div>
            <div className="text-wrapper-7">ID: {outId}</div>
            <div className="text-wrapper-8">{outTime}</div>
            <img className="arrow" alt="Arrow" src={Arrow2Svg} />
          </div>
        </div>
      </div>
    </div>
  );
});
