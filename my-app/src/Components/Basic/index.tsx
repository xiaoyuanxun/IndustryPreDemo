import React, { useState } from 'react';
import "./index.css"

export const InputComponent = React.memo((props: { 
  title: string, 
  titleCss?: React.CSSProperties, 
  value?: string, // 添加 value 属性的类型声明
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, // 添加 onChange 属性的类型声明
}) => {
  const { title, value, onChange } = props
  return <div className={"input-wrap"}>
    <div style={props.titleCss} className={"input-wrap-title"}>
      {title}
    </div>
    <input className={'input-wrap-input'} type="text" value={value} onChange={onChange} />
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
        value={productName}
        onChange={onProductNameChange}
      />
      <InputComponent
        titleCss={{ color: "black" }}
        title={"产品型号"}
        value={productModeNumber}
        onChange={onProductModeNumberChange}
      />
      <div style={{ color: "black" }} className={"whitespace-title"}>
        产品备注
      </div>
    </div>
  );
})
