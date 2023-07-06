import React, {useState} from 'react';
import "./index.css"
import {Button, InputComponent, WhiteSpace} from "../Basic";
import contractAbi from '../../contractABI.json';
import { ethers } from 'ethers';
import { contractAddress } from '../../contractConfig';
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
import { useNavigate } from 'react-router-dom';

// interface Page0Props {
//   handleTransactionData: (data: string) => void;
// }

// interface Page1Props {
//   transactionData: string;
// }

export const Supplier = React.memo(() => {
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
    <div className="Supplier">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="view">
              <div className="overlap-group-wrapper">
                <div className="div">
                  <div className="text-wrapper" onClick={handleGoToHomePage}>
                    系统首页
                  </div>
                  <img className="line" alt="Line" src={lineSvg} />
                  <img className="img" alt="Booking" src={BookingPng}/>
                </div>
              </div>
              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-3">
                    <div className="text-wrapper-2" onClick={handleGoToExperimenPage}>
                      参与实验
                    </div>
                    <img className="line-2" alt="Line" src={lineSvg} />
                    <img className="img" alt="Computer support" src={ComputerSupportPng} />
                  </div>
                </div>
                <div className="view-2">
                  <div className="overlap-4">
                    <div className="text-wrapper" onClick={handleGoToDataPage}>
                      实验数据
                    </div>
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
              <div className="text-wrapper-5">配件交付</div>
              <div className="text-wrapper-6">交付列表</div>
              <img className="vector" alt="Vector" src={Vector} />
            </div>
          </div>
          <div className="view-4">
            <div className="overlap-7">
              <div className="text-wrapper-7">
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
              <div className="text-wrapper-8">新能源车主</div>
              <img className="vector-3" alt="Vector" src={Vector3Svg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})

// export const Supplier = React.memo((props: { page?: number }) => {
//   const [page, setPage] = useState(props.page || 0);
//   const [transactionData, setTransactionData] = useState('');

//   const handleTransactionData = (data: string) => {
//     setTransactionData(data);
//     setPage(1);
//   };

//   if (page === 0) {
//     return <Page0 handleTransactionData={handleTransactionData} />;
//   }

//   return <Page1 transactionData={transactionData} />;
// });

// const Page1 = React.memo<Page1Props>(({ transactionData }) => {
//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(transactionData);
//       alert('已复制到剪贴板');
//     } catch (error) {
//       console.error('复制失败:', error);
//     }
//   };

//   return (
//     <div className={"supplier-main"}>
//       <div>配件交付</div>
//       <div className={"supplier-submit-wrap"}>
//         <div className={"supplier-submit-wrap-title"}>提交成功</div>
//         <div style={{ width: "100%" }}>
//           <div>入库哈希编码</div>
//           <div style={{ display: 'flex', alignItems: "center" }}>
//             <input className={"supplier-submit-wrap-input"} type="text" value={transactionData} readOnly />
//             <span style={{ cursor: "pointer" }} onClick={handleCopy}>复制</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// const Page0 = React.memo<Page0Props>(({ handleTransactionData }) => {
//   const [productName, setProductName] = useState("");
//   const [productModeNumber, setProductModeNumber] = useState("");
//   const [serialNumberRange_min, setSerialNumberRange_min] = useState("");  
//   const [serialNumberRange_max, setSerialNumberRange_max] = useState("");

//   const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductName(event.target.value);
//   };

//   const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductModeNumber(event.target.value);
//   };
//   const handleserialNumberRange_minChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSerialNumberRange_min(event.target.value);
//   };

//   const handleserialNumberRange_maxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSerialNumberRange_max(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       const note: String = '';

//       console.log('产品名称 : ', productName);
//       console.log('产品型号 : ', productModeNumber);
//       console.log('Serial Number Range MIN : ', serialNumberRange_min);
//       console.log('Serial Number Range MAX : ', serialNumberRange_max);
//       console.log('产品备注 : ', note);

//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         console.log('用户地址：', await signer.getAddress());

//         const contract = new ethers.Contract(contractAddress, contractAbi, signer);
//         const tx = await contract.supplyComponent(
//           productName, 
//           productModeNumber, 
//           ethers.utils.parseUnits(serialNumberRange_min, 0), 
//           ethers.utils.parseUnits(serialNumberRange_max, 0),
//           note
//         );
//         const receipt = await tx.wait();
//         console.log('TX : ', receipt);
//         console.log('TX Return : ', receipt.events[0].args.hashvalue);

//         handleTransactionData(receipt.events[0].args.hashvalue); // Pass the data to handleTransactionData function
//       }
//     } catch(error) {
//       console.error('Error:', error);
//     }
//   };

//   return <div className={"supplier-main"}>
//     <div className={"supplier-top"}>
//       <div className={"supplier-item-title"}>
//         配件交付
//       </div>
//       <InputComponent title={"产品型号"} value={productModeNumber} onChange={handleProductModeNumberChange}  />
//       <InputComponent title={"产品序列号范围"} value={serialNumberRange_min} onChange={handleserialNumberRange_minChange} />
//       <InputComponent title={""} value={serialNumberRange_max} onChange={handleserialNumberRange_maxChange} />
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
//     <div style={{display: "flex", justifyContent: "end"}}>
//       <Button text={"确认提交"} onClick={handleSubmit} />
//     </div>
//   </div>
// })
