import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABI from '../contractABI.json';

const contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
const web3 = new Web3('http://localhost:8545'); // 替换为你的本地节点的URL
const contract = new web3.eth.Contract(contractABI, contractAddress);

function GetProductIndex() {
  const [productIndex, setProductIndex] = useState(0); // 修改初始值为 0

  useEffect(() => {
    getProductIndex();
  }, [productIndex]); // 添加 productIndex 作为 useEffect 的依赖项

  const getProductIndex = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const index = await contract.methods.getProductIndex().call({ from: accounts[0] });
    
      console.log("index是:" + index);
      setProductIndex(parseInt(index, 10)); // 将返回值转换为整数并更新状态
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Product Index: {productIndex}</h1>
    </div>
  );
}

export default GetProductIndex;
