const ThreeDModel = artifacts.require('threed_model');

module.exports = function(deployer) {
    deployer.deploy(ThreeDModel);
};