import { ethers } from "hardhat";
import contractAbi from '../my-app/src/contractABI.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

async function setProductInfo() {
    const signer = await ethers.getSigner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    for(var i = 2;i < 10;++i) {
        const productName = `${i}型电池`;
        const productModel = `TEST${i}${i}${i}`;
        const productDesc = `这是${i}型电池`;
        const minNumber = 100;
        const maxNumber = 1000;
        console.log('productName : ', productName);

        const tx = await contract.creatOrupdateInfo(
            productName,
            productModel,
            productDesc
        );
        await tx.wait();

        const supply_tx = await contract.supplyComponent(
            productName,
            productModel,
            minNumber,
            maxNumber,
            productDesc
        );
        const supply_receipt = await supply_tx.wait();
        const hashcode = supply_receipt.events[0].args.hashvalue;
        console.log('hashcode : ', hashcode);

        const enter_tx =  await contract.enterStorge(hashcode);
        const enter_receipt = await enter_tx.wait();
        const enter_event = enter_receipt.events[0].args.out;
        console.log('enter event : ', enter_event);
    }
}

setProductInfo().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
