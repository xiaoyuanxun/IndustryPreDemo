import React from 'react';
import "./index.css"
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import Group8Png from '../../images/Group 8.svg'
import { useNavigate } from 'react-router-dom';

// interface Page0Props {
//   handleTransactionData: (data: string) => void;
// }

// interface Page1Props {
//   transactionData: string;
// }

export const Supplier = React.memo(() => {
  const navigate = useNavigate();

  const handleGoToSupplierPage = () => {
    navigate('/supplier');
  };

  const handleGoToFactoryPage = () => {
    navigate('/factory');
  };

  const handleGoToUserPage = () => {
    navigate('/user');
  };

  const handleGoToSupplierPage0 = () => {
    navigate('/supplier/0');
  };

  const handleGoToSupplierPage3 = () => {
    navigate('/supplier/3');
  };
  
  return (
      <div className="Supplier">
        <div className='Supplier-1'>
          <img className="Supplier-1-image" alt="Vector" src={Vector} />
          <div className='Supplier-1-info'>
            <div className="Supplier-1-title" onClick={handleGoToSupplierPage}>
              配件供应商
            </div>
            <div className='Supplier-1-url'>
              <div className='Supplier-1-url-1' onClick={handleGoToSupplierPage0}>
                配件交付
              </div>
              <div className='Supplier-1-url-2' onClick={handleGoToSupplierPage3}>
                交付列表
              </div>
            </div>
          </div>
        </div>
        <div className='Supplier-2' onClick={handleGoToFactoryPage}>
          <img className="Supplier-2-image" alt="Vector" src={Group8Png} />
          <div className='Supplier-2-title'>
            新能源汽车
            <br />
            加工厂
          </div>
        </div>
        <div className='Supplier-3' onClick={handleGoToUserPage}>
          <img className="Supplier-3-image" alt="Vector" src={Vector3Svg} />
          <div className='Supplier-3-title'>
            新能源车主
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
