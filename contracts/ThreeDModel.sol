pragma solidity >=0.4.22 <0.9.0;

contract ThreeDModel{
    int public modelCount = 0;

    struct Model{
        int id;
        string name;
        string owner;
    }

    mapping(int => Model) public models;

    constructor() public {
		addModel("rose", "hruthika");
	}

    function addModel(string memory _name, string memory _owner) public {
        modelCount++;
        models[modelCount] = Model(modelCount, _name, _owner);
    }
}