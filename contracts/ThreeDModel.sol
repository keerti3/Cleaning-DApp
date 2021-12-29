pragma solidity >=0.4.22 <0.9.0;

contract ThreeDModel{
    int public modelCount = 0;

    struct Model{
        int id;
        string name;
        string creator;
    }

    mapping(int => Model) public models;

    event ModelAdded(
        int id,
        string name,
        string creator
    );

    constructor() public {
        //addModel("ice", "k");
    }

    /*function name1() external view returns(string memory){
        return name;
    }*/

    function addModel(string memory _name, string memory _creator) public {
        modelCount++;
        models[modelCount] = Model(modelCount, _name, _creator);
        emit ModelAdded(modelCount,_name,_creator);
    }
}