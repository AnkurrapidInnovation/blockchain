const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


// delete entire build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// read 'campaign.sol' from the contracts folder
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;


// to create that folder
fs.ensureDirSync(buildPath);


// console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}