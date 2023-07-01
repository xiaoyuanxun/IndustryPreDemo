import React, { useState } from 'react';
import "./index.css"

export const SupplierWhiteSpace = React.memo(() => {
  return <div className={"whitespace"}>
    <InputComponent titleCss={{color: "black"}} title={"产品名称"} id={'productName'} />
    <InputComponent titleCss={{color: "black"}} title={"产品型号"} id={'productModeNumber'} />
    <div style={{color: "black"}} className={"whitespace-title"}>
      产品备注
    </div>
  </div>
})

export const UserTerminalWhiteSpace = React.memo(() => {
  return <div className={"whitespace"}>
    <InputComponent titleCss={{color: "black"}} title={"产品名称"}/>
    <InputComponent titleCss={{color: "black"}} title={"产品型号"}/>
    <div style={{color: "black"}} className={"whitespace-title"}>
      产品备注
    </div>
  </div>
})

export const SupplierInputComponent = React.memo((props: { title: string, titleCss?: React.CSSProperties, id?: string }) => {
  const { title, id } = props
  return <div className={"input-wrap"}>
    <div style={props.titleCss} className={"input-wrap-title"}>
      {title}
    </div>
    <input className={'input-wrap-input'} type="text" id={id} />
  </div>
})

export const InputComponent = React.memo((props: { 
  title: string, 
  titleCss?: React.CSSProperties, 
  id?: string,
  value?: string, // 添加 value 属性的类型声明
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, // 添加 onChange 属性的类型声明
}) => {
  const { title, id, value, onChange } = props
  return <div className={"input-wrap"}>
    <div style={props.titleCss} className={"input-wrap-title"}>
      {title}
    </div>
    <input className={'input-wrap-input'} type="text" id={id} value={value} onChange={onChange} />
  </div>
})

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className={"button-wrap"} onClick={onClick}>
      {text}
    </div>
  );
};

// export const Button = React.memo(({text}: { text: string }) => {
//   return <div className={"button-wrap"}>
//     {text}
//   </div>
// })

interface WhiteSpaceProps {
  productName: string;
  productModeNumber: string;
  onProductNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onProductModeNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WhiteSpace = React.memo((props: WhiteSpaceProps) => {
  const { productName, productModeNumber, onProductNameChange, onProductModeNumberChange } = props;

  return (
    <div className={"whitespace"}>
      <InputComponent
        titleCss={{ color: "black" }}
        title={"产品名称"}
        id={'productName'}
        value={productName}
        onChange={onProductNameChange}
      />
      <InputComponent
        titleCss={{ color: "black" }}
        title={"产品型号"}
        id={'productModeNumber'}
        value={productModeNumber}
        onChange={onProductModeNumberChange}
      />
      <div style={{ color: "black" }} className={"whitespace-title"}>
        产品备注
      </div>
    </div>
  );
})
