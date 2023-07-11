#!/bin/bash

echo "安装依赖"
npm install

echo "清理网络缓存"
npx hardhat clean

echo "启动本地Hardhat网络"
gnome-terminal -- bash -c "npx hardhat node"
# osascript -e 'tell application "Terminal" to activate' -e 'tell application "Terminal" to do script "cd /Users/heyuanxun/Documents/GitHub/IndustryPreDemo && npx hardhat node"'