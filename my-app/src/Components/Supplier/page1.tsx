import React,{ useState } from "react";
import "./page1.css";
import Line6Svg from '../../images/Line 6.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, supplierPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { PageFunctionTitle } from '../Basic';
import ProgressLine from '../../images/SupplierPage0Progress.png'
import FactProgressLine from '../../images/SupplierPage1FactProgress.png'
import { Header, InnerHeader } from "../Header";
import { Sidebar } from "../Basic";

interface ProductInfo {
  productName?: string;
  productModeNumber?: string;
  productDescription?: string;
  serialNumberRange_min?: string;
  serialNumberRange_max?: string;
}

export const SupplierPage1 = React.memo(() => {
  const location = useLocation();
  const messages = location.state as ProductInfo;
  console.log('传递过来的消息 : ', messages);

  const [ productName ] = useState(messages?.productName || '');
  const [ productModeNumber ] = useState(messages?.productModeNumber || '');
  const [ productDescription ] = useState(messages?.productDescription|| '');
  const [ serialNumberRange_min ] = useState(messages?.serialNumberRange_min || '');  
  const [ serialNumberRange_max ] = useState(messages?.serialNumberRange_max || '');
   
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(supplierPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('供应商操作员地址：', await signer.getAddress());

      const contract = new ethers.Contract(contractAddress, contractAbi, signer);

      const tx = await contract.supplyComponent(
        productName,
        productModeNumber,
        serialNumberRange_min,
        serialNumberRange_max,
        productDescription
      );
      const receipt = await tx.wait();
      console.log('配件交付函数 : ', receipt);

      const hashcode = receipt.events[0].args.hashvalue;
      console.log('入库hash编码 : ', hashcode);

      const transfer_productInfo = {
        productHashCode: hashcode,
      };

      console.log('传递信息 : ', transfer_productInfo);
      navigate('/supplier/2', { state: transfer_productInfo });
    } catch(error) {
      console.error('Error : ', error);
    };
  };

  return (
    <div className="SupplierPage1">
      <Header/>
      <div className="SupplierPage1-1">
        <Sidebar activeNumber={1}/>
        <div className="SupplierPage1-1-1">
          <InnerHeader 
            pageTitle = '配件交付'
            sideName = '供应商'
            address = '0x709...9C8'
          />
          <PageFunctionTitle titleName='确认详细信息'/>
          <div className="SupplierPage1-box">
            <div className="SupplierPage1-box-1-title">
              产品名称
            </div>
            <div className="SupplierPage1-box-1-answer">
              {/* 1型电池 */}
              {productName}
            </div>
            <img className="SupplierPage1-box-line" alt="Line" src={Line6Svg} />
            <div className="SupplierPage1-box-1-title">
              产品型号
            </div>
            <div className="SupplierPage1-box-1-answer">
              {/* TEST-123 */}
              {productModeNumber}
            </div>
            <img className="SupplierPage1-box-line" alt="Line" src={Line6Svg} />
            <div className="SupplierPage1-box-1-title">
              产品序列号范围
            </div>
            <div className="SupplierPage1-box-1-answer">
              {/* 100-200 */}
              {serialNumberRange_min}-{serialNumberRange_max}
            </div>
            <img className="SupplierPage1-box-line" alt="Line" src={Line6Svg} />
            <div className="SupplierPage1-box-1-title">
              备注
            </div>
            <div className="SupplierPage1-box-1-answer">
              {/* 这是个电池，通过工厂端配件库信息对应进行上传，并且上传后通过工厂端进行确认入库信息后完成入库 */}
              {productDescription}
            </div>
          </div>
          <div className="SupplierPage1-box-button" onClick={handleSubmit}>
              <div className="SupplierPage1-box-button-title">
                提交
              </div>
            </div>
          <div className='SupplierPage1-progress'>
            <div className='SupplierPage1-progress-name'>
              2/3
            </div>
            <div className='SupplierPage1-progress-line'>
            <img className='SupplierPage1-progress-line-1' alt='factProgress' src={FactProgressLine}/>
            <img className='SupplierPage1-progress-line-2' alt='allProgerss' src={ProgressLine}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
})
