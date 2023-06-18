import React, { Component } from 'react';
import Web3 from 'web3';
import contractABI from '../contractABI.json';

const contractAddress = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707'; // 替换为你的智能合约地址
const provideURL = 'http://localhost:8545';

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
    //   // 创建Web3实例
    //   if (window.ethereum) {
    //     window.web3 = new Web3(window.ethereum);
    //     await window.ethereum.enable();
    //   } else if (window.web3) {
    //     window.web3 = new Web3(window.web3.currentProvider);
    //   } else {
    //     console.log('请安装MetaMask或其他以太坊浏览器插件！');
    //   }

    //   if (!window.ethereum) {
    //     alert("Please install Metamask to use this app.");
    //     return;
    //   }

     if (!window.ethereum) {
        alert("Please install Metamask to use this app.");
        return;
    }    

      const web3 = new Web3(new Web3.providers.HttpProvider(provideURL));
      // 请求用户授权
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // 获取用户的 Metamask 地址
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      console.log('User account:', account);

      // 创建合约实例

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
        if (!window.ethereum) {
            alert("Please install Metamask to use this app.");
            return;
        }
    
        const web3 = new Web3(new Web3.providers.HttpProvider(provideURL));
        // 请求用户授权
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // 获取用户的 Metamask 地址
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        console.log('User account:', account);

    //   const accounts = await web3.eth.getAccounts();
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
        <h1>创建产品生产链条</h1>
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
