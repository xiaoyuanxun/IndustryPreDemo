import React,{ useState } from "react";
import "./page1.css";
import Line6Svg from '../../images/Line 6.svg'
import { useNavigate, useLocation } from 'react-router-dom';
import { ethers } from "ethers";
import { contractAddress, rpcProviderUrl, supplierPrivateKey } from "../../contractConfig";
import contractAbi from '../../contractABI.json';
import { PageFunctionTitle } from '../Basic';

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

  const [productName, setProductName] = useState(messages?.productName || '');
  const [productModeNumber, setProductModeNumber] = useState(messages?.productModeNumber || '');
  const [productDescription, setProductDescription] = useState(messages?.productDescription|| '');
  const [serialNumberRange_min, setSerialNumberRange_min] = useState(messages?.serialNumberRange_min || '');  
  const [serialNumberRange_max, setSerialNumberRange_max] = useState(messages?.serialNumberRange_max || '');

  const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
  };

  const handleProductDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductDescription(event.target.value);
  };

  const handleserialNumberRange_minChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange_min(event.target.value);
  };

  const handleserialNumberRange_maxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange_max(event.target.value);
  };
   
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
        <div className="SupplierPage1-box-button" onClick={handleSubmit}>
          <div className="SupplierPage1-box-button-title">
            提交
          </div>
        </div>
      </div>
    </div>
  );
})
