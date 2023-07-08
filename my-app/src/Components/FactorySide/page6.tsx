import React, { useState } from "react";
import "./page6.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import BackPng from '../../images/Back.png'
import { useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, factoryPrivateKey, BASE } from "../../contractConfig";
import contractAbi from '../../contractABI.json';

export const FactorySidePage6 = React.memo(() => {
  const [productModeNumber, setProductModeNumber] = useState('');
  const [serialNumberRange, setSerialNumberRange] = useState('');
  const navigate = useNavigate();

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
  };

  const handleserialNumberRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange(event.target.value);
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
  
  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(factoryPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('工厂操作员地址：', await signer.getAddress());

      const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);

      const productInfo = await contract_read.getProductInfo(productModeNumber);
      console.log('productInfo', productInfo);

      if(productInfo.productName == '') {
        alert('输入产品型号错误 !');
        return;
      };

      const getCompInfoRangeNumberByModelNumberResult = await contract_read.getCompInfoRangeNumberByModelNumber(productModeNumber);
      console.log('getCompInfoRangeNumberByModelNumberResult : ', getCompInfoRangeNumberByModelNumberResult);
      
      const serialNumberRange_min =
        ethers.BigNumber.from(getCompInfoRangeNumberByModelNumberResult[0])
          .sub(BASE).toString();
      const serialNumberRange_max = 
        ethers.BigNumber.from(getCompInfoRangeNumberByModelNumberResult[1])
          .sub(BASE).toString();
      
      if(isAMoreThanB(serialNumberRange, serialNumberRange_max)) {
        alert('序列号超过范围 !');
        return;
      }
      
      const transfer_productInfo = {
        productName: productInfo.productName, 
        productModeNumber: productModeNumber, 
        productDescription: productInfo.note,
        serialNumberRange_min: serialNumberRange_min,
        serialNumberRange_max: serialNumberRange
      };

      console.log('传递信息 : ', transfer_productInfo);
      navigate('/factory/7', { state: transfer_productInfo });
    } catch(error) {
      console.error('Error : ', error);
    };
  };

  return (
    <div className="FactorySidePage6">
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
          <h1 className="h-1">产品出库</h1>
          <div className="view-3">
            <div className="overlap-6">
              <div className="text-wrapper-5">产品型号</div>
              <input
                  className="rectangle"
                  type="text"
                  value={productModeNumber}
                  onChange={handleProductModeNumberChange}
              />
              <input
                  className="rectangle-2"
                  type="text"
                  value={serialNumberRange}
                  onChange={handleserialNumberRangeChange}
              />
              <div className="text-wrapper-6">产品序列号范围</div>
              <div className="rectangle-3" />
              <div className="view-4">
                <div className="overlap-group-2" onClick={handleSubmit}>
                  <div className="text-wrapper-7">提交</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-8">提交出库信息</div>
          <div className="view-5">
            <div className="overlap-7">
              <div className="text-wrapper-9">供应商</div>
              <div className="text-wrapper-10">0x123···323</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
          <div className="view-6">
            <div className="rectangle-wrapper">
              <div className="rectangle-4" />
            </div>
            <div className="text-wrapper-11">1/3</div>
          </div>
        </div>
      </div>
    </div>
  );
});

function isAMoreThanB(A: string, B: string): boolean {
  const numberA = parseInt(A, 10);
  const numberB = parseInt(B, 10);

  return ( A > B );
}
