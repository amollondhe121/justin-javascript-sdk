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
    describe('DeployDeployCollectionContractBody', function() {
      beforeEach(function() {
        instance = new VerbwireApiDocumentation.DeployDeployCollectionContractBody();
      });

      it('should create an instance of DeployDeployCollectionContractBody', function() {
        // TODO: update the code to test DeployDeployCollectionContractBody
        expect(instance).to.be.a(VerbwireApiDocumentation.DeployDeployCollectionContractBody);
      });

      it('should have the property contractName (base name: "contractName")', function() {
        // TODO: update the code to test the property contractName
        expect(instance).to.have.property('contractName');
        // expect(instance.contractName).to.be(expectedValueLiteral);
      });

      it('should have the property contractSymbol (base name: "contractSymbol")', function() {
        // TODO: update the code to test the property contractSymbol
        expect(instance).to.have.property('contractSymbol');
        // expect(instance.contractSymbol).to.be(expectedValueLiteral);
      });

      it('should have the property recipientAddress (base name: "recipientAddress")', function() {
        // TODO: update the code to test the property recipientAddress
        expect(instance).to.have.property('recipientAddress');
        // expect(instance.recipientAddress).to.be(expectedValueLiteral);
      });

      it('should have the property chain (base name: "chain")', function() {
        // TODO: update the code to test the property chain
        expect(instance).to.have.property('chain');
        // expect(instance.chain).to.be(expectedValueLiteral);
      });

      it('should have the property contractType (base name: "contractType")', function() {
        // TODO: update the code to test the property contractType
        expect(instance).to.have.property('contractType');
        // expect(instance.contractType).to.be(expectedValueLiteral);
      });

    });
  });

}));