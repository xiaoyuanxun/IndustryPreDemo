import React from 'react';
import "./index.css"

export const InputComponent = React.memo((props: { title: string, titleCss?: React.CSSProperties }) => {
  const {title} = props
  return <div className={"input-wrap"}>
    <div style={props.titleCss} className={"input-wrap-title"}>
      {title}
    </div>
    <input className={'input-wrap-input'} type="text"/>
  </div>
})

export const Button = React.memo(({text}: { text: string }) => {
  return <div className={"button-wrap"}>
    {text}
  </div>
})

export const WhiteSpace = React.memo(() => {
  return <div className={"whitespace"}>
    <InputComponent titleCss={{color: "black"}} title={"产品名称"}/>
    <InputComponent titleCss={{color: "black"}} title={"产品型号"}/>
    <div style={{color: "black"}} className={"whitespace-title"}>
      产品备注
    </div>
  </div>
})
