import { ethers } from "hardhat";

async function main() {
    const signers = await ethers.getSigners();
    const signer = signers[0];
  
    const BloackIoTManager = await ethers.getContractFactory("BloackIoTManager", signer);
    const bloackIoTManager = await BloackIoTManager.deploy();
  
    await bloackIoTManager.deployed();
    console.log(`BloackIoTManager deployed to ${bloackIoTManager.address}`);

    const setWhiteListTX = await bloackIoTManager.setWhiteList(
        ethers.utils.getAddress('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'),
        true
    );

    const supplyComponentTX = await bloackIoTManager.supplyComponent(
        '产品1', 
        '0x1234567890abcdef',
        100,
        200,
        ''
    );
    const supplyComponentReceipt = await supplyComponentTX.wait();
    console.log('入库hash编码 : ', supplyComponentReceipt.logs[0].data);

    const EnterStorgeTX = await bloackIoTManager.EnterStorge(
        supplyComponentReceipt.logs[0].data
    );
    console.log('入库完成')      

    const OutStrogeTX = await bloackIoTManager.OutStroge(
        '0x1234567890abcdef',
        150
    );
    const OutStrogeReceipt = await OutStrogeTX.wait();
    console.log('出库成功 : ', OutStrogeReceipt.logs[0].data);
    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// deployProducts().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
