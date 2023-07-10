import React, { useState } from 'react';
import "./index.css"
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import background_image_Png from '../../images/background_image_1.png'
import { useNavigate } from 'react-router-dom';

export const Sidebar = React.memo((props: { activeNumber: number }) => {
  const { activeNumber } = props;
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/system');
  };
  
  const handleGoToExperimenPage = () => {
    navigate('/experiment/2');
  };

  const handleGoToDataPage = () => {
    navigate('/data');
  };

  return (
    <div className="sidebar">

      <div 
        className={`sidebar-box ${activeNumber === 0 ? 'active' : ''}`}
        onClick={handleGoToHomePage}>
        <img className='sidebar-box-logo' alt="sidebar-box-logo" src={BookingPng} onClick={handleGoToHomePage} />
        <div className='sidebar-box-title' onClick={handleGoToHomePage} >
          系统首页
        </div>
      </div>

      <img className='sidebar-line' alt="sidebar-line" src={lineSvg} />
      
      <div 
        className={`sidebar-box ${activeNumber === 1 ? 'active' : ''}`}
        onClick={handleGoToExperimenPage}>
        <img className='sidebar-box-logo' alt="sidebar-box-logo" src={ComputerSupportPng} onClick={handleGoToExperimenPage} />
        <div className='sidebar-box-title' onClick={handleGoToExperimenPage} >
          参与实验
        </div>
      </div>
      
      <img className='sidebar-line' alt="sidebar-line" src={lineSvg} />

      <div 
        className={`sidebar-box ${activeNumber === 2 ? 'active' : ''}`}
        onClick={handleGoToDataPage}>
        <img className='sidebar-box-logo' alt="sidebar-box-logo" src={InvestmentPortfolioPng} onClick={handleGoToDataPage} />
        <div className='sidebar-box-title' onClick={handleGoToDataPage}>
          实验数据
        </div>
      </div>
    </div>
  );
});

export const PageFunctionTitle = React.memo((props: { titleName: string }) => {
  const titleName = props.titleName;
  return (
    <div className="pageFunctionTitle">
      {titleName}
    </div>
  );
});

export const FunctionPageInPut = React.memo((props: { 
  value?: string, // 添加 value 属性的类型声明
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void, // 添加 onChange 属性的类型声明
}) => {
  const { value, onChange } = props
  return (
    <input className={'FunctionPageInPut'} 
      type="text" 
      value={value} 
      onChange={onChange} 
    />
  )
});

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

