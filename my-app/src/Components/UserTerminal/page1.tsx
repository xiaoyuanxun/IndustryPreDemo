import React from "react";
import "./page1.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import background_image_Png from '../../images/background_image_1.png'
import CarRepairSvg from '../../images/Car repair.svg'
import Vector2Svg from '../../images/vector-2.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import BackPng from '../../images/Back.png'
import OkPng from '../../images/Ok.png'
import LessThanPng from '../../images/Less Than.png'
import MoreThanPng from '../../images/More Than.png'
import Arrow2Svg from '../../images/Arrow 2.svg'
import { useNavigate } from 'react-router-dom';

export const UserTerminalPage1 = React.memo(() => {
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
          <div className="overlap-group">
            <div className="view">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <div className="text-wrapper" onClick={handleGoToHomePage}>
                    系统首页
                  </div>
                  <img className="line" alt="Line" src={lineSvg} />
                  <img className="img" alt="Booking" src={BookingPng} />
                </div>
              </div>
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-3">
                    <div className="text-wrapper-2" onClick={handleGoToExperimenPage}>
                      参与实验
                    </div>
                    <img className="line-2" alt="Line" src={lineSvg} />
                    <img className="img" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4">
                    <div className="text-wrapper" onClick={handleGoToDataPage}>
                      实验数据
                    </div>
                    <img className="line" alt="Line" src={lineSvg}/>
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tittle">
              <div className="overlap-5">
                <div className="text-wrapper-3">区块链物联网实训系统</div>
                <img className="image" alt="Image" src={schooLogoPng}/>
                <div className="text-wrapper-4">张三</div>
                <img className="account" alt="Account" src={AccountPng} />
              </div>
            </div>
          </div>
          <h1 className="h-1">新能源车主</h1>
          <div className="text-wrapper-5">查询产品信息</div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
          <div className="div-2">
            <img className="line-4" alt="Line" src={Line7Svg} />
            <div className="text-wrapper-6">供应商</div>
            <div className="text-wrapper-7">ID: 123</div>
            <div className="text-wrapper-8">2023/7/2 10:00:00</div>
            <img className="arrow" alt="Arrow" src={Arrow2Svg} />
          </div>
          <div className="div-3">
            <img className="line-4" alt="Line" src={Line7Svg} />
            <div className="text-wrapper-6">加工厂1</div>
            <div className="text-wrapper-7">ID: 123</div>
            <div className="text-wrapper-8">2023/7/2 10:00:00</div>
            <img className="arrow" alt="Arrow" src={Arrow2Svg} />
          </div>
          <div className="div-4">
            <img className="line-4" alt="Line" src={Line7Svg} />
            <div className="text-wrapper-6">销售商1</div>
            <div className="text-wrapper-7">ID: 123</div>
            <div className="text-wrapper-8">2023/7/2 10:00:00</div>
            <img className="arrow" alt="Arrow" src={Arrow2Svg} />
          </div>
        </div>
      </div>
    </div>
  );
});
