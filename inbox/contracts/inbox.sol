pragma solidity ^0.4.17; // Pragma. The first line is a pragma directive
 //which tells that the source code is written for Solidity version 0.4. 0 or anything newer that does not break functionality up to, 
 //but not including, version 0.6.

contract Inbox {
    string public message;

    // function Inbox (string initialMessage) public {
    //     message = initialMessage;
    // }

    constructor(string initialMessage) public {
    message = initialMessage;
}

    // function setMessage (string newMessage) public {
    //     message = newMessage;


    // }

     constructor (string newMessage) public {
        message = newMessage;


    }
 
 }  


// contract Lottery {

//     address public manager ;

//     function Lottery() public {+
//  manager = msg.sender;

//     }
// }