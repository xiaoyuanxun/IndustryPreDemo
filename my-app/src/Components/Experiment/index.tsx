import React from "react";
import "./index.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import CarRepairSvg from '../../images/Car repair.svg'
import Vector2Svg from '../../images/vector-2.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import { useNavigate } from 'react-router-dom';

export const Experiment_1 = React.memo(() => {
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
    <div className="page1-element">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="selection">
            <div className="overlap-6">
              <div className="text-wrapper-5">汽车组装工厂</div>
              <img className="car-repair" alt="Car repair" src={CarRepairSvg} />
            </div>
          </div>
          <div className="selected">
            <div className="overlap-7">
              <div className="text-wrapper-6">汽车组装工厂</div>
              <img className="car-repair-2" alt="Car repair" src={CarRepairSvg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const Experiment_2 = React.memo(() => {
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/system');
  };
  
  const handleGoToExperimenPage = () => {
    navigate('/experiment/2');
  };

  const handleGoToExperimen1Page = () => {
    navigate('/experiment/1');
  };

  const handleGoToDataPage = () => {
    navigate('/data');
  };

  const handleGoToSupplierPage = () => {
    navigate('/supplier');
  };

  const handleGoToFactoryPage = () => {
    navigate('/factory');
  };

  const handleGoToUserPage = () => {
    navigate('/user');
  };
    return (
      <div className="page2-element">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="view-3">
              <div className="overlap-6" onClick={handleGoToSupplierPage}>
                <h1 className="text-wrapper-7" onClick={handleGoToSupplierPage}>
                  配件供应商
                </h1>
                <img className="vector" alt="Vector" src={Vector} />
              </div>
            </div>
            <div className="view-4">
              <div className="overlap-7" onClick={handleGoToFactoryPage} >
                <div className="text-wrapper-6" onClick={handleGoToFactoryPage}>
                  新能源汽车
                  <br />
                  加工厂
                </div>
                <div className="group">
                  <div className="overlap-group-2">
                    <div className="rectangle" />
                    <img className="vector-2" alt="Vector" src={Vector2Svg}  onClick={handleGoToExperimen1Page} />
                  </div>
                </div>
              </div>
            </div>
            <div className="view-5">
              <div className="overlap-6" onClick={handleGoToUserPage}>
                <div className="text-wrapper-5" onClick={handleGoToUserPage}>新能源车主</div>
                <img className="vector-3" alt="Vector" src={Vector3Svg} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });