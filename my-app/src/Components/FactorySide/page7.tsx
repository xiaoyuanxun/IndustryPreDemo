import React, { useState } from "react";
import "./page7.css";
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, factoryPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { Header, InnerHeader } from "../Header";
import { Sidebar, PageFunctionTitle } from "../Basic";
import ProgressLine from '../../images/SupplierPage0Progress.png'
import FactProgressLine from '../../images/SupplierPage1FactProgress.png'

interface ProductInfo {
  productName?: string,
  productModeNumber?: string,
  productDescription?: string,
  serialNumberRange_min?: string,
  serialNumberRange_max?: string,
}

export const FactorySidePage7 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递来消息 : ', messages);
  
  const [ productName] = useState(messages?.productName || '');
  const [ productModeNumber ] = useState(messages?.productModeNumber || '');
  const [ productDescription ] = useState(messages?.productDescription|| '');
  const [ serialNumberRange_min ] = useState(messages?.serialNumberRange_min || '');  
  const [ serialNumberRange_max ] = useState(messages?.serialNumberRange_max || '');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(factoryPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('工厂操作员地址：', await signer.getAddress());

      const contract = new ethers.Contract(contractAddress, contractAbi, signer);

      const tx = await contract.OutStroge(
        productModeNumber,
        serialNumberRange_max
      );
      const receipt = await tx.wait();
      console.log('出库 : ', receipt);

      const event_modeNumber = receipt.events[0].args.modeNumber;
      const event_time = receipt.events[0].args.time.toString();
      const event_batchId = receipt.events[0].args.batchId.toString();
      const event_minserialNumber = receipt.events[0].args.minserialNumber.toString();
      const event_maxserialNumber = receipt.events[0].args.maxserialNumber.toString();

      console.log('event_modeNumber : ', event_modeNumber);
      console.log('event_time : ', event_time);
      console.log('event_batchId : ', event_batchId);
      console.log('event_minserialNumber : ', event_minserialNumber);
      console.log('event_maxserialNumber : ', event_maxserialNumber);

      const outStorageCode = `${event_modeNumber}-${event_time}-${event_batchId}-${event_minserialNumber}`;
      console.log('出库编码 : ', outStorageCode);

      const transfer_productInfo = {
        outStorageCode: outStorageCode
      };

      console.log('传递信息 : ', transfer_productInfo);
      navigate('/factory/8', { state: transfer_productInfo });
    } catch(error) {
      console.error('Error : ', error);
    };
  };

  return (
    <div className="FactorySidePage7">
      <Header/>
      <div className="FactorySidePage7-1">
        <Sidebar activeNumber={1}/>
        <div className="FactorySidePage7-1-1">
          <InnerHeader 
            pageTitle = '产品出库'
            sideName = '工厂端'
            address = '0xf39...266'
          />
          <PageFunctionTitle titleName='提交出库信息'/>
          <div className="FactorySidePage7-box">
            <div className="FactorySidePage7-box-1-title">
              产品名称
            </div>
            <div className="FactorySidePage7-box-1-answer">
              {/* 1型电池 */}
              {productName}
            </div>
            <img className="FactorySidePage7-box-line" alt="Line" src={Line6Svg} />
            <div className="FactorySidePage7-box-1-title">
              产品型号
            </div>
            <div className="FactorySidePage7-box-1-answer">
              {/* TEST-123 */}
              {productModeNumber}
            </div>
            <img className="FactorySidePage7-box-line" alt="Line" src={Line6Svg} />
            <div className="FactorySidePage7-box-1-title">
              产品序列号范围
            </div>
            <div className="FactorySidePage7-box-1-answer">
              {/* 100-200 */}
              {serialNumberRange_min}-{serialNumberRange_max}
            </div>
            <img className="FactorySidePage7-box-line" alt="Line" src={Line6Svg} />
            <div className="FactorySidePage7-box-1-title">
              备注
            </div>
            <div className="FactorySidePage7-box-1-answer">
              {/* 这是个电池，通过工厂端配件库信息对应进行上传，并且上传后通过工厂端进行确认入库信息后完成入库 */}
              {productDescription}
            </div>
          </div>
          <div className="FactorySidePage7-box-button" onClick={handleSubmit}>
              <div className="FactorySidePage7-box-button-title">
                提交
              </div>
            </div>
          <div className='FactorySidePage7-progress'>
            <div className='FactorySidePage7-progress-name'>
              2/3
            </div>
            <div className='FactorySidePage7-progress-line'>
            <img className='FactorySidePage7-progress-line-1' alt='factProgress' src={FactProgressLine}/>
            <img className='FactorySidePage7-progress-line-2' alt='allProgerss' src={ProgressLine}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
