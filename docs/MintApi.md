# VerbwireApiDocumentation.MintApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftMintCollectionReserveMintPost**](MintApi.md#nftMintCollectionReserveMintPost) | **POST** /nft/mint/collectionReserveMint | Mint to a Wallet Address
[**nftMintCustomContractMintFromFilePost**](MintApi.md#nftMintCustomContractMintFromFilePost) | **POST** /nft/mint/customContractMintFromFile | Custom Contract NFT Mint from image
[**nftMintCustomContractMintFromMetadataUrlPost**](MintApi.md#nftMintCustomContractMintFromMetadataUrlPost) | **POST** /nft/mint/customContractMintFromMetadataUrl | Mint Custom contract NFT
[**nftMintQuickMintFromFilePost**](MintApi.md#nftMintQuickMintFromFilePost) | **POST** /nft/mint/quickMintFromFile | Quick mint Omnichain NFT from image
[**nftMintQuickMintFromMetadataUrlPost**](MintApi.md#nftMintQuickMintFromMetadataUrlPost) | **POST** /nft/mint/quickMintFromMetadataUrl | Quick mint from Metadata URL

<a name="nftMintCollectionReserveMintPost"></a>
# **nftMintCollectionReserveMintPost**
> InlineResponse2016 nftMintCollectionReserveMintPost(mintQty, contractAddress, recipientAddress, chain)

Mint to a Wallet Address

Mint an NFT to a provided address. Works with only collection contracts.

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.MintApi();
let mintQty = "mintQty_example"; // String | 
let contractAddress = "contractAddress_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftMintCollectionReserveMintPost(mintQty, contractAddress, recipientAddress, chain, (error, data, response) => {
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
 **mintQty** | **String**|  | 
 **contractAddress** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftMintCustomContractMintFromFilePost"></a>
# **nftMintCustomContractMintFromFilePost**
> InlineResponse2018 nftMintCustomContractMintFromFilePost(filePath, name, description, recipientAddress, contractAddress, chain)

Custom Contract NFT Mint from image

Mint an NFT from an image file using your created custom contract

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.MintApi();
let filePath = "filePath_example"; // Blob | 
let name = "name_example"; // String | 
let description = "description_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let contractAddress = "contractAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftMintCustomContractMintFromFilePost(filePath, name, description, recipientAddress, contractAddress, chain, (error, data, response) => {
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
 **filePath** | **Blob**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **contractAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2018**](InlineResponse2018.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftMintCustomContractMintFromMetadataUrlPost"></a>
# **nftMintCustomContractMintFromMetadataUrlPost**
> InlineResponse2017 nftMintCustomContractMintFromMetadataUrlPost(metadataUrl, contractAddress, recipientAddress, chain)

Mint Custom contract NFT

Mint an NFT from a provided metadata json file URL using your created custom contract

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.MintApi();
let metadataUrl = "metadataUrl_example"; // String | 
let contractAddress = "contractAddress_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftMintCustomContractMintFromMetadataUrlPost(metadataUrl, contractAddress, recipientAddress, chain, (error, data, response) => {
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
 **metadataUrl** | **String**|  | 
 **contractAddress** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2017**](InlineResponse2017.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftMintQuickMintFromFilePost"></a>
# **nftMintQuickMintFromFilePost**
> InlineResponse2015 nftMintQuickMintFromFilePost(filePath, name, description, recipientAddress, allowPlatformToOperateToken, chain)

Quick mint Omnichain NFT from image

Mint an Omnichain NFT directly from your specified image file in seconds

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.MintApi();
let filePath = "filePath_example"; // Blob | 
let name = "name_example"; // String | 
let description = "description_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let allowPlatformToOperateToken = "allowPlatformToOperateToken_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftMintQuickMintFromFilePost(filePath, name, description, recipientAddress, allowPlatformToOperateToken, chain, (error, data, response) => {
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
 **filePath** | **Blob**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **allowPlatformToOperateToken** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="nftMintQuickMintFromMetadataUrlPost"></a>
# **nftMintQuickMintFromMetadataUrlPost**
> InlineResponse2012 nftMintQuickMintFromMetadataUrlPost(metadataUrl, recipientAddress, allowPlatformToOperateToken, chain)

Quick mint from Metadata URL

Mint an Omnichain NFT directly from a provided metadata file URL

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.MintApi();
let metadataUrl = "metadataUrl_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 
let allowPlatformToOperateToken = "allowPlatformToOperateToken_example"; // String | 
let chain = "chain_example"; // String | 

apiInstance.nftMintQuickMintFromMetadataUrlPost(metadataUrl, recipientAddress, allowPlatformToOperateToken, chain, (error, data, response) => {
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
 **metadataUrl** | **String**|  | 
 **recipientAddress** | **String**|  | 
 **allowPlatformToOperateToken** | **String**|  | 
 **chain** | **String**|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

