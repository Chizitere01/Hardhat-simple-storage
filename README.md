# Simple Storage Smart Contract

Welcome to the Simple Storage Smart Contract project! This project demonstrates a basic Ethereum smart contract that allows users to store and retrieve their favorite number. Additionally, users can associate their names with favorite numbers using a mapping and a struct.

## Features

1. **Storage:** Users can store their favorite number in the smart contract.

2. **Retrieval:** Users can retrieve their stored favorite number.

3. **Name-to-Number Mapping:** Users can associate their names with favorite numbers using a mapping.

4. **Struct:** Users' favorite numbers and names are stored in a struct called "People."

## Smart Contract Details

The smart contract for Simple Storage is written in Solidity and is designed to store and retrieve users' favorite numbers. It also allows users to associate their names with favorite numbers using a mapping and a struct.

### Contract Functions

The following are the main functions provided by the smart contract:

1. `store(uint256 _favoriteNumber)`: Allows users to store their favorite number in the contract. The user must provide the desired favorite number as a parameter to this function.

2. `retrieve()`: View function that allows users to retrieve their stored favorite number.

3. `addperson(string memory _name, uint256 _favoriteNumber)`: Allows users to associate their names with favorite numbers. Users can add their names and favorite numbers using this function, and the data will be stored in the "People" struct and the name-to-number mapping.

### Deployment

To deploy the Simple Storage smart contract on your local development environment or the Ethereum mainnet/testnet, you will need:

1. A compatible Ethereum wallet (e.g., MetaMask) to interact with the smart contract.

2. The Solidity contract source code, which can be found in the `contracts` directory.



## Security Considerations

This project is a simple example to demonstrate the basic functionality of a smart contract. It does not include advanced security features and should not be used for production purposes without proper security auditing and enhancements.

## Disclaimer

This project is for educational and informational purposes only. Use it at your own risk. The developers of this project are not responsible for any losses or damages that may occur from using this application or the underlying smart contract.

## License

This Simple Storage Smart Contract project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

For any questions, feedback, or contributions, please contact [Your Contact Email]. Happy storing and retrieving!
