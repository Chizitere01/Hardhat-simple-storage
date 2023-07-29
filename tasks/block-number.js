// first import the task function
const { tast, task } = require("hardhat/config") //the hardhat/config has the task function

// define the task, give it a name and description
task("block-number", "Prints the current block number").setAction(
    //const blockTask = async function () => {}
    //async function blockTask(){}
    async (taskArgs, hre) => {
        // this here is an anonymous function.
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current Block Number: ${blockNumber}`)
    }
)
//add the task to your hardhat,config file
// then add a module.export
