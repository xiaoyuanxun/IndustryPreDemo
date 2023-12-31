# IndustryPreDemo

# 部署命令
## 启动节点网络
```sh
npm install
```
```sh
npx hardhat clean
```
```sh
npx hardhat node
```
## 部署&初始化合约
```sh
npx hardhat --network localhost compile
```
```sh
npx hardhat --network localhost run scripts/deploy.ts 
```
```sh
npx hardhat --network localhost run scripts/setWhiteList.ts 
```
```sh
npx hardhat --network localhost run scripts/setProductInfo.ts 
```
## 启动前端
```sh
cd my-app/
```
```sh
npm install
```
```sh
npm run start
```

# 需求分析

## 角色分类

- 供应商

- 工厂端

- 用户端

## 供应商

需求：配件交付，将产品型号、序列号、产品详细信息（名称、型号、备注）上链 -> 得到入库hash编码

## 工厂端

需求1： 创建配件信息库： 提供产品型号和产品详细信息 -> 在配件列表中维护

需求2： 配件入库：提供供应商端得到的入库hash编码，实现配件入库

需求3： 配件出库：提供配件信息，将配件出库

需求4： 查询某个型号配件的所有在库产品

需求5： 维护配件列表何产品型号展示

## 用户端

需求：提供序列号 -> 查询产品详细信息 和 产品流动轨迹


## 数据结构


# 前后端对接

## 供应商页面

产品1

0x1234567890abcdef

## 会议沟通问题：

用户登陆身份，权限管理 -> 中心化的登陆

个人中心，信息编辑

输入框旁的问号：描述，范例

输入框的报错，校验

供应商 : 型号匹配显示详细信息

整体描述 -> 多入口  示意图 

![](./1.jpg)

0x7a64dd8c9afb5df9db630ff941d6339fe181b0ce9f0845d59b3bbcfcfbb8f57b


个人中心 密码管理 找回密码 -> 管理员

完善的实验材料解释


产品名称 : 1型电池

产品型号 : TEST123

备注 : 
这是个电池，通过工厂端配件库信息对应进行上传，并且上传后通过工厂端进行确认入库信息后完成入库

0x9e692d4b4da0959684bf5c5d3638cfef3512d51af4ce23e5bdaff8e851877133

## 合约修改意见

1. [getCanEnterStorge判断有bug会算数下溢](https://github.com/xiaoyuanxun/IndustryPreDemo/blob/7872ee5a580eeefb8004a14c9af721a71f14d5df/contracts/BloackIoTManager.sol#L135)

2. 唯一序列号相关 : 唯一序列号的存储， 唯一序列号的上传函数， 唯一序列号相关查询 => 配件流动路径

3. 存储入库Hash值 : 产品信息与入库Hash值的映射，因为供应商的交付列表需要展示交付Hash值

 - https : 
 ```ts
    "start": "HTTPS=true SSL_CRT_FILE=cert.pem SSL_KEY_FILE=key.pem BROWSER=none react-scripts start",
 ```

