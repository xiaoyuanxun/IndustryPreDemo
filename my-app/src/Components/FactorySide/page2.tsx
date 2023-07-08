import React, { useState } from "react";
import "./page2.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import BackPng from '../../images/Back.png'
import { useNavigate } from 'react-router-dom';
import { contractAddress, rpcProviderUrl, factoryPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { ethers } from "ethers";

export const FactorySidePage2 = React.memo(() => {
  const [productHashCode, setProductHashCode] = useState('');

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

  const getStateString = (stateNumber: number) => {
    switch (stateNumber) {
      case 0 :
        return '待确认';
      case 1 :
        return '已入库';
      case 2 : 
        return '已出库';
      case 3 :
        return '已完成，代表该批次配件已全部出库';
    }
    return '待确认'
  }

  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(factoryPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('工厂操作员地址：', await signer.getAddress());

      const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);
      const state = await contract_read.getStateByHash(productHashCode);
      console.log('获取入库状态 : ', state);

      const productInfo = {
        productHashCode: productHashCode,
        productState: getStateString(state)
      };
      console.log('传递信息 : ', productInfo);
      if(state == 0) {
        navigate('/factory/3', { state: productInfo });
      } else if(state == 1) {
        navigate('/factory/4', { state: productInfo });
      } else if(state == 2) {
        alert('已出库 !');
        return;
      } else if(state == 3) {
        alert('已完成, 该批次配件已全部出库 !');
        return;
      } else {
        alert('配件入库状态错误 !');
        return;
      }
    } catch(error) {
      console.log('Error : ', error);
    };
  };

  return (
    <div className="FactorySidePage2">
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
          <div className="view-3">
            <div className="overlap-6">
              <div className="text-wrapper-5">入库哈希编码</div>
                <input
                  className="rectangle"
                  type="text"
                  value={productHashCode}
                  onChange={handleProductHashCodeChange}
                />
              <div className="rectangle-2" />
              <div className="view-4">
                <div className="overlap-group-2" onClick={handleSubmit}>
                  <div className="text-wrapper-6">查询</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-7">提交入库信息</div>
          <div className="view-5">
            <div className="overlap-7">
              <div className="text-wrapper-8">供应商</div>
              <div className="text-wrapper-9">0x123···323</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
        </div>
      </div>
    </div>
  );
});
