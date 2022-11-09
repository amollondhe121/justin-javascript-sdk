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
 * The InlineResponse2019 model module.
 * @module model/InlineResponse2019
 * @version 1.0.0
 */
export class InlineResponse2019 {
  /**
   * Constructs a new <code>InlineResponse2019</code>.
   * @alias module:model/InlineResponse2019
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2019} obj Optional instance to populate.
   * @return {module:model/InlineResponse2019} The populated <code>InlineResponse2019</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2019();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('metadata_url'))
        obj.metadataUrl = ApiClient.convertToType(data['metadata_url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
InlineResponse2019.prototype.name = undefined;

/**
 * @member {String} description
 */
InlineResponse2019.prototype.description = undefined;

/**
 * @member {String} metadataUrl
 */
InlineResponse2019.prototype.metadataUrl = undefined;

