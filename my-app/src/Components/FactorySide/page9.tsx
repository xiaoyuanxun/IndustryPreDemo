import React, { useState, useEffect } from "react";
import "./page9.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import BackPng from '../../images/Back.png'
import LessThanPng from '../../images/Less Than.png'
import MoreThanPng from '../../images/More Than.png'
import { useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
import contractAbi from '../../contractABI.json';
import { contractAddress, rpcProviderUrl, factoryPrivateKey } from "../../contractConfig";

export const FactorySidePage9 = React.memo(() => {
  const [productArray, setProductArray] = useState([]);
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

    useEffect(() => {

    const getAllProductInfo = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new ethers.Wallet(factoryPrivateKey, provider);
        const signer = wallet.connect(provider);
        console.log('工厂操作员地址：', await signer.getAddress());

        const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);
        const productList = await contract_read.getProductList();
        console.log('查询产品列表 : ', productList);

        setProductArray(productList);
      } catch(error) {
        console.error("Error : ", error);
      }
    };

    getAllProductInfo();
  }, []);


  return (
    <div className="FactorySidePage9">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="view-4">
            <div className="view-5">
              <img className="line-4" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-7">产品名称</div>
              <div className="text-wrapper-8">产品型号</div>
            </div>
            <div className={'factory-product-box'}> 
              {/* {productArray.map((item, index) => {
                return (
                  <div className="div-2">
                    <img className="line-5" alt="Line" src={Line7Svg}/>
                    <div className="text-wrapper-9">{item[0]}</div>
                    <div className="text-wrapper-10">{item[1]}</div>
                  </div>
                );
              })} */}
            </div>


            <div className="div-2">
              <img className="line-5" alt="Line" src={Line7Svg}/>
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-3">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-4">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-5">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-6">
              <img className="line-5" alt="Line" src={Line7Svg}/>
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-7">
              <img className="line-5" alt="Line" src={Line7Svg}/>
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-8">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-9">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-10">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
            <div className="div-11">
              <img className="line-5" alt="Line" src={Line7Svg} />
              <div className="text-wrapper-9">1型电池</div>
              <div className="text-wrapper-10">TEST-123</div>
            </div>
          </div>
          <div className="view-6">
            <div className="overlap-group-wrapper-2">
              <div className="overlap-group-2">
                <div className="text-wrapper-11">1</div>
              </div>
            </div>
            <div className="overlap-wrapper-2">
              <div className="overlap-7">
                <div className="text-wrapper-11">2</div>
              </div>
            </div>
            <div className="overlap-wrapper-3">
              <div className="overlap-7">
                <div className="text-wrapper-11">3</div>
              </div>
            </div>
            <img className="less-than" alt="Less than" src={LessThanPng} />
            <img className="less-than-2" alt="Less than" src={MoreThanPng}/>
          </div>
        </div>
      </div>
    </div>
  );
});
