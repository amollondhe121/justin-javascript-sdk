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
 * The DeployDeployCustomContractBody model module.
 * @module model/DeployDeployCustomContractBody
 * @version 1.0.0
 */
export class DeployDeployCustomContractBody {
  /**
   * Constructs a new <code>DeployDeployCustomContractBody</code>.
   * @alias module:model/DeployDeployCustomContractBody
   * @class
   * @param contractName {String} 
   * @param contractSymbol {String} 
   * @param recipientAddress {String} 
   * @param chain {module:model/DeployDeployCustomContractBody.ChainEnum} 
   */
  constructor(contractName, contractSymbol, recipientAddress, chain) {
    this.contractName = contractName;
    this.contractSymbol = contractSymbol;
    this.recipientAddress = recipientAddress;
    this.chain = chain;
  }

  /**
   * Constructs a <code>DeployDeployCustomContractBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeployDeployCustomContractBody} obj Optional instance to populate.
   * @return {module:model/DeployDeployCustomContractBody} The populated <code>DeployDeployCustomContractBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeployDeployCustomContractBody();
      if (data.hasOwnProperty('contractName'))
        obj.contractName = ApiClient.convertToType(data['contractName'], 'String');
      if (data.hasOwnProperty('contractSymbol'))
        obj.contractSymbol = ApiClient.convertToType(data['contractSymbol'], 'String');
      if (data.hasOwnProperty('recipientAddress'))
        obj.recipientAddress = ApiClient.convertToType(data['recipientAddress'], 'String');
      if (data.hasOwnProperty('chain'))
        obj.chain = ApiClient.convertToType(data['chain'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} contractName
 */
DeployDeployCustomContractBody.prototype.contractName = undefined;

/**
 * @member {String} contractSymbol
 */
DeployDeployCustomContractBody.prototype.contractSymbol = undefined;

/**
 * @member {String} recipientAddress
 */
DeployDeployCustomContractBody.prototype.recipientAddress = undefined;

/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
DeployDeployCustomContractBody.ChainEnum = {
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
 * @member {module:model/DeployDeployCustomContractBody.ChainEnum} chain
 */
DeployDeployCustomContractBody.prototype.chain = undefined;

