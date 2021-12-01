// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract Creation is
    Ownable,
    ERC721Enumerable
{


    event Mint(string productId,uint256 tokenId, uint256 count);
    event Trade(
        string orderId,
        address from,
        address to,
        uint256 tokenId
    );

    uint256 private nextTokenId;

    string private _baseTokenURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function mint(string memory productId) public {
        uint256 tokenId = nextTokenId;
        _safeMint(owner(), tokenId);
        emit Mint(productId,tokenId, 1);
        nextTokenId = tokenId + 1;
    }

    function mintByBatch(string memory productId, uint256 tokenCounts) public {
        uint256 start = nextTokenId;
        uint256 end = nextTokenId + tokenCounts;

        for (uint256 i = start; i < end; i++) {
            _safeMint(owner(), i);
            emit Mint(productId,i, tokenCounts);
        }
        nextTokenId = end + 1;
    }

    function trade(
        string memory orderId,
        address from,
        address to,
        uint256 tokenId
    ) public {
        require(from != address(0), "From is zero address");
        require(to != address(0), "To is zero address");
        require(_exists(tokenId), "Token not exist");

        safeTransferFrom(from, to, tokenId);

        emit Trade(orderId,from, to, tokenId);
    }

    function withdraw() public payable {
        payable(owner()).transfer(payable(address(this)).balance);
    }
}
