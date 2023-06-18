import React, { useState } from 'react';
import Web3 from 'web3';
import contractABI from '../contractABI.json';

const contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707';
const web3 = new Web3('http://localhost:8545'); // 替换为你的本地节点的URL
const contract = new web3.eth.Contract(contractABI, contractAddress);

function AddProductLink() {
  const [productIndex, setProductIndex] = useState(0);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productSerialNumber, setProductSerialNumber] = useState('');

  const handleProductIndexChange = (event) => {
    setProductIndex(parseInt(event.target.value));
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleProductSerialNumberChange = (event) => {
    setProductSerialNumber(event.target.value);
  };

  const addProductLink = async () => {
    try {
      const accounts = await web3.eth.getAccounts();

      await contract.methods
        .addProductLink(
          productIndex,
          productName,
          productDescription,
          productSerialNumber,
          Math.floor(Date.now() / 1000)
        )
        .send({ from: accounts[0] });

      // 清空输入框
      setProductIndex(0);
      setProductName('');
      setProductDescription('');
      setProductSerialNumber('');

      alert('Product Link added successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to add Product Link');
    }
  };

  return (
    <div>
      <h1>Add Product Link</h1>

      <label htmlFor="productIndex">Product Index:</label>
      <input
        type="number"
        id="productIndex"
        value={productIndex}
        onChange={handleProductIndexChange}
      />
        <br/>
        <br/>

      <label htmlFor="productName">Product Name: </label>
      <input
        type="text"
        id="productName"
        value={productName}
        onChange={handleProductNameChange}
      />
        <br/>
        <br/>

      <label htmlFor="productDescription">Product Description: </label>
      <input
        type="text"
        id="productDescription"
        value={productDescription}
        onChange={handleProductDescriptionChange}
      />
        <br/>
        <br/>

      <label htmlFor="productSerialNumber">Product Serial Number: </label>
      <input
        type="text"
        id="productSerialNumber"
        value={productSerialNumber}
        onChange={handleProductSerialNumberChange}
      />
        <br/>
        <br/>

      <button onClick={addProductLink}>Add Link</button>
    </div>
  );
}

export default AddProductLink;
