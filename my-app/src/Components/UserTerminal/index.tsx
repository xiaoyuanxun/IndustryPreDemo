import React, { useState } from 'react';
import {Button, InputComponent, WhiteSpace} from "../Basic";

export const UserTerminal = React.memo(() => {
  const [productModeNumber, setProductModeNumber] = useState("");
  const [productName, setProductName] = useState("");
  const [serialNumber, setSerialNumber] = useState("");  

  const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductModeNumber(event.target.value);
  };

  const handleSerialNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerialNumber(event.target.value);
  };

  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        查询产品
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        <InputComponent title={"产品序列号"} value={serialNumber} onChange={handleSerialNumberChange} />
        <Button text={"查询"}/>
      </div>
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
    <div className={"supplier-item-title"}>
      产品轨迹
    </div>
    <div style={{background: "white",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px"}}>
      <Item/>
      <div style={{color:"black"}}>➡</div>
      <Item/>
      <div style={{color:"black"}}>➡</div>
      <Item/>

    </div>
  </div>
})

const Item = React.memo(() => {
  return <div style={{color:"black"}}>
    <div style={{fontSize:"30px"}}>
      供应商ID：12345
    </div>
    <div style={{fontSize:"20px"}}>
      2023/6/25 11:00
    </div>
  </div>
})
