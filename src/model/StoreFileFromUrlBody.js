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
 * The StoreFileFromUrlBody model module.
 * @module model/StoreFileFromUrlBody
 * @version 1.0.0
 */
export class StoreFileFromUrlBody {
  /**
   * Constructs a new <code>StoreFileFromUrlBody</code>.
   * @alias module:model/StoreFileFromUrlBody
   * @class
   * @param fileUrl {String} 
   */
  constructor(fileUrl) {
    this.fileUrl = fileUrl;
  }

  /**
   * Constructs a <code>StoreFileFromUrlBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StoreFileFromUrlBody} obj Optional instance to populate.
   * @return {module:model/StoreFileFromUrlBody} The populated <code>StoreFileFromUrlBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StoreFileFromUrlBody();
      if (data.hasOwnProperty('fileUrl'))
        obj.fileUrl = ApiClient.convertToType(data['fileUrl'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} fileUrl
 */
StoreFileFromUrlBody.prototype.fileUrl = undefined;

