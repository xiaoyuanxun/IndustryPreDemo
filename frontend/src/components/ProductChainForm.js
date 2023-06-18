import React, { Component } from 'react';
import Web3 from 'web3';

const contractABI = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productIndex",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_productName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_productDescription",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_productSerialNumber",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "addProductLink",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_productName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_productDescription",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_productSerialNumber",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "name": "createProductChain",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_productIndex",
          "type": "uint256"
        }
      ],
      "name": "getProductChain",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "productName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "productDescription",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "productSerialNumber",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct ProductsChain.ProductLink[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractInstance: null,
      productName: '',
      productDescription: '',
      productSerialNumber: ''
    };
  }

  async componentDidMount() {
    try {
      // 创建Web3实例
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.log('请安装MetaMask或其他以太坊浏览器插件！');
      }

      // 创建合约实例
      const contractAddress = 'CONTRACT_ADDRESS'; // 替换为你的智能合约地址
      const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
      this.setState({ contractInstance });
    } catch (error) {
      console.error('无法连接到以太坊网络：', error);
    }
  }

  // 处理创建产品链的函数
  handleCreateProductChain = async () => {
    const { contractInstance, productName, productDescription, productSerialNumber } = this.state;
    try {
      const accounts = await window.web3.eth.getAccounts();
      const timestamp = Date.now();

      await contractInstance.methods
        .createProductChain(productName, productDescription, productSerialNumber, timestamp)
        .send({ from: accounts[0] });

      console.log('产品链创建成功！');
    } catch (error) {
      console.error('创建产品链时发生错误：', error);
    }
  };

  // 处理输入框的变化
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { productName, productDescription, productSerialNumber } = this.state;

    return (
      <div>
        <h1>创建产品链</h1>
        <div>
          <label htmlFor="productName">产品名称:</label>
          <input type="text" id="productName" name="productName" value={productName} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="productDescription">产品描述:</label>
          <input type="text" id="productDescription" name="productDescription" value={productDescription} onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="productSerialNumber">产品序列号:</label>
          <input type="text" id="productSerialNumber" name="productSerialNumber" value={productSerialNumber} onChange={this.handleInputChange} />
        </div>
        <button onClick={this.handleCreateProductChain}>创建产品链</button>
      </div>
    );
  }
}

export default MyComponent;
