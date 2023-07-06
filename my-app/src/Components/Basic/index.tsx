import React, { useState } from 'react';
import "./index.css"
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import background_image_Png from '../../images/background_image_1.png'

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

export const Sidebar = React.memo(() => {
  return (
    <div className="Sidebar">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="view">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <div className="text-wrapper">系统首页</div>
                  <img className="line" alt="Line" src={lineSvg} />
                  <img className="img" alt="Booking" src={BookingPng} />
                </div>
              </div>
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-3">
                    <div className="text-wrapper-2">参与实验</div>
                    <img className="line-2" alt="Line" src={lineSvg} />
                    <img className="img" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4">
                    <div className="text-wrapper">实验数据</div>
                    <img className="line" alt="Line" src={lineSvg}/>
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const BookButton = React.memo(() => {
  return (
    <div className='book'>
      <div className='image'> </div>
    </div>
  );
});