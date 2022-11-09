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
import {Error} from '../model/Error';
import {InlineResponse200} from '../model/InlineResponse200';
import {InlineResponse2001} from '../model/InlineResponse2001';
import {InlineResponse2002} from '../model/InlineResponse2002';

/**
* Data service.
* @module api/DataApi
* @version 1.0.0
*/
export class DataApi {

    /**
    * Constructs a new DataApi. 
    * @alias module:api/DataApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the nftDataCreatedPost operation.
     * @callback moduleapi/DataApi~nftDataCreatedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all NFTs created by a wallet address
     * Returns a list of all NFTs created by a particular wallet address
     * @param {String} walletAddress 
     * @param {module:model/String} chain 
     * @param {module:api/DataApi~nftDataCreatedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDataCreatedPost(walletAddress, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'walletAddress' is set
      if (walletAddress === undefined || walletAddress === null) {
        throw new Error("Missing the required parameter 'walletAddress' when calling nftDataCreatedPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDataCreatedPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'walletAddress': walletAddress,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/nft/data/created', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftDataNftDetailsPost operation.
     * @callback moduleapi/DataApi~nftDataNftDetailsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details for an NFT
     * Returns all details for an NFT
     * @param {String} contractAddress 
     * @param {String} tokenId 
     * @param {module:model/String} chain 
     * @param {module:api/DataApi~nftDataNftDetailsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDataNftDetailsPost(contractAddress, tokenId, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'contractAddress' is set
      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling nftDataNftDetailsPost");
      }
      // verify the required parameter 'tokenId' is set
      if (tokenId === undefined || tokenId === null) {
        throw new Error("Missing the required parameter 'tokenId' when calling nftDataNftDetailsPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDataNftDetailsPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'contractAddress': contractAddress,'tokenId': tokenId,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/nft/data/nftDetails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftDataOwnedPost operation.
     * @callback moduleapi/DataApi~nftDataOwnedPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all NFTs owned by a wallet address
     * Returns a list of all NFTs held within a particular wallet address
     * @param {String} walletAddress 
     * @param {module:model/String} chain 
     * @param {module:api/DataApi~nftDataOwnedPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDataOwnedPost(walletAddress, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'walletAddress' is set
      if (walletAddress === undefined || walletAddress === null) {
        throw new Error("Missing the required parameter 'walletAddress' when calling nftDataOwnedPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDataOwnedPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'walletAddress': walletAddress,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/nft/data/owned', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftDataTransactionsByContractPost operation.
     * @callback moduleapi/DataApi~nftDataTransactionsByContractPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all NFTs Contract transactions by a wallet address
     * Produce a list of all NFTs transactions for a specific NFT contract within a particular wallet address
     * @param {String} walletAddress 
     * @param {String} contractAddress 
     * @param {module:model/String} chain 
     * @param {module:api/DataApi~nftDataTransactionsByContractPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDataTransactionsByContractPost(walletAddress, contractAddress, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'walletAddress' is set
      if (walletAddress === undefined || walletAddress === null) {
        throw new Error("Missing the required parameter 'walletAddress' when calling nftDataTransactionsByContractPost");
      }
      // verify the required parameter 'contractAddress' is set
      if (contractAddress === undefined || contractAddress === null) {
        throw new Error("Missing the required parameter 'contractAddress' when calling nftDataTransactionsByContractPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDataTransactionsByContractPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'walletAddress': walletAddress,'contractAddress': contractAddress,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/nft/data/transactionsByContract', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the nftDataTransactionsPost operation.
     * @callback moduleapi/DataApi~nftDataTransactionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all transactions by a wallet address
     * Returns a list of all transactions by a particular wallet address
     * @param {String} walletAddress 
     * @param {module:model/String} chain 
     * @param {module:api/DataApi~nftDataTransactionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    nftDataTransactionsPost(walletAddress, chain, callback) {
      
      let postBody = null;
      // verify the required parameter 'walletAddress' is set
      if (walletAddress === undefined || walletAddress === null) {
        throw new Error("Missing the required parameter 'walletAddress' when calling nftDataTransactionsPost");
      }
      // verify the required parameter 'chain' is set
      if (chain === undefined || chain === null) {
        throw new Error("Missing the required parameter 'chain' when calling nftDataTransactionsPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'walletAddress': walletAddress,'chain': chain
      };

      let authNames = ['APIKey'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/nft/data/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}