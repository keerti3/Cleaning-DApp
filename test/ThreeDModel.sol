pragma solidity >=0.4.22 <0.9.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/ThreeDModel.sol";

contract TestThreeDModel {
    function testThreeDModel() public {
        // Get the deployed contract
        ThreeDModel model3d = ThreeDModel(DeployedAddresses.ThreeDModel());

        // Call getGreeting function in deployed contract
        string memory addedModel = model3d.addModel("bear","hruthika");

        // Assert that the function returns the correct greeting
        Assert.equal(addedModel, "bear", "It should store bear");
        Assert.equal(addedModel, "hruthika", "It should store owner name as hruthika");
    }
}