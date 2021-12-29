const ThreeDModel = artifacts.require("ThreeDModel");
const ThreeDModel = artifacts.require("ModelThreeD");

module.exports = function(deployer) {
    deployer.deploy(ThreeDModel);
};

module.exports = function(deployer) {
    deployer.deploy(ModelThreeD);
};