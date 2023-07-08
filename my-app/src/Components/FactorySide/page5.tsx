import React, { useState } from "react";
import "./page5.css";
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
import { useNavigate, useLocation } from 'react-router-dom';

interface ProductInfo {
  productName?: string,
  productModeNumber?: string,
  productDescription?: string,
  serialNumberRange_min?: string,
  serialNumberRange_max?: string,
}

export const FactorySidePage5 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);
  
  const [productName, setProductName] = useState(messages?.productName || '');
  const [productModeNumber, setProductModeNumber] = useState(messages?.productModeNumber || '');
  const [productDescription, setProductDescription] = useState(messages?.productDescription|| '');
  const [serialNumberRange_min, setSerialNumberRange_min] = useState(messages?.serialNumberRange_min || '');  
  const [serialNumberRange_max, setSerialNumberRange_max] = useState(messages?.serialNumberRange_max || '');

  const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
  };

  const handleProductDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductDescription(event.target.value);
  };

  const handleserialNumberRange_minChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange_min(event.target.value);
  };

  const handleserialNumberRange_maxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange_max(event.target.value);
  };

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
    <div className="FactorySidePage5">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="view">
              <div className="overlap-group-wrapper">
                <div className="div" onClick={handleGoToHomePage}>
                  <div className="text-wrapper" onClick={handleGoToHomePage}>
                    系统首页
                  </div>
                  <img className="line" alt="Line" src={lineSvg} />
                  <img className="img" alt="Booking" src={BookingPng} />
                </div>
              </div>
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-3" onClick={handleGoToExperimenPage}>
                    <div className="text-wrapper-2" onClick={handleGoToExperimenPage}>
                      参与实验
                    </div>
                    <img className="line-2" alt="Line" src={lineSvg} />
                    <img className="img" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4" onClick={handleGoToDataPage}>
                    <div className="text-wrapper" onClick={handleGoToDataPage}>
                      实验数据
                    </div>
                    <img className="line" alt="Line" src={lineSvg} />
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
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
          <h1 className="h-1">配件入库</h1>
          <div className="text-wrapper-5">提交入库信息</div>
          <div className="view-3">
            <div className="overlap-6">
              <div className="text-wrapper-6">供应商</div>
              <div className="text-wrapper-7">0x123···323</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
          <div className="view-4">
            <div className="overlap-7">
              <div className="text-wrapper-8">入库成功</div>
              <img className="ok" alt="Ok" src={OkPng} />
              <div className="text-wrapper-9">备注</div>
              <img className="line-4" alt="Line" src={Line7Svg} />
              <img className="line-5" alt="Line" src={Line7Svg} />
              <img className="line-6" alt="Line" src={Line7Svg} />
              <img className="line-7" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-10">产品名称</div>
              <div className="text-wrapper-11">{productName}</div>
              <div className="text-wrapper-12">产品型号</div>
              <div className="text-wrapper-13">{productModeNumber}</div>
              <div className="text-wrapper-14">产品序列号范围</div>
              <div className="text-wrapper-15">{serialNumberRange_min}-{serialNumberRange_max}</div>
              <div className="text-wrapper-16">
                {productDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
