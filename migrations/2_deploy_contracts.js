const ThreeDModel = artifacts.require('./ThreeDModel.sol');

module.exports = function(deployer) {
    deployer.deploy(ThreeDModel);
};