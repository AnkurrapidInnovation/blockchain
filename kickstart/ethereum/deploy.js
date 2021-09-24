const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
// const { interface, bytecode } = require('./compile');
const compiledFactory = require('./build/CampaignFactory.json');


const provider = new HDWalletProvider(
  'jump crucial chunk nature orchard destroy waste group hidden helmet gather excess',
  'https://rinkeby.infura.io/v3/1234e609dd3b484f9e62a4ce5f21b696'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data:compiledFactory.bytecode })
    .send({ gas: '5000000', from: accounts[0] });

    console.log(compiledFactory.interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();