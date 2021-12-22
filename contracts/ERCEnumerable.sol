// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import './ERC.sol';
contract ERCEnumerable is ERC{

    uint256[] private _allTokens;
   //mapping from tokenId to position in _allTokens array

   mapping(uint256 => uint256) private _allTokensIndex;

   //mapping of owner to list of all owner token ids

   mapping(address => uint256[]) private _ownedTokens;

   //mapping from token ID to index of the owner token ids

   mapping(uint256 => uint256) private _ownedTokensIndex;

  function _mint(address to, uint256 tokenId) internal {
       super._mint(to, tokenId);
       //add tokens to the owner
       //add tokens to our totalsupply- to allTokens
       _addTokensToAllTokenEnumeration(tokenId);
       _addTokensToOwnerEnumeration(to, tokenId);
  }

//add tokens to the _alltokens array and set the position of the token indexes
   function _addTokensToAllTokenEnumeration(uint256 tokenId) private{
       _allTokensIndex[tokenId] = _allTokens.length;
       _allTokens.push(tokenId);

   }

   function _addTokensToOwnerEnumeration(address to, uint256 tokenId) private{
       //add address and token if to the owned tokens
       //ownedTokensIndex tokenId set to address of ownedTokens position
        //execute the function with minting
       _ownedTokensIndex[tokenId] = _ownedTokens[to].length;
       _ownedTokens[to].push(tokenId); 
   }

     function tokenByIndex(uint256 index) external view returns (uint256){
         //make sure the index is not out of bounds of the total supply
         require(index < totalSupply(), 'global index is out of bounds');
         return _allTokens[index];
     }   

    function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256){
         require(index < balanceOf(owner),'global index is out of bounds');
         return _ownedTokens[owner][index];
    }

     

   //return the total supply of the _allTokens array
   function totalSupply() public view returns(uint256){
       return _allTokens.length;
   }
}