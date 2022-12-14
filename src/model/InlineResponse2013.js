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
 * The InlineResponse2013 model module.
 * @module model/InlineResponse2013
 * @version 1.0.0
 */
export class InlineResponse2013 {
  /**
   * Constructs a new <code>InlineResponse2013</code>.
   * @alias module:model/InlineResponse2013
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2013} obj Optional instance to populate.
   * @return {module:model/InlineResponse2013} The populated <code>InlineResponse2013</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2013();
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
InlineResponse2013.prototype.name = undefined;

/**
 * @member {String} description
 */
InlineResponse2013.prototype.description = undefined;

/**
 * @member {String} metadataUrl
 */
InlineResponse2013.prototype.metadataUrl = undefined;

