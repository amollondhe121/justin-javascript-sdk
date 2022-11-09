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
 * The MintQuickMintFromMetadataUrlBody model module.
 * @module model/MintQuickMintFromMetadataUrlBody
 * @version 1.0.0
 */
export class MintQuickMintFromMetadataUrlBody {
  /**
   * Constructs a new <code>MintQuickMintFromMetadataUrlBody</code>.
   * @alias module:model/MintQuickMintFromMetadataUrlBody
   * @class
   * @param metadataUrl {String} 
   * @param recipientAddress {String} 
   * @param chain {module:model/MintQuickMintFromMetadataUrlBody.ChainEnum} 
   */
  constructor(metadataUrl, recipientAddress, chain) {
    this.metadataUrl = metadataUrl;
    this.recipientAddress = recipientAddress;
    this.chain = chain;
  }

  /**
   * Constructs a <code>MintQuickMintFromMetadataUrlBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MintQuickMintFromMetadataUrlBody} obj Optional instance to populate.
   * @return {module:model/MintQuickMintFromMetadataUrlBody} The populated <code>MintQuickMintFromMetadataUrlBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MintQuickMintFromMetadataUrlBody();
      if (data.hasOwnProperty('metadataUrl'))
        obj.metadataUrl = ApiClient.convertToType(data['metadataUrl'], 'String');
      if (data.hasOwnProperty('recipientAddress'))
        obj.recipientAddress = ApiClient.convertToType(data['recipientAddress'], 'String');
      if (data.hasOwnProperty('allowPlatformToOperateToken'))
        obj.allowPlatformToOperateToken = ApiClient.convertToType(data['allowPlatformToOperateToken'], 'String');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} metadataUrl
 */
MintQuickMintFromMetadataUrlBody.prototype.metadataUrl = undefined;

/**
 * @member {String} recipientAddress
 */
MintQuickMintFromMetadataUrlBody.prototype.recipientAddress = undefined;

/**
 * Allowed values for the <code>allowPlatformToOperateToken</code> property.
 * @enum {String}
 * @readonly
 */
MintQuickMintFromMetadataUrlBody.AllowPlatformToOperateTokenEnum = {
  /**
   * value: "true"
   * @const
   */
  _true: "true",

  /**
   * value: "false"
   * @const
   */
  _false: "false"
};
/**
 * @member {module:model/MintQuickMintFromMetadataUrlBody.AllowPlatformToOperateTokenEnum} allowPlatformToOperateToken
 */
MintQuickMintFromMetadataUrlBody.prototype.allowPlatformToOperateToken = undefined;

/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
MintQuickMintFromMetadataUrlBody.ChainEnum = {
  /**
   * value: "rinkeby"
   * @const
   */
  rinkeby: "rinkeby",

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
   * value: "mumbai"
   * @const
   */
  mumbai: "mumbai",

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
 * @member {module:model/MintQuickMintFromMetadataUrlBody.ChainEnum} chain
 */
MintQuickMintFromMetadataUrlBody.prototype.chain = undefined;
