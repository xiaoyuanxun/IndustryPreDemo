import React, { useEffect, useState } from 'react';
import './App.css';
import {FactorySide, Header, Supplier, UserTerminal} from "./Components";
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
            <div className="App">
              <Header title={"供应商"} id={walletAddress}/>
              <Supplier/>
            </div>
          } />

        <Route path="/supplier" element = {
            <div className="App">
              <Header title={"供应商"} id={walletAddress}/>
              <Supplier/>
            </div>
          } />

        <Route path="/supplier/0" element = {
            <div className="App">
              <Header title={"供应商"} id={walletAddress}/>
              <Supplier page={0} />
            </div>
          } />
          
          <Route path="/supplier/1" element = {
            <div className="App">
              <Header title={"供应商"} id={walletAddress}/>
              <Supplier page={1} />
            </div>
          } />

        <Route path="/factory" element = {
          <div className="App">
            <Header title={"工厂端"} id={walletAddress}/>
            <FactorySide/>
          </div>
        } />

        <Route path="/factory/0" element = {
          <div className="App">
            <Header title={"工厂端"} id={walletAddress}/>
            <FactorySide page={0} />
          </div>
        } />

        <Route path="/factory/1" element = {
          <div className="App">
            <Header title={"工厂端"} id={walletAddress}/>
            <FactorySide page={1} />
          </div>
        } />

        <Route path="/factory/2" element = {
          <div className="App">
            <Header title={"工厂端"} id={walletAddress}/>
            <FactorySide page={2} />
          </div>
        } />        

        <Route path="/factory/3" element = {
          <div className="App">
            <Header title={"工厂端"} id={walletAddress}/>
            <FactorySide page={3} />
          </div>
        } />   
        <Route path="/factory/4" element = {
          <div className="App">
            <Header title={"工厂端"} id={walletAddress}/>
            <FactorySide page={4} />
          </div>
        } />                   
        
        <Route path="/user" element = {
          <div className="App">
            <Header title={"用户端"} id={walletAddress}/>
            <UserTerminal/>
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
