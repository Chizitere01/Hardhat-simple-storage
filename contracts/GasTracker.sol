//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract GasTracker {
    event GasUsed(uint gas);
    uint8 count = 10;
    event Number(uint8);

    function emitNumber1() external {
        // Perform some operations
        for (uint8 i; i < count; i++) {
            emit Number(i);
        }
        emit GasUsed(gasleft());
    }

    function emitNumber2() external {
        // Perform some operations
        uint8 _count = count;
        for (uint8 i; i < _count; i++) {
            emit Number(i);
        }
        emit GasUsed(gasleft());
    }
}
