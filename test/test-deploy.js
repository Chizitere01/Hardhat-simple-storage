// hardhat testing works with the mocha frameworks which is a javascript framework for running our tests

// describe is a keyword that hardhat and mocha would recognise. it takes 2 keywords

// hardhat gas reporter is a fantastic tool that should be installed.
const { expect, assert } = require("chai")

describe("SimpleStorage", function () {
    let simpleStorageFactory, simpleStorage
    beforeEach(async function () {
        simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await simpleStorageFactory.deploy()
    }) // this is going to tell us what to do before out "IT's"

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"
        //assert
        //expect
        assert.equal(currentValue.toString(), expectedValue)
        //expect(currentValue.toString()).to.equal(expectedValue)
    }) // where we write thecode for running our tests

    it("Should update when we call store", async function () {
        //when "it.only()" is used, it runs only the indicated test
        const expectedValue = "7"
        const transactionResponse = await simpleStorage.store(expectedValue)
        await transactionResponse.wait(1)

        const currentValue = await simpleStorage.retrieve()
        assert.equal(currentValue.toString(), expectedValue)
    })
})
