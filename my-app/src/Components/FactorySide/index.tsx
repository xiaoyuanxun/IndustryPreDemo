import React, {useState} from 'react';
import "./index.css"
import {Button, InputComponent, WhiteSpace} from "../Basic";

export const FactorySide = React.memo(() => {
  const [page, setPage] = useState(4)

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
    <WhiteSpace/>
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
    <WhiteSpace/>
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
  return <div className={"supplier-main"}>
    <div className={"supplier-top"}>
      <div className={"supplier-item-title"}>
        创建配件信息库
      </div>
      <InputComponent title={"产品型号"}/>
      <div className={"supplier-item-title"}>
        产品详细信息
      </div>
    </div>
    <WhiteSpace/>
    <div style={{display: "flex", justifyContent: "end"}}>
      <Button text={"确认提交"}/>
    </div>
  </div>
})
