# VerbwireApiDocumentation.CrossChainSendApi

All URIs are relative to *https://api.verbwire.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nftSendQuickSendPost**](CrossChainSendApi.md#nftSendQuickSendPost) | **POST** /nft/send/quickSend | Send Quick-minted NFT across Chains

<a name="nftSendQuickSendPost"></a>
# **nftSendQuickSendPost**
> InlineResponse2019 nftSendQuickSendPost(sourceChain, destChain, tokenId, sourceAddress, recipientAddress)

Send Quick-minted NFT across Chains

Sends a quick-minted NFT from one block chain to another. Sending NFTs accross chains is a unique feature of Omnichain NFTs

### Example
```javascript
import {VerbwireApiDocumentation} from 'verbwire_api_documentation';
let defaultClient = VerbwireApiDocumentation.ApiClient.instance;

// Configure API key authorization: APIKey
let APIKey = defaultClient.authentications['APIKey'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

let apiInstance = new VerbwireApiDocumentation.CrossChainSendApi();
let sourceChain = "sourceChain_example"; // String | 
let destChain = "destChain_example"; // String | 
let tokenId = "tokenId_example"; // String | 
let sourceAddress = "sourceAddress_example"; // String | 
let recipientAddress = "recipientAddress_example"; // String | 

apiInstance.nftSendQuickSendPost(sourceChain, destChain, tokenId, sourceAddress, recipientAddress, (error, data, response) => {
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
 **sourceChain** | **String**|  | 
 **destChain** | **String**|  | 
 **tokenId** | **String**|  | 
 **sourceAddress** | **String**|  | 
 **recipientAddress** | **String**|  | 

### Return type

[**InlineResponse2019**](InlineResponse2019.md)

### Authorization

[APIKey](../README.md#APIKey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

