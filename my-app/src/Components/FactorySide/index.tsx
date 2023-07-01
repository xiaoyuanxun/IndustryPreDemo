import React, {useState} from 'react';
import "./index.css"
import {Button, InputComponent, WhiteSpace} from "../Basic";
import { contractAddress } from '../../contractConfig';
import contractAbi from '../../contractABI.json';
import { ethers } from 'ethers';

export const FactorySide = React.memo((props: { page?: number }) => {
  const [page, setPage] = useState(props.page || 0)

  if (page === 0) {
    return <Page0/>
  }
  if (page === 1) {
    return <Page1/>
  }
  if (page === 2) {
    return <Page2/>
  }
  if (page === 3) {
    return <Page3/>
  }
  return <Page4/>
})


const Page4 = React.memo(() => {
  const arr = new Array(10).fill("A2387B234")
  return <div className={"supplier-main"}>
    <div className={"supplier-item-title"}>
      配件列表
    </div>
    <div className={"supplier-item-title"}>
      产品型号
    </div>
    {arr.map((v, k) => {
      return <div key={k} style={{fontSize: "20px"}} className={"supplier-item-title"}>
        {v}
      </div>
    })}
  </div>
})

const Page3 = React.memo(() => {
  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        查询配件信息
      </div>
      <InputComponent title={"产品型号"}/>
      <div className={"supplier-item-title"}>
        产品详细信息
      </div>
    </div>
    {/* <WhiteSpace/> */}
  </div>
})

const Page2 = React.memo(() => {
  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        配件出库
      </div>
      <InputComponent title={"产品型号"}/>
      <InputComponent title={"产品序列号范围"}/>
      <div className={"supplier-item-title"}>
        产品详细信息
      </div>
    </div>
    {/* <WhiteSpace/> */}
    <div style={{display: "flex", justifyContent: "end"}}>
      <Button text={"确认出库"}/>
    </div>
  </div>
})


const Page1 = React.memo(() => {
  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        配件入库
      </div>
      <div style={{display: "flex", alignItems: "center"}}>
        <InputComponent title={"入库哈希编码"}/>
        <div>查询</div>
      </div>
      <div style={{display: "flex", gap: "100px"}}>
        当前状态
        待确认
        <Button text={"确认入库"}/>
      </div>
    </div>
  </div>
})

const Page0 = React.memo(() => {
  const [productName, setProductName] = useState("");
  const [productModeNumber, setProductModeNumber] = useState("");

  const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
    // console.log('配件名称改变 : ', productName);
  };

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
    // console.log('配件型号改变 : ', productModeNumber);
  };

  const handleSubmit = async () => {
    try {
      const note: String = '';
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        console.log('用户地址：', await signer.getAddress());

        const contract = new ethers.Contract(contractAddress, contractAbi, signer);
        const tx = await contract.creatOrupdateInfo(
          productName, 
          productModeNumber, 
          note
        );
        const receipt = await tx.wait();
        console.log('TX : ', receipt);
        // console.log('TX Return : ', receipt.logs[0].data);

      }
    } catch(error) {
      console.log('Error : ', error);
    };
  };

  return (
    <div className={"supplier-main"}>
      <div className={"supplier-top"}>
        <div className={"supplier-item-title"}>
          创建配件信息库
        </div>
        <InputComponent title={"产品型号"} value={productModeNumber} onChange={handleProductModeNumberChange} />
        <div className={"supplier-item-title"}>
          产品详细信息
        </div>
      </div>
      <WhiteSpace
          productName={productName}
          productModeNumber={productModeNumber}
          onProductNameChange={handleProductNameChange}
          onProductModeNumberChange={handleProductModeNumberChange}
        />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button text={"确认提交"} onClick={handleSubmit} />
      </div>
    </div>
  );
})