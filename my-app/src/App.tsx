import React, { useEffect, useState } from 'react';
import './App.css';
import {
  FactorySide, 
  Header, 
  Supplier, 
  UserTerminal, 
  Login, 
  System,
  Experiment_1,
  Experiment_2,
  Data,
  Sidebar,
  SupplierPage0,
  SupplierPage1,
  SupplierPage2,
  SupplierPage3,
  FactorySidePage0,
  FactorySidePage1,
  FactorySidePage2,
  FactorySidePage3,
  FactorySidePage4,
  FactorySidePage5,
  FactorySidePage6,
  FactorySidePage7,
  FactorySidePage8,
  FactorySidePage9,
  UserTerminalPage0,
  UserTerminalPage1,
  UserTerminalPage2,
  InnerHeader
} from "./Components";
import { ethers } from 'ethers'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { useNavigate, RouteProps } from 'react-router-dom';

function App() {
  // const [walletAddress, setWalletAddress] = useState(""); // 用于保存钱包地址的状态
  // useEffect(() => {
  //   // 使用Web3或以太坊的API获取钱包地址，并更新状态
  //   const getWalletAddress = async () => {
  //     if (window.ethereum) {
  //       await window.ethereum.enable(); // 授权访问用户钱包
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);
  //       const signer = provider.getSigner();
  //       const address = await signer.getAddress();
  //       setWalletAddress(address);
  //     } else {
  //       console.error("请安装MetaMask或其他以太坊钱包插件");
  //     }
  //   };

  //   getWalletAddress();
  // }, []);
  
  return(
    <Router>
      <Routes>

        <Route path="" element = {
            <div>
              <Login/>
            </div>
          } />

        <Route path="/supplier" element = {
          <>
            <Header/>
            <Sidebar activeNumber={1}/>
            <Supplier/>            
          </>
          } />

        <Route path="/supplier/0" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件交付'
              sideName = '供应商'
              address = '0x709...9C8'
            />
            <Sidebar activeNumber={1}/>
            <SupplierPage0/>
            </>
          } />
          
        <Route path="/supplier/1" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件交付'
              sideName = '供应商'
              address = '0x709...9C8'
            />
            <Sidebar activeNumber={1}/>
            <SupplierPage1/>
            </>
        } />

        <Route path="/supplier/2" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件交付'
              sideName = '供应商'
              address = '0x709...9C8'
            />
            <Sidebar activeNumber={1}/>
            <SupplierPage2/>
            </>
        } />

        <Route path="/supplier/3" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '交付列表'
              sideName = '供应商'
              address = '0x709...9C8'
            />
            <Sidebar activeNumber={1}/>
            <SupplierPage3/>
            </>
        } />

        <Route path="/factory" element = {
            <>
            <Header/>
            <Sidebar activeNumber={1}/>
            <FactorySide/>
            </>
        } />

        <Route path="/factory/0" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '新增配件'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage0 />
            </>
        } />

        <Route path="/factory/1" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '新增配件'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage1 />
            </>
        } />

        <Route path="/factory/2" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件入库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage2 />
            </>
        } />        

        <Route path="/factory/3" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件入库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage3 />
            </>
        } />   
        
        <Route path="/factory/4" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件入库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage4  />
            </>
        } />                   
                
        <Route path="/factory/5" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件入库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage5  />
            </>
        } />     

        <Route path="/factory/6" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '产品出库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage6  />
            </>
        } />        

        <Route path="/factory/7" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '产品出库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage7  />
            </>
        } />   

        <Route path="/factory/8" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '产品出库'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage8  />
            </>
        } />   

        <Route path="/factory/9" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '配件列表'
              sideName = '工厂端'
              address = '0xf39...266'
            />
            <Sidebar activeNumber={1}/>
            <FactorySidePage9  />
            </>
        } />   

        <Route path="/user" element = {
            <>
            <Header/>
            <Sidebar activeNumber={1}/>
            <UserTerminal/>
            </>
        } />

        <Route path="/user/0" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '新能源车主'
              sideName = '用户端'
              address = '0x3C4...3BC'
            />
            <Sidebar activeNumber={1}/>
            <UserTerminalPage0/>
            </>
        } />

        <Route path="/user/1" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '新能源车主'
              sideName = '用户端'
              address = '0x3C4...3BC'
            />
            <Sidebar activeNumber={1}/>
            <UserTerminalPage1/>
            </>
        } />

        <Route path="/user/2" element = {
            <>
            <Header/>
            <InnerHeader 
              pageTitle = '新能源车主'
              sideName = '用户端'
              address = '0x3C4...3BC'
            />
            <Sidebar activeNumber={1}/>
            <UserTerminalPage2/>
            </>
        } />

        <Route path="/loginPage" element = {
          <>
          <Login/>
          </>
        } />

        <Route path="/system" element = {
          <>
            <Header/>
            <Sidebar activeNumber={0}/>
            <System/>
          </>
        } />

        <Route path="/experiment" element = {
          <Experiment_1/>
        } />

        <Route path="/experiment/1" element = {
            <>
            <Header/>
            <Sidebar activeNumber={1}/>
            <Experiment_1/>
            </>
        } />
        
        <Route path="/experiment/2" element = {
            <>
            <Header/>
            <Sidebar activeNumber={1}/>
            <Experiment_2/>
            </>
        } />

        <Route path="/data" element = {
          <Data/>
        } />
        
        <Route path="/test" element = {
          <div style={{ background: '#0F0C37', height: '100%'}}>
            <Header/>
            <InnerHeader 
              pageTitle = '配件交付'
              sideName = '供应商'
              address = '0x123...123'
            />
            <Sidebar activeNumber={1}/> 
          </div>
        } />

    </Routes>

  </Router>
  )

}

// /**
//  * FactorySide是工厂端
//  * Supplier是供应商
//  * UserTerminal是用户端
//  * @constructor
//  */
// function App() {
//   const [walletAddress, setWalletAddress] = useState(""); // 用于保存钱包地址的状态

//   useEffect(() => {
//     // 使用Web3或以太坊的API获取钱包地址，并更新状态
//     const getWalletAddress = async () => {
//       if (window.ethereum) {
//         await window.ethereum.enable(); // 授权访问用户钱包
//         const provider = new ethers.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
//         const address = await signer.getAddress();
//         setWalletAddress(address);
//       } else {
//         console.error("请安装MetaMask或其他以太坊钱包插件");
//       }
//     };

//     getWalletAddress();
//   }, []);

//   return (
//     <div className="App">
//       <Header title={"供应商"} id={walletAddress}/>
//       <Supplier/>
//       <UserTerminal/>
//     </div>
//   );
// }

export default App;
