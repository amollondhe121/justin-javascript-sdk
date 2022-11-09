# VerbwireApiDocumentation.UserApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftUserOpsAllowListSharesForAddressPost**](UserApi.md#nftUserOpsAllowListSharesForAddressPost) | **POST** /nft/userOps/allowListSharesForAddress | Get Allowlist Shares
[**nftUserOpsContractPaymentDetailsPost**](UserApi.md#nftUserOpsContractPaymentDetailsPost) | **POST** /nft/userOps/contractPaymentDetails | Get Payee Payment Details
[**nftUserOpsDeployedContractsGet**](UserApi.md#nftUserOpsDeployedContractsGet) | **GET** /nft/userOps/deployedContracts | Retrieve deployed contracts
[**nftUserOpsIpfsUploadsGet**](UserApi.md#nftUserOpsIpfsUploadsGet) | **GET** /nft/userOps/ipfsUploads | Retrieve your uploaded IPFS files
[**nftUserOpsNftsMintedGet**](UserApi.md#nftUserOpsNftsMintedGet) | **GET** /nft/userOps/nftsMinted | Retrieve your minted NFTs
[**nftUserOpsPayeeAtIndexPost**](UserApi.md#nftUserOpsPayeeAtIndexPost) | **POST** /nft/userOps/payeeAtIndex | Get Payee
[**nftUserOpsTransactionDetailsPost**](UserApi.md#nftUserOpsTransactionDetailsPost) | **POST** /nft/userOps/transactionDetails | Retrieve specific transaction details
[**nftUserOpsUserCollectionContractDetailsPost**](UserApi.md#nftUserOpsUserCollectionContractDetailsPost) | **POST** /nft/userOps/userCollectionContractDetails | Get Contract Details

<a name="nftUserOpsAllowListSharesForAddressPost"></a>
# **nftUserOpsAllowListSharesForAddressPost**
> InlineResponse2001 nftUserOpsAllowListSharesForAddressPost(contractAddress, allowListAddress, chain)

Get Allowlist Shares

Display Allowlist shares for a specific address.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
let contractAddress = "contractAddress_example"; // String | 
let allowListAddress = "allowListAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUserOpsAllowListSharesForAddressPost(contractAddress, allowListAddress, chain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**|  | 
 **allowListAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftUserOpsContractPaymentDetailsPost"></a>
# **nftUserOpsContractPaymentDetailsPost**
> InlineResponse2001 nftUserOpsContractPaymentDetailsPost(contractAddress, payeeAddress, chain)

Get Payee Payment Details

Display payment details for a specific payee of a contract.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
let contractAddress = "contractAddress_example"; // String | 
let payeeAddress = "payeeAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUserOpsContractPaymentDetailsPost(contractAddress, payeeAddress, chain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**|  | 
 **payeeAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftUserOpsDeployedContractsGet"></a>
# **nftUserOpsDeployedContractsGet**
> InlineResponse2001 nftUserOpsDeployedContractsGet()

Retrieve deployed contracts

Produce a list of all your deployed contracts

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
apiInstance.nftUserOpsDeployedContractsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftUserOpsIpfsUploadsGet"></a>
# **nftUserOpsIpfsUploadsGet**
> InlineResponse2001 nftUserOpsIpfsUploadsGet()

Retrieve your uploaded IPFS files

Produce a list of all your minted NFTs

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
apiInstance.nftUserOpsIpfsUploadsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftUserOpsNftsMintedGet"></a>
# **nftUserOpsNftsMintedGet**
> InlineResponse2001 nftUserOpsNftsMintedGet()

Retrieve your minted NFTs

Produce a list of all your minted NFTs

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
apiInstance.nftUserOpsNftsMintedGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="nftUserOpsPayeeAtIndexPost"></a>
# **nftUserOpsPayeeAtIndexPost**
> InlineResponse2001 nftUserOpsPayeeAtIndexPost(contractAddress, index, chain)

Get Payee

Display details of Payee at a certain Index.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
let contractAddress = "contractAddress_example"; // String | 
let index = "index_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUserOpsPayeeAtIndexPost(contractAddress, index, chain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**|  | 
 **index** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftUserOpsTransactionDetailsPost"></a>
# **nftUserOpsTransactionDetailsPost**
> InlineResponse2001 nftUserOpsTransactionDetailsPost(transactionId)

Retrieve specific transaction details

Get details for a specific transaction

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
let transactionId = "transactionId_example"; // String | 

apiInstance.nftUserOpsTransactionDetailsPost(transactionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftUserOpsUserCollectionContractDetailsPost"></a>
# **nftUserOpsUserCollectionContractDetailsPost**
> InlineResponse2001 nftUserOpsUserCollectionContractDetailsPost(contractAddress, chain)

Get Contract Details

Display details of your collection contract.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UserApi();
let contractAddress = "contractAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUserOpsUserCollectionContractDetailsPost(contractAddress, chain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

