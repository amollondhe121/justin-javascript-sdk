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
 * The DataNftDetailsBody model module.
 * @module model/DataNftDetailsBody
 * @version 1.0.0
 */
export class DataNftDetailsBody {
  /**
   * Constructs a new <code>DataNftDetailsBody</code>.
   * @alias module:model/DataNftDetailsBody
   * @class
   * @param contractAddress {String} 
   * @param tokenId {String} 
   * @param chain {module:model/DataNftDetailsBody.ChainEnum} 
   */
  constructor(contractAddress, tokenId, chain) {
    this.contractAddress = contractAddress;
    this.tokenId = tokenId;
    this.chain = chain;
  }

  /**
   * Constructs a <code>DataNftDetailsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataNftDetailsBody} obj Optional instance to populate.
   * @return {module:model/DataNftDetailsBody} The populated <code>DataNftDetailsBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DataNftDetailsBody();
      if (data.hasOwnProperty('contractAddress'))
        obj.contractAddress = ApiClient.convertToType(data['contractAddress'], 'String');
      if (data.hasOwnProperty('tokenId'))
        obj.tokenId = ApiClient.convertToType(data['tokenId'], 'String');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} contractAddress
 */
DataNftDetailsBody.prototype.contractAddress = undefined;

/**
 * @member {String} tokenId
 */
DataNftDetailsBody.prototype.tokenId = undefined;

/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
DataNftDetailsBody.ChainEnum = {
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
 * @member {module:model/DataNftDetailsBody.ChainEnum} chain
 */
DataNftDetailsBody.prototype.chain = undefined;

