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
    describe('UserOpsTransactionDetailsBody', function() {
      beforeEach(function() {
        instance = new VerbwireApiDocumentation.UserOpsTransactionDetailsBody();
      });

      it('should create an instance of UserOpsTransactionDetailsBody', function() {
        // TODO: update the code to test UserOpsTransactionDetailsBody
        expect(instance).to.be.a(VerbwireApiDocumentation.UserOpsTransactionDetailsBody);
      });

      it('should have the property transactionId (base name: "transactionId")', function() {
        // TODO: update the code to test the property transactionId
        expect(instance).to.have.property('transactionId');
        // expect(instance.transactionId).to.be(expectedValueLiteral);
      });

    });
  });

}));
