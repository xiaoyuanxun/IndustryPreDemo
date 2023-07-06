import React, { useState } from 'react';
import {Button, InputComponent, WhiteSpace} from "../Basic";
import { ethers } from 'ethers';
import { contractAddress } from '../../contractConfig';
import contractAbi from '../../contractABI.json';
import "./index.css";
import BookingPng from '../../images/Booking.png';
import ComputerSupportPng from '../../images/Computer Support.png';
import InvestmentPortfolioPng from '../../images/Investment Portfolio.png';
import lineSvg from '../../images/line.svg';
import AccountPng from '../../images/Account.png';
import schooLogoPng from '../../images/school_logo.png'
import background_image_Png from '../../images/background_image_1.png'
import CarRepairSvg from '../../images/Car repair.svg'
import Vector2Svg from '../../images/vector-2.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import Line6Svg from '../../images/Line 6.svg'
import Line7Svg from '../../images/Line 7.svg'
import BackPng from '../../images/Back.png'
import OkPng from '../../images/Ok.png'
import LessThanPng from '../../images/Less Than.png'
import MoreThanPng from '../../images/More Than.png'

export const UserTerminal = React.memo(() => {
  return (
    <div className="UserTerminal">
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
                    <img className="line" alt="Line" src={lineSvg} />
                    <img className="investment-portfolio" alt="Investment portfolio" src={InvestmentPortfolioPng} />
                  </div>
                </div>
              </div>
            </div>
            <div className="tittle">
              <div className="overlap-5">
                <div className="text-wrapper-3">区块链物联网实训系统</div>
                <img className="image" alt="Image" src={schooLogoPng} />
                <div className="text-wrapper-4">张三</div>
                <img className="account" alt="Account" src={AccountPng} />
              </div>
            </div>
          </div>
          <div className="view-3">
            <div className="overlap-6">
              <h1 className="h-1">配件供应商</h1>
              <img className="vector" alt="Vector" src={Vector} />
            </div>
          </div>
          <div className="view-4">
            <div className="overlap-7">
              <div className="text-wrapper-5">
                新能源汽车
                <br />
                加工厂
              </div>
              <div className="group">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <img className="vector-2" alt="Vector" src={Vector2Svg} />
                </div>
              </div>
            </div>
          </div>
          <div className="view-5">
            <div className="overlap-8">
              <div className="text-wrapper-6">新能源车主</div>
              <div className="text-wrapper-7">查询产品信息</div>
              <img className="vector-3" alt="Vector" src={Vector3Svg}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});


// export const UserTerminal = React.memo(() => {
//   const [productModeNumber, setProductModeNumber] = useState("");
//   const [productName, setProductName] = useState("");
//   const [serialNumber, setSerialNumber] = useState("");  

//   const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductName(event.target.value);
//   };

//   const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductModeNumber(event.target.value);
//   };

//   const handleSerialNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSerialNumber(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);

//         const contract = new ethers.Contract(contractAddress, contractAbi, provider);
//         const receipt = await contract.getCompInfo(serialNumber);
//         console.log('产品详细信息 : ', receipt);

//       }
//     } catch(error) {
//       console.log('Error : ', error);
//     };
//   };

//   return <div className={"supplier-main"}>
//     <div className={"supplier-top"}>
//       <div className={"supplier-item-title"}>
//         查询产品
//       </div>
//       <div style={{display: "flex", gap: "20px"}}>
//         <InputComponent title={"产品序列号"} value={serialNumber} onChange={handleSerialNumberChange} />
//         <Button text={"查询"} onClick={handleSubmit} />
//       </div>
//       <div className={"supplier-item-title"}>
//         产品详细信息
//       </div>
//     </div>
//     <WhiteSpace
//           productName={productName}
//           productModeNumber={productModeNumber}
//           onProductNameChange={handleProductNameChange}
//           onProductModeNumberChange={handleProductModeNumberChange}
//         />
//     <div className={"supplier-item-title"}>
//       产品轨迹
//     </div>
//     <div style={{background: "white",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px"}}>
//       <Item/>
//       <div style={{color:"black"}}>➡</div>
//       <Item/>
//       <div style={{color:"black"}}>➡</div>
//       <Item/>

//     </div>
//   </div>
// })

// const Item = React.memo(() => {
//   return <div style={{color:"black"}}>
//     <div style={{fontSize:"30px"}}>
//       供应商ID：12345
//     </div>
//     <div style={{fontSize:"20px"}}>
//       2023/6/25 11:00
//     </div>
//   </div>
// })
