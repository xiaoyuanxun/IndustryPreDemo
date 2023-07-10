
import React, {useState} from 'react';
import "./page0.css"
import contractAbi from '../../contractABI.json';
import { ethers } from 'ethers';
import { contractAddress, rpcProviderUrl, supplierPrivateKey } from '../../contractConfig';
import { useNavigate } from 'react-router-dom';
import { PageFunctionTitle, FunctionPageInPut } from '../Basic';
import ProgressLine from '../../images/SupplierPage0Progress.png'
import FactProgressLine from '../../images/SupplierPage0Progress1.png'

export const SupplierPage0 = React.memo(() => {
  const [productModeNumber, setProductModeNumber] = useState("");
  const [serialNumberRange_min, setSerialNumberRange_min] = useState("");  
  const [serialNumberRange_max, setSerialNumberRange_max] = useState("");
  const [serialNumberRange, setSerialNumberRange] = useState("");

  const handleserialNumberRange_minChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange_min(event.target.value);
  };

  const handleserialNumberRange_maxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange_max(event.target.value);
  };

  const handleserialNumberRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumberRange(event.target.value);
  };

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
    // console.log('配件型号改变 : ', productModeNumber);
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
    const regex: RegExp = /(\d+)-(\d+)/;
    const match: RegExpMatchArray | null = serialNumberRange.match(regex);
    
    if (match) {
      const firstNumber: number = parseInt(match[1]);
      const secondNumber: number = parseInt(match[2]);
      if(firstNumber > secondNumber) {
        alert('序列号范围大小有误!');
        return;
      }
      console.log("First Number:", firstNumber);
      console.log("Second Number:", secondNumber);
      try {
        const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
        const wallet = new ethers.Wallet(supplierPrivateKey, provider);
        const signer = wallet.connect(provider);
        console.log('供应商操作员地址：', await signer.getAddress());
  
        const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);
        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
  
        const productInfo = await contract.getProductInfo(productModeNumber);
        console.log('由型号获得产品信息 : ', productInfo);
        if(productInfo.productName == '') {
          alert('输入的产品型号有误 !');
          throw new Error('输入的产品型号有误 !');
        }
        const productName = productInfo.productName;
        const productDescription = productInfo.note;
        const transfer_productInfo = {
          productName: productName,
          productModeNumber: productModeNumber,
          productDescription: productDescription,
          serialNumberRange_min: firstNumber,
          serialNumberRange_max: secondNumber
        };
  
        console.log('传递信息 : ', transfer_productInfo);
        navigate('/supplier/1', { state: transfer_productInfo });
      } catch(error) {
        console.error('Error : ', error);
      };
    } else {
      alert('序列号范围输入格式有误!');
    }

  };

    return (
      <div className='SupplierPage0'>
        <PageFunctionTitle titleName='提交详细信息'/>
        <div className='SupplierPage0-box'>
          <div className='SupplierPage0-box-1'>
            <div className='SupplierPage0-box-1-title'>
              产品型号
            </div>
            <FunctionPageInPut
              value={productModeNumber}
              onChange={handleProductModeNumberChange}
            />
          </div>
          <div className='SupplierPage0-box-2'>
            <div className='SupplierPage0-box-2-title'>
              产品序列号范围
            </div>
            <FunctionPageInPut
             value={serialNumberRange}
             onChange={handleserialNumberRangeChange}
            />
          </div>
          <div className='SupplierPage0-box-3' onClick={handleSubmit}>
            <div className='SupplierPage0-box-3-title'>
              提交
            </div>
          </div>
        </div>
        <div className='SupplierPage0-progress'>
          <div className='SupplierPage0-progress-name'>
            1/3
          </div>
          <div className='SupplierPage0-progress-line'>
            <img className='SupplierPage0-progress-line-2' src={FactProgressLine}/>
            <img className='SupplierPage0-progress-line-1' src={ProgressLine}/>
          </div>
        </div>
      </div>
    );
  });

export default SupplierPage0;