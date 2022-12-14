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
    describe('Transaction', function() {
      beforeEach(function() {
        instance = new VerbwireApiDocumentation.Transaction();
      });

      it('should create an instance of Transaction', function() {
        // TODO: update the code to test Transaction
        expect(instance).to.be.a(VerbwireApiDocumentation.Transaction);
      });

      it('should have the property blockNumber (base name: "blockNumber")', function() {
        // TODO: update the code to test the property blockNumber
        expect(instance).to.have.property('blockNumber');
        // expect(instance.blockNumber).to.be(expectedValueLiteral);
      });

      it('should have the property timeStamp (base name: "timeStamp")', function() {
        // TODO: update the code to test the property timeStamp
        expect(instance).to.have.property('timeStamp');
        // expect(instance.timeStamp).to.be(expectedValueLiteral);
      });

      it('should have the property hash (base name: "hash")', function() {
        // TODO: update the code to test the property hash
        expect(instance).to.have.property('hash');
        // expect(instance.hash).to.be(expectedValueLiteral);
      });

      it('should have the property nonce (base name: "nonce")', function() {
        // TODO: update the code to test the property nonce
        expect(instance).to.have.property('nonce');
        // expect(instance.nonce).to.be(expectedValueLiteral);
      });

      it('should have the property blockHash (base name: "blockHash")', function() {
        // TODO: update the code to test the property blockHash
        expect(instance).to.have.property('blockHash');
        // expect(instance.blockHash).to.be(expectedValueLiteral);
      });

      it('should have the property from (base name: "from")', function() {
        // TODO: update the code to test the property from
        expect(instance).to.have.property('from');
        // expect(instance.from).to.be(expectedValueLiteral);
      });

      it('should have the property contractAddress (base name: "contractAddress")', function() {
        // TODO: update the code to test the property contractAddress
        expect(instance).to.have.property('contractAddress');
        // expect(instance.contractAddress).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property tokenID (base name: "tokenID")', function() {
        // TODO: update the code to test the property tokenID
        expect(instance).to.have.property('tokenID');
        // expect(instance.tokenID).to.be(expectedValueLiteral);
      });

      it('should have the property tokenName (base name: "tokenName")', function() {
        // TODO: update the code to test the property tokenName
        expect(instance).to.have.property('tokenName');
        // expect(instance.tokenName).to.be(expectedValueLiteral);
      });

      it('should have the property tokenSymbol (base name: "tokenSymbol")', function() {
        // TODO: update the code to test the property tokenSymbol
        expect(instance).to.have.property('tokenSymbol');
        // expect(instance.tokenSymbol).to.be(expectedValueLiteral);
      });

      it('should have the property tokenDecimal (base name: "tokenDecimal")', function() {
        // TODO: update the code to test the property tokenDecimal
        expect(instance).to.have.property('tokenDecimal');
        // expect(instance.tokenDecimal).to.be(expectedValueLiteral);
      });

      it('should have the property transactionIndex (base name: "transactionIndex")', function() {
        // TODO: update the code to test the property transactionIndex
        expect(instance).to.have.property('transactionIndex');
        // expect(instance.transactionIndex).to.be(expectedValueLiteral);
      });

      it('should have the property gas (base name: "gas")', function() {
        // TODO: update the code to test the property gas
        expect(instance).to.have.property('gas');
        // expect(instance.gas).to.be(expectedValueLiteral);
      });

      it('should have the property gasPrice (base name: "gasPrice")', function() {
        // TODO: update the code to test the property gasPrice
        expect(instance).to.have.property('gasPrice');
        // expect(instance.gasPrice).to.be(expectedValueLiteral);
      });

      it('should have the property gasUsed (base name: "gasUsed")', function() {
        // TODO: update the code to test the property gasUsed
        expect(instance).to.have.property('gasUsed');
        // expect(instance.gasUsed).to.be(expectedValueLiteral);
      });

      it('should have the property cumulativeGasUsed (base name: "cumulativeGasUsed")', function() {
        // TODO: update the code to test the property cumulativeGasUsed
        expect(instance).to.have.property('cumulativeGasUsed');
        // expect(instance.cumulativeGasUsed).to.be(expectedValueLiteral);
      });

      it('should have the property input (base name: "input")', function() {
        // TODO: update the code to test the property input
        expect(instance).to.have.property('input');
        // expect(instance.input).to.be(expectedValueLiteral);
      });

      it('should have the property confirmations (base name: "confirmations")', function() {
        // TODO: update the code to test the property confirmations
        expect(instance).to.have.property('confirmations');
        // expect(instance.confirmations).to.be(expectedValueLiteral);
      });

    });
  });

}));
