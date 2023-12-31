import React, { useState } from "react";
import "./page6.css";
import { useNavigate } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, factoryPrivateKey, BASE } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";
import ProgressLine from '../../images/SupplierPage0Progress.png'
import FactProgressLine from '../../images/SupplierPage0Progress1.png'

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
    
      console.log('serialNumberRange_min : ', serialNumberRange_min);
      console.log('serialNumberRange_max : ', serialNumberRange_max);
      console.log('serialNumberRange : ', serialNumberRange);

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
    <Header/>
    <div className="FactorySidePage6-1">
      <Sidebar activeNumber={1}/>
      <div className="FactorySidePage6-1-1">
        <InnerHeader 
          pageTitle = '产品出库'
          sideName = '工厂端'
          address = '0xf39...266'
        />
        <PageFunctionTitle titleName='提交出库信息'/>
        <div className="FactorySidePage6-box">
          <div className="FactorySidePage6-box-1">
            <div className="FactorySidePage6-box-1-name">产品型号</div>
            <input
              className="FactorySidePage6-box-1-input"
              type="text"
              value={productModeNumber}
              onChange={handleProductModeNumberChange}
            />
          </div>
          <div className="FactorySidePage6-box-1">
            <div className="FactorySidePage6-box-2-name">产品序列号范围</div>
            <input
              className="FactorySidePage6-box-1-input"
              type="text"
              value={serialNumberRange}
              onChange={handleserialNumberRangeChange}
            />
          </div>
          <div className="FactorySidePage6-box-2" onClick={handleSubmit}>
            <div className="FactorySidePage6-box-2-title">查询</div>
          </div>
        </div>
        <div className='SupplierPage0-progress'>
            <div className='SupplierPage0-progress-name'>
              1/3
            </div>
            <div className='SupplierPage0-progress-line'>
              <img className='SupplierPage0-progress-line-2' alt='factProgres' src={FactProgressLine}/>
              <img className='SupplierPage0-progress-line-1' alt='allProgress' src={ProgressLine}/>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
});

function isAMoreThanB(A: string, B: string): boolean {
  const numberA = parseInt(A, 10);
  const numberB = parseInt(B, 10);
  
  console.log('A : ', numberA);
  console.log('B : ', numberB);
  // console.log('A > B', A > )
  return ( numberA > numberB );
}
