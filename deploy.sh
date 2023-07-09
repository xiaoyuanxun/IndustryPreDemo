#!/bin/bash

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

echo "部署并初始化合约"
npx hardhat --network localhost run scripts/deploy.ts
npx hardhat --network localhost run scripts/setWhiteList.ts

echo "启动前端"
cd my-app/
npm install
npm run start
