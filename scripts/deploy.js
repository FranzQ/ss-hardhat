const { ethers, run } = require('hardhat')

async function main() {
	const SimpleStorageFactory = await ethers.getContractFactory(
		'SimpleStorage'
	)
	console.log('Deploying contract...')
	const simpleStorage = await SimpleStorageFactory.deploy()
	await simpleStorage.deployed()
	console.log(simpleStorage.address)
	if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
		await simpleStorage.deployTransaction.wait(6)
		await verify(simpleStorage.address, [])
	}

	const currentValue = await simpleStorage.retrieve()
	console.log(`Current value: ${currentValue}`)
}

async function verify(contractAddress, args) {
	console.log('Verifying...')
	try {
		await run('verify:verify', {
			address: contractAddress,
			constructorArguments: args,
		})
	} catch (e) {
		if (e.message.toLowerCase().includes('already verified')) {
			console.log('Already Verified')
		} else {
			console.log(e)
		}
	}
}

main()
	.then(() => {
		console.log('Done')
	})
	.catch((ex) => {
		console.error('Error', ex)
	})
