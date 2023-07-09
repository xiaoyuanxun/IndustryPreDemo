import { ethers } from "hardhat";
import contractAbi from '../my-app/src/contractABI.json';

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

async function setProductInfo() {
    const signer = await ethers.getSigner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    for(var i = 2;i < 10;++i) {
        const tx = await contract.creatOrupdateInfo(
            `${i}型电池`,
            `TEST-${i}${i}${i}`,
            `这是${i}型电池`
        );
        await tx.wait()
        // console.log(`${i}型电池`)
    }
}

setProductInfo().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
