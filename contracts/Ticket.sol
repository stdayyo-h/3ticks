//SPDX-License-Identifier:UNLICENSED

pragma solidity 0.8.17;

contract Ticket{
    uint256 ticketPrice=0.025 ether;
    address owner;
    mapping(address=>uint256)public ticketHolders;

    constructor(){
        owner=msg.sender;
    }

    function buyTickets(address _user,uint256 _amount)payable public{
        require(msg.value >=_amount*ticketPrice);
        addTickets(_user,_amount);
    }
   
    function useTickets(address _user,uint256 _amount)public{
        subtractTickets(_user,_amount);
    }
    
    function addTickets(address _user,uint256 _amount)internal{
         ticketHolders[_user]+=_amount;
    }

    function subtractTickets(address _user,uint256 _amount)internal {
        require(ticketHolders[_user] >=_amount,"donot have enough tickets");
        ticketHolders[_user]-=_amount;
    }

    function withdraw() public{
        require (msg.sender == owner ,"you are not the owner");
        (bool success,)=payable(owner).call{
            value:address(this).balance
        }("");
        require(success);
    }
}
