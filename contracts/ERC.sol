pragma solidity >=0.4.22 <0.9.0;

import './ERC165.sol';
import './interfaces/IERC721.sol';
contract ERC is ERC165, IERC721{    
    //mapping from token id to owner
    mapping(uint256 => address) private _tokenOwner;
    
    //mapping from owner to number of owned tokens
    mapping(address => uint256) private _OwnedTokensCount;
    
    function balanceOf(address _owner) public view returns(uint256){
           require(_owner!=address(0),'owner query for nonexistent');
           return _OwnedTokensCount[_owner];
    }

    function ownerOf(uint256 _tokenId) external view returns (address){
        address owner = _tokenOwner[_tokenId];
         require(owner!=address(0),'owner query for nonexistent');
        return owner;
    } 


    function _exists(uint256 tokenId) internal view returns(bool){
        //setting the address of nft owner to check the mapping
        //of the address from tokenOwner at the tokenId
        address owner = _tokenOwner[tokenId];
        //return truthiness that address is not zero
        return owner != address(0);  
    }
    function _mint(address to, uint256 tokenId) internal{
        //requires that address isn't zero
        require(to != address(0), 'ERC: minting to the zero address');
        
        //requires that token doesn't already exists
        require(!_exists(tokenId),'ERC: token already minted');
        
        //we are adding a new address with a token id for minting
        _tokenOwner[tokenId] = to;

        //Owned tokens count by the owner
        _OwnedTokensCount[to]+=1;

        emit Transfer(address(0), to, tokenId);
    } 
} 