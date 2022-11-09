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
    describe('DataOwnedBody', function() {
      beforeEach(function() {
        instance = new VerbwireApiDocumentation.DataOwnedBody();
      });

      it('should create an instance of DataOwnedBody', function() {
        // TODO: update the code to test DataOwnedBody
        expect(instance).to.be.a(VerbwireApiDocumentation.DataOwnedBody);
      });

      it('should have the property walletAddress (base name: "walletAddress")', function() {
        // TODO: update the code to test the property walletAddress
        expect(instance).to.have.property('walletAddress');
        // expect(instance.walletAddress).to.be(expectedValueLiteral);
      });

      it('should have the property chain (base name: "chain")', function() {
        // TODO: update the code to test the property chain
        expect(instance).to.have.property('chain');
        // expect(instance.chain).to.be(expectedValueLiteral);
      });

    });
  });

}));
