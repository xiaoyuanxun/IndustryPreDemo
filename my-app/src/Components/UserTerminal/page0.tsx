import React, { useState } from "react";
import "./page0.css";
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, userPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { useNavigate } from 'react-router-dom';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

export const UserTerminalPage0 = React.memo(() => {
  const [productModeNumber, setProductModeNumber] = useState('');
  const [productHashCode, setProductHashCode] = useState('');
  const navigate = useNavigate();

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
  };

  const handleProductHashCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductHashCode(event.target.value);
  };

  const formatDate = (timestamp: number) => {
    console.log('timestamp : ', timestamp);
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(userPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('用户操作员地址：', await signer.getAddress());

      const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);

      const elements = productHashCode.split("-");
      const event_modeNumber = elements[0];
      const event_batchId = elements[2];
      const event_specialId = elements[3];

      if(event_modeNumber !== productModeNumber) {
        navigate('/user/2');
        return;
      }
      console.log('event_modeNumber : ', event_modeNumber);
      console.log('event_batchId : ', event_batchId);
      console.log('event_specialId : ', event_specialId);

      const compInfo = await contract_read.getCompInfo(
        productModeNumber,
        event_batchId,
        event_specialId
      ) 
      console.log('配件信息 : ', compInfo);

      const transfer_productInfo = {
        supplyId: compInfo.supplyID.toString(),
        supplyTime: formatDate(parseInt(compInfo.supplyTime.toString())),
        enterId: compInfo.enterID.toString(),
        enterTime: formatDate(parseInt(compInfo.enterTime.toString())),
        outId: compInfo.outID.toString(),
        outTime: formatDate(parseInt(compInfo.outTime.toString()))
      };

      console.log('传递信息 : ', transfer_productInfo);
      navigate('/user/1', { state: transfer_productInfo });
    } catch(error) {
      console.error('Error : ', error);
    };
  };

  return (
    <div className="UserTerminalPage0">
      <Header/>
      <div className="UserTerminalPage0-1">
        <Sidebar activeNumber={1}/>
        <div className="UserTerminalPage0-1-1">
          <InnerHeader 
            pageTitle = '新能源车主'
            sideName = '用户端'
            address = '0x3C4...3BC'
          />
          <PageFunctionTitle titleName='查询产品信息'/>
          <div className="UserTerminalPage0-box">
            <div className="UserTerminalPage0-box-1">
              <div className="UserTerminalPage0-box-1-title">
                产品型号
              </div>
              <input
                className="UserTerminalPage0-box-1-input"
                type="text"
                value={productModeNumber}
                onChange={handleProductModeNumberChange}
              />
            </div>
            <div className="UserTerminalPage0-box-2">
              <div className="UserTerminalPage0-box-2-title">
                产品序列号
              </div>
              <input
                className="UserTerminalPage0-box-2-input"
                type="text"
                value={productHashCode}
                onChange={handleProductHashCodeChange}
              />
            </div>
            <div className="UserTerminalPage0-box-3" onClick={handleSubmit}>
              <div className="UserTerminalPage0-box-3-title">
                提交
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
