import React, { useState, useEffect } from "react";
import "./page9.css";
import LinePng from '../../images/FactoryPage9Line.png'
import { ethers } from "ethers";
import contractAbi from '../../contractABI.json';
import { contractAddress, rpcProviderUrl, factoryPrivateKey } from "../../contractConfig";

export const FactorySidePage9 = React.memo(() => {
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {

  const getAllProductInfo = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(factoryPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('工厂操作员地址：', await signer.getAddress());

      const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);
      const productList = await contract_read.getProductList();
      console.log('查询产品列表 : ', productList);

      setProductArray(productList);
    } catch(error) {
      console.error("Error : ", error);
    }
  };

  getAllProductInfo();
}, []);


  return (
    <div className="FactorySidePage9">
      <div className="FactorySidePage9-box">
        <div className="FactorySidePage9-box-title">
          <div className="FactorySidePage9-box-title-1">
            产品名称
          </div>
          <div className="FactorySidePage9-box-title-2">
            产品型号
          </div>
        </div>
        <img className="FactorySidePage9-line" alt="Line" src={LinePng} />
      </div>
      {productArray.map((item, index) => (
        <div key={index} className="FactorySidePage9-product">
          <div className="FactorySidePage9-product-box"> 
            <div className="FactorySidePage9-product-name">{item[0]}</div>
            <div className="FactorySidePage9-product-model">{item[1]}</div>
          </div>
          <img className="FactorySidePage9-line" alt="Line" src={LinePng} />
        </div>

      ))}
    </div>
  );
});
