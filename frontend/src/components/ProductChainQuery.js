import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import contractABI from '../contractABI.json';

const contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
const web3 = new Web3('http://localhost:8545'); // 替换为你的本地节点的URL
const contract = new web3.eth.Contract(contractABI, contractAddress);

function GetProductChain() {
  const [productIndex, setProductIndex] = useState(0);
  const [productChain, setProductChain] = useState([]);

  const handleChange = (event) => {
    setProductIndex(event.target.value);
  };

  const getProductChain = async () => {
    try {
      const chain = await contract.methods.getProductChain(productIndex).call();
      setProductChain(chain);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductChain();
  }, [productIndex]);

  // 辅助函数：将 Solidity 的时间戳转换为日期时间字符串
  const formatTimestamp = (timestamp) => {
    /* eslint-disable-next-line */
    const bigintTimestamp = BigInt(timestamp);
    const date = new Date(Number(bigintTimestamp) * 1000);
    return date.toUTCString();
  };

  return (
    <div>
      <h1>Get Product Chain</h1>
      <label htmlFor="productIndex">Product Index: </label>
      <input
        type="number"
        id="productIndex"
        value={productIndex}
        onChange={handleChange}
      />
      <button onClick={getProductChain}>Get Chain</button>

      <h2>Product Chain:</h2>
      <ul>
        {productChain.map((link, index) => (
          <li key={index}>
            <p>Product Name: {link.productName}</p>
            <p>Product Description: {link.productDescription}</p>
            <p>Product Serial Number: {link.productSerialNumber}</p>
            <p>Timestamp: {formatTimestamp(link.timestamp)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetProductChain;
