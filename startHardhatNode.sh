#!/bin/bash

current_path=$(pwd)
echo "当前路径 ${current_path}"

echo "安装依赖"
npm install

echo "清理节点网络缓存"
npx hardhat clean

npx hardhat compile

echo "启动本地Hardhat网络"

if [[ $(uname) == "Darwin" ]]; then
    osascript -e 'tell application "Terminal" to activate' -e "tell application \"Terminal\" to do script \"cd $current_path && npx hardhat node\""
else
    gnome-terminal --working-directory="$current_path" -- bash -c "npx hardhat node"
fi