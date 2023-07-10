import React, { useState } from "react";
import "./page7.css";
import Line7Svg from '../../images/Line 7.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, factoryPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';

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
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="view-3">
            <div className="overlap-6">
              <div className="text-wrapper-5">备注</div>
              <div className="rectangle" />
              <div className="rectangle-2" onClick={handleSubmit}/>
              <img className="line-3" alt="Line" src={Line7Svg} />
              <img className="line-4" alt="Line" src={Line7Svg} />
              <img className="line-5" alt="Line" src={Line7Svg} />
              <img className="line-6" alt="Line" src={Line7Svg}/>
              <div className="text-wrapper-6">产品名称</div>
              <div className="text-wrapper-7">{productName}</div>
              <div className="text-wrapper-8">产品型号</div>
              <div className="text-wrapper-9">{productModeNumber}</div>
              <div className="text-wrapper-10">产品序列号范围</div>
              <div className="text-wrapper-11">{serialNumberRange_min}-{serialNumberRange_max}</div>
              <div className="text-wrapper-12">
                {productDescription}
              </div>
              <div className="text-wrapper-13" onClick={handleSubmit}>提交</div>
            </div>
          </div>
          <div className="text-wrapper-14">提交出库信息</div>
          <div className="view-5">
            <div className="rectangle-wrapper">
              <div className="rectangle-3" />
            </div>
            <div className="text-wrapper-17">2/3</div>
          </div>
        </div>
      </div>
    </div>
  );
});
