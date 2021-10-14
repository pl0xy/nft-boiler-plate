pragma solidity 0.8.7;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Avatars is ERC721Enumerable {
    using SafeMath for uint256;
    uint256 public baseShare;
    uint256 private totalNFTs;
    uint256 private minShare;
    uint256 public totalRoyalties;

    uint256 public nftPrice = 0.12 ether;
    uint256 public tax = 0.0144 ether;

    struct Avatar {
        uint256 tokenShare;
        uint256 lastClaimPrice;
    }
    mapping(uint256 => Avatar) public avatars;

    event MintToken(uint256 tokenID, uint256 share, address recipient);

    constructor(
        string memory name,
        string memory symbol,
        uint256 _baseShare,
        uint256 _minShare,
        uint256 _totalNFTs
    ) public ERC721(name, symbol) {
        baseShare = _baseShare;
        totalNFTs = _totalNFTs;
        minShare = _minShare;
        mint(msg.sender);
        mint(msg.sender);
        mint(msg.sender);
        mint(msg.sender);
        mint(msg.sender);
    }

    function mint(address _recipient) internal returns (uint256) {
        uint256 newId = totalSupply() + 1;
        require(newId < totalNFTs, 'Max supply reached');
        _safeMint(_recipient, newId);
        // uint256 percentage = newId.mul(1 ether).mul(100).div(totalNFTs);
        // uint256 deductable = baseShare.mul(percentage).div(100 ether);
        // uint256 share = baseShare.sub(deductable);
        uint256 share = baseShare;
        avatars[newId] = Avatar({tokenShare: share, lastClaimPrice: totalRoyalties});
        emit MintToken(newId, share, _recipient);
        return share;
    }

    function claim(uint256 tokenID) public {
        require(ownerOf(tokenID) == msg.sender, 'Must be the owner');

        uint256 lastClaim = avatars[tokenID].lastClaimPrice;
        require(lastClaim < totalRoyalties, 'Nothing to claim');

        uint256 amount = totalRoyalties.sub(lastClaim).mul(avatars[tokenID].tokenShare).div(100 ether);
        payable(msg.sender).transfer(amount);

        avatars[tokenID].lastClaimPrice = totalRoyalties;
    }

    function claimMulti(uint256[] memory tokenIDs) external {
        for (uint256 i = 0; i < tokenIDs.length; i++) {
            claim(tokenIDs[i]);
        }
    }

    function buy() external payable returns (uint256) {
        require(msg.value > nftPrice);
        totalRoyalties += tax; // each purchase sends 15% of royalties to the pool
        return mint(msg.sender);
    }

    function buyMulti(uint256 amount) external payable {
        require(amount <= 5, 'Can only mint 5 at a time');
        require(msg.value > uint256(nftPrice).mul(amount));
        totalRoyalties += uint256(tax).mul(amount); // each purchase sends 15% of royalties to the pool
        for (uint256 i = 0; i < amount; i++) {
            mint(msg.sender);
        }
    }

    function pendingRoyalties(uint256 tokenID) external view returns (uint256) {
        uint256 lastClaim = avatars[tokenID].lastClaimPrice;
        uint256 amount = totalRoyalties.sub(lastClaim).mul(avatars[tokenID].tokenShare).div(100 ether);
        return amount;
    }

    receive() external payable {
        totalRoyalties += msg.value;
    }
}
