import React, { useState, useEffect } from "react";
import "./page3.css";
import LinePng from '../../images/FactoryPage9Line.png'
import { ethers } from "ethers";
import contractAbi from '../../contractABI.json';
import { contractAddress, rpcProviderUrl, supplierPrivateKey } from "../../contractConfig";
import { Header, InnerHeader } from "../Header";
import { Sidebar } from "../Basic";

export const SupplierPage3 = React.memo(() => {
  const [productArray, setProductArray] = useState<{ name: string; model: string; hashCode: string }[]>([]);

  useEffect(() => {

  const getAllProductInfo = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);
      const wallet = new ethers.Wallet(supplierPrivateKey, provider);
      const signer = wallet.connect(provider);
      console.log('供应商操作员地址：', await signer.getAddress());

      const contract_read = new ethers.Contract(contractAddress, contractAbi, provider);
      const productList = await contract_read.getProductList();
      console.log('查询产品列表 : ', productList);
      
      const _productArray = [];
      for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        const name = product[0];
        const model = product[1];
        const hashArray = await contract_read.getHistoryHashsByModelNumber(model);
        for (let j = 0; j < hashArray.length; j++) {
          const hashCode = hashArray[j];
          _productArray.push({ name, model, hashCode });
        }
      }
      setProductArray(_productArray);
      console.log('_productArray : ', _productArray);
    } catch(error) {
      console.error("Error : ", error);
    }
  };

  getAllProductInfo();
}, []);

  return (
    <div className="SupplierPage3">
      <Header/>
      <div className="SupplierPage3-1">
        <Sidebar activeNumber={1}/>
        <div className="SupplierPage3-1-1">
          <InnerHeader 
                pageTitle = '交付列表'
                sideName = '供应商'
                address = '0x709...9C8'
          />
          <div className="SupplierPage3-box">
            <div className="SupplierPage3-box-title">
              <div className="SupplierPage3-box-title-1">
                产品名称
              </div>
              <div className="SupplierPage3-box-title-2">
                产品型号
              </div>
              <div className="SupplierPage3-box-title-3">
                交付哈希值
              </div>
            </div>
            <img className="SupplierPage3-line" alt="Line" src={LinePng} />
          </div>
          {productArray.map((item, index) => (
            <div key={index} className="SupplierPage3-product">
              <div className="SupplierPage3-product-box"> 
                <div className="SupplierPage3-product-name">{item.name}</div>
                <div className="SupplierPage3-product-model">{item.model}</div>
                <div className="SupplierPage3-product-hash">{truncateHash(item.hashCode)}</div>
              </div>
              <img className="SupplierPage3-line" alt="Line" src={LinePng} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

function truncateHash(hash: string) {
  const containerWidth = 500; // CSS 中的宽度
  const fontSize = 18; // CSS 中的字体大小
  const charWidth = fontSize * 0.6; // 字符宽度的估计值

  const maxChars = Math.floor(containerWidth / charWidth);
  if (hash.length <= maxChars) {
    return hash;
  }
  return hash.substring(0, maxChars) + "...";
}