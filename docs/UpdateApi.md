# VerbwireApiDocumentation.UpdateApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftDeployUpdateContractPost**](UpdateApi.md#nftDeployUpdateContractPost) | **POST** /nft/deploy/updateContract | Update Collection Contract
[**nftDeployUpdateWithdrawFundsPost**](UpdateApi.md#nftDeployUpdateWithdrawFundsPost) | **POST** /nft/deploy/update/withdrawFunds | Withdraw Funds
[**nftUpdateAddToAllowListPost**](UpdateApi.md#nftUpdateAddToAllowListPost) | **POST** /nft/update/addToAllowList | Add addresses to Allowlist
[**nftUpdateTransferOperatorPost**](UpdateApi.md#nftUpdateTransferOperatorPost) | **POST** /nft/update/transferOperator | Transfer Contract Operator

<a name="nftDeployUpdateContractPost"></a>
# **nftDeployUpdateContractPost**
> InlineResponse2014 nftDeployUpdateContractPost(contractAddress, chain, tokenURIPrereveal, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, baseTokenURI)

Update Collection Contract

Update parameters of your collection contract

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UpdateApi();
let contractAddress = "contractAddress_example"; // String | 
let chain = "chain_example"; // String | 
let tokenURIPrereveal = "tokenURIPrereveal_example"; // String | 
let allowListMintStartTime = "allowListMintStartTime_example"; // String | 
let publicSaleStartTime = "publicSaleStartTime_example"; // String | 
let allowlistMintPriceInWei = "allowlistMintPriceInWei_example"; // String | 
let publicPriceInWei = "publicPriceInWei_example"; // String | 
let metadataFrozen = "metadataFrozen_example"; // String | 
let baseTokenURI = "baseTokenURI_example"; // String | 

apiInstance.nftDeployUpdateContractPost(contractAddress, chain, tokenURIPrereveal, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, baseTokenURI, (error, data, response) => {
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
 **tokenURIPrereveal** | **String**|  | 
 **allowListMintStartTime** | **String**|  | 
 **publicSaleStartTime** | **String**|  | 
 **allowlistMintPriceInWei** | **String**|  | 
 **publicPriceInWei** | **String**|  | 
 **metadataFrozen** | **String**|  | 
 **baseTokenURI** | **String**|  | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftDeployUpdateWithdrawFundsPost"></a>
# **nftDeployUpdateWithdrawFundsPost**
> InlineResponse2001 nftDeployUpdateWithdrawFundsPost(contractAddress, withdrawAddress, chain)

Withdraw Funds

Withdraw funds from your smart contract.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UpdateApi();
let contractAddress = "contractAddress_example"; // String | 
let withdrawAddress = "withdrawAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftDeployUpdateWithdrawFundsPost(contractAddress, withdrawAddress, chain, (error, data, response) => {
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
 **withdrawAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftUpdateAddToAllowListPost"></a>
# **nftUpdateAddToAllowListPost**
> InlineResponse2001 nftUpdateAddToAllowListPost(contractAddress, addresses, mintSlots, chain)

Add addresses to Allowlist

Add an address (or group of addresses) to the allowlist of your collection contract.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UpdateApi();
let contractAddress = "contractAddress_example"; // String | 
let addresses = "addresses_example"; // String | 
let mintSlots = "mintSlots_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUpdateAddToAllowListPost(contractAddress, addresses, mintSlots, chain, (error, data, response) => {
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
 **addresses** | **String**|  | 
 **mintSlots** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="nftUpdateTransferOperatorPost"></a>
# **nftUpdateTransferOperatorPost**
> InlineResponse2001 nftUpdateTransferOperatorPost(contractAddress, newOperatorAddress, chain)

Transfer Contract Operator

Transfer the Operator of your deployed collection contract. Works with only collection contracts.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.UpdateApi();
let contractAddress = "contractAddress_example"; // String | 
let newOperatorAddress = "newOperatorAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftUpdateTransferOperatorPost(contractAddress, newOperatorAddress, chain, (error, data, response) => {
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
 **newOperatorAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

