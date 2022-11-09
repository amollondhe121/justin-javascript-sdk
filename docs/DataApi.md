# VerbwireApiDocumentation.DataApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftDataCreatedPost**](DataApi.md#nftDataCreatedPost) | **POST** /nft/data/created | Get all NFTs created by a wallet address
[**nftDataNftDetailsPost**](DataApi.md#nftDataNftDetailsPost) | **POST** /nft/data/nftDetails | Get details for an NFT
[**nftDataOwnedPost**](DataApi.md#nftDataOwnedPost) | **POST** /nft/data/owned | Get all NFTs owned by a wallet address
[**nftDataTransactionsByContractPost**](DataApi.md#nftDataTransactionsByContractPost) | **POST** /nft/data/transactionsByContract | Get all NFTs Contract transactions by a wallet address
[**nftDataTransactionsPost**](DataApi.md#nftDataTransactionsPost) | **POST** /nft/data/transactions | Get all transactions by a wallet address

<a name="nftDataCreatedPost"></a>
# **nftDataCreatedPost**
> InlineResponse200 nftDataCreatedPost(walletAddress, chain)

Get all NFTs created by a wallet address

Returns a list of all NFTs created by a particular wallet address

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDataCreatedPost(walletAddress, chain, (error, data, response) => {
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
 **walletAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftDataNftDetailsPost"></a>
# **nftDataNftDetailsPost**
> InlineResponse2002 nftDataNftDetailsPost(contractAddress, tokenId, chain)

Get details for an NFT

Returns all details for an NFT

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let contractAddress = "contractAddress_example"; // String | 
let tokenId = "tokenId_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDataNftDetailsPost(contractAddress, tokenId, chain, (error, data, response) => {
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
 **tokenId** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftDataOwnedPost"></a>
# **nftDataOwnedPost**
> InlineResponse200 nftDataOwnedPost(walletAddress, chain)

Get all NFTs owned by a wallet address

Returns a list of all NFTs held within a particular wallet address

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDataOwnedPost(walletAddress, chain, (error, data, response) => {
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
 **walletAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftDataTransactionsByContractPost"></a>
# **nftDataTransactionsByContractPost**
> InlineResponse2001 nftDataTransactionsByContractPost(walletAddress, contractAddress, chain)

Get all NFTs Contract transactions by a wallet address

Produce a list of all NFTs transactions for a specific NFT contract within a particular wallet address

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | 
let contractAddress = "contractAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDataTransactionsByContractPost(walletAddress, contractAddress, chain, (error, data, response) => {
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
 **walletAddress** | **String**|  | 
 **contractAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftDataTransactionsPost"></a>
# **nftDataTransactionsPost**
> InlineResponse2001 nftDataTransactionsPost(walletAddress, chain)

Get all transactions by a wallet address

Returns a list of all transactions by a particular wallet address

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.DataApi();
let walletAddress = "walletAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDataTransactionsPost(walletAddress, chain, (error, data, response) => {
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
 **walletAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

