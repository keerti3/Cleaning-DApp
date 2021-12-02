const threeDModel = artifacts.require('./3dModel.sol');

module.exports = function(deployer) {
    deployer.deploy(threeDModel);
};