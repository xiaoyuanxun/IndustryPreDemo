import React, { useEffect, useState } from "react";
import "./page0.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import Line6Svg from '../../images/Line 6.svg'
import BackPng from '../../images/Back.png'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ethers } from 'ethers';
import { contractAddress, factoryPrivateKey, rpcProviderUrl } from '../../contractConfig';
import contractAbi from '../../contractABI.json';

export const FactorySidePage0 = React.memo(() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('张三');
  const [walletAddress, setWalletAddress] = useState('0x123···323');
  const [shortWalletAddress, setShortWalletAddress] = useState('0x123···323');
  const [walletPrivateKey, setWalletPrivateKey] = useState('');
  const [productName, setProductName] = useState("");
  const [productModeNumber, setProductModeNumber] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
    // console.log('配件名称改变 : ', productName);
  };

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
    // console.log('配件型号改变 : ', productModeNumber);
  };

  const handleProductDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductDescription(event.target.value);
    // console.log('配件型号改变 : ', productModeNumber);
  };

  const getShortAddress = () => {
    const prefix = walletAddress.substring(0, 5); // 截取前三位
    const suffix = walletAddress.substring(walletAddress.length - 3); // 截取后三位
    const shortAddress = `${prefix}···${suffix}`;
    return shortAddress;
  }

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

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // useEffect(() => {
  //   if (isLoggedIn && username !== '张三') {
  //     fetchPrivateKey();
  //   }
  // }, [isLoggedIn, username]);

  useEffect(() => {
    setShortWalletAddress(getShortAddress());
  }, [walletAddress]);

    const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(factoryPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('工厂操作员地址：', await signer.getAddress());

      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      const tx = await contract.creatOrupdateInfo(
        productName, 
        productModeNumber, 
        productDescription
      );
      const receipt = await tx.wait();
      console.log('创建产品信息 : ', receipt);
      // console.log('TX Return : ', receipt.logs[0].data);

      // setIsCreationSuccess(true); // 设置为创建成功
      const productInfo = {
        productName: productName,
        productModeNumber: productModeNumber,
        productDescription: productDescription
      };
      console.log('传递信息 : ', productInfo);
      navigate('/factory/1', { state: productInfo });
    } catch(error) {
      console.log('Error : ', error);
    };
  };

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get("http://localhost:8000/check-login-status", { withCredentials: true });
      
      const data = await response.data;

      console.log('检查是否登录 : ', data);

      setIsLoggedIn(data.isLoggedIn);
      setUsername(data.username || '张三');
      
      if (data.isLoggedIn && username != '张三') {
        await fetchPrivateKey(); // 调用fetchPrivateKey函数以获取私钥信息
      }

      // console.log('getShortAddress result : ', getShortAddress());

      setShortWalletAddress(getShortAddress())
    } catch (error) {
      console.error("请求错误:", error);
    }
  };

  const fetchPrivateKey = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/user-wallet/${username}`, { withCredentials: true });
      const data = response.data;
  
      // 处理返回的私钥数据
      const walletAddress = data.walletAddress;
      const walletPrivateKey = data.walletPrivateKey;

      setWalletAddress(walletAddress);
      setWalletPrivateKey(walletPrivateKey);

      console.log('私钥信息:', walletAddress, walletPrivateKey);
      // 在这里进行后续操作，例如存储私钥信息或执行其他逻辑
    } catch (error) {
      console.error("请求错误:", error);
    }
  };

  return (
    // <div  >
    //   <InnerHeader/>
    // </div>
    <div className="FactorySidePage0">
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
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tittle">
              <div className="overlap-5">
                <div className="text-wrapper-3">区块链物联网实训系统</div>
                <img className="image" alt="Image" src={schooLogoPng} />
                <div className="text-wrapper-4">{username}</div>
                <img className="account" alt="Account" src={AccountPng} />
              </div>
            </div>
          </div>
          <h1 className="h-1">新增配件</h1>
          <div className="view-3">
          <div className="text-wrapper-5">产品名称</div>
              <input
                className="rectangle"
                type="text"
                value={productName}
                onChange={handleProductNameChange}
              />
              <input
                className="rectangle-2"
                type="text"
                value={productModeNumber}
                onChange={handleProductModeNumberChange}
              />
              <input
                className="rectangle-3"
                type="text"
                value={productDescription}
                onChange={handleProductDescriptionChange}
              />
              <div className="text-wrapper-6">产品型号</div>
              {/* <div className="rectangle-4" /> */}
              <div className="view-4">
                <div className="overlap-group-2" onClick={handleSubmit}> 
                  <div className="text-wrapper-7">
                    提交
                  </div>
                </div>
              </div>
              <div className="text-wrapper-8">产品备注</div>
            {/* <div className="overlap-6">

            </div> */}
          </div>
          <div className="text-wrapper-9">配件详细信息</div>
          <div className="view-5">
            <div className="overlap-7">
              <div className="text-wrapper-10">工厂端</div>
              <div className="text-wrapper-11">{shortWalletAddress}</div>
            </div>
          </div>
          <img className="back" alt="Back" src={BackPng} />
          <img className="line-3" alt="Line" src={Line6Svg} />
        </div>
      </div>
    </div>
  );
});
