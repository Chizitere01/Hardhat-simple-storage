const { expect } = require("chai")

describe("GasTracker", function () {
    let gasTracker

    beforeEach(async function () {
        const GasTracker = await ethers.getContractFactory("GasTracker")
        gasTracker = await GasTracker.deploy()
        //await gasTracker.deployed()
    })

    it("should measure gas usage of emitNumber1", async function () {
        const tx = await gasTracker.emitNumber1()
        const receipt = await tx.wait()

        console.log("Gas used by function1:", receipt.gasUsed.toString())
    })

    it("should measure gas usage of emitNumber2", async function () {
        const tx = await gasTracker.emitNumber2()
        const receipt = await tx.wait()

        console.log("Gas used by function2:", receipt.gasUsed.toString())
    })
})
