/*
 * Verbwire API documentation
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {InlineResponse201} from '../model/InlineResponse201';
import {InlineResponse2011} from '../model/InlineResponse2011';
import {InlineResponse2013} from '../model/InlineResponse2013';
import {InlineResponse400} from '../model/InlineResponse400';

/**
* Deploy service.
* @module api/DeployApi
* @version 1.0.0
*/
export class DeployApi {

    /**
    * Constructs a new DeployApi. 
    * @alias module:api/DeployApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the nftDeployDeployCollectionContractPost operation.
     * @callback moduleapi/DeployApi~nftDeployDeployCollectionContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse201{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy a Collection Contract
     * Deploy a collection contract in seconds. You can deploy any of the provided three types of contracts (i) A standard ERC721 collection contract (ii) An ERC721A collection contract (iii) An Omnichain ERC721 contract. Note, an Omni chain contract gives you the the ability to send your NFTs across different blockchains
     * @param {String} contractName 
     * @param {String} contractSymbol 
     * @param {String} recipientAddress 
     * @param {module:model/String} chain 
     * @param {module:model/String} contractType 
     * @param {module:api/DeployApi~nftDeployDeployCollectionContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDeployDeployCollectionContractPost(contractName, contractSymbol, recipientAddress, chain, contractType, callback) {
      
      let postBody = null;
      // verify the required parameter 'contractName' is set
      if (contractName === undefined || contractName === null) {
        throw new Error("Missing the required parameter 'contractName' when calling nftDeployDeployCollectionContractPost");
      }
      // verify the required parameter 'contractSymbol' is set
      if (contractSymbol === undefined || contractSymbol === null) {
        throw new Error("Missing the required parameter 'contractSymbol' when calling nftDeployDeployCollectionContractPost");
      }
      // verify the required parameter 'recipientAddress' is set
      if (recipientAddress === undefined || recipientAddress === null) {
        throw new Error("Missing the required parameter 'recipientAddress' when calling nftDeployDeployCollectionContractPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDeployDeployCollectionContractPost");
      }
      // verify the required parameter 'contractType' is set
      if (contractType === undefined || contractType === null) {
        throw new Error("Missing the required parameter 'contractType' when calling nftDeployDeployCollectionContractPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'contractName': contractName,'contractSymbol': contractSymbol,'recipientAddress': recipientAddress,'chain': chain,'contractType': contractType
      };

      let authNames = ['APIKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/nft/deploy/deployCollectionContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftDeployDeployCustomContractPost operation.
     * @callback moduleapi/DeployApi~nftDeployDeployCustomContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2011{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy a Custom Contract
     * Deploy a custom omnichain contract in seconds. A custom contract is different from a collection contract. Use a custom contract for providing NFT functionality in your applications.
     * @param {String} contractName 
     * @param {String} contractSymbol 
     * @param {String} recipientAddress 
     * @param {module:model/String} chain 
     * @param {module:api/DeployApi~nftDeployDeployCustomContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDeployDeployCustomContractPost(contractName, contractSymbol, recipientAddress, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'contractName' is set
      if (contractName === undefined || contractName === null) {
        throw new Error("Missing the required parameter 'contractName' when calling nftDeployDeployCustomContractPost");
      }
      // verify the required parameter 'contractSymbol' is set
      if (contractSymbol === undefined || contractSymbol === null) {
        throw new Error("Missing the required parameter 'contractSymbol' when calling nftDeployDeployCustomContractPost");
      }
      // verify the required parameter 'recipientAddress' is set
      if (recipientAddress === undefined || recipientAddress === null) {
        throw new Error("Missing the required parameter 'recipientAddress' when calling nftDeployDeployCustomContractPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDeployDeployCustomContractPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'contractName': contractName,'contractSymbol': contractSymbol,'recipientAddress': recipientAddress,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2011;

      return this.apiClient.callApi(
        '/nft/deploy/deployCustomContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftUpdateInitCollectionContractPost operation.
     * @callback moduleapi/DeployApi~nftUpdateInitCollectionContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2013{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initialize your collection contract
     * Set the parameters of your deployed collection contract
     * @param {String} contractAddress 
     * @param {String} maxMintPerAddress 
     * @param {String} totalReserveQty 
     * @param {String} totalAllowlistQty 
     * @param {String} maxSupply 
     * @param {String} maxMintableBatchSize 
     * @param {String} royaltiesInBps 
     * @param {String} royaltiesAddress 
     * @param {String} ownerAddress 
     * @param {String} tokenURIPrereveal 
     * @param {String} baseTokenURI 
     * @param {String} allowListMintStartTime 
     * @param {String} publicSaleStartTime 
     * @param {String} allowlistMintPriceInWei 
     * @param {String} publicPriceInWei 
     * @param {module:model/String} metadataFrozen 
     * @param {String} recipientAddress 
     * @param {module:model/String} chain 
     * @param {module:api/DeployApi~nftUpdateInitCollectionContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftUpdateInitCollectionContractPost(contractAddress, maxMintPerAddress, totalReserveQty, totalAllowlistQty, maxSupply, maxMintableBatchSize, royaltiesInBps, royaltiesAddress, ownerAddress, tokenURIPrereveal, baseTokenURI, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, recipientAddress, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'contractAddress' is set
      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'maxMintPerAddress' is set
      if (maxMintPerAddress === undefined || maxMintPerAddress === null) {
        throw new Error("Missing the required parameter 'maxMintPerAddress' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'totalReserveQty' is set
      if (totalReserveQty === undefined || totalReserveQty === null) {
        throw new Error("Missing the required parameter 'totalReserveQty' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'totalAllowlistQty' is set
      if (totalAllowlistQty === undefined || totalAllowlistQty === null) {
        throw new Error("Missing the required parameter 'totalAllowlistQty' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'maxSupply' is set
      if (maxSupply === undefined || maxSupply === null) {
        throw new Error("Missing the required parameter 'maxSupply' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'maxMintableBatchSize' is set
      if (maxMintableBatchSize === undefined || maxMintableBatchSize === null) {
        throw new Error("Missing the required parameter 'maxMintableBatchSize' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'royaltiesInBps' is set
      if (royaltiesInBps === undefined || royaltiesInBps === null) {
        throw new Error("Missing the required parameter 'royaltiesInBps' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'royaltiesAddress' is set
      if (royaltiesAddress === undefined || royaltiesAddress === null) {
        throw new Error("Missing the required parameter 'royaltiesAddress' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'ownerAddress' is set
      if (ownerAddress === undefined || ownerAddress === null) {
        throw new Error("Missing the required parameter 'ownerAddress' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'tokenURIPrereveal' is set
      if (tokenURIPrereveal === undefined || tokenURIPrereveal === null) {
        throw new Error("Missing the required parameter 'tokenURIPrereveal' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'baseTokenURI' is set
      if (baseTokenURI === undefined || baseTokenURI === null) {
        throw new Error("Missing the required parameter 'baseTokenURI' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'allowListMintStartTime' is set
      if (allowListMintStartTime === undefined || allowListMintStartTime === null) {
        throw new Error("Missing the required parameter 'allowListMintStartTime' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'publicSaleStartTime' is set
      if (publicSaleStartTime === undefined || publicSaleStartTime === null) {
        throw new Error("Missing the required parameter 'publicSaleStartTime' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'allowlistMintPriceInWei' is set
      if (allowlistMintPriceInWei === undefined || allowlistMintPriceInWei === null) {
        throw new Error("Missing the required parameter 'allowlistMintPriceInWei' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'publicPriceInWei' is set
      if (publicPriceInWei === undefined || publicPriceInWei === null) {
        throw new Error("Missing the required parameter 'publicPriceInWei' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'metadataFrozen' is set
      if (metadataFrozen === undefined || metadataFrozen === null) {
        throw new Error("Missing the required parameter 'metadataFrozen' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'recipientAddress' is set
      if (recipientAddress === undefined || recipientAddress === null) {
        throw new Error("Missing the required parameter 'recipientAddress' when calling nftUpdateInitCollectionContractPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftUpdateInitCollectionContractPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'contractAddress': contractAddress,'maxMintPerAddress': maxMintPerAddress,'totalReserveQty': totalReserveQty,'totalAllowlistQty': totalAllowlistQty,'maxSupply': maxSupply,'maxMintableBatchSize': maxMintableBatchSize,'royaltiesInBps': royaltiesInBps,'royaltiesAddress': royaltiesAddress,'ownerAddress': ownerAddress,'tokenURIPrereveal': tokenURIPrereveal,'baseTokenURI': baseTokenURI,'allowListMintStartTime': allowListMintStartTime,'publicSaleStartTime': publicSaleStartTime,'allowlistMintPriceInWei': allowlistMintPriceInWei,'publicPriceInWei': publicPriceInWei,'metadataFrozen': metadataFrozen,'recipientAddress': recipientAddress,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2013;

      return this.apiClient.callApi(
        '/nft/update/initCollectionContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}