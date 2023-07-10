#!/bin/bash

echo "安装依赖"
npm install

echo "清理项目"
npx hardhat clean

echo "编译项目"
npx hardhat compile

echo "启动本地Hardhat网络"
# gnome-terminal -- bash -c "npx hardhat node"
# osascript -e 'tell application "Terminal" to do script "npx hardhat node"'
osascript -e 'tell application "Terminal" to activate' -e 'tell application "Terminal" to do script "cd /Users/heyuanxun/Documents/GitHub/IndustryPreDemo && npx hardhat node"'

echo "等待网络启动"
sleep 10 # 可根据需要调整等待时间

echo "编译合约"
npx hardhat compile

echo "部署合约"
npx hardhat --network localhost run scripts/deploy.ts

echo "初始化操作员白名单"
npx hardhat --network localhost run scripts/setWhiteList.ts

echo "初始化产品信息"
npx hardhat --network localhost run scripts/setProductInfo.ts

echo "进入前端文件夹"
cd my-app/

echo "安装依赖"
npm install

ecoo "编译前端"
npm run start

echo "启动前端"
npm run start
