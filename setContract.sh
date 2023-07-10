#!/bin/bash

echo "安装依赖"
npm install

echo "编译合约"
npx hardhat compile

echo "部署合约"
npx hardhat --network localhost run scripts/deploy.ts

echo "初始化操作员白名单"
npx hardhat --network localhost run scripts/setWhiteList.ts

echo "初始化产品信息"
npx hardhat --network localhost run scripts/setProductInfo.ts