import React, { useState } from "react";
import "./page3.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import BackPng from '../../images/Back.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, factoryPrivateKey, BASE } from "../../contractConfig";
import contractAbi from '../../contractABI.json';

interface ProductInfo {
  productHashCode?: string,
  productState?: string
}

export const FactorySidePage3 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);

  const [productHashCode, setProductHashCode] = useState(messages?.productHashCode || '');
  const [productState, setProductState] = useState(messages?.productState || '待确认')
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

  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(factoryPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('工厂操作员地址：', await signer.getAddress());

      const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      // const productInfo = contract_read.
      const tx = await contract.enterStorge(productHashCode);
      const receipt = await tx.wait();
      console.log('入库 : ', receipt);

      if(receipt.events.length > 0) {
        const productModeNumber = await contract_read.getModelNumberByHash(productHashCode);
        console.log('productModeNumber : ', productModeNumber);

        const productInfo = await contract_read.getProductInfo(productModeNumber);
        console.log('productInfo : ', productInfo);

        const getCompInfoByHashResult = await contract_read.getCompInfoRangeNumberByHash(productHashCode);
        console.log('getCompInfoByHashResult : ', getCompInfoByHashResult);

      
        const transfer_productInfo = {
          productName: productInfo.productName, 
          productModeNumber: productModeNumber, 
          productDescription: productInfo.note,
          serialNumberRange_min: (
            ethers.BigNumber.from(getCompInfoByHashResult[0]).sub(BASE)
          ).toString(),
          serialNumberRange_max: (
            ethers.BigNumber.from(getCompInfoByHashResult[1]).sub(BASE)
          ).toString(),
        };
        console.log('传递信息 : ', transfer_productInfo);

        navigate('/factory/5', { state: transfer_productInfo });
      }
    } catch(error) {
      console.log('Error : ', error);
    };
  };

  return (
    <div className="FactorySidePage3">
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
                    <img className="line-2" alt="Line" src={lineSvg}/>
                    <img className="img" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4" onClick={handleGoToDataPage}>
                    <div className="text-wrapper" onClick={handleGoToDataPage}>
                      实验数据
                    </div>
                    <img className="line" alt="Line" src={lineSvg}/>
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
              <div className="overlap-group-2" onClick={handleSubmit}>
                <div className="text-wrapper-5">确认入库</div>
              </div>
              <img className="line-3" alt="Line" src={Line7Svg} />
              <img className="line-4" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-6">入库哈希编码</div>
              <div className="text-wrapper-7">{productHashCode}</div>
              <div className="text-wrapper-8">当前入库状态</div>
              <div className="text-wrapper-9">{productState}</div>
            </div>
          </div>
          <div className="text-wrapper-10">提交入库信息</div>
          <div className="view-4">
            <div className="overlap-7">
              <div className="text-wrapper-11">工厂端</div>
              <div className="text-wrapper-12">0xf39...266</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-5" alt="Line" src={Line6Svg} />
        </div>
      </div>
    </div>
  );
});
