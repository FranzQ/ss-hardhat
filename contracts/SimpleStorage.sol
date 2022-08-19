// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    uint256 num;

    //To make this function overridable, mark it as virtual
    //yarn solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol
    function store(uint _num) public virtual {
        num = _num;
    }

    function retrieve() public view returns (uint256) {
        return num;
    }

    mapping(string => uint256) public nameToAge;
    mapping(string => string) public idToName;

    struct People {
        string name;
        uint256 age;
        string id;
    }

    People[] public people;

    function addPerson(
        string memory _name,
        uint _age,
        string memory _id
    ) public {
        people.push(People(_name, _age, _id));
        nameToAge[_name] = _age;
        idToName[_id] = _name;
    }

    function getPerson(uint _index) public view returns (People memory) {
        return people[_index];
    }
}
