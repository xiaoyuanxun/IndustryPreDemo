import React, { useState } from "react";
import "./page2.css";
import { useNavigate } from 'react-router-dom';
import { contractAddress, rpcProviderUrl, factoryPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { ethers } from "ethers";
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

export const FactorySidePage2 = React.memo(() => {
  const [productHashCode, setProductHashCode] = useState('');

  const navigate = useNavigate();

  const handleProductHashCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductHashCode(event.target.value);
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
      <Header/>
      <div className="FactorySidePage2-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage2-1-1">
          <InnerHeader 
            pageTitle = '配件入库'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='提交入库信息'/>
          <div className="FactorySidePage2-box">
            <div className="FactorySidePage2-box-1">
              <div className="FactorySidePage2-box-1-name">入库哈希编码</div>
              <input
                className="FactorySidePage2-box-1-input"
                type="text"
                value={productHashCode}
                onChange={handleProductHashCodeChange}
              />
            </div>
            <div className="FactorySidePage2-box-2" onClick={handleSubmit}>
              <div className="FactorySidePage2-box-2-title">查询</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});