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

  beforeEach(function() {
    instance = new VerbwireApiDocumentation.DataApi();
  });

  describe('(package)', function() {
    describe('DataApi', function() {
      describe('nftDataCreatedPost', function() {
        it('should call nftDataCreatedPost successfully', function(done) {
          // TODO: uncomment, update parameter values for nftDataCreatedPost call and complete the assertions
          /*

          instance.nftDataCreatedPost(walletAddress, chain, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(VerbwireApiDocumentation.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('nftDataNftDetailsPost', function() {
        it('should call nftDataNftDetailsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for nftDataNftDetailsPost call and complete the assertions
          /*

          instance.nftDataNftDetailsPost(contractAddress, tokenId, chain, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(VerbwireApiDocumentation.InlineResponse2002);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('nftDataOwnedPost', function() {
        it('should call nftDataOwnedPost successfully', function(done) {
          // TODO: uncomment, update parameter values for nftDataOwnedPost call and complete the assertions
          /*

          instance.nftDataOwnedPost(walletAddress, chain, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(VerbwireApiDocumentation.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('nftDataTransactionsByContractPost', function() {
        it('should call nftDataTransactionsByContractPost successfully', function(done) {
          // TODO: uncomment, update parameter values for nftDataTransactionsByContractPost call and complete the assertions
          /*

          instance.nftDataTransactionsByContractPost(walletAddress, contractAddress, chain, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(VerbwireApiDocumentation.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('nftDataTransactionsPost', function() {
        it('should call nftDataTransactionsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for nftDataTransactionsPost call and complete the assertions
          /*

          instance.nftDataTransactionsPost(walletAddress, chain, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(VerbwireApiDocumentation.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
