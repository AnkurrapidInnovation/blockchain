const path = require("path");
const fs = require("fs");
const solc = require("solc");
const {interface,bytecode} = require('../compile')

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

   console.log( solc.compile(source, 1));
// module.exports = solc.compile(Source, 1).contracts["Inbox"];