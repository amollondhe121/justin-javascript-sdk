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
 * The UserOpsAllowListSharesForAddressBody model module.
 * @module model/UserOpsAllowListSharesForAddressBody
 * @version 1.0.0
 */
export class UserOpsAllowListSharesForAddressBody {
  /**
   * Constructs a new <code>UserOpsAllowListSharesForAddressBody</code>.
   * @alias module:model/UserOpsAllowListSharesForAddressBody
   * @class
   * @param contractAddress {String} 
   * @param allowListAddress {String} 
   * @param chain {module:model/UserOpsAllowListSharesForAddressBody.ChainEnum} 
   */
  constructor(contractAddress, allowListAddress, chain) {
    this.contractAddress = contractAddress;
    this.allowListAddress = allowListAddress;
    this.chain = chain;
  }

  /**
   * Constructs a <code>UserOpsAllowListSharesForAddressBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserOpsAllowListSharesForAddressBody} obj Optional instance to populate.
   * @return {module:model/UserOpsAllowListSharesForAddressBody} The populated <code>UserOpsAllowListSharesForAddressBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserOpsAllowListSharesForAddressBody();
      if (data.hasOwnProperty('contractAddress'))
        obj.contractAddress = ApiClient.convertToType(data['contractAddress'], 'String');
      if (data.hasOwnProperty('allowListAddress'))
        obj.allowListAddress = ApiClient.convertToType(data['allowListAddress'], 'String');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} contractAddress
 */
UserOpsAllowListSharesForAddressBody.prototype.contractAddress = undefined;

/**
 * @member {String} allowListAddress
 */
UserOpsAllowListSharesForAddressBody.prototype.allowListAddress = undefined;

/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
UserOpsAllowListSharesForAddressBody.ChainEnum = {
  /**
   * value: "rinkeby"
   * @const
   */
  rinkeby: "rinkeby",

  /**
   * value: "goerli"
   * @const
   */
  goerli: "goerli",

  /**
   * value: "bsc-testnet"
   * @const
   */
  bscTestnet: "bsc-testnet",

  /**
   * value: "fuji"
   * @const
   */
  fuji: "fuji",

  /**
   * value: "arbitrum-rinkeby"
   * @const
   */
  arbitrumRinkeby: "arbitrum-rinkeby",

  /**
   * value: "fantom-testnet"
   * @const
   */
  fantomTestnet: "fantom-testnet",

  /**
   * value: "ethereum"
   * @const
   */
  ethereum: "ethereum",

  /**
   * value: "bsc"
   * @const
   */
  bsc: "bsc",

  /**
   * value: "avalanche"
   * @const
   */
  avalanche: "avalanche",

  /**
   * value: "polygon"
   * @const
   */
  polygon: "polygon",

  /**
   * value: "arbitrum"
   * @const
   */
  arbitrum: "arbitrum",

  /**
   * value: "optimism"
   * @const
   */
  optimism: "optimism",

  /**
   * value: "fantom"
   * @const
   */
  fantom: "fantom"
};
/**
 * @member {module:model/UserOpsAllowListSharesForAddressBody.ChainEnum} chain
 */
UserOpsAllowListSharesForAddressBody.prototype.chain = undefined;

