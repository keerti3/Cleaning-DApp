pragma solidity >=0.4.22 <0.9.0;
import './ERCmetadata.sol';
import './ERC.sol';
import './ERCEnumerable.sol';
contract ERCconnector is ERCmetadata, ERCEnumerable{
    constructor(string memory name, string memory owner) public ERCmetadata(name, owner){
        
    }
}