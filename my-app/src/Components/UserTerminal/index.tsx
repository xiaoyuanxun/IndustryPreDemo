import React from 'react';
import {Button, InputComponent, UserTerminalWhiteSpace} from "../Basic";

export const UserTerminal = React.memo(() => {
  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        查询产品
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        <InputComponent title={"产品序列"}/>
        <Button text={"查询"}/>
      </div>
      <div className={"supplier-item-title"}>
        产品详细信息
      </div>
    </div>
    <UserTerminalWhiteSpace/>
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
