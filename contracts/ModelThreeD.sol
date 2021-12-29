
pragma solidity >=0.4.22 <0.9.0;
import './ERCconnector.sol';
contract ModelThreeD is ERCconnector{
    //array to store our nfts
    string[] public models;
    mapping(string => bool) _modelsExists;
     
    function mint(string memory _models) public{
        require(!_modelsExists[_models],'Error - model already exists');
        models.push(_models);
        uint _id = models.length-1;
        _mint(msg.sender, _id);
        _modelsExists[_models]=true;
    }
    constructor() ERCconnector('heart','helen') public{
        
    }
}
