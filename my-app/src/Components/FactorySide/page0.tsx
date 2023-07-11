import React, { useState } from "react";
import "./page0.css";
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { ethers } from 'ethers';
import { contractAddress, factoryPrivateKey, rpcProviderUrl } from '../../contractConfig';
import contractAbi from '../../contractABI.json';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

export const FactorySidePage0 = React.memo(() => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [username, setUsername] = useState('张三');
  // const [walletAddress, setWalletAddress] = useState('0x123···323');
  // const [shortWalletAddress, setShortWalletAddress] = useState('0x123···323');
  // const [walletPrivateKey, setWalletPrivateKey] = useState('');
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

  // const getShortAddress = () => {
  //   const prefix = walletAddress.substring(0, 5); // 截取前三位
  //   const suffix = walletAddress.substring(walletAddress.length - 3); // 截取后三位
  //   const shortAddress = `${prefix}···${suffix}`;
  //   return shortAddress;
  // }

  const navigate = useNavigate();

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  // useEffect(() => {
  //   if (isLoggedIn && username !== '张三') {
  //     fetchPrivateKey();
  //   }
  // }, [isLoggedIn, username]);

  // useEffect(() => {
  //   setShortWalletAddress(getShortAddress());
  // }, [walletAddress]);

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

  // const checkLoginStatus = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/check-login-status", { withCredentials: true });
      
  //     const data = await response.data;

  //     console.log('检查是否登录 : ', data);

  //     setIsLoggedIn(data.isLoggedIn);
  //     setUsername(data.username || '张三');
      
  //     if (data.isLoggedIn && username != '张三') {
  //       await fetchPrivateKey(); // 调用fetchPrivateKey函数以获取私钥信息
  //     }

  //     // console.log('getShortAddress result : ', getShortAddress());

  //     setShortWalletAddress(getShortAddress())
  //   } catch (error) {
  //     console.error("请求错误:", error);
  //   }
  // };

  // const fetchPrivateKey = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:8000/user-wallet/${username}`, { withCredentials: true });
  //     const data = response.data;
  
  //     // 处理返回的私钥数据
  //     const walletAddress = data.walletAddress;
  //     const walletPrivateKey = data.walletPrivateKey;

  //     setWalletAddress(walletAddress);
  //     setWalletPrivateKey(walletPrivateKey);

  //     console.log('私钥信息:', walletAddress, walletPrivateKey);
  //     // 在这里进行后续操作，例如存储私钥信息或执行其他逻辑
  //   } catch (error) {
  //     console.error("请求错误:", error);
  //   }
  // };

  return (
    <div className="FactorySidePage0">
      <Header/>
      <div className="FactorySidePage0-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage0-1-1">
          <InnerHeader 
            pageTitle = '新增配件'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='配件详细信息'/>
          <div className="FactorySidePage0-box">
            <div className="FactorySidePage0-box-1">
              <div className="FactorySidePage0-box-1-title">产品名称</div>
              <input
                className="FactorySidePage0-box-1-input"
                type="text"
                value={productName}
                onChange={handleProductNameChange}
              />
            </div>
            <div className="FactorySidePage0-box-2">
              <div className="FactorySidePage0-box-2-title">产品型号</div>
              <input
                className="FactorySidePage0-box-2-input"
                type="text"
                value={productModeNumber}
                onChange={handleProductModeNumberChange}
              />
            </div>
            <div className="FactorySidePage0-box-3">
              <div className="FactorySidePage0-box-3-title">产品备注</div>
              <input
                className="FactorySidePage0-box-3-input"
                type="text"
                value={productDescription}
                onChange={handleProductDescriptionChange}
              />
            </div>
            <div className="FactorySidePage0-box-4" onClick={handleSubmit}>
              <div className="FactorySidePage0-box-4-title">提交</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
