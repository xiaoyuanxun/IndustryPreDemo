import React from "react";
import "./page2.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import BackPng from '../../images/Back.png'
import CancelPng from '../../images/Cancel.png'
import ErrorPng from '../../images/Error.png'
import { useNavigate } from 'react-router-dom';

export const UserTerminalPage2 = React.memo(() => {
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
    <div className="UserTerminalPage2">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="text-wrapper-5">查询产品信息</div>

          <div className="overlap-6">
            <div className="view-3">
              <div className="overlap-7">
                <div className="text-wrapper-6">查询失败</div>
                <img className="cancel" alt="Cancel" src={CancelPng}/>
              </div>
            </div>
            <p className="p">
              当您看到此提示可能是因为您所输入的产品型号与序列号不符，请再次检查后重新输入。
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp; 如您确认输入无误则代表此信息无法被成功检索，不符合本产品的区块链物联网溯源标准。
            </p>
            <img className="error" alt="Error" src={ErrorPng} />
          </div>
        </div>
      </div>
    </div>
  );
});
