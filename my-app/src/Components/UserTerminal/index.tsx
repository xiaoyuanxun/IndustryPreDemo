import React from 'react';
import "./index.css";
import Group8Png from '../../images/Group 8.svg'
import Vector3Svg from '../../images/vector-3.svg'
import Vector from '../../images/Vector.svg'
import { useNavigate } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Basic';

export const UserTerminal = React.memo(() => {
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

  const handleGoToUserPage0 = () => {
    navigate('/user/0');
  };

  return (
    <div className="UserTerminal">
    <Header/>
    <div className='UserTerminal-0'>
      <Sidebar activeNumber={1}/>
      <div className='UserTerminal-0-0'>
        <div className='UserTerminal-1' onClick={handleGoToSupplierPage}>
          <img className="UserTerminal-1-image" alt="Vector" src={Vector} />
          <div className='UserTerminal-1-info'>
            <div className="UserTerminal-1-title" onClick={handleGoToSupplierPage}>
              配件供应商
            </div>
          </div>
        </div>
        <div className='UserTerminal-2' onClick={handleGoToFactoryPage}>
          <img className="UserTerminal-2-image" alt="Vector" src={Group8Png} />
          <div className='UserTerminal-2-title'>
            新能源汽车
            <br />
            加工厂
          </div>
        </div>
        <div className='UserTerminal-3'>
          <img className="UserTerminal-3-image" alt="Vector" src={Vector3Svg} />
          <div className='UserTerminal-3-box'>
            <div className='UserTerminal-3-title'>
              新能源车主
            </div>
            <div className="UserTerminal-3-url" onClick={handleGoToUserPage0}>
              查询产品信息
            </div>
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
