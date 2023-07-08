import { ethers } from "hardhat";

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
// const contractAddress = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
import contractAbi from '../my-app/src/contractABI.json';

async function setWhiteList() {
    const signer = await ethers.getSigner('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266');
    const contract = new ethers.Contract(contractAddress, contractAbi, signer);

    // function setWhiteList(address user,bool status) external onlyOwner  {
    //     whiteLists[user]=status;
    // }

    const tx_1 = await contract.setWhiteList(
        ethers.utils.getAddress('0x70997970C51812dc3A010C7d01b50e0d17dc79C8'),
        true
    );
    await tx_1.wait()

    const tx_2 = await contract.setWhiteList(
      ethers.utils.getAddress('0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC'),
      true
  );
    await tx_2.wait()
    // const tx = await contract.supplyComponent(
    //   '产品1',
    //   '0x1234567890abcdef',
    //   ethers.utils.parseUnits('123', 0),
    //   ethers.utils.parseUnits('456', 0),
    //   ''
    // );


}

setWhiteList().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
