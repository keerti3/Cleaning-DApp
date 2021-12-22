// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ERCmetadata{
    string private _name;
    string private _owner;
    
    constructor(string memory name1, string memory owner1) public{
        _name=name1;
        _owner=owner1;
    }

    function name() external view returns(string memory){
        return _name;
    }

    function owner() external view returns(string memory){
        return _owner;
    }
}