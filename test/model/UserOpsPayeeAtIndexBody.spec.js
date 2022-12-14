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
    describe('UserOpsPayeeAtIndexBody', function() {
      beforeEach(function() {
        instance = new VerbwireApiDocumentation.UserOpsPayeeAtIndexBody();
      });

      it('should create an instance of UserOpsPayeeAtIndexBody', function() {
        // TODO: update the code to test UserOpsPayeeAtIndexBody
        expect(instance).to.be.a(VerbwireApiDocumentation.UserOpsPayeeAtIndexBody);
      });

      it('should have the property contractAddress (base name: "contractAddress")', function() {
        // TODO: update the code to test the property contractAddress
        expect(instance).to.have.property('contractAddress');
        // expect(instance.contractAddress).to.be(expectedValueLiteral);
      });

      it('should have the property index (base name: "index")', function() {
        // TODO: update the code to test the property index
        expect(instance).to.have.property('index');
        // expect(instance.index).to.be(expectedValueLiteral);
      });

      it('should have the property chain (base name: "chain")', function() {
        // TODO: update the code to test the property chain
        expect(instance).to.have.property('chain');
        // expect(instance.chain).to.be(expectedValueLiteral);
      });

    });
  });

}));
