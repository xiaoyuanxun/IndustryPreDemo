import React, {useState} from 'react';
import "./index.css"
import {Button, InputComponent, WhiteSpace} from "../Basic";
import contractAbi from '../../contractABI.json';
import { ethers } from 'ethers';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

export const Supplier = React.memo(() => {
  const [page, setPage] = useState(0)


  if (page === 0) {
    return <Page0/>
  }

  return <Page1/>
})

const Page1 = React.memo(() => {
  return <div className={"supplier-main"}>
    <div>
      配件交付
    </div>
    <div className={"supplier-submit-wrap"}>
      <div className={"supplier-submit-wrap-title"}>
        提交成功
      </div>
      <div style={{width: "100%"}}>
        <div>
          入库哈希编码
        </div>
        <div style={{display: 'flex', alignItems: "center"}}>
          <input className={"supplier-submit-wrap-input"} type="text"/>
          <span style={{cursor: "pointer"}}>复制</span>
        </div>
      </div>
    </div>
  </div>
})

const Page0 = React.memo(() => {
  const handleSubmit = async () => {
    try {
      const modelNumber = (document.getElementById('modelNumber') as HTMLInputElement).value;
      const serialNumberRange_min = (document.getElementById('serialNumberRange_min') as HTMLInputElement).value;
      const serialNumberRange_max = (document.getElementById('serialNumberRange_max') as HTMLInputElement).value;
  
      const productName = (document.getElementById('productName') as HTMLInputElement).value;
      const productModeNumber = (document.getElementById('productModeNumber') as HTMLInputElement).value;

      const note: String = '';

      if (productModeNumber != modelNumber) {
        console.error('两次输入的产品型号不同');
      }
      // const bytes8Value: ethers.BytesLike = ethers.utils.f  (productModeNumber);

      // // 使用 bytesToBytes8 函数进行转换
      // const modeNumber: bytes8 = ethers.utils.hexlify(ethers.utils.hexZeroPad(bytes8Value, 8));

      console.log('产品名称 : ', productName);
      console.log('Prodsuct Model:', modelNumber);
      console.log('Serial Number Range MIN : ', serialNumberRange_min);
      console.log('Serial Number Range MAX : ', serialNumberRange_max);
      console.log('产品备注 : ', note);

      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log('用户地址：', await signer.getAddress());


        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const tx = await contract.supplyComponent(
          productName, 
          productModeNumber, 
          ethers.utils.parseUnits(serialNumberRange_min, 0), 
          ethers.utils.parseUnits(serialNumberRange_max, 0),
          note
        );
        const receipt = await tx.wait();
        console.log('TX : ', receipt);
        console.log('TX Return : ', receipt.logs[0].data);
      }
    } catch(error) {
      console.error('Error:', error);
    }
  };

  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        配件交付
      </div>
      <InputComponent title={"产品型号"} id={'modelNumber'} />
      <InputComponent title={"产品序列号范围"} id={'serialNumberRange_min'} />
      <InputComponent title={""} id={'serialNumberRange_max'}/>
      <div className={"supplier-item-title"}>
        产品详细信息
      </div>
    </div>
    <WhiteSpace/>
    <div style={{display: "flex", justifyContent: "end"}}>
      <Button text={"确认提交"} onClick={handleSubmit} />
    </div>
  </div>
})

