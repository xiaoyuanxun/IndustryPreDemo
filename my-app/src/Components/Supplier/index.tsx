import React, {useState} from 'react';
import "./index.css"
import {Button, InputComponent, WhiteSpace} from "../Basic";

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
  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        配件交付
      </div>
      <InputComponent title={"产品型号"}/>
      <InputComponent title={"产品序列号范围"}/>
      <div className={"supplier-item-title"}>
        配件交付
      </div>
    </div>
    <WhiteSpace/>
    <div style={{display: "flex", justifyContent: "end"}}>
      <Button text={"确认提交"}/>
    </div>
  </div>
})

