pragma solidity 0.8.7;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Avatars is ERC721Enumerable {
    using SafeMath for uint256;
    uint256 public baseShare;
    uint256 private totalNFTs;
    uint256 private minShare;
    uint256 public totalRoyalties;
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
        require(msg.value > 0.33 ether);
        totalRoyalties += 0.0495 ether; // each purchase sends 15% of royalties to the pool
        return mint(msg.sender);
    }

    function buyMulti(uint256 amount) external payable {
        require(amount <= 5, 'Can only mint 5 at a time');
        require(msg.value > uint256(0.33 ether).mul(amount));
        totalRoyalties += uint256(0.0495 ether).mul(amount); // each purchase sends 15% of royalties to the pool
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
