import React from "react";
import "./index.css";
import CarRepairSvg from '../../images/Car repair.svg'
import Group8Png from '../../images/Group 8.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import { useNavigate } from 'react-router-dom';
import { Header } from "../Header";
import { Sidebar } from "../Basic";

export const Experiment_1 = React.memo(() => {

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
            <div className="overlap-7">1
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

  const handleGoToExperimen1Page = () => {
    navigate('/experiment/1');
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
      <div className="UserTerminal">
      <Header/>
      <div className='UserTerminal-0'>
        <Sidebar activeNumber={1}/>
        <div className='UserTerminal-0-0'>
          <div className='UserTerminal-1' onClick={handleGoToSupplierPage}>
            <img className="UserTerminal-1-image" alt="Vector" src={Vector} />
            <div className='UserTerminal-1-info'>
              <div className="UserTerminal-1-title" onClick={handleGoToSupplierPage}>
                配件供应商
              </div>
            </div>
          </div>
          <div className='UserTerminal-2' onClick={handleGoToFactoryPage}>
            <img className="UserTerminal-2-image" alt="Vector" src={Group8Png} />
            <div className='UserTerminal-2-title'>
              新能源汽车
              <br />
              加工厂
            </div>
          </div>
          <div className='UserTerminal-3' onClick={handleGoToUserPage}>
            <img className="UserTerminal-3-image" alt="Vector" src={Vector3Svg} />
            <div className='UserTerminal-3-box'>
              <div className='UserTerminal-3-title'>
                新能源车主
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  });