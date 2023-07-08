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

function App() {

  const [walletAddress, setWalletAddress] = useState(""); // 用于保存钱包地址的状态

  useEffect(() => {
    // 使用Web3或以太坊的API获取钱包地址，并更新状态
    const getWalletAddress = async () => {
      if (window.ethereum) {
        await window.ethereum.enable(); // 授权访问用户钱包
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } else {
        console.error("请安装MetaMask或其他以太坊钱包插件");
      }
    };

    getWalletAddress();
  }, []);

  return(
    <Router>
      <Routes>

        <Route path="" element = {
            <div>
              <Login/>
            </div>
          } />

        <Route path="/supplier" element = {
          <div >
            <Supplier/>            
          </div>
          } />

        <Route path="/supplier/0" element = {
            <div >
              <SupplierPage0/>
            </div>
          } />
          
        <Route path="/supplier/1" element = {
            <div >
            <SupplierPage1/>
          </div>
        } />

        <Route path="/supplier/2" element = {
            <div >
            <SupplierPage2/>
          </div>
        } />

        <Route path="/supplier/3" element = {
            <div >
            <SupplierPage3/>
          </div>
        } />

        <Route path="/factory" element = {
          <div >
            <FactorySide/>
          </div>
        } />

        <Route path="/factory/0" element = {
          <div>
            <FactorySidePage0 />
          </div>
        } />

        <Route path="/factory/1" element = {
          <div >
            <FactorySidePage1 />
          </div>
        } />

        <Route path="/factory/2" element = {
          <div >
            <FactorySidePage2 />
          </div>
        } />        

        <Route path="/factory/3" element = {
          <div>
            <FactorySidePage3 />
          </div>
        } />   
        
        <Route path="/factory/4" element = {
          <div >
            <FactorySidePage4  />
          </div>
        } />                   
                
        <Route path="/factory/5" element = {
          <div >
            <FactorySidePage5  />
          </div>
        } />     

        <Route path="/factory/6" element = {
          <div >
            <FactorySidePage6  />
          </div>
        } />        

        <Route path="/factory/7" element = {
          <div >
            <FactorySidePage7  />
          </div>
        } />   

        <Route path="/factory/8" element = {
          <div >
            <FactorySidePage8  />
          </div>
        } />   

        <Route path="/factory/9" element = {
          <div >
            <FactorySidePage9  />
          </div>
        } />   

        <Route path="/user" element = {
          <div>
            <UserTerminal/>
          </div>
        } />

        <Route path="/user/0" element = {
          <div>
            <UserTerminalPage0/>
          </div>
        } />

        <Route path="/user/1" element = {
          <div>
            <UserTerminalPage1/>
          </div>
        } />

        <Route path="/user/2" element = {
          <div>
            <UserTerminalPage2/>
          </div>
        } />

        <Route path="/loginPage" element = {
          <Login/>
        } />

        <Route path="/system" element = {
          <div className="App">
            <System/>
          </div>
        } />

        <Route path="/experiment" element = {
          <Experiment_1/>
        } />

        <Route path="/experiment/1" element = {
          <Experiment_1/>
        } />
        
        <Route path="/experiment/2" element = {
          <Experiment_2/>
        } />

        <Route path="/data" element = {
          <Data/>
        } />

        {/* <Redirect to="/" /> 默认跳转到根路径 */}

      <Route path="/side" element = {
          <Sidebar/>
          
        } />
        
        <Route path="/test" element = {
          <div className='App'>
            <Header/>
            <Sidebar/>
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
