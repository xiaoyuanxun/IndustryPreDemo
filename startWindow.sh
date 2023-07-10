#!/bin/bash

echo "进入前端文件夹"
cd my-app/

echo "安装依赖"
npm install

ecoo "编译前端"
npm run start

echo "启动前端"
npm run start