# IndustryPreDemo

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



汽车链条：

整体汽车信息：

产品名称：汽车
产品描述：一辆豪华轿车
产品序列号：1BCL56TKLM
时间戳：2023-06-18 10:00:00
阶段一 - 发动机组件：

产品名称：发动机
产品描述：V8 6.0L 双涡轮增压发动机
产品序列号：E123456
时间戳：2023-06-18 10:30:00
阶段二 - 底盘组件：

产品名称：底盘
产品描述：全铝合金底盘结构
产品序列号：C654321
时间戳：2023-06-18 11:00:00
阶段三 - 车身组件：

产品名称：车身
产品描述：碳纤维车身材料
产品序列号：B987654
时间戳：2023-06-18 11:30:00


Overall Car Information:

Product Name: Car
Product Description: A luxury sedan
Product Serial Number: 1BCL56TKLM
Timestamp: 2023-06-18 10:00:00
Stage 1 - Engine Component:

Product Name: Engine
Product Description: V8 6.0L Twin-Turbocharged Engine
Product Serial Number: E123456
Timestamp: 2023-06-18 10:30:00
Stage 2 - Chassis Component:

Product Name: Chassis
Product Description: Aluminum Alloy Chassis Structure
Product Serial Number: C654321
Timestamp: 2023-06-18 11:00:00
Stage 3 - Body Component:

Product Name: Body
Product Description: Carbon Fiber Body Material
Product Serial Number: B987654
Timestamp: 2023-06-18 11:30:00

