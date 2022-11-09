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
import {ApiClient} from '../ApiClient';

/**
 * The DataTransactionsByContractBody model module.
 * @module model/DataTransactionsByContractBody
 * @version 1.0.0
 */
export class DataTransactionsByContractBody {
  /**
   * Constructs a new <code>DataTransactionsByContractBody</code>.
   * @alias module:model/DataTransactionsByContractBody
   * @class
   * @param walletAddress {String} 
   * @param contractAddress {String} 
   * @param chain {module:model/DataTransactionsByContractBody.ChainEnum} 
   */
  constructor(walletAddress, contractAddress, chain) {
    this.walletAddress = walletAddress;
    this.contractAddress = contractAddress;
    this.chain = chain;
  }

  /**
   * Constructs a <code>DataTransactionsByContractBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataTransactionsByContractBody} obj Optional instance to populate.
   * @return {module:model/DataTransactionsByContractBody} The populated <code>DataTransactionsByContractBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataTransactionsByContractBody();
      if (data.hasOwnProperty('walletAddress'))
        obj.walletAddress = ApiClient.convertToType(data['walletAddress'], 'String');
      if (data.hasOwnProperty('contractAddress'))
        obj.contractAddress = ApiClient.convertToType(data['contractAddress'], 'String');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} walletAddress
 */
DataTransactionsByContractBody.prototype.walletAddress = undefined;

/**
 * @member {String} contractAddress
 */
DataTransactionsByContractBody.prototype.contractAddress = undefined;

/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
DataTransactionsByContractBody.ChainEnum = {
  /**
   * value: "rinkeby"
   * @const
   */
  rinkeby: "rinkeby",

  /**
   * value: "ethereum"
   * @const
   */
  ethereum: "ethereum"
};
/**
 * @member {module:model/DataTransactionsByContractBody.ChainEnum} chain
 */
DataTransactionsByContractBody.prototype.chain = undefined;

