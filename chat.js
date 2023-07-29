const GasTracker = artifacts.require("GasTracker")

contract("GasTracker", () => {
    it("should measure gas usage of function1", async () => {
        const gasTracker = await GasTracker.deployed()

        const tx = await gasTracker.function1()
        const receipt = await web3.eth.getTransactionReceipt(tx.tx)

        console.log("Gas used by function1:", receipt.gasUsed)
    })

    it("should measure gas usage of function2", async () => {
        const gasTracker = await GasTracker.deployed()

        const tx = await gasTracker.function2()
        const receipt = await web3.eth.getTransactionReceipt(tx.tx)

        console.log("Gas used by function2:", receipt.gasUsed)
    })
})
