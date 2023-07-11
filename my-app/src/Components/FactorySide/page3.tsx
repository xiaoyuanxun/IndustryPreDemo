import React, { useState } from "react";
import "./page3.css";
import Line7Svg from '../../images/Line 7.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, factoryPrivateKey, BASE } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";

interface ProductInfo {
  productHashCode?: string,
  productState?: string
}

export const FactorySidePage3 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);

  const [ productHashCode ] = useState(messages?.productHashCode || '');
  const [ productState ] = useState(messages?.productState || '')
  const navigate = useNavigate();

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
      <Header/>
      <div className="FactorySidePage3-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage3-1-1">
          <InnerHeader 
            pageTitle = '配件入库'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='提交入库信息'/>
          <div className="FactorySidePage3-box">
            <div className="FactorySidePage3-box-1">
              <div className="FactorySidePage3-box-1-name">入库哈希编码</div>
              <div className="FactorySidePage3-box-1-hash">
                {/* 0x70df8fa2db2e53c25de9f962a6458bac63ecfc8d3947ae176ba42590962f8275 */}
                {productHashCode}
              </div>
            </div>
            <img className="FactorySidePage3-line" src={Line7Svg}/>
            <div className="FactorySidePage3-box-1">
              <div className="FactorySidePage3-box-1-name">当前入库状态</div>
              <div className="FactorySidePage3-box-1-hash">
                {/* 待入库 */}
                {productState}
              </div>
            </div>
            <div className="FactorySidePage3-box-2" onClick={handleSubmit}>
              <div className="FactorySidePage3-box-2-title">确认入库</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});