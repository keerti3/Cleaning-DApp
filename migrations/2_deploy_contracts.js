const ThreeDModel = artifacts.require("ThreeDModel");

module.exports = function(deployer) {
    deployer.deploy(ThreeDModel);
};