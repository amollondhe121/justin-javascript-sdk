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
import {ApiClient} from './ApiClient';
import {AuthTokens} from './model/AuthTokens';
import {DataCreatedBody} from './model/DataCreatedBody';
import {DataNftDetailsBody} from './model/DataNftDetailsBody';
import {DataOwnedBody} from './model/DataOwnedBody';
import {DataTransactionsBody} from './model/DataTransactionsBody';
import {DataTransactionsByContractBody} from './model/DataTransactionsByContractBody';
import {DeployBurnBody} from './model/DeployBurnBody';
import {DeployDeployCollectionContractBody} from './model/DeployDeployCollectionContractBody';
import {DeployDeployCustomContractBody} from './model/DeployDeployCustomContractBody';
import {DeployUpdateContractBody} from './model/DeployUpdateContractBody';
import {Error} from './model/Error';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse2002} from './model/InlineResponse2002';
import {InlineResponse201} from './model/InlineResponse201';
import {InlineResponse2011} from './model/InlineResponse2011';
import {InlineResponse20110} from './model/InlineResponse20110';
import {InlineResponse20111} from './model/InlineResponse20111';
import {InlineResponse20112} from './model/InlineResponse20112';
import {InlineResponse20113} from './model/InlineResponse20113';
import {InlineResponse20114} from './model/InlineResponse20114';
import {InlineResponse2012} from './model/InlineResponse2012';
import {InlineResponse2013} from './model/InlineResponse2013';
import {InlineResponse2014} from './model/InlineResponse2014';
import {InlineResponse2015} from './model/InlineResponse2015';
import {InlineResponse2016} from './model/InlineResponse2016';
import {InlineResponse2017} from './model/InlineResponse2017';
import {InlineResponse2018} from './model/InlineResponse2018';
import {InlineResponse2019} from './model/InlineResponse2019';
import {InlineResponse400} from './model/InlineResponse400';
import {InlineResponse4001} from './model/InlineResponse4001';
import {MintCollectionReserveMintBody} from './model/MintCollectionReserveMintBody';
import {MintCustomContractMintFromFileBody} from './model/MintCustomContractMintFromFileBody';
import {MintCustomContractMintFromMetadataUrlBody} from './model/MintCustomContractMintFromMetadataUrlBody';
import {MintQuickMintFromFileBody} from './model/MintQuickMintFromFileBody';
import {MintQuickMintFromMetadataUrlBody} from './model/MintQuickMintFromMetadataUrlBody';
import {NFTData} from './model/NFTData';
import {NFTDetails} from './model/NFTDetails';
import {SendQuickSendBody} from './model/SendQuickSendBody';
import {StoreFileBody} from './model/StoreFileBody';
import {StoreFileFromUrlBody} from './model/StoreFileFromUrlBody';
import {StoreMetadataFromImageBody} from './model/StoreMetadataFromImageBody';
import {StoreMetadataFromImageUrlBody} from './model/StoreMetadataFromImageUrlBody';
import {StoreUploadDirectoryBody} from './model/StoreUploadDirectoryBody';
import {Token} from './model/Token';
import {Transaction} from './model/Transaction';
import {UpdateAddToAllowListBody} from './model/UpdateAddToAllowListBody';
import {UpdateInitCollectionContractBody} from './model/UpdateInitCollectionContractBody';
import {UpdateTransferOperatorBody} from './model/UpdateTransferOperatorBody';
import {UpdateWithdrawFundsBody} from './model/UpdateWithdrawFundsBody';
import {User} from './model/User';
import {UserOpsAllowListSharesForAddressBody} from './model/UserOpsAllowListSharesForAddressBody';
import {UserOpsContractPaymentDetailsBody} from './model/UserOpsContractPaymentDetailsBody';
import {UserOpsPayeeAtIndexBody} from './model/UserOpsPayeeAtIndexBody';
import {UserOpsTransactionDetailsBody} from './model/UserOpsTransactionDetailsBody';
import {UserOpsUserCollectionContractDetailsBody} from './model/UserOpsUserCollectionContractDetailsBody';
import {BurnApi} from './api/BurnApi';
import {CrossChainSendApi} from './api/CrossChainSendApi';
import {DataApi} from './api/DataApi';
import {DeployApi} from './api/DeployApi';
import {MintApi} from './api/MintApi';
import {StoreApi} from './api/StoreApi';
import {UpdateApi} from './api/UpdateApi';
import {UserApi} from './api/UserApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var VerbwireApiDocumentation = require('index'); // See note below*.
* var xxxSvc = new VerbwireApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new VerbwireApiDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new VerbwireApiDocumentation.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new VerbwireApiDocumentation.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthTokens model constructor.
     * @property {module:model/AuthTokens}
     */
    AuthTokens,

    /**
     * The DataCreatedBody model constructor.
     * @property {module:model/DataCreatedBody}
     */
    DataCreatedBody,

    /**
     * The DataNftDetailsBody model constructor.
     * @property {module:model/DataNftDetailsBody}
     */
    DataNftDetailsBody,

    /**
     * The DataOwnedBody model constructor.
     * @property {module:model/DataOwnedBody}
     */
    DataOwnedBody,

    /**
     * The DataTransactionsBody model constructor.
     * @property {module:model/DataTransactionsBody}
     */
    DataTransactionsBody,

    /**
     * The DataTransactionsByContractBody model constructor.
     * @property {module:model/DataTransactionsByContractBody}
     */
    DataTransactionsByContractBody,

    /**
     * The DeployBurnBody model constructor.
     * @property {module:model/DeployBurnBody}
     */
    DeployBurnBody,

    /**
     * The DeployDeployCollectionContractBody model constructor.
     * @property {module:model/DeployDeployCollectionContractBody}
     */
    DeployDeployCollectionContractBody,

    /**
     * The DeployDeployCustomContractBody model constructor.
     * @property {module:model/DeployDeployCustomContractBody}
     */
    DeployDeployCustomContractBody,

    /**
     * The DeployUpdateContractBody model constructor.
     * @property {module:model/DeployUpdateContractBody}
     */
    DeployUpdateContractBody,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InlineResponse20110 model constructor.
     * @property {module:model/InlineResponse20110}
     */
    InlineResponse20110,

    /**
     * The InlineResponse20111 model constructor.
     * @property {module:model/InlineResponse20111}
     */
    InlineResponse20111,

    /**
     * The InlineResponse20112 model constructor.
     * @property {module:model/InlineResponse20112}
     */
    InlineResponse20112,

    /**
     * The InlineResponse20113 model constructor.
     * @property {module:model/InlineResponse20113}
     */
    InlineResponse20113,

    /**
     * The InlineResponse20114 model constructor.
     * @property {module:model/InlineResponse20114}
     */
    InlineResponse20114,

    /**
     * The InlineResponse2012 model constructor.
     * @property {module:model/InlineResponse2012}
     */
    InlineResponse2012,

    /**
     * The InlineResponse2013 model constructor.
     * @property {module:model/InlineResponse2013}
     */
    InlineResponse2013,

    /**
     * The InlineResponse2014 model constructor.
     * @property {module:model/InlineResponse2014}
     */
    InlineResponse2014,

    /**
     * The InlineResponse2015 model constructor.
     * @property {module:model/InlineResponse2015}
     */
    InlineResponse2015,

    /**
     * The InlineResponse2016 model constructor.
     * @property {module:model/InlineResponse2016}
     */
    InlineResponse2016,

    /**
     * The InlineResponse2017 model constructor.
     * @property {module:model/InlineResponse2017}
     */
    InlineResponse2017,

    /**
     * The InlineResponse2018 model constructor.
     * @property {module:model/InlineResponse2018}
     */
    InlineResponse2018,

    /**
     * The InlineResponse2019 model constructor.
     * @property {module:model/InlineResponse2019}
     */
    InlineResponse2019,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The InlineResponse4001 model constructor.
     * @property {module:model/InlineResponse4001}
     */
    InlineResponse4001,

    /**
     * The MintCollectionReserveMintBody model constructor.
     * @property {module:model/MintCollectionReserveMintBody}
     */
    MintCollectionReserveMintBody,

    /**
     * The MintCustomContractMintFromFileBody model constructor.
     * @property {module:model/MintCustomContractMintFromFileBody}
     */
    MintCustomContractMintFromFileBody,

    /**
     * The MintCustomContractMintFromMetadataUrlBody model constructor.
     * @property {module:model/MintCustomContractMintFromMetadataUrlBody}
     */
    MintCustomContractMintFromMetadataUrlBody,

    /**
     * The MintQuickMintFromFileBody model constructor.
     * @property {module:model/MintQuickMintFromFileBody}
     */
    MintQuickMintFromFileBody,

    /**
     * The MintQuickMintFromMetadataUrlBody model constructor.
     * @property {module:model/MintQuickMintFromMetadataUrlBody}
     */
    MintQuickMintFromMetadataUrlBody,

    /**
     * The NFTData model constructor.
     * @property {module:model/NFTData}
     */
    NFTData,

    /**
     * The NFTDetails model constructor.
     * @property {module:model/NFTDetails}
     */
    NFTDetails,

    /**
     * The SendQuickSendBody model constructor.
     * @property {module:model/SendQuickSendBody}
     */
    SendQuickSendBody,

    /**
     * The StoreFileBody model constructor.
     * @property {module:model/StoreFileBody}
     */
    StoreFileBody,

    /**
     * The StoreFileFromUrlBody model constructor.
     * @property {module:model/StoreFileFromUrlBody}
     */
    StoreFileFromUrlBody,

    /**
     * The StoreMetadataFromImageBody model constructor.
     * @property {module:model/StoreMetadataFromImageBody}
     */
    StoreMetadataFromImageBody,

    /**
     * The StoreMetadataFromImageUrlBody model constructor.
     * @property {module:model/StoreMetadataFromImageUrlBody}
     */
    StoreMetadataFromImageUrlBody,

    /**
     * The StoreUploadDirectoryBody model constructor.
     * @property {module:model/StoreUploadDirectoryBody}
     */
    StoreUploadDirectoryBody,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
     * The Transaction model constructor.
     * @property {module:model/Transaction}
     */
    Transaction,

    /**
     * The UpdateAddToAllowListBody model constructor.
     * @property {module:model/UpdateAddToAllowListBody}
     */
    UpdateAddToAllowListBody,

    /**
     * The UpdateInitCollectionContractBody model constructor.
     * @property {module:model/UpdateInitCollectionContractBody}
     */
    UpdateInitCollectionContractBody,

    /**
     * The UpdateTransferOperatorBody model constructor.
     * @property {module:model/UpdateTransferOperatorBody}
     */
    UpdateTransferOperatorBody,

    /**
     * The UpdateWithdrawFundsBody model constructor.
     * @property {module:model/UpdateWithdrawFundsBody}
     */
    UpdateWithdrawFundsBody,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserOpsAllowListSharesForAddressBody model constructor.
     * @property {module:model/UserOpsAllowListSharesForAddressBody}
     */
    UserOpsAllowListSharesForAddressBody,

    /**
     * The UserOpsContractPaymentDetailsBody model constructor.
     * @property {module:model/UserOpsContractPaymentDetailsBody}
     */
    UserOpsContractPaymentDetailsBody,

    /**
     * The UserOpsPayeeAtIndexBody model constructor.
     * @property {module:model/UserOpsPayeeAtIndexBody}
     */
    UserOpsPayeeAtIndexBody,

    /**
     * The UserOpsTransactionDetailsBody model constructor.
     * @property {module:model/UserOpsTransactionDetailsBody}
     */
    UserOpsTransactionDetailsBody,

    /**
     * The UserOpsUserCollectionContractDetailsBody model constructor.
     * @property {module:model/UserOpsUserCollectionContractDetailsBody}
     */
    UserOpsUserCollectionContractDetailsBody,

    /**
    * The BurnApi service constructor.
    * @property {module:api/BurnApi}
    */
    BurnApi,

    /**
    * The CrossChainSendApi service constructor.
    * @property {module:api/CrossChainSendApi}
    */
    CrossChainSendApi,

    /**
    * The DataApi service constructor.
    * @property {module:api/DataApi}
    */
    DataApi,

    /**
    * The DeployApi service constructor.
    * @property {module:api/DeployApi}
    */
    DeployApi,

    /**
    * The MintApi service constructor.
    * @property {module:api/MintApi}
    */
    MintApi,

    /**
    * The StoreApi service constructor.
    * @property {module:api/StoreApi}
    */
    StoreApi,

    /**
    * The UpdateApi service constructor.
    * @property {module:api/UpdateApi}
    */
    UpdateApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
