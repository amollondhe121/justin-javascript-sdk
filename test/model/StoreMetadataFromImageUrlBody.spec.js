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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VerbwireApiDocumentation);
  }
}(this, function(expect, VerbwireApiDocumentation) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('StoreMetadataFromImageUrlBody', function() {
      beforeEach(function() {
        instance = new VerbwireApiDocumentation.StoreMetadataFromImageUrlBody();
      });

      it('should create an instance of StoreMetadataFromImageUrlBody', function() {
        // TODO: update the code to test StoreMetadataFromImageUrlBody
        expect(instance).to.be.a(VerbwireApiDocumentation.StoreMetadataFromImageUrlBody);
      });

      it('should have the property fileUrl (base name: "fileUrl")', function() {
        // TODO: update the code to test the property fileUrl
        expect(instance).to.have.property('fileUrl');
        // expect(instance.fileUrl).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

    });
  });

}));
