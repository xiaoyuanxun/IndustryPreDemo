import React from "react";
import "./page0.css";
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

export const FactorySidePage0 = React.memo(() => {
  return (
    <div className="FactorySidePage0">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="view">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <div className="text-wrapper">系统首页</div>
                  <img className="line" alt="Line" src={lineSvg} />
                  <img className="img" alt="Booking" src={BookingPng} />
                </div>
              </div>
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-3">
                    <div className="text-wrapper-2">参与实验</div>
                    <img className="line-2" alt="Line" src={lineSvg} />
                    <img className="img" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4">
                    <div className="text-wrapper">实验数据</div>
                    <img className="line" alt="Line" src={lineSvg} />
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tittle">
              <div className="overlap-5">
                <div className="text-wrapper-3">区块链物联网实训系统</div>
                <img className="image" alt="Image" src={schooLogoPng} />
                <div className="text-wrapper-4">张三</div>
                <img className="account" alt="Account" src={AccountPng} />
              </div>
            </div>
          </div>
          <h1 className="h-1">新增配件</h1>
          <div className="view-3">
            <div className="overlap-6">
              <div className="text-wrapper-5">产品名称</div>
              <div className="rectangle" />
              <div className="rectangle-2" />
              <div className="rectangle-3" />
              <div className="text-wrapper-6">产品型号</div>
              <div className="rectangle-4" />
              <div className="view-4">
                <div className="overlap-group-2">
                  <div className="text-wrapper-7">提交</div>
                </div>
              </div>
              <div className="text-wrapper-8">产品备注</div>
            </div>
          </div>
          <div className="text-wrapper-9">配件详细信息</div>
          <div className="view-5">
            <div className="overlap-7">
              <div className="text-wrapper-10">供应商</div>
              <div className="text-wrapper-11">0x123···323</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
        </div>
      </div>
    </div>
  );
});
