const assert = require("assert");
const ganache = require("ganache-cli");
const { isTypedArray } = require("util/types");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

// class Car {
//     park() {
//         return 'stopped';
//     }

//     drive() {
//         return 'vroom';
//     }

//     describe('it is a car ', () => {
//         it('can park', () => {
//             const car = new Car();
//             assert.equal(car.park(), 'stopped');
//             assert.equal(car.park(),'stopped')
//         });
//         it('can drive',() =>{
//             const car = new Car ();
//             assert.equal(car.drive(),'vroom');
//         })
//     });



// let accounts;
// let inbox;

// beforeEach(() => {
//   //Get al list of all accounts
//   web3.eth.getAccounts().then((fetchedAccounts) => {
//     console.log(fetchedAccounts);
//   });

  //use one of those accountsd

  // the contract

//   new web3.eth.Contract(JSON.parse(interface)).deploy({
//     data: bytecode,
//     arguments: ["Hi there|"],
//     .send({from:accounts[0],gas:'1,000,0000'})
//   });

//   // use one of those account to deploy  
//   // the contract

//   inbox = await new web3.eth.Contract(JSON.parse(interface))
//   .deploy({ data: bytecode, arguments:['Hi there!']})
//   .send({ from:accounts[0] , gas :'10000000'})

//   describe("Inbox", () => {
//     it("deploys a contract", () => {});
//   });
// });
