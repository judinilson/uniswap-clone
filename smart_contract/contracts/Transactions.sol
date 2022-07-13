// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Transactions {
    event Transfer(
        address sender,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyboard
    );

    function PlublishTransaction(
        address payable receiver,
        uint256 amount,
        string memory message,
        string memory keyboard
    ) public {
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            block.timestamp,
            keyboard
        );
    }
}
