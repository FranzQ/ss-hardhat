require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
require('hardhat-gas-reporter')
require('solidity-coverage')

const RPC_URL = process.env.RPC_URL_GOERLI
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
	defaultNetwork: 'localhost',
	networks: {
		goerli: {
			url: RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 5,
		},
		localhost: {
			url: 'http://127.0.0.1:8545/',
			chainId: 31337,
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
	gasReporter: {
		enabled: true,
		outputFile: 'gas-report.txt',
		noColors: true,
		currency: 'USD',
		coinmarketcap: COINMARKETCAP_API_KEY,
	},
	solidity: '0.8.9',
}
