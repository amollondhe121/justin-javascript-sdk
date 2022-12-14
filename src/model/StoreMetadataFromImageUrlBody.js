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
 * The StoreMetadataFromImageUrlBody model module.
 * @module model/StoreMetadataFromImageUrlBody
 * @version 1.0.0
 */
export class StoreMetadataFromImageUrlBody {
  /**
   * Constructs a new <code>StoreMetadataFromImageUrlBody</code>.
   * @alias module:model/StoreMetadataFromImageUrlBody
   * @class
   * @param fileUrl {String} 
   * @param name {String} 
   * @param description {String} 
   */
  constructor(fileUrl, name, description) {
    this.fileUrl = fileUrl;
    this.name = name;
    this.description = description;
  }

  /**
   * Constructs a <code>StoreMetadataFromImageUrlBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreMetadataFromImageUrlBody} obj Optional instance to populate.
   * @return {module:model/StoreMetadataFromImageUrlBody} The populated <code>StoreMetadataFromImageUrlBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoreMetadataFromImageUrlBody();
      if (data.hasOwnProperty('fileUrl'))
        obj.fileUrl = ApiClient.convertToType(data['fileUrl'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} fileUrl
 */
StoreMetadataFromImageUrlBody.prototype.fileUrl = undefined;

/**
 * @member {String} name
 */
StoreMetadataFromImageUrlBody.prototype.name = undefined;

/**
 * @member {String} description
 */
StoreMetadataFromImageUrlBody.prototype.description = undefined;

