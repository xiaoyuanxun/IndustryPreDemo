import React from 'react';
import "./index.css"
import Group8Png from '../../images/Group 8.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Basic';

export const FactorySide = React.memo(() => {
  const navigate = useNavigate();

  const handleGoToFactory0Page = () => {
    navigate('/factory/0');
  };

  const handleGoToFactory6Page = () => {
    navigate('/factory/6');
  };

  const handleGoToFactory2Page = () => {
    navigate('/factory/2');
  };
  
  const handleGoToFactory9Page = () => {
    navigate('/factory/9');
  };
  
  const handleGoToSupplierPage = () => {
    navigate('/supplier');
  };

  const handleGoToFactoryPage = () => {
    navigate('/factory');
  };

  const handleGoToUserPage = () => {
    navigate('/user');
  };

  return (
    <div className="FactorySide">
    <Header/>
    <div className='FactorySide-0'>
      <Sidebar activeNumber={1}/>
      <div className='FactorySide-0-0'>
        <div className='FactorySide-1' onClick={handleGoToSupplierPage}>
          <img className="FactorySide-1-image" alt="Vector" src={Vector} />
          <div className='FactorySide-1-info'>
            <div className="FactorySide-1-title" onClick={handleGoToSupplierPage}>
              配件供应商
            </div>
          </div>
        </div>
        <div className='FactorySide-2'>
          <img className="FactorySide-2-image" alt="Vector" src={Group8Png} />
          <div className='FactorySide-2-box'>
            <div className='FactorySide-2-title'>
              新能源汽车加工厂
            </div>
            <div className='FactorySide-2-box-1'>
              <div className='FactorySide-2-box-1-url-1' onClick={handleGoToFactory0Page}>
                新增配件
              </div>
              <div className='FactorySide-2-box-1-url-2' onClick={handleGoToFactory2Page}>
                配件入库
              </div>
              <div className='FactorySide-2-box-1-url-3' onClick={handleGoToFactory6Page}>
                配件出库
              </div>
            </div>
            <div className='FactorySide-2-box-2'>
              <div className='FactorySide-2-box-2-url' onClick={handleGoToFactory9Page}>
                配件列表
              </div>
            </div>
          </div>
        </div>
        <div className='FactorySide-3' onClick={handleGoToUserPage}>
          <img className="FactorySide-3-image" alt="Vector" src={Vector3Svg} />
          <div className='FactorySide-3-title'>
            新能源车主
          </div>
        </div>
      </div>
    </div>
  </div>
  );
});

// export const FactorySide = React.memo((props: { page?: number }) => {
//   const [page, setPage] = useState(props.page || 0)

//   if (page === 0) {
//     return <Page0/>
//   }
//   if (page === 1) {
//     return <Page1/>
//   }
//   if (page === 2) {
//     return <Page2/>
//   }
//   if (page === 3) {
//     return <Page3/>
//   }
//   return <Page4/>
// })


// const Page4 = React.memo(() => {
//   const [arr, setArr] = useState([]);

//   useEffect(() => {
//     const getWalletAddress = async () => {
//       if (window.ethereum) {
//         await window.ethereum.enable(); // 授权访问用户钱包
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const contract = new ethers.Contract(contractAddress, contractAbi, provider);
//         const receipt = await contract.getModeList();
//         console.log('查询配件信息 : ', receipt);

//         setArr(receipt);
//       } else {
//         console.error("请安装MetaMask或其他以太坊钱包插件");
//       }
//     };

//     getWalletAddress();
//   }, []);

//   return <div className={"supplier-main"}>
//     <div className={"supplier-item-title"}>
//       配件列表
//     </div>
//     <div className={"supplier-item-title"}>
//       产品型号
//     </div>
//     {arr.map((v, k) => {
//       return <div key={k} style={{fontSize: "20px"}} className={"supplier-item-title"}>
//         {v}
//       </div>
//     })}
//   </div>
// })

// const Page3 = React.memo(() => {
//   const [productModeNumber, setProductModeNumber] = useState("");
//   const [productName, setProductName] = useState("");

//   const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductModeNumber(event.target.value);
//   };

//   const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductName(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);

//         const contract = new ethers.Contract(contractAddress, contractAbi, provider);
//         const receipt = await contract.getProductInfo(productModeNumber);
//         console.log('查询配件信息 : ', receipt);

//         setProductName(receipt.productName);
//       }
//     } catch(error) {
//       console.log('Error : ', error);
//     };
//   };

//   return <div className={"supplier-main"}>
//     <div className={"supplier-top"}>
//       <div className={"supplier-item-title"}>
//         查询配件信息
//       </div>
//       <InputComponent title={"产品型号"} value={productModeNumber} onChange={handleProductModeNumberChange} />
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
//       <Button text={"查询"} onClick={handleSubmit} />
//     </div>
//   </div>
// })

// const Page2 = React.memo(() => {
//   const [productName, setProductName] = useState("");
//   const [productModeNumber, setProductModeNumber] = useState("");
//   const [serialNumberRange_max, setSerialNumberRange_max] = useState("");

//   const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductName(event.target.value);
//   };

//   const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductModeNumber(event.target.value);
//   };

//   const handleserialNumberRange_maxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSerialNumberRange_max(event.target.value);
//   };

//   const handleSubmit = async () => {
//     try {
//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         console.log('用户地址：', await signer.getAddress());

