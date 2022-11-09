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
 * The MintCollectionReserveMintBody model module.
 * @module model/MintCollectionReserveMintBody
 * @version 1.0.0
 */
export class MintCollectionReserveMintBody {
  /**
   * Constructs a new <code>MintCollectionReserveMintBody</code>.
   * @alias module:model/MintCollectionReserveMintBody
   * @class
   * @param mintQty {String} 
   * @param contractAddress {String} 
   * @param recipientAddress {String} 
   * @param chain {module:model/MintCollectionReserveMintBody.ChainEnum} 
   */
  constructor(mintQty, contractAddress, recipientAddress, chain) {
    this.mintQty = mintQty;
    this.contractAddress = contractAddress;
    this.recipientAddress = recipientAddress;
    this.chain = chain;
  }

  /**
   * Constructs a <code>MintCollectionReserveMintBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MintCollectionReserveMintBody} obj Optional instance to populate.
   * @return {module:model/MintCollectionReserveMintBody} The populated <code>MintCollectionReserveMintBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MintCollectionReserveMintBody();
      if (data.hasOwnProperty('mintQty'))
        obj.mintQty = ApiClient.convertToType(data['mintQty'], 'String');
      if (data.hasOwnProperty('contractAddress'))
        obj.contractAddress = ApiClient.convertToType(data['contractAddress'], 'String');
      if (data.hasOwnProperty('recipientAddress'))
        obj.recipientAddress = ApiClient.convertToType(data['recipientAddress'], 'String');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} mintQty
 */
MintCollectionReserveMintBody.prototype.mintQty = undefined;

/**
 * @member {String} contractAddress
 */
MintCollectionReserveMintBody.prototype.contractAddress = undefined;

/**
 * @member {String} recipientAddress
 */
MintCollectionReserveMintBody.prototype.recipientAddress = undefined;

/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
MintCollectionReserveMintBody.ChainEnum = {
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
 * @member {module:model/MintCollectionReserveMintBody.ChainEnum} chain
 */
MintCollectionReserveMintBody.prototype.chain = undefined;
