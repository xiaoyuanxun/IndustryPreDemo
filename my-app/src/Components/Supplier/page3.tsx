import React from "react";
import "./page3.css";
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
import BulletListPng from '../../images/Bullet List.png'
import LessThanPng from '../../images/Less Than.png'
import MoreThanPng from '../../images/More Than.png'
import { useNavigate } from 'react-router-dom';

export const SupplierPage3 = React.memo(() => {
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
    <div className="SupplierPage3">
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
          <h1 className="h-1">交付列表</h1>
          <div className="view-3">
            <div className="overlap-6">
              <div className="text-wrapper-5">供应商</div>
              <div className="text-wrapper-6">0x123···323</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
          <div className="view-4">
            <div className="view-5">
              <img className="line-4" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-7">产品名称</div>
              <div className="text-wrapper-8">产品型号</div>
              <div className="text-wrapper-9">交付哈希值</div>
            </div>
            <div className="div-2">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-3">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-4">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-5">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-6">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-7">
              <img className="line-5" alt="Line" src={Line6Svg}/>
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-8">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-9">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-10">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
            <div className="div-11">
              <img className="line-5" alt="Line" src={Line6Svg} />
              <div className="text-wrapper-10">1型电池</div>
              <div className="text-wrapper-11">TEST-123</div>
              <div className="text-wrapper-12">0x70df8fa2db2e53c25de9f962a64532b8bac63e...</div>
            </div>
          </div>
          <div className="view-6">
            <div className="overlap-group-wrapper-2">
              <div className="overlap-group-2">
                <div className="text-wrapper-13">1</div>
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-7">
                <div className="text-wrapper-13">2</div>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-7">
                <div className="text-wrapper-13">3</div>
              </div>
            </div>
            <img className="less-than" alt="Less than" src={LessThanPng} />
            <img className="less-than-2" alt="Less than" src={MoreThanPng} />
          </div>
        </div>
      </div>
    </div>
  );
});