//         const contract = new ethers.Contract(contractAddress, contractAbi, signer);
//         const tx = await contract.OutStroge(
//           productModeNumber,
//           ethers.utils.parseUnits(serialNumberRange_max, 0),
//         );
//         const receipt = await tx.wait();
//         console.log('出库操作 : ', receipt);

//         // console.log('出库TX Return : ', receipt.logs[0].data);
//       }
//     } catch(error) {
//       console.log('Error : ', error);
//     };
//   };

//   return <div className={"supplier-main"}>
//     <div className={"supplier-top"}>
//       <div className={"supplier-item-title"}>
//         配件出库
//       </div>
//       <InputComponent title={"产品型号"} value={productModeNumber} onChange={handleProductModeNumberChange} />
//       <InputComponent title={"产品序列号范围"} value={serialNumberRange_max} onChange={handleserialNumberRange_maxChange} />
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
//       <Button text={"确认出库"} onClick={handleSubmit} />
//     </div>
//   </div>
// })

// function getStateString(state: number): string {
//   switch (state) {
//     case 0 :
//       return '待确认';
//     case 1 :
//       return '已确认';
//     case 2 : 
//       return '已出库';
//     case 3 :
//       return '已完成，代表该批次配件已全部出库';
//   }
//   return '待确认'
// }

// const Page1 = React.memo(() => {
//   const [productHashCode, setProductHashCode] = useState("");
//   const [currentState, setCurrentState] = useState('待确认');

//   let timer: NodeJS.Timeout;

//   const getStateByHash = async() => {
//     if(window.ethereum) {
//       await window.ethereum.enable();
//       const provider = new ethers.providers.Web3Provider(window.ethereum);

//       const contract = new ethers.Contract(contractAddress, contractAbi, provider);
//       const receipt = await contract.getStateByHash(productHashCode);

//       console.log('入库状态 : ', receipt);
//       // console.log(typeof receipt); // 打印值的类型
//       if(receipt == 1) {
//         setCurrentState(getStateString(receipt));
//       }
//     } else {
//       console.error("请安装MetaMask或其他以太坊钱包插件");
//     }
//   };

//   useEffect(() => {
//     // 在组件卸载时清除定时器
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   const handleProductHashCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductHashCode(event.target.value);
//     // console.log('配件名称改变 : ', productName);
//   };

//   const handleSubmit = async () => {
//     try {
//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         console.log('用户地址：', await signer.getAddress());

//         const contract = new ethers.Contract(contractAddress, contractAbi, signer);
//         const tx = await contract.enterStorge(productHashCode);
//         const receipt = await tx.wait();
//         console.log('入库操作 : ', receipt);

//         setCurrentState('正在确认')
//       // 开始轮询合约查询入库状态
//       timer = setInterval(getStateByHash, 5000); // 每隔5秒查询一次

//       }
//     } catch(error) {
//       console.log('Error : ', error);
//     };
//   };

//   return <div className={"supplier-main"}>
//     <div className={"supplier-top"}>
//       <div className={"supplier-item-title"}>
//         配件入库
//       </div>
//       <div style={{display: "flex", alignItems: "center"}}>
//         <InputComponent title={"入库哈希编码"} value={productHashCode} onChange={handleProductHashCodeChange} />
//         <div>查询</div>
//       </div>
//       <div style={{display: "flex", gap: "100px"}}>
//       <div>当前状态 : {currentState}</div>
//         <Button text={"确认入库"} onClick={handleSubmit} />
//       </div>
//     </div>
//   </div>
// })

// const Page0 = React.memo(() => {
//   const [productName, setProductName] = useState("");
//   const [productModeNumber, setProductModeNumber] = useState("");
//   const [isCreationSuccess, setIsCreationSuccess] = useState(false);

//   const handleProductNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductName(event.target.value);
//     // console.log('配件名称改变 : ', productName);
//   };

//   const handleProductModeNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setProductModeNumber(event.target.value);
//     // console.log('配件型号改变 : ', productModeNumber);
//   };

//   const handleSubmit = async () => {
//     try {
//       const note: String = '';
//       if(window.ethereum) {
//         await window.ethereum.enable();
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         console.log('用户地址：', await signer.getAddress());

//         const contract = new ethers.Contract(contractAddress, contractAbi, signer);
//         const tx = await contract.creatOrupdateInfo(
//           productName, 
//           productModeNumber, 
//           note
//         );
//         const receipt = await tx.wait();
//         console.log('TX : ', receipt);
//         // console.log('TX Return : ', receipt.logs[0].data);

//         setIsCreationSuccess(true); // 设置为创建成功
//       }
//     } catch(error) {
//       console.log('Error : ', error);
//     };
//   };

//   return (
//     <div className={"supplier-main"}>
//       <div className={"supplier-top"}>
//         <div className={"supplier-item-title"}>
//           创建配件信息库
//         </div>
//         <InputComponent title={"产品型号"} value={productModeNumber} onChange={handleProductModeNumberChange} />
//         <div className={"supplier-item-title"}>
//           产品详细信息
//         </div>
//       </div>
//       <WhiteSpace
//           productName={productName}
//           productModeNumber={productModeNumber}
//           onProductNameChange={handleProductNameChange}
//           onProductModeNumberChange={handleProductModeNumberChange}
//         />
//       <div style={{ display: "flex", justifyContent: "end" }}>
//         <Button text={"确认提交"} onClick={handleSubmit} />
//       </div>
//       {isCreationSuccess ? (
//         <div>
//           <div className="success-icon">
//             <RiCheckLine size={24} color="#32CD32" />
//           </div>
//           <div className="success-message">
//             <p>创建成功！</p>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// })