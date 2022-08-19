const { ethers } = require('hardhat')
const { expect, assert } = require('chai')

describe('SimpleStorage', function () {
	let SimpleStorageFactory, simpleStorage
	beforeEach(async function () {
		SimpleStorageFactory = await ethers.getContractFactory('SimpleStorage')
		simpleStorage = await SimpleStorageFactory.deploy()
	})

	//Use 'it.only' to run just one
	it('Start with a favorite number of 0', async function () {
		const currentValue = await simpleStorage.retrieve()
		const expectedValue = '0'
		assert.equal(currentValue.toString(), expectedValue)
	})

	//Use yarn hardhat test --grep store
	//to pull a specific test
	it('Should update when store function is called', async function () {
		const expectedValue = '7'
		const tResponse = await await simpleStorage.store(7)
		await tResponse.wait(1)
		const currentValue = await simpleStorage.retrieve()
		assert.equal(currentValue.toString(), expectedValue)
	})
})
