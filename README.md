# verbwire_api_documentation

VerbwireApiDocumentation - JavaScript client for verbwire_api_documentation
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install verbwire_api_documentation --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var VerbwireApiDocumentation = require('verbwire_api_documentation');
var defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
var APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix['X-API-Key'] = "Token"

var api = new VerbwireApiDocumentation.BurnApi()
var contractAddress = "contractAddress_example"; // {String} 
var tokenId = "tokenId_example"; // {String} 
var chain = "chain_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.nftDeployBurnPost(contractAddress, tokenId, chain, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://api.verbwire.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VerbwireApiDocumentation.BurnApi* | [**nftDeployBurnPost**](docs/BurnApi.md#nftDeployBurnPost) | **POST** /nft/deploy/burn | Burn NFT
*VerbwireApiDocumentation.CrossChainSendApi* | [**nftSendQuickSendPost**](docs/CrossChainSendApi.md#nftSendQuickSendPost) | **POST** /nft/send/quickSend | Send Quick-minted NFT across Chains
*VerbwireApiDocumentation.DataApi* | [**nftDataCreatedPost**](docs/DataApi.md#nftDataCreatedPost) | **POST** /nft/data/created | Get all NFTs created by a wallet address
*VerbwireApiDocumentation.DataApi* | [**nftDataNftDetailsPost**](docs/DataApi.md#nftDataNftDetailsPost) | **POST** /nft/data/nftDetails | Get details for an NFT
*VerbwireApiDocumentation.DataApi* | [**nftDataOwnedPost**](docs/DataApi.md#nftDataOwnedPost) | **POST** /nft/data/owned | Get all NFTs owned by a wallet address
*VerbwireApiDocumentation.DataApi* | [**nftDataTransactionsByContractPost**](docs/DataApi.md#nftDataTransactionsByContractPost) | **POST** /nft/data/transactionsByContract | Get all NFTs Contract transactions by a wallet address
*VerbwireApiDocumentation.DataApi* | [**nftDataTransactionsPost**](docs/DataApi.md#nftDataTransactionsPost) | **POST** /nft/data/transactions | Get all transactions by a wallet address
*VerbwireApiDocumentation.DeployApi* | [**nftDeployDeployCollectionContractPost**](docs/DeployApi.md#nftDeployDeployCollectionContractPost) | **POST** /nft/deploy/deployCollectionContract | Deploy a Collection Contract
*VerbwireApiDocumentation.DeployApi* | [**nftDeployDeployCustomContractPost**](docs/DeployApi.md#nftDeployDeployCustomContractPost) | **POST** /nft/deploy/deployCustomContract | Deploy a Custom Contract
*VerbwireApiDocumentation.DeployApi* | [**nftUpdateInitCollectionContractPost**](docs/DeployApi.md#nftUpdateInitCollectionContractPost) | **POST** /nft/update/initCollectionContract | Initialize your collection contract
*VerbwireApiDocumentation.MintApi* | [**nftMintCollectionReserveMintPost**](docs/MintApi.md#nftMintCollectionReserveMintPost) | **POST** /nft/mint/collectionReserveMint | Mint to a Wallet Address
*VerbwireApiDocumentation.MintApi* | [**nftMintCustomContractMintFromFilePost**](docs/MintApi.md#nftMintCustomContractMintFromFilePost) | **POST** /nft/mint/customContractMintFromFile | Custom Contract NFT Mint from image
*VerbwireApiDocumentation.MintApi* | [**nftMintCustomContractMintFromMetadataUrlPost**](docs/MintApi.md#nftMintCustomContractMintFromMetadataUrlPost) | **POST** /nft/mint/customContractMintFromMetadataUrl | Mint Custom contract NFT
*VerbwireApiDocumentation.MintApi* | [**nftMintQuickMintFromFilePost**](docs/MintApi.md#nftMintQuickMintFromFilePost) | **POST** /nft/mint/quickMintFromFile | Quick mint Omnichain NFT from image
*VerbwireApiDocumentation.MintApi* | [**nftMintQuickMintFromMetadataUrlPost**](docs/MintApi.md#nftMintQuickMintFromMetadataUrlPost) | **POST** /nft/mint/quickMintFromMetadataUrl | Quick mint from Metadata URL
*VerbwireApiDocumentation.StoreApi* | [**nftStoreFileFromUrlPost**](docs/StoreApi.md#nftStoreFileFromUrlPost) | **POST** /nft/store/fileFromUrl | Upload a file via URL to IPFS
*VerbwireApiDocumentation.StoreApi* | [**nftStoreFilePost**](docs/StoreApi.md#nftStoreFilePost) | **POST** /nft/store/file | Upload a local file to IPFS
*VerbwireApiDocumentation.StoreApi* | [**nftStoreMetadataFromImagePost**](docs/StoreApi.md#nftStoreMetadataFromImagePost) | **POST** /nft/store/metadataFromImage | Upload local file as metadata to IPFS
*VerbwireApiDocumentation.StoreApi* | [**nftStoreMetadataFromImageUrlPost**](docs/StoreApi.md#nftStoreMetadataFromImageUrlPost) | **POST** /nft/store/metadataFromImageUrl | Upload a URL to IPFS as NFT metadata
*VerbwireApiDocumentation.StoreApi* | [**nftStoreUploadDirectoryPost**](docs/StoreApi.md#nftStoreUploadDirectoryPost) | **POST** /nft/store/uploadDirectory | Upload a directory to IPFS
*VerbwireApiDocumentation.UpdateApi* | [**nftDeployUpdateContractPost**](docs/UpdateApi.md#nftDeployUpdateContractPost) | **POST** /nft/deploy/updateContract | Update Collection Contract
*VerbwireApiDocumentation.UpdateApi* | [**nftDeployUpdateWithdrawFundsPost**](docs/UpdateApi.md#nftDeployUpdateWithdrawFundsPost) | **POST** /nft/deploy/update/withdrawFunds | Withdraw Funds
*VerbwireApiDocumentation.UpdateApi* | [**nftUpdateAddToAllowListPost**](docs/UpdateApi.md#nftUpdateAddToAllowListPost) | **POST** /nft/update/addToAllowList | Add addresses to Allowlist
*VerbwireApiDocumentation.UpdateApi* | [**nftUpdateTransferOperatorPost**](docs/UpdateApi.md#nftUpdateTransferOperatorPost) | **POST** /nft/update/transferOperator | Transfer Contract Operator
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsAllowListSharesForAddressPost**](docs/UserApi.md#nftUserOpsAllowListSharesForAddressPost) | **POST** /nft/userOps/allowListSharesForAddress | Get Allowlist Shares
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsContractPaymentDetailsPost**](docs/UserApi.md#nftUserOpsContractPaymentDetailsPost) | **POST** /nft/userOps/contractPaymentDetails | Get Payee Payment Details
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsDeployedContractsGet**](docs/UserApi.md#nftUserOpsDeployedContractsGet) | **GET** /nft/userOps/deployedContracts | Retrieve deployed contracts
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsIpfsUploadsGet**](docs/UserApi.md#nftUserOpsIpfsUploadsGet) | **GET** /nft/userOps/ipfsUploads | Retrieve your uploaded IPFS files
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsNftsMintedGet**](docs/UserApi.md#nftUserOpsNftsMintedGet) | **GET** /nft/userOps/nftsMinted | Retrieve your minted NFTs
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsPayeeAtIndexPost**](docs/UserApi.md#nftUserOpsPayeeAtIndexPost) | **POST** /nft/userOps/payeeAtIndex | Get Payee
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsTransactionDetailsPost**](docs/UserApi.md#nftUserOpsTransactionDetailsPost) | **POST** /nft/userOps/transactionDetails | Retrieve specific transaction details
*VerbwireApiDocumentation.UserApi* | [**nftUserOpsUserCollectionContractDetailsPost**](docs/UserApi.md#nftUserOpsUserCollectionContractDetailsPost) | **POST** /nft/userOps/userCollectionContractDetails | Get Contract Details

## Documentation for Models

 - [VerbwireApiDocumentation.AuthTokens](docs/AuthTokens.md)
 - [VerbwireApiDocumentation.DataCreatedBody](docs/DataCreatedBody.md)
 - [VerbwireApiDocumentation.DataNftDetailsBody](docs/DataNftDetailsBody.md)
 - [VerbwireApiDocumentation.DataOwnedBody](docs/DataOwnedBody.md)
 - [VerbwireApiDocumentation.DataTransactionsBody](docs/DataTransactionsBody.md)
 - [VerbwireApiDocumentation.DataTransactionsByContractBody](docs/DataTransactionsByContractBody.md)
 - [VerbwireApiDocumentation.DeployBurnBody](docs/DeployBurnBody.md)
 - [VerbwireApiDocumentation.DeployDeployCollectionContractBody](docs/DeployDeployCollectionContractBody.md)
 - [VerbwireApiDocumentation.DeployDeployCustomContractBody](docs/DeployDeployCustomContractBody.md)
 - [VerbwireApiDocumentation.DeployUpdateContractBody](docs/DeployUpdateContractBody.md)
 - [VerbwireApiDocumentation.Error](docs/Error.md)
 - [VerbwireApiDocumentation.InlineResponse200](docs/InlineResponse200.md)
 - [VerbwireApiDocumentation.InlineResponse2001](docs/InlineResponse2001.md)
 - [VerbwireApiDocumentation.InlineResponse2002](docs/InlineResponse2002.md)
 - [VerbwireApiDocumentation.InlineResponse201](docs/InlineResponse201.md)
 - [VerbwireApiDocumentation.InlineResponse2011](docs/InlineResponse2011.md)
 - [VerbwireApiDocumentation.InlineResponse20110](docs/InlineResponse20110.md)
 - [VerbwireApiDocumentation.InlineResponse20111](docs/InlineResponse20111.md)
 - [VerbwireApiDocumentation.InlineResponse20112](docs/InlineResponse20112.md)
 - [VerbwireApiDocumentation.InlineResponse20113](docs/InlineResponse20113.md)
 - [VerbwireApiDocumentation.InlineResponse20114](docs/InlineResponse20114.md)
 - [VerbwireApiDocumentation.InlineResponse2012](docs/InlineResponse2012.md)
 - [VerbwireApiDocumentation.InlineResponse2013](docs/InlineResponse2013.md)
 - [VerbwireApiDocumentation.InlineResponse2014](docs/InlineResponse2014.md)
 - [VerbwireApiDocumentation.InlineResponse2015](docs/InlineResponse2015.md)
 - [VerbwireApiDocumentation.InlineResponse2016](docs/InlineResponse2016.md)
 - [VerbwireApiDocumentation.InlineResponse2017](docs/InlineResponse2017.md)
 - [VerbwireApiDocumentation.InlineResponse2018](docs/InlineResponse2018.md)
 - [VerbwireApiDocumentation.InlineResponse2019](docs/InlineResponse2019.md)
 - [VerbwireApiDocumentation.InlineResponse400](docs/InlineResponse400.md)
 - [VerbwireApiDocumentation.InlineResponse4001](docs/InlineResponse4001.md)
 - [VerbwireApiDocumentation.MintCollectionReserveMintBody](docs/MintCollectionReserveMintBody.md)
 - [VerbwireApiDocumentation.MintCustomContractMintFromFileBody](docs/MintCustomContractMintFromFileBody.md)
 - [VerbwireApiDocumentation.MintCustomContractMintFromMetadataUrlBody](docs/MintCustomContractMintFromMetadataUrlBody.md)
 - [VerbwireApiDocumentation.MintQuickMintFromFileBody](docs/MintQuickMintFromFileBody.md)
 - [VerbwireApiDocumentation.MintQuickMintFromMetadataUrlBody](docs/MintQuickMintFromMetadataUrlBody.md)
 - [VerbwireApiDocumentation.NFTData](docs/NFTData.md)
 - [VerbwireApiDocumentation.NFTDetails](docs/NFTDetails.md)
 - [VerbwireApiDocumentation.SendQuickSendBody](docs/SendQuickSendBody.md)
 - [VerbwireApiDocumentation.StoreFileBody](docs/StoreFileBody.md)
 - [VerbwireApiDocumentation.StoreFileFromUrlBody](docs/StoreFileFromUrlBody.md)
 - [VerbwireApiDocumentation.StoreMetadataFromImageBody](docs/StoreMetadataFromImageBody.md)
 - [VerbwireApiDocumentation.StoreMetadataFromImageUrlBody](docs/StoreMetadataFromImageUrlBody.md)
 - [VerbwireApiDocumentation.StoreUploadDirectoryBody](docs/StoreUploadDirectoryBody.md)
 - [VerbwireApiDocumentation.Token](docs/Token.md)
 - [VerbwireApiDocumentation.Transaction](docs/Transaction.md)
 - [VerbwireApiDocumentation.UpdateAddToAllowListBody](docs/UpdateAddToAllowListBody.md)
 - [VerbwireApiDocumentation.UpdateInitCollectionContractBody](docs/UpdateInitCollectionContractBody.md)
 - [VerbwireApiDocumentation.UpdateTransferOperatorBody](docs/UpdateTransferOperatorBody.md)
 - [VerbwireApiDocumentation.UpdateWithdrawFundsBody](docs/UpdateWithdrawFundsBody.md)
 - [VerbwireApiDocumentation.User](docs/User.md)
 - [VerbwireApiDocumentation.UserOpsAllowListSharesForAddressBody](docs/UserOpsAllowListSharesForAddressBody.md)
 - [VerbwireApiDocumentation.UserOpsContractPaymentDetailsBody](docs/UserOpsContractPaymentDetailsBody.md)
 - [VerbwireApiDocumentation.UserOpsPayeeAtIndexBody](docs/UserOpsPayeeAtIndexBody.md)
 - [VerbwireApiDocumentation.UserOpsTransactionDetailsBody](docs/UserOpsTransactionDetailsBody.md)
 - [VerbwireApiDocumentation.UserOpsUserCollectionContractDetailsBody](docs/UserOpsUserCollectionContractDetailsBody.md)

## Documentation for Authorization


### APIKey

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

### BearerAPIKey


### bearerAuth


