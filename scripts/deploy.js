// imports
const { ethers, run, network } = require("hardhat") // in order to get network configuration we import 'network'
//const { MaxInt256 } = require("ethers")

//async main
async function main() {
    // it deploys our contract
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract")
    const simpleStorage = await SimpleStorageFactory.deploy()
    simpleStorage.deploymentTransaction()

    const simpleStorageAddress = await simpleStorage.getAddress()

    console.log(`Deployed contract to: ${simpleStorageAddress}`)

    // if we are on a testnet, it verifies our contract
    if (network.config.name === 11155111 && process.env.ETHERSCAN_API_KEYS) {
        console.log("Waiting for block confirmations... ")
        await simpleStorage.deploymentTransaction().wait(6)
        await verify(simpleStorageAddress, [])
    }

    //presents the current value
    const currentValue = await simpleStorage.retrieve()

    console.log(`Current Value is : ${currentValue}`)

    // updates the current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated Value is : ${updatedValue}`)
}

// in order to carry out verification directly from the code editor...
// since our simplestorage contract doesnt have a constructor function, the arguments are going to be blank. it works for etherscan
//first add the nomicfoundation hardhat verify plugin
// check the hardhat documentation to see how to use the plugin
// get the api key from etherscan and create a new secyion in the module export of the hardhat config file
// also you can verify using the a command line. Check the plugin usage.
// below is the verify script

async function verify(contractAddress, args) {
    //const verify =async (contactAddress, args) => {

    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}
//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
