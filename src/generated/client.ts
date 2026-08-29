// Generated from oceanengine/ad_open_sdk_go v1.1.93. Do not edit manually.

import {
  OceanEngineClient as BaseOceanEngineClient,
  type RequestOptions,
} from '../client.js';
import type { EndpointRequestMap, EndpointResponseMap } from './endpoints.js';

/**
 * Ocean Engine Open API client with a concrete, typed method for every endpoint.
 */
export class OceanEngineClient extends BaseOceanEngineClient {
  /**
   * 批量查询账户余额
   *
   * GET /open_api/v3.0/account/fund/get/
   * @see https://open.oceanengine.com/labels/7/docs/1799006604968971
   */
  accountFundGetV30(
    request: EndpointRequestMap["AccountFundGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AccountFundGetV30"]> {
    return this.execute("AccountFundGetV30", request, options);
  }

  /**
   * AccountUpdateV30
   *
   * POST /open_api/v3.0/account/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faccount%2Fupdate%2F
   */
  accountUpdateV30(
    request: EndpointRequestMap["AccountUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AccountUpdateV30"]> {
    return this.execute("AccountUpdateV30", request, options);
  }

  /**
   * 资金共享-获取唯一操作id
   *
   * GET /open_api/v3.0/ad_billing/unique_id/get/
   * @see https://open.oceanengine.com/labels/7/docs/1848384417379332
   */
  adBillingUniqueIdGetV30(
    request: EndpointRequestMap["AdBillingUniqueIdGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdBillingUniqueIdGetV30"]> {
    return this.execute("AdBillingUniqueIdGetV30", request, options);
  }

  /**
   * AdConvertSignalV2
   *
   * POST /open_api/2/ad_convert/signal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad_convert%2Fsignal%2F
   */
  adConvertSignalV2(
    request: EndpointRequestMap["AdConvertSignalV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdConvertSignalV2"]> {
    return this.execute("AdConvertSignalV2", request, options);
  }

  /**
   * AdCostProtectStatusGetV2
   *
   * GET /open_api/2/ad/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fcost_protect_status%2Fget%2F
   */
  adCostProtectStatusGetV2(
    request: EndpointRequestMap["AdCostProtectStatusGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdCostProtectStatusGetV2"]> {
    return this.execute("AdCostProtectStatusGetV2", request, options);
  }

  /**
   * AdGetV2
   *
   * GET /open_api/2/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fget%2F
   */
  adGetV2(
    request: EndpointRequestMap["AdGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdGetV2"]> {
    return this.execute("AdGetV2", request, options);
  }

  /**
   * AdRejectReasonV2
   *
   * GET /open_api/2/ad/reject_reason/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Freject_reason%2F
   */
  adRejectReasonV2(
    request: EndpointRequestMap["AdRejectReasonV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdRejectReasonV2"]> {
    return this.execute("AdRejectReasonV2", request, options);
  }

  /**
   * AdShopInfoUpdateV30
   *
   * POST /open_api/v3.0/ad/shop_info/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fad%2Fshop_info%2Fupdate%2F
   */
  adShopInfoUpdateV30(
    request: EndpointRequestMap["AdShopInfoUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdShopInfoUpdateV30"]> {
    return this.execute("AdShopInfoUpdateV30", request, options);
  }

  /**
   * AdUdUpdateV2
   *
   * POST /open_api/2/ad/ud/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fud%2Fupdate%2F
   */
  adUdUpdateV2(
    request: EndpointRequestMap["AdUdUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdUdUpdateV2"]> {
    return this.execute("AdUdUpdateV2", request, options);
  }

  /**
   * AdUpdateBidV2
   *
   * POST /open_api/2/ad/update/bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fupdate%2Fbid%2F
   */
  adUpdateBidV2(
    request: EndpointRequestMap["AdUpdateBidV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdUpdateBidV2"]> {
    return this.execute("AdUpdateBidV2", request, options);
  }

  /**
   * AdUpdateBudgetV2
   *
   * POST /open_api/2/ad/update/budget/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fupdate%2Fbudget%2F
   */
  adUpdateBudgetV2(
    request: EndpointRequestMap["AdUpdateBudgetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdUpdateBudgetV2"]> {
    return this.execute("AdUpdateBudgetV2", request, options);
  }

  /**
   * 引流下单转化信息获取
   *
   * POST /open_api/2/adv_convert/ole/convert/
   * @see https://open.oceanengine.com/labels/7/docs/1774836168252548
   */
  advConvertOleConvertV2(
    request: EndpointRequestMap["AdvConvertOleConvertV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvConvertOleConvertV2"]> {
    return this.execute("AdvConvertOleConvertV2", request, options);
  }

  /**
   * AdvertiserAttachmentUploadV30
   *
   * POST /open_api/v3.0/advertiser/attachment/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fadvertiser%2Fattachment%2Fupload%2F
   */
  advertiserAttachmentUploadV30(
    request: EndpointRequestMap["AdvertiserAttachmentUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserAttachmentUploadV30"]> {
    return this.execute("AdvertiserAttachmentUploadV30", request, options);
  }

  /**
   * 查询投放账户头像
   *
   * GET /open_api/2/advertiser/avatar/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710512904192
   */
  advertiserAvatarGetV2(
    request: EndpointRequestMap["AdvertiserAvatarGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserAvatarGetV2"]> {
    return this.execute("AdvertiserAvatarGetV2", request, options);
  }

  /**
   * 更新投放账户头像
   *
   * POST /open_api/2/advertiser/avatar/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1696710512435215
   */
  advertiserAvatarSubmitV2(
    request: EndpointRequestMap["AdvertiserAvatarSubmitV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserAvatarSubmitV2"]> {
    return this.execute("AdvertiserAvatarSubmitV2", request, options);
  }

  /**
   * 获取投放账户头像ID
   *
   * POST /open_api/2/advertiser/avatar/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1794039016601604
   */
  advertiserAvatarUploadV2(
    request: EndpointRequestMap["AdvertiserAvatarUploadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserAvatarUploadV2"]> {
    return this.execute("AdvertiserAvatarUploadV2", request, options);
  }

  /**
   * 获取账户日预算
   *
   * GET /open_api/2/advertiser/budget/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710531128335
   */
  advertiserBudgetGetV2(
    request: EndpointRequestMap["AdvertiserBudgetGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserBudgetGetV2"]> {
    return this.execute("AdvertiserBudgetGetV2", request, options);
  }

  /**
   * 获取营销产品资质规则配置
   *
   * GET /open_api/v3.0/advertiser/delivery_pkg_config/
   * @see https://open.oceanengine.com/labels/7/docs/1776710970860551
   */
  advertiserDeliveryPkgConfigV30(
    request: EndpointRequestMap["AdvertiserDeliveryPkgConfigV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryPkgConfigV30"]> {
    return this.execute("AdvertiserDeliveryPkgConfigV30", request, options);
  }

  /**
   * 批量删除营销产品资质
   *
   * POST /open_api/v3.0/advertiser/delivery_pkg/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1783952807559307
   */
  advertiserDeliveryPkgDeleteV30(
    request: EndpointRequestMap["AdvertiserDeliveryPkgDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryPkgDeleteV30"]> {
    return this.execute("AdvertiserDeliveryPkgDeleteV30", request, options);
  }

  /**
   * 获取营销产品资质
   *
   * GET /open_api/v3.0/advertiser/delivery_pkg/get/
   * @see https://open.oceanengine.com/labels/7/docs/1776711148266572
   */
  advertiserDeliveryPkgGetV30(
    request: EndpointRequestMap["AdvertiserDeliveryPkgGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryPkgGetV30"]> {
    return this.execute("AdvertiserDeliveryPkgGetV30", request, options);
  }

  /**
   * 上传/更新营销产品资质
   *
   * POST /open_api/v3.0/advertiser/delivery_pkg/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1776711210685572
   */
  advertiserDeliveryPkgSubmitV30(
    request: EndpointRequestMap["AdvertiserDeliveryPkgSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryPkgSubmitV30"]> {
    return this.execute("AdvertiserDeliveryPkgSubmitV30", request, options);
  }

  /**
   * 批量删除投放资质
   *
   * POST /open_api/v3.0/advertiser/delivery_qualification/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1783952358997067
   */
  advertiserDeliveryQualificationDeleteV30(
    request: EndpointRequestMap["AdvertiserDeliveryQualificationDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryQualificationDeleteV30"]> {
    return this.execute("AdvertiserDeliveryQualificationDeleteV30", request, options);
  }

  /**
   * 获取投放资质（新版）
   *
   * GET /open_api/v3.0/advertiser/delivery_qualification/list/
   * @see https://open.oceanengine.com/labels/7/docs/1761500990156815
   */
  advertiserDeliveryQualificationListV30(
    request: EndpointRequestMap["AdvertiserDeliveryQualificationListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryQualificationListV30"]> {
    return this.execute("AdvertiserDeliveryQualificationListV30", request, options);
  }

  /**
   * 上传/更新投放资质（新版）
   *
   * POST /open_api/v3.0/advertiser/delivery_qualification/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1761501324513352
   */
  advertiserDeliveryQualificationSubmitV30(
    request: EndpointRequestMap["AdvertiserDeliveryQualificationSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserDeliveryQualificationSubmitV30"]> {
    return this.execute("AdvertiserDeliveryQualificationSubmitV30", request, options);
  }

  /**
   * 查询账户日流水
   *
   * GET /open_api/2/advertiser/fund/daily_stat/
   * @see https://open.oceanengine.com/labels/7/docs/1696710526682112
   */
  advertiserFundDailyStatV2(
    request: EndpointRequestMap["AdvertiserFundDailyStatV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserFundDailyStatV2"]> {
    return this.execute("AdvertiserFundDailyStatV2", request, options);
  }

  /**
   * AdvertiserFundDetailGrantV2
   *
   * GET /open_api/2/advertiser/fund/detail_grant/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ffund%2Fdetail_grant%2F
   */
  advertiserFundDetailGrantV2(
    request: EndpointRequestMap["AdvertiserFundDetailGrantV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserFundDetailGrantV2"]> {
    return this.execute("AdvertiserFundDetailGrantV2", request, options);
  }

  /**
   * 查询账号余额
   *
   * GET /open_api/2/advertiser/fund/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710526192652
   */
  advertiserFundGetV2(
    request: EndpointRequestMap["AdvertiserFundGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserFundGetV2"]> {
    return this.execute("AdvertiserFundGetV2", request, options);
  }

  /**
   * AdvertiserFundGrantTransactionGetV2
   *
   * GET /open_api/2/advertiser/fund/grant_transaction/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ffund%2Fgrant_transaction%2Fget%2F
   */
  advertiserFundGrantTransactionGetV2(
    request: EndpointRequestMap["AdvertiserFundGrantTransactionGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserFundGrantTransactionGetV2"]> {
    return this.execute("AdvertiserFundGrantTransactionGetV2", request, options);
  }

  /**
   * 查询账号流水明细
   *
   * GET /open_api/2/advertiser/fund/transaction/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710527205388
   */
  advertiserFundTransactionGetV2(
    request: EndpointRequestMap["AdvertiserFundTransactionGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserFundTransactionGetV2"]> {
    return this.execute("AdvertiserFundTransactionGetV2", request, options);
  }

  /**
   * 获取投放账户信息
   *
   * GET /open_api/2/advertiser/info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710508983311
   */
  advertiserInfoV2(
    request: EndpointRequestMap["AdvertiserInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserInfoV2"]> {
    return this.execute("AdvertiserInfoV2", request, options);
  }

  /**
   * 获取客户公开信息
   *
   * GET /open_api/2/advertiser/public_info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710511950860
   */
  advertiserPublicInfoV2(
    request: EndpointRequestMap["AdvertiserPublicInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserPublicInfoV2"]> {
    return this.execute("AdvertiserPublicInfoV2", request, options);
  }

  /**
   * 上传投放资质（旧版）
   *
   * POST /open_api/2/advertiser/qualification/create_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1696710514343951
   */
  advertiserQualificationCreateV2V2(
    request: EndpointRequestMap["AdvertiserQualificationCreateV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserQualificationCreateV2V2"]> {
    return this.execute("AdvertiserQualificationCreateV2V2", request, options);
  }

  /**
   * 获取主体资质（新版）
   *
   * GET /open_api/v3.0/advertiser/qualification/get/
   * @see https://open.oceanengine.com/labels/7/docs/1743294338713611
   */
  advertiserQualificationGetV30(
    request: EndpointRequestMap["AdvertiserQualificationGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserQualificationGetV30"]> {
    return this.execute("AdvertiserQualificationGetV30", request, options);
  }

  /**
   * 获取投放资质（旧版）
   *
   * GET /open_api/2/advertiser/qualification/select_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1696710513397775
   */
  advertiserQualificationSelectV2V2(
    request: EndpointRequestMap["AdvertiserQualificationSelectV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserQualificationSelectV2V2"]> {
    return this.execute("AdvertiserQualificationSelectV2V2", request, options);
  }

  /**
   * 上传主体资质（新版）
   *
   * POST /open_api/v3.0/advertiser/qualification/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1743294661429259
   */
  advertiserQualificationSubmitV30(
    request: EndpointRequestMap["AdvertiserQualificationSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserQualificationSubmitV30"]> {
    return this.execute("AdvertiserQualificationSubmitV30", request, options);
  }

  /**
   * AdvertiserTransferableFundGetV2
   *
   * GET /open_api/2/advertiser/transferable_fund/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ftransferable_fund%2Fget%2F
   */
  advertiserTransferableFundGetV2(
    request: EndpointRequestMap["AdvertiserTransferableFundGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserTransferableFundGetV2"]> {
    return this.execute("AdvertiserTransferableFundGetV2", request, options);
  }

  /**
   * 更新账户日预算
   *
   * POST /open_api/2/advertiser/update/budget/
   * @see https://open.oceanengine.com/labels/7/docs/1696710531631116
   */
  advertiserUpdateBudgetV2(
    request: EndpointRequestMap["AdvertiserUpdateBudgetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserUpdateBudgetV2"]> {
    return this.execute("AdvertiserUpdateBudgetV2", request, options);
  }

  /**
   * AdvertiserVerifyInfoGetV30
   *
   * GET /open_api/v3.0/advertiser/verify_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fadvertiser%2Fverify_info%2Fget%2F
   */
  advertiserVerifyInfoGetV30(
    request: EndpointRequestMap["AdvertiserVerifyInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AdvertiserVerifyInfoGetV30"]> {
    return this.execute("AdvertiserVerifyInfoGetV30", request, options);
  }

  /**
   * 更新广告主所属销售
   *
   * POST /open_api/2/agent/adv/advertiser/update_sale/
   * @see https://open.oceanengine.com/labels/7/docs/1831550732043264
   */
  agentAdvAdvertiserUpdateSaleV2(
    request: EndpointRequestMap["AgentAdvAdvertiserUpdateSaleV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvAdvertiserUpdateSaleV2"]> {
    return this.execute("AgentAdvAdvertiserUpdateSaleV2", request, options);
  }

  /**
   * 代理商竞价投放数据 
   *
   * GET /open_api/2/agent/adv/bidding/list/query/
   * @see https://open.oceanengine.com/labels/7/docs/1815032517161050
   */
  agentAdvBiddingListQueryV2(
    request: EndpointRequestMap["AgentAdvBiddingListQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvBiddingListQueryV2"]> {
    return this.execute("AgentAdvBiddingListQueryV2", request, options);
  }

  /**
   * 代理商品牌投放数据
   *
   * GET /open_api/2/agent/adv/brand/list/query/
   * @see https://open.oceanengine.com/labels/7/docs/1815032592622740
   */
  agentAdvBrandListQueryV2(
    request: EndpointRequestMap["AgentAdvBrandListQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvBrandListQueryV2"]> {
    return this.execute("AgentAdvBrandListQueryV2", request, options);
  }

  /**
   * 代理商消耗报表数据
   *
   * POST /open_api/2/agent/adv/cost_report/list/query/
   * @see https://open.oceanengine.com/labels/7/docs/1784979080790218
   */
  agentAdvCostReportListQueryV2(
    request: EndpointRequestMap["AgentAdvCostReportListQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvCostReportListQueryV2"]> {
    return this.execute("AgentAdvCostReportListQueryV2", request, options);
  }

  /**
   * AgentAdvPerenniallyPunishHistoryQueryV2
   *
   * GET /open_api/2/agent/adv/perennially/punish_history/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Fperennially%2Fpunish_history%2Fquery%2F
   */
  agentAdvPerenniallyPunishHistoryQueryV2(
    request: EndpointRequestMap["AgentAdvPerenniallyPunishHistoryQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvPerenniallyPunishHistoryQueryV2"]> {
    return this.execute("AgentAdvPerenniallyPunishHistoryQueryV2", request, options);
  }

  /**
   * AgentAdvPerenniallyPunishV2
   *
   * POST /open_api/2/agent/adv/perennially/punish/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Fperennially%2Fpunish%2F
   */
  agentAdvPerenniallyPunishV2(
    request: EndpointRequestMap["AgentAdvPerenniallyPunishV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvPerenniallyPunishV2"]> {
    return this.execute("AgentAdvPerenniallyPunishV2", request, options);
  }

  /**
   * 查询代理商充值记录
   *
   * GET /open_api/2/agent/adv/recharge/recharge_record/
   * @see https://open.oceanengine.com/labels/7/docs/1836524802345028
   */
  agentAdvRechargeRechargeRecordV2(
    request: EndpointRequestMap["AgentAdvRechargeRechargeRecordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvRechargeRechargeRecordV2"]> {
    return this.execute("AgentAdvRechargeRechargeRecordV2", request, options);
  }

  /**
   * AgentAdvTemporaryPunishV2
   *
   * POST /open_api/2/agent/adv/temporary/punish/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Ftemporary%2Fpunish%2F
   */
  agentAdvTemporaryPunishV2(
    request: EndpointRequestMap["AgentAdvTemporaryPunishV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvTemporaryPunishV2"]> {
    return this.execute("AgentAdvTemporaryPunishV2", request, options);
  }

  /**
   * AgentAdvertiserAssignV2
   *
   * POST /open_api/2/agent/advertiser/assign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadvertiser%2Fassign%2F
   */
  agentAdvertiserAssignV2(
    request: EndpointRequestMap["AgentAdvertiserAssignV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvertiserAssignV2"]> {
    return this.execute("AgentAdvertiserAssignV2", request, options);
  }

  /**
   * 投放账户复制
   *
   * POST /open_api/2/agent/advertiser/copy/
   * @see https://open.oceanengine.com/labels/7/docs/1775097300794371
   */
  agentAdvertiserCopyV2(
    request: EndpointRequestMap["AgentAdvertiserCopyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvertiserCopyV2"]> {
    return this.execute("AgentAdvertiserCopyV2", request, options);
  }

  /**
   * 投放账户信息查询
   *
   * GET /open_api/2/agent/advertiser_info/query/
   * @see https://open.oceanengine.com/labels/7/docs/1809915654787136
   */
  agentAdvertiserInfoQueryV2(
    request: EndpointRequestMap["AgentAdvertiserInfoQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvertiserInfoQueryV2"]> {
    return this.execute("AgentAdvertiserInfoQueryV2", request, options);
  }

  /**
   * 代理商管理账户列表
   *
   * GET /open_api/2/agent/advertiser/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710516003852
   */
  agentAdvertiserSelectV2(
    request: EndpointRequestMap["AgentAdvertiserSelectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvertiserSelectV2"]> {
    return this.execute("AgentAdvertiserSelectV2", request, options);
  }

  /**
   * AgentAdvertiserUnassignV2
   *
   * POST /open_api/2/agent/advertiser/unassign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadvertiser%2Funassign%2F
   */
  agentAdvertiserUnassignV2(
    request: EndpointRequestMap["AgentAdvertiserUnassignV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvertiserUnassignV2"]> {
    return this.execute("AgentAdvertiserUnassignV2", request, options);
  }

  /**
   * 更新客户信息
   *
   * POST /open_api/2/agent/advertiser/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710517205007
   */
  agentAdvertiserUpdateV2(
    request: EndpointRequestMap["AgentAdvertiserUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentAdvertiserUpdateV2"]> {
    return this.execute("AgentAdvertiserUpdateV2", request, options);
  }

  /**
   * 代理商充值校验
   *
   * GET /open_api/2/agent/charge/verify/
   * @see https://open.oceanengine.com/labels/7/docs/1832711147925257
   */
  agentChargeVerifyV2(
    request: EndpointRequestMap["AgentChargeVerifyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentChargeVerifyV2"]> {
    return this.execute("AgentChargeVerifyV2", request, options);
  }

  /**
   * 二级代理商列表
   *
   * GET /open_api/2/agent/child_agent/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710517693452
   */
  agentChildAgentSelectV2(
    request: EndpointRequestMap["AgentChildAgentSelectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentChildAgentSelectV2"]> {
    return this.execute("AgentChildAgentSelectV2", request, options);
  }

  /**
   * AgentCompanyBiddingListQueryV2
   *
   * GET /open_api/2/agent/company/bidding/list/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fcompany%2Fbidding%2Flist%2Fquery%2F
   */
  agentCompanyBiddingListQueryV2(
    request: EndpointRequestMap["AgentCompanyBiddingListQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentCompanyBiddingListQueryV2"]> {
    return this.execute("AgentCompanyBiddingListQueryV2", request, options);
  }

  /**
   * AgentCompanyBrandListQueryV2
   *
   * GET /open_api/2/agent/company/brand/list/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fcompany%2Fbrand%2Flist%2Fquery%2F
   */
  agentCompanyBrandListQueryV2(
    request: EndpointRequestMap["AgentCompanyBrandListQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentCompanyBrandListQueryV2"]> {
    return this.execute("AgentCompanyBrandListQueryV2", request, options);
  }

  /**
   * 代理商提交授信充值
   *
   * POST /open_api/2/agent/credit_charge/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1832711098846217
   */
  agentCreditChargeSubmitV2(
    request: EndpointRequestMap["AgentCreditChargeSubmitV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentCreditChargeSubmitV2"]> {
    return this.execute("AgentCreditChargeSubmitV2", request, options);
  }

  /**
   * 获取代理商信息
   *
   * GET /open_api/2/agent/info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710518158351
   */
  agentInfoV2(
    request: EndpointRequestMap["AgentInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentInfoV2"]> {
    return this.execute("AgentInfoV2", request, options);
  }

  /**
   * 代理商预付充值生成汇款码
   *
   * POST /open_api/2/agent/prepay_charge/generate_remittance_code/
   * @see https://open.oceanengine.com/labels/7/docs/1834443692643336
   */
  agentPrepayChargeGenerateRemittanceCodeV2(
    request: EndpointRequestMap["AgentPrepayChargeGenerateRemittanceCodeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentPrepayChargeGenerateRemittanceCodeV2"]> {
    return this.execute("AgentPrepayChargeGenerateRemittanceCodeV2", request, options);
  }

  /**
   * 代理商违规信息推送-AD-本地推
   *
   * GET /open_api/2/agent/query/risk_promotion_list/
   * @see https://open.oceanengine.com/labels/7/docs/1866222259978252
   */
  agentQueryRiskPromotionListV2(
    request: EndpointRequestMap["AgentQueryRiskPromotionListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentQueryRiskPromotionListV2"]> {
    return this.execute("AgentQueryRiskPromotionListV2", request, options);
  }

  /**
   * 查询代理商转账记录
   *
   * GET /open_api/2/agent/transfer/transaction_record/
   * @see https://open.oceanengine.com/labels/7/docs/1795124749017235
   */
  agentTransferTransactionRecordV2(
    request: EndpointRequestMap["AgentTransferTransactionRecordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AgentTransferTransactionRecordV2"]> {
    return this.execute("AgentTransferTransactionRecordV2", request, options);
  }

  /**
   * AicElementDeleteV30
   *
   * POST /open_api/v3.0/aic/element/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fdelete%2F
   */
  aicElementDeleteV30(
    request: EndpointRequestMap["AicElementDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicElementDeleteV30"]> {
    return this.execute("AicElementDeleteV30", request, options);
  }

  /**
   * AicElementGetV30
   *
   * GET /open_api/v3.0/aic/element/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fget%2F
   */
  aicElementGetV30(
    request: EndpointRequestMap["AicElementGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicElementGetV30"]> {
    return this.execute("AicElementGetV30", request, options);
  }

  /**
   * AicElementUpdateV30
   *
   * POST /open_api/v3.0/aic/element/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fupdate%2F
   */
  aicElementUpdateV30(
    request: EndpointRequestMap["AicElementUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicElementUpdateV30"]> {
    return this.execute("AicElementUpdateV30", request, options);
  }

  /**
   * AicElementUploadV30
   *
   * POST /open_api/v3.0/aic/element/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fupload%2F
   */
  aicElementUploadV30(
    request: EndpointRequestMap["AicElementUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicElementUploadV30"]> {
    return this.execute("AicElementUploadV30", request, options);
  }

  /**
   * AicImageMixcutCreateV30
   *
   * POST /open_api/v3.0/aic/image_mixcut/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fimage_mixcut%2Fcreate%2F
   */
  aicImageMixcutCreateV30(
    request: EndpointRequestMap["AicImageMixcutCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicImageMixcutCreateV30"]> {
    return this.execute("AicImageMixcutCreateV30", request, options);
  }

  /**
   * AicMaterialGetV30
   *
   * GET /open_api/v3.0/aic/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmaterial%2Fget%2F
   */
  aicMaterialGetV30(
    request: EndpointRequestMap["AicMaterialGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicMaterialGetV30"]> {
    return this.execute("AicMaterialGetV30", request, options);
  }

  /**
   * AicMaterialPushV30
   *
   * POST /open_api/v3.0/aic/material/push/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmaterial%2Fpush%2F
   */
  aicMaterialPushV30(
    request: EndpointRequestMap["AicMaterialPushV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicMaterialPushV30"]> {
    return this.execute("AicMaterialPushV30", request, options);
  }

  /**
   * AicMixcutTaskResultGetV30
   *
   * GET /open_api/v3.0/aic/mixcut_task/result/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmixcut_task%2Fresult%2Fget%2F
   */
  aicMixcutTaskResultGetV30(
    request: EndpointRequestMap["AicMixcutTaskResultGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicMixcutTaskResultGetV30"]> {
    return this.execute("AicMixcutTaskResultGetV30", request, options);
  }

  /**
   * AicMixcutTaskSaveV30
   *
   * POST /open_api/v3.0/aic/mixcut_task/save/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmixcut_task%2Fsave%2F
   */
  aicMixcutTaskSaveV30(
    request: EndpointRequestMap["AicMixcutTaskSaveV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicMixcutTaskSaveV30"]> {
    return this.execute("AicMixcutTaskSaveV30", request, options);
  }

  /**
   * AicVideoMixcutCreateV30
   *
   * POST /open_api/v3.0/aic/video_mixcut/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fvideo_mixcut%2Fcreate%2F
   */
  aicVideoMixcutCreateV30(
    request: EndpointRequestMap["AicVideoMixcutCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AicVideoMixcutCreateV30"]> {
    return this.execute("AicVideoMixcutCreateV30", request, options);
  }

  /**
   * AnalyticsAttributionV30
   *
   * POST /open_api/v3.0/analytics/attribution/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fanalytics%2Fattribution%2F
   */
  analyticsAttributionV30(
    request: EndpointRequestMap["AnalyticsAttributionV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AnalyticsAttributionV30"]> {
    return this.execute("AnalyticsAttributionV30", request, options);
  }

  /**
   * 创建组件
   *
   * POST /open_api/2/assets/creative_component/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710672391183
   */
  assetsCreativeComponentCreateV2(
    request: EndpointRequestMap["AssetsCreativeComponentCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AssetsCreativeComponentCreateV2"]> {
    return this.execute("AssetsCreativeComponentCreateV2", request, options);
  }

  /**
   * 查询组件列表
   *
   * GET /open_api/2/assets/creative_component/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710673645580
   */
  assetsCreativeComponentGetV2(
    request: EndpointRequestMap["AssetsCreativeComponentGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AssetsCreativeComponentGetV2"]> {
    return this.execute("AssetsCreativeComponentGetV2", request, options);
  }

  /**
   * 更新组件
   *
   * POST /open_api/2/assets/creative_component/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710673083407
   */
  assetsCreativeComponentUpdateV2(
    request: EndpointRequestMap["AssetsCreativeComponentUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AssetsCreativeComponentUpdateV2"]> {
    return this.execute("AssetsCreativeComponentUpdateV2", request, options);
  }

  /**
   * AsyncTaskCreateV2
   *
   * POST /open_api/2/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fcreate%2F
   */
  asyncTaskCreateV2(
    request: EndpointRequestMap["AsyncTaskCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AsyncTaskCreateV2"]> {
    return this.execute("AsyncTaskCreateV2", request, options);
  }

  /**
   * AsyncTaskDownloadV2
   *
   * GET /open_api/2/async_task/download/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fdownload%2F
   */
  asyncTaskDownloadV2(
    request: EndpointRequestMap["AsyncTaskDownloadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AsyncTaskDownloadV2"]> {
    return this.execute("AsyncTaskDownloadV2", request, options);
  }

  /**
   * AsyncTaskGetV2
   *
   * GET /open_api/2/async_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fget%2F
   */
  asyncTaskGetV2(
    request: EndpointRequestMap["AsyncTaskGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AsyncTaskGetV2"]> {
    return this.execute("AsyncTaskGetV2", request, options);
  }

  /**
   * 定向包查询关联项目信息
   *
   * GET /open_api/v3.0/audience_package_bindinfo/get/
   * @see https://open.oceanengine.com/labels/7/docs/1815599949508922
   */
  audiencePackageBindinfoGetV30(
    request: EndpointRequestMap["AudiencePackageBindinfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AudiencePackageBindinfoGetV30"]> {
    return this.execute("AudiencePackageBindinfoGetV30", request, options);
  }

  /**
   * 创建定向包
   *
   * POST /open_api/2/audience_package/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710735901711
   */
  audiencePackageCreateV2(
    request: EndpointRequestMap["AudiencePackageCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AudiencePackageCreateV2"]> {
    return this.execute("AudiencePackageCreateV2", request, options);
  }

  /**
   * 删除定向包
   *
   * POST /open_api/2/audience_package/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710732991488
   */
  audiencePackageDeleteV2(
    request: EndpointRequestMap["AudiencePackageDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AudiencePackageDeleteV2"]> {
    return this.execute("AudiencePackageDeleteV2", request, options);
  }

  /**
   * 获取定向包
   *
   * GET /open_api/v3.0/audience_package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1815573577937932
   */
  audiencePackageGetV30(
    request: EndpointRequestMap["AudiencePackageGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AudiencePackageGetV30"]> {
    return this.execute("AudiencePackageGetV30", request, options);
  }

  /**
   * 更新定向包
   *
   * POST /open_api/2/audience_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710732349455
   */
  audiencePackageUpdateV2(
    request: EndpointRequestMap["AudiencePackageUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["AudiencePackageUpdateV2"]> {
    return this.execute("AudiencePackageUpdateV2", request, options);
  }

  /**
   * BrandActionCategoryV30
   *
   * GET /open_api/v3.0/brand/action_category/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Faction_category%2F
   */
  brandActionCategoryV30(
    request: EndpointRequestMap["BrandActionCategoryV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandActionCategoryV30"]> {
    return this.execute("BrandActionCategoryV30", request, options);
  }

  /**
   * BrandAdCancelDeleteV30
   *
   * POST /open_api/v3.0/brand/ad/cancel_delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fcancel_delete%2F
   */
  brandAdCancelDeleteV30(
    request: EndpointRequestMap["BrandAdCancelDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAdCancelDeleteV30"]> {
    return this.execute("BrandAdCancelDeleteV30", request, options);
  }

  /**
   * BrandAdDeleteV30
   *
   * POST /open_api/v3.0/brand/ad/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fdelete%2F
   */
  brandAdDeleteV30(
    request: EndpointRequestMap["BrandAdDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAdDeleteV30"]> {
    return this.execute("BrandAdDeleteV30", request, options);
  }

  /**
   * BrandAdGetV30
   *
   * GET /open_api/v3.0/brand/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fget%2F
   */
  brandAdGetV30(
    request: EndpointRequestMap["BrandAdGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAdGetV30"]> {
    return this.execute("BrandAdGetV30", request, options);
  }

  /**
   * BrandAdUpdateBaseInfoV30
   *
   * POST /open_api/v3.0/brand/ad/update_base_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fupdate_base_info%2F
   */
  brandAdUpdateBaseInfoV30(
    request: EndpointRequestMap["BrandAdUpdateBaseInfoV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAdUpdateBaseInfoV30"]> {
    return this.execute("BrandAdUpdateBaseInfoV30", request, options);
  }

  /**
   * BrandAdUpdateDeliveryInfoV30
   *
   * POST /open_api/v3.0/brand/ad/update_delivery_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fupdate_delivery_info%2F
   */
  brandAdUpdateDeliveryInfoV30(
    request: EndpointRequestMap["BrandAdUpdateDeliveryInfoV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAdUpdateDeliveryInfoV30"]> {
    return this.execute("BrandAdUpdateDeliveryInfoV30", request, options);
  }

  /**
   * BrandAnchorListV30
   *
   * GET /open_api/v3.0/brand/anchor/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fanchor%2Flist%2F
   */
  brandAnchorListV30(
    request: EndpointRequestMap["BrandAnchorListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAnchorListV30"]> {
    return this.execute("BrandAnchorListV30", request, options);
  }

  /**
   * BrandAwemeListV30
   *
   * GET /open_api/v3.0/brand/aweme_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Faweme_list%2F
   */
  brandAwemeListV30(
    request: EndpointRequestMap["BrandAwemeListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandAwemeListV30"]> {
    return this.execute("BrandAwemeListV30", request, options);
  }

  /**
   * BrandCampaignAddV30
   *
   * POST /open_api/v3.0/brand/campaign/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fadd%2F
   */
  brandCampaignAddV30(
    request: EndpointRequestMap["BrandCampaignAddV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignAddV30"]> {
    return this.execute("BrandCampaignAddV30", request, options);
  }

  /**
   * BrandCampaignDeleteV30
   *
   * POST /open_api/v3.0/brand/campaign/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fdelete%2F
   */
  brandCampaignDeleteV30(
    request: EndpointRequestMap["BrandCampaignDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignDeleteV30"]> {
    return this.execute("BrandCampaignDeleteV30", request, options);
  }

  /**
   * BrandCampaignEditV30
   *
   * POST /open_api/v3.0/brand/campaign/edit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fedit%2F
   */
  brandCampaignEditV30(
    request: EndpointRequestMap["BrandCampaignEditV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignEditV30"]> {
    return this.execute("BrandCampaignEditV30", request, options);
  }

  /**
   * BrandCampaignGetV30
   *
   * GET /open_api/v3.0/brand/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fget%2F
   */
  brandCampaignGetV30(
    request: EndpointRequestMap["BrandCampaignGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignGetV30"]> {
    return this.execute("BrandCampaignGetV30", request, options);
  }

  /**
   * BrandCampaignListV30
   *
   * GET /open_api/v3.0/brand/campaign/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Flist%2F
   */
  brandCampaignListV30(
    request: EndpointRequestMap["BrandCampaignListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignListV30"]> {
    return this.execute("BrandCampaignListV30", request, options);
  }

  /**
   * BrandCampaignModifyV30
   *
   * POST /open_api/v3.0/brand/campaign/modify/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fmodify%2F
   */
  brandCampaignModifyV30(
    request: EndpointRequestMap["BrandCampaignModifyV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignModifyV30"]> {
    return this.execute("BrandCampaignModifyV30", request, options);
  }

  /**
   * BrandCampaignOperateV30
   *
   * POST /open_api/v3.0/brand/campaign/operate/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Foperate%2F
   */
  brandCampaignOperateV30(
    request: EndpointRequestMap["BrandCampaignOperateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignOperateV30"]> {
    return this.execute("BrandCampaignOperateV30", request, options);
  }

  /**
   * BrandCampaignRemoveV30
   *
   * POST /open_api/v3.0/brand/campaign/remove/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fremove%2F
   */
  brandCampaignRemoveV30(
    request: EndpointRequestMap["BrandCampaignRemoveV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignRemoveV30"]> {
    return this.execute("BrandCampaignRemoveV30", request, options);
  }

  /**
   * BrandCampaignRevokeModifyV30
   *
   * POST /open_api/v3.0/brand/campaign/revoke_modify/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Frevoke_modify%2F
   */
  brandCampaignRevokeModifyV30(
    request: EndpointRequestMap["BrandCampaignRevokeModifyV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignRevokeModifyV30"]> {
    return this.execute("BrandCampaignRevokeModifyV30", request, options);
  }

  /**
   * BrandCampaignSubmitV30
   *
   * POST /open_api/v3.0/brand/campaign/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fsubmit%2F
   */
  brandCampaignSubmitV30(
    request: EndpointRequestMap["BrandCampaignSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignSubmitV30"]> {
    return this.execute("BrandCampaignSubmitV30", request, options);
  }

  /**
   * BrandCampaignUpdateV30
   *
   * POST /open_api/v3.0/brand/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fupdate%2F
   */
  brandCampaignUpdateV30(
    request: EndpointRequestMap["BrandCampaignUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCampaignUpdateV30"]> {
    return this.execute("BrandCampaignUpdateV30", request, options);
  }

  /**
   * BrandContractGetV30
   *
   * GET /open_api/v3.0/brand/contract/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcontract%2Fget%2F
   */
  brandContractGetV30(
    request: EndpointRequestMap["BrandContractGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandContractGetV30"]> {
    return this.execute("BrandContractGetV30", request, options);
  }

  /**
   * BrandCreativeCreateV30
   *
   * POST /open_api/v3.0/brand/creative/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fcreate%2F
   */
  brandCreativeCreateV30(
    request: EndpointRequestMap["BrandCreativeCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCreativeCreateV30"]> {
    return this.execute("BrandCreativeCreateV30", request, options);
  }

  /**
   * BrandCreativeDeleteV30
   *
   * POST /open_api/v3.0/brand/creative/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fdelete%2F
   */
  brandCreativeDeleteV30(
    request: EndpointRequestMap["BrandCreativeDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCreativeDeleteV30"]> {
    return this.execute("BrandCreativeDeleteV30", request, options);
  }

  /**
   * BrandCreativeGetV30
   *
   * GET /open_api/v3.0/brand/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fget%2F
   */
  brandCreativeGetV30(
    request: EndpointRequestMap["BrandCreativeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCreativeGetV30"]> {
    return this.execute("BrandCreativeGetV30", request, options);
  }

  /**
   * BrandCreativeUpdateV30
   *
   * POST /open_api/v3.0/brand/creative/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fupdate%2F
   */
  brandCreativeUpdateV30(
    request: EndpointRequestMap["BrandCreativeUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCreativeUpdateV30"]> {
    return this.execute("BrandCreativeUpdateV30", request, options);
  }

  /**
   * BrandCustomAudienceListV30
   *
   * GET /open_api/v3.0/brand/custom_audience/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcustom_audience%2Flist%2F
   */
  brandCustomAudienceListV30(
    request: EndpointRequestMap["BrandCustomAudienceListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandCustomAudienceListV30"]> {
    return this.execute("BrandCustomAudienceListV30", request, options);
  }

  /**
   * BrandFileVideoUploadV30
   *
   * POST /open_api/v3.0/brand/file/video/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ffile%2Fvideo%2Fupload%2F
   */
  brandFileVideoUploadV30(
    request: EndpointRequestMap["BrandFileVideoUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandFileVideoUploadV30"]> {
    return this.execute("BrandFileVideoUploadV30", request, options);
  }

  /**
   * BrandMaterialCreateV30
   *
   * POST /open_api/v3.0/brand/material/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Fcreate%2F
   */
  brandMaterialCreateV30(
    request: EndpointRequestMap["BrandMaterialCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandMaterialCreateV30"]> {
    return this.execute("BrandMaterialCreateV30", request, options);
  }

  /**
   * BrandMaterialListV30
   *
   * GET /open_api/v3.0/brand/material/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Flist%2F
   */
  brandMaterialListV30(
    request: EndpointRequestMap["BrandMaterialListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandMaterialListV30"]> {
    return this.execute("BrandMaterialListV30", request, options);
  }

  /**
   * BrandMaterialUpdateV30
   *
   * POST /open_api/v3.0/brand/material/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Fupdate%2F
   */
  brandMaterialUpdateV30(
    request: EndpointRequestMap["BrandMaterialUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandMaterialUpdateV30"]> {
    return this.execute("BrandMaterialUpdateV30", request, options);
  }

  /**
   * BrandOperationLogQueryV30
   *
   * GET /open_api/v3.0/brand/operation_log/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Foperation_log%2Fquery%2F
   */
  brandOperationLogQueryV30(
    request: EndpointRequestMap["BrandOperationLogQueryV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandOperationLogQueryV30"]> {
    return this.execute("BrandOperationLogQueryV30", request, options);
  }

  /**
   * BrandOrderCancelDeleteV30
   *
   * POST /open_api/v3.0/brand/order/cancel_delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fcancel_delete%2F
   */
  brandOrderCancelDeleteV30(
    request: EndpointRequestMap["BrandOrderCancelDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandOrderCancelDeleteV30"]> {
    return this.execute("BrandOrderCancelDeleteV30", request, options);
  }

  /**
   * BrandOrderCreateV30
   *
   * POST /open_api/v3.0/brand/order/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fcreate%2F
   */
  brandOrderCreateV30(
    request: EndpointRequestMap["BrandOrderCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandOrderCreateV30"]> {
    return this.execute("BrandOrderCreateV30", request, options);
  }

  /**
   * BrandOrderDeleteV30
   *
   * POST /open_api/v3.0/brand/order/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fdelete%2F
   */
  brandOrderDeleteV30(
    request: EndpointRequestMap["BrandOrderDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandOrderDeleteV30"]> {
    return this.execute("BrandOrderDeleteV30", request, options);
  }

  /**
   * BrandOrderListV30
   *
   * GET /open_api/v3.0/brand/order/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Flist%2F
   */
  brandOrderListV30(
    request: EndpointRequestMap["BrandOrderListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandOrderListV30"]> {
    return this.execute("BrandOrderListV30", request, options);
  }

  /**
   * BrandOrderUpdateV30
   *
   * POST /open_api/v3.0/brand/order/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fupdate%2F
   */
  brandOrderUpdateV30(
    request: EndpointRequestMap["BrandOrderUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandOrderUpdateV30"]> {
    return this.execute("BrandOrderUpdateV30", request, options);
  }

  /**
   * BrandPolicyListV30
   *
   * GET /open_api/v3.0/brand/policy/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fpolicy%2Flist%2F
   */
  brandPolicyListV30(
    request: EndpointRequestMap["BrandPolicyListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandPolicyListV30"]> {
    return this.execute("BrandPolicyListV30", request, options);
  }

  /**
   * BrandQueryStockV30
   *
   * GET /open_api/v3.0/brand/query_stock/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fquery_stock%2F
   */
  brandQueryStockV30(
    request: EndpointRequestMap["BrandQueryStockV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandQueryStockV30"]> {
    return this.execute("BrandQueryStockV30", request, options);
  }

  /**
   * BrandQueryYuntu5aBrandCategoryV30
   *
   * GET /open_api/v3.0/brand/query_yuntu_5a_brand_category/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fquery_yuntu_5a_brand_category%2F
   */
  brandQueryYuntu5aBrandCategoryV30(
    request: EndpointRequestMap["BrandQueryYuntu5aBrandCategoryV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandQueryYuntu5aBrandCategoryV30"]> {
    return this.execute("BrandQueryYuntu5aBrandCategoryV30", request, options);
  }

  /**
   * BrandRegionGetV30
   *
   * GET /open_api/v3.0/brand/region/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fregion%2Fget%2F
   */
  brandRegionGetV30(
    request: EndpointRequestMap["BrandRegionGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandRegionGetV30"]> {
    return this.execute("BrandRegionGetV30", request, options);
  }

  /**
   * BrandToolCreativePreviewV30
   *
   * GET /open_api/v3.0/brand/tool/creative_preview/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fcreative_preview%2F
   */
  brandToolCreativePreviewV30(
    request: EndpointRequestMap["BrandToolCreativePreviewV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandToolCreativePreviewV30"]> {
    return this.execute("BrandToolCreativePreviewV30", request, options);
  }

  /**
   * BrandToolMaterialPreviewV30
   *
   * GET /open_api/v3.0/brand/tool/material_preview/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fmaterial_preview%2F
   */
  brandToolMaterialPreviewV30(
    request: EndpointRequestMap["BrandToolMaterialPreviewV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandToolMaterialPreviewV30"]> {
    return this.execute("BrandToolMaterialPreviewV30", request, options);
  }

  /**
   * BrandToolQueryPublishPriceV30
   *
   * GET /open_api/v3.0/brand/tool/query_publish_price/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fquery_publish_price%2F
   */
  brandToolQueryPublishPriceV30(
    request: EndpointRequestMap["BrandToolQueryPublishPriceV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandToolQueryPublishPriceV30"]> {
    return this.execute("BrandToolQueryPublishPriceV30", request, options);
  }

  /**
   * BrandToolQueryStockBalanceV30
   *
   * GET /open_api/v3.0/brand/tool/query_stock_balance/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fquery_stock_balance%2F
   */
  brandToolQueryStockBalanceV30(
    request: EndpointRequestMap["BrandToolQueryStockBalanceV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandToolQueryStockBalanceV30"]> {
    return this.execute("BrandToolQueryStockBalanceV30", request, options);
  }

  /**
   * BrandUploadImageV30
   *
   * POST /open_api/v3.0/brand/upload_image/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fupload_image%2F
   */
  brandUploadImageV30(
    request: EndpointRequestMap["BrandUploadImageV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BrandUploadImageV30"]> {
    return this.execute("BrandUploadImageV30", request, options);
  }

  /**
   * 创建预算组
   *
   * POST /open_api/v3.0/budget_group/create/
   * @see https://open.oceanengine.com/labels/7/docs/1780159359081540
   */
  budgetGroupCreateV30(
    request: EndpointRequestMap["BudgetGroupCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BudgetGroupCreateV30"]> {
    return this.execute("BudgetGroupCreateV30", request, options);
  }

  /**
   * 批量删除预算组
   *
   * POST /open_api/v3.0/budget_group/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1780643886635008
   */
  budgetGroupDeleteV30(
    request: EndpointRequestMap["BudgetGroupDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BudgetGroupDeleteV30"]> {
    return this.execute("BudgetGroupDeleteV30", request, options);
  }

  /**
   * 获取预算组列表
   *
   * GET /open_api/v3.0/budget_group/list/
   * @see https://open.oceanengine.com/labels/7/docs/1780644067911818
   */
  budgetGroupListV30(
    request: EndpointRequestMap["BudgetGroupListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BudgetGroupListV30"]> {
    return this.execute("BudgetGroupListV30", request, options);
  }

  /**
   * 更新预算组
   *
   * POST /open_api/v3.0/budget_group/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780643450710028
   */
  budgetGroupUpdateV30(
    request: EndpointRequestMap["BudgetGroupUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BudgetGroupUpdateV30"]> {
    return this.execute("BudgetGroupUpdateV30", request, options);
  }

  /**
   * 获取主体下的账户列表
   *
   * GET /open_api/v3.0/business_platform/company_account/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741479196149775
   */
  businessPlatformCompanyAccountGetV30(
    request: EndpointRequestMap["BusinessPlatformCompanyAccountGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BusinessPlatformCompanyAccountGetV30"]> {
    return this.execute("BusinessPlatformCompanyAccountGetV30", request, options);
  }

  /**
   * 获取旧版巨量引擎工作台下主体信息
   *
   * GET /open_api/v3.0/business_platform/company_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741478619724813
   */
  businessPlatformCompanyInfoGetV30(
    request: EndpointRequestMap["BusinessPlatformCompanyInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BusinessPlatformCompanyInfoGetV30"]> {
    return this.execute("BusinessPlatformCompanyInfoGetV30", request, options);
  }

  /**
   * BusinessPlatformPartnerOrganizationListV2
   *
   * GET /open_api/2/business_platform/partner_organization/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fbusiness_platform%2Fpartner_organization%2Flist%2F
   */
  businessPlatformPartnerOrganizationListV2(
    request: EndpointRequestMap["BusinessPlatformPartnerOrganizationListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["BusinessPlatformPartnerOrganizationListV2"]> {
    return this.execute("BusinessPlatformPartnerOrganizationListV2", request, options);
  }

  /**
   * CampaignCreateV2
   *
   * POST /open_api/2/campaign/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fcreate%2F
   */
  campaignCreateV2(
    request: EndpointRequestMap["CampaignCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CampaignCreateV2"]> {
    return this.execute("CampaignCreateV2", request, options);
  }

  /**
   * CampaignGetV2
   *
   * GET /open_api/2/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fget%2F
   */
  campaignGetV2(
    request: EndpointRequestMap["CampaignGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CampaignGetV2"]> {
    return this.execute("CampaignGetV2", request, options);
  }

  /**
   * CampaignUpdateStatusV2
   *
   * POST /open_api/2/campaign/update/status/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fupdate%2Fstatus%2F
   */
  campaignUpdateStatusV2(
    request: EndpointRequestMap["CampaignUpdateStatusV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CampaignUpdateStatusV2"]> {
    return this.execute("CampaignUpdateStatusV2", request, options);
  }

  /**
   * CampaignUpdateV2
   *
   * POST /open_api/2/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fupdate%2F
   */
  campaignUpdateV2(
    request: EndpointRequestMap["CampaignUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CampaignUpdateV2"]> {
    return this.execute("CampaignUpdateV2", request, options);
  }

  /**
   * 获取同主体下客户图文素材
   *
   * GET /open_api/2/carousel/ad/get/
   * @see https://open.oceanengine.com/labels/7/docs/1773560989475840
   */
  carouselAdGetV2(
    request: EndpointRequestMap["CarouselAdGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CarouselAdGetV2"]> {
    return this.execute("CarouselAdGetV2", request, options);
  }

  /**
   * 上传图文
   *
   * POST /open_api/2/carousel/create/
   * @see https://open.oceanengine.com/labels/7/docs/1773552433235140
   */
  carouselCreateV2(
    request: EndpointRequestMap["CarouselCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CarouselCreateV2"]> {
    return this.execute("CarouselCreateV2", request, options);
  }

  /**
   * 批量删除图文
   *
   * POST /open_api/2/carousel/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1773561744826380
   */
  carouselDeleteV2(
    request: EndpointRequestMap["CarouselDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CarouselDeleteV2"]> {
    return this.execute("CarouselDeleteV2", request, options);
  }

  /**
   * 获取图文素材
   *
   * GET /open_api/2/carousel/list/
   * @see https://open.oceanengine.com/labels/7/docs/1773554026740736
   */
  carouselListV2(
    request: EndpointRequestMap["CarouselListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CarouselListV2"]> {
    return this.execute("CarouselListV2", request, options);
  }

  /**
   * 更新图文信息
   *
   * POST /open_api/2/carousel/update/
   * @see https://open.oceanengine.com/labels/7/docs/1773554529716228
   */
  carouselUpdateV2(
    request: EndpointRequestMap["CarouselUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CarouselUpdateV2"]> {
    return this.execute("CarouselUpdateV2", request, options);
  }

  /**
   * 获取关联云图的投放账户信息
   *
   * GET /open_api/v3.0/cdp/brand/get/
   * @see https://open.oceanengine.com/labels/7/docs/1768100113310735
   */
  cdpBrandGetV30(
    request: EndpointRequestMap["CdpBrandGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CdpBrandGetV30"]> {
    return this.execute("CdpBrandGetV30", request, options);
  }

  /**
   * 工作台转账-获取最大可转余额
   *
   * GET /open_api/v3.0/cg_transfer/can_transfer_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816052561374300
   */
  cgTransferCanTransferBalanceGetV30(
    request: EndpointRequestMap["CgTransferCanTransferBalanceGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferCanTransferBalanceGetV30"]> {
    return this.execute("CgTransferCanTransferBalanceGetV30", request, options);
  }

  /**
   * 工作台转账-获取可转列表
   *
   * GET /open_api/v3.0/cg_transfer/can_transfer_target/list/
   * @see https://open.oceanengine.com/labels/7/docs/1816052658391124
   */
  cgTransferCanTransferTargetListV30(
    request: EndpointRequestMap["CgTransferCanTransferTargetListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferCanTransferTargetListV30"]> {
    return this.execute("CgTransferCanTransferTargetListV30", request, options);
  }

  /**
   * 转账-发起转账（代理）
   *
   * POST /open_api/v3.0/cg_transfer/create_transfer/
   * @see https://open.oceanengine.com/labels/7/docs/1789755060558916
   */
  cgTransferCreateTransferV30(
    request: EndpointRequestMap["CgTransferCreateTransferV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferCreateTransferV30"]> {
    return this.execute("CgTransferCreateTransferV30", request, options);
  }

  /**
   * 转账-获取最大可转余额（代理）
   *
   * GET /open_api/v3.0/cg_transfer/query_can_transfer_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1789754975045699
   */
  cgTransferQueryCanTransferBalanceV30(
    request: EndpointRequestMap["CgTransferQueryCanTransferBalanceV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferQueryCanTransferBalanceV30"]> {
    return this.execute("CgTransferQueryCanTransferBalanceV30", request, options);
  }

  /**
   * 转账-查询账户转账余额（代理）
   *
   * GET /open_api/v3.0/cg_transfer/query_transfer_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1789754859486282
   */
  cgTransferQueryTransferBalanceV30(
    request: EndpointRequestMap["CgTransferQueryTransferBalanceV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferQueryTransferBalanceV30"]> {
    return this.execute("CgTransferQueryTransferBalanceV30", request, options);
  }

  /**
   * 转账-查询转账单信息（代理）
   *
   * GET /open_api/v3.0/cg_transfer/query_transfer_detail/
   * @see https://open.oceanengine.com/labels/7/docs/1789755120706634
   */
  cgTransferQueryTransferDetailV30(
    request: EndpointRequestMap["CgTransferQueryTransferDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferQueryTransferDetailV30"]> {
    return this.execute("CgTransferQueryTransferDetailV30", request, options);
  }

  /**
   * 工作台转账-查询账户转账余额
   *
   * GET /open_api/v3.0/cg_transfer/transfer_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816052431206464
   */
  cgTransferTransferBalanceGetV30(
    request: EndpointRequestMap["CgTransferTransferBalanceGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferTransferBalanceGetV30"]> {
    return this.execute("CgTransferTransferBalanceGetV30", request, options);
  }

  /**
   * 工作台转账-发起转账
   *
   * POST /open_api/v3.0/cg_transfer/transfer/create/
   * @see https://open.oceanengine.com/labels/7/docs/1816052723776516
   */
  cgTransferTransferCreateV30(
    request: EndpointRequestMap["CgTransferTransferCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferTransferCreateV30"]> {
    return this.execute("CgTransferTransferCreateV30", request, options);
  }

  /**
   * 工作台转账-查询转账单信息
   *
   * GET /open_api/v3.0/cg_transfer/transfer_detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816052335753539
   */
  cgTransferTransferDetailGetV30(
    request: EndpointRequestMap["CgTransferTransferDetailGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferTransferDetailGetV30"]> {
    return this.execute("CgTransferTransferDetailGetV30", request, options);
  }

  /**
   * 资金共享-最大可转余额查询
   *
   * GET /open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1799667820221452
   */
  cgTransferWalletTransferCanTransferBalanceV30(
    request: EndpointRequestMap["CgTransferWalletTransferCanTransferBalanceV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferWalletTransferCanTransferBalanceV30"]> {
    return this.execute("CgTransferWalletTransferCanTransferBalanceV30", request, options);
  }

  /**
   * 资金共享-发起转账
   *
   * POST /open_api/v3.0/cg_transfer/wallet/transfer/create/
   * @see https://open.oceanengine.com/labels/7/docs/1799669807408128
   */
  cgTransferWalletTransferCreateV30(
    request: EndpointRequestMap["CgTransferWalletTransferCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferWalletTransferCreateV30"]> {
    return this.execute("CgTransferWalletTransferCreateV30", request, options);
  }

  /**
   * 资金共享-查询转账单信息
   *
   * GET /open_api/v3.0/cg_transfer/wallet/transfer/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1799669496440960
   */
  cgTransferWalletTransferDetailV30(
    request: EndpointRequestMap["CgTransferWalletTransferDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferWalletTransferDetailV30"]> {
    return this.execute("CgTransferWalletTransferDetailV30", request, options);
  }

  /**
   * 资金共享-查询转账列表
   *
   * GET /open_api/v3.0/cg_transfer/wallet/transfer/list/
   * @see https://open.oceanengine.com/labels/7/docs/1799669722480836
   */
  cgTransferWalletTransferListV30(
    request: EndpointRequestMap["CgTransferWalletTransferListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CgTransferWalletTransferListV30"]> {
    return this.execute("CgTransferWalletTransferListV30", request, options);
  }

  /**
   * ChargeListV30
   *
   * GET /open_api/v3.0/charge/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcharge%2Flist%2F
   */
  chargeListV30(
    request: EndpointRequestMap["ChargeListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ChargeListV30"]> {
    return this.execute("ChargeListV30", request, options);
  }

  /**
   * 查询充值结果
   *
   * GET /open_api/v3.0/charge/result/
   * @see https://open.oceanengine.com/labels/7/docs/1831879601111308
   */
  chargeResultV30(
    request: EndpointRequestMap["ChargeResultV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ChargeResultV30"]> {
    return this.execute("ChargeResultV30", request, options);
  }

  /**
   * 投放账户充值校验
   *
   * GET /open_api/v3.0/charge/verify/get/
   * @see https://open.oceanengine.com/labels/7/docs/1855639332504666
   */
  chargeVerifyGetV30(
    request: EndpointRequestMap["ChargeVerifyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ChargeVerifyGetV30"]> {
    return this.execute("ChargeVerifyGetV30", request, options);
  }

  /**
   * ClueCaCreateV2
   *
   * POST /open_api/2/clue/ca/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Fcreate%2F
   */
  clueCaCreateV2(
    request: EndpointRequestMap["ClueCaCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCaCreateV2"]> {
    return this.execute("ClueCaCreateV2", request, options);
  }

  /**
   * ClueCaInterfaceCreateV2
   *
   * POST /open_api/2/clue/ca/interface/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Finterface%2Fcreate%2F
   */
  clueCaInterfaceCreateV2(
    request: EndpointRequestMap["ClueCaInterfaceCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCaInterfaceCreateV2"]> {
    return this.execute("ClueCaInterfaceCreateV2", request, options);
  }

  /**
   * ClueCaInterfaceUpdateV2
   *
   * POST /open_api/2/clue/ca/interface/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Finterface%2Fupdate%2F
   */
  clueCaInterfaceUpdateV2(
    request: EndpointRequestMap["ClueCaInterfaceUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCaInterfaceUpdateV2"]> {
    return this.execute("ClueCaInterfaceUpdateV2", request, options);
  }

  /**
   * ClueCaUpdateV2
   *
   * POST /open_api/2/clue/ca/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Fupdate%2F
   */
  clueCaUpdateV2(
    request: EndpointRequestMap["ClueCaUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCaUpdateV2"]> {
    return this.execute("ClueCaUpdateV2", request, options);
  }

  /**
   * 核销券码
   *
   * POST /open_api/2/clue/coupon/code/consume/
   * @see https://open.oceanengine.com/labels/7/docs/1696710641144847
   */
  clueCouponCodeConsumeV2(
    request: EndpointRequestMap["ClueCouponCodeConsumeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponCodeConsumeV2"]> {
    return this.execute("ClueCouponCodeConsumeV2", request, options);
  }

  /**
   * 查询券码记录
   *
   * GET /open_api/2/clue/coupon/code/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710640575488
   */
  clueCouponCodeGetV2(
    request: EndpointRequestMap["ClueCouponCodeGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponCodeGetV2"]> {
    return this.execute("ClueCouponCodeGetV2", request, options);
  }

  /**
   * 创建卡券
   *
   * POST /open_api/2/clue/coupon/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710637538316
   */
  clueCouponCreateV2(
    request: EndpointRequestMap["ClueCouponCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponCreateV2"]> {
    return this.execute("ClueCouponCreateV2", request, options);
  }

  /**
   * 获取卡券详情
   *
   * GET /open_api/2/clue/coupon/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1696710638772239
   */
  clueCouponDetailV2(
    request: EndpointRequestMap["ClueCouponDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponDetailV2"]> {
    return this.execute("ClueCouponDetailV2", request, options);
  }

  /**
   * 添加核销员
   *
   * POST /open_api/2/clue/coupon/employee/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710642258944
   */
  clueCouponEmployeeCreateV2(
    request: EndpointRequestMap["ClueCouponEmployeeCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponEmployeeCreateV2"]> {
    return this.execute("ClueCouponEmployeeCreateV2", request, options);
  }

  /**
   * 删除核销员
   *
   * POST /open_api/2/clue/coupon/employee/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710642825228
   */
  clueCouponEmployeeDeleteV2(
    request: EndpointRequestMap["ClueCouponEmployeeDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponEmployeeDeleteV2"]> {
    return this.execute("ClueCouponEmployeeDeleteV2", request, options);
  }

  /**
   * 查询核销员
   *
   * GET /open_api/2/clue/coupon/employee/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710641718284
   */
  clueCouponEmployeeGetV2(
    request: EndpointRequestMap["ClueCouponEmployeeGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponEmployeeGetV2"]> {
    return this.execute("ClueCouponEmployeeGetV2", request, options);
  }

  /**
   * 获取卡券列表
   *
   * GET /open_api/2/clue/coupon/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710639364108
   */
  clueCouponGetV2(
    request: EndpointRequestMap["ClueCouponGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponGetV2"]> {
    return this.execute("ClueCouponGetV2", request, options);
  }

  /**
   * 编辑卡券
   *
   * POST /open_api/2/clue/coupon/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710639943692
   */
  clueCouponUpdateV2(
    request: EndpointRequestMap["ClueCouponUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueCouponUpdateV2"]> {
    return this.execute("ClueCouponUpdateV2", request, options);
  }

  /**
   * 创建表单
   *
   * POST /open_api/2/clue/form/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710635254784
   */
  clueFormCreateV2(
    request: EndpointRequestMap["ClueFormCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueFormCreateV2"]> {
    return this.execute("ClueFormCreateV2", request, options);
  }

  /**
   * 删除表单
   *
   * POST /open_api/2/clue/form/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710636402700
   */
  clueFormDeleteV2(
    request: EndpointRequestMap["ClueFormDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueFormDeleteV2"]> {
    return this.execute("ClueFormDeleteV2", request, options);
  }

  /**
   * 获取表单详情
   *
   * GET /open_api/2/clue/form/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1696710634103823
   */
  clueFormDetailV2(
    request: EndpointRequestMap["ClueFormDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueFormDetailV2"]> {
    return this.execute("ClueFormDetailV2", request, options);
  }

  /**
   * 获取表单列表
   *
   * GET /open_api/2/clue/form/list/
   * @see https://open.oceanengine.com/labels/7/docs/1696710634663948
   */
  clueFormListV2(
    request: EndpointRequestMap["ClueFormListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueFormListV2"]> {
    return this.execute("ClueFormListV2", request, options);
  }

  /**
   * 更新表单
   *
   * POST /open_api/2/clue/form/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710635816975
   */
  clueFormUpdateV2(
    request: EndpointRequestMap["ClueFormUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueFormUpdateV2"]> {
    return this.execute("ClueFormUpdateV2", request, options);
  }

  /**
   * 创建智能电话
   *
   * POST /open_api/2/clue/smartphone/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710643975180
   */
  clueSmartphoneCreateV2(
    request: EndpointRequestMap["ClueSmartphoneCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueSmartphoneCreateV2"]> {
    return this.execute("ClueSmartphoneCreateV2", request, options);
  }

  /**
   * 删除智能电话
   *
   * POST /open_api/2/clue/smartphone/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710645145615
   */
  clueSmartphoneDeleteV2(
    request: EndpointRequestMap["ClueSmartphoneDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueSmartphoneDeleteV2"]> {
    return this.execute("ClueSmartphoneDeleteV2", request, options);
  }

  /**
   * 获取智能电话列表
   *
   * GET /open_api/2/clue/smartphone/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710644556812
   */
  clueSmartphoneGetV2(
    request: EndpointRequestMap["ClueSmartphoneGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueSmartphoneGetV2"]> {
    return this.execute("ClueSmartphoneGetV2", request, options);
  }

  /**
   * 查询智能电话拨打记录
   *
   * GET /open_api/2/clue/smartphone/record/
   * @see https://open.oceanengine.com/labels/7/docs/1696710645723148
   */
  clueSmartphoneRecordV2(
    request: EndpointRequestMap["ClueSmartphoneRecordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueSmartphoneRecordV2"]> {
    return this.execute("ClueSmartphoneRecordV2", request, options);
  }

  /**
   * ClueWechatDataGetV2
   *
   * GET /open_api/2/clue/wechat_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fwechat_data%2Fget%2F
   */
  clueWechatDataGetV2(
    request: EndpointRequestMap["ClueWechatDataGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueWechatDataGetV2"]> {
    return this.execute("ClueWechatDataGetV2", request, options);
  }

  /**
   * 获取微信号码包详情
   *
   * GET /open_api/2/clue/wechat_instance/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1738854514506759
   */
  clueWechatInstanceDetailV2(
    request: EndpointRequestMap["ClueWechatInstanceDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueWechatInstanceDetailV2"]> {
    return this.execute("ClueWechatInstanceDetailV2", request, options);
  }

  /**
   * 获取微信号码包列表
   *
   * GET /open_api/2/clue/wechat_instance/list/
   * @see https://open.oceanengine.com/labels/7/docs/1738854779841614
   */
  clueWechatInstanceListV2(
    request: EndpointRequestMap["ClueWechatInstanceListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueWechatInstanceListV2"]> {
    return this.execute("ClueWechatInstanceListV2", request, options);
  }

  /**
   * 更新微信号码包
   *
   * POST /open_api/2/clue/wechat_instance/update/
   * @see https://open.oceanengine.com/labels/7/docs/1738854823266311
   */
  clueWechatInstanceUpdateV2(
    request: EndpointRequestMap["ClueWechatInstanceUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueWechatInstanceUpdateV2"]> {
    return this.execute("ClueWechatInstanceUpdateV2", request, options);
  }

  /**
   * 获取微信库微信号列表
   *
   * GET /open_api/2/clue/wechat_pool/list/
   * @see https://open.oceanengine.com/labels/7/docs/1738854207455240
   */
  clueWechatPoolListV2(
    request: EndpointRequestMap["ClueWechatPoolListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ClueWechatPoolListV2"]> {
    return this.execute("ClueWechatPoolListV2", request, options);
  }

  /**
   * CreateProjectInvoiceV2
   *
   * POST /open_api/2/create/project_invoice/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreate%2Fproject_invoice%2F
   */
  createProjectInvoiceV2(
    request: EndpointRequestMap["CreateProjectInvoiceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreateProjectInvoiceV2"]> {
    return this.execute("CreateProjectInvoiceV2", request, options);
  }

  /**
   * 开票-新建开票申请单（代理商版）
   *
   * POST /open_api/2/create/statement_invoice/
   * @see https://open.oceanengine.com/labels/7/docs/1806785904427155
   */
  createStatementInvoiceV2(
    request: EndpointRequestMap["CreateStatementInvoiceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreateStatementInvoiceV2"]> {
    return this.execute("CreateStatementInvoiceV2", request, options);
  }

  /**
   * CreateStatementV2
   *
   * POST /open_api/2/create/statement/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreate%2Fstatement%2F
   */
  createStatementV2(
    request: EndpointRequestMap["CreateStatementV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreateStatementV2"]> {
    return this.execute("CreateStatementV2", request, options);
  }

  /**
   * CreativeCustomCreativeCreateV2
   *
   * POST /open_api/2/creative/custom_creative/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fcustom_creative%2Fcreate%2F
   */
  creativeCustomCreativeCreateV2(
    request: EndpointRequestMap["CreativeCustomCreativeCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeCustomCreativeCreateV2"]> {
    return this.execute("CreativeCustomCreativeCreateV2", request, options);
  }

  /**
   * CreativeCustomCreativeUpdateV2
   *
   * POST /open_api/2/creative/custom_creative/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fcustom_creative%2Fupdate%2F
   */
  creativeCustomCreativeUpdateV2(
    request: EndpointRequestMap["CreativeCustomCreativeUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeCustomCreativeUpdateV2"]> {
    return this.execute("CreativeCustomCreativeUpdateV2", request, options);
  }

  /**
   * CreativeDetailGetV30
   *
   * GET /open_api/v3.0/creative/detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcreative%2Fdetail%2Fget%2F
   */
  creativeDetailGetV30(
    request: EndpointRequestMap["CreativeDetailGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeDetailGetV30"]> {
    return this.execute("CreativeDetailGetV30", request, options);
  }

  /**
   * CreativeGetV2
   *
   * GET /open_api/2/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fget%2F
   */
  creativeGetV2(
    request: EndpointRequestMap["CreativeGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeGetV2"]> {
    return this.execute("CreativeGetV2", request, options);
  }

  /**
   * CreativeProceduralCreativeCreateV2
   *
   * POST /open_api/2/creative/procedural_creative/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fprocedural_creative%2Fcreate%2F
   */
  creativeProceduralCreativeCreateV2(
    request: EndpointRequestMap["CreativeProceduralCreativeCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeProceduralCreativeCreateV2"]> {
    return this.execute("CreativeProceduralCreativeCreateV2", request, options);
  }

  /**
   * CreativeProceduralCreativeUpdateV2
   *
   * POST /open_api/2/creative/procedural_creative/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fprocedural_creative%2Fupdate%2F
   */
  creativeProceduralCreativeUpdateV2(
    request: EndpointRequestMap["CreativeProceduralCreativeUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeProceduralCreativeUpdateV2"]> {
    return this.execute("CreativeProceduralCreativeUpdateV2", request, options);
  }

  /**
   * CreativeRejectReasonV2
   *
   * GET /open_api/2/creative/reject_reason/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Freject_reason%2F
   */
  creativeRejectReasonV2(
    request: EndpointRequestMap["CreativeRejectReasonV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeRejectReasonV2"]> {
    return this.execute("CreativeRejectReasonV2", request, options);
  }

  /**
   * CreativeStrategyListV2
   *
   * GET /open_api/2/creative/strategy/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fstrategy%2Flist%2F
   */
  creativeStrategyListV2(
    request: EndpointRequestMap["CreativeStrategyListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CreativeStrategyListV2"]> {
    return this.execute("CreativeStrategyListV2", request, options);
  }

  /**
   * CustomerCenterAccountListV30
   *
   * GET /open_api/v3.0/customer_center/account/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcustomer_center%2Faccount%2Flist%2F
   */
  customerCenterAccountListV30(
    request: EndpointRequestMap["CustomerCenterAccountListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterAccountListV30"]> {
    return this.execute("CustomerCenterAccountListV30", request, options);
  }

  /**
   * CustomerCenterAccountOfflineListV30
   *
   * GET /open_api/v3.0/customer_center/account/offline_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcustomer_center%2Faccount%2Foffline_list%2F
   */
  customerCenterAccountOfflineListV30(
    request: EndpointRequestMap["CustomerCenterAccountOfflineListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterAccountOfflineListV30"]> {
    return this.execute("CustomerCenterAccountOfflineListV30", request, options);
  }

  /**
   * CustomerCenterAdvertiserCopyV2
   *
   * POST /open_api/2/customer_center/advertiser/copy/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Fadvertiser%2Fcopy%2F
   */
  customerCenterAdvertiserCopyV2(
    request: EndpointRequestMap["CustomerCenterAdvertiserCopyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterAdvertiserCopyV2"]> {
    return this.execute("CustomerCenterAdvertiserCopyV2", request, options);
  }

  /**
   * 获取旧版巨量引擎工作台下账户列表
   *
   * GET /open_api/2/customer_center/advertiser/list/
   * @see https://open.oceanengine.com/labels/7/docs/1696710520884224
   */
  customerCenterAdvertiserListV2(
    request: EndpointRequestMap["CustomerCenterAdvertiserListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterAdvertiserListV2"]> {
    return this.execute("CustomerCenterAdvertiserListV2", request, options);
  }

  /**
   * CustomerCenterAdvertiserTransferableListV2
   *
   * GET /open_api/2/customer_center/advertiser/transferable/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Fadvertiser%2Ftransferable%2Flist%2F
   */
  customerCenterAdvertiserTransferableListV2(
    request: EndpointRequestMap["CustomerCenterAdvertiserTransferableListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterAdvertiserTransferableListV2"]> {
    return this.execute("CustomerCenterAdvertiserTransferableListV2", request, options);
  }

  /**
   * CustomerCenterFundTransferSeqCommitV2
   *
   * POST /open_api/2/customer_center/fund/transfer_seq/commit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Ffund%2Ftransfer_seq%2Fcommit%2F
   */
  customerCenterFundTransferSeqCommitV2(
    request: EndpointRequestMap["CustomerCenterFundTransferSeqCommitV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterFundTransferSeqCommitV2"]> {
    return this.execute("CustomerCenterFundTransferSeqCommitV2", request, options);
  }

  /**
   * CustomerCenterFundTransferSeqCreateV2
   *
   * POST /open_api/2/customer_center/fund/transfer_seq/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Ffund%2Ftransfer_seq%2Fcreate%2F
   */
  customerCenterFundTransferSeqCreateV2(
    request: EndpointRequestMap["CustomerCenterFundTransferSeqCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["CustomerCenterFundTransferSeqCreateV2"]> {
    return this.execute("CustomerCenterFundTransferSeqCreateV2", request, options);
  }

  /**
   * DcdChargeSubmitV30
   *
   * POST /open_api/v3.0/dcd/charge/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdcd%2Fcharge%2Fsubmit%2F
   */
  dcdChargeSubmitV30(
    request: EndpointRequestMap["DcdChargeSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DcdChargeSubmitV30"]> {
    return this.execute("DcdChargeSubmitV30", request, options);
  }

  /**
   * 获取家装联盟卡券列表
   *
   * GET /open_api/v3.0/decoration/coupon/get/
   * @see https://open.oceanengine.com/labels/7/docs/1756248521099331
   */
  decorationCouponGetV30(
    request: EndpointRequestMap["DecorationCouponGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DecorationCouponGetV30"]> {
    return this.execute("DecorationCouponGetV30", request, options);
  }

  /**
   * Adv创建前测任务
   *
   * POST /open_api/2/diagnosis_task/adv/create/
   * @see https://open.oceanengine.com/labels/7/docs/1816971004339210
   */
  diagnosisTaskAdvCreateV2(
    request: EndpointRequestMap["DiagnosisTaskAdvCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DiagnosisTaskAdvCreateV2"]> {
    return this.execute("DiagnosisTaskAdvCreateV2", request, options);
  }

  /**
   * Adv轮询任务结果
   *
   * GET /open_api/2/diagnosis_task/adv/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816971088404715
   */
  diagnosisTaskAdvGetV2(
    request: EndpointRequestMap["DiagnosisTaskAdvGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DiagnosisTaskAdvGetV2"]> {
    return this.execute("DiagnosisTaskAdvGetV2", request, options);
  }

  /**
   * Adv获取任务列表
   *
   * GET /open_api/2/diagnosis_task/adv/list/
   * @see https://open.oceanengine.com/labels/7/docs/1816971069170691
   */
  diagnosisTaskAdvListV2(
    request: EndpointRequestMap["DiagnosisTaskAdvListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DiagnosisTaskAdvListV2"]> {
    return this.execute("DiagnosisTaskAdvListV2", request, options);
  }

  /**
   * 代理商创建前测任务
   *
   * POST /open_api/2/diagnosis_task/agent/create/
   * @see https://open.oceanengine.com/labels/7/docs/1816970745502732
   */
  diagnosisTaskAgentCreateV2(
    request: EndpointRequestMap["DiagnosisTaskAgentCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DiagnosisTaskAgentCreateV2"]> {
    return this.execute("DiagnosisTaskAgentCreateV2", request, options);
  }

  /**
   * 代理商轮询任务结果
   *
   * GET /open_api/2/diagnosis_task/agent/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816970934411355
   */
  diagnosisTaskAgentGetV2(
    request: EndpointRequestMap["DiagnosisTaskAgentGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DiagnosisTaskAgentGetV2"]> {
    return this.execute("DiagnosisTaskAgentGetV2", request, options);
  }

  /**
   * 代理商获取任务列表
   *
   * GET /open_api/2/diagnosis_task/agent/list/
   * @see https://open.oceanengine.com/labels/7/docs/1816970967050522
   */
  diagnosisTaskAgentListV2(
    request: EndpointRequestMap["DiagnosisTaskAgentListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DiagnosisTaskAgentListV2"]> {
    return this.execute("DiagnosisTaskAgentListV2", request, options);
  }

  /**
   * 获取投放账户关联云图账户信息
   *
   * GET /open_api/2/dmp/brand/get/
   * @see https://open.oceanengine.com/labels/7/docs/1729365568399363
   */
  dmpBrandGetV2(
    request: EndpointRequestMap["DmpBrandGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpBrandGetV2"]> {
    return this.execute("DmpBrandGetV2", request, options);
  }

  /**
   * 推送dmp人群包到云图账户
   *
   * POST /open_api/2/dmp/custom_audience/copy/
   * @see https://open.oceanengine.com/labels/7/docs/1729365642747908
   */
  dmpCustomAudienceCopyV2(
    request: EndpointRequestMap["DmpCustomAudienceCopyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpCustomAudienceCopyV2"]> {
    return this.execute("DmpCustomAudienceCopyV2", request, options);
  }

  /**
   * 删除人群包
   *
   * POST /open_api/2/dmp/custom_audience/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710572836879
   */
  dmpCustomAudienceDeleteV2(
    request: EndpointRequestMap["DmpCustomAudienceDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpCustomAudienceDeleteV2"]> {
    return this.execute("DmpCustomAudienceDeleteV2", request, options);
  }

  /**
   * 发布人群包
   *
   * POST /open_api/2/dmp/custom_audience/publish/
   * @see https://open.oceanengine.com/labels/7/docs/1696710571768844
   */
  dmpCustomAudiencePublishV2(
    request: EndpointRequestMap["DmpCustomAudiencePublishV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpCustomAudiencePublishV2"]> {
    return this.execute("DmpCustomAudiencePublishV2", request, options);
  }

  /**
   * 推送人群包
   *
   * POST /open_api/2/dmp/custom_audience/push_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1696710572311552
   */
  dmpCustomAudiencePushV2V2(
    request: EndpointRequestMap["DmpCustomAudiencePushV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpCustomAudiencePushV2V2"]> {
    return this.execute("DmpCustomAudiencePushV2V2", request, options);
  }

  /**
   * 人群包详细信息
   *
   * GET /open_api/2/dmp/custom_audience/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710571259916
   */
  dmpCustomAudienceReadV2(
    request: EndpointRequestMap["DmpCustomAudienceReadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpCustomAudienceReadV2"]> {
    return this.execute("DmpCustomAudienceReadV2", request, options);
  }

  /**
   * 人群包列表
   *
   * GET /open_api/2/dmp/custom_audience/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710570721295
   */
  dmpCustomAudienceSelectV2(
    request: EndpointRequestMap["DmpCustomAudienceSelectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpCustomAudienceSelectV2"]> {
    return this.execute("DmpCustomAudienceSelectV2", request, options);
  }

  /**
   * 数据源创建
   *
   * POST /open_api/2/dmp/data_source/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710569089024
   */
  dmpDataSourceCreateV2(
    request: EndpointRequestMap["DmpDataSourceCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpDataSourceCreateV2"]> {
    return this.execute("DmpDataSourceCreateV2", request, options);
  }

  /**
   * 数据源文件上传
   *
   * POST /open_api/2/dmp/data_source/file/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1696710568556544
   */
  dmpDataSourceFileUploadV2(
    request: EndpointRequestMap["DmpDataSourceFileUploadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpDataSourceFileUploadV2"]> {
    return this.execute("DmpDataSourceFileUploadV2", request, options);
  }

  /**
   * 数据源详细信息
   *
   * GET /open_api/2/dmp/data_source/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710570207247
   */
  dmpDataSourceReadV2(
    request: EndpointRequestMap["DmpDataSourceReadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpDataSourceReadV2"]> {
    return this.execute("DmpDataSourceReadV2", request, options);
  }

  /**
   * 数据源更新
   *
   * POST /open_api/2/dmp/data_source/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710569591823
   */
  dmpDataSourceUpdateV2(
    request: EndpointRequestMap["DmpDataSourceUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DmpDataSourceUpdateV2"]> {
    return this.execute("DmpDataSourceUpdateV2", request, options);
  }

  /**
   * 获取可投放视频列表
   *
   * GET /open_api/v3.0/douplus/optional_items/list/
   * @see https://open.oceanengine.com/labels/7/docs/1809885773454336
   */
  douplusOptionalItemsListV30(
    request: EndpointRequestMap["DouplusOptionalItemsListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOptionalItemsListV30"]> {
    return this.execute("DouplusOptionalItemsListV30", request, options);
  }

  /**
   * 获取视频可投放转化目标
   *
   * GET /open_api/v3.0/douplus/optional_targets/list/
   * @see https://open.oceanengine.com/labels/7/docs/1809880238014554
   */
  douplusOptionalTargetsListV30(
    request: EndpointRequestMap["DouplusOptionalTargetsListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOptionalTargetsListV30"]> {
    return this.execute("DouplusOptionalTargetsListV30", request, options);
  }

  /**
   * 终止订单接口
   *
   * POST /open_api/v3.0/douplus/order/close/
   * @see https://open.oceanengine.com/labels/7/docs/1794677923694601
   */
  douplusOrderCloseV30(
    request: EndpointRequestMap["DouplusOrderCloseV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOrderCloseV30"]> {
    return this.execute("DouplusOrderCloseV30", request, options);
  }

  /**
   * 创建订单接口
   *
   * POST /open_api/v3.0/douplus/order/create/
   * @see https://open.oceanengine.com/labels/7/docs/1794677902211227
   */
  douplusOrderCreateV30(
    request: EndpointRequestMap["DouplusOrderCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOrderCreateV30"]> {
    return this.execute("DouplusOrderCreateV30", request, options);
  }

  /**
   * 查询订单列表
   *
   * GET /open_api/v3.0/douplus/order/list/
   * @see https://open.oceanengine.com/labels/7/docs/1771736421276680
   */
  douplusOrderListV30(
    request: EndpointRequestMap["DouplusOrderListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOrderListV30"]> {
    return this.execute("DouplusOrderListV30", request, options);
  }

  /**
   * 续费DOU+订单接口
   *
   * POST /open_api/v3.0/douplus/order/renew/
   * @see https://open.oceanengine.com/labels/7/docs/1809885394723065
   */
  douplusOrderRenewV30(
    request: EndpointRequestMap["DouplusOrderRenewV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOrderRenewV30"]> {
    return this.execute("DouplusOrderRenewV30", request, options);
  }

  /**
   * 获取订单数据报表
   *
   * GET /open_api/v3.0/douplus/order/report/
   * @see https://open.oceanengine.com/labels/7/docs/1771739377034318
   */
  douplusOrderReportV30(
    request: EndpointRequestMap["DouplusOrderReportV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusOrderReportV30"]> {
    return this.execute("DouplusOrderReportV30", request, options);
  }

  /**
   * DouplusRtaGetInfoV30
   *
   * GET /open_api/v3.0/douplus/rta/get_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdouplus%2Frta%2Fget_info%2F
   */
  douplusRtaGetInfoV30(
    request: EndpointRequestMap["DouplusRtaGetInfoV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusRtaGetInfoV30"]> {
    return this.execute("DouplusRtaGetInfoV30", request, options);
  }

  /**
   * DouplusRtaSetScopeV30
   *
   * POST /open_api/v3.0/douplus/rta/set_scope/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdouplus%2Frta%2Fset_scope%2F
   */
  douplusRtaSetScopeV30(
    request: EndpointRequestMap["DouplusRtaSetScopeV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DouplusRtaSetScopeV30"]> {
    return this.execute("DouplusRtaSetScopeV30", request, options);
  }

  /**
   * DownloadStatementEsignFileV2
   *
   * GET /open_api/2/download/statement/esign_file/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdownload%2Fstatement%2Fesign_file%2F
   */
  downloadStatementEsignFileV2(
    request: EndpointRequestMap["DownloadStatementEsignFileV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DownloadStatementEsignFileV2"]> {
    return this.execute("DownloadStatementEsignFileV2", request, options);
  }

  /**
   * DownloadStatementV2
   *
   * GET /open_api/2/download/statement/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdownload%2Fstatement%2F
   */
  downloadStatementV2(
    request: EndpointRequestMap["DownloadStatementV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DownloadStatementV2"]> {
    return this.execute("DownloadStatementV2", request, options);
  }

  /**
   * 上传短剧剧目
   *
   * POST /open_api/v3.0/dpa/album/create/
   * @see https://open.oceanengine.com/labels/7/docs/1830808097554259
   */
  dpaAlbumCreateV30(
    request: EndpointRequestMap["DpaAlbumCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaAlbumCreateV30"]> {
    return this.execute("DpaAlbumCreateV30", request, options);
  }

  /**
   * 查询短剧可投状态
   *
   * GET /open_api/v3.0/dpa/album_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1830811308177048
   */
  dpaAlbumStatusGetV30(
    request: EndpointRequestMap["DpaAlbumStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaAlbumStatusGetV30"]> {
    return this.execute("DpaAlbumStatusGetV30", request, options);
  }

  /**
   * DpaAssetV2DetailReadV2
   *
   * POST /open_api/2/dpa/asset_v2/detail/read/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdpa%2Fasset_v2%2Fdetail%2Fread%2F
   */
  dpaAssetV2DetailReadV2(
    request: EndpointRequestMap["DpaAssetV2DetailReadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaAssetV2DetailReadV2"]> {
    return this.execute("DpaAssetV2DetailReadV2", request, options);
  }

  /**
   * 获取商品投放条件列表（线索版）
   *
   * POST /open_api/2/dpa/asset_v2/list/
   * @see https://open.oceanengine.com/labels/7/docs/1788119750912003
   */
  dpaAssetV2ListV2(
    request: EndpointRequestMap["DpaAssetV2ListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaAssetV2ListV2"]> {
    return this.execute("DpaAssetV2ListV2", request, options);
  }

  /**
   * 获取投放条件详情（通用版）
   *
   * GET /open_api/2/dpa/assets/detail/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710579664911
   */
  dpaAssetsDetailReadV2(
    request: EndpointRequestMap["DpaAssetsDetailReadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaAssetsDetailReadV2"]> {
    return this.execute("DpaAssetsDetailReadV2", request, options);
  }

  /**
   * 获取账户可投品牌列表
   *
   * GET /open_api/v3.0/dpa/brand/adv_auth/fuzzy/get/
   * @see https://open.oceanengine.com/labels/7/docs/1866516136873355
   */
  dpaBrandAdvAuthFuzzyGetV30(
    request: EndpointRequestMap["DpaBrandAdvAuthFuzzyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaBrandAdvAuthFuzzyGetV30"]> {
    return this.execute("DpaBrandAdvAuthFuzzyGetV30", request, options);
  }

  /**
   * 获取账户可用品牌行业信息
   *
   * GET /open_api/v3.0/dpa/brand/adv_auth/industry/get/
   * @see https://open.oceanengine.com/labels/7/docs/1866517384079625
   */
  dpaBrandAdvAuthIndustryGetV30(
    request: EndpointRequestMap["DpaBrandAdvAuthIndustryGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaBrandAdvAuthIndustryGetV30"]> {
    return this.execute("DpaBrandAdvAuthIndustryGetV30", request, options);
  }

  /**
   * DpaBrandFuzzyGetV30
   *
   * GET /open_api/v3.0/dpa/brand/fuzzy/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Fbrand%2Ffuzzy%2Fget%2F
   */
  dpaBrandFuzzyGetV30(
    request: EndpointRequestMap["DpaBrandFuzzyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaBrandFuzzyGetV30"]> {
    return this.execute("DpaBrandFuzzyGetV30", request, options);
  }

  /**
   * 获取DPA分类
   *
   * GET /open_api/2/dpa/category/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710580168716
   */
  dpaCategoryGetV2(
    request: EndpointRequestMap["DpaCategoryGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaCategoryGetV2"]> {
    return this.execute("DpaCategoryGetV2", request, options);
  }

  /**
   * DpaCheckIndexEntryProgressV2
   *
   * POST /open_api/2/dpa/check_index_entry_progress/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdpa%2Fcheck_index_entry_progress%2F
   */
  dpaCheckIndexEntryProgressV2(
    request: EndpointRequestMap["DpaCheckIndexEntryProgressV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaCheckIndexEntryProgressV2"]> {
    return this.execute("DpaCheckIndexEntryProgressV2", request, options);
  }

  /**
   * 删除升级版商品
   *
   * POST /open_api/2/dpa/clue_product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1817606743728155
   */
  dpaClueProductDeleteV2(
    request: EndpointRequestMap["DpaClueProductDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaClueProductDeleteV2"]> {
    return this.execute("DpaClueProductDeleteV2", request, options);
  }

  /**
   * 获取升级版商品详情
   *
   * GET /open_api/2/dpa/clue_product/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1779436000953415
   */
  dpaClueProductDetailV2(
    request: EndpointRequestMap["DpaClueProductDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaClueProductDetailV2"]> {
    return this.execute("DpaClueProductDetailV2", request, options);
  }

  /**
   * 获取升级版商品列表
   *
   * GET /open_api/2/dpa/clue_product/list/
   * @see https://open.oceanengine.com/labels/7/docs/1779430442685440
   */
  dpaClueProductListV2(
    request: EndpointRequestMap["DpaClueProductListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaClueProductListV2"]> {
    return this.execute("DpaClueProductListV2", request, options);
  }

  /**
   * 创建/编辑升级版商品
   *
   * POST /open_api/2/dpa/clue_product/save/
   * @see https://open.oceanengine.com/labels/7/docs/1802816766094363
   */
  dpaClueProductSaveV2(
    request: EndpointRequestMap["DpaClueProductSaveV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaClueProductSaveV2"]> {
    return this.execute("DpaClueProductSaveV2", request, options);
  }

  /**
   * 获取商品列表
   *
   * GET /open_api/2/dpa/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710578078732
   */
  dpaDetailGetV2(
    request: EndpointRequestMap["DpaDetailGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaDetailGetV2"]> {
    return this.execute("DpaDetailGetV2", request, options);
  }

  /**
   * 获取DPA词包
   *
   * GET /open_api/2/dpa/dict/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710580712463
   */
  dpaDictGetV2(
    request: EndpointRequestMap["DpaDictGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaDictGetV2"]> {
    return this.execute("DpaDictGetV2", request, options);
  }

  /**
   * 获取商品库DPA分类
   *
   * GET /open_api/v3.0/dpa/ebp/category/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846200236566720
   */
  dpaEbpCategoryGetV30(
    request: EndpointRequestMap["DpaEbpCategoryGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpCategoryGetV30"]> {
    return this.execute("DpaEbpCategoryGetV30", request, options);
  }

  /**
   * 删除升级版商品
   *
   * POST /open_api/v3.0/dpa/ebp/clue_product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1846200682152971
   */
  dpaEbpClueProductDeleteV30(
    request: EndpointRequestMap["DpaEbpClueProductDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpClueProductDeleteV30"]> {
    return this.execute("DpaEbpClueProductDeleteV30", request, options);
  }

  /**
   * 获取升级版商品详情
   *
   * GET /open_api/v3.0/dpa/ebp/clue_product/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846200329551114
   */
  dpaEbpClueProductGetV30(
    request: EndpointRequestMap["DpaEbpClueProductGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpClueProductGetV30"]> {
    return this.execute("DpaEbpClueProductGetV30", request, options);
  }

  /**
   * 获取升级版商品列表
   *
   * GET /open_api/v3.0/dpa/ebp/clue_product/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846200582278283
   */
  dpaEbpClueProductListV30(
    request: EndpointRequestMap["DpaEbpClueProductListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpClueProductListV30"]> {
    return this.execute("DpaEbpClueProductListV30", request, options);
  }

  /**
   * 升级版组织-创建/编辑升级版商品
   *
   * POST /open_api/v3.0/dpa/ebp/clue_product/save/
   * @see https://open.oceanengine.com/labels/7/docs/1846200828633995
   */
  dpaEbpClueProductSaveV30(
    request: EndpointRequestMap["DpaEbpClueProductSaveV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpClueProductSaveV30"]> {
    return this.execute("DpaEbpClueProductSaveV30", request, options);
  }

  /**
   * 获取商品库DPA词包
   *
   * GET /open_api/v3.0/dpa/ebp/dict/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846199586366875
   */
  dpaEbpDictGetV30(
    request: EndpointRequestMap["DpaEbpDictGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpDictGetV30"]> {
    return this.execute("DpaEbpDictGetV30", request, options);
  }

  /**
   * 获取商品库列表
   *
   * GET /open_api/v3.0/dpa/ebp/library/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846200555058186
   */
  dpaEbpLibraryListV30(
    request: EndpointRequestMap["DpaEbpLibraryListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpLibraryListV30"]> {
    return this.execute("DpaEbpLibraryListV30", request, options);
  }

  /**
   * DpaEbpMetaGetV30
   *
   * GET /open_api/v3.0/dpa/ebp/meta/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Febp%2Fmeta%2Fget%2F
   */
  dpaEbpMetaGetV30(
    request: EndpointRequestMap["DpaEbpMetaGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpMetaGetV30"]> {
    return this.execute("DpaEbpMetaGetV30", request, options);
  }

  /**
   * 查询短剧商品原片授权申请状态
   *
   * GET /open_api/v3.0/dpa/ebp/playlet/auth/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846199438930378
   */
  dpaEbpPlayletAuthGetV30(
    request: EndpointRequestMap["DpaEbpPlayletAuthGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpPlayletAuthGetV30"]> {
    return this.execute("DpaEbpPlayletAuthGetV30", request, options);
  }

  /**
   * 升级版组织-新建通用版商品
   *
   * POST /open_api/v3.0/dpa/ebp/product/create/
   * @see https://open.oceanengine.com/labels/7/docs/1846200859217482
   */
  dpaEbpProductCreateV30(
    request: EndpointRequestMap["DpaEbpProductCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpProductCreateV30"]> {
    return this.execute("DpaEbpProductCreateV30", request, options);
  }

  /**
   * 删除通用版商品
   *
   * POST /open_api/v3.0/dpa/ebp/product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1846200772027529
   */
  dpaEbpProductDeleteV30(
    request: EndpointRequestMap["DpaEbpProductDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpProductDeleteV30"]> {
    return this.execute("DpaEbpProductDeleteV30", request, options);
  }

  /**
   * 获取通用版商品详情
   *
   * GET /open_api/v3.0/dpa/ebp/product/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846200441152906
   */
  dpaEbpProductDetailGetV30(
    request: EndpointRequestMap["DpaEbpProductDetailGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpProductDetailGetV30"]> {
    return this.execute("DpaEbpProductDetailGetV30", request, options);
  }

  /**
   * 获取通用版商品列表
   *
   * GET /open_api/v3.0/dpa/ebp/product/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846200485909513
   */
  dpaEbpProductListV30(
    request: EndpointRequestMap["DpaEbpProductListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpProductListV30"]> {
    return this.execute("DpaEbpProductListV30", request, options);
  }

  /**
   * 批量修改DPA商品状态
   *
   * POST /open_api/v3.0/dpa/ebp/product_status/batch_update/
   * @see https://open.oceanengine.com/labels/7/docs/1846200705851659
   */
  dpaEbpProductStatusBatchUpdateV30(
    request: EndpointRequestMap["DpaEbpProductStatusBatchUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpProductStatusBatchUpdateV30"]> {
    return this.execute("DpaEbpProductStatusBatchUpdateV30", request, options);
  }

  /**
   * 升级版组织-编辑通用版商品
   *
   * POST /open_api/v3.0/dpa/ebp/product/update/
   * @see https://open.oceanengine.com/labels/7/docs/1846200800780617
   */
  dpaEbpProductUpdateV30(
    request: EndpointRequestMap["DpaEbpProductUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaEbpProductUpdateV30"]> {
    return this.execute("DpaEbpProductUpdateV30", request, options);
  }

  /**
   * 获取商品库元信息
   *
   * GET /open_api/2/dpa/meta/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710577566735
   */
  dpaMetaGetV2(
    request: EndpointRequestMap["DpaMetaGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaMetaGetV2"]> {
    return this.execute("DpaMetaGetV2", request, options);
  }

  /**
   * DpaOfflineProductBatchDeleteV30
   *
   * POST /open_api/v3.0/dpa/offline_product_batch/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Foffline_product_batch%2Fdelete%2F
   */
  dpaOfflineProductBatchDeleteV30(
    request: EndpointRequestMap["DpaOfflineProductBatchDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaOfflineProductBatchDeleteV30"]> {
    return this.execute("DpaOfflineProductBatchDeleteV30", request, options);
  }

  /**
   * 查询短剧商品原片授权申请状态
   *
   * GET /open_api/2/dpa/playlet/auth/get/
   * @see https://open.oceanengine.com/labels/7/docs/1805903150040128
   */
  dpaPlayletAuthGetV2(
    request: EndpointRequestMap["DpaPlayletAuthGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaPlayletAuthGetV2"]> {
    return this.execute("DpaPlayletAuthGetV2", request, options);
  }

  /**
   * 获取商品库信息
   *
   * GET /open_api/2/dpa/product/availables/
   * @see https://open.oceanengine.com/labels/7/docs/1696710577036288
   */
  dpaProductAvailablesV2(
    request: EndpointRequestMap["DpaProductAvailablesV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaProductAvailablesV2"]> {
    return this.execute("DpaProductAvailablesV2", request, options);
  }

  /**
   * 【新版】创建通用版商品（无商品id）
   *
   * POST /open_api/2/dpa/product/create/
   * @see https://open.oceanengine.com/labels/7/docs/1814331946951769
   */
  dpaProductCreateV2(
    request: EndpointRequestMap["DpaProductCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaProductCreateV2"]> {
    return this.execute("DpaProductCreateV2", request, options);
  }

  /**
   * 删除通用版商品
   *
   * POST /open_api/2/dpa/product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1726629070419968
   */
  dpaProductDeleteV2(
    request: EndpointRequestMap["DpaProductDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaProductDeleteV2"]> {
    return this.execute("DpaProductDeleteV2", request, options);
  }

  /**
   * 获取商品详情
   *
   * GET /open_api/2/dpa/product/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710578614272
   */
  dpaProductDetailGetV2(
    request: EndpointRequestMap["DpaProductDetailGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaProductDetailGetV2"]> {
    return this.execute("DpaProductDetailGetV2", request, options);
  }

  /**
   * 批量修改DPA商品状态
   *
   * POST /open_api/2/dpa/product_status/batch_update/
   * @see https://open.oceanengine.com/labels/7/docs/1726637930114048
   */
  dpaProductStatusBatchUpdateV2(
    request: EndpointRequestMap["DpaProductStatusBatchUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaProductStatusBatchUpdateV2"]> {
    return this.execute("DpaProductStatusBatchUpdateV2", request, options);
  }

  /**
   * 【新版】创建通用版商品（已有商品id）/修改通用版商品 
   *
   * POST /open_api/2/dpa/product/update/
   * @see https://open.oceanengine.com/labels/7/docs/1814241996290218
   */
  dpaProductUpdateV2(
    request: EndpointRequestMap["DpaProductUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaProductUpdateV2"]> {
    return this.execute("DpaProductUpdateV2", request, options);
  }

  /**
   * 获取DPA私有模板
   *
   * GET /open_api/2/dpa/template/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710581781519
   */
  dpaTemplateGetV2(
    request: EndpointRequestMap["DpaTemplateGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaTemplateGetV2"]> {
    return this.execute("DpaTemplateGetV2", request, options);
  }

  /**
   * 获取 DPA 商品库视频模板
   *
   * GET /open_api/2/dpa/video/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710582303744
   */
  dpaVideoGetV2(
    request: EndpointRequestMap["DpaVideoGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["DpaVideoGetV2"]> {
    return this.execute("DpaVideoGetV2", request, options);
  }

  /**
   * 获取升级版巨量引擎工作台下账户列表
   *
   * GET /open_api/2/ebp/advertiser/list/
   * @see https://open.oceanengine.com/labels/7/docs/1829550825614739
   */
  ebpAdvertiserListV2(
    request: EndpointRequestMap["EbpAdvertiserListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EbpAdvertiserListV2"]> {
    return this.execute("EbpAdvertiserListV2", request, options);
  }

  /**
   * 创建获取升级版巨量引擎工作台账户任务
   *
   * POST /open_api/2/ebp/advertiser/task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1829552494525707
   */
  ebpAdvertiserTaskCreateV2(
    request: EndpointRequestMap["EbpAdvertiserTaskCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EbpAdvertiserTaskCreateV2"]> {
    return this.execute("EbpAdvertiserTaskCreateV2", request, options);
  }

  /**
   * 下载获取升级版巨量引擎工作台账户任务结果
   *
   * GET /open_api/2/ebp/advertiser/task/download/
   * @see https://open.oceanengine.com/labels/7/docs/1829552986209882
   */
  ebpAdvertiserTaskDownloadV2(
    request: EndpointRequestMap["EbpAdvertiserTaskDownloadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EbpAdvertiserTaskDownloadV2"]> {
    return this.execute("EbpAdvertiserTaskDownloadV2", request, options);
  }

  /**
   * EbpAdvertiserTaskListV2
   *
   * GET /open_api/2/ebp/advertiser/task/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Febp%2Fadvertiser%2Ftask%2Flist%2F
   */
  ebpAdvertiserTaskListV2(
    request: EndpointRequestMap["EbpAdvertiserTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EbpAdvertiserTaskListV2"]> {
    return this.execute("EbpAdvertiserTaskListV2", request, options);
  }

  /**
   * 获取工作台组织关系（升级版）
   *
   * GET /open_api/2/ebp/level/get/
   * @see https://open.oceanengine.com/labels/7/docs/1829551362400384
   */
  ebpLevelGetV2(
    request: EndpointRequestMap["EbpLevelGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EbpLevelGetV2"]> {
    return this.execute("EbpLevelGetV2", request, options);
  }

  /**
   * EBP用户角色接口权限查询
   *
   * GET /open_api/2/ebp/role_permission/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872666215168064
   */
  ebpRolePermissionGetV2(
    request: EndpointRequestMap["EbpRolePermissionGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EbpRolePermissionGetV2"]> {
    return this.execute("EbpRolePermissionGetV2", request, options);
  }

  /**
   * 获取异常应用资产列表
   *
   * GET /open_api/v3.0/event_manager/abnormal_assets/get/
   * @see https://open.oceanengine.com/labels/7/docs/1823745189417120
   */
  eventManagerAbnormalAssetsGetV30(
    request: EndpointRequestMap["EventManagerAbnormalAssetsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAbnormalAssetsGetV30"]> {
    return this.execute("EventManagerAbnormalAssetsGetV30", request, options);
  }

  /**
   *  创建事件资产
   *
   * POST /open_api/2/event_manager/assets/create/
   * @see https://open.oceanengine.com/labels/7/docs/1850398228888576
   */
  eventManagerAssetsCreateV2(
    request: EndpointRequestMap["EventManagerAssetsCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAssetsCreateV2"]> {
    return this.execute("EventManagerAssetsCreateV2", request, options);
  }

  /**
   * EventManagerAuthAddPublicKeyV2
   *
   * POST /open_api/2/event_manager/auth/add_public_key/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fadd_public_key%2F
   */
  eventManagerAuthAddPublicKeyV2(
    request: EndpointRequestMap["EventManagerAuthAddPublicKeyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthAddPublicKeyV2"]> {
    return this.execute("EventManagerAuthAddPublicKeyV2", request, options);
  }

  /**
   * EventManagerAuthDelPublicKeyV2
   *
   * POST /open_api/2/event_manager/auth/del_public_key/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fdel_public_key%2F
   */
  eventManagerAuthDelPublicKeyV2(
    request: EndpointRequestMap["EventManagerAuthDelPublicKeyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthDelPublicKeyV2"]> {
    return this.execute("EventManagerAuthDelPublicKeyV2", request, options);
  }

  /**
   * EventManagerAuthDisableV2
   *
   * POST /open_api/2/event_manager/auth/disable/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fdisable%2F
   */
  eventManagerAuthDisableV2(
    request: EndpointRequestMap["EventManagerAuthDisableV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthDisableV2"]> {
    return this.execute("EventManagerAuthDisableV2", request, options);
  }

  /**
   * EventManagerAuthEnableV2
   *
   * POST /open_api/2/event_manager/auth/enable/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fenable%2F
   */
  eventManagerAuthEnableV2(
    request: EndpointRequestMap["EventManagerAuthEnableV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthEnableV2"]> {
    return this.execute("EventManagerAuthEnableV2", request, options);
  }

  /**
   * EventManagerAuthGetAllPublicKeysV2
   *
   * GET /open_api/2/event_manager/auth/get_all_public_keys/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_all_public_keys%2F
   */
  eventManagerAuthGetAllPublicKeysV2(
    request: EndpointRequestMap["EventManagerAuthGetAllPublicKeysV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthGetAllPublicKeysV2"]> {
    return this.execute("EventManagerAuthGetAllPublicKeysV2", request, options);
  }

  /**
   * EventManagerAuthGetAuthStatusV2
   *
   * GET /open_api/2/event_manager/auth/get_auth_status/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_auth_status%2F
   */
  eventManagerAuthGetAuthStatusV2(
    request: EndpointRequestMap["EventManagerAuthGetAuthStatusV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthGetAuthStatusV2"]> {
    return this.execute("EventManagerAuthGetAuthStatusV2", request, options);
  }

  /**
   * EventManagerAuthGetPublicKeyV2
   *
   * GET /open_api/2/event_manager/auth/get_public_key/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_public_key%2F
   */
  eventManagerAuthGetPublicKeyV2(
    request: EndpointRequestMap["EventManagerAuthGetPublicKeyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAuthGetPublicKeyV2"]> {
    return this.execute("EventManagerAuthGetPublicKeyV2", request, options);
  }

  /**
   * 获取可创建事件列表
   *
   * GET /open_api/2/event_manager/available_events/get/
   * @see https://open.oceanengine.com/labels/7/docs/1709793059412996
   */
  eventManagerAvailableEventsGetV2(
    request: EndpointRequestMap["EventManagerAvailableEventsGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerAvailableEventsGetV2"]> {
    return this.execute("EventManagerAvailableEventsGetV2", request, options);
  }

  /**
   * 标准项目下获取可用深度优化方式
   *
   * GET /open_api/v3.0/event_manager/dbt/get/
   * @see https://open.oceanengine.com/labels/7/docs/1865818869111811
   */
  eventManagerDbtGetV30(
    request: EndpointRequestMap["EventManagerDbtGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerDbtGetV30"]> {
    return this.execute("EventManagerDbtGetV30", request, options);
  }

  /**
   * 获取可用深度优化方式（营销投放升级版）
   *
   * GET /open_api/v3.0/event_manager/deep_bid_type/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754875889727563
   */
  eventManagerDeepBidTypeGetV30(
    request: EndpointRequestMap["EventManagerDeepBidTypeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerDeepBidTypeGetV30"]> {
    return this.execute("EventManagerDeepBidTypeGetV30", request, options);
  }

  /**
   * 获取资产下已创建事件列表
   *
   * GET /open_api/2/event_manager/event_configs/get/
   * @see https://open.oceanengine.com/labels/7/docs/1709793086075972
   */
  eventManagerEventConfigsGetV2(
    request: EndpointRequestMap["EventManagerEventConfigsGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerEventConfigsGetV2"]> {
    return this.execute("EventManagerEventConfigsGetV2", request, options);
  }

  /**
   * 资产下创建事件
   *
   * POST /open_api/2/event_manager/events/create/
   * @see https://open.oceanengine.com/labels/7/docs/1709792900524035
   */
  eventManagerEventsCreateV2(
    request: EndpointRequestMap["EventManagerEventsCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerEventsCreateV2"]> {
    return this.execute("EventManagerEventsCreateV2", request, options);
  }

  /**
   * 获取可用优化目标（巨量营销升级版）
   *
   * GET /open_api/v3.0/event_manager/optimized_goal/get_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1740944984250381
   */
  eventManagerOptimizedGoalGetV2V30(
    request: EndpointRequestMap["EventManagerOptimizedGoalGetV2V30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerOptimizedGoalGetV2V30"]> {
    return this.execute("EventManagerOptimizedGoalGetV2V30", request, options);
  }

  /**
   * 标准项目下获取可用优化目标
   *
   * GET /open_api/v3.0/event_manager/optimized_goal/get/
   * @see https://open.oceanengine.com/labels/7/docs/1865817103800970
   */
  eventManagerOptimizedGoalGetV30(
    request: EndpointRequestMap["EventManagerOptimizedGoalGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerOptimizedGoalGetV30"]> {
    return this.execute("EventManagerOptimizedGoalGetV30", request, options);
  }

  /**
   * 事件管理资产取消共享
   *
   * POST /open_api/v3.0/event_manager/share/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1738862469146628
   */
  eventManagerShareCancelV30(
    request: EndpointRequestMap["EventManagerShareCancelV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerShareCancelV30"]> {
    return this.execute("EventManagerShareCancelV30", request, options);
  }

  /**
   * 事件管理资产查看共享范围
   *
   * GET /open_api/v3.0/event_manager/share/get/
   * @see https://open.oceanengine.com/labels/7/docs/1738862504734731
   */
  eventManagerShareGetV30(
    request: EndpointRequestMap["EventManagerShareGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerShareGetV30"]> {
    return this.execute("EventManagerShareGetV30", request, options);
  }

  /**
   * 事件管理资产共享
   *
   * POST /open_api/v3.0/event_manager/share/
   * @see https://open.oceanengine.com/labels/7/docs/1738862409262084
   */
  eventManagerShareV30(
    request: EndpointRequestMap["EventManagerShareV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerShareV30"]> {
    return this.execute("EventManagerShareV30", request, options);
  }

  /**
   * 事件资产下创建监测链接组
   *
   * POST /open_api/2/event_manager/track_url/create/
   * @see https://open.oceanengine.com/labels/7/docs/1727898582816775
   */
  eventManagerTrackUrlCreateV2(
    request: EndpointRequestMap["EventManagerTrackUrlCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerTrackUrlCreateV2"]> {
    return this.execute("EventManagerTrackUrlCreateV2", request, options);
  }

  /**
   * 获取事件资产下的监测链接组
   *
   * GET /open_api/2/event_manager/track_url/get/
   * @see https://open.oceanengine.com/labels/7/docs/1727901957092365
   */
  eventManagerTrackUrlGetV2(
    request: EndpointRequestMap["EventManagerTrackUrlGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerTrackUrlGetV2"]> {
    return this.execute("EventManagerTrackUrlGetV2", request, options);
  }

  /**
   * 事件资产下更新监测链接组
   *
   * POST /open_api/2/event_manager/track_url/update/
   * @see https://open.oceanengine.com/labels/7/docs/1727899035395079
   */
  eventManagerTrackUrlUpdateV2(
    request: EndpointRequestMap["EventManagerTrackUrlUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["EventManagerTrackUrlUpdateV2"]> {
    return this.execute("EventManagerTrackUrlUpdateV2", request, options);
  }

  /**
   * 上传图文内的音频素材
   *
   * POST /open_api/2/file/audio/ad/
   * @see https://open.oceanengine.com/labels/7/docs/1780005237921792
   */
  fileAudioAdV2(
    request: EndpointRequestMap["FileAudioAdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileAudioAdV2"]> {
    return this.execute("FileAudioAdV2", request, options);
  }

  /**
   * 获取音频素材（用于图文新建）
   *
   * GET /open_api/2/file/audio/get/
   * @see https://open.oceanengine.com/labels/7/docs/1797569167671364
   */
  fileAudioGetV2(
    request: EndpointRequestMap["FileAudioGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileAudioGetV2"]> {
    return this.execute("FileAudioGetV2", request, options);
  }

  /**
   * FileAutoGenerateSourceGetV2
   *
   * GET /open_api/2/file/auto_generate_source/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ffile%2Fauto_generate_source%2Fget%2F
   */
  fileAutoGenerateSourceGetV2(
    request: EndpointRequestMap["FileAutoGenerateSourceGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileAutoGenerateSourceGetV2"]> {
    return this.execute("FileAutoGenerateSourceGetV2", request, options);
  }

  /**
   * 获取创编可用的抖音图文素材
   *
   * GET /open_api/v3.0/file/carousel/aweme/get/
   * @see https://open.oceanengine.com/labels/7/docs/1812353010729227
   */
  fileCarouselAwemeGetV30(
    request: EndpointRequestMap["FileCarouselAwemeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileCarouselAwemeGetV30"]> {
    return this.execute("FileCarouselAwemeGetV30", request, options);
  }

  /**
   * 获取账户可用的组织视频列表
   *
   * GET /open_api/v3.0/file/ebp_video/get/
   * @see https://open.oceanengine.com/labels/7/docs/1847847898159115
   */
  fileEbpVideoGetV30(
    request: EndpointRequestMap["FileEbpVideoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileEbpVideoGetV30"]> {
    return this.execute("FileEbpVideoGetV30", request, options);
  }

  /**
   * 获取同主体下客户图片素材
   *
   * GET /open_api/2/file/image/ad/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710602952719
   */
  fileImageAdGetV2(
    request: EndpointRequestMap["FileImageAdGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileImageAdGetV2"]> {
    return this.execute("FileImageAdGetV2", request, options);
  }

  /**
   * 上传广告图片
   *
   * POST /open_api/2/file/image/ad/
   * @see https://open.oceanengine.com/labels/7/docs/1696710600176640
   */
  fileImageAdV2(
    request: EndpointRequestMap["FileImageAdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileImageAdV2"]> {
    return this.execute("FileImageAdV2", request, options);
  }

  /**
   * 上传资质图片
   *
   * POST /open_api/2/file/image/advertiser/
   * @see https://open.oceanengine.com/labels/7/docs/1696710599659532
   */
  fileImageAdvertiserV2(
    request: EndpointRequestMap["FileImageAdvertiserV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileImageAdvertiserV2"]> {
    return this.execute("FileImageAdvertiserV2", request, options);
  }

  /**
   * 批量删除图片素材
   *
   * POST /open_api/v3.0/file/image/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1761577471849479
   */
  fileImageDeleteV30(
    request: EndpointRequestMap["FileImageDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileImageDeleteV30"]> {
    return this.execute("FileImageDeleteV30", request, options);
  }

  /**
   * 获取图片素材
   *
   * GET /open_api/2/file/image/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710601254912
   */
  fileImageGetV2(
    request: EndpointRequestMap["FileImageGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileImageGetV2"]> {
    return this.execute("FileImageGetV2", request, options);
  }

  /**
   * FileIncentivePolicyBaseInfoGetV2
   *
   * GET /open_api/2/file/incentive_policy_base_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ffile%2Fincentive_policy_base_info%2Fget%2F
   */
  fileIncentivePolicyBaseInfoGetV2(
    request: EndpointRequestMap["FileIncentivePolicyBaseInfoGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileIncentivePolicyBaseInfoGetV2"]> {
    return this.execute("FileIncentivePolicyBaseInfoGetV2", request, options);
  }

  /**
   * 获取视频素材评估标签（新版）
   *
   * GET /open_api/2/file/material_attributes/list/
   * @see https://open.oceanengine.com/labels/7/docs/1789500809829388
   */
  fileMaterialAttributesListV2(
    request: EndpointRequestMap["FileMaterialAttributesListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileMaterialAttributesListV2"]> {
    return this.execute("FileMaterialAttributesListV2", request, options);
  }

  /**
   * 素材推送
   *
   * POST /open_api/2/file/material/bind/
   * @see https://open.oceanengine.com/labels/7/docs/1696710604852236
   */
  fileMaterialBindV2(
    request: EndpointRequestMap["FileMaterialBindV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileMaterialBindV2"]> {
    return this.execute("FileMaterialBindV2", request, options);
  }

  /**
   * 查询素材标签信息
   *
   * GET /open_api/2/file/material/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1763768835703812
   */
  fileMaterialDetailV2(
    request: EndpointRequestMap["FileMaterialDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileMaterialDetailV2"]> {
    return this.execute("FileMaterialDetailV2", request, options);
  }

  /**
   * 获取素材标签列表
   *
   * GET /open_api/2/file/material/list/
   * @see https://open.oceanengine.com/labels/7/docs/1761499216182279
   */
  fileMaterialListV2(
    request: EndpointRequestMap["FileMaterialListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileMaterialListV2"]> {
    return this.execute("FileMaterialListV2", request, options);
  }

  /**
   * 上传试玩/直玩素材
   *
   * POST /open_api/v3.0/file/playable/create/
   * @see https://open.oceanengine.com/labels/7/docs/1836623015076167
   */
  filePlayableCreateV30(
    request: EndpointRequestMap["FilePlayableCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FilePlayableCreateV30"]> {
    return this.execute("FilePlayableCreateV30", request, options);
  }

  /**
   * 获取试玩/直玩素材列表
   *
   * GET /open_api/v3.0/file/playable/list/
   * @see https://open.oceanengine.com/labels/7/docs/1836615534374475
   */
  filePlayableListV30(
    request: EndpointRequestMap["FilePlayableListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FilePlayableListV30"]> {
    return this.execute("FilePlayableListV30", request, options);
  }

  /**
   * FilePreauditGetV30
   *
   * GET /open_api/v3.0/file/preaudit/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fpreaudit%2Fget%2F
   */
  filePreauditGetV30(
    request: EndpointRequestMap["FilePreauditGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FilePreauditGetV30"]> {
    return this.execute("FilePreauditGetV30", request, options);
  }

  /**
   * FilePreauditSubmitV30
   *
   * POST /open_api/v3.0/file/preaudit/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fpreaudit%2Fsubmit%2F
   */
  filePreauditSubmitV30(
    request: EndpointRequestMap["FilePreauditSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FilePreauditSubmitV30"]> {
    return this.execute("FilePreauditSubmitV30", request, options);
  }

  /**
   * FileQualityGetV30
   *
   * GET /open_api/v3.0/file/quality/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fquality%2Fget%2F
   */
  fileQualityGetV30(
    request: EndpointRequestMap["FileQualityGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileQualityGetV30"]> {
    return this.execute("FileQualityGetV30", request, options);
  }

  /**
   * FileQualitySubmitV30
   *
   * POST /open_api/v3.0/file/quality/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fquality%2Fsubmit%2F
   */
  fileQualitySubmitV30(
    request: EndpointRequestMap["FileQualitySubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileQualitySubmitV30"]> {
    return this.execute("FileQualitySubmitV30", request, options);
  }

  /**
   * 【代理返点】创建下载任务-返点(素材)
   *
   * POST /open_api/2/file/rebate/common_download/create_task/
   * @see https://open.oceanengine.com/labels/7/docs/1819289415886986
   */
  fileRebateCommonDownloadCreateTaskV2(
    request: EndpointRequestMap["FileRebateCommonDownloadCreateTaskV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileRebateCommonDownloadCreateTaskV2"]> {
    return this.execute("FileRebateCommonDownloadCreateTaskV2", request, options);
  }

  /**
   * 【代理返点】下载任务结果-通用
   *
   * GET /open_api/2/file/rebate/common_download/download_file/
   * @see https://open.oceanengine.com/labels/7/docs/1818838139772251
   */
  fileRebateCommonDownloadDownloadFileV2(
    request: EndpointRequestMap["FileRebateCommonDownloadDownloadFileV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileRebateCommonDownloadDownloadFileV2"]> {
    return this.execute("FileRebateCommonDownloadDownloadFileV2", request, options);
  }

  /**
   * 【代理返点】查询下载任务-通用
   *
   * GET /open_api/2/file/rebate/common_download/get_download_task_list/
   * @see https://open.oceanengine.com/labels/7/docs/1818837922277385
   */
  fileRebateCommonDownloadGetDownloadTaskListV2(
    request: EndpointRequestMap["FileRebateCommonDownloadGetDownloadTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileRebateCommonDownloadGetDownloadTaskListV2"]> {
    return this.execute("FileRebateCommonDownloadGetDownloadTaskListV2", request, options);
  }

  /**
   *  【代理返点】创建下载任务-返点(非素材)&激励
   *
   * POST /open_api/2/file/rebate/rebate_download/create_task/
   * @see https://open.oceanengine.com/labels/7/docs/1812970751420483
   */
  fileRebateRebateDownloadCreateTaskV2(
    request: EndpointRequestMap["FileRebateRebateDownloadCreateTaskV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileRebateRebateDownloadCreateTaskV2"]> {
    return this.execute("FileRebateRebateDownloadCreateTaskV2", request, options);
  }

  /**
   * 异步上传视频文件
   *
   * POST /open_api/2/file/upload_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1801533703648324
   */
  fileUploadTaskCreateV2(
    request: EndpointRequestMap["FileUploadTaskCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileUploadTaskCreateV2"]> {
    return this.execute("FileUploadTaskCreateV2", request, options);
  }

  /**
   * 获取同主体下客户视频素材
   *
   * GET /open_api/2/file/video/ad/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710603509772
   */
  fileVideoAdGetV2(
    request: EndpointRequestMap["FileVideoAdGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoAdGetV2"]> {
    return this.execute("FileVideoAdGetV2", request, options);
  }

  /**
   * 上传视频
   *
   * POST /open_api/2/file/video/ad/
   * @see https://open.oceanengine.com/labels/7/docs/1696710600730639
   */
  fileVideoAdV2(
    request: EndpointRequestMap["FileVideoAdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoAdV2"]> {
    return this.execute("FileVideoAdV2", request, options);
  }

  /**
   * 代理商获取视频素材
   *
   * GET /open_api/2/file/video/agent/get/
   * @see https://open.oceanengine.com/labels/7/docs/1827197414504772
   */
  fileVideoAgentGetV2(
    request: EndpointRequestMap["FileVideoAgentGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoAgentGetV2"]> {
    return this.execute("FileVideoAgentGetV2", request, options);
  }

  /**
   * 【代理商】上传自产首发素材至方舟（搬运治理）
   *
   * POST /open_api/2/file/video/agent/
   * @see https://open.oceanengine.com/labels/7/docs/1792582253929536
   */
  fileVideoAgentV2(
    request: EndpointRequestMap["FileVideoAgentV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoAgentV2"]> {
    return this.execute("FileVideoAgentV2", request, options);
  }

  /**
   * 获取抖音主页视频
   *
   * GET /open_api/2/file/video/aweme/get/
   * @see https://open.oceanengine.com/labels/7/docs/1729982871844879
   */
  fileVideoAwemeGetV2(
    request: EndpointRequestMap["FileVideoAwemeGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoAwemeGetV2"]> {
    return this.execute("FileVideoAwemeGetV2", request, options);
  }

  /**
   * 批量删除视频素材
   *
   * POST /open_api/2/file/video/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710605373455
   */
  fileVideoDeleteV2(
    request: EndpointRequestMap["FileVideoDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoDeleteV2"]> {
    return this.execute("FileVideoDeleteV2", request, options);
  }

  /**
   * 获取低效素材
   *
   * GET /open_api/2/file/video/efficiency/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733880964883467
   */
  fileVideoEfficiencyGetV2(
    request: EndpointRequestMap["FileVideoEfficiencyGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoEfficiencyGetV2"]> {
    return this.execute("FileVideoEfficiencyGetV2", request, options);
  }

  /**
   * 获取视频素材
   *
   * GET /open_api/2/file/video/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710601820172
   */
  fileVideoGetV2(
    request: EndpointRequestMap["FileVideoGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoGetV2"]> {
    return this.execute("FileVideoGetV2", request, options);
  }

  /**
   * 创建素材清理任务
   *
   * POST /open_api/2/file/video/material/clear_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1764209655140366
   */
  fileVideoMaterialClearTaskCreateV2(
    request: EndpointRequestMap["FileVideoMaterialClearTaskCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoMaterialClearTaskCreateV2"]> {
    return this.execute("FileVideoMaterialClearTaskCreateV2", request, options);
  }

  /**
   * 获取清理任务列表
   *
   * GET /open_api/2/file/video/material/clear_task/get/
   * @see https://open.oceanengine.com/labels/7/docs/1764210394714119
   */
  fileVideoMaterialClearTaskGetV2(
    request: EndpointRequestMap["FileVideoMaterialClearTaskGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoMaterialClearTaskGetV2"]> {
    return this.execute("FileVideoMaterialClearTaskGetV2", request, options);
  }

  /**
   * 下载清理任务结果
   *
   * GET /open_api/2/file/video/material/clear_task_result/get/
   * @see https://open.oceanengine.com/labels/7/docs/1764216974179400
   */
  fileVideoMaterialClearTaskResultGetV2(
    request: EndpointRequestMap["FileVideoMaterialClearTaskResultGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoMaterialClearTaskResultGetV2"]> {
    return this.execute("FileVideoMaterialClearTaskResultGetV2", request, options);
  }

  /**
   * 【代理商】批量暂停明点无效素材
   *
   * POST /open_api/2/file/video/pause/
   * @see https://open.oceanengine.com/labels/7/docs/1779985717273613
   */
  fileVideoPauseV2(
    request: EndpointRequestMap["FileVideoPauseV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoPauseV2"]> {
    return this.execute("FileVideoPauseV2", request, options);
  }

  /**
   * 更新视频
   *
   * POST /open_api/2/file/video/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710605909004
   */
  fileVideoUpdateV2(
    request: EndpointRequestMap["FileVideoUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoUpdateV2"]> {
    return this.execute("FileVideoUpdateV2", request, options);
  }

  /**
   * 获取异步上传视频文件结果
   *
   * GET /open_api/2/file/video/upload_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1801544428603604
   */
  fileVideoUploadTaskListV2(
    request: EndpointRequestMap["FileVideoUploadTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FileVideoUploadTaskListV2"]> {
    return this.execute("FileVideoUploadTaskListV2", request, options);
  }

  /**
   * 投放账户查询汇款码列表
   *
   * GET /open_api/v3.0/fix_remittance_code/list/get/
   * @see https://open.oceanengine.com/labels/7/docs/1860068101111872
   */
  fixRemittanceCodeListGetV30(
    request: EndpointRequestMap["FixRemittanceCodeListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FixRemittanceCodeListGetV30"]> {
    return this.execute("FixRemittanceCodeListGetV30", request, options);
  }

  /**
   * 获取返货共享钱包余额
   *
   * GET /open_api/2/fund/shared_wallet_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1703323812831239
   */
  fundSharedWalletBalanceGetV2(
    request: EndpointRequestMap["FundSharedWalletBalanceGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["FundSharedWalletBalanceGetV2"]> {
    return this.execute("FundSharedWalletBalanceGetV2", request, options);
  }

  /**
   * GameAddictionIdGetV30
   *
   * GET /open_api/v3.0/game_addiction_id/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fgame_addiction_id%2Fget%2F
   */
  gameAddictionIdGetV30(
    request: EndpointRequestMap["GameAddictionIdGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["GameAddictionIdGetV30"]> {
    return this.execute("GameAddictionIdGetV30", request, options);
  }

  /**
   * 查询游戏玩法列表
   *
   * GET /open_api/v3.0/gameplay/list/
   * @see https://open.oceanengine.com/labels/7/docs/1849726032553225
   */
  gameplayListV30(
    request: EndpointRequestMap["GameplayListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["GameplayListV30"]> {
    return this.execute("GameplayListV30", request, options);
  }

  /**
   * InvoiceApplyOrderCreateV30
   *
   * POST /open_api/v3.0/invoice/apply_order/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_order%2Fcreate%2F
   */
  invoiceApplyOrderCreateV30(
    request: EndpointRequestMap["InvoiceApplyOrderCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["InvoiceApplyOrderCreateV30"]> {
    return this.execute("InvoiceApplyOrderCreateV30", request, options);
  }

  /**
   * InvoiceApplyOrderListV30
   *
   * GET /open_api/v3.0/invoice/apply_order/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_order%2Flist%2F
   */
  invoiceApplyOrderListV30(
    request: EndpointRequestMap["InvoiceApplyOrderListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["InvoiceApplyOrderListV30"]> {
    return this.execute("InvoiceApplyOrderListV30", request, options);
  }

  /**
   * InvoiceApplyResultGetV30
   *
   * GET /open_api/v3.0/invoice/apply_result/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_result%2Fget%2F
   */
  invoiceApplyResultGetV30(
    request: EndpointRequestMap["InvoiceApplyResultGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["InvoiceApplyResultGetV30"]> {
    return this.execute("InvoiceApplyResultGetV30", request, options);
  }

  /**
   * InvoiceDownloadUrlListV30
   *
   * GET /open_api/v3.0/invoice/download_url/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fdownload_url%2Flist%2F
   */
  invoiceDownloadUrlListV30(
    request: EndpointRequestMap["InvoiceDownloadUrlListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["InvoiceDownloadUrlListV30"]> {
    return this.execute("InvoiceDownloadUrlListV30", request, options);
  }

  /**
   * InvoiceTicketListV30
   *
   * GET /open_api/v3.0/invoice/ticket/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fticket%2Flist%2F
   */
  invoiceTicketListV30(
    request: EndpointRequestMap["InvoiceTicketListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["InvoiceTicketListV30"]> {
    return this.execute("InvoiceTicketListV30", request, options);
  }

  /**
   * 查询IOS应用列表
   *
   * GET /open_api/v3.0/ios_app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1866322298595340
   */
  iosAppListV30(
    request: EndpointRequestMap["IosAppListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["IosAppListV30"]> {
    return this.execute("IosAppListV30", request, options);
  }

  /**
   * KeywordCreateV2V2
   *
   * POST /open_api/2/keyword/create_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fcreate_v2%2F
   */
  keywordCreateV2V2(
    request: EndpointRequestMap["KeywordCreateV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordCreateV2V2"]> {
    return this.execute("KeywordCreateV2V2", request, options);
  }

  /**
   * 创建关键词
   *
   * POST /open_api/v3.0/keyword/create/
   * @see https://open.oceanengine.com/labels/7/docs/1768010379579407
   */
  keywordCreateV30(
    request: EndpointRequestMap["KeywordCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordCreateV30"]> {
    return this.execute("KeywordCreateV30", request, options);
  }

  /**
   * KeywordDeleteV2V2
   *
   * POST /open_api/2/keyword/delete_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fdelete_v2%2F
   */
  keywordDeleteV2V2(
    request: EndpointRequestMap["KeywordDeleteV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordDeleteV2V2"]> {
    return this.execute("KeywordDeleteV2V2", request, options);
  }

  /**
   * 删除关键词
   *
   * POST /open_api/v3.0/keyword/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1768012737961092
   */
  keywordDeleteV30(
    request: EndpointRequestMap["KeywordDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordDeleteV30"]> {
    return this.execute("KeywordDeleteV30", request, options);
  }

  /**
   * KeywordFeedadsSuggestV2
   *
   * GET /open_api/2/keyword_feedads/suggest/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword_feedads%2Fsuggest%2F
   */
  keywordFeedadsSuggestV2(
    request: EndpointRequestMap["KeywordFeedadsSuggestV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordFeedadsSuggestV2"]> {
    return this.execute("KeywordFeedadsSuggestV2", request, options);
  }

  /**
   * KeywordGetV2
   *
   * GET /open_api/2/keyword/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fget%2F
   */
  keywordGetV2(
    request: EndpointRequestMap["KeywordGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordGetV2"]> {
    return this.execute("KeywordGetV2", request, options);
  }

  /**
   * 获取关键词列表
   *
   * GET /open_api/v3.0/keyword/list/
   * @see https://open.oceanengine.com/labels/7/docs/1768012871181443
   */
  keywordListV30(
    request: EndpointRequestMap["KeywordListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordListV30"]> {
    return this.execute("KeywordListV30", request, options);
  }

  /**
   * KeywordUpdateV2V2
   *
   * POST /open_api/2/keyword/update_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fupdate_v2%2F
   */
  keywordUpdateV2V2(
    request: EndpointRequestMap["KeywordUpdateV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordUpdateV2V2"]> {
    return this.execute("KeywordUpdateV2V2", request, options);
  }

  /**
   * 更新关键词属性
   *
   * POST /open_api/v3.0/keyword/update/
   * @see https://open.oceanengine.com/labels/7/docs/1768011243105411
   */
  keywordUpdateV30(
    request: EndpointRequestMap["KeywordUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["KeywordUpdateV30"]> {
    return this.execute("KeywordUpdateV30", request, options);
  }

  /**
   * 行为类目查询
   *
   * GET /open_api/v3.0/local/action/category/
   * @see https://open.oceanengine.com/labels/37/docs/1848487707954248
   */
  localActionCategoryV30(
    request: EndpointRequestMap["LocalActionCategoryV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalActionCategoryV30"]> {
    return this.execute("LocalActionCategoryV30", request, options);
  }

  /**
   * 行为关键词查询
   *
   * GET /open_api/v3.0/local/action/keyword/
   * @see https://open.oceanengine.com/labels/37/docs/1848487896231948
   */
  localActionKeywordV30(
    request: EndpointRequestMap["LocalActionKeywordV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalActionKeywordV30"]> {
    return this.execute("LocalActionKeywordV30", request, options);
  }

  /**
   * 获取账户日预算
   *
   * GET /open_api/v3.0/local/advertiser/budget/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848476262968665
   */
  localAdvertiserBudgetGetV30(
    request: EndpointRequestMap["LocalAdvertiserBudgetGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAdvertiserBudgetGetV30"]> {
    return this.execute("LocalAdvertiserBudgetGetV30", request, options);
  }

  /**
   * 获取定向包
   *
   * GET /open_api/v3.0/local/audience_package/get/
   * @see https://open.oceanengine.com/labels/37/docs/1865802661094727
   */
  localAudiencePackageGetV30(
    request: EndpointRequestMap["LocalAudiencePackageGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAudiencePackageGetV30"]> {
    return this.execute("LocalAudiencePackageGetV30", request, options);
  }

  /**
   * 更新定向包
   *
   * POST /open_api/v3.0/local/audience_package/update/
   * @see https://open.oceanengine.com/labels/37/docs/1865803054737420
   */
  localAudiencePackageUpdateV30(
    request: EndpointRequestMap["LocalAudiencePackageUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAudiencePackageUpdateV30"]> {
    return this.execute("LocalAudiencePackageUpdateV30", request, options);
  }

  /**
   * LocalAwemeAuthCancelUpdateV30
   *
   * POST /open_api/v3.0/local/aweme_auth_cancel/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth_cancel%2Fupdate%2F
   */
  localAwemeAuthCancelUpdateV30(
    request: EndpointRequestMap["LocalAwemeAuthCancelUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAwemeAuthCancelUpdateV30"]> {
    return this.execute("LocalAwemeAuthCancelUpdateV30", request, options);
  }

  /**
   * LocalAwemeAuthCreateV30
   *
   * POST /open_api/v3.0/local/aweme_auth/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth%2Fcreate%2F
   */
  localAwemeAuthCreateV30(
    request: EndpointRequestMap["LocalAwemeAuthCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAwemeAuthCreateV30"]> {
    return this.execute("LocalAwemeAuthCreateV30", request, options);
  }

  /**
   * LocalAwemeAuthListV30
   *
   * GET /open_api/v3.0/local/aweme_auth/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth%2Flist%2F
   */
  localAwemeAuthListV30(
    request: EndpointRequestMap["LocalAwemeAuthListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAwemeAuthListV30"]> {
    return this.execute("LocalAwemeAuthListV30", request, options);
  }

  /**
   * LocalAwemeAuthRenewCreateV30
   *
   * POST /open_api/v3.0/local/aweme_auth_renew/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth_renew%2Fcreate%2F
   */
  localAwemeAuthRenewCreateV30(
    request: EndpointRequestMap["LocalAwemeAuthRenewCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAwemeAuthRenewCreateV30"]> {
    return this.execute("LocalAwemeAuthRenewCreateV30", request, options);
  }

  /**
   * 获取本地推创编可用抖音号
   *
   * GET /open_api/v3.0/local/aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/37/docs/1807990317937690
   */
  localAwemeAuthorizedGetV30(
    request: EndpointRequestMap["LocalAwemeAuthorizedGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalAwemeAuthorizedGetV30"]> {
    return this.execute("LocalAwemeAuthorizedGetV30", request, options);
  }

  /**
   * 更新账户日预算
   *
   * POST /open_api/v3.0/local/budget/update/
   * @see https://open.oceanengine.com/labels/37/docs/1866308787374080
   */
  localBudgetUpdateV30(
    request: EndpointRequestMap["LocalBudgetUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalBudgetUpdateV30"]> {
    return this.execute("LocalBudgetUpdateV30", request, options);
  }

  /**
   * LocalChargeListV30
   *
   * GET /open_api/v3.0/local/charge/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Flist%2F
   */
  localChargeListV30(
    request: EndpointRequestMap["LocalChargeListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalChargeListV30"]> {
    return this.execute("LocalChargeListV30", request, options);
  }

  /**
   * LocalChargeResultV30
   *
   * GET /open_api/v3.0/local/charge/result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Fresult%2F
   */
  localChargeResultV30(
    request: EndpointRequestMap["LocalChargeResultV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalChargeResultV30"]> {
    return this.execute("LocalChargeResultV30", request, options);
  }

  /**
   * LocalChargeSubmitV30
   *
   * POST /open_api/v3.0/local/charge/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Fsubmit%2F
   */
  localChargeSubmitV30(
    request: EndpointRequestMap["LocalChargeSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalChargeSubmitV30"]> {
    return this.execute("LocalChargeSubmitV30", request, options);
  }

  /**
   * 获取私信接待抖音号
   *
   * GET /open_api/v3.0/local/consult_awame_list/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848483292162059
   */
  localConsultAwameListGetV30(
    request: EndpointRequestMap["LocalConsultAwameListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalConsultAwameListGetV30"]> {
    return this.execute("LocalConsultAwameListGetV30", request, options);
  }

  /**
   * 查询本地推创编可用人群包
   *
   * GET /open_api/v3.0/local/custom_audience/get/
   * @see https://open.oceanengine.com/labels/37/docs/1808003891639609
   */
  localCustomAudienceGetV30(
    request: EndpointRequestMap["LocalCustomAudienceGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalCustomAudienceGetV30"]> {
    return this.execute("LocalCustomAudienceGetV30", request, options);
  }

  /**
   * 获取投放资质
   *
   * GET /open_api/v3.0/local/delivery_qualification/list/
   * @see https://open.oceanengine.com/labels/37/docs/1848479321495563
   */
  localDeliveryQualificationListV30(
    request: EndpointRequestMap["LocalDeliveryQualificationListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalDeliveryQualificationListV30"]> {
    return this.execute("LocalDeliveryQualificationListV30", request, options);
  }

  /**
   * 获取图文素材
   *
   * GET /open_api/v3.0/local/file/carousel/list/
   * @see https://open.oceanengine.com/labels/37/docs/1849312906748032
   */
  localFileCarouselListV30(
    request: EndpointRequestMap["LocalFileCarouselListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalFileCarouselListV30"]> {
    return this.execute("LocalFileCarouselListV30", request, options);
  }

  /**
   * 异步上传本地推视频
   *
   * POST /open_api/v3.0/local/file/upload_task/create/
   * @see https://open.oceanengine.com/labels/37/docs/1810070109238283
   */
  localFileUploadTaskCreateV30(
    request: EndpointRequestMap["LocalFileUploadTaskCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalFileUploadTaskCreateV30"]> {
    return this.execute("LocalFileUploadTaskCreateV30", request, options);
  }

  /**
   * 获取抖音主页视频
   *
   * GET /open_api/v3.0/local/file/video/aweme/get/
   * @see https://open.oceanengine.com/labels/37/docs/1808004088768608
   */
  localFileVideoAwemeGetV30(
    request: EndpointRequestMap["LocalFileVideoAwemeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalFileVideoAwemeGetV30"]> {
    return this.execute("LocalFileVideoAwemeGetV30", request, options);
  }

  /**
   * 获取素材库视频
   *
   * GET /open_api/v3.0/local/file/video/get/
   * @see https://open.oceanengine.com/labels/37/docs/1808613640441882
   */
  localFileVideoGetV30(
    request: EndpointRequestMap["LocalFileVideoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalFileVideoGetV30"]> {
    return this.execute("LocalFileVideoGetV30", request, options);
  }

  /**
   * 查询异步上传本地推视频结果
   *
   * GET /open_api/v3.0/local/file/video/upload_task/list/
   * @see https://open.oceanengine.com/labels/37/docs/1810070318501988
   */
  localFileVideoUploadTaskListV30(
    request: EndpointRequestMap["LocalFileVideoUploadTaskListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalFileVideoUploadTaskListV30"]> {
    return this.execute("LocalFileVideoUploadTaskListV30", request, options);
  }

  /**
   * 上传视频
   *
   * POST /open_api/v3.0/local/file/video/upload/
   * @see https://open.oceanengine.com/labels/37/docs/1808003989738499
   */
  localFileVideoUploadV30(
    request: EndpointRequestMap["LocalFileVideoUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalFileVideoUploadV30"]> {
    return this.execute("LocalFileVideoUploadV30", request, options);
  }

  /**
   * LocalImAccountGetV30
   *
   * GET /open_api/v3.0/local/im/account/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Faccount%2Fget%2F
   */
  localImAccountGetV30(
    request: EndpointRequestMap["LocalImAccountGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImAccountGetV30"]> {
    return this.execute("LocalImAccountGetV30", request, options);
  }

  /**
   * LocalImAutoSettingGetV30
   *
   * GET /open_api/v3.0/local/im_auto_setting/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_auto_setting%2Fget%2F
   */
  localImAutoSettingGetV30(
    request: EndpointRequestMap["LocalImAutoSettingGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImAutoSettingGetV30"]> {
    return this.execute("LocalImAutoSettingGetV30", request, options);
  }

  /**
   * LocalImAutoSettingUpdateV30
   *
   * POST /open_api/v3.0/local/im_auto_setting/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_auto_setting%2Fupdate%2F
   */
  localImAutoSettingUpdateV30(
    request: EndpointRequestMap["LocalImAutoSettingUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImAutoSettingUpdateV30"]> {
    return this.execute("LocalImAutoSettingUpdateV30", request, options);
  }

  /**
   * LocalImCardGetV30
   *
   * GET /open_api/v3.0/local/im_card/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_card%2Fget%2F
   */
  localImCardGetV30(
    request: EndpointRequestMap["LocalImCardGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImCardGetV30"]> {
    return this.execute("LocalImCardGetV30", request, options);
  }

  /**
   * LocalImQueryMsgV30
   *
   * GET /open_api/v3.0/local/im/query/msg/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fquery%2Fmsg%2F
   */
  localImQueryMsgV30(
    request: EndpointRequestMap["LocalImQueryMsgV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImQueryMsgV30"]> {
    return this.execute("LocalImQueryMsgV30", request, options);
  }

  /**
   * LocalImSendMsgV30
   *
   * POST /open_api/v3.0/local/im/send/msg/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fsend%2Fmsg%2F
   */
  localImSendMsgV30(
    request: EndpointRequestMap["LocalImSendMsgV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImSendMsgV30"]> {
    return this.execute("LocalImSendMsgV30", request, options);
  }

  /**
   * LocalImUploadImageV30
   *
   * POST /open_api/v3.0/local/im/upload/image/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fupload%2Fimage%2F
   */
  localImUploadImageV30(
    request: EndpointRequestMap["LocalImUploadImageV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImUploadImageV30"]> {
    return this.execute("LocalImUploadImageV30", request, options);
  }

  /**
   * 上传图片素材
   *
   * POST /open_api/v3.0/local/image/upload/
   * @see https://open.oceanengine.com/labels/37/docs/1851654919296067
   */
  localImageUploadV30(
    request: EndpointRequestMap["LocalImageUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalImageUploadV30"]> {
    return this.execute("LocalImageUploadV30", request, options);
  }

  /**
   * 兴趣类目查询
   *
   * GET /open_api/v3.0/local/interest/category/
   * @see https://open.oceanengine.com/labels/37/docs/1848488007184460
   */
  localInterestCategoryV30(
    request: EndpointRequestMap["LocalInterestCategoryV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalInterestCategoryV30"]> {
    return this.execute("LocalInterestCategoryV30", request, options);
  }

  /**
   * 兴趣关键词查询
   *
   * GET /open_api/v3.0/local/interest/keyword/
   * @see https://open.oceanengine.com/labels/37/docs/1848488533820416
   */
  localInterestKeywordV30(
    request: EndpointRequestMap["LocalInterestKeywordV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalInterestKeywordV30"]> {
    return this.execute("LocalInterestKeywordV30", request, options);
  }

  /**
   * LocalLifeAdvertiserCreateV30
   *
   * POST /open_api/v3.0/local/life/advertiser/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Flife%2Fadvertiser%2Fcreate%2F
   */
  localLifeAdvertiserCreateV30(
    request: EndpointRequestMap["LocalLifeAdvertiserCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalLifeAdvertiserCreateV30"]> {
    return this.execute("LocalLifeAdvertiserCreateV30", request, options);
  }

  /**
   * LocalLifeAdvertiserListV30
   *
   * GET /open_api/v3.0/local/life/advertiser/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Flife%2Fadvertiser%2Flist%2F
   */
  localLifeAdvertiserListV30(
    request: EndpointRequestMap["LocalLifeAdvertiserListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalLifeAdvertiserListV30"]> {
    return this.execute("LocalLifeAdvertiserListV30", request, options);
  }

  /**
   * 查询营销页详情
   *
   * GET /open_api/v3.0/local/market_page/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848482831406092
   */
  localMarketPageGetV30(
    request: EndpointRequestMap["LocalMarketPageGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalMarketPageGetV30"]> {
    return this.execute("LocalMarketPageGetV30", request, options);
  }

  /**
   * 获取可用营销页列表
   *
   * GET /open_api/v3.0/local/market_page_list/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848482084888708
   */
  localMarketPageListGetV30(
    request: EndpointRequestMap["LocalMarketPageListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalMarketPageListGetV30"]> {
    return this.execute("LocalMarketPageListGetV30", request, options);
  }

  /**
   * 根据多门店ID拉取门店ID
   *
   * GET /open_api/v3.0/local/multi_poi_id/poi_ids/get/
   * @see https://open.oceanengine.com/labels/37/docs/1809719485612043
   */
  localMultiPoiIdPoiIdsGetV30(
    request: EndpointRequestMap["LocalMultiPoiIdPoiIdsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalMultiPoiIdPoiIdsGetV30"]> {
    return this.execute("LocalMultiPoiIdPoiIdsGetV30", request, options);
  }

  /**
   * 获取项目下素材（新版）
   *
   * GET /open_api/v3.0/local/oc_material/get/
   * @see https://open.oceanengine.com/labels/37/docs/1872559916484608
   */
  localOcMaterialGetV30(
    request: EndpointRequestMap["LocalOcMaterialGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalOcMaterialGetV30"]> {
    return this.execute("LocalOcMaterialGetV30", request, options);
  }

  /**
   * 获取标准投放项目详情
   *
   * GET /open_api/v3.0/local/oc_project/get/
   * @see https://open.oceanengine.com/labels/37/docs/1872563621154816
   */
  localOcProjectGetV30(
    request: EndpointRequestMap["LocalOcProjectGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalOcProjectGetV30"]> {
    return this.execute("LocalOcProjectGetV30", request, options);
  }

  /**
   * 获取标准投放项目列表（新版）
   *
   * GET /open_api/v3.0/local/oc_project/list/
   * @see https://open.oceanengine.com/labels/37/docs/1872561465118212
   */
  localOcProjectListV30(
    request: EndpointRequestMap["LocalOcProjectListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalOcProjectListV30"]> {
    return this.execute("LocalOcProjectListV30", request, options);
  }

  /**
   * 获取可投门店列表
   *
   * GET /open_api/v3.0/local/poi/get/
   * @see https://open.oceanengine.com/labels/37/docs/1807977760174122
   */
  localPoiGetV30(
    request: EndpointRequestMap["LocalPoiGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPoiGetV30"]> {
    return this.execute("LocalPoiGetV30", request, options);
  }

  /**
   * 根据门店ID拉取商品
   *
   * GET /open_api/v3.0/local/product/get_by_poiids/
   * @see https://open.oceanengine.com/labels/37/docs/1810064083323002
   */
  localProductGetByPoiidsV30(
    request: EndpointRequestMap["LocalProductGetByPoiidsV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProductGetByPoiidsV30"]> {
    return this.execute("LocalProductGetByPoiidsV30", request, options);
  }

  /**
   * 获取可投商品列表
   *
   * GET /open_api/v3.0/local/product/get/
   * @see https://open.oceanengine.com/labels/37/docs/1807978367423588
   */
  localProductGetV30(
    request: EndpointRequestMap["LocalProductGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProductGetV30"]> {
    return this.execute("LocalProductGetV30", request, options);
  }

  /**
   * 创建项目
   *
   * POST /open_api/v3.0/local/project/create/
   * @see https://open.oceanengine.com/labels/37/docs/1808094783305739
   */
  localProjectCreateV30(
    request: EndpointRequestMap["LocalProjectCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectCreateV30"]> {
    return this.execute("LocalProjectCreateV30", request, options);
  }

  /**
   * 删除项目
   *
   * POST /open_api/v3.0/local/project/delete/
   * @see https://open.oceanengine.com/labels/37/docs/1866308320649799
   */
  localProjectDeleteV30(
    request: EndpointRequestMap["LocalProjectDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectDeleteV30"]> {
    return this.execute("LocalProjectDeleteV30", request, options);
  }

  /**
   * 获取项目详情
   *
   * GET /open_api/v3.0/local/project/detail/
   * @see https://open.oceanengine.com/labels/37/docs/1808441520771339
   */
  localProjectDetailV30(
    request: EndpointRequestMap["LocalProjectDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectDetailV30"]> {
    return this.execute("LocalProjectDetailV30", request, options);
  }

  /**
   * 获取项目列表
   *
   * GET /open_api/v3.0/local/project/list/
   * @see https://open.oceanengine.com/labels/37/docs/1807977310878736
   */
  localProjectListV30(
    request: EndpointRequestMap["LocalProjectListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectListV30"]> {
    return this.execute("LocalProjectListV30", request, options);
  }

  /**
   * 批量更新项目状态
   *
   * POST /open_api/v3.0/local/project/status/update/
   * @see https://open.oceanengine.com/labels/37/docs/1809958369980564
   */
  localProjectStatusUpdateV30(
    request: EndpointRequestMap["LocalProjectStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectStatusUpdateV30"]> {
    return this.execute("LocalProjectStatusUpdateV30", request, options);
  }

  /**
   * 更新项目
   *
   * POST /open_api/v3.0/local/project/update/
   * @see https://open.oceanengine.com/labels/37/docs/1808440838642948
   */
  localProjectUpdateV30(
    request: EndpointRequestMap["LocalProjectUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectUpdateV30"]> {
    return this.execute("LocalProjectUpdateV30", request, options);
  }

  /**
   * 列表批量更新项目投放时段
   *
   * POST /open_api/v3.0/local/project/week_schedule/update/
   * @see https://open.oceanengine.com/labels/37/docs/1848483664605003
   */
  localProjectWeekScheduleUpdateV30(
    request: EndpointRequestMap["LocalProjectWeekScheduleUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalProjectWeekScheduleUpdateV30"]> {
    return this.execute("LocalProjectWeekScheduleUpdateV30", request, options);
  }

  /**
   * 获取单元成本保障状态
   *
   * GET /open_api/v3.0/local/promotion/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/37/docs/1866308600274000
   */
  localPromotionCostProtectStatusGetV30(
    request: EndpointRequestMap["LocalPromotionCostProtectStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionCostProtectStatusGetV30"]> {
    return this.execute("LocalPromotionCostProtectStatusGetV30", request, options);
  }

  /**
   * 创建单元
   *
   * POST /open_api/v3.0/local/promotion/create/
   * @see https://open.oceanengine.com/labels/37/docs/1808165017797977
   */
  localPromotionCreateV30(
    request: EndpointRequestMap["LocalPromotionCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionCreateV30"]> {
    return this.execute("LocalPromotionCreateV30", request, options);
  }

  /**
   * 删除单元
   *
   * POST /open_api/v3.0/local/promotion/delete/
   * @see https://open.oceanengine.com/labels/37/docs/1866307400506627
   */
  localPromotionDeleteV30(
    request: EndpointRequestMap["LocalPromotionDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionDeleteV30"]> {
    return this.execute("LocalPromotionDeleteV30", request, options);
  }

  /**
   * 获取单元详情
   *
   * GET /open_api/v3.0/local/promotion/detail/
   * @see https://open.oceanengine.com/labels/37/docs/1808442943397963
   */
  localPromotionDetailV30(
    request: EndpointRequestMap["LocalPromotionDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionDetailV30"]> {
    return this.execute("LocalPromotionDetailV30", request, options);
  }

  /**
   * 获取单元列表
   *
   * GET /open_api/v3.0/local/promotion/list/
   * @see https://open.oceanengine.com/labels/37/docs/1808147672950851
   */
  localPromotionListV30(
    request: EndpointRequestMap["LocalPromotionListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionListV30"]> {
    return this.execute("LocalPromotionListV30", request, options);
  }

  /**
   * 批量获取广告审核建议
   *
   * GET /open_api/v3.0/local/promotion/reject_reason/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848484376642649
   */
  localPromotionRejectReasonGetV30(
    request: EndpointRequestMap["LocalPromotionRejectReasonGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionRejectReasonGetV30"]> {
    return this.execute("LocalPromotionRejectReasonGetV30", request, options);
  }

  /**
   * 批量更新单元状态
   *
   * POST /open_api/v3.0/local/promotion/status/update/
   * @see https://open.oceanengine.com/labels/37/docs/1809958381935689
   */
  localPromotionStatusUpdateV30(
    request: EndpointRequestMap["LocalPromotionStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionStatusUpdateV30"]> {
    return this.execute("LocalPromotionStatusUpdateV30", request, options);
  }

  /**
   * 更新单元
   *
   * POST /open_api/v3.0/local/promotion/update/
   * @see https://open.oceanengine.com/labels/37/docs/1808440848912411
   */
  localPromotionUpdateV30(
    request: EndpointRequestMap["LocalPromotionUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalPromotionUpdateV30"]> {
    return this.execute("LocalPromotionUpdateV30", request, options);
  }

  /**
   * 获取主体资质
   *
   * GET /open_api/v3.0/local/qualification/get/
   * @see https://open.oceanengine.com/labels/37/docs/1849311987038410
   */
  localQualificationGetV30(
    request: EndpointRequestMap["LocalQualificationGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalQualificationGetV30"]> {
    return this.execute("LocalQualificationGetV30", request, options);
  }

  /**
   * 查询账户数据
   *
   * GET /open_api/v3.0/local/report/account/get/
   * @see https://open.oceanengine.com/labels/37/docs/1819564415845708
   */
  localReportAccountGetV30(
    request: EndpointRequestMap["LocalReportAccountGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalReportAccountGetV30"]> {
    return this.execute("LocalReportAccountGetV30", request, options);
  }

  /**
   * 获取本地推受众分析数据
   *
   * GET /open_api/v3.0/local/report/audience/get/
   * @see https://open.oceanengine.com/labels/37/docs/1830268904570887
   */
  localReportAudienceGetV30(
    request: EndpointRequestMap["LocalReportAudienceGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalReportAudienceGetV30"]> {
    return this.execute("LocalReportAudienceGetV30", request, options);
  }

  /**
   * 获取素材数据
   *
   * GET /open_api/v3.0/local/report/material/get/
   * @see https://open.oceanengine.com/labels/37/docs/1804001258474595
   */
  localReportMaterialGetV30(
    request: EndpointRequestMap["LocalReportMaterialGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalReportMaterialGetV30"]> {
    return this.execute("LocalReportMaterialGetV30", request, options);
  }

  /**
   * 获取项目数据
   *
   * GET /open_api/v3.0/local/report/project/get/
   * @see https://open.oceanengine.com/labels/37/docs/1804000847733786
   */
  localReportProjectGetV30(
    request: EndpointRequestMap["LocalReportProjectGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalReportProjectGetV30"]> {
    return this.execute("LocalReportProjectGetV30", request, options);
  }

  /**
   * 获取单元数据
   *
   * GET /open_api/v3.0/local/report/promotion/get/
   * @see https://open.oceanengine.com/labels/37/docs/1804001121909835
   */
  localReportPromotionGetV30(
    request: EndpointRequestMap["LocalReportPromotionGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalReportPromotionGetV30"]> {
    return this.execute("LocalReportPromotionGetV30", request, options);
  }

  /**
   * 获取可用留资组件详情
   *
   * GET /open_api/v3.0/local/tool_pack/detail/
   * @see https://open.oceanengine.com/labels/37/docs/1848481896981834
   */
  localToolPackDetailV30(
    request: EndpointRequestMap["LocalToolPackDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalToolPackDetailV30"]> {
    return this.execute("LocalToolPackDetailV30", request, options);
  }

  /**
   * 获取可用留资组件列表
   *
   * GET /open_api/v3.0/local/tool_pack_list/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848481263218688
   */
  localToolPackListGetV30(
    request: EndpointRequestMap["LocalToolPackListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["LocalToolPackListGetV30"]> {
    return this.execute("LocalToolPackListGetV30", request, options);
  }

  /**
   * 获取旧版巨量引擎工作台下账户列表
   *
   * GET /open_api/2/majordomo/advertiser/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710519607296
   */
  majordomoAdvertiserSelectV2(
    request: EndpointRequestMap["MajordomoAdvertiserSelectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["MajordomoAdvertiserSelectV2"]> {
    return this.execute("MajordomoAdvertiserSelectV2", request, options);
  }

  /**
   * 批量更新营销素材启用状态
   *
   * POST /open_api/v3.0/material/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1755355780973568
   */
  materialStatusUpdateV30(
    request: EndpointRequestMap["MaterialStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["MaterialStatusUpdateV30"]> {
    return this.execute("MaterialStatusUpdateV30", request, options);
  }

  /**
   * 创建原生锚点
   *
   * POST /open_api/v3.0/native_anchor/create/
   * @see https://open.oceanengine.com/labels/7/docs/1757798123491403
   */
  nativeAnchorCreateV30(
    request: EndpointRequestMap["NativeAnchorCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["NativeAnchorCreateV30"]> {
    return this.execute("NativeAnchorCreateV30", request, options);
  }

  /**
   * 删除原生锚点
   *
   * POST /open_api/v3.0/native_anchor/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1780079261760524
   */
  nativeAnchorDeleteV30(
    request: EndpointRequestMap["NativeAnchorDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["NativeAnchorDeleteV30"]> {
    return this.execute("NativeAnchorDeleteV30", request, options);
  }

  /**
   * 获取原生锚点详情
   *
   * GET /open_api/v3.0/native_anchor/get/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1786407342576640
   */
  nativeAnchorGetDetailV30(
    request: EndpointRequestMap["NativeAnchorGetDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["NativeAnchorGetDetailV30"]> {
    return this.execute("NativeAnchorGetDetailV30", request, options);
  }

  /**
   * 获取原生锚点列表
   *
   * GET /open_api/v3.0/native_anchor/get/
   * @see https://open.oceanengine.com/labels/7/docs/1757715831323652
   */
  nativeAnchorGetV30(
    request: EndpointRequestMap["NativeAnchorGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["NativeAnchorGetV30"]> {
    return this.execute("NativeAnchorGetV30", request, options);
  }

  /**
   * 批量获取锚点预览url
   *
   * GET /open_api/v3.0/native_anchor/qrcode_preview/get/
   * @see https://open.oceanengine.com/labels/7/docs/1786414975773770
   */
  nativeAnchorQrcodePreviewGetV30(
    request: EndpointRequestMap["NativeAnchorQrcodePreviewGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["NativeAnchorQrcodePreviewGetV30"]> {
    return this.execute("NativeAnchorQrcodePreviewGetV30", request, options);
  }

  /**
   * 更新原生锚点
   *
   * POST /open_api/v3.0/native_anchor/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780079786680328
   */
  nativeAnchorUpdateV30(
    request: EndpointRequestMap["NativeAnchorUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["NativeAnchorUpdateV30"]> {
    return this.execute("NativeAnchorUpdateV30", request, options);
  }

  /**
   * 获取Access Token
   *
   * POST /open_api/oauth2/access_token/
   * @see https://open.oceanengine.com/labels/7/docs/1696710505596940
   */
  oauth2AccessToken(
    request: EndpointRequestMap["Oauth2AccessToken"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["Oauth2AccessToken"]> {
    return this.execute("Oauth2AccessToken", request, options);
  }

  /**
   * 获取已授权账户
   *
   * GET /open_api/oauth2/advertiser/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710506574848
   */
  oauth2AdvertiserGet(
    request: EndpointRequestMap["Oauth2AdvertiserGet"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["Oauth2AdvertiserGet"]> {
    return this.execute("Oauth2AdvertiserGet", request, options);
  }

  /**
   * 获取APP Access Token
   *
   * POST /open_api/oauth2/app_access_token/
   * @see https://open.oceanengine.com/labels/7/docs/1713655428885516
   */
  oauth2AppAccessToken(
    request: EndpointRequestMap["Oauth2AppAccessToken"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["Oauth2AppAccessToken"]> {
    return this.execute("Oauth2AppAccessToken", request, options);
  }

  /**
   * 刷新Refresh Token
   *
   * POST /open_api/oauth2/refresh_token/
   * @see https://open.oceanengine.com/labels/7/docs/1696710506097679
   */
  oauth2RefreshToken(
    request: EndpointRequestMap["Oauth2RefreshToken"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["Oauth2RefreshToken"]> {
    return this.execute("Oauth2RefreshToken", request, options);
  }

  /**
   * Oauth2RenewToken
   *
   * POST /open_api/oauth2/renew_token/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Foauth2%2Frenew_token%2F
   */
  oauth2RenewToken(
    request: EndpointRequestMap["Oauth2RenewToken"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["Oauth2RenewToken"]> {
    return this.execute("Oauth2RenewToken", request, options);
  }

  /**
   * 批量添加投放项目下素材
   *
   * POST /open_api/v3.0/oc_project/material/create/
   * @see https://open.oceanengine.com/labels/7/docs/1854929666566346
   */
  ocProjectMaterialCreateV30(
    request: EndpointRequestMap["OcProjectMaterialCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectMaterialCreateV30"]> {
    return this.execute("OcProjectMaterialCreateV30", request, options);
  }

  /**
   * 删除投放项目下素材
   *
   * POST /open_api/v3.0/oc_project/material/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1854929995241483
   */
  ocProjectMaterialDeleteV30(
    request: EndpointRequestMap["OcProjectMaterialDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectMaterialDeleteV30"]> {
    return this.execute("OcProjectMaterialDeleteV30", request, options);
  }

  /**
   * 获取投放项目下素材
   *
   * GET /open_api/v3.0/oc_project/material/get/
   * @see https://open.oceanengine.com/labels/7/docs/1854927239666825
   */
  ocProjectMaterialGetV30(
    request: EndpointRequestMap["OcProjectMaterialGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectMaterialGetV30"]> {
    return this.execute("OcProjectMaterialGetV30", request, options);
  }

  /**
   * 批量修改投放项目下素材状态
   *
   * POST /open_api/v3.0/oc_project/material/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1854930119140363
   */
  ocProjectMaterialStatusUpdateV30(
    request: EndpointRequestMap["OcProjectMaterialStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectMaterialStatusUpdateV30"]> {
    return this.execute("OcProjectMaterialStatusUpdateV30", request, options);
  }

  /**
   * OcProjectRejectReasonGetV30
   *
   * GET /open_api/v3.0/oc_project/reject_reason/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Foc_project%2Freject_reason%2Fget%2F
   */
  ocProjectRejectReasonGetV30(
    request: EndpointRequestMap["OcProjectRejectReasonGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectRejectReasonGetV30"]> {
    return this.execute("OcProjectRejectReasonGetV30", request, options);
  }

  /**
   * 获取项目下剩余可建调控任务数量
   *
   * GET /open_api/v3.0/oc_project/std_project/tools/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872130175108228
   */
  ocProjectStdProjectToolsGetV30(
    request: EndpointRequestMap["OcProjectStdProjectToolsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectStdProjectToolsGetV30"]> {
    return this.execute("OcProjectStdProjectToolsGetV30", request, options);
  }

  /**
   * 创建定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/create/
   * @see https://open.oceanengine.com/labels/7/docs/1872036641062924
   */
  ocProjectToolsAudienceCreateV30(
    request: EndpointRequestMap["OcProjectToolsAudienceCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsAudienceCreateV30"]> {
    return this.execute("OcProjectToolsAudienceCreateV30", request, options);
  }

  /**
   * 删除定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1872036997115008
   */
  ocProjectToolsAudienceDeleteV30(
    request: EndpointRequestMap["OcProjectToolsAudienceDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsAudienceDeleteV30"]> {
    return this.execute("OcProjectToolsAudienceDeleteV30", request, options);
  }

  /**
   * 获取定向调控任务列表
   *
   * GET /open_api/v3.0/oc_project/tools_audience/list/
   * @see https://open.oceanengine.com/labels/7/docs/1872037169709132
   */
  ocProjectToolsAudienceListV30(
    request: EndpointRequestMap["OcProjectToolsAudienceListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsAudienceListV30"]> {
    return this.execute("OcProjectToolsAudienceListV30", request, options);
  }

  /**
   * 批量启停定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872037080814604
   */
  ocProjectToolsAudienceStatusUpdateV30(
    request: EndpointRequestMap["OcProjectToolsAudienceStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsAudienceStatusUpdateV30"]> {
    return this.execute("OcProjectToolsAudienceStatusUpdateV30", request, options);
  }

  /**
   * 编辑定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872036761269376
   */
  ocProjectToolsAudienceUpdateV30(
    request: EndpointRequestMap["OcProjectToolsAudienceUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsAudienceUpdateV30"]> {
    return this.execute("OcProjectToolsAudienceUpdateV30", request, options);
  }

  /**
   * 获取项目/调控任务保障历史列表
   *
   * GET /open_api/v3.0/oc_project/tools/compensate_history_list/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872131888860160
   */
  ocProjectToolsCompensateHistoryListGetV30(
    request: EndpointRequestMap["OcProjectToolsCompensateHistoryListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsCompensateHistoryListGetV30"]> {
    return this.execute("OcProjectToolsCompensateHistoryListGetV30", request, options);
  }

  /**
   * 获取任务成本保障状态
   *
   * GET /open_api/v3.0/oc_project/tools/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872133236794380
   */
  ocProjectToolsCostProtectStatusGetV30(
    request: EndpointRequestMap["OcProjectToolsCostProtectStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsCostProtectStatusGetV30"]> {
    return this.execute("OcProjectToolsCostProtectStatusGetV30", request, options);
  }

  /**
   * 创建关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/create/
   * @see https://open.oceanengine.com/labels/7/docs/1872037607466537
   */
  ocProjectToolsKeywordCreateV30(
    request: EndpointRequestMap["OcProjectToolsKeywordCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsKeywordCreateV30"]> {
    return this.execute("OcProjectToolsKeywordCreateV30", request, options);
  }

  /**
   * 删除关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1872037861597259
   */
  ocProjectToolsKeywordDeleteV30(
    request: EndpointRequestMap["OcProjectToolsKeywordDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsKeywordDeleteV30"]> {
    return this.execute("OcProjectToolsKeywordDeleteV30", request, options);
  }

  /**
   * 获取关键词调控任务列表
   *
   * GET /open_api/v3.0/oc_project/tools_keyword/list/
   * @see https://open.oceanengine.com/labels/7/docs/1872137299017099
   */
  ocProjectToolsKeywordListV30(
    request: EndpointRequestMap["OcProjectToolsKeywordListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsKeywordListV30"]> {
    return this.execute("OcProjectToolsKeywordListV30", request, options);
  }

  /**
   * 批量启停关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872138027320329
   */
  ocProjectToolsKeywordStatusUpdateV30(
    request: EndpointRequestMap["OcProjectToolsKeywordStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsKeywordStatusUpdateV30"]> {
    return this.execute("OcProjectToolsKeywordStatusUpdateV30", request, options);
  }

  /**
   * 编辑关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872037755000315
   */
  ocProjectToolsKeywordUpdateV30(
    request: EndpointRequestMap["OcProjectToolsKeywordUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsKeywordUpdateV30"]> {
    return this.execute("OcProjectToolsKeywordUpdateV30", request, options);
  }

  /**
   * 创建素材起量调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_material_raise/create/
   * @see https://open.oceanengine.com/labels/7/docs/1872041259727386
   */
  ocProjectToolsMaterialRaiseCreateV30(
    request: EndpointRequestMap["OcProjectToolsMaterialRaiseCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsMaterialRaiseCreateV30"]> {
    return this.execute("OcProjectToolsMaterialRaiseCreateV30", request, options);
  }

  /**
   * 删除素材起量调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_material_raise/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1872038932102156
   */
  ocProjectToolsMaterialRaiseDeleteV30(
    request: EndpointRequestMap["OcProjectToolsMaterialRaiseDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsMaterialRaiseDeleteV30"]> {
    return this.execute("OcProjectToolsMaterialRaiseDeleteV30", request, options);
  }

  /**
   * 获取素材起量调控任务列表
   *
   * GET /open_api/v3.0/oc_project/tools_material_raise/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872033559772938
   */
  ocProjectToolsMaterialRaiseGetV30(
    request: EndpointRequestMap["OcProjectToolsMaterialRaiseGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OcProjectToolsMaterialRaiseGetV30"]> {
    return this.execute("OcProjectToolsMaterialRaiseGetV30", request, options);
  }

  /**
   * 营销素材预审结果查询（连山云视频点播版）
   *
   * GET /open_api/v3.0/open_material_audit/pro/get/
   * @see https://open.oceanengine.com/labels/7/docs/1832825121155465
   */
  openMaterialAuditProGetV30(
    request: EndpointRequestMap["OpenMaterialAuditProGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OpenMaterialAuditProGetV30"]> {
    return this.execute("OpenMaterialAuditProGetV30", request, options);
  }

  /**
   * 营销素材预审提交接口（连山云视频点播版）
   *
   * POST /open_api/v3.0/open_material_audit/pro/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1832825155593417
   */
  openMaterialAuditProSubmitV30(
    request: EndpointRequestMap["OpenMaterialAuditProSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["OpenMaterialAuditProSubmitV30"]> {
    return this.execute("OpenMaterialAuditProSubmitV30", request, options);
  }

  /**
   * PenaltyTaskGetV30
   *
   * GET /open_api/v3.0/penalty_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpenalty_task%2Fget%2F
   */
  penaltyTaskGetV30(
    request: EndpointRequestMap["PenaltyTaskGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PenaltyTaskGetV30"]> {
    return this.execute("PenaltyTaskGetV30", request, options);
  }

  /**
   * 投放账户对公充值
   *
   * POST /open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/
   * @see https://open.oceanengine.com/labels/7/docs/1860068027672588
   */
  prepayChargeGenerateFixRemiattanceCodeCreateV30(
    request: EndpointRequestMap["PrepayChargeGenerateFixRemiattanceCodeCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PrepayChargeGenerateFixRemiattanceCodeCreateV30"]> {
    return this.execute("PrepayChargeGenerateFixRemiattanceCodeCreateV30", request, options);
  }

  /**
   * PrepayChargeGenerateRemittanceCodeCreateV30
   *
   * POST /open_api/v3.0/prepay_charge/generate_remittance_code/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fprepay_charge%2Fgenerate_remittance_code%2Fcreate%2F
   */
  prepayChargeGenerateRemittanceCodeCreateV30(
    request: EndpointRequestMap["PrepayChargeGenerateRemittanceCodeCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PrepayChargeGenerateRemittanceCodeCreateV30"]> {
    return this.execute("PrepayChargeGenerateRemittanceCodeCreateV30", request, options);
  }

  /**
   * 批量更新项目预算
   *
   * POST /open_api/v3.0/project/budget/update/
   * @see https://open.oceanengine.com/labels/7/docs/1755353873798155
   */
  projectBudgetUpdateV30(
    request: EndpointRequestMap["ProjectBudgetUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectBudgetUpdateV30"]> {
    return this.execute("ProjectBudgetUpdateV30", request, options);
  }

  /**
   * 批量获取项目成本保障状态
   *
   * GET /open_api/v3.0/project/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1802842544128000
   */
  projectCostProtectStatusGetV30(
    request: EndpointRequestMap["ProjectCostProtectStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectCostProtectStatusGetV30"]> {
    return this.execute("ProjectCostProtectStatusGetV30", request, options);
  }

  /**
   * 批量更新项目出价
   *
   * POST /open_api/v3.0/project/cpa_bid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1858174581876745
   */
  projectCpaBidUpdateV30(
    request: EndpointRequestMap["ProjectCpaBidUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectCpaBidUpdateV30"]> {
    return this.execute("ProjectCpaBidUpdateV30", request, options);
  }

  /**
   * 创建项目
   *
   * POST /open_api/v3.0/project/create/
   * @see https://open.oceanengine.com/labels/7/docs/1740868093375503
   */
  projectCreateV30(
    request: EndpointRequestMap["ProjectCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectCreateV30"]> {
    return this.execute("ProjectCreateV30", request, options);
  }

  /**
   * 批量更新深层项目出价
   *
   * POST /open_api/v3.0/project/deep_cpa_bid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1858175093068809
   */
  projectDeepCpaBidUpdateV30(
    request: EndpointRequestMap["ProjectDeepCpaBidUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectDeepCpaBidUpdateV30"]> {
    return this.execute("ProjectDeepCpaBidUpdateV30", request, options);
  }

  /**
   * 批量删除项目
   *
   * POST /open_api/v3.0/project/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1740944781036608
   */
  projectDeleteV30(
    request: EndpointRequestMap["ProjectDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectDeleteV30"]> {
    return this.execute("ProjectDeleteV30", request, options);
  }

  /**
   * 获取项目列表
   *
   * GET /open_api/v3.0/project/list/
   * @see https://open.oceanengine.com/labels/7/docs/1740937147595776
   */
  projectListV30(
    request: EndpointRequestMap["ProjectListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectListV30"]> {
    return this.execute("ProjectListV30", request, options);
  }

  /**
   * ProjectNameUpdateV30
   *
   * POST /open_api/v3.0/project_name/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fproject_name%2Fupdate%2F
   */
  projectNameUpdateV30(
    request: EndpointRequestMap["ProjectNameUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectNameUpdateV30"]> {
    return this.execute("ProjectNameUpdateV30", request, options);
  }

  /**
   * 批量修改项目ROI系数
   *
   * POST /open_api/v3.0/project/roigoal/update/
   * @see https://open.oceanengine.com/labels/7/docs/1794208148473859
   */
  projectRoigoalUpdateV30(
    request: EndpointRequestMap["ProjectRoigoalUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectRoigoalUpdateV30"]> {
    return this.execute("ProjectRoigoalUpdateV30", request, options);
  }

  /**
   * 批量更新项目投放时间
   *
   * POST /open_api/v3.0/project/schedule_time/update/
   * @see https://open.oceanengine.com/labels/7/docs/1779258970970184
   */
  projectScheduleTimeUpdateV30(
    request: EndpointRequestMap["ProjectScheduleTimeUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectScheduleTimeUpdateV30"]> {
    return this.execute("ProjectScheduleTimeUpdateV30", request, options);
  }

  /**
   * 批量更新项目状态
   *
   * POST /open_api/v3.0/project/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1740941413906432
   */
  projectStatusUpdateV30(
    request: EndpointRequestMap["ProjectStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectStatusUpdateV30"]> {
    return this.execute("ProjectStatusUpdateV30", request, options);
  }

  /**
   * 更新项目
   *
   * POST /open_api/v3.0/project/update/
   * @see https://open.oceanengine.com/labels/7/docs/1740936504522831
   */
  projectUpdateV30(
    request: EndpointRequestMap["ProjectUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectUpdateV30"]> {
    return this.execute("ProjectUpdateV30", request, options);
  }

  /**
   * 批量更新项目投放时段
   *
   * POST /open_api/v3.0/project/week_schedule/update/
   * @see https://open.oceanengine.com/labels/7/docs/1779260654537728
   */
  projectWeekScheduleUpdateV30(
    request: EndpointRequestMap["ProjectWeekScheduleUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ProjectWeekScheduleUpdateV30"]> {
    return this.execute("ProjectWeekScheduleUpdateV30", request, options);
  }

  /**
   * PromotionAidGetV30
   *
   * GET /open_api/v3.0/promotion/aid/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Faid%2Fget%2F
   */
  promotionAidGetV30(
    request: EndpointRequestMap["PromotionAidGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionAidGetV30"]> {
    return this.execute("PromotionAidGetV30", request, options);
  }

  /**
   * PromotionAutoGenerateConfigCreateV30
   *
   * POST /open_api/v3.0/promotion/auto_generate_config/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fauto_generate_config%2Fcreate%2F
   */
  promotionAutoGenerateConfigCreateV30(
    request: EndpointRequestMap["PromotionAutoGenerateConfigCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionAutoGenerateConfigCreateV30"]> {
    return this.execute("PromotionAutoGenerateConfigCreateV30", request, options);
  }

  /**
   * PromotionAutoGenerateConfigGetV30
   *
   * GET /open_api/v3.0/promotion/auto_generate_config/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fauto_generate_config%2Fget%2F
   */
  promotionAutoGenerateConfigGetV30(
    request: EndpointRequestMap["PromotionAutoGenerateConfigGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionAutoGenerateConfigGetV30"]> {
    return this.execute("PromotionAutoGenerateConfigGetV30", request, options);
  }

  /**
   * 批量更新营销出价
   *
   * POST /open_api/v3.0/promotion/bid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1741031138305028
   */
  promotionBidUpdateV30(
    request: EndpointRequestMap["PromotionBidUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionBidUpdateV30"]> {
    return this.execute("PromotionBidUpdateV30", request, options);
  }

  /**
   * 批量更新营销预算
   *
   * POST /open_api/v3.0/promotion/budget/update/
   * @see https://open.oceanengine.com/labels/7/docs/1741030872454148
   */
  promotionBudgetUpdateV30(
    request: EndpointRequestMap["PromotionBudgetUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionBudgetUpdateV30"]> {
    return this.execute("PromotionBudgetUpdateV30", request, options);
  }

  /**
   * 批量获取营销成本保障状态
   *
   * GET /open_api/v3.0/promotion/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1755355980850191
   */
  promotionCostProtectStatusGetV30(
    request: EndpointRequestMap["PromotionCostProtectStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionCostProtectStatusGetV30"]> {
    return this.execute("PromotionCostProtectStatusGetV30", request, options);
  }

  /**
   * 创建单元
   *
   * POST /open_api/v3.0/promotion/create/
   * @see https://open.oceanengine.com/labels/7/docs/1740946299496459
   */
  promotionCreateV30(
    request: EndpointRequestMap["PromotionCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionCreateV30"]> {
    return this.execute("PromotionCreateV30", request, options);
  }

  /**
   * 批量修改深度出价
   *
   * POST /open_api/v3.0/promotion/deepbid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1755355890182159
   */
  promotionDeepbidUpdateV30(
    request: EndpointRequestMap["PromotionDeepbidUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionDeepbidUpdateV30"]> {
    return this.execute("PromotionDeepbidUpdateV30", request, options);
  }

  /**
   * 批量删除营销
   *
   * POST /open_api/v3.0/promotion/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1741031376580675
   */
  promotionDeleteV30(
    request: EndpointRequestMap["PromotionDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionDeleteV30"]> {
    return this.execute("PromotionDeleteV30", request, options);
  }

  /**
   * PromotionEasyKeepDeliverySwitchUpdateV30
   *
   * POST /open_api/v3.0/promotion_easy/keep_delivery_switch/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_easy%2Fkeep_delivery_switch%2Fupdate%2F
   */
  promotionEasyKeepDeliverySwitchUpdateV30(
    request: EndpointRequestMap["PromotionEasyKeepDeliverySwitchUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionEasyKeepDeliverySwitchUpdateV30"]> {
    return this.execute("PromotionEasyKeepDeliverySwitchUpdateV30", request, options);
  }

  /**
   * PromotionEasyUpdateV30
   *
   * POST /open_api/v3.0/promotion_easy/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_easy%2Fupdate%2F
   */
  promotionEasyUpdateV30(
    request: EndpointRequestMap["PromotionEasyUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionEasyUpdateV30"]> {
    return this.execute("PromotionEasyUpdateV30", request, options);
  }

  /**
   * 获取单元列表
   *
   * GET /open_api/v3.0/promotion/list/
   * @see https://open.oceanengine.com/labels/7/docs/1741028841006095
   */
  promotionListV30(
    request: EndpointRequestMap["PromotionListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionListV30"]> {
    return this.execute("PromotionListV30", request, options);
  }

  /**
   * 删除营销下素材
   *
   * POST /open_api/v3.0/promotion/material/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1797183832412380
   */
  promotionMaterialDeleteV30(
    request: EndpointRequestMap["PromotionMaterialDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionMaterialDeleteV30"]> {
    return this.execute("PromotionMaterialDeleteV30", request, options);
  }

  /**
   * PromotionNameUpdateV30
   *
   * POST /open_api/v3.0/promotion_name/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_name%2Fupdate%2F
   */
  promotionNameUpdateV30(
    request: EndpointRequestMap["PromotionNameUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionNameUpdateV30"]> {
    return this.execute("PromotionNameUpdateV30", request, options);
  }

  /**
   * PromotionNewcustomerCreateV30
   *
   * POST /open_api/v3.0/promotion_newcustomer/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_newcustomer%2Fcreate%2F
   */
  promotionNewcustomerCreateV30(
    request: EndpointRequestMap["PromotionNewcustomerCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionNewcustomerCreateV30"]> {
    return this.execute("PromotionNewcustomerCreateV30", request, options);
  }

  /**
   * PromotionNewcustomerTypeGetV30
   *
   * GET /open_api/v3.0/promotion_newcustomer_type/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_newcustomer_type%2Fget%2F
   */
  promotionNewcustomerTypeGetV30(
    request: EndpointRequestMap["PromotionNewcustomerTypeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionNewcustomerTypeGetV30"]> {
    return this.execute("PromotionNewcustomerTypeGetV30", request, options);
  }

  /**
   * 批量获取广告审核建议
   *
   * GET /open_api/v3.0/promotion/reject_reason/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741031528693771
   */
  promotionRejectReasonGetV30(
    request: EndpointRequestMap["PromotionRejectReasonGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionRejectReasonGetV30"]> {
    return this.execute("PromotionRejectReasonGetV30", request, options);
  }

  /**
   * 批量更新营销投放时段
   *
   * POST /open_api/v3.0/promotion/schedule_time/update/
   * @see https://open.oceanengine.com/labels/7/docs/1769912402184199
   */
  promotionScheduleTimeUpdateV30(
    request: EndpointRequestMap["PromotionScheduleTimeUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionScheduleTimeUpdateV30"]> {
    return this.execute("PromotionScheduleTimeUpdateV30", request, options);
  }

  /**
   * PromotionShopInfoUpdateV30
   *
   * POST /open_api/v3.0/promotion/shop_info/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fshop_info%2Fupdate%2F
   */
  promotionShopInfoUpdateV30(
    request: EndpointRequestMap["PromotionShopInfoUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionShopInfoUpdateV30"]> {
    return this.execute("PromotionShopInfoUpdateV30", request, options);
  }

  /**
   * 批量更新营销启用状态
   *
   * POST /open_api/v3.0/promotion/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1741031308559364
   */
  promotionStatusUpdateV30(
    request: EndpointRequestMap["PromotionStatusUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionStatusUpdateV30"]> {
    return this.execute("PromotionStatusUpdateV30", request, options);
  }

  /**
   * 修改单元
   *
   * POST /open_api/v3.0/promotion/update/
   * @see https://open.oceanengine.com/labels/7/docs/1740952287987719
   */
  promotionUpdateV30(
    request: EndpointRequestMap["PromotionUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["PromotionUpdateV30"]> {
    return this.execute("PromotionUpdateV30", request, options);
  }

  /**
   * 获取账户余额
   *
   * GET /open_api/v1.0/qianchuan/account/balance/get/
   * @see https://open.oceanengine.com/labels/12/docs/1783322092364800
   */
  qianchuanAccountBalanceGetV10(
    request: EndpointRequestMap["QianchuanAccountBalanceGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAccountBalanceGetV10"]> {
    return this.execute("QianchuanAccountBalanceGetV10", request, options);
  }

  /**
   * 获取账户日预算
   *
   * GET /open_api/v1.0/qianchuan/account/budget/get/
   * @see https://open.oceanengine.com/labels/12/docs/1777635660375047
   */
  qianchuanAccountBudgetGetV10(
    request: EndpointRequestMap["QianchuanAccountBudgetGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAccountBudgetGetV10"]> {
    return this.execute("QianchuanAccountBudgetGetV10", request, options);
  }

  /**
   * 更新账户日预算
   *
   * POST /open_api/v1.0/qianchuan/account/budget/update/
   * @see https://open.oceanengine.com/labels/12/docs/1777637543919619
   */
  qianchuanAccountBudgetUpdateV10(
    request: EndpointRequestMap["QianchuanAccountBudgetUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAccountBudgetUpdateV10"]> {
    return this.execute("QianchuanAccountBudgetUpdateV10", request, options);
  }

  /**
   * QianchuanAdBidUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/bid/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fbid%2Fupdate%2F
   */
  qianchuanAdBidUpdateV10(
    request: EndpointRequestMap["QianchuanAdBidUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdBidUpdateV10"]> {
    return this.execute("QianchuanAdBidUpdateV10", request, options);
  }

  /**
   * QianchuanAdBudgetUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/budget/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fbudget%2Fupdate%2F
   */
  qianchuanAdBudgetUpdateV10(
    request: EndpointRequestMap["QianchuanAdBudgetUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdBudgetUpdateV10"]> {
    return this.execute("QianchuanAdBudgetUpdateV10", request, options);
  }

  /**
   * 获取计划成本保障状态
   *
   * GET /open_api/v1.0/qianchuan/ad/compensate_status/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778157489597440
   */
  qianchuanAdCompensateStatusGetV10(
    request: EndpointRequestMap["QianchuanAdCompensateStatusGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdCompensateStatusGetV10"]> {
    return this.execute("QianchuanAdCompensateStatusGetV10", request, options);
  }

  /**
   * QianchuanAdCreateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fcreate%2F
   */
  qianchuanAdCreateV10(
    request: EndpointRequestMap["QianchuanAdCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdCreateV10"]> {
    return this.execute("QianchuanAdCreateV10", request, options);
  }

  /**
   * QianchuanAdDetailGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fdetail%2Fget%2F
   */
  qianchuanAdDetailGetV10(
    request: EndpointRequestMap["QianchuanAdDetailGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdDetailGetV10"]> {
    return this.execute("QianchuanAdDetailGetV10", request, options);
  }

  /**
   * QianchuanAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fget%2F
   */
  qianchuanAdGetV10(
    request: EndpointRequestMap["QianchuanAdGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdGetV10"]> {
    return this.execute("QianchuanAdGetV10", request, options);
  }

  /**
   * QianchuanAdKeywordsGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/keywords/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fkeywords%2Fget%2F
   */
  qianchuanAdKeywordsGetV10(
    request: EndpointRequestMap["QianchuanAdKeywordsGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdKeywordsGetV10"]> {
    return this.execute("QianchuanAdKeywordsGetV10", request, options);
  }

  /**
   * 获取计划学习期状态
   *
   * GET /open_api/v1.0/qianchuan/ad/learing_status/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778158222500876
   */
  qianchuanAdLearingStatusGetV10(
    request: EndpointRequestMap["QianchuanAdLearingStatusGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdLearingStatusGetV10"]> {
    return this.execute("QianchuanAdLearingStatusGetV10", request, options);
  }

  /**
   * QianchuanAdMaterialDeleteV10
   *
   * POST /open_api/v1.0/qianchuan/ad/material/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fdelete%2F
   */
  qianchuanAdMaterialDeleteV10(
    request: EndpointRequestMap["QianchuanAdMaterialDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdMaterialDeleteV10"]> {
    return this.execute("QianchuanAdMaterialDeleteV10", request, options);
  }

  /**
   * QianchuanAdMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fget%2F
   */
  qianchuanAdMaterialGetV10(
    request: EndpointRequestMap["QianchuanAdMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdMaterialGetV10"]> {
    return this.execute("QianchuanAdMaterialGetV10", request, options);
  }

  /**
   * QianchuanAdMaterialSuggestionV10
   *
   * GET /open_api/v1.0/qianchuan/ad/material/suggestion/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fsuggestion%2F
   */
  qianchuanAdMaterialSuggestionV10(
    request: EndpointRequestMap["QianchuanAdMaterialSuggestionV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdMaterialSuggestionV10"]> {
    return this.execute("QianchuanAdMaterialSuggestionV10", request, options);
  }

  /**
   * 全域计划升级为乘方计划
   *
   * POST /open_api/v1.0/qianchuan/ad/overall_marketing/update/
   * @see https://open.oceanengine.com/labels/12/docs/1866761206705753
   */
  qianchuanAdOverallMarketingUpdateV10(
    request: EndpointRequestMap["QianchuanAdOverallMarketingUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdOverallMarketingUpdateV10"]> {
    return this.execute("QianchuanAdOverallMarketingUpdateV10", request, options);
  }

  /**
   * 获取在投计划配额信息
   *
   * GET /open_api/v1.0/qianchuan/ad/quota/get/
   * @see https://open.oceanengine.com/labels/12/docs/1731182713398283
   */
  qianchuanAdQuotaGetV10(
    request: EndpointRequestMap["QianchuanAdQuotaGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdQuotaGetV10"]> {
    return this.execute("QianchuanAdQuotaGetV10", request, options);
  }

  /**
   * QianchuanAdRecommendKeywordsGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/recommend_keywords/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Frecommend_keywords%2Fget%2F
   */
  qianchuanAdRecommendKeywordsGetV10(
    request: EndpointRequestMap["QianchuanAdRecommendKeywordsGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdRecommendKeywordsGetV10"]> {
    return this.execute("QianchuanAdRecommendKeywordsGetV10", request, options);
  }

  /**
   * QianchuanAdRegionUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/region/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fregion%2Fupdate%2F
   */
  qianchuanAdRegionUpdateV10(
    request: EndpointRequestMap["QianchuanAdRegionUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdRegionUpdateV10"]> {
    return this.execute("QianchuanAdRegionUpdateV10", request, options);
  }

  /**
   * QianchuanAdRejectReasonV10
   *
   * GET /open_api/v1.0/qianchuan/ad/reject_reason/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Freject_reason%2F
   */
  qianchuanAdRejectReasonV10(
    request: EndpointRequestMap["QianchuanAdRejectReasonV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdRejectReasonV10"]> {
    return this.execute("QianchuanAdRejectReasonV10", request, options);
  }

  /**
   * QianchuanAdScheduleDateUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/schedule_date/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fschedule_date%2Fupdate%2F
   */
  qianchuanAdScheduleDateUpdateV10(
    request: EndpointRequestMap["QianchuanAdScheduleDateUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdScheduleDateUpdateV10"]> {
    return this.execute("QianchuanAdScheduleDateUpdateV10", request, options);
  }

  /**
   * QianchuanAdScheduleFixedRangeUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fschedule_fixed_range%2Fupdate%2F
   */
  qianchuanAdScheduleFixedRangeUpdateV10(
    request: EndpointRequestMap["QianchuanAdScheduleFixedRangeUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdScheduleFixedRangeUpdateV10"]> {
    return this.execute("QianchuanAdScheduleFixedRangeUpdateV10", request, options);
  }

  /**
   * QianchuanAdStatusUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/status/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fstatus%2Fupdate%2F
   */
  qianchuanAdStatusUpdateV10(
    request: EndpointRequestMap["QianchuanAdStatusUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdStatusUpdateV10"]> {
    return this.execute("QianchuanAdStatusUpdateV10", request, options);
  }

  /**
   * QianchuanAdUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fupdate%2F
   */
  qianchuanAdUpdateV10(
    request: EndpointRequestMap["QianchuanAdUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdUpdateV10"]> {
    return this.execute("QianchuanAdUpdateV10", request, options);
  }

  /**
   * 获取千川账户类型
   *
   * GET /open_api/v1.0/qianchuan/advertiser/type/get/
   * @see https://open.oceanengine.com/labels/12/docs/1754620816918532
   */
  qianchuanAdvertiserTypeGetV10(
    request: EndpointRequestMap["QianchuanAdvertiserTypeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAdvertiserTypeGetV10"]> {
    return this.execute("QianchuanAdvertiserTypeGetV10", request, options);
  }

  /**
   * QianchuanAudienceCreateByFileV10
   *
   * POST /open_api/v1.0/qianchuan/audience/create_by_file/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fcreate_by_file%2F
   */
  qianchuanAudienceCreateByFileV10(
    request: EndpointRequestMap["QianchuanAudienceCreateByFileV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudienceCreateByFileV10"]> {
    return this.execute("QianchuanAudienceCreateByFileV10", request, options);
  }

  /**
   * QianchuanAudienceDeleteV10
   *
   * POST /open_api/v1.0/qianchuan/audience/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fdelete%2F
   */
  qianchuanAudienceDeleteV10(
    request: EndpointRequestMap["QianchuanAudienceDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudienceDeleteV10"]> {
    return this.execute("QianchuanAudienceDeleteV10", request, options);
  }

  /**
   * QianchuanAudienceFilePartUploadV10
   *
   * POST /open_api/v1.0/qianchuan/audience_file/part_upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_file%2Fpart_upload%2F
   */
  qianchuanAudienceFilePartUploadV10(
    request: EndpointRequestMap["QianchuanAudienceFilePartUploadV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudienceFilePartUploadV10"]> {
    return this.execute("QianchuanAudienceFilePartUploadV10", request, options);
  }

  /**
   * QianchuanAudienceFileUploadV10
   *
   * POST /open_api/v1.0/qianchuan/audience_file/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_file%2Fupload%2F
   */
  qianchuanAudienceFileUploadV10(
    request: EndpointRequestMap["QianchuanAudienceFileUploadV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudienceFileUploadV10"]> {
    return this.execute("QianchuanAudienceFileUploadV10", request, options);
  }

  /**
   * QianchuanAudienceGroupGetV10
   *
   * GET /open_api/v1.0/qianchuan/audience_group/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_group%2Fget%2F
   */
  qianchuanAudienceGroupGetV10(
    request: EndpointRequestMap["QianchuanAudienceGroupGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudienceGroupGetV10"]> {
    return this.execute("QianchuanAudienceGroupGetV10", request, options);
  }

  /**
   * QianchuanAudienceListGetV10
   *
   * GET /open_api/v1.0/qianchuan/audience_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_list%2Fget%2F
   */
  qianchuanAudienceListGetV10(
    request: EndpointRequestMap["QianchuanAudienceListGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudienceListGetV10"]> {
    return this.execute("QianchuanAudienceListGetV10", request, options);
  }

  /**
   * QianchuanAudiencePushV10
   *
   * POST /open_api/v1.0/qianchuan/audience/push/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fpush%2F
   */
  qianchuanAudiencePushV10(
    request: EndpointRequestMap["QianchuanAudiencePushV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAudiencePushV10"]> {
    return this.execute("QianchuanAudiencePushV10", request, options);
  }

  /**
   * 获取千川账户下抖音号授权列表
   *
   * GET /open_api/v1.0/qianchuan/aweme_auth_list/get/
   * @see https://open.oceanengine.com/labels/12/docs/1804287262648346
   */
  qianchuanAwemeAuthListGetV10(
    request: EndpointRequestMap["QianchuanAwemeAuthListGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeAuthListGetV10"]> {
    return this.execute("QianchuanAwemeAuthListGetV10", request, options);
  }

  /**
   * QianchuanAwemeAuthorizedGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fauthorized%2Fget%2F
   */
  qianchuanAwemeAuthorizedGetV10(
    request: EndpointRequestMap["QianchuanAwemeAuthorizedGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeAuthorizedGetV10"]> {
    return this.execute("QianchuanAwemeAuthorizedGetV10", request, options);
  }

  /**
   * QianchuanAwemeEstimateProfitV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/estimate_profit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Festimate_profit%2F
   */
  qianchuanAwemeEstimateProfitV10(
    request: EndpointRequestMap["QianchuanAwemeEstimateProfitV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeEstimateProfitV10"]> {
    return this.execute("QianchuanAwemeEstimateProfitV10", request, options);
  }

  /**
   * QianchuanAwemeInterestActionInterestKeywordV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Finterest_action%2Finterest%2Fkeyword%2F
   */
  qianchuanAwemeInterestActionInterestKeywordV10(
    request: EndpointRequestMap["QianchuanAwemeInterestActionInterestKeywordV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeInterestActionInterestKeywordV10"]> {
    return this.execute("QianchuanAwemeInterestActionInterestKeywordV10", request, options);
  }

  /**
   * QianchuanAwemeOrderBudgetAddV10
   *
   * POST /open_api/v1.0/qianchuan/aweme/order/budget/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fbudget%2Fadd%2F
   */
  qianchuanAwemeOrderBudgetAddV10(
    request: EndpointRequestMap["QianchuanAwemeOrderBudgetAddV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderBudgetAddV10"]> {
    return this.execute("QianchuanAwemeOrderBudgetAddV10", request, options);
  }

  /**
   * QianchuanAwemeOrderCreateV10
   *
   * POST /open_api/v1.0/qianchuan/aweme/order/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fcreate%2F
   */
  qianchuanAwemeOrderCreateV10(
    request: EndpointRequestMap["QianchuanAwemeOrderCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderCreateV10"]> {
    return this.execute("QianchuanAwemeOrderCreateV10", request, options);
  }

  /**
   * QianchuanAwemeOrderDetailGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fdetail%2Fget%2F
   */
  qianchuanAwemeOrderDetailGetV10(
    request: EndpointRequestMap["QianchuanAwemeOrderDetailGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderDetailGetV10"]> {
    return this.execute("QianchuanAwemeOrderDetailGetV10", request, options);
  }

  /**
   * QianchuanAwemeOrderGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fget%2F
   */
  qianchuanAwemeOrderGetV10(
    request: EndpointRequestMap["QianchuanAwemeOrderGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderGetV10"]> {
    return this.execute("QianchuanAwemeOrderGetV10", request, options);
  }

  /**
   * QianchuanAwemeOrderQuotaGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/quota/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fquota%2Fget%2F
   */
  qianchuanAwemeOrderQuotaGetV10(
    request: EndpointRequestMap["QianchuanAwemeOrderQuotaGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderQuotaGetV10"]> {
    return this.execute("QianchuanAwemeOrderQuotaGetV10", request, options);
  }

  /**
   * QianchuanAwemeOrderSuggestDeliveryTimeGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fsuggest%2Fdelivery_time%2Fget%2F
   */
  qianchuanAwemeOrderSuggestDeliveryTimeGetV10(
    request: EndpointRequestMap["QianchuanAwemeOrderSuggestDeliveryTimeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderSuggestDeliveryTimeGetV10"]> {
    return this.execute("QianchuanAwemeOrderSuggestDeliveryTimeGetV10", request, options);
  }

  /**
   * QianchuanAwemeOrderTerminateV10
   *
   * POST /open_api/v1.0/qianchuan/aweme/order/terminate/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fterminate%2F
   */
  qianchuanAwemeOrderTerminateV10(
    request: EndpointRequestMap["QianchuanAwemeOrderTerminateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeOrderTerminateV10"]> {
    return this.execute("QianchuanAwemeOrderTerminateV10", request, options);
  }

  /**
   * QianchuanAwemeProductAvailableGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/product/available/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fproduct%2Favailable%2Fget%2F
   */
  qianchuanAwemeProductAvailableGetV10(
    request: EndpointRequestMap["QianchuanAwemeProductAvailableGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeProductAvailableGetV10"]> {
    return this.execute("QianchuanAwemeProductAvailableGetV10", request, options);
  }

  /**
   * QianchuanAwemeReportOrderGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/report/order/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Freport%2Forder%2Fget%2F
   */
  qianchuanAwemeReportOrderGetV10(
    request: EndpointRequestMap["QianchuanAwemeReportOrderGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeReportOrderGetV10"]> {
    return this.execute("QianchuanAwemeReportOrderGetV10", request, options);
  }

  /**
   * QianchuanAwemeSuggestBidV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/suggest_bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fsuggest_bid%2F
   */
  qianchuanAwemeSuggestBidV10(
    request: EndpointRequestMap["QianchuanAwemeSuggestBidV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeSuggestBidV10"]> {
    return this.execute("QianchuanAwemeSuggestBidV10", request, options);
  }

  /**
   * QianchuanAwemeSuggestRoiGoalV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/suggest/roi/goal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fsuggest%2Froi%2Fgoal%2F
   */
  qianchuanAwemeSuggestRoiGoalV10(
    request: EndpointRequestMap["QianchuanAwemeSuggestRoiGoalV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeSuggestRoiGoalV10"]> {
    return this.execute("QianchuanAwemeSuggestRoiGoalV10", request, options);
  }

  /**
   * 获取随心推全域订单下素材列表
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/
   * @see https://open.oceanengine.com/labels/12/docs/1844129152007108
   */
  qianchuanAwemeUniPromotionAdMaterialGetV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionAdMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionAdMaterialGetV10"]> {
    return this.execute("QianchuanAwemeUniPromotionAdMaterialGetV10", request, options);
  }

  /**
   * 获取随心推全域投放效果预估
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/
   * @see https://open.oceanengine.com/labels/12/docs/1834804152700935
   */
  qianchuanAwemeUniPromotionEstimateEffectV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionEstimateEffectV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionEstimateEffectV10"]> {
    return this.execute("QianchuanAwemeUniPromotionEstimateEffectV10", request, options);
  }

  /**
   * 追加随心推全域订单预算
   *
   * POST /open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/
   * @see https://open.oceanengine.com/labels/12/docs/1836629305445384
   */
  qianchuanAwemeUniPromotionOrderBudgetAddV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionOrderBudgetAddV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionOrderBudgetAddV10"]> {
    return this.execute("QianchuanAwemeUniPromotionOrderBudgetAddV10", request, options);
  }

  /**
   *  创建随心推全域订单
   *
   * POST /open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/
   * @see https://open.oceanengine.com/labels/12/docs/1834781332397449
   */
  qianchuanAwemeUniPromotionOrderCreateV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionOrderCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionOrderCreateV10"]> {
    return this.execute("QianchuanAwemeUniPromotionOrderCreateV10", request, options);
  }

  /**
   * 获取随心推全域订单详情
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/detail/
   * @see https://open.oceanengine.com/labels/12/docs/1834798638887948
   */
  qianchuanAwemeUniPromotionOrderDetailV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionOrderDetailV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionOrderDetailV10"]> {
    return this.execute("QianchuanAwemeUniPromotionOrderDetailV10", request, options);
  }

  /**
   * 获取随心推全域订单列表
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/
   * @see https://open.oceanengine.com/labels/12/docs/1834797699331148
   */
  qianchuanAwemeUniPromotionOrderGetV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionOrderGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionOrderGetV10"]> {
    return this.execute("QianchuanAwemeUniPromotionOrderGetV10", request, options);
  }

  /**
   * 获取随心推全域订单数据
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/
   * @see https://open.oceanengine.com/labels/12/docs/1844129628513816
   */
  qianchuanAwemeUniPromotionOrderReportGetV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionOrderReportGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionOrderReportGetV10"]> {
    return this.execute("QianchuanAwemeUniPromotionOrderReportGetV10", request, options);
  }

  /**
   * 获取随心推全域续费建议延长时长
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/suggest/delivery_time/get/
   * @see https://open.oceanengine.com/labels/12/docs/1836628495717452
   */
  qianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10"]> {
    return this.execute("QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10", request, options);
  }

  /**
   * 获取随心推全域账户数据
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/report/
   * @see https://open.oceanengine.com/labels/12/docs/1834802422645760
   */
  qianchuanAwemeUniPromotionReportV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionReportV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionReportV10"]> {
    return this.execute("QianchuanAwemeUniPromotionReportV10", request, options);
  }

  /**
   * 获取随心推全域手动出价计划建议ROI
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/
   * @see https://open.oceanengine.com/labels/12/docs/1834804305062915
   */
  qianchuanAwemeUniPromotionSuggestRoiV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionSuggestRoiV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionSuggestRoiV10"]> {
    return this.execute("QianchuanAwemeUniPromotionSuggestRoiV10", request, options);
  }

  /**
   * 获取随心推全域投放建议
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/
   * @see https://open.oceanengine.com/labels/12/docs/1834803969912960
   */
  qianchuanAwemeUniPromotionSuggestV10(
    request: EndpointRequestMap["QianchuanAwemeUniPromotionSuggestV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeUniPromotionSuggestV10"]> {
    return this.execute("QianchuanAwemeUniPromotionSuggestV10", request, options);
  }

  /**
   * QianchuanAwemeVideoGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/video/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fvideo%2Fget%2F
   */
  qianchuanAwemeVideoGetV10(
    request: EndpointRequestMap["QianchuanAwemeVideoGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanAwemeVideoGetV10"]> {
    return this.execute("QianchuanAwemeVideoGetV10", request, options);
  }

  /**
   * QianchuanBatchCampaignStatusUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/batch_campaign_status/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbatch_campaign_status%2Fupdate%2F
   */
  qianchuanBatchCampaignStatusUpdateV10(
    request: EndpointRequestMap["QianchuanBatchCampaignStatusUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanBatchCampaignStatusUpdateV10"]> {
    return this.execute("QianchuanBatchCampaignStatusUpdateV10", request, options);
  }

  /**
   * QianchuanBrandAuthorizedGetV10
   *
   * GET /open_api/v1.0/qianchuan/brand/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Fauthorized%2Fget%2F
   */
  qianchuanBrandAuthorizedGetV10(
    request: EndpointRequestMap["QianchuanBrandAuthorizedGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanBrandAuthorizedGetV10"]> {
    return this.execute("QianchuanBrandAuthorizedGetV10", request, options);
  }

  /**
   * QianchuanBrandReportAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/brand/report/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Freport%2Fad%2Fget%2F
   */
  qianchuanBrandReportAdGetV10(
    request: EndpointRequestMap["QianchuanBrandReportAdGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanBrandReportAdGetV10"]> {
    return this.execute("QianchuanBrandReportAdGetV10", request, options);
  }

  /**
   * QianchuanBrandReportAdvertiserGetV10
   *
   * GET /open_api/v1.0/qianchuan/brand/report/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Freport%2Fadvertiser%2Fget%2F
   */
  qianchuanBrandReportAdvertiserGetV10(
    request: EndpointRequestMap["QianchuanBrandReportAdvertiserGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanBrandReportAdvertiserGetV10"]> {
    return this.execute("QianchuanBrandReportAdvertiserGetV10", request, options);
  }

  /**
   * QianchuanCampaignCreateV10
   *
   * POST /open_api/v1.0/qianchuan/campaign/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign%2Fcreate%2F
   */
  qianchuanCampaignCreateV10(
    request: EndpointRequestMap["QianchuanCampaignCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanCampaignCreateV10"]> {
    return this.execute("QianchuanCampaignCreateV10", request, options);
  }

  /**
   * QianchuanCampaignListGetV10
   *
   * GET /open_api/v1.0/qianchuan/campaign_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign_list%2Fget%2F
   */
  qianchuanCampaignListGetV10(
    request: EndpointRequestMap["QianchuanCampaignListGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanCampaignListGetV10"]> {
    return this.execute("QianchuanCampaignListGetV10", request, options);
  }

  /**
   * QianchuanCampaignUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign%2Fupdate%2F
   */
  qianchuanCampaignUpdateV10(
    request: EndpointRequestMap["QianchuanCampaignUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanCampaignUpdateV10"]> {
    return this.execute("QianchuanCampaignUpdateV10", request, options);
  }

  /**
   * 获取抖音号下的图文
   *
   * GET /open_api/v1.0/qianchuan/carousel/aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778159412906125
   */
  qianchuanCarouselAwemeGetV10(
    request: EndpointRequestMap["QianchuanCarouselAwemeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanCarouselAwemeGetV10"]> {
    return this.execute("QianchuanCarouselAwemeGetV10", request, options);
  }

  /**
   * 获取千川素材库图文
   *
   * GET /open_api/v1.0/qianchuan/carousel/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778159308092424
   */
  qianchuanCarouselGetV10(
    request: EndpointRequestMap["QianchuanCarouselGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanCarouselGetV10"]> {
    return this.execute("QianchuanCarouselGetV10", request, options);
  }

  /**
   * QianchuanDmpAudiencesGetV10
   *
   * GET /open_api/v1.0/qianchuan/dmp/audiences/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fdmp%2Faudiences%2Fget%2F
   */
  qianchuanDmpAudiencesGetV10(
    request: EndpointRequestMap["QianchuanDmpAudiencesGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanDmpAudiencesGetV10"]> {
    return this.execute("QianchuanDmpAudiencesGetV10", request, options);
  }

  /**
   * QianchuanEstimateEffectV10
   *
   * GET /open_api/v1.0/qianchuan/estimate/effect/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Festimate%2Feffect%2F
   */
  qianchuanEstimateEffectV10(
    request: EndpointRequestMap["QianchuanEstimateEffectV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanEstimateEffectV10"]> {
    return this.execute("QianchuanEstimateEffectV10", request, options);
  }

  /**
   * 批量删除图片素材
   *
   * POST /open_api/v1.0/qianchuan/file/image/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1763394443752520
   */
  qianchuanFileImageDeleteV10(
    request: EndpointRequestMap["QianchuanFileImageDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFileImageDeleteV10"]> {
    return this.execute("QianchuanFileImageDeleteV10", request, options);
  }

  /**
   * 获取抖音号下的视频
   *
   * GET /open_api/v1.0/qianchuan/file/video/aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1697466774382599
   */
  qianchuanFileVideoAwemeGetV10(
    request: EndpointRequestMap["QianchuanFileVideoAwemeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFileVideoAwemeGetV10"]> {
    return this.execute("QianchuanFileVideoAwemeGetV10", request, options);
  }

  /**
   * 批量删除视频素材
   *
   * POST /open_api/v1.0/qianchuan/file/video/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1763394567366656
   */
  qianchuanFileVideoDeleteV10(
    request: EndpointRequestMap["QianchuanFileVideoDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFileVideoDeleteV10"]> {
    return this.execute("QianchuanFileVideoDeleteV10", request, options);
  }

  /**
   * 获取低效素材
   *
   * GET /open_api/v1.0/qianchuan/file/video/efficiency/get/
   * @see https://open.oceanengine.com/labels/12/docs/1754607188087808
   */
  qianchuanFileVideoEfficiencyGetV10(
    request: EndpointRequestMap["QianchuanFileVideoEfficiencyGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFileVideoEfficiencyGetV10"]> {
    return this.execute("QianchuanFileVideoEfficiencyGetV10", request, options);
  }

  /**
   * 获取首发素材
   *
   * GET /open_api/v1.0/qianchuan/file/video/original/get/
   * @see https://open.oceanengine.com/labels/12/docs/1754607275560015
   */
  qianchuanFileVideoOriginalGetV10(
    request: EndpointRequestMap["QianchuanFileVideoOriginalGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFileVideoOriginalGetV10"]> {
    return this.execute("QianchuanFileVideoOriginalGetV10", request, options);
  }

  /**
   * 获取财务流水信息
   *
   * GET /open_api/v1.0/qianchuan/finance/detail/get/
   * @see https://open.oceanengine.com/labels/12/docs/1725977659075599
   */
  qianchuanFinanceDetailGetV10(
    request: EndpointRequestMap["QianchuanFinanceDetailGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFinanceDetailGetV10"]> {
    return this.execute("QianchuanFinanceDetailGetV10", request, options);
  }

  /**
   * 获取账户钱包信息
   *
   * GET /open_api/v1.0/qianchuan/finance/wallet/get/
   * @see https://open.oceanengine.com/labels/12/docs/1725977604633615
   */
  qianchuanFinanceWalletGetV10(
    request: EndpointRequestMap["QianchuanFinanceWalletGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanFinanceWalletGetV10"]> {
    return this.execute("QianchuanFinanceWalletGetV10", request, options);
  }

  /**
   * 获取千川素材库图片
   *
   * GET /open_api/v1.0/qianchuan/image/get/
   * @see https://open.oceanengine.com/labels/12/docs/1739304248623182
   */
  qianchuanImageGetV10(
    request: EndpointRequestMap["QianchuanImageGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanImageGetV10"]> {
    return this.execute("QianchuanImageGetV10", request, options);
  }

  /**
   * QianchuanKeywordCheckV10
   *
   * POST /open_api/v1.0/qianchuan/keyword/check/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fkeyword%2Fcheck%2F
   */
  qianchuanKeywordCheckV10(
    request: EndpointRequestMap["QianchuanKeywordCheckV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanKeywordCheckV10"]> {
    return this.execute("QianchuanKeywordCheckV10", request, options);
  }

  /**
   * QianchuanKeywordPackageGetV10
   *
   * GET /open_api/v1.0/qianchuan/keyword_package/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fkeyword_package%2Fget%2F
   */
  qianchuanKeywordPackageGetV10(
    request: EndpointRequestMap["QianchuanKeywordPackageGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanKeywordPackageGetV10"]> {
    return this.execute("QianchuanKeywordPackageGetV10", request, options);
  }

  /**
   * QianchuanLqAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/lq_ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Flq_ad%2Fget%2F
   */
  qianchuanLqAdGetV10(
    request: EndpointRequestMap["QianchuanLqAdGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanLqAdGetV10"]> {
    return this.execute("QianchuanLqAdGetV10", request, options);
  }

  /**
   * QianchuanMaterialAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/material/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fmaterial%2Fad%2Fget%2F
   */
  qianchuanMaterialAdGetV10(
    request: EndpointRequestMap["QianchuanMaterialAdGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanMaterialAdGetV10"]> {
    return this.execute("QianchuanMaterialAdGetV10", request, options);
  }

  /**
   * QianchuanMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fmaterial%2Fget%2F
   */
  qianchuanMaterialGetV10(
    request: EndpointRequestMap["QianchuanMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanMaterialGetV10"]> {
    return this.execute("QianchuanMaterialGetV10", request, options);
  }

  /**
   * 获取定向包列表
   *
   * GET /open_api/v1.0/qianchuan/orientation_package/get/
   * @see https://open.oceanengine.com/labels/12/docs/1741765278816256
   */
  qianchuanOrientationPackageGetV10(
    request: EndpointRequestMap["QianchuanOrientationPackageGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOrientationPackageGetV10"]> {
    return this.execute("QianchuanOrientationPackageGetV10", request, options);
  }

  /**
   * 删除乘方商品乘方下的抖音号
   *
   * POST /open_api/v1.0/qianchuan/overall_aweme/aweme/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1866762361388233
   */
  qianchuanOverallAwemeAwemeDeleteV10(
    request: EndpointRequestMap["QianchuanOverallAwemeAwemeDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallAwemeAwemeDeleteV10"]> {
    return this.execute("QianchuanOverallAwemeAwemeDeleteV10", request, options);
  }

  /**
   * 乘方商品-抖音号选择列表
   *
   * GET /open_api/v1.0/qianchuan/overall_aweme/list/
   * @see https://open.oceanengine.com/labels/12/docs/1870942264507403
   */
  qianchuanOverallAwemeListV10(
    request: EndpointRequestMap["QianchuanOverallAwemeListV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallAwemeListV10"]> {
    return this.execute("QianchuanOverallAwemeListV10", request, options);
  }

  /**
   * 新建乘方直播投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_live/create/
   * @see https://open.oceanengine.com/labels/12/docs/1871954016096256
   */
  qianchuanOverallLiveCreateV10(
    request: EndpointRequestMap["QianchuanOverallLiveCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallLiveCreateV10"]> {
    return this.execute("QianchuanOverallLiveCreateV10", request, options);
  }

  /**
   * 编辑乘方直播投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_live/update/
   * @see https://open.oceanengine.com/labels/12/docs/1872486209713225
   */
  qianchuanOverallLiveUpdateV10(
    request: EndpointRequestMap["QianchuanOverallLiveUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallLiveUpdateV10"]> {
    return this.execute("QianchuanOverallLiveUpdateV10", request, options);
  }

  /**
   * 获取直播-乘方星选素材可投商品
   *
   * GET /open_api/v1.0/qianchuan/overall_star_product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1872489111561108
   */
  qianchuanOverallStarProductGetV10(
    request: EndpointRequestMap["QianchuanOverallStarProductGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallStarProductGetV10"]> {
    return this.execute("QianchuanOverallStarProductGetV10", request, options);
  }

  /**
   * 获取乘方投放控成本计划建议支付ROI目标
   *
   * GET /open_api/v1.0/qianchuan/overall/suggest/roi/get/
   * @see https://open.oceanengine.com/labels/12/docs/1871505298758800
   */
  qianchuanOverallSuggestRoiGetV10(
    request: EndpointRequestMap["QianchuanOverallSuggestRoiGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallSuggestRoiGetV10"]> {
    return this.execute("QianchuanOverallSuggestRoiGetV10", request, options);
  }

  /**
   * 新建乘方商品投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_video/create/
   * @see https://open.oceanengine.com/labels/12/docs/1872485038037385
   */
  qianchuanOverallVideoCreateV10(
    request: EndpointRequestMap["QianchuanOverallVideoCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallVideoCreateV10"]> {
    return this.execute("QianchuanOverallVideoCreateV10", request, options);
  }

  /**
   * 编辑乘方商品投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_video/update/
   * @see https://open.oceanengine.com/labels/12/docs/1872485645689866
   */
  qianchuanOverallVideoUpdateV10(
    request: EndpointRequestMap["QianchuanOverallVideoUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanOverallVideoUpdateV10"]> {
    return this.execute("QianchuanOverallVideoUpdateV10", request, options);
  }

  /**
   * QianchuanProductAvailableGetV10
   *
   * GET /open_api/v1.0/qianchuan/product/available/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fproduct%2Favailable%2Fget%2F
   */
  qianchuanProductAvailableGetV10(
    request: EndpointRequestMap["QianchuanProductAvailableGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanProductAvailableGetV10"]> {
    return this.execute("QianchuanProductAvailableGetV10", request, options);
  }

  /**
   * 获取直播大屏可用指标和维度
   *
   * GET /open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807424096554059
   */
  qianchuanQianchuanReportTodayLiveRoomConfigGetV10(
    request: EndpointRequestMap["QianchuanQianchuanReportTodayLiveRoomConfigGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanQianchuanReportTodayLiveRoomConfigGetV10"]> {
    return this.execute("QianchuanQianchuanReportTodayLiveRoomConfigGetV10", request, options);
  }

  /**
   * QianchuanQianchuanVideoStarGetV10
   *
   * GET /open_api/v1.0/qianchuan/qianchuan/video/star/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fqianchuan%2Fvideo%2Fstar%2Fget%2F
   */
  qianchuanQianchuanVideoStarGetV10(
    request: EndpointRequestMap["QianchuanQianchuanVideoStarGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanQianchuanVideoStarGetV10"]> {
    return this.execute("QianchuanQianchuanVideoStarGetV10", request, options);
  }

  /**
   * QianchuanReportAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fad%2Fget%2F
   */
  qianchuanReportAdGetV10(
    request: EndpointRequestMap["QianchuanReportAdGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportAdGetV10"]> {
    return this.execute("QianchuanReportAdGetV10", request, options);
  }

  /**
   * QianchuanReportAdMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/ad/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fad%2Fmaterial%2Fget%2F
   */
  qianchuanReportAdMaterialGetV10(
    request: EndpointRequestMap["QianchuanReportAdMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportAdMaterialGetV10"]> {
    return this.execute("QianchuanReportAdMaterialGetV10", request, options);
  }

  /**
   * QianchuanReportAdvertiserGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fadvertiser%2Fget%2F
   */
  qianchuanReportAdvertiserGetV10(
    request: EndpointRequestMap["QianchuanReportAdvertiserGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportAdvertiserGetV10"]> {
    return this.execute("QianchuanReportAdvertiserGetV10", request, options);
  }

  /**
   * 获取千川投放账户维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/all_promotion/get/
   * @see https://open.oceanengine.com/labels/12/docs/1865675229008199
   */
  qianchuanReportAllPromotionGetV10(
    request: EndpointRequestMap["QianchuanReportAllPromotionGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportAllPromotionGetV10"]> {
    return this.execute("QianchuanReportAllPromotionGetV10", request, options);
  }

  /**
   * QianchuanReportCustomConfigGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/custom/config/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fcustom%2Fconfig%2Fget%2F
   */
  qianchuanReportCustomConfigGetV10(
    request: EndpointRequestMap["QianchuanReportCustomConfigGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportCustomConfigGetV10"]> {
    return this.execute("QianchuanReportCustomConfigGetV10", request, options);
  }

  /**
   * QianchuanReportCustomGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/custom/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fcustom%2Fget%2F
   */
  qianchuanReportCustomGetV10(
    request: EndpointRequestMap["QianchuanReportCustomGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportCustomGetV10"]> {
    return this.execute("QianchuanReportCustomGetV10", request, options);
  }

  /**
   * 获取今日直播数据
   *
   * GET /open_api/v1.0/qianchuan/report/live/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763406675800128
   */
  qianchuanReportLiveGetV10(
    request: EndpointRequestMap["QianchuanReportLiveGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportLiveGetV10"]> {
    return this.execute("QianchuanReportLiveGetV10", request, options);
  }

  /**
   * 获取长周期订单明细可用指标和维度
   *
   * GET /open_api/v1.0/qianchuan/report/long_transfer/order/config/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807348855527500
   */
  qianchuanReportLongTransferOrderConfigGetV10(
    request: EndpointRequestMap["QianchuanReportLongTransferOrderConfigGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportLongTransferOrderConfigGetV10"]> {
    return this.execute("QianchuanReportLongTransferOrderConfigGetV10", request, options);
  }

  /**
   * 获取长周期订单数据
   *
   * GET /open_api/v1.0/qianchuan/report/long_transfer/order/data/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807348907403268
   */
  qianchuanReportLongTransferOrderDataGetV10(
    request: EndpointRequestMap["QianchuanReportLongTransferOrderDataGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportLongTransferOrderDataGetV10"]> {
    return this.execute("QianchuanReportLongTransferOrderDataGetV10", request, options);
  }

  /**
   * QianchuanReportLongTransferOrderGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/long_transfer/order/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Flong_transfer%2Forder%2Fget%2F
   */
  qianchuanReportLongTransferOrderGetV10(
    request: EndpointRequestMap["QianchuanReportLongTransferOrderGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportLongTransferOrderGetV10"]> {
    return this.execute("QianchuanReportLongTransferOrderGetV10", request, options);
  }

  /**
   * QianchuanReportMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fmaterial%2Fget%2F
   */
  qianchuanReportMaterialGetV10(
    request: EndpointRequestMap["QianchuanReportMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportMaterialGetV10"]> {
    return this.execute("QianchuanReportMaterialGetV10", request, options);
  }

  /**
   * QianchuanReportSearchWordGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/search_word/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fsearch_word%2Fget%2F
   */
  qianchuanReportSearchWordGetV10(
    request: EndpointRequestMap["QianchuanReportSearchWordGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportSearchWordGetV10"]> {
    return this.execute("QianchuanReportSearchWordGetV10", request, options);
  }

  /**
   * QianchuanReportTodayLiveGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/today_live/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Ftoday_live%2Fget%2F
   */
  qianchuanReportTodayLiveGetV10(
    request: EndpointRequestMap["QianchuanReportTodayLiveGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportTodayLiveGetV10"]> {
    return this.execute("QianchuanReportTodayLiveGetV10", request, options);
  }

  /**
   * QianchuanReportTodayLiveRoomConfigGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/today_live/room/config/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Ftoday_live%2Froom%2Fconfig%2Fget%2F
   */
  qianchuanReportTodayLiveRoomConfigGetV10(
    request: EndpointRequestMap["QianchuanReportTodayLiveRoomConfigGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportTodayLiveRoomConfigGetV10"]> {
    return this.execute("QianchuanReportTodayLiveRoomConfigGetV10", request, options);
  }

  /**
   * 获取直播大屏数据
   *
   * GET /open_api/v1.0/qianchuan/report/today_live/room/data/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807433722476556
   */
  qianchuanReportTodayLiveRoomDataGetV10(
    request: EndpointRequestMap["QianchuanReportTodayLiveRoomDataGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportTodayLiveRoomDataGetV10"]> {
    return this.execute("QianchuanReportTodayLiveRoomDataGetV10", request, options);
  }

  /**
   * 获取千川数据报表-可用维度和指标
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/config/get/
   * @see https://open.oceanengine.com/labels/12/docs/1823296280645708
   */
  qianchuanReportUniPromotionConfigGetV10(
    request: EndpointRequestMap["QianchuanReportUniPromotionConfigGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportUniPromotionConfigGetV10"]> {
    return this.execute("QianchuanReportUniPromotionConfigGetV10", request, options);
  }

  /**
   * 获取千川数据报表数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/data/get/
   * @see https://open.oceanengine.com/labels/12/docs/1823297941140569
   */
  qianchuanReportUniPromotionDataGetV10(
    request: EndpointRequestMap["QianchuanReportUniPromotionDataGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportUniPromotionDataGetV10"]> {
    return this.execute("QianchuanReportUniPromotionDataGetV10", request, options);
  }

  /**
   * 获取全域投放抖音号维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/
   * @see https://open.oceanengine.com/labels/12/docs/1786236031165513
   */
  qianchuanReportUniPromotionDimensionDataAuthorGetV10(
    request: EndpointRequestMap["QianchuanReportUniPromotionDimensionDataAuthorGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportUniPromotionDimensionDataAuthorGetV10"]> {
    return this.execute("QianchuanReportUniPromotionDimensionDataAuthorGetV10", request, options);
  }

  /**
   * 获取全域投放直播间维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/
   * @see https://open.oceanengine.com/labels/12/docs/1786235355858947
   */
  qianchuanReportUniPromotionDimensionDataRoomGetV10(
    request: EndpointRequestMap["QianchuanReportUniPromotionDimensionDataRoomGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportUniPromotionDimensionDataRoomGetV10"]> {
    return this.execute("QianchuanReportUniPromotionDimensionDataRoomGetV10", request, options);
  }

  /**
   * 获取全域投放账户维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/get/
   * @see https://open.oceanengine.com/labels/12/docs/1770675169146947
   */
  qianchuanReportUniPromotionGetV10(
    request: EndpointRequestMap["QianchuanReportUniPromotionGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportUniPromotionGetV10"]> {
    return this.execute("QianchuanReportUniPromotionGetV10", request, options);
  }

  /**
   * QianchuanReportVideoUserLoseGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/video_user_lose/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fvideo_user_lose%2Fget%2F
   */
  qianchuanReportVideoUserLoseGetV10(
    request: EndpointRequestMap["QianchuanReportVideoUserLoseGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanReportVideoUserLoseGetV10"]> {
    return this.execute("QianchuanReportVideoUserLoseGetV10", request, options);
  }

  /**
   * QianchuanRoiGoalUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/roi/goal/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Froi%2Fgoal%2Fupdate%2F
   */
  qianchuanRoiGoalUpdateV10(
    request: EndpointRequestMap["QianchuanRoiGoalUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanRoiGoalUpdateV10"]> {
    return this.execute("QianchuanRoiGoalUpdateV10", request, options);
  }

  /**
   * 获取店铺账户关联的投放账户列表
   *
   * GET /open_api/v1.0/qianchuan/shop/advertiser/list/
   * @see https://open.oceanengine.com/labels/12/docs/1697467801357320
   */
  qianchuanShopAdvertiserListV10(
    request: EndpointRequestMap["QianchuanShopAdvertiserListV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanShopAdvertiserListV10"]> {
    return this.execute("QianchuanShopAdvertiserListV10", request, options);
  }

  /**
   * QianchuanShopAuthorizedGetV10
   *
   * GET /open_api/v1.0/qianchuan/shop/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fshop%2Fauthorized%2Fget%2F
   */
  qianchuanShopAuthorizedGetV10(
    request: EndpointRequestMap["QianchuanShopAuthorizedGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanShopAuthorizedGetV10"]> {
    return this.execute("QianchuanShopAuthorizedGetV10", request, options);
  }

  /**
   * 获取店铺账户信息
   *
   * GET /open_api/v1.0/qianchuan/shop/get/
   * @see https://open.oceanengine.com/labels/12/docs/1697467920617483
   */
  qianchuanShopGetV10(
    request: EndpointRequestMap["QianchuanShopGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanShopGetV10"]> {
    return this.execute("QianchuanShopGetV10", request, options);
  }

  /**
   * QianchuanSuggestBidV10
   *
   * GET /open_api/v1.0/qianchuan/suggest_bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest_bid%2F
   */
  qianchuanSuggestBidV10(
    request: EndpointRequestMap["QianchuanSuggestBidV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanSuggestBidV10"]> {
    return this.execute("QianchuanSuggestBidV10", request, options);
  }

  /**
   * QianchuanSuggestBudgetV10
   *
   * GET /open_api/v1.0/qianchuan/suggest/budget/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest%2Fbudget%2F
   */
  qianchuanSuggestBudgetV10(
    request: EndpointRequestMap["QianchuanSuggestBudgetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanSuggestBudgetV10"]> {
    return this.execute("QianchuanSuggestBudgetV10", request, options);
  }

  /**
   * QianchuanSuggestRoiGoalV10
   *
   * GET /open_api/v1.0/qianchuan/suggest/roi/goal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest%2Froi%2Fgoal%2F
   */
  qianchuanSuggestRoiGoalV10(
    request: EndpointRequestMap["QianchuanSuggestRoiGoalV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanSuggestRoiGoalV10"]> {
    return this.execute("QianchuanSuggestRoiGoalV10", request, options);
  }

  /**
   * 获取直播间详情
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/detail/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763409499649031
   */
  qianchuanTodayLiveRoomDetailGetV10(
    request: EndpointRequestMap["QianchuanTodayLiveRoomDetailGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTodayLiveRoomDetailGetV10"]> {
    return this.execute("QianchuanTodayLiveRoomDetailGetV10", request, options);
  }

  /**
   * 获取直播间流量表现
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/flow_performance/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763409732890699
   */
  qianchuanTodayLiveRoomFlowPerformanceGetV10(
    request: EndpointRequestMap["QianchuanTodayLiveRoomFlowPerformanceGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTodayLiveRoomFlowPerformanceGetV10"]> {
    return this.execute("QianchuanTodayLiveRoomFlowPerformanceGetV10", request, options);
  }

  /**
   * 获取今日直播间列表
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763408973310988
   */
  qianchuanTodayLiveRoomGetV10(
    request: EndpointRequestMap["QianchuanTodayLiveRoomGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTodayLiveRoomGetV10"]> {
    return this.execute("QianchuanTodayLiveRoomGetV10", request, options);
  }

  /**
   * 获取直播间商品列表
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/product_list/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763410225446924
   */
  qianchuanTodayLiveRoomProductListGetV10(
    request: EndpointRequestMap["QianchuanTodayLiveRoomProductListGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTodayLiveRoomProductListGetV10"]> {
    return this.execute("QianchuanTodayLiveRoomProductListGetV10", request, options);
  }

  /**
   * 获取直播间用户洞察
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/user/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763409882431488
   */
  qianchuanTodayLiveRoomUserGetV10(
    request: EndpointRequestMap["QianchuanTodayLiveRoomUserGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTodayLiveRoomUserGetV10"]> {
    return this.execute("QianchuanTodayLiveRoomUserGetV10", request, options);
  }

  /**
   * QianchuanTodayLiveV2RoomUserGetV10
   *
   * GET /open_api/v1.0/qianchuan/today_live_v2/room/user/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftoday_live_v2%2Froom%2Fuser%2Fget%2F
   */
  qianchuanTodayLiveV2RoomUserGetV10(
    request: EndpointRequestMap["QianchuanTodayLiveV2RoomUserGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTodayLiveV2RoomUserGetV10"]> {
    return this.execute("QianchuanTodayLiveV2RoomUserGetV10", request, options);
  }

  /**
   * 智能优惠券白名单
   *
   * GET /open_api/v1.0/qianchuan/tools/allow_coupon/
   * @see https://open.oceanengine.com/labels/12/docs/1771275948928071
   */
  qianchuanToolsAllowCouponV10(
    request: EndpointRequestMap["QianchuanToolsAllowCouponV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsAllowCouponV10"]> {
    return this.execute("QianchuanToolsAllowCouponV10", request, options);
  }

  /**
   * 抖音号授权
   *
   * POST /open_api/v1.0/qianchuan/tools/aweme_auth/
   * @see https://open.oceanengine.com/labels/12/docs/1771376926549067
   */
  qianchuanToolsAwemeAuthV10(
    request: EndpointRequestMap["QianchuanToolsAwemeAuthV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsAwemeAuthV10"]> {
    return this.execute("QianchuanToolsAwemeAuthV10", request, options);
  }

  /**
   * 获取定向受众预估
   *
   * GET /open_api/v1.0/qianchuan/tools/estimate_audience/
   * @see https://open.oceanengine.com/labels/12/docs/1757702925729792
   */
  qianchuanToolsEstimateAudienceV10(
    request: EndpointRequestMap["QianchuanToolsEstimateAudienceV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsEstimateAudienceV10"]> {
    return this.execute("QianchuanToolsEstimateAudienceV10", request, options);
  }

  /**
   * 获取白名单能力
   *
   * GET /open_api/v1.0/qianchuan/tools/gray/
   * @see https://open.oceanengine.com/labels/12/docs/1763675121890315
   */
  qianchuanToolsGrayV10(
    request: EndpointRequestMap["QianchuanToolsGrayV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsGrayV10"]> {
    return this.execute("QianchuanToolsGrayV10", request, options);
  }

  /**
   * 获取千川操作日志
   *
   * GET /open_api/v1.0/qianchuan/tools/log_search/
   * @see https://open.oceanengine.com/labels/12/docs/1832813828161028
   */
  qianchuanToolsLogSearchV10(
    request: EndpointRequestMap["QianchuanToolsLogSearchV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsLogSearchV10"]> {
    return this.execute("QianchuanToolsLogSearchV10", request, options);
  }

  /**
   * 店铺新客定向授权
   *
   * POST /open_api/v1.0/qianchuan/tools/shop_auth/
   * @see https://open.oceanengine.com/labels/12/docs/1775801912689664
   */
  qianchuanToolsShopAuthV10(
    request: EndpointRequestMap["QianchuanToolsShopAuthV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsShopAuthV10"]> {
    return this.execute("QianchuanToolsShopAuthV10", request, options);
  }

  /**
   * QianchuanToolsSmartBoostAdBoostReportGetV10
   *
   * GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Freport%2Fget%2F
   */
  qianchuanToolsSmartBoostAdBoostReportGetV10(
    request: EndpointRequestMap["QianchuanToolsSmartBoostAdBoostReportGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsSmartBoostAdBoostReportGetV10"]> {
    return this.execute("QianchuanToolsSmartBoostAdBoostReportGetV10", request, options);
  }

  /**
   * QianchuanToolsSmartBoostAdBoostSetV10
   *
   * POST /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fset%2F
   */
  qianchuanToolsSmartBoostAdBoostSetV10(
    request: EndpointRequestMap["QianchuanToolsSmartBoostAdBoostSetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsSmartBoostAdBoostSetV10"]> {
    return this.execute("QianchuanToolsSmartBoostAdBoostSetV10", request, options);
  }

  /**
   * QianchuanToolsSmartBoostAdBoostStatusGetV10
   *
   * GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fstatus%2Fget%2F
   */
  qianchuanToolsSmartBoostAdBoostStatusGetV10(
    request: EndpointRequestMap["QianchuanToolsSmartBoostAdBoostStatusGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsSmartBoostAdBoostStatusGetV10"]> {
    return this.execute("QianchuanToolsSmartBoostAdBoostStatusGetV10", request, options);
  }

  /**
   * QianchuanToolsSmartBoostAdBoostVersionGetV10
   *
   * GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fversion%2Fget%2F
   */
  qianchuanToolsSmartBoostAdBoostVersionGetV10(
    request: EndpointRequestMap["QianchuanToolsSmartBoostAdBoostVersionGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanToolsSmartBoostAdBoostVersionGetV10"]> {
    return this.execute("QianchuanToolsSmartBoostAdBoostVersionGetV10", request, options);
  }

  /**
   * QianchuanTrackUrlCheckV10
   *
   * GET /open_api/v1.0/qianchuan/track_url/check/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftrack_url%2Fcheck%2F
   */
  qianchuanTrackUrlCheckV10(
    request: EndpointRequestMap["QianchuanTrackUrlCheckV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanTrackUrlCheckV10"]> {
    return this.execute("QianchuanTrackUrlCheckV10", request, options);
  }

  /**
   * 新建全域投放计划
   *
   * POST /open_api/v1.0/qianchuan/uni_aweme/ad/create/
   * @see https://open.oceanengine.com/labels/12/docs/1804360384937988
   */
  qianchuanUniAwemeAdCreateV10(
    request: EndpointRequestMap["QianchuanUniAwemeAdCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniAwemeAdCreateV10"]> {
    return this.execute("QianchuanUniAwemeAdCreateV10", request, options);
  }

  /**
   * 编辑全域投放计划
   *
   * POST /open_api/v1.0/qianchuan/uni_aweme/ad/update/
   * @see https://open.oceanengine.com/labels/12/docs/1804361214022656
   */
  qianchuanUniAwemeAdUpdateV10(
    request: EndpointRequestMap["QianchuanUniAwemeAdUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniAwemeAdUpdateV10"]> {
    return this.execute("QianchuanUniAwemeAdUpdateV10", request, options);
  }

  /**
   * 获取乘方&全域投放抖音号列表
   *
   * GET /open_api/v1.0/qianchuan/uni_aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/12/docs/1771196800070656
   */
  qianchuanUniAwemeAuthorizedGetV10(
    request: EndpointRequestMap["QianchuanUniAwemeAuthorizedGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniAwemeAuthorizedGetV10"]> {
    return this.execute("QianchuanUniAwemeAuthorizedGetV10", request, options);
  }

  /**
   * 获取全域建议预算
   *
   * GET /open_api/v1.0/qianchuan/uni_aweme/suggest/budget/
   * @see https://open.oceanengine.com/labels/12/docs/1828257556490251
   */
  qianchuanUniAwemeSuggestBudgetV10(
    request: EndpointRequestMap["QianchuanUniAwemeSuggestBudgetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniAwemeSuggestBudgetV10"]> {
    return this.execute("QianchuanUniAwemeSuggestBudgetV10", request, options);
  }

  /**
   * 获取全域投放控成本计划建议支付ROI目标
   *
   * GET /open_api/v1.0/qianchuan/uni_aweme/suggest/roi/
   * @see https://open.oceanengine.com/labels/12/docs/1851652691167244
   */
  qianchuanUniAwemeSuggestRoiV10(
    request: EndpointRequestMap["QianchuanUniAwemeSuggestRoiV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniAwemeSuggestRoiV10"]> {
    return this.execute("QianchuanUniAwemeSuggestRoiV10", request, options);
  }

  /**
   * 更新乘方&全域投放计划预算
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841395352172800
   */
  qianchuanUniPromotionAdBudgetUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdBudgetUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdBudgetUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdBudgetUpdateV10", request, options);
  }

  /**
   * 修改调控任务预算
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848753215997963
   */
  qianchuanUniPromotionAdControlTaskBudgetUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskBudgetUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskBudgetUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskBudgetUpdateV10", request, options);
  }

  /**
   * 创建调控任务
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/
   * @see https://open.oceanengine.com/labels/12/docs/1825827435645963
   */
  qianchuanUniPromotionAdControlTaskCreateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskCreateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskCreateV10", request, options);
  }

  /**
   * 修改调控任务投放时长
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848754090824768
   */
  qianchuanUniPromotionAdControlTaskDurationUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskDurationUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskDurationUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskDurationUpdateV10", request, options);
  }

  /**
   * 获取调控任务列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/
   * @see https://open.oceanengine.com/labels/12/docs/1824940765838411
   */
  qianchuanUniPromotionAdControlTaskListV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskListV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskListV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskListV10", request, options);
  }

  /**
   * 创建直播-一键控量计划
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/
   * @see https://open.oceanengine.com/labels/12/docs/1848756884121668
   */
  qianchuanUniPromotionAdControlTaskSmartControlCreateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskSmartControlCreateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskSmartControlCreateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskSmartControlCreateV10", request, options);
  }

  /**
   * 修改直播-一键控量计划调控状态
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848757011743171
   */
  qianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10", request, options);
  }

  /**
   * 修改任务调控状态
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/
   * @see https://open.oceanengine.com/labels/12/docs/1825827367287017
   */
  qianchuanUniPromotionAdControlTaskStatusUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskStatusUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskStatusUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskStatusUpdateV10", request, options);
  }

  /**
   * 修改调控任务设置
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848759062499338
   */
  qianchuanUniPromotionAdControlTaskUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdControlTaskUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdControlTaskUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdControlTaskUpdateV10", request, options);
  }

  /**
   * 获取全域&乘方投放计划详情
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/detail/
   * @see https://open.oceanengine.com/labels/12/docs/1804362305657868
   */
  qianchuanUniPromotionAdDetailV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdDetailV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdDetailV10"]> {
    return this.execute("QianchuanUniPromotionAdDetailV10", request, options);
  }

  /**
   * 添加乘方&全域投放计划下素材
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/material/add/
   * @see https://open.oceanengine.com/labels/12/docs/1835232814536707
   */
  qianchuanUniPromotionAdMaterialAddV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdMaterialAddV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdMaterialAddV10"]> {
    return this.execute("QianchuanUniPromotionAdMaterialAddV10", request, options);
  }

  /**
   * 删除全域投放计划下素材
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1804363891396633
   */
  qianchuanUniPromotionAdMaterialDeleteV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdMaterialDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdMaterialDeleteV10"]> {
    return this.execute("QianchuanUniPromotionAdMaterialDeleteV10", request, options);
  }

  /**
   * 获取全域投放计划下素材
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/material/get/
   * @see https://open.oceanengine.com/labels/12/docs/1804363488115850
   */
  qianchuanUniPromotionAdMaterialGetV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdMaterialGetV10"]> {
    return this.execute("QianchuanUniPromotionAdMaterialGetV10", request, options);
  }

  /**
   * 更新商品投放计划名称
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/name/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841393870503040
   */
  qianchuanUniPromotionAdNameUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdNameUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdNameUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdNameUpdateV10", request, options);
  }

  /**
   * 删除乘方&全域计划下商品
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1831614660975370
   */
  qianchuanUniPromotionAdProductDeleteV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdProductDeleteV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdProductDeleteV10"]> {
    return this.execute("QianchuanUniPromotionAdProductDeleteV10", request, options);
  }

  /**
   * 获取全域计划下商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1832185836349447
   */
  qianchuanUniPromotionAdProductGetV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdProductGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdProductGetV10"]> {
    return this.execute("QianchuanUniPromotionAdProductGetV10", request, options);
  }

  /**
   * 更新乘方&全域投放控成本计划支付ROI目标
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841394087572811
   */
  qianchuanUniPromotionAdRoi2GoalUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdRoi2GoalUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdRoi2GoalUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdRoi2GoalUpdateV10", request, options);
  }

  /**
   * 更新乘方&全域投放计划投放时间
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841394454066176
   */
  qianchuanUniPromotionAdScheduleDateUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdScheduleDateUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdScheduleDateUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdScheduleDateUpdateV10", request, options);
  }

  /**
   * 更改乘方&全域投放计划状态
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/status/update/
   * @see https://open.oceanengine.com/labels/12/docs/1804364027501580
   */
  qianchuanUniPromotionAdStatusUpdateV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdStatusUpdateV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdStatusUpdateV10"]> {
    return this.execute("QianchuanUniPromotionAdStatusUpdateV10", request, options);
  }

  /**
   * 获取千川投放计划审核建议
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/
   * @see https://open.oceanengine.com/labels/12/docs/1832628101966183
   */
  qianchuanUniPromotionAdSuggestionV10(
    request: EndpointRequestMap["QianchuanUniPromotionAdSuggestionV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAdSuggestionV10"]> {
    return this.execute("QianchuanUniPromotionAdSuggestionV10", request, options);
  }

  /**
   * 全域授权初始化
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/auth/init/
   * @see https://open.oceanengine.com/labels/12/docs/1840937462771724
   */
  qianchuanUniPromotionAuthInitV10(
    request: EndpointRequestMap["QianchuanUniPromotionAuthInitV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAuthInitV10"]> {
    return this.execute("QianchuanUniPromotionAuthInitV10", request, options);
  }

  /**
   * 获取商品全域可授权店铺列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/
   * @see https://open.oceanengine.com/labels/12/docs/1844495918167047
   */
  qianchuanUniPromotionAuthorizableShopListV10(
    request: EndpointRequestMap["QianchuanUniPromotionAuthorizableShopListV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAuthorizableShopListV10"]> {
    return this.execute("QianchuanUniPromotionAuthorizableShopListV10", request, options);
  }

  /**
   * 客户申请全域投放授权
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/authorization/apply/
   * @see https://open.oceanengine.com/labels/12/docs/1844496211119108
   */
  qianchuanUniPromotionAuthorizationApplyV10(
    request: EndpointRequestMap["QianchuanUniPromotionAuthorizationApplyV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionAuthorizationApplyV10"]> {
    return this.execute("QianchuanUniPromotionAuthorizationApplyV10", request, options);
  }

  /**
   * 获取投放计划可排除抖音视频/图文列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/block_material/get/
   * @see https://open.oceanengine.com/labels/12/docs/1825215820766292
   */
  qianchuanUniPromotionBlockMaterialGetV10(
    request: EndpointRequestMap["QianchuanUniPromotionBlockMaterialGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionBlockMaterialGetV10"]> {
    return this.execute("QianchuanUniPromotionBlockMaterialGetV10", request, options);
  }

  /**
   * 千川全域计划变更消息
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/list/
   * @see https://open.oceanengine.com/labels/12/docs/1829975277306058
   */
  qianchuanUniPromotionListV10(
    request: EndpointRequestMap["QianchuanUniPromotionListV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionListV10"]> {
    return this.execute("QianchuanUniPromotionListV10", request, options);
  }

  /**
   * 乘方&全域-达人/机构获取可选商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1825216033296576
   */
  qianchuanUniPromotionProductAwemeGetV10(
    request: EndpointRequestMap["QianchuanUniPromotionProductAwemeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionProductAwemeGetV10"]> {
    return this.execute("QianchuanUniPromotionProductAwemeGetV10", request, options);
  }

  /**
   * 全域&乘方 商家可选商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1825216221095947
   */
  qianchuanUniPromotionProductGetV10(
    request: EndpointRequestMap["QianchuanUniPromotionProductGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionProductGetV10"]> {
    return this.execute("QianchuanUniPromotionProductGetV10", request, options);
  }

  /**
   * 获取全店托管计划下商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/promshop/product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1870062108453964
   */
  qianchuanUniPromotionPromshopProductGetV10(
    request: EndpointRequestMap["QianchuanUniPromotionPromshopProductGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanUniPromotionPromshopProductGetV10"]> {
    return this.execute("QianchuanUniPromotionPromshopProductGetV10", request, options);
  }

  /**
   * 获取抖音主页视频对应素材库视频
   *
   * GET /open_api/v1.0/qianchuan/video/by_aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1814938748938240
   */
  qianchuanVideoByAwemeGetV10(
    request: EndpointRequestMap["QianchuanVideoByAwemeGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanVideoByAwemeGetV10"]> {
    return this.execute("QianchuanVideoByAwemeGetV10", request, options);
  }

  /**
   * 获取千川素材库视频
   *
   * GET /open_api/v1.0/qianchuan/video/get/
   * @see https://open.oceanengine.com/labels/12/docs/1739309912219663
   */
  qianchuanVideoGetV10(
    request: EndpointRequestMap["QianchuanVideoGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QianchuanVideoGetV10"]> {
    return this.execute("QianchuanVideoGetV10", request, options);
  }

  /**
   * 排期—查询业务实体ID
   *
   * GET /open_api/2/query/booking/business_entity_id/get/
   * @see https://open.oceanengine.com/labels/7/docs/1805443291577572
   */
  queryBookingBusinessEntityIdGetV2(
    request: EndpointRequestMap["QueryBookingBusinessEntityIdGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryBookingBusinessEntityIdGetV2"]> {
    return this.execute("QueryBookingBusinessEntityIdGetV2", request, options);
  }

  /**
   * QueryInvoiceDetailSelfV2
   *
   * GET /open_api/2/query/invoice_detail/self/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_detail%2Fself%2F
   */
  queryInvoiceDetailSelfV2(
    request: EndpointRequestMap["QueryInvoiceDetailSelfV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceDetailSelfV2"]> {
    return this.execute("QueryInvoiceDetailSelfV2", request, options);
  }

  /**
   * QueryInvoiceDetailV2
   *
   * GET /open_api/2/query/invoice_detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_detail%2F
   */
  queryInvoiceDetailV2(
    request: EndpointRequestMap["QueryInvoiceDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceDetailV2"]> {
    return this.execute("QueryInvoiceDetailV2", request, options);
  }

  /**
   * QueryInvoiceElectronicUrlSelfV2
   *
   * GET /open_api/2/query/invoice_electronic_url/self/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_electronic_url%2Fself%2F
   */
  queryInvoiceElectronicUrlSelfV2(
    request: EndpointRequestMap["QueryInvoiceElectronicUrlSelfV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceElectronicUrlSelfV2"]> {
    return this.execute("QueryInvoiceElectronicUrlSelfV2", request, options);
  }

  /**
   * 开票-获取电子发票文件接口（代理商版）
   *
   * GET /open_api/2/query/invoice_electronic_url/
   * @see https://open.oceanengine.com/labels/7/docs/1806786410732555
   */
  queryInvoiceElectronicUrlV2(
    request: EndpointRequestMap["QueryInvoiceElectronicUrlV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceElectronicUrlV2"]> {
    return this.execute("QueryInvoiceElectronicUrlV2", request, options);
  }

  /**
   * QueryInvoiceSelfV2
   *
   * GET /open_api/2/query/invoice/self/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice%2Fself%2F
   */
  queryInvoiceSelfV2(
    request: EndpointRequestMap["QueryInvoiceSelfV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceSelfV2"]> {
    return this.execute("QueryInvoiceSelfV2", request, options);
  }

  /**
   * QueryInvoiceTaxV2
   *
   * GET /open_api/2/query/invoice_tax/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_tax%2F
   */
  queryInvoiceTaxV2(
    request: EndpointRequestMap["QueryInvoiceTaxV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceTaxV2"]> {
    return this.execute("QueryInvoiceTaxV2", request, options);
  }

  /**
   * 开票-查询开票单数据（代理商版）
   *
   * GET /open_api/2/query/invoice/
   * @see https://open.oceanengine.com/labels/7/docs/1784608912700420
   */
  queryInvoiceV2(
    request: EndpointRequestMap["QueryInvoiceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryInvoiceV2"]> {
    return this.execute("QueryInvoiceV2", request, options);
  }

  /**
   * 查询项目信息
   *
   * GET /open_api/2/query/project/
   * @see https://open.oceanengine.com/labels/7/docs/1784608638831619
   */
  queryProjectV2(
    request: EndpointRequestMap["QueryProjectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryProjectV2"]> {
    return this.execute("QueryProjectV2", request, options);
  }

  /**
   * QueryProjectV30
   *
   * GET /open_api/v3.0/query/project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fquery%2Fproject%2F
   */
  queryProjectV30(
    request: EndpointRequestMap["QueryProjectV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryProjectV30"]> {
    return this.execute("QueryProjectV30", request, options);
  }

  /**
   * 返点-查询返点核算流水
   *
   * GET /open_api/2/query/rebate_accounting_info/
   * @see https://open.oceanengine.com/labels/7/docs/1800830404289562
   */
  queryRebateAccountingInfoV2(
    request: EndpointRequestMap["QueryRebateAccountingInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryRebateAccountingInfoV2"]> {
    return this.execute("QueryRebateAccountingInfoV2", request, options);
  }

  /**
   * 返点-查询返点流水
   *
   * GET /open_api/2/query/rebate_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1800831263778816
   */
  queryRebateBalanceV2(
    request: EndpointRequestMap["QueryRebateBalanceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryRebateBalanceV2"]> {
    return this.execute("QueryRebateBalanceV2", request, options);
  }

  /**
   * 查询项目关联结算单信息
   *
   * GET /open_api/2/query/statement/
   * @see https://open.oceanengine.com/labels/7/docs/1783699726068811
   */
  queryStatementV2(
    request: EndpointRequestMap["QueryStatementV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["QueryStatementV2"]> {
    return this.execute("QueryStatementV2", request, options);
  }

  /**
   * 获取推荐使用的视频素材
   *
   * POST /open_api/v3.0/recommend/video/list/
   * @see https://open.oceanengine.com/labels/7/docs/1806800041632778
   */
  recommendVideoListV30(
    request: EndpointRequestMap["RecommendVideoListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RecommendVideoListV30"]> {
    return this.execute("RecommendVideoListV30", request, options);
  }

  /**
   * 创建采纳「拒审素材修复建议」任务
   *
   * POST /open_api/v3.0/reject_material/ai_repair_accept_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1827080076923659
   */
  rejectMaterialAiRepairAcceptTaskCreateV30(
    request: EndpointRequestMap["RejectMaterialAiRepairAcceptTaskCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RejectMaterialAiRepairAcceptTaskCreateV30"]> {
    return this.execute("RejectMaterialAiRepairAcceptTaskCreateV30", request, options);
  }

  /**
   * 获取采纳素材修复建议任务结果
   *
   * GET /open_api/v3.0/reject_material/ai_repair_accept_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1825916274554634
   */
  rejectMaterialAiRepairAcceptTaskListV30(
    request: EndpointRequestMap["RejectMaterialAiRepairAcceptTaskListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RejectMaterialAiRepairAcceptTaskListV30"]> {
    return this.execute("RejectMaterialAiRepairAcceptTaskListV30", request, options);
  }

  /**
   * 根据mid查询同主体账户下修复建议列表 
   *
   * GET /open_api/v3.0/reject_material/ai_repair/cross_account/get/
   * @see https://open.oceanengine.com/labels/7/docs/1828071966256128
   */
  rejectMaterialAiRepairCrossAccountGetV30(
    request: EndpointRequestMap["RejectMaterialAiRepairCrossAccountGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RejectMaterialAiRepairCrossAccountGetV30"]> {
    return this.execute("RejectMaterialAiRepairCrossAccountGetV30", request, options);
  }

  /**
   * 获取拒审素材修复建议
   *
   * GET /open_api/v3.0/reject_material/ai_repair/get/
   * @see https://open.oceanengine.com/labels/7/docs/1827079072367946
   */
  rejectMaterialAiRepairGetV30(
    request: EndpointRequestMap["RejectMaterialAiRepairGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RejectMaterialAiRepairGetV30"]> {
    return this.execute("RejectMaterialAiRepairGetV30", request, options);
  }

  /**
   * RemittanceCodeListGetV30
   *
   * GET /open_api/v3.0/remittance_code/list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fremittance_code%2Flist%2Fget%2F
   */
  remittanceCodeListGetV30(
    request: EndpointRequestMap["RemittanceCodeListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RemittanceCodeListGetV30"]> {
    return this.execute("RemittanceCodeListGetV30", request, options);
  }

  /**
   * 查询汇款码列表信息
   *
   * GET /open_api/v3.0/remittance_code/list/
   * @see https://open.oceanengine.com/labels/7/docs/1834443721254920
   */
  remittanceCodeListV30(
    request: EndpointRequestMap["RemittanceCodeListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["RemittanceCodeListV30"]> {
    return this.execute("RemittanceCodeListV30", request, options);
  }

  /**
   * ReportAdGetV2
   *
   * GET /open_api/2/report/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fad%2Fget%2F
   */
  reportAdGetV2(
    request: EndpointRequestMap["ReportAdGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAdGetV2"]> {
    return this.execute("ReportAdGetV2", request, options);
  }

  /**
   * ReportAdvertiserGetV2
   *
   * GET /open_api/2/report/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fadvertiser%2Fget%2F
   */
  reportAdvertiserGetV2(
    request: EndpointRequestMap["ReportAdvertiserGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAdvertiserGetV2"]> {
    return this.execute("ReportAdvertiserGetV2", request, options);
  }

  /**
   * ReportAgentGetV2V2
   *
   * GET /open_api/2/report/agent/get_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fagent%2Fget_v2%2F
   */
  reportAgentGetV2V2(
    request: EndpointRequestMap["ReportAgentGetV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAgentGetV2V2"]> {
    return this.execute("ReportAgentGetV2V2", request, options);
  }

  /**
   * ReportAudienceAgeV2
   *
   * GET /open_api/2/report/audience/age/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fage%2F
   */
  reportAudienceAgeV2(
    request: EndpointRequestMap["ReportAudienceAgeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAudienceAgeV2"]> {
    return this.execute("ReportAudienceAgeV2", request, options);
  }

  /**
   * ReportAudienceAwemeListV2
   *
   * GET /open_api/2/report/audience/aweme/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Faweme%2Flist%2F
   */
  reportAudienceAwemeListV2(
    request: EndpointRequestMap["ReportAudienceAwemeListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAudienceAwemeListV2"]> {
    return this.execute("ReportAudienceAwemeListV2", request, options);
  }

  /**
   * ReportAudienceCityV2
   *
   * GET /open_api/2/report/audience/city/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fcity%2F
   */
  reportAudienceCityV2(
    request: EndpointRequestMap["ReportAudienceCityV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAudienceCityV2"]> {
    return this.execute("ReportAudienceCityV2", request, options);
  }

  /**
   * ReportAudienceGenderV2
   *
   * GET /open_api/2/report/audience/gender/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fgender%2F
   */
  reportAudienceGenderV2(
    request: EndpointRequestMap["ReportAudienceGenderV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAudienceGenderV2"]> {
    return this.execute("ReportAudienceGenderV2", request, options);
  }

  /**
   * ReportAudienceInterestActionListV2
   *
   * GET /open_api/2/report/audience/interest_action/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Finterest_action%2Flist%2F
   */
  reportAudienceInterestActionListV2(
    request: EndpointRequestMap["ReportAudienceInterestActionListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAudienceInterestActionListV2"]> {
    return this.execute("ReportAudienceInterestActionListV2", request, options);
  }

  /**
   * ReportAudienceProvinceV2
   *
   * GET /open_api/2/report/audience/province/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fprovince%2F
   */
  reportAudienceProvinceV2(
    request: EndpointRequestMap["ReportAudienceProvinceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportAudienceProvinceV2"]> {
    return this.execute("ReportAudienceProvinceV2", request, options);
  }

  /**
   * ReportBrandAdGetV30
   *
   * GET /open_api/v3.0/report/brand/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fad%2Fget%2F
   */
  reportBrandAdGetV30(
    request: EndpointRequestMap["ReportBrandAdGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBrandAdGetV30"]> {
    return this.execute("ReportBrandAdGetV30", request, options);
  }

  /**
   * ReportBrandAdvertiserGetV30
   *
   * GET /open_api/v3.0/report/brand/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fadvertiser%2Fget%2F
   */
  reportBrandAdvertiserGetV30(
    request: EndpointRequestMap["ReportBrandAdvertiserGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBrandAdvertiserGetV30"]> {
    return this.execute("ReportBrandAdvertiserGetV30", request, options);
  }

  /**
   * ReportBrandAgentDataV30
   *
   * GET /open_api/v3.0/report/brand/agent/data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fagent%2Fdata%2F
   */
  reportBrandAgentDataV30(
    request: EndpointRequestMap["ReportBrandAgentDataV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBrandAgentDataV30"]> {
    return this.execute("ReportBrandAgentDataV30", request, options);
  }

  /**
   * ReportBrandCampaignGetV30
   *
   * GET /open_api/v3.0/report/brand/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fcampaign%2Fget%2F
   */
  reportBrandCampaignGetV30(
    request: EndpointRequestMap["ReportBrandCampaignGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBrandCampaignGetV30"]> {
    return this.execute("ReportBrandCampaignGetV30", request, options);
  }

  /**
   * ReportBrandCreativeGetV30
   *
   * GET /open_api/v3.0/report/brand/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fcreative%2Fget%2F
   */
  reportBrandCreativeGetV30(
    request: EndpointRequestMap["ReportBrandCreativeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBrandCreativeGetV30"]> {
    return this.execute("ReportBrandCreativeGetV30", request, options);
  }

  /**
   * ReportBrandDataV30
   *
   * GET /open_api/v3.0/report/brand/data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fdata%2F
   */
  reportBrandDataV30(
    request: EndpointRequestMap["ReportBrandDataV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBrandDataV30"]> {
    return this.execute("ReportBrandDataV30", request, options);
  }

  /**
   * ReportBusinessPlatformStardeliveryTaskVideoDataGetV30
   *
   * GET /open_api/v3.0/report/business_platform/stardelivery/task_video_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbusiness_platform%2Fstardelivery%2Ftask_video_data%2Fget%2F
   */
  reportBusinessPlatformStardeliveryTaskVideoDataGetV30(
    request: EndpointRequestMap["ReportBusinessPlatformStardeliveryTaskVideoDataGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportBusinessPlatformStardeliveryTaskVideoDataGetV30"]> {
    return this.execute("ReportBusinessPlatformStardeliveryTaskVideoDataGetV30", request, options);
  }

  /**
   * ReportCampaignGetV2
   *
   * GET /open_api/2/report/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fcampaign%2Fget%2F
   */
  reportCampaignGetV2(
    request: EndpointRequestMap["ReportCampaignGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCampaignGetV2"]> {
    return this.execute("ReportCampaignGetV2", request, options);
  }

  /**
   * ReportCreativeGetV2
   *
   * GET /open_api/2/report/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fcreative%2Fget%2F
   */
  reportCreativeGetV2(
    request: EndpointRequestMap["ReportCreativeGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCreativeGetV2"]> {
    return this.execute("ReportCreativeGetV2", request, options);
  }

  /**
   * ReportCustomAsyncTaskCreateV30
   *
   * POST /open_api/v3.0/report/custom/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fcreate%2F
   */
  reportCustomAsyncTaskCreateV30(
    request: EndpointRequestMap["ReportCustomAsyncTaskCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCustomAsyncTaskCreateV30"]> {
    return this.execute("ReportCustomAsyncTaskCreateV30", request, options);
  }

  /**
   * ReportCustomAsyncTaskDownloadV30
   *
   * GET /open_api/v3.0/report/custom/async_task/download/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fdownload%2F
   */
  reportCustomAsyncTaskDownloadV30(
    request: EndpointRequestMap["ReportCustomAsyncTaskDownloadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCustomAsyncTaskDownloadV30"]> {
    return this.execute("ReportCustomAsyncTaskDownloadV30", request, options);
  }

  /**
   * ReportCustomAsyncTaskGetV30
   *
   * GET /open_api/v3.0/report/custom/async_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fget%2F
   */
  reportCustomAsyncTaskGetV30(
    request: EndpointRequestMap["ReportCustomAsyncTaskGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCustomAsyncTaskGetV30"]> {
    return this.execute("ReportCustomAsyncTaskGetV30", request, options);
  }

  /**
   * 获取自定义报表可用指标和维度
   *
   * GET /open_api/v3.0/report/custom/config/get/
   * @see https://open.oceanengine.com/labels/7/docs/1755261744248832
   */
  reportCustomConfigGetV30(
    request: EndpointRequestMap["ReportCustomConfigGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCustomConfigGetV30"]> {
    return this.execute("ReportCustomConfigGetV30", request, options);
  }

  /**
   * ReportCustomCreativeGetV30
   *
   * GET /open_api/v3.0/report/custom/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fcreative%2Fget%2F
   */
  reportCustomCreativeGetV30(
    request: EndpointRequestMap["ReportCustomCreativeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCustomCreativeGetV30"]> {
    return this.execute("ReportCustomCreativeGetV30", request, options);
  }

  /**
   * 自定义报表
   *
   * GET /open_api/v3.0/report/custom/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741387668314126
   */
  reportCustomGetV30(
    request: EndpointRequestMap["ReportCustomGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportCustomGetV30"]> {
    return this.execute("ReportCustomGetV30", request, options);
  }

  /**
   * ReportJointGrowthCusGetV30
   *
   * GET /open_api/v3.0/report/joint_growth_cus/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fjoint_growth_cus%2Fget%2F
   */
  reportJointGrowthCusGetV30(
    request: EndpointRequestMap["ReportJointGrowthCusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportJointGrowthCusGetV30"]> {
    return this.execute("ReportJointGrowthCusGetV30", request, options);
  }

  /**
   * ReportJointGrowthGetV30
   *
   * GET /open_api/v3.0/report/joint_growth/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fjoint_growth%2Fget%2F
   */
  reportJointGrowthGetV30(
    request: EndpointRequestMap["ReportJointGrowthGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportJointGrowthGetV30"]> {
    return this.execute("ReportJointGrowthGetV30", request, options);
  }

  /**
   * 直播间分析报表【新】
   *
   * GET /open_api/v3.0/report/live_room/analysis/get/
   * @see https://open.oceanengine.com/labels/7/docs/1844117189152843
   */
  reportLiveRoomAnalysisGetV30(
    request: EndpointRequestMap["ReportLiveRoomAnalysisGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportLiveRoomAnalysisGetV30"]> {
    return this.execute("ReportLiveRoomAnalysisGetV30", request, options);
  }

  /**
   * ReportProductAsyncTaskDownloadV30
   *
   * GET /open_api/v3.0/report/product/async_task/download/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct%2Fasync_task%2Fdownload%2F
   */
  reportProductAsyncTaskDownloadV30(
    request: EndpointRequestMap["ReportProductAsyncTaskDownloadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportProductAsyncTaskDownloadV30"]> {
    return this.execute("ReportProductAsyncTaskDownloadV30", request, options);
  }

  /**
   * ReportProductAsyncTaskGetV30
   *
   * POST /open_api/v3.0/report/product/async_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct%2Fasync_task%2Fget%2F
   */
  reportProductAsyncTaskGetV30(
    request: EndpointRequestMap["ReportProductAsyncTaskGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportProductAsyncTaskGetV30"]> {
    return this.execute("ReportProductAsyncTaskGetV30", request, options);
  }

  /**
   * ReportProductDailyAsyncTaskCreateV30
   *
   * POST /open_api/v3.0/report/product_daily/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct_daily%2Fasync_task%2Fcreate%2F
   */
  reportProductDailyAsyncTaskCreateV30(
    request: EndpointRequestMap["ReportProductDailyAsyncTaskCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportProductDailyAsyncTaskCreateV30"]> {
    return this.execute("ReportProductDailyAsyncTaskCreateV30", request, options);
  }

  /**
   * ReportProductHourlyAsyncTaskCreateV30
   *
   * POST /open_api/v3.0/report/product_hourly/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct_hourly%2Fasync_task%2Fcreate%2F
   */
  reportProductHourlyAsyncTaskCreateV30(
    request: EndpointRequestMap["ReportProductHourlyAsyncTaskCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportProductHourlyAsyncTaskCreateV30"]> {
    return this.execute("ReportProductHourlyAsyncTaskCreateV30", request, options);
  }

  /**
   * 直播间受众分析报表【新】
   *
   * GET /open_api/v3.0/report/report/live_room/audience/portrait/get/
   * @see https://open.oceanengine.com/labels/7/docs/1844124823356825
   */
  reportReportLiveRoomAudiencePortraitGetV30(
    request: EndpointRequestMap["ReportReportLiveRoomAudiencePortraitGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportReportLiveRoomAudiencePortraitGetV30"]> {
    return this.execute("ReportReportLiveRoomAudiencePortraitGetV30", request, options);
  }

  /**
   * 获取穿山甲客户分流联合实验数据
   *
   * GET /open_api/2/report/rta_cus_exp/get/
   * @see https://open.oceanengine.com/labels/7/docs/1789418134779913
   */
  reportRtaCusExpGetV2(
    request: EndpointRequestMap["ReportRtaCusExpGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportRtaCusExpGetV2"]> {
    return this.execute("ReportRtaCusExpGetV2", request, options);
  }

  /**
   * 获取穿山甲渠道RTA联合实验数据
   *
   * GET /open_api/2/report/rta_exp/get/
   * @see https://open.oceanengine.com/labels/7/docs/1738683217044484
   */
  reportRtaExpGetV2(
    request: EndpointRequestMap["ReportRtaExpGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportRtaExpGetV2"]> {
    return this.execute("ReportRtaExpGetV2", request, options);
  }

  /**
   * 获取站内媒体RTA联合实验数据（分天t+1）
   *
   * GET /open_api/v3.0/report/rta_exp_local_daily/get/
   * @see https://open.oceanengine.com/labels/7/docs/1743460024243204
   */
  reportRtaExpLocalDailyGetV30(
    request: EndpointRequestMap["ReportRtaExpLocalDailyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportRtaExpLocalDailyGetV30"]> {
    return this.execute("ReportRtaExpLocalDailyGetV30", request, options);
  }

  /**
   * 获取站内媒体RTA联合实验数据（分时t+5）
   *
   * GET /open_api/v3.0/report/rta_exp_local_hourly/get/
   * @see https://open.oceanengine.com/labels/7/docs/1743392244103246
   */
  reportRtaExpLocalHourlyGetV30(
    request: EndpointRequestMap["ReportRtaExpLocalHourlyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportRtaExpLocalHourlyGetV30"]> {
    return this.execute("ReportRtaExpLocalHourlyGetV30", request, options);
  }

  /**
   * ReportRtaGetV2
   *
   * GET /open_api/2/report/rta/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Frta%2Fget%2F
   */
  reportRtaGetV2(
    request: EndpointRequestMap["ReportRtaGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportRtaGetV2"]> {
    return this.execute("ReportRtaGetV2", request, options);
  }

  /**
   * ReportRubeexGetV2
   *
   * GET /open_api/2/report/rubeex/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Frubeex%2Fget%2F
   */
  reportRubeexGetV2(
    request: EndpointRequestMap["ReportRubeexGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportRubeexGetV2"]> {
    return this.execute("ReportRubeexGetV2", request, options);
  }

  /**
   * 橙子建站落地页数据
   *
   * GET /open_api/2/report/site/page/
   * @see https://open.oceanengine.com/labels/7/docs/1696710565390348
   */
  reportSitePageV2(
    request: EndpointRequestMap["ReportSitePageV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportSitePageV2"]> {
    return this.execute("ReportSitePageV2", request, options);
  }

  /**
   * ReportStardeliveryTaskDataGetV30
   *
   * GET /open_api/v3.0/report/stardelivery/task_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fstardelivery%2Ftask_data%2Fget%2F
   */
  reportStardeliveryTaskDataGetV30(
    request: EndpointRequestMap["ReportStardeliveryTaskDataGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportStardeliveryTaskDataGetV30"]> {
    return this.execute("ReportStardeliveryTaskDataGetV30", request, options);
  }

  /**
   * ReportStardeliveryTaskVideoDataGetV30
   *
   * GET /open_api/v3.0/report/stardelivery/task_video_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fstardelivery%2Ftask_video_data%2Fget%2F
   */
  reportStardeliveryTaskVideoDataGetV30(
    request: EndpointRequestMap["ReportStardeliveryTaskVideoDataGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportStardeliveryTaskVideoDataGetV30"]> {
    return this.execute("ReportStardeliveryTaskVideoDataGetV30", request, options);
  }

  /**
   * ReportVideoFrameGetV2
   *
   * GET /open_api/2/report/video/frame/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fvideo%2Fframe%2Fget%2F
   */
  reportVideoFrameGetV2(
    request: EndpointRequestMap["ReportVideoFrameGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ReportVideoFrameGetV2"]> {
    return this.execute("ReportVideoFrameGetV2", request, options);
  }

  /**
   * ScheduleResultGetV30
   *
   * GET /open_api/v3.0/schedule/result/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fschedule%2Fresult%2Fget%2F
   */
  scheduleResultGetV30(
    request: EndpointRequestMap["ScheduleResultGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ScheduleResultGetV30"]> {
    return this.execute("ScheduleResultGetV30", request, options);
  }

  /**
   * SecurityAuditResultsV30
   *
   * GET /open_api/v3.0/security/audit_results/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Faudit_results%2F
   */
  securityAuditResultsV30(
    request: EndpointRequestMap["SecurityAuditResultsV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityAuditResultsV30"]> {
    return this.execute("SecurityAuditResultsV30", request, options);
  }

  /**
   * SecurityCreateAppealV30
   *
   * POST /open_api/v3.0/security/create_appeal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fcreate_appeal%2F
   */
  securityCreateAppealV30(
    request: EndpointRequestMap["SecurityCreateAppealV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityCreateAppealV30"]> {
    return this.execute("SecurityCreateAppealV30", request, options);
  }

  /**
   * SecurityGetConsultResultV30
   *
   * GET /open_api/v3.0/security/get_consult_result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fget_consult_result%2F
   */
  securityGetConsultResultV30(
    request: EndpointRequestMap["SecurityGetConsultResultV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityGetConsultResultV30"]> {
    return this.execute("SecurityGetConsultResultV30", request, options);
  }

  /**
   * 非积分处置事件
   *
   * GET /open_api/v3.0/security/non_score_disposal_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1862334279237632
   */
  securityNonScoreDisposalInfoGetV30(
    request: EndpointRequestMap["SecurityNonScoreDisposalInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityNonScoreDisposalInfoGetV30"]> {
    return this.execute("SecurityNonScoreDisposalInfoGetV30", request, options);
  }

  /**
   * SecurityOpenMaterialAuditV30
   *
   * POST /open_api/v3.0/security/open_material_audit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fopen_material_audit%2F
   */
  securityOpenMaterialAuditV30(
    request: EndpointRequestMap["SecurityOpenMaterialAuditV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityOpenMaterialAuditV30"]> {
    return this.execute("SecurityOpenMaterialAuditV30", request, options);
  }

  /**
   * 积分处置事件
   *
   * GET /open_api/v3.0/security/score_disposal_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1807434773467145
   */
  securityScoreDisposalInfoGetV30(
    request: EndpointRequestMap["SecurityScoreDisposalInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityScoreDisposalInfoGetV30"]> {
    return this.execute("SecurityScoreDisposalInfoGetV30", request, options);
  }

  /**
   * 查询账户累计积分
   *
   * GET /open_api/v3.0/security/score_total/get/
   * @see https://open.oceanengine.com/labels/7/docs/1807434247414986
   */
  securityScoreTotalGetV30(
    request: EndpointRequestMap["SecurityScoreTotalGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityScoreTotalGetV30"]> {
    return this.execute("SecurityScoreTotalGetV30", request, options);
  }

  /**
   * 违规积分事件
   *
   * GET /open_api/v3.0/security/score_violation_event/get/
   * @see https://open.oceanengine.com/labels/7/docs/1807434741637545
   */
  securityScoreViolationEventGetV30(
    request: EndpointRequestMap["SecurityScoreViolationEventGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SecurityScoreViolationEventGetV30"]> {
    return this.execute("SecurityScoreViolationEventGetV30", request, options);
  }

  /**
   * ServeMarketActiveFuncGetV10
   *
   * GET /open_api/v1.0/serve_market/active_func/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fserve_market%2Factive_func%2Fget%2F
   */
  serveMarketActiveFuncGetV10(
    request: EndpointRequestMap["ServeMarketActiveFuncGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ServeMarketActiveFuncGetV10"]> {
    return this.execute("ServeMarketActiveFuncGetV10", request, options);
  }

  /**
   * 获取App Access Token校验信息
   *
   * GET /open_api/v1.0/serve_market/cid/verify_token/
   * @see https://open.oceanengine.com/labels/30/docs/1782609755121690
   */
  serveMarketCidVerifyTokenV10(
    request: EndpointRequestMap["ServeMarketCidVerifyTokenV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ServeMarketCidVerifyTokenV10"]> {
    return this.execute("ServeMarketCidVerifyTokenV10", request, options);
  }

  /**
   * 获取应用订单数据
   *
   * GET /open_api/v1.0/serve_market/order/get/
   * @see https://open.oceanengine.com/labels/30/docs/1736319607097355
   */
  serveMarketOrderGetV10(
    request: EndpointRequestMap["ServeMarketOrderGetV10"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ServeMarketOrderGetV10"]> {
    return this.execute("ServeMarketOrderGetV10", request, options);
  }

  /**
   * 共享钱包-查询账户对应公司下的钱包关系
   *
   * GET /open_api/v3.0/shared_wallet/account_relation/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798907322782729
   */
  sharedWalletAccountRelationGetV30(
    request: EndpointRequestMap["SharedWalletAccountRelationGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletAccountRelationGetV30"]> {
    return this.execute("SharedWalletAccountRelationGetV30", request, options);
  }

  /**
   * 资金共享-查询子钱包预算
   *
   * GET /open_api/v3.0/shared_wallet/budget/get/
   * @see https://open.oceanengine.com/labels/7/docs/1840959608957207
   */
  sharedWalletBudgetGetV30(
    request: EndpointRequestMap["SharedWalletBudgetGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletBudgetGetV30"]> {
    return this.execute("SharedWalletBudgetGetV30", request, options);
  }

  /**
   * 资金共享-设置子钱包预算
   *
   * POST /open_api/v3.0/shared_wallet/budget/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1841044638550027
   */
  sharedWalletBudgetSubmitV30(
    request: EndpointRequestMap["SharedWalletBudgetSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletBudgetSubmitV30"]> {
    return this.execute("SharedWalletBudgetSubmitV30", request, options);
  }

  /**
   * 资金共享-查询共享钱包日流水
   *
   * GET /open_api/v3.0/shared_wallet/daily_stat/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465810440256
   */
  sharedWalletDailyStatGetV30(
    request: EndpointRequestMap["SharedWalletDailyStatGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletDailyStatGetV30"]> {
    return this.execute("SharedWalletDailyStatGetV30", request, options);
  }

  /**
   * 资金共享-共享钱包信息查询
   *
   * GET /open_api/v3.0/shared_wallet/main_wallet/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465885126668
   */
  sharedWalletMainWalletGetV30(
    request: EndpointRequestMap["SharedWalletMainWalletGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletMainWalletGetV30"]> {
    return this.execute("SharedWalletMainWalletGetV30", request, options);
  }

  /**
   * 资金共享-共享钱包绑定/换绑/解绑
   *
   * POST /open_api/v3.0/shared_wallet/shared_relation/create/
   * @see https://open.oceanengine.com/labels/7/docs/1848121521443095
   */
  sharedWalletSharedRelationCreateV30(
    request: EndpointRequestMap["SharedWalletSharedRelationCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletSharedRelationCreateV30"]> {
    return this.execute("SharedWalletSharedRelationCreateV30", request, options);
  }

  /**
   * 资金共享-创建小钱包
   *
   * POST /open_api/v3.0/shared_wallet/sub_wallet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1859153660820492
   */
  sharedWalletSubWalletCreateV30(
    request: EndpointRequestMap["SharedWalletSubWalletCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletSubWalletCreateV30"]> {
    return this.execute("SharedWalletSubWalletCreateV30", request, options);
  }

  /**
   * 资金共享-查询共享钱包流水明细
   *
   * GET /open_api/v3.0/shared_wallet/transaction_detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465768014922
   */
  sharedWalletTransactionDetailGetV30(
    request: EndpointRequestMap["SharedWalletTransactionDetailGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletTransactionDetailGetV30"]> {
    return this.execute("SharedWalletTransactionDetailGetV30", request, options);
  }

  /**
   * 资金共享-查询ADV粒度操作记录
   *
   * GET /open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/
   * @see https://open.oceanengine.com/labels/7/docs/1848384541742468
   */
  sharedWalletWalletAdvOperationLogGetV30(
    request: EndpointRequestMap["SharedWalletWalletAdvOperationLogGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWalletAdvOperationLogGetV30"]> {
    return this.execute("SharedWalletWalletAdvOperationLogGetV30", request, options);
  }

  /**
   * 资金共享-批量查询钱包余额
   *
   * GET /open_api/v3.0/shared_wallet/wallet_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465689405452
   */
  sharedWalletWalletBalanceGetV30(
    request: EndpointRequestMap["SharedWalletWalletBalanceGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWalletBalanceGetV30"]> {
    return this.execute("SharedWalletWalletBalanceGetV30", request, options);
  }

  /**
   * SharedWalletWalletEbpRelationGetV30
   *
   * GET /open_api/v3.0/shared_wallet/wallet_ebp_relation/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshared_wallet%2Fwallet_ebp_relation%2Fget%2F
   */
  sharedWalletWalletEbpRelationGetV30(
    request: EndpointRequestMap["SharedWalletWalletEbpRelationGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWalletEbpRelationGetV30"]> {
    return this.execute("SharedWalletWalletEbpRelationGetV30", request, options);
  }

  /**
   * 资金共享-批量查询钱包信息
   *
   * GET /open_api/v3.0/shared_wallet/wallet_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465839055872
   */
  sharedWalletWalletInfoGetV30(
    request: EndpointRequestMap["SharedWalletWalletInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWalletInfoGetV30"]> {
    return this.execute("SharedWalletWalletInfoGetV30", request, options);
  }

  /**
   * 查询钱包粒度操作记录
   *
   * GET /open_api/v3.0/shared_wallet/wallet_operation_log/get/
   * @see https://open.oceanengine.com/labels/7/docs/1848384507795715
   */
  sharedWalletWalletOperationLogGetV30(
    request: EndpointRequestMap["SharedWalletWalletOperationLogGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWalletOperationLogGetV30"]> {
    return this.execute("SharedWalletWalletOperationLogGetV30", request, options);
  }

  /**
   * 资金共享-查询子钱包下绑定的adv列表
   *
   * GET /open_api/v3.0/shared_wallet/wallet_relation/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465996741772
   */
  sharedWalletWalletRelationGetV30(
    request: EndpointRequestMap["SharedWalletWalletRelationGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWalletRelationGetV30"]> {
    return this.execute("SharedWalletWalletRelationGetV30", request, options);
  }

  /**
   * 资金共享-查询子钱包盯盘规则
   *
   * GET /open_api/v3.0/shared_wallet/watch_rule/get/
   * @see https://open.oceanengine.com/labels/7/docs/1840960035997696
   */
  sharedWalletWatchRuleGetV30(
    request: EndpointRequestMap["SharedWalletWatchRuleGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWatchRuleGetV30"]> {
    return this.execute("SharedWalletWatchRuleGetV30", request, options);
  }

  /**
   * 资金共享-设置子钱包盯盘规则
   *
   * POST /open_api/v3.0/shared_wallet/watch_rule/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1841044864825417
   */
  sharedWalletWatchRuleSubmitV30(
    request: EndpointRequestMap["SharedWalletWatchRuleSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SharedWalletWatchRuleSubmitV30"]> {
    return this.execute("SharedWalletWatchRuleSubmitV30", request, options);
  }

  /**
   * ShopBonusCreateV30
   *
   * POST /open_api/v3.0/shop_bonus/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshop_bonus%2Fcreate%2F
   */
  shopBonusCreateV30(
    request: EndpointRequestMap["ShopBonusCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ShopBonusCreateV30"]> {
    return this.execute("ShopBonusCreateV30", request, options);
  }

  /**
   * ShopBonusSuccessGetV30
   *
   * GET /open_api/v3.0/shop_bonus_success/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshop_bonus_success%2Fget%2F
   */
  shopBonusSuccessGetV30(
    request: EndpointRequestMap["ShopBonusSuccessGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ShopBonusSuccessGetV30"]> {
    return this.execute("ShopBonusSuccessGetV30", request, options);
  }

  /**
   * 获取推送数据列表
   *
   * GET /open_api/2/spi_task/get/
   * @see https://open.oceanengine.com/labels/7/docs/1725097846184964
   */
  spiTaskGetV2(
    request: EndpointRequestMap["SpiTaskGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SpiTaskGetV2"]> {
    return this.execute("SpiTaskGetV2", request, options);
  }

  /**
   * StarAttachmentUploadV2
   *
   * POST /open_api/2/star/attachment/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattachment%2Fupload%2F
   */
  starAttachmentUploadV2(
    request: EndpointRequestMap["StarAttachmentUploadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarAttachmentUploadV2"]> {
    return this.execute("StarAttachmentUploadV2", request, options);
  }

  /**
   * StarAttributeItemEventFeedbackV2
   *
   * POST /open_api/2/star/attribute/item_event_feedback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fitem_event_feedback%2F
   */
  starAttributeItemEventFeedbackV2(
    request: EndpointRequestMap["StarAttributeItemEventFeedbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarAttributeItemEventFeedbackV2"]> {
    return this.execute("StarAttributeItemEventFeedbackV2", request, options);
  }

  /**
   * StarAttributeJdOverflowConvertV2
   *
   * POST /open_api/2/star/attribute/jd_overflow_convert/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fjd_overflow_convert%2F
   */
  starAttributeJdOverflowConvertV2(
    request: EndpointRequestMap["StarAttributeJdOverflowConvertV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarAttributeJdOverflowConvertV2"]> {
    return this.execute("StarAttributeJdOverflowConvertV2", request, options);
  }

  /**
   * StarAttributeUserEventFeedbackV2
   *
   * POST /open_api/2/star/attribute/user_event_feedback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fuser_event_feedback%2F
   */
  starAttributeUserEventFeedbackV2(
    request: EndpointRequestMap["StarAttributeUserEventFeedbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarAttributeUserEventFeedbackV2"]> {
    return this.execute("StarAttributeUserEventFeedbackV2", request, options);
  }

  /**
   * StarAttributeUserInfoFeedbackV2
   *
   * POST /open_api/2/star/attribute/user_info_feedback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fuser_info_feedback%2F
   */
  starAttributeUserInfoFeedbackV2(
    request: EndpointRequestMap["StarAttributeUserInfoFeedbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarAttributeUserInfoFeedbackV2"]> {
    return this.execute("StarAttributeUserInfoFeedbackV2", request, options);
  }

  /**
   * StarBillGetPendingV2
   *
   * GET /open_api/2/star/bill/get_pending/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbill%2Fget_pending%2F
   */
  starBillGetPendingV2(
    request: EndpointRequestMap["StarBillGetPendingV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarBillGetPendingV2"]> {
    return this.execute("StarBillGetPendingV2", request, options);
  }

  /**
   * StarBillPayV2
   *
   * POST /open_api/2/star/bill/pay/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbill%2Fpay%2F
   */
  starBillPayV2(
    request: EndpointRequestMap["StarBillPayV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarBillPayV2"]> {
    return this.execute("StarBillPayV2", request, options);
  }

  /**
   * StarBrandCategoryListV2
   *
   * GET /open_api/2/star/brand_category/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbrand_category%2Flist%2F
   */
  starBrandCategoryListV2(
    request: EndpointRequestMap["StarBrandCategoryListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarBrandCategoryListV2"]> {
    return this.execute("StarBrandCategoryListV2", request, options);
  }

  /**
   * StarBrandListV2
   *
   * GET /open_api/2/star/brand/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbrand%2Flist%2F
   */
  starBrandListV2(
    request: EndpointRequestMap["StarBrandListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarBrandListV2"]> {
    return this.execute("StarBrandListV2", request, options);
  }

  /**
   * StarCampaignListV2
   *
   * GET /open_api/2/star/campaign/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcampaign%2Flist%2F
   */
  starCampaignListV2(
    request: EndpointRequestMap["StarCampaignListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarCampaignListV2"]> {
    return this.execute("StarCampaignListV2", request, options);
  }

  /**
   * StarChallengeAddBudgetV2
   *
   * POST /open_api/2/star/challenge/add_budget/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fadd_budget%2F
   */
  starChallengeAddBudgetV2(
    request: EndpointRequestMap["StarChallengeAddBudgetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeAddBudgetV2"]> {
    return this.execute("StarChallengeAddBudgetV2", request, options);
  }

  /**
   * StarChallengeAuthorListV2
   *
   * GET /open_api/2/star/challenge/author_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fauthor_list%2F
   */
  starChallengeAuthorListV2(
    request: EndpointRequestMap["StarChallengeAuthorListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeAuthorListV2"]> {
    return this.execute("StarChallengeAuthorListV2", request, options);
  }

  /**
   * StarChallengeCancelV2
   *
   * POST /open_api/2/star/challenge/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fcancel%2F
   */
  starChallengeCancelV2(
    request: EndpointRequestMap["StarChallengeCancelV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeCancelV2"]> {
    return this.execute("StarChallengeCancelV2", request, options);
  }

  /**
   * StarChallengeChooseTaskItemWithRewardV2
   *
   * POST /open_api/2/star/challenge/choose_task_item_with_reward/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fchoose_task_item_with_reward%2F
   */
  starChallengeChooseTaskItemWithRewardV2(
    request: EndpointRequestMap["StarChallengeChooseTaskItemWithRewardV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeChooseTaskItemWithRewardV2"]> {
    return this.execute("StarChallengeChooseTaskItemWithRewardV2", request, options);
  }

  /**
   * StarChallengeExpandRangeV2
   *
   * POST /open_api/2/star/challenge/expand_range/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fexpand_range%2F
   */
  starChallengeExpandRangeV2(
    request: EndpointRequestMap["StarChallengeExpandRangeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeExpandRangeV2"]> {
    return this.execute("StarChallengeExpandRangeV2", request, options);
  }

  /**
   * StarChallengeGetCustomTaskDataV2
   *
   * GET /open_api/2/star/challenge/get_custom_task_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_custom_task_data%2F
   */
  starChallengeGetCustomTaskDataV2(
    request: EndpointRequestMap["StarChallengeGetCustomTaskDataV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeGetCustomTaskDataV2"]> {
    return this.execute("StarChallengeGetCustomTaskDataV2", request, options);
  }

  /**
   * StarChallengeGetCustomTaskListV2
   *
   * GET /open_api/2/star/challenge/get_custom_task_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_custom_task_list%2F
   */
  starChallengeGetCustomTaskListV2(
    request: EndpointRequestMap["StarChallengeGetCustomTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeGetCustomTaskListV2"]> {
    return this.execute("StarChallengeGetCustomTaskListV2", request, options);
  }

  /**
   * StarChallengeGetPushAdResultsV2
   *
   * GET /open_api/2/star/challenge/get_push_ad_results/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_push_ad_results%2F
   */
  starChallengeGetPushAdResultsV2(
    request: EndpointRequestMap["StarChallengeGetPushAdResultsV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeGetPushAdResultsV2"]> {
    return this.execute("StarChallengeGetPushAdResultsV2", request, options);
  }

  /**
   * StarChallengeInfoV2
   *
   * GET /open_api/2/star/challenge/info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Finfo%2F
   */
  starChallengeInfoV2(
    request: EndpointRequestMap["StarChallengeInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeInfoV2"]> {
    return this.execute("StarChallengeInfoV2", request, options);
  }

  /**
   * StarChallengeItemsDataV2
   *
   * GET /open_api/2/star/challenge/items_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fitems_data%2F
   */
  starChallengeItemsDataV2(
    request: EndpointRequestMap["StarChallengeItemsDataV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeItemsDataV2"]> {
    return this.execute("StarChallengeItemsDataV2", request, options);
  }

  /**
   * StarChallengeListV2
   *
   * GET /open_api/2/star/challenge/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Flist%2F
   */
  starChallengeListV2(
    request: EndpointRequestMap["StarChallengeListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeListV2"]> {
    return this.execute("StarChallengeListV2", request, options);
  }

  /**
   * StarChallengePushItemsToAdV2
   *
   * POST /open_api/2/star/challenge/push_items_to_ad/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fpush_items_to_ad%2F
   */
  starChallengePushItemsToAdV2(
    request: EndpointRequestMap["StarChallengePushItemsToAdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengePushItemsToAdV2"]> {
    return this.execute("StarChallengePushItemsToAdV2", request, options);
  }

  /**
   * StarChallengeSyncItemToAdV2
   *
   * POST /open_api/2/star/challenge/sync_item_to_ad/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fsync_item_to_ad%2F
   */
  starChallengeSyncItemToAdV2(
    request: EndpointRequestMap["StarChallengeSyncItemToAdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarChallengeSyncItemToAdV2"]> {
    return this.execute("StarChallengeSyncItemToAdV2", request, options);
  }

  /**
   * 获取星图订单投后线索
   *
   * GET /open_api/2/star/clue/get/
   * @see https://open.oceanengine.com/labels/13/docs/1703055296121864
   */
  starClueGetV2(
    request: EndpointRequestMap["StarClueGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarClueGetV2"]> {
    return this.execute("StarClueGetV2", request, options);
  }

  /**
   * StarComponentCreateCommonComponentV2
   *
   * POST /open_api/2/star/component/create_common_component/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fcreate_common_component%2F
   */
  starComponentCreateCommonComponentV2(
    request: EndpointRequestMap["StarComponentCreateCommonComponentV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarComponentCreateCommonComponentV2"]> {
    return this.execute("StarComponentCreateCommonComponentV2", request, options);
  }

  /**
   * StarComponentCreateLinkV2
   *
   * POST /open_api/2/star/component/create_link/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fcreate_link%2F
   */
  starComponentCreateLinkV2(
    request: EndpointRequestMap["StarComponentCreateLinkV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarComponentCreateLinkV2"]> {
    return this.execute("StarComponentCreateLinkV2", request, options);
  }

  /**
   * StarComponentQueryIndustryAnchorV2
   *
   * GET /open_api/2/star/component/query_industry_anchor/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fquery_industry_anchor%2F
   */
  starComponentQueryIndustryAnchorV2(
    request: EndpointRequestMap["StarComponentQueryIndustryAnchorV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarComponentQueryIndustryAnchorV2"]> {
    return this.execute("StarComponentQueryIndustryAnchorV2", request, options);
  }

  /**
   * StarComponentQueryLinkV2
   *
   * GET /open_api/2/star/component/query_link/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fquery_link%2F
   */
  starComponentQueryLinkV2(
    request: EndpointRequestMap["StarComponentQueryLinkV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarComponentQueryLinkV2"]> {
    return this.execute("StarComponentQueryLinkV2", request, options);
  }

  /**
   * StarComponentUpdateCommonComponentV2
   *
   * POST /open_api/2/star/component/update_common_component/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fupdate_common_component%2F
   */
  starComponentUpdateCommonComponentV2(
    request: EndpointRequestMap["StarComponentUpdateCommonComponentV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarComponentUpdateCommonComponentV2"]> {
    return this.execute("StarComponentUpdateCommonComponentV2", request, options);
  }

  /**
   * StarComponentUpdateLinkV2
   *
   * POST /open_api/2/star/component/update_link/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fupdate_link%2F
   */
  starComponentUpdateLinkV2(
    request: EndpointRequestMap["StarComponentUpdateLinkV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarComponentUpdateLinkV2"]> {
    return this.execute("StarComponentUpdateLinkV2", request, options);
  }

  /**
   * StarCopyrightCreateV2
   *
   * POST /open_api/2/star/copyright/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcopyright%2Fcreate%2F
   */
  starCopyrightCreateV2(
    request: EndpointRequestMap["StarCopyrightCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarCopyrightCreateV2"]> {
    return this.execute("StarCopyrightCreateV2", request, options);
  }

  /**
   * StarCopyrightGetV2
   *
   * GET /open_api/2/star/copyright/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcopyright%2Fget%2F
   */
  starCopyrightGetV2(
    request: EndpointRequestMap["StarCopyrightGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarCopyrightGetV2"]> {
    return this.execute("StarCopyrightGetV2", request, options);
  }

  /**
   * StarCreateProjectV2
   *
   * POST /open_api/2/star/create/project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcreate%2Fproject%2F
   */
  starCreateProjectV2(
    request: EndpointRequestMap["StarCreateProjectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarCreateProjectV2"]> {
    return this.execute("StarCreateProjectV2", request, options);
  }

  /**
   * StarDataTaskTimelineReportV2
   *
   * GET /open_api/2/star/data/task_timeline_report/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdata%2Ftask_timeline_report%2F
   */
  starDataTaskTimelineReportV2(
    request: EndpointRequestMap["StarDataTaskTimelineReportV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDataTaskTimelineReportV2"]> {
    return this.execute("StarDataTaskTimelineReportV2", request, options);
  }

  /**
   * StarDemandCreateAssignV2
   *
   * POST /open_api/2/star/demand/create_assign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fcreate_assign%2F
   */
  starDemandCreateAssignV2(
    request: EndpointRequestMap["StarDemandCreateAssignV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandCreateAssignV2"]> {
    return this.execute("StarDemandCreateAssignV2", request, options);
  }

  /**
   * StarDemandCreateChallengeV2
   *
   * POST /open_api/2/star/demand/create_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fcreate_challenge%2F
   */
  starDemandCreateChallengeV2(
    request: EndpointRequestMap["StarDemandCreateChallengeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandCreateChallengeV2"]> {
    return this.execute("StarDemandCreateChallengeV2", request, options);
  }

  /**
   * StarDemandGetEpisodeLimitV2
   *
   * GET /open_api/2/star/demand/get_episode_limit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fget_episode_limit%2F
   */
  starDemandGetEpisodeLimitV2(
    request: EndpointRequestMap["StarDemandGetEpisodeLimitV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandGetEpisodeLimitV2"]> {
    return this.execute("StarDemandGetEpisodeLimitV2", request, options);
  }

  /**
   * StarDemandGetResellCodeV2
   *
   * GET /open_api/2/star/demand/get_resell_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fget_resell_code%2F
   */
  starDemandGetResellCodeV2(
    request: EndpointRequestMap["StarDemandGetResellCodeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandGetResellCodeV2"]> {
    return this.execute("StarDemandGetResellCodeV2", request, options);
  }

  /**
   * 获取星图客户任务列表
   *
   * GET /open_api/2/star/demand/list/
   * @see https://open.oceanengine.com/labels/13/docs/1696710606998540
   */
  starDemandListV2(
    request: EndpointRequestMap["StarDemandListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandListV2"]> {
    return this.execute("StarDemandListV2", request, options);
  }

  /**
   * StarDemandMixListGetV2
   *
   * GET /open_api/2/star/demand/mix/list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fmix%2Flist%2Fget%2F
   */
  starDemandMixListGetV2(
    request: EndpointRequestMap["StarDemandMixListGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandMixListGetV2"]> {
    return this.execute("StarDemandMixListGetV2", request, options);
  }

  /**
   * StarDemandOmCreateChallengeV2
   *
   * POST /open_api/2/star/demand/om_create_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_create_challenge%2F
   */
  starDemandOmCreateChallengeV2(
    request: EndpointRequestMap["StarDemandOmCreateChallengeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmCreateChallengeV2"]> {
    return this.execute("StarDemandOmCreateChallengeV2", request, options);
  }

  /**
   * StarDemandOmExpandChallengeProviderV2
   *
   * POST /open_api/2/star/demand/om_expand_challenge_provider/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_expand_challenge_provider%2F
   */
  starDemandOmExpandChallengeProviderV2(
    request: EndpointRequestMap["StarDemandOmExpandChallengeProviderV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmExpandChallengeProviderV2"]> {
    return this.execute("StarDemandOmExpandChallengeProviderV2", request, options);
  }

  /**
   * StarDemandOmExpandChallengeV2
   *
   * POST /open_api/2/star/demand/om_expand_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_expand_challenge%2F
   */
  starDemandOmExpandChallengeV2(
    request: EndpointRequestMap["StarDemandOmExpandChallengeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmExpandChallengeV2"]> {
    return this.execute("StarDemandOmExpandChallengeV2", request, options);
  }

  /**
   * StarDemandOmGetChallengeDispatchedProviderListV2
   *
   * GET /open_api/2/star/demand/om_get_challenge_dispatched_provider_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge_dispatched_provider_list%2F
   */
  starDemandOmGetChallengeDispatchedProviderListV2(
    request: EndpointRequestMap["StarDemandOmGetChallengeDispatchedProviderListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmGetChallengeDispatchedProviderListV2"]> {
    return this.execute("StarDemandOmGetChallengeDispatchedProviderListV2", request, options);
  }

  /**
   * StarDemandOmGetChallengeItemsDataV2
   *
   * GET /open_api/2/star/demand/om_get_challenge_items_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge_items_data%2F
   */
  starDemandOmGetChallengeItemsDataV2(
    request: EndpointRequestMap["StarDemandOmGetChallengeItemsDataV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmGetChallengeItemsDataV2"]> {
    return this.execute("StarDemandOmGetChallengeItemsDataV2", request, options);
  }

  /**
   * StarDemandOmGetChallengeV2
   *
   * GET /open_api/2/star/demand/om_get_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge%2F
   */
  starDemandOmGetChallengeV2(
    request: EndpointRequestMap["StarDemandOmGetChallengeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmGetChallengeV2"]> {
    return this.execute("StarDemandOmGetChallengeV2", request, options);
  }

  /**
   * StarDemandOmGetDemandListV2
   *
   * GET /open_api/2/star/demand/om_get_demand_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_demand_list%2F
   */
  starDemandOmGetDemandListV2(
    request: EndpointRequestMap["StarDemandOmGetDemandListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmGetDemandListV2"]> {
    return this.execute("StarDemandOmGetDemandListV2", request, options);
  }

  /**
   * StarDemandOmUpdateChallengeV2
   *
   * POST /open_api/2/star/demand/om_update_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_update_challenge%2F
   */
  starDemandOmUpdateChallengeV2(
    request: EndpointRequestMap["StarDemandOmUpdateChallengeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOmUpdateChallengeV2"]> {
    return this.execute("StarDemandOmUpdateChallengeV2", request, options);
  }

  /**
   * 获取星图客户任务订单列表
   *
   * GET /open_api/2/star/demand/order/list/
   * @see https://open.oceanengine.com/labels/13/docs/1696710607541263
   */
  starDemandOrderListV2(
    request: EndpointRequestMap["StarDemandOrderListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandOrderListV2"]> {
    return this.execute("StarDemandOrderListV2", request, options);
  }

  /**
   * StarDemandSearchWordModifyV2
   *
   * POST /open_api/2/star/demand/search_word/modify/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fsearch_word%2Fmodify%2F
   */
  starDemandSearchWordModifyV2(
    request: EndpointRequestMap["StarDemandSearchWordModifyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemandSearchWordModifyV2"]> {
    return this.execute("StarDemandSearchWordModifyV2", request, options);
  }

  /**
   * StarDemanderDemanderGetAuthorBindInfoV2
   *
   * GET /open_api/2/star/demander/demander_get_author_bind_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fdemander_get_author_bind_info%2F
   */
  starDemanderDemanderGetAuthorBindInfoV2(
    request: EndpointRequestMap["StarDemanderDemanderGetAuthorBindInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemanderDemanderGetAuthorBindInfoV2"]> {
    return this.execute("StarDemanderDemanderGetAuthorBindInfoV2", request, options);
  }

  /**
   * StarDemanderDemanderGetBindShareCodeV2
   *
   * GET /open_api/2/star/demander/demander_get_bind_share_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fdemander_get_bind_share_code%2F
   */
  starDemanderDemanderGetBindShareCodeV2(
    request: EndpointRequestMap["StarDemanderDemanderGetBindShareCodeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemanderDemanderGetBindShareCodeV2"]> {
    return this.execute("StarDemanderDemanderGetBindShareCodeV2", request, options);
  }

  /**
   * StarDemanderGetCarBrandListV2
   *
   * GET /open_api/2/star/demander/get_car_brand_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fget_car_brand_list%2F
   */
  starDemanderGetCarBrandListV2(
    request: EndpointRequestMap["StarDemanderGetCarBrandListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemanderGetCarBrandListV2"]> {
    return this.execute("StarDemanderGetCarBrandListV2", request, options);
  }

  /**
   * StarDemanderGetRegisteredIpActsV2
   *
   * GET /open_api/2/star/demander/get_registered_ip_acts/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fget_registered_ip_acts%2F
   */
  starDemanderGetRegisteredIpActsV2(
    request: EndpointRequestMap["StarDemanderGetRegisteredIpActsV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemanderGetRegisteredIpActsV2"]> {
    return this.execute("StarDemanderGetRegisteredIpActsV2", request, options);
  }

  /**
   * StarDemanderQueryCpsTaskSalesV2
   *
   * GET /open_api/2/star/demander_query_cps_task_sales/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander_query_cps_task_sales%2F
   */
  starDemanderQueryCpsTaskSalesV2(
    request: EndpointRequestMap["StarDemanderQueryCpsTaskSalesV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemanderQueryCpsTaskSalesV2"]> {
    return this.execute("StarDemanderQueryCpsTaskSalesV2", request, options);
  }

  /**
   * StarDemanderUploadCpsTaskSalesV2
   *
   * POST /open_api/2/star/demander_upload_cps_task_sales/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander_upload_cps_task_sales%2F
   */
  starDemanderUploadCpsTaskSalesV2(
    request: EndpointRequestMap["StarDemanderUploadCpsTaskSalesV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarDemanderUploadCpsTaskSalesV2"]> {
    return this.execute("StarDemanderUploadCpsTaskSalesV2", request, options);
  }

  /**
   * StarFeCommonServiceTalentDayGetCheckInCodeV2
   *
   * GET /open_api/2/star/fe_common_service/talent_day/get_check_in_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ffe_common_service%2Ftalent_day%2Fget_check_in_code%2F
   */
  starFeCommonServiceTalentDayGetCheckInCodeV2(
    request: EndpointRequestMap["StarFeCommonServiceTalentDayGetCheckInCodeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarFeCommonServiceTalentDayGetCheckInCodeV2"]> {
    return this.execute("StarFeCommonServiceTalentDayGetCheckInCodeV2", request, options);
  }

  /**
   * StarFeCommonServiceTalentDayJudgeCheckedInV2
   *
   * GET /open_api/2/star/fe_common_service/talent_day/judge_checked_in/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ffe_common_service%2Ftalent_day%2Fjudge_checked_in%2F
   */
  starFeCommonServiceTalentDayJudgeCheckedInV2(
    request: EndpointRequestMap["StarFeCommonServiceTalentDayJudgeCheckedInV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarFeCommonServiceTalentDayJudgeCheckedInV2"]> {
    return this.execute("StarFeCommonServiceTalentDayJudgeCheckedInV2", request, options);
  }

  /**
   * StarGetCreateChallengeDataDictV2
   *
   * GET /open_api/2/star/get_create_challenge_data_dict/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fget_create_challenge_data_dict%2F
   */
  starGetCreateChallengeDataDictV2(
    request: EndpointRequestMap["StarGetCreateChallengeDataDictV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarGetCreateChallengeDataDictV2"]> {
    return this.execute("StarGetCreateChallengeDataDictV2", request, options);
  }

  /**
   * 获取星图账户信息
   *
   * GET /open_api/2/star/info/
   * @see https://open.oceanengine.com/labels/13/docs/1795928648995961
   */
  starInfoV2(
    request: EndpointRequestMap["StarInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarInfoV2"]> {
    return this.execute("StarInfoV2", request, options);
  }

  /**
   * StarItemAuthorGetV2
   *
   * GET /open_api/2/star/item/author/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fitem%2Fauthor%2Fget%2F
   */
  starItemAuthorGetV2(
    request: EndpointRequestMap["StarItemAuthorGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarItemAuthorGetV2"]> {
    return this.execute("StarItemAuthorGetV2", request, options);
  }

  /**
   * StarMcnContractChallengeV2
   *
   * POST /open_api/2/star/mcn/contract_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fcontract_challenge%2F
   */
  starMcnContractChallengeV2(
    request: EndpointRequestMap["StarMcnContractChallengeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnContractChallengeV2"]> {
    return this.execute("StarMcnContractChallengeV2", request, options);
  }

  /**
   * StarMcnGetAuthorListV2
   *
   * GET /open_api/2/star/mcn/get_author_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_author_list%2F
   */
  starMcnGetAuthorListV2(
    request: EndpointRequestMap["StarMcnGetAuthorListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnGetAuthorListV2"]> {
    return this.execute("StarMcnGetAuthorListV2", request, options);
  }

  /**
   * StarMcnGetContractChallengeAuthorItemListV2V2
   *
   * GET /open_api/2/star/mcn/get_contract_challenge_author_item_list_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contract_challenge_author_item_list_v2%2F
   */
  starMcnGetContractChallengeAuthorItemListV2V2(
    request: EndpointRequestMap["StarMcnGetContractChallengeAuthorItemListV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnGetContractChallengeAuthorItemListV2V2"]> {
    return this.execute("StarMcnGetContractChallengeAuthorItemListV2V2", request, options);
  }

  /**
   * StarMcnGetContractedChallengeListV2
   *
   * GET /open_api/2/star/mcn/get_contracted_challenge_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contracted_challenge_list%2F
   */
  starMcnGetContractedChallengeListV2(
    request: EndpointRequestMap["StarMcnGetContractedChallengeListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnGetContractedChallengeListV2"]> {
    return this.execute("StarMcnGetContractedChallengeListV2", request, options);
  }

  /**
   * StarMcnGetContractedChallengeUrlV2
   *
   * GET /open_api/2/star/mcn/get_contracted_challenge_url/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contracted_challenge_url%2F
   */
  starMcnGetContractedChallengeUrlV2(
    request: EndpointRequestMap["StarMcnGetContractedChallengeUrlV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnGetContractedChallengeUrlV2"]> {
    return this.execute("StarMcnGetContractedChallengeUrlV2", request, options);
  }

  /**
   * StarMcnGetUnparticipatedTaskV2
   *
   * GET /open_api/2/star/mcn/get_unparticipated_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_unparticipated_task%2F
   */
  starMcnGetUnparticipatedTaskV2(
    request: EndpointRequestMap["StarMcnGetUnparticipatedTaskV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnGetUnparticipatedTaskV2"]> {
    return this.execute("StarMcnGetUnparticipatedTaskV2", request, options);
  }

  /**
   * StarMcnMixListGetV2
   *
   * GET /open_api/2/star/mcn/mix/list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fmix%2Flist%2Fget%2F
   */
  starMcnMixListGetV2(
    request: EndpointRequestMap["StarMcnMixListGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnMixListGetV2"]> {
    return this.execute("StarMcnMixListGetV2", request, options);
  }

  /**
   * StarMcnProviderGetParticipatedTaskV2
   *
   * GET /open_api/2/star/mcn/provider_get_participated_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_participated_task%2F
   */
  starMcnProviderGetParticipatedTaskV2(
    request: EndpointRequestMap["StarMcnProviderGetParticipatedTaskV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetParticipatedTaskV2"]> {
    return this.execute("StarMcnProviderGetParticipatedTaskV2", request, options);
  }

  /**
   * StarMcnProviderGetRecruitInfoGetV2
   *
   * GET /open_api/2/star/mcn/provider_get_recruit_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_recruit_info%2Fget%2F
   */
  starMcnProviderGetRecruitInfoGetV2(
    request: EndpointRequestMap["StarMcnProviderGetRecruitInfoGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetRecruitInfoGetV2"]> {
    return this.execute("StarMcnProviderGetRecruitInfoGetV2", request, options);
  }

  /**
   * StarMcnProviderGetTagOnTaskV2
   *
   * GET /open_api/2/star/mcn/provider_get_tag_on_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_tag_on_task%2F
   */
  starMcnProviderGetTagOnTaskV2(
    request: EndpointRequestMap["StarMcnProviderGetTagOnTaskV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetTagOnTaskV2"]> {
    return this.execute("StarMcnProviderGetTagOnTaskV2", request, options);
  }

  /**
   * StarMcnProviderGetTaskAuthorListV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_author_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_author_list%2F
   */
  starMcnProviderGetTaskAuthorListV2(
    request: EndpointRequestMap["StarMcnProviderGetTaskAuthorListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetTaskAuthorListV2"]> {
    return this.execute("StarMcnProviderGetTaskAuthorListV2", request, options);
  }

  /**
   * StarMcnProviderGetTaskDetailV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_detail%2F
   */
  starMcnProviderGetTaskDetailV2(
    request: EndpointRequestMap["StarMcnProviderGetTaskDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetTaskDetailV2"]> {
    return this.execute("StarMcnProviderGetTaskDetailV2", request, options);
  }

  /**
   * StarMcnProviderGetTaskItemListV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_item_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_item_list%2F
   */
  starMcnProviderGetTaskItemListV2(
    request: EndpointRequestMap["StarMcnProviderGetTaskItemListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetTaskItemListV2"]> {
    return this.execute("StarMcnProviderGetTaskItemListV2", request, options);
  }

  /**
   * StarMcnProviderGetTaskShareCodeV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_share_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_share_code%2F
   */
  starMcnProviderGetTaskShareCodeV2(
    request: EndpointRequestMap["StarMcnProviderGetTaskShareCodeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetTaskShareCodeV2"]> {
    return this.execute("StarMcnProviderGetTaskShareCodeV2", request, options);
  }

  /**
   * StarMcnProviderGetUnparticipatedTaskV2
   *
   * GET /open_api/2/star/mcn/provider_get_unparticipated_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_unparticipated_task%2F
   */
  starMcnProviderGetUnparticipatedTaskV2(
    request: EndpointRequestMap["StarMcnProviderGetUnparticipatedTaskV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderGetUnparticipatedTaskV2"]> {
    return this.execute("StarMcnProviderGetUnparticipatedTaskV2", request, options);
  }

  /**
   * StarMcnProviderHandleJoinedAuthorV2
   *
   * POST /open_api/2/star/mcn/provider_handle_joined_author/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_handle_joined_author%2F
   */
  starMcnProviderHandleJoinedAuthorV2(
    request: EndpointRequestMap["StarMcnProviderHandleJoinedAuthorV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderHandleJoinedAuthorV2"]> {
    return this.execute("StarMcnProviderHandleJoinedAuthorV2", request, options);
  }

  /**
   * StarMcnProviderUploadSearchItemV2
   *
   * POST /open_api/2/star/mcn/provider_upload_search_item/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_upload_search_item%2F
   */
  starMcnProviderUploadSearchItemV2(
    request: EndpointRequestMap["StarMcnProviderUploadSearchItemV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnProviderUploadSearchItemV2"]> {
    return this.execute("StarMcnProviderUploadSearchItemV2", request, options);
  }

  /**
   * StarMcnRecuritProviderGetTaskOrderListGetV2
   *
   * GET /open_api/2/star/mcn/recurit_provider_get_task_order_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Frecurit_provider_get_task_order_list%2Fget%2F
   */
  starMcnRecuritProviderGetTaskOrderListGetV2(
    request: EndpointRequestMap["StarMcnRecuritProviderGetTaskOrderListGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarMcnRecuritProviderGetTaskOrderListGetV2"]> {
    return this.execute("StarMcnRecuritProviderGetTaskOrderListGetV2", request, options);
  }

  /**
   * StarOrderApproveResourceV2
   *
   * POST /open_api/2/star/order/approve_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fapprove_resource%2F
   */
  starOrderApproveResourceV2(
    request: EndpointRequestMap["StarOrderApproveResourceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderApproveResourceV2"]> {
    return this.execute("StarOrderApproveResourceV2", request, options);
  }

  /**
   * StarOrderDemanderCancelV2
   *
   * POST /open_api/2/star/order/demander_cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fdemander_cancel%2F
   */
  starOrderDemanderCancelV2(
    request: EndpointRequestMap["StarOrderDemanderCancelV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderDemanderCancelV2"]> {
    return this.execute("StarOrderDemanderCancelV2", request, options);
  }

  /**
   * StarOrderDetailV2
   *
   * GET /open_api/2/star/order/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fdetail%2F
   */
  starOrderDetailV2(
    request: EndpointRequestMap["StarOrderDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderDetailV2"]> {
    return this.execute("StarOrderDetailV2", request, options);
  }

  /**
   * StarOrderFinishV2
   *
   * POST /open_api/2/star/order/finish/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Ffinish%2F
   */
  starOrderFinishV2(
    request: EndpointRequestMap["StarOrderFinishV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderFinishV2"]> {
    return this.execute("StarOrderFinishV2", request, options);
  }

  /**
   * StarOrderGetCancelAmountV2
   *
   * GET /open_api/2/star/order/get_cancel_amount/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_cancel_amount%2F
   */
  starOrderGetCancelAmountV2(
    request: EndpointRequestMap["StarOrderGetCancelAmountV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderGetCancelAmountV2"]> {
    return this.execute("StarOrderGetCancelAmountV2", request, options);
  }

  /**
   * StarOrderGetComponentV2
   *
   * GET /open_api/2/star/order/get_component/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_component%2F
   */
  starOrderGetComponentV2(
    request: EndpointRequestMap["StarOrderGetComponentV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderGetComponentV2"]> {
    return this.execute("StarOrderGetComponentV2", request, options);
  }

  /**
   * StarOrderGetInfoV2
   *
   * GET /open_api/2/star/order/get_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_info%2F
   */
  starOrderGetInfoV2(
    request: EndpointRequestMap["StarOrderGetInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderGetInfoV2"]> {
    return this.execute("StarOrderGetInfoV2", request, options);
  }

  /**
   * StarOrderGetLiveV2
   *
   * GET /open_api/2/star/order/get_live/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_live%2F
   */
  starOrderGetLiveV2(
    request: EndpointRequestMap["StarOrderGetLiveV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderGetLiveV2"]> {
    return this.execute("StarOrderGetLiveV2", request, options);
  }

  /**
   * StarOrderGetScriptV2
   *
   * GET /open_api/2/star/order/get_script/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_script%2F
   */
  starOrderGetScriptV2(
    request: EndpointRequestMap["StarOrderGetScriptV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderGetScriptV2"]> {
    return this.execute("StarOrderGetScriptV2", request, options);
  }

  /**
   * StarOrderGetVideoV2
   *
   * GET /open_api/2/star/order/get_video/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_video%2F
   */
  starOrderGetVideoV2(
    request: EndpointRequestMap["StarOrderGetVideoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderGetVideoV2"]> {
    return this.execute("StarOrderGetVideoV2", request, options);
  }

  /**
   * StarOrderListByCampaignV2
   *
   * GET /open_api/2/star/order/list_by_campaign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Flist_by_campaign%2F
   */
  starOrderListByCampaignV2(
    request: EndpointRequestMap["StarOrderListByCampaignV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderListByCampaignV2"]> {
    return this.execute("StarOrderListByCampaignV2", request, options);
  }

  /**
   * StarOrderPublishResourceV2
   *
   * POST /open_api/2/star/order/publish_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fpublish_resource%2F
   */
  starOrderPublishResourceV2(
    request: EndpointRequestMap["StarOrderPublishResourceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderPublishResourceV2"]> {
    return this.execute("StarOrderPublishResourceV2", request, options);
  }

  /**
   * StarOrderPushResourceV2
   *
   * POST /open_api/2/star/order/push_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fpush_resource%2F
   */
  starOrderPushResourceV2(
    request: EndpointRequestMap["StarOrderPushResourceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderPushResourceV2"]> {
    return this.execute("StarOrderPushResourceV2", request, options);
  }

  /**
   * StarOrderRejectResourceV2
   *
   * POST /open_api/2/star/order/reject_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Freject_resource%2F
   */
  starOrderRejectResourceV2(
    request: EndpointRequestMap["StarOrderRejectResourceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderRejectResourceV2"]> {
    return this.execute("StarOrderRejectResourceV2", request, options);
  }

  /**
   * StarOrderReplyAuthorCancelV2
   *
   * POST /open_api/2/star/order/reply_author_cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Freply_author_cancel%2F
   */
  starOrderReplyAuthorCancelV2(
    request: EndpointRequestMap["StarOrderReplyAuthorCancelV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderReplyAuthorCancelV2"]> {
    return this.execute("StarOrderReplyAuthorCancelV2", request, options);
  }

  /**
   * StarOrderUpdateV2
   *
   * POST /open_api/2/star/order/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fupdate%2F
   */
  starOrderUpdateV2(
    request: EndpointRequestMap["StarOrderUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarOrderUpdateV2"]> {
    return this.execute("StarOrderUpdateV2", request, options);
  }

  /**
   * StarProjectListV2
   *
   * GET /open_api/2/star/project/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fproject%2Flist%2F
   */
  starProjectListV2(
    request: EndpointRequestMap["StarProjectListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarProjectListV2"]> {
    return this.execute("StarProjectListV2", request, options);
  }

  /**
   * StarProviderTaskItemListV2
   *
   * GET /open_api/2/star/provider/task/item/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fprovider%2Ftask%2Fitem%2Flist%2F
   */
  starProviderTaskItemListV2(
    request: EndpointRequestMap["StarProviderTaskItemListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarProviderTaskItemListV2"]> {
    return this.execute("StarProviderTaskItemListV2", request, options);
  }

  /**
   * StarProviderTaskListV2
   *
   * GET /open_api/2/star/provider/task/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fprovider%2Ftask%2Flist%2F
   */
  starProviderTaskListV2(
    request: EndpointRequestMap["StarProviderTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarProviderTaskListV2"]> {
    return this.execute("StarProviderTaskListV2", request, options);
  }

  /**
   * 获取投后每日趋势数据（短视频）
   *
   * GET /open_api/2/star/report/custom_data_topic_daily_report/
   * @see https://open.oceanengine.com/labels/13/docs/1792833494331403
   */
  starReportCustomDataTopicDailyReportV2(
    request: EndpointRequestMap["StarReportCustomDataTopicDailyReportV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarReportCustomDataTopicDailyReportV2"]> {
    return this.execute("StarReportCustomDataTopicDailyReportV2", request, options);
  }

  /**
   * 获取投后数据主题累计数据
   *
   * GET /open_api/2/star/report/custom_data_topic_report/
   * @see https://open.oceanengine.com/labels/13/docs/1792052602066947
   */
  starReportCustomDataTopicReportV2(
    request: EndpointRequestMap["StarReportCustomDataTopicReportV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarReportCustomDataTopicReportV2"]> {
    return this.execute("StarReportCustomDataTopicReportV2", request, options);
  }

  /**
   * 获取任务下累计可查询的数据指标
   *
   * GET /open_api/2/star/report/data_topic_config/
   * @see https://open.oceanengine.com/labels/13/docs/1792691290570819
   */
  starReportDataTopicConfigV2(
    request: EndpointRequestMap["StarReportDataTopicConfigV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarReportDataTopicConfigV2"]> {
    return this.execute("StarReportDataTopicConfigV2", request, options);
  }

  /**
   * 获取订单投后分析报表
   *
   * GET /open_api/2/star/report/order_overview/get/
   * @see https://open.oceanengine.com/labels/13/docs/1696710608099328
   */
  starReportOrderOverviewGetV2(
    request: EndpointRequestMap["StarReportOrderOverviewGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarReportOrderOverviewGetV2"]> {
    return this.execute("StarReportOrderOverviewGetV2", request, options);
  }

  /**
   * StarReportOrderOverviewV2
   *
   * GET /open_api/2/star/report/order_overview/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Freport%2Forder_overview%2F
   */
  starReportOrderOverviewV2(
    request: EndpointRequestMap["StarReportOrderOverviewV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarReportOrderOverviewV2"]> {
    return this.execute("StarReportOrderOverviewV2", request, options);
  }

  /**
   * 获取订单投后受众报表
   *
   * GET /open_api/2/star/report/order_user_distribution/get/
   * @see https://open.oceanengine.com/labels/13/docs/1696710608627712
   */
  starReportOrderUserDistributionGetV2(
    request: EndpointRequestMap["StarReportOrderUserDistributionGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarReportOrderUserDistributionGetV2"]> {
    return this.execute("StarReportOrderUserDistributionGetV2", request, options);
  }

  /**
   * 获取星广联投(星图版)任务维度数据
   *
   * GET /open_api/2/star/star_ad_unite_task/detail/
   * @see https://open.oceanengine.com/labels/13/docs/1796659328192516
   */
  starStarAdUniteTaskDetailV2(
    request: EndpointRequestMap["StarStarAdUniteTaskDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarStarAdUniteTaskDetailV2"]> {
    return this.execute("StarStarAdUniteTaskDetailV2", request, options);
  }

  /**
   * 获取星广联投(星图版)视频维度数据
   *
   * GET /open_api/2/star/star_ad_unite_task_item/list/
   * @see https://open.oceanengine.com/labels/13/docs/1796659452874762
   */
  starStarAdUniteTaskItemListV2(
    request: EndpointRequestMap["StarStarAdUniteTaskItemListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarStarAdUniteTaskItemListV2"]> {
    return this.execute("StarStarAdUniteTaskItemListV2", request, options);
  }

  /**
   * 获取星广联投(星图版)任务列表
   *
   * GET /open_api/2/star/star_ad_unite_task/list/
   * @see https://open.oceanengine.com/labels/13/docs/1796659222192234
   */
  starStarAdUniteTaskListV2(
    request: EndpointRequestMap["StarStarAdUniteTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarStarAdUniteTaskListV2"]> {
    return this.execute("StarStarAdUniteTaskListV2", request, options);
  }

  /**
   * StarTaskBindProjectV2
   *
   * POST /open_api/2/star/task/bind_project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ftask%2Fbind_project%2F
   */
  starTaskBindProjectV2(
    request: EndpointRequestMap["StarTaskBindProjectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarTaskBindProjectV2"]> {
    return this.execute("StarTaskBindProjectV2", request, options);
  }

  /**
   * StarTaskListByProjectV2
   *
   * GET /open_api/2/star/task/list_by_project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ftask%2Flist_by_project%2F
   */
  starTaskListByProjectV2(
    request: EndpointRequestMap["StarTaskListByProjectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarTaskListByProjectV2"]> {
    return this.execute("StarTaskListByProjectV2", request, options);
  }

  /**
   * StarUpdateProjectV2
   *
   * POST /open_api/2/star/update/project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fupdate%2Fproject%2F
   */
  starUpdateProjectV2(
    request: EndpointRequestMap["StarUpdateProjectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarUpdateProjectV2"]> {
    return this.execute("StarUpdateProjectV2", request, options);
  }

  /**
   * StarUserGetAwemeAuthorIdV2
   *
   * GET /open_api/2/star/user/get_aweme_author_id/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fuser%2Fget_aweme_author_id%2F
   */
  starUserGetAwemeAuthorIdV2(
    request: EndpointRequestMap["StarUserGetAwemeAuthorIdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarUserGetAwemeAuthorIdV2"]> {
    return this.execute("StarUserGetAwemeAuthorIdV2", request, options);
  }

  /**
   * StarUserGetStarIdV2
   *
   * GET /open_api/2/star/user/get_star_id/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fuser%2Fget_star_id%2F
   */
  starUserGetStarIdV2(
    request: EndpointRequestMap["StarUserGetStarIdV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarUserGetStarIdV2"]> {
    return this.execute("StarUserGetStarIdV2", request, options);
  }

  /**
   * StarVasAppendOrderToBoostItemGroupV2
   *
   * POST /open_api/2/star/vas/append_order_to_boost_item_group/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fappend_order_to_boost_item_group%2F
   */
  starVasAppendOrderToBoostItemGroupV2(
    request: EndpointRequestMap["StarVasAppendOrderToBoostItemGroupV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasAppendOrderToBoostItemGroupV2"]> {
    return this.execute("StarVasAppendOrderToBoostItemGroupV2", request, options);
  }

  /**
   * StarVasCancelBoostItemGroupV2
   *
   * POST /open_api/2/star/vas/cancel_boost_item_group/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fcancel_boost_item_group%2F
   */
  starVasCancelBoostItemGroupV2(
    request: EndpointRequestMap["StarVasCancelBoostItemGroupV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasCancelBoostItemGroupV2"]> {
    return this.execute("StarVasCancelBoostItemGroupV2", request, options);
  }

  /**
   * StarVasCreateBoostItemGroupV2
   *
   * POST /open_api/2/star/vas/create_boost_item_group/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fcreate_boost_item_group%2F
   */
  starVasCreateBoostItemGroupV2(
    request: EndpointRequestMap["StarVasCreateBoostItemGroupV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasCreateBoostItemGroupV2"]> {
    return this.execute("StarVasCreateBoostItemGroupV2", request, options);
  }

  /**
   * StarVasGetBoostGroupListV2
   *
   * GET /open_api/2/star/vas/get_boost_group_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_boost_group_list%2F
   */
  starVasGetBoostGroupListV2(
    request: EndpointRequestMap["StarVasGetBoostGroupListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasGetBoostGroupListV2"]> {
    return this.execute("StarVasGetBoostGroupListV2", request, options);
  }

  /**
   * 查询助推组标签定向的选项值
   *
   * GET /open_api/2/star/vas/get_boost_group_options/
   * @see https://open.oceanengine.com/labels/13/docs/1851090583270855
   */
  starVasGetBoostGroupOptionsV2(
    request: EndpointRequestMap["StarVasGetBoostGroupOptionsV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasGetBoostGroupOptionsV2"]> {
    return this.execute("StarVasGetBoostGroupOptionsV2", request, options);
  }

  /**
   * StarVasGetBoostItemGroupDetailV2
   *
   * GET /open_api/2/star/vas/get_boost_item_group_detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_boost_item_group_detail%2F
   */
  starVasGetBoostItemGroupDetailV2(
    request: EndpointRequestMap["StarVasGetBoostItemGroupDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasGetBoostItemGroupDetailV2"]> {
    return this.execute("StarVasGetBoostItemGroupDetailV2", request, options);
  }

  /**
   * StarVasGetCommonAuthorPackageListV2
   *
   * GET /open_api/2/star/vas/get_common_author_package_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_common_author_package_list%2F
   */
  starVasGetCommonAuthorPackageListV2(
    request: EndpointRequestMap["StarVasGetCommonAuthorPackageListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasGetCommonAuthorPackageListV2"]> {
    return this.execute("StarVasGetCommonAuthorPackageListV2", request, options);
  }

  /**
   * StarVasGetExportBoostItemGroupResultV2
   *
   * GET /open_api/2/star/vas/get_export_boost_item_group_result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_export_boost_item_group_result%2F
   */
  starVasGetExportBoostItemGroupResultV2(
    request: EndpointRequestMap["StarVasGetExportBoostItemGroupResultV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasGetExportBoostItemGroupResultV2"]> {
    return this.execute("StarVasGetExportBoostItemGroupResultV2", request, options);
  }

  /**
   * StarVasSubmitExportBoostItemGroupDataV2
   *
   * POST /open_api/2/star/vas/submit_export_boost_item_group_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fsubmit_export_boost_item_group_data%2F
   */
  starVasSubmitExportBoostItemGroupDataV2(
    request: EndpointRequestMap["StarVasSubmitExportBoostItemGroupDataV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StarVasSubmitExportBoostItemGroupDataV2"]> {
    return this.execute("StarVasSubmitExportBoostItemGroupDataV2", request, options);
  }

  /**
   * StardeliveryTaskAuthorDetailV30
   *
   * GET /open_api/v3.0/stardelivery/task_author/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author%2Fdetail%2F
   */
  stardeliveryTaskAuthorDetailV30(
    request: EndpointRequestMap["StardeliveryTaskAuthorDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskAuthorDetailV30"]> {
    return this.execute("StardeliveryTaskAuthorDetailV30", request, options);
  }

  /**
   * StardeliveryTaskAuthorVideoAuditV30
   *
   * POST /open_api/v3.0/stardelivery/task_author_video/audit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author_video%2Faudit%2F
   */
  stardeliveryTaskAuthorVideoAuditV30(
    request: EndpointRequestMap["StardeliveryTaskAuthorVideoAuditV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskAuthorVideoAuditV30"]> {
    return this.execute("StardeliveryTaskAuthorVideoAuditV30", request, options);
  }

  /**
   * StardeliveryTaskAuthorVideoDetailV30
   *
   * GET /open_api/v3.0/stardelivery/task_author_video/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author_video%2Fdetail%2F
   */
  stardeliveryTaskAuthorVideoDetailV30(
    request: EndpointRequestMap["StardeliveryTaskAuthorVideoDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskAuthorVideoDetailV30"]> {
    return this.execute("StardeliveryTaskAuthorVideoDetailV30", request, options);
  }

  /**
   * StardeliveryTaskBudgetUpdateV30
   *
   * POST /open_api/v3.0/stardelivery/task/budget/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fbudget%2Fupdate%2F
   */
  stardeliveryTaskBudgetUpdateV30(
    request: EndpointRequestMap["StardeliveryTaskBudgetUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskBudgetUpdateV30"]> {
    return this.execute("StardeliveryTaskBudgetUpdateV30", request, options);
  }

  /**
   * StardeliveryTaskCancelV30
   *
   * POST /open_api/v3.0/stardelivery/task/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fcancel%2F
   */
  stardeliveryTaskCancelV30(
    request: EndpointRequestMap["StardeliveryTaskCancelV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskCancelV30"]> {
    return this.execute("StardeliveryTaskCancelV30", request, options);
  }

  /**
   * StardeliveryTaskDetailV30
   *
   * GET /open_api/v3.0/stardelivery/task/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fdetail%2F
   */
  stardeliveryTaskDetailV30(
    request: EndpointRequestMap["StardeliveryTaskDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskDetailV30"]> {
    return this.execute("StardeliveryTaskDetailV30", request, options);
  }

  /**
   * StardeliveryTaskListV30
   *
   * GET /open_api/v3.0/stardelivery/task/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Flist%2F
   */
  stardeliveryTaskListV30(
    request: EndpointRequestMap["StardeliveryTaskListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskListV30"]> {
    return this.execute("StardeliveryTaskListV30", request, options);
  }

  /**
   * StardeliveryTaskPostEndTimeUpdateV30
   *
   * POST /open_api/v3.0/stardelivery/task/post_end_time/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fpost_end_time%2Fupdate%2F
   */
  stardeliveryTaskPostEndTimeUpdateV30(
    request: EndpointRequestMap["StardeliveryTaskPostEndTimeUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskPostEndTimeUpdateV30"]> {
    return this.execute("StardeliveryTaskPostEndTimeUpdateV30", request, options);
  }

  /**
   * StardeliveryTaskShareV30
   *
   * POST /open_api/v3.0/stardelivery/task/share/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fshare%2F
   */
  stardeliveryTaskShareV30(
    request: EndpointRequestMap["StardeliveryTaskShareV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskShareV30"]> {
    return this.execute("StardeliveryTaskShareV30", request, options);
  }

  /**
   * StardeliveryTaskShareableListV30
   *
   * GET /open_api/v3.0/stardelivery/task/shareable/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fshareable%2Flist%2F
   */
  stardeliveryTaskShareableListV30(
    request: EndpointRequestMap["StardeliveryTaskShareableListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskShareableListV30"]> {
    return this.execute("StardeliveryTaskShareableListV30", request, options);
  }

  /**
   * StardeliveryTaskSharingListV30
   *
   * GET /open_api/v3.0/stardelivery/task/sharing/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fsharing%2Flist%2F
   */
  stardeliveryTaskSharingListV30(
    request: EndpointRequestMap["StardeliveryTaskSharingListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskSharingListV30"]> {
    return this.execute("StardeliveryTaskSharingListV30", request, options);
  }

  /**
   * StardeliveryTaskUnshareV30
   *
   * POST /open_api/v3.0/stardelivery/task/unshare/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Funshare%2F
   */
  stardeliveryTaskUnshareV30(
    request: EndpointRequestMap["StardeliveryTaskUnshareV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StardeliveryTaskUnshareV30"]> {
    return this.execute("StardeliveryTaskUnshareV30", request, options);
  }

  /**
   * 创建标准项目
   *
   * POST /open_api/v3.0/std_project/create/
   * @see https://open.oceanengine.com/labels/7/docs/1865819566002436
   */
  stdProjectCreateV30(
    request: EndpointRequestMap["StdProjectCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StdProjectCreateV30"]> {
    return this.execute("StdProjectCreateV30", request, options);
  }

  /**
   * 【智擎版】标准项目状态实时推送
   *
   * GET /open_api/v3.0/std_project/list/
   * @see https://open.oceanengine.com/labels/7/docs/1870870452456523
   */
  stdProjectListV30(
    request: EndpointRequestMap["StdProjectListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StdProjectListV30"]> {
    return this.execute("StdProjectListV30", request, options);
  }

  /**
   * 更新标准项目
   *
   * POST /open_api/v3.0/std_project/update/
   * @see https://open.oceanengine.com/labels/7/docs/1865873315616282
   */
  stdProjectUpdateV30(
    request: EndpointRequestMap["StdProjectUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["StdProjectUpdateV30"]> {
    return this.execute("StdProjectUpdateV30", request, options);
  }

  /**
   * 新增 Adv 订阅
   *
   * POST /open_api/v3.0/subscribe/accounts/add/
   * @see https://open.oceanengine.com/labels/7/docs/1818567687958707
   */
  subscribeAccountsAddV30(
    request: EndpointRequestMap["SubscribeAccountsAddV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SubscribeAccountsAddV30"]> {
    return this.execute("SubscribeAccountsAddV30", request, options);
  }

  /**
   * 查询订阅 Adv
   *
   * GET /open_api/v3.0/subscribe/accounts/list/
   * @see https://open.oceanengine.com/labels/7/docs/1818567348129040
   */
  subscribeAccountsListV30(
    request: EndpointRequestMap["SubscribeAccountsListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SubscribeAccountsListV30"]> {
    return this.execute("SubscribeAccountsListV30", request, options);
  }

  /**
   * 取消 Adv 订阅
   *
   * POST /open_api/v3.0/subscribe/accounts/remove/
   * @see https://open.oceanengine.com/labels/7/docs/1818566670161920
   */
  subscribeAccountsRemoveV30(
    request: EndpointRequestMap["SubscribeAccountsRemoveV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SubscribeAccountsRemoveV30"]> {
    return this.execute("SubscribeAccountsRemoveV30", request, options);
  }

  /**
   * 获取推荐关键词
   *
   * POST /open_api/v3.0/sugg_words/
   * @see https://open.oceanengine.com/labels/7/docs/1755356193295372
   */
  suggWordsV30(
    request: EndpointRequestMap["SuggWordsV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SuggWordsV30"]> {
    return this.execute("SuggWordsV30", request, options);
  }

  /**
   * SvipChargeVerifyGetV30
   *
   * GET /open_api/v3.0/svip/charge/verify/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsvip%2Fcharge%2Fverify%2Fget%2F
   */
  svipChargeVerifyGetV30(
    request: EndpointRequestMap["SvipChargeVerifyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["SvipChargeVerifyGetV30"]> {
    return this.execute("SvipChargeVerifyGetV30", request, options);
  }

  /**
   * 查询快应用信息
   *
   * GET /open_api/2/tool/quick_app_management/quick_app/get/
   * @see https://open.oceanengine.com/labels/7/docs/1758407389420547
   */
  toolQuickAppManagementQuickAppGetV2(
    request: EndpointRequestMap["ToolQuickAppManagementQuickAppGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolQuickAppManagementQuickAppGetV2"]> {
    return this.execute("ToolQuickAppManagementQuickAppGetV2", request, options);
  }

  /**
   * 获取预览二维码（升级版）
   *
   * GET /open_api/v3.0/tools/ad_preview/qrcode_get/
   * @see https://open.oceanengine.com/labels/7/docs/1763117461145604
   */
  toolsAdPreviewQrcodeGetV30(
    request: EndpointRequestMap["ToolsAdPreviewQrcodeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAdPreviewQrcodeGetV30"]> {
    return this.execute("ToolsAdPreviewQrcodeGetV30", request, options);
  }

  /**
   * ToolsAdRaiseStatusGetV2
   *
   * GET /open_api/2/tools/ad_raise_status/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fad_raise_status%2Fget%2F
   */
  toolsAdRaiseStatusGetV2(
    request: EndpointRequestMap["ToolsAdRaiseStatusGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAdRaiseStatusGetV2"]> {
    return this.execute("ToolsAdRaiseStatusGetV2", request, options);
  }

  /**
   * 获取行政信息
   *
   * GET /open_api/2/tools/admin/info/
   * @see https://open.oceanengine.com/labels/7/docs/1709606596424718
   */
  toolsAdminInfoV2(
    request: EndpointRequestMap["ToolsAdminInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAdminInfoV2"]> {
    return this.execute("ToolsAdminInfoV2", request, options);
  }

  /**
   * ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30
   *
   * POST /open_api/v3.0/tools/advertiser_diagnosis/suggestion/accept/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fadvertiser_diagnosis%2Fsuggestion%2Faccept%2Fupdate%2F
   */
  toolsAdvertiserDiagnosisSuggestionAcceptUpdateV30(
    request: EndpointRequestMap["ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30"]> {
    return this.execute("ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30", request, options);
  }

  /**
   * ToolsAdvertiserDiagnosisSuggestionGetV30
   *
   * GET /open_api/v3.0/tools/advertiser_diagnosis/suggestion/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fadvertiser_diagnosis%2Fsuggestion%2Fget%2F
   */
  toolsAdvertiserDiagnosisSuggestionGetV30(
    request: EndpointRequestMap["ToolsAdvertiserDiagnosisSuggestionGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAdvertiserDiagnosisSuggestionGetV30"]> {
    return this.execute("ToolsAdvertiserDiagnosisSuggestionGetV30", request, options);
  }

  /**
   * ToolsAdvertiserStoreSearchV2
   *
   * GET /open_api/2/tools/advertiser_store/search/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fadvertiser_store%2Fsearch%2F
   */
  toolsAdvertiserStoreSearchV2(
    request: EndpointRequestMap["ToolsAdvertiserStoreSearchV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAdvertiserStoreSearchV2"]> {
    return this.execute("ToolsAdvertiserStoreSearchV2", request, options);
  }

  /**
   * ToolsAgreementCreateV30
   *
   * POST /open_api/v3.0/tools/agreement/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fagreement%2Fcreate%2F
   */
  toolsAgreementCreateV30(
    request: EndpointRequestMap["ToolsAgreementCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAgreementCreateV30"]> {
    return this.execute("ToolsAgreementCreateV30", request, options);
  }

  /**
   * ToolsAgreementListV30
   *
   * GET /open_api/v3.0/tools/agreement/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fagreement%2Flist%2F
   */
  toolsAgreementListV30(
    request: EndpointRequestMap["ToolsAgreementListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAgreementListV30"]> {
    return this.execute("ToolsAgreementListV30", request, options);
  }

  /**
   * ToolsAigcMaterialGetV2
   *
   * GET /open_api/2/tools/aigc_material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faigc_material%2Fget%2F
   */
  toolsAigcMaterialGetV2(
    request: EndpointRequestMap["ToolsAigcMaterialGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAigcMaterialGetV2"]> {
    return this.execute("ToolsAigcMaterialGetV2", request, options);
  }

  /**
   * ToolsAipThirdSiteCreateV2
   *
   * POST /open_api/2/tools/aip_third_site/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fcreate%2F
   */
  toolsAipThirdSiteCreateV2(
    request: EndpointRequestMap["ToolsAipThirdSiteCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAipThirdSiteCreateV2"]> {
    return this.execute("ToolsAipThirdSiteCreateV2", request, options);
  }

  /**
   * ToolsAipThirdSiteGetV2
   *
   * GET /open_api/2/tools/aip_third_site/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fget%2F
   */
  toolsAipThirdSiteGetV2(
    request: EndpointRequestMap["ToolsAipThirdSiteGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAipThirdSiteGetV2"]> {
    return this.execute("ToolsAipThirdSiteGetV2", request, options);
  }

  /**
   * ToolsAipThirdSiteUpdateV2
   *
   * POST /open_api/2/tools/aip_third_site/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fupdate%2F
   */
  toolsAipThirdSiteUpdateV2(
    request: EndpointRequestMap["ToolsAipThirdSiteUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAipThirdSiteUpdateV2"]> {
    return this.execute("ToolsAipThirdSiteUpdateV2", request, options);
  }

  /**
   * ToolsAppIosListV2
   *
   * GET /open_api/2/tools/app/ios/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp%2Fios%2Flist%2F
   */
  toolsAppIosListV2(
    request: EndpointRequestMap["ToolsAppIosListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppIosListV2"]> {
    return this.execute("ToolsAppIosListV2", request, options);
  }

  /**
   * 查询安卓应用信息（支持所有账户体系）
   *
   * GET /open_api/2/tools/app_management/android_app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1710414664846349
   */
  toolsAppManagementAndroidAppListV2(
    request: EndpointRequestMap["ToolsAppManagementAndroidAppListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementAndroidAppListV2"]> {
    return this.execute("ToolsAppManagementAndroidAppListV2", request, options);
  }

  /**
   * 查询安卓应用母包
   *
   * GET /open_api/2/tools/app_management/android_basic_package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1714057253379079
   */
  toolsAppManagementAndroidBasicPackageGetV2(
    request: EndpointRequestMap["ToolsAppManagementAndroidBasicPackageGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementAndroidBasicPackageGetV2"]> {
    return this.execute("ToolsAppManagementAndroidBasicPackageGetV2", request, options);
  }

  /**
   * 发布安卓应用母包
   *
   * POST /open_api/2/tools/app_management/android_basic_package/publish/
   * @see https://open.oceanengine.com/labels/7/docs/1714118271558664
   */
  toolsAppManagementAndroidBasicPackagePublishV2(
    request: EndpointRequestMap["ToolsAppManagementAndroidBasicPackagePublishV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementAndroidBasicPackagePublishV2"]> {
    return this.execute("ToolsAppManagementAndroidBasicPackagePublishV2", request, options);
  }

  /**
   * 更新安卓应用母包
   *
   * POST /open_api/2/tools/app_management/android_basic_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1714057119751182
   */
  toolsAppManagementAndroidBasicPackageUpdateV2(
    request: EndpointRequestMap["ToolsAppManagementAndroidBasicPackageUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementAndroidBasicPackageUpdateV2"]> {
    return this.execute("ToolsAppManagementAndroidBasicPackageUpdateV2", request, options);
  }

  /**
   * 查询安卓应用信息
   *
   * GET /open_api/2/tools/app_management/app/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710742760448
   */
  toolsAppManagementAppGetV2(
    request: EndpointRequestMap["ToolsAppManagementAppGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementAppGetV2"]> {
    return this.execute("ToolsAppManagementAppGetV2", request, options);
  }

  /**
   * 查询游戏预约信息
   *
   * GET /open_api/2/tools/app_management/booking/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710742162447
   */
  toolsAppManagementBookingGetV2(
    request: EndpointRequestMap["ToolsAppManagementBookingGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementBookingGetV2"]> {
    return this.execute("ToolsAppManagementBookingGetV2", request, options);
  }

  /**
   * 查询游戏预约记录详情
   *
   * GET /open_api/2/tools/app_management/booking_records/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710743409676
   */
  toolsAppManagementBookingRecordsGetV2(
    request: EndpointRequestMap["ToolsAppManagementBookingRecordsGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementBookingRecordsGetV2"]> {
    return this.execute("ToolsAppManagementBookingRecordsGetV2", request, options);
  }

  /**
   * 取消应用共享关系
   *
   * POST /open_api/2/tools/app_management/bp_share/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1710413893446668
   */
  toolsAppManagementBpShareCancelV2(
    request: EndpointRequestMap["ToolsAppManagementBpShareCancelV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementBpShareCancelV2"]> {
    return this.execute("ToolsAppManagementBpShareCancelV2", request, options);
  }

  /**
   * 设置应用共享
   *
   * POST /open_api/2/tools/app_management/bp_share/
   * @see https://open.oceanengine.com/labels/7/docs/1710413925222415
   */
  toolsAppManagementBpShareV2(
    request: EndpointRequestMap["ToolsAppManagementBpShareV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementBpShareV2"]> {
    return this.execute("ToolsAppManagementBpShareV2", request, options);
  }

  /**
   * 创建安卓应用分包
   *
   * POST /open_api/2/tools/app_management/extend_package/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710746028047
   */
  toolsAppManagementExtendPackageCreateV2(
    request: EndpointRequestMap["ToolsAppManagementExtendPackageCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementExtendPackageCreateV2"]> {
    return this.execute("ToolsAppManagementExtendPackageCreateV2", request, options);
  }

  /**
   * 创建安卓应用分包 （支持所有账户体系）
   *
   * POST /open_api/2/tools/app_management/extend_package/create_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1710414234180623
   */
  toolsAppManagementExtendPackageCreateV2V2(
    request: EndpointRequestMap["ToolsAppManagementExtendPackageCreateV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementExtendPackageCreateV2V2"]> {
    return this.execute("ToolsAppManagementExtendPackageCreateV2V2", request, options);
  }

  /**
   * ToolsAppManagementExtendPackageListV2
   *
   * GET /open_api/2/tools/app_management/extend_package/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp_management%2Fextend_package%2Flist%2F
   */
  toolsAppManagementExtendPackageListV2(
    request: EndpointRequestMap["ToolsAppManagementExtendPackageListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementExtendPackageListV2"]> {
    return this.execute("ToolsAppManagementExtendPackageListV2", request, options);
  }

  /**
   * 查询安卓应用分包列表 （支持所有账户体系）
   *
   * GET /open_api/2/tools/app_management/extend_package/list_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1710414490537101
   */
  toolsAppManagementExtendPackageListV2V2(
    request: EndpointRequestMap["ToolsAppManagementExtendPackageListV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementExtendPackageListV2V2"]> {
    return this.execute("ToolsAppManagementExtendPackageListV2V2", request, options);
  }

  /**
   * 更新安卓应用分包版本
   *
   * POST /open_api/2/tools/app_management/extend_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710746645516
   */
  toolsAppManagementExtendPackageUpdateV2(
    request: EndpointRequestMap["ToolsAppManagementExtendPackageUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementExtendPackageUpdateV2"]> {
    return this.execute("ToolsAppManagementExtendPackageUpdateV2", request, options);
  }

  /**
   * 更新安卓应用分包版本（支持所有账户体系）
   *
   * POST /open_api/2/tools/app_management/extend_package/update_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1785215984044233
   */
  toolsAppManagementExtendPackageUpdateV2V2(
    request: EndpointRequestMap["ToolsAppManagementExtendPackageUpdateV2V2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementExtendPackageUpdateV2V2"]> {
    return this.execute("ToolsAppManagementExtendPackageUpdateV2V2", request, options);
  }

  /**
   * 查询鸿蒙应用列表
   *
   * GET /open_api/2/tools/app_management/harmony_app_list/
   * @see https://open.oceanengine.com/labels/7/docs/1826461039581386
   */
  toolsAppManagementHarmonyAppListV2(
    request: EndpointRequestMap["ToolsAppManagementHarmonyAppListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementHarmonyAppListV2"]> {
    return this.execute("ToolsAppManagementHarmonyAppListV2", request, options);
  }

  /**
   * ToolsAppManagementIndustryInfoListV2
   *
   * GET /open_api/2/tools/app_management/industry_info/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp_management%2Findustry_info%2Flist%2F
   */
  toolsAppManagementIndustryInfoListV2(
    request: EndpointRequestMap["ToolsAppManagementIndustryInfoListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementIndustryInfoListV2"]> {
    return this.execute("ToolsAppManagementIndustryInfoListV2", request, options);
  }

  /**
   * 查看应用共享范围
   *
   * GET /open_api/2/tools/app_management/share_account/list/
   * @see https://open.oceanengine.com/labels/7/docs/1710412460273664
   */
  toolsAppManagementShareAccountListV2(
    request: EndpointRequestMap["ToolsAppManagementShareAccountListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementShareAccountListV2"]> {
    return this.execute("ToolsAppManagementShareAccountListV2", request, options);
  }

  /**
   * 更新应用共享关系
   *
   * POST /open_api/2/tools/app_management/update/authorization/
   * @see https://open.oceanengine.com/labels/7/docs/1738385189486592
   */
  toolsAppManagementUpdateAuthorizationV2(
    request: EndpointRequestMap["ToolsAppManagementUpdateAuthorizationV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementUpdateAuthorizationV2"]> {
    return this.execute("ToolsAppManagementUpdateAuthorizationV2", request, options);
  }

  /**
   * 创建异步文件上传任务 
   *
   * POST /open_api/2/tools/app_management/upload_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1714118126561421
   */
  toolsAppManagementUploadTaskCreateV2(
    request: EndpointRequestMap["ToolsAppManagementUploadTaskCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementUploadTaskCreateV2"]> {
    return this.execute("ToolsAppManagementUploadTaskCreateV2", request, options);
  }

  /**
   * 查询文件异步上传任务
   *
   * GET /open_api/2/tools/app_management/upload_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1714057019136013
   */
  toolsAppManagementUploadTaskListV2(
    request: EndpointRequestMap["ToolsAppManagementUploadTaskListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAppManagementUploadTaskListV2"]> {
    return this.execute("ToolsAppManagementUploadTaskListV2", request, options);
  }

  /**
   * 获取字节小程序/小游戏详情内容
   *
   * GET /open_api/v3.0/tools/asset_link/list/
   * @see https://open.oceanengine.com/labels/7/docs/1778265753535620
   */
  toolsAssetLinkListV30(
    request: EndpointRequestMap["ToolsAssetLinkListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAssetLinkListV30"]> {
    return this.execute("ToolsAssetLinkListV30", request, options);
  }

  /**
   * ToolsAwemeAuthAuthShareAdShareV2
   *
   * POST /open_api/2/tools/aweme_auth/auth_share/ad_share/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Fauth_share%2Fad_share%2F
   */
  toolsAwemeAuthAuthShareAdShareV2(
    request: EndpointRequestMap["ToolsAwemeAuthAuthShareAdShareV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeAuthAuthShareAdShareV2"]> {
    return this.execute("ToolsAwemeAuthAuthShareAdShareV2", request, options);
  }

  /**
   * ToolsAwemeAuthCancelV2
   *
   * POST /open_api/2/tools/aweme_auth/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Fcancel%2F
   */
  toolsAwemeAuthCancelV2(
    request: EndpointRequestMap["ToolsAwemeAuthCancelV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeAuthCancelV2"]> {
    return this.execute("ToolsAwemeAuthCancelV2", request, options);
  }

  /**
   * 获取抖音授权关系
   *
   * GET /open_api/2/tools/aweme_auth_list/
   * @see https://open.oceanengine.com/labels/7/docs/1729983667746823
   */
  toolsAwemeAuthListV2(
    request: EndpointRequestMap["ToolsAwemeAuthListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeAuthListV2"]> {
    return this.execute("ToolsAwemeAuthListV2", request, options);
  }

  /**
   * ToolsAwemeAuthRenewalV2
   *
   * POST /open_api/2/tools/aweme_auth/renewal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Frenewal%2F
   */
  toolsAwemeAuthRenewalV2(
    request: EndpointRequestMap["ToolsAwemeAuthRenewalV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeAuthRenewalV2"]> {
    return this.execute("ToolsAwemeAuthRenewalV2", request, options);
  }

  /**
   * ToolsAwemeAuthV2
   *
   * POST /open_api/2/tools/aweme_auth/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2F
   */
  toolsAwemeAuthV2(
    request: EndpointRequestMap["ToolsAwemeAuthV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeAuthV2"]> {
    return this.execute("ToolsAwemeAuthV2", request, options);
  }

  /**
   * 查询抖音号id对应的达人信息
   *
   * GET /open_api/2/tools/aweme_author_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710689703948
   */
  toolsAwemeAuthorInfoGetV2(
    request: EndpointRequestMap["ToolsAwemeAuthorInfoGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeAuthorInfoGetV2"]> {
    return this.execute("ToolsAwemeAuthorInfoGetV2", request, options);
  }

  /**
   * 添加屏蔽用户 
   *
   * POST /open_api/v3.0/tools/aweme_banned/create/
   * @see https://open.oceanengine.com/labels/7/docs/1754804387645448
   */
  toolsAwemeBannedCreateV30(
    request: EndpointRequestMap["ToolsAwemeBannedCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeBannedCreateV30"]> {
    return this.execute("ToolsAwemeBannedCreateV30", request, options);
  }

  /**
   * 删除屏蔽用户 
   *
   * POST /open_api/v3.0/tools/aweme_banned/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1754804392604743
   */
  toolsAwemeBannedDeleteV30(
    request: EndpointRequestMap["ToolsAwemeBannedDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeBannedDeleteV30"]> {
    return this.execute("ToolsAwemeBannedDeleteV30", request, options);
  }

  /**
   * 获取屏蔽用户列表 
   *
   * GET /open_api/v3.0/tools/aweme_banned/list/
   * @see https://open.oceanengine.com/labels/7/docs/1754804753733632
   */
  toolsAwemeBannedListV30(
    request: EndpointRequestMap["ToolsAwemeBannedListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeBannedListV30"]> {
    return this.execute("ToolsAwemeBannedListV30", request, options);
  }

  /**
   * 查询抖音类目下的推荐达人
   *
   * GET /open_api/2/tools/aweme_category_top_author/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710689096719
   */
  toolsAwemeCategoryTopAuthorGetV2(
    request: EndpointRequestMap["ToolsAwemeCategoryTopAuthorGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeCategoryTopAuthorGetV2"]> {
    return this.execute("ToolsAwemeCategoryTopAuthorGetV2", request, options);
  }

  /**
   * 查询抖音帐号和类目信息
   *
   * GET /open_api/2/tools/aweme_info_search/
   * @see https://open.oceanengine.com/labels/7/docs/1696710687210511
   */
  toolsAwemeInfoSearchV2(
    request: EndpointRequestMap["ToolsAwemeInfoSearchV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeInfoSearchV2"]> {
    return this.execute("ToolsAwemeInfoSearchV2", request, options);
  }

  /**
   * 查询抖音类目列表
   *
   * GET /open_api/2/tools/aweme_multi_level_category/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710688389120
   */
  toolsAwemeMultiLevelCategoryGetV2(
    request: EndpointRequestMap["ToolsAwemeMultiLevelCategoryGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeMultiLevelCategoryGetV2"]> {
    return this.execute("ToolsAwemeMultiLevelCategoryGetV2", request, options);
  }

  /**
   * 查询抖音类似帐号
   *
   * GET /open_api/2/tools/aweme_similar_author_search/
   * @see https://open.oceanengine.com/labels/7/docs/1696710687807500
   */
  toolsAwemeSimilarAuthorSearchV2(
    request: EndpointRequestMap["ToolsAwemeSimilarAuthorSearchV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsAwemeSimilarAuthorSearchV2"]> {
    return this.execute("ToolsAwemeSimilarAuthorSearchV2", request, options);
  }

  /**
   * ToolsBidSuggestV2
   *
   * GET /open_api/2/tools/bid/suggest/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fbid%2Fsuggest%2F
   */
  toolsBidSuggestV2(
    request: EndpointRequestMap["ToolsBidSuggestV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBidSuggestV2"]> {
    return this.execute("ToolsBidSuggestV2", request, options);
  }

  /**
   * 查询建议出价（巨量营销升级版）
   *
   * GET /open_api/v3.0/tools/bids/suggest/
   * @see https://open.oceanengine.com/labels/7/docs/1771363823169544
   */
  toolsBidsSuggestV30(
    request: EndpointRequestMap["ToolsBidsSuggestV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBidsSuggestV30"]> {
    return this.execute("ToolsBidsSuggestV30", request, options);
  }

  /**
   * 获取项目下可用蓝海关键词
   *
   * GET /open_api/v3.0/tools/blue_flow_keyword/list/
   * @see https://open.oceanengine.com/labels/7/docs/1794683979261140
   */
  toolsBlueFlowKeywordListV30(
    request: EndpointRequestMap["ToolsBlueFlowKeywordListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBlueFlowKeywordListV30"]> {
    return this.execute("ToolsBlueFlowKeywordListV30", request, options);
  }

  /**
   * 获取蓝海流量包
   *
   * GET /open_api/v3.0/tools/blue_flow_package/list/
   * @see https://open.oceanengine.com/labels/7/docs/1794683678442643
   */
  toolsBlueFlowPackageListV30(
    request: EndpointRequestMap["ToolsBlueFlowPackageListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBlueFlowPackageListV30"]> {
    return this.execute("ToolsBlueFlowPackageListV30", request, options);
  }

  /**
   * 取消小游戏/小程序/商品库/商品共享关系
   *
   * POST /open_api/v3.0/tools/bp_asset_management/share/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1773102677218368
   */
  toolsBpAssetManagementShareCancelV30(
    request: EndpointRequestMap["ToolsBpAssetManagementShareCancelV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBpAssetManagementShareCancelV30"]> {
    return this.execute("ToolsBpAssetManagementShareCancelV30", request, options);
  }

  /**
   * 查看小游戏/小程序共享范围
   *
   * GET /open_api/v3.0/tools/bp_asset_management/share/get/
   * @see https://open.oceanengine.com/labels/7/docs/1773105971421187
   */
  toolsBpAssetManagementShareGetV30(
    request: EndpointRequestMap["ToolsBpAssetManagementShareGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBpAssetManagementShareGetV30"]> {
    return this.execute("ToolsBpAssetManagementShareGetV30", request, options);
  }

  /**
   * 设置小游戏&小程序&商品库&商品共享
   *
   * POST /open_api/v3.0/tools/bp_asset_management/share/
   * @see https://open.oceanengine.com/labels/7/docs/1773089427219584
   */
  toolsBpAssetManagementShareV30(
    request: EndpointRequestMap["ToolsBpAssetManagementShareV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsBpAssetManagementShareV30"]> {
    return this.execute("ToolsBpAssetManagementShareV30", request, options);
  }

  /**
   * ToolsClueBridgeCallCreateV2
   *
   * POST /open_api/2/tools/clue/bridge_call/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fbridge_call%2Fcreate%2F
   */
  toolsClueBridgeCallCreateV2(
    request: EndpointRequestMap["ToolsClueBridgeCallCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueBridgeCallCreateV2"]> {
    return this.execute("ToolsClueBridgeCallCreateV2", request, options);
  }

  /**
   * ToolsClueCallCreateV2
   *
   * POST /open_api/2/tools/clue/call/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall%2Fcreate%2F
   */
  toolsClueCallCreateV2(
    request: EndpointRequestMap["ToolsClueCallCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueCallCreateV2"]> {
    return this.execute("ToolsClueCallCreateV2", request, options);
  }

  /**
   * ToolsClueCallVirtualNumberGetV2
   *
   * GET /open_api/2/tools/clue/call_virtual_number/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall_virtual_number%2Fget%2F
   */
  toolsClueCallVirtualNumberGetV2(
    request: EndpointRequestMap["ToolsClueCallVirtualNumberGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueCallVirtualNumberGetV2"]> {
    return this.execute("ToolsClueCallVirtualNumberGetV2", request, options);
  }

  /**
   * ToolsClueCallVirtualNumberRefundDetailGetV2
   *
   * GET /open_api/2/tools/clue/call_virtual_number/refund_detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall_virtual_number%2Frefund_detail%2Fget%2F
   */
  toolsClueCallVirtualNumberRefundDetailGetV2(
    request: EndpointRequestMap["ToolsClueCallVirtualNumberRefundDetailGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueCallVirtualNumberRefundDetailGetV2"]> {
    return this.execute("ToolsClueCallVirtualNumberRefundDetailGetV2", request, options);
  }

  /**
   * 回传有效线索
   *
   * POST /open_api/2/tools/clue/callback/
   * @see https://open.oceanengine.com/labels/7/docs/1696710631812096
   */
  toolsClueCallbackV2(
    request: EndpointRequestMap["ToolsClueCallbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueCallbackV2"]> {
    return this.execute("ToolsClueCallbackV2", request, options);
  }

  /**
   * ToolsClueClueOverviewQueryV2
   *
   * GET /open_api/2/tools/clue/clue/overview/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fclue%2Foverview%2Fquery%2F
   */
  toolsClueClueOverviewQueryV2(
    request: EndpointRequestMap["ToolsClueClueOverviewQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueClueOverviewQueryV2"]> {
    return this.execute("ToolsClueClueOverviewQueryV2", request, options);
  }

  /**
   * ToolsClueContactLogListV2
   *
   * GET /open_api/2/tools/clue/contact_log/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Flist%2F
   */
  toolsClueContactLogListV2(
    request: EndpointRequestMap["ToolsClueContactLogListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueContactLogListV2"]> {
    return this.execute("ToolsClueContactLogListV2", request, options);
  }

  /**
   * ToolsClueContactLogOverviewQueryV2
   *
   * GET /open_api/2/tools/clue/contact_log/overview/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Foverview%2Fquery%2F
   */
  toolsClueContactLogOverviewQueryV2(
    request: EndpointRequestMap["ToolsClueContactLogOverviewQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueContactLogOverviewQueryV2"]> {
    return this.execute("ToolsClueContactLogOverviewQueryV2", request, options);
  }

  /**
   * ToolsClueContactLogRecordUrlGetV2
   *
   * GET /open_api/2/tools/clue/contact_log/record_url/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Frecord_url%2Fget%2F
   */
  toolsClueContactLogRecordUrlGetV2(
    request: EndpointRequestMap["ToolsClueContactLogRecordUrlGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueContactLogRecordUrlGetV2"]> {
    return this.execute("ToolsClueContactLogRecordUrlGetV2", request, options);
  }

  /**
   * ToolsClueExtInfoCallbackV2
   *
   * POST /open_api/2/tools/clue/ext_info/callback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fext_info%2Fcallback%2F
   */
  toolsClueExtInfoCallbackV2(
    request: EndpointRequestMap["ToolsClueExtInfoCallbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueExtInfoCallbackV2"]> {
    return this.execute("ToolsClueExtInfoCallbackV2", request, options);
  }

  /**
   * 建站工具——查询表单详情
   *
   * GET /open_api/2/tools/clue/form/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1696710622245903
   */
  toolsClueFormDetailV2(
    request: EndpointRequestMap["ToolsClueFormDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueFormDetailV2"]> {
    return this.execute("ToolsClueFormDetailV2", request, options);
  }

  /**
   * 建站工具——查询已有表单列表
   *
   * GET /open_api/2/tools/clue/form/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710621705216
   */
  toolsClueFormGetV2(
    request: EndpointRequestMap["ToolsClueFormGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueFormGetV2"]> {
    return this.execute("ToolsClueFormGetV2", request, options);
  }

  /**
   * 获取线索列表
   *
   * GET /open_api/2/tools/clue/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710631271436
   */
  toolsClueGetV2(
    request: EndpointRequestMap["ToolsClueGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueGetV2"]> {
    return this.execute("ToolsClueGetV2", request, options);
  }

  /**
   * ToolsClueInfoGetV2
   *
   * GET /open_api/2/tools/clue_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue_info%2Fget%2F
   */
  toolsClueInfoGetV2(
    request: EndpointRequestMap["ToolsClueInfoGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueInfoGetV2"]> {
    return this.execute("ToolsClueInfoGetV2", request, options);
  }

  /**
   * ToolsClueInfoUpdateV2
   *
   * POST /open_api/2/tools/clue/info/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Finfo%2Fupdate%2F
   */
  toolsClueInfoUpdateV2(
    request: EndpointRequestMap["ToolsClueInfoUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueInfoUpdateV2"]> {
    return this.execute("ToolsClueInfoUpdateV2", request, options);
  }

  /**
   * 本地推线索回传
   *
   * POST /open_api/2/tools/clue/life/callback/
   * @see https://open.oceanengine.com/labels/37/docs/1805613694863499
   */
  toolsClueLifeCallbackV2(
    request: EndpointRequestMap["ToolsClueLifeCallbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueLifeCallbackV2"]> {
    return this.execute("ToolsClueLifeCallbackV2", request, options);
  }

  /**
   * 获取本地推线索列表
   *
   * POST /open_api/2/tools/clue/life/get/
   * @see https://open.oceanengine.com/labels/37/docs/1794759460056076
   */
  toolsClueLifeGetV2(
    request: EndpointRequestMap["ToolsClueLifeGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueLifeGetV2"]> {
    return this.execute("ToolsClueLifeGetV2", request, options);
  }

  /**
   * ToolsClueLiteContactGetV2
   *
   * POST /open_api/2/tools/clue/lite/contact/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Flite%2Fcontact%2Fget%2F
   */
  toolsClueLiteContactGetV2(
    request: EndpointRequestMap["ToolsClueLiteContactGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueLiteContactGetV2"]> {
    return this.execute("ToolsClueLiteContactGetV2", request, options);
  }

  /**
   * ToolsClueLiteContactRecordV2
   *
   * POST /open_api/2/tools/clue/lite/contact/record/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Flite%2Fcontact%2Frecord%2F
   */
  toolsClueLiteContactRecordV2(
    request: EndpointRequestMap["ToolsClueLiteContactRecordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueLiteContactRecordV2"]> {
    return this.execute("ToolsClueLiteContactRecordV2", request, options);
  }

  /**
   * 私信线索转化回传接口
   *
   * POST /open_api/2/tools/clue/private_message/callback/
   * @see https://open.oceanengine.com/labels/7/docs/1826462960148556
   */
  toolsCluePrivateMessageCallbackV2(
    request: EndpointRequestMap["ToolsCluePrivateMessageCallbackV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCluePrivateMessageCallbackV2"]> {
    return this.execute("ToolsCluePrivateMessageCallbackV2", request, options);
  }

  /**
   * ToolsClueRefundDetailGetV2
   *
   * GET /open_api/2/tools/clue/refund_detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_detail%2Fget%2F
   */
  toolsClueRefundDetailGetV2(
    request: EndpointRequestMap["ToolsClueRefundDetailGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRefundDetailGetV2"]> {
    return this.execute("ToolsClueRefundDetailGetV2", request, options);
  }

  /**
   * ToolsClueRefundInfoQueryV2
   *
   * POST /open_api/2/tools/clue/refund/info/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund%2Finfo%2Fquery%2F
   */
  toolsClueRefundInfoQueryV2(
    request: EndpointRequestMap["ToolsClueRefundInfoQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRefundInfoQueryV2"]> {
    return this.execute("ToolsClueRefundInfoQueryV2", request, options);
  }

  /**
   * ToolsClueRefundReportGetV2
   *
   * GET /open_api/2/tools/clue/refund_report/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_report%2Fget%2F
   */
  toolsClueRefundReportGetV2(
    request: EndpointRequestMap["ToolsClueRefundReportGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRefundReportGetV2"]> {
    return this.execute("ToolsClueRefundReportGetV2", request, options);
  }

  /**
   * ToolsClueRefundViewGetV2
   *
   * GET /open_api/2/tools/clue/refund_view/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_view%2Fget%2F
   */
  toolsClueRefundViewGetV2(
    request: EndpointRequestMap["ToolsClueRefundViewGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRefundViewGetV2"]> {
    return this.execute("ToolsClueRefundViewGetV2", request, options);
  }

  /**
   * ToolsClueRobotScriptQueryV2
   *
   * POST /open_api/2/tools/clue/robot/script/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Fscript%2Fquery%2F
   */
  toolsClueRobotScriptQueryV2(
    request: EndpointRequestMap["ToolsClueRobotScriptQueryV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRobotScriptQueryV2"]> {
    return this.execute("ToolsClueRobotScriptQueryV2", request, options);
  }

  /**
   * ToolsClueRobotTaskCancelV2
   *
   * POST /open_api/2/tools/clue/robot/task/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Ftask%2Fcancel%2F
   */
  toolsClueRobotTaskCancelV2(
    request: EndpointRequestMap["ToolsClueRobotTaskCancelV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRobotTaskCancelV2"]> {
    return this.execute("ToolsClueRobotTaskCancelV2", request, options);
  }

  /**
   * ToolsClueRobotTaskCreateV2
   *
   * POST /open_api/2/tools/clue/robot/task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Ftask%2Fcreate%2F
   */
  toolsClueRobotTaskCreateV2(
    request: EndpointRequestMap["ToolsClueRobotTaskCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueRobotTaskCreateV2"]> {
    return this.execute("ToolsClueRobotTaskCreateV2", request, options);
  }

  /**
   * 建站工具——查询已有智能电话
   *
   * GET /open_api/2/tools/clue/smart_phone/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710621120524
   */
  toolsClueSmartPhoneGetV2(
    request: EndpointRequestMap["ToolsClueSmartPhoneGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueSmartPhoneGetV2"]> {
    return this.execute("ToolsClueSmartPhoneGetV2", request, options);
  }

  /**
   * ToolsClueWebrtcCreateV2V30
   *
   * POST /open_api/v3.0/tools/clue/webrtc/create/v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fclue%2Fwebrtc%2Fcreate%2Fv2%2F
   */
  toolsClueWebrtcCreateV2V30(
    request: EndpointRequestMap["ToolsClueWebrtcCreateV2V30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueWebrtcCreateV2V30"]> {
    return this.execute("ToolsClueWebrtcCreateV2V30", request, options);
  }

  /**
   * ToolsClueWebrtcTokenGetV2
   *
   * POST /open_api/2/tools/clue/webrtc/token/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fwebrtc%2Ftoken%2Fget%2F
   */
  toolsClueWebrtcTokenGetV2(
    request: EndpointRequestMap["ToolsClueWebrtcTokenGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueWebrtcTokenGetV2"]> {
    return this.execute("ToolsClueWebrtcTokenGetV2", request, options);
  }

  /**
   * ToolsClueWebrtcTokenGetV2V30
   *
   * POST /open_api/v3.0/tools/clue/webrtc/token/get/v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fclue%2Fwebrtc%2Ftoken%2Fget%2Fv2%2F
   */
  toolsClueWebrtcTokenGetV2V30(
    request: EndpointRequestMap["ToolsClueWebrtcTokenGetV2V30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsClueWebrtcTokenGetV2V30"]> {
    return this.execute("ToolsClueWebrtcTokenGetV2V30", request, options);
  }

  /**
   * 获取评论列表 
   *
   * GET /open_api/v3.0/tools/comment/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754803808580608
   */
  toolsCommentGetV30(
    request: EndpointRequestMap["ToolsCommentGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentGetV30"]> {
    return this.execute("ToolsCommentGetV30", request, options);
  }

  /**
   * 隐藏评论 
   *
   * POST /open_api/v3.0/tools/comment/hide/
   * @see https://open.oceanengine.com/labels/7/docs/1754804147204108
   */
  toolsCommentHideV30(
    request: EndpointRequestMap["ToolsCommentHideV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentHideV30"]> {
    return this.execute("ToolsCommentHideV30", request, options);
  }

  /**
   * 获取评论统计指标
   *
   * GET /open_api/v3.0/tools/comment_metrics/get/
   * @see https://open.oceanengine.com/labels/7/docs/1779551814119427
   */
  toolsCommentMetricsGetV30(
    request: EndpointRequestMap["ToolsCommentMetricsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentMetricsGetV30"]> {
    return this.execute("ToolsCommentMetricsGetV30", request, options);
  }

  /**
   * 获取评论视频ID列表
   *
   * GET /open_api/v3.0/tools/comment/mid2item_id/
   * @see https://open.oceanengine.com/labels/7/docs/1773084580896776
   */
  toolsCommentMid2itemIdV30(
    request: EndpointRequestMap["ToolsCommentMid2itemIdV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentMid2itemIdV30"]> {
    return this.execute("ToolsCommentMid2itemIdV30", request, options);
  }

  /**
   * 获取评论回复
   *
   * GET /open_api/v3.0/tools/comment_reply/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754803965480960
   */
  toolsCommentReplyGetV30(
    request: EndpointRequestMap["ToolsCommentReplyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentReplyGetV30"]> {
    return this.execute("ToolsCommentReplyGetV30", request, options);
  }

  /**
   * 回复评论
   *
   * POST /open_api/v3.0/tools/comment/reply/
   * @see https://open.oceanengine.com/labels/7/docs/1754803971592192
   */
  toolsCommentReplyV30(
    request: EndpointRequestMap["ToolsCommentReplyV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentReplyV30"]> {
    return this.execute("ToolsCommentReplyV30", request, options);
  }

  /**
   * ToolsCommentStickOnTopV30
   *
   * POST /open_api/v3.0/tools/comment/stick_on_top/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fcomment%2Fstick_on_top%2F
   */
  toolsCommentStickOnTopV30(
    request: EndpointRequestMap["ToolsCommentStickOnTopV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentStickOnTopV30"]> {
    return this.execute("ToolsCommentStickOnTopV30", request, options);
  }

  /**
   * 批量添加屏蔽词
   *
   * POST /open_api/v3.0/tools/comment/terms_banned/add/
   * @see https://open.oceanengine.com/labels/7/docs/1754804283302926
   */
  toolsCommentTermsBannedAddV30(
    request: EndpointRequestMap["ToolsCommentTermsBannedAddV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentTermsBannedAddV30"]> {
    return this.execute("ToolsCommentTermsBannedAddV30", request, options);
  }

  /**
   * 批量删除屏蔽词 
   *
   * POST /open_api/v3.0/tools/comment/terms_banned/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1754804370901006
   */
  toolsCommentTermsBannedDeleteV30(
    request: EndpointRequestMap["ToolsCommentTermsBannedDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentTermsBannedDeleteV30"]> {
    return this.execute("ToolsCommentTermsBannedDeleteV30", request, options);
  }

  /**
   * 获取屏蔽词 
   *
   * GET /open_api/v3.0/tools/comment/terms_banned/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754804382543880
   */
  toolsCommentTermsBannedGetV30(
    request: EndpointRequestMap["ToolsCommentTermsBannedGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentTermsBannedGetV30"]> {
    return this.execute("ToolsCommentTermsBannedGetV30", request, options);
  }

  /**
   * 更新屏蔽词 
   *
   * POST /open_api/v3.0/tools/comment/terms_banned/update/
   * @see https://open.oceanengine.com/labels/7/docs/1754804376185863
   */
  toolsCommentTermsBannedUpdateV30(
    request: EndpointRequestMap["ToolsCommentTermsBannedUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCommentTermsBannedUpdateV30"]> {
    return this.execute("ToolsCommentTermsBannedUpdateV30", request, options);
  }

  /**
   * 查询国家/区域信息
   *
   * GET /open_api/2/tools/country/info/
   * @see https://open.oceanengine.com/labels/7/docs/1709606374050823
   */
  toolsCountryInfoV2(
    request: EndpointRequestMap["ToolsCountryInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCountryInfoV2"]> {
    return this.execute("ToolsCountryInfoV2", request, options);
  }

  /**
   * 查询动态创意词包
   *
   * GET /open_api/2/tools/creative_word/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710718137356
   */
  toolsCreativeWordSelectV2(
    request: EndpointRequestMap["ToolsCreativeWordSelectV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsCreativeWordSelectV2"]> {
    return this.execute("ToolsCreativeWordSelectV2", request, options);
  }

  /**
   * 获取诊断建议
   *
   * GET /open_api/v3.0/tools/diagnosis/suggestion/get/
   * @see https://open.oceanengine.com/labels/7/docs/1847119758118924
   */
  toolsDiagnosisSuggestionGetV30(
    request: EndpointRequestMap["ToolsDiagnosisSuggestionGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsDiagnosisSuggestionGetV30"]> {
    return this.execute("ToolsDiagnosisSuggestionGetV30", request, options);
  }

  /**
   * 查询包解析状态
   *
   * GET /open_api/2/tools/download/package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710744774656
   */
  toolsDownloadPackageGetV2(
    request: EndpointRequestMap["ToolsDownloadPackageGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsDownloadPackageGetV2"]> {
    return this.execute("ToolsDownloadPackageGetV2", request, options);
  }

  /**
   * 提交解析应用包任务
   *
   * POST /open_api/2/tools/download/package/parse/
   * @see https://open.oceanengine.com/labels/7/docs/1696710744089612
   */
  toolsDownloadPackageParseV2(
    request: EndpointRequestMap["ToolsDownloadPackageParseV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsDownloadPackageParseV2"]> {
    return this.execute("ToolsDownloadPackageParseV2", request, options);
  }

  /**
   * 查询安卓应用母包详情
   *
   * GET /open_api/v3.0/tools/ebp/app/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1847390783454532
   */
  toolsEbpAppDetailV30(
    request: EndpointRequestMap["ToolsEbpAppDetailV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppDetailV30"]> {
    return this.execute("ToolsEbpAppDetailV30", request, options);
  }

  /**
   * 创建安卓分包
   *
   * POST /open_api/v3.0/tools/ebp/app_extend/create/
   * @see https://open.oceanengine.com/labels/7/docs/1846773756545432
   */
  toolsEbpAppExtendCreateV30(
    request: EndpointRequestMap["ToolsEbpAppExtendCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppExtendCreateV30"]> {
    return this.execute("ToolsEbpAppExtendCreateV30", request, options);
  }

  /**
   * 查询安卓应用分包列表
   *
   * GET /open_api/v3.0/tools/ebp/app_extend/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846776873285771
   */
  toolsEbpAppExtendListV30(
    request: EndpointRequestMap["ToolsEbpAppExtendListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppExtendListV30"]> {
    return this.execute("ToolsEbpAppExtendListV30", request, options);
  }

  /**
   * 更新安卓应用分包版本
   *
   * POST /open_api/v3.0/tools/ebp/app_extend/update/
   * @see https://open.oceanengine.com/labels/7/docs/1846831390014537
   */
  toolsEbpAppExtendUpdateV30(
    request: EndpointRequestMap["ToolsEbpAppExtendUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppExtendUpdateV30"]> {
    return this.execute("ToolsEbpAppExtendUpdateV30", request, options);
  }

  /**
   * 获取游戏预约列表
   *
   * GET /open_api/v3.0/tools/ebp/app_game_book/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487494516931
   */
  toolsEbpAppGameBookListV30(
    request: EndpointRequestMap["ToolsEbpAppGameBookListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppGameBookListV30"]> {
    return this.execute("ToolsEbpAppGameBookListV30", request, options);
  }

  /**
   * 获取安卓应用列表
   *
   * GET /open_api/v3.0/tools/ebp/app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846773030696265
   */
  toolsEbpAppListV30(
    request: EndpointRequestMap["ToolsEbpAppListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppListV30"]> {
    return this.execute("ToolsEbpAppListV30", request, options);
  }

  /**
   * 发布安卓应用母包
   *
   * POST /open_api/v3.0/tools/ebp/app/publish/
   * @see https://open.oceanengine.com/labels/7/docs/1847487521798855
   */
  toolsEbpAppPublishV30(
    request: EndpointRequestMap["ToolsEbpAppPublishV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppPublishV30"]> {
    return this.execute("ToolsEbpAppPublishV30", request, options);
  }

  /**
   * 更新安卓应用母包
   *
   * POST /open_api/v3.0/tools/ebp/app/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847462300780553
   */
  toolsEbpAppUpdateV30(
    request: EndpointRequestMap["ToolsEbpAppUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAppUpdateV30"]> {
    return this.execute("ToolsEbpAppUpdateV30", request, options);
  }

  /**
   * 取消资产共享
   *
   * POST /open_api/v3.0/tools/ebp/asset/auth/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1848328204842138
   */
  toolsEbpAssetAuthCancelV30(
    request: EndpointRequestMap["ToolsEbpAssetAuthCancelV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAssetAuthCancelV30"]> {
    return this.execute("ToolsEbpAssetAuthCancelV30", request, options);
  }

  /**
   * 查询资产共享范围
   *
   * GET /open_api/v3.0/tools/ebp/asset/auth/list/
   * @see https://open.oceanengine.com/labels/7/docs/1848326390305163
   */
  toolsEbpAssetAuthListV30(
    request: EndpointRequestMap["ToolsEbpAssetAuthListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAssetAuthListV30"]> {
    return this.execute("ToolsEbpAssetAuthListV30", request, options);
  }

  /**
   * 添加资产共享
   *
   * POST /open_api/v3.0/tools/ebp/asset/auth/
   * @see https://open.oceanengine.com/labels/7/docs/1848327327721671
   */
  toolsEbpAssetAuthV30(
    request: EndpointRequestMap["ToolsEbpAssetAuthV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpAssetAuthV30"]> {
    return this.execute("ToolsEbpAssetAuthV30", request, options);
  }

  /**
   * 升级版工作台素材共享
   *
   * POST /open_api/v3.0/tools/ebp/material/auth/create/
   * @see https://open.oceanengine.com/labels/7/docs/1854120947746880
   */
  toolsEbpMaterialAuthCreateV30(
    request: EndpointRequestMap["ToolsEbpMaterialAuthCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMaterialAuthCreateV30"]> {
    return this.execute("ToolsEbpMaterialAuthCreateV30", request, options);
  }

  /**
   * 升级版工作台取消素材共享
   *
   * POST /open_api/v3.0/tools/ebp/material/auth/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1855452458903624
   */
  toolsEbpMaterialAuthDeleteV30(
    request: EndpointRequestMap["ToolsEbpMaterialAuthDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMaterialAuthDeleteV30"]> {
    return this.execute("ToolsEbpMaterialAuthDeleteV30", request, options);
  }

  /**
   * 升级版工作台查询素材共享范围
   *
   * GET /open_api/v3.0/tools/ebp/material/auth/list/
   * @see https://open.oceanengine.com/labels/7/docs/1855451294366919
   */
  toolsEbpMaterialAuthListV30(
    request: EndpointRequestMap["ToolsEbpMaterialAuthListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMaterialAuthListV30"]> {
    return this.execute("ToolsEbpMaterialAuthListV30", request, options);
  }

  /**
   * 获取组织维度视频列表（ebp）
   *
   * GET /open_api/v3.0/tools/ebp/material/list/
   * @see https://open.oceanengine.com/labels/7/docs/1871578054932524
   */
  toolsEbpMaterialListV30(
    request: EndpointRequestMap["ToolsEbpMaterialListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMaterialListV30"]> {
    return this.execute("ToolsEbpMaterialListV30", request, options);
  }

  /**
   * 新建字节小程序
   *
   * POST /open_api/v3.0/tools/ebp/micro_applet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487532455299
   */
  toolsEbpMicroAppletCreateV30(
    request: EndpointRequestMap["ToolsEbpMicroAppletCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroAppletCreateV30"]> {
    return this.execute("ToolsEbpMicroAppletCreateV30", request, options);
  }

  /**
   * 获取字节小程序link详情
   *
   * GET /open_api/v3.0/tools/ebp/micro_applet/link/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487745198092
   */
  toolsEbpMicroAppletLinkListV30(
    request: EndpointRequestMap["ToolsEbpMicroAppletLinkListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroAppletLinkListV30"]> {
    return this.execute("ToolsEbpMicroAppletLinkListV30", request, options);
  }

  /**
   * 获取字节小程序列表
   *
   * GET /open_api/v3.0/tools/ebp/micro_applet/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487562418308
   */
  toolsEbpMicroAppletListV30(
    request: EndpointRequestMap["ToolsEbpMicroAppletListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroAppletListV30"]> {
    return this.execute("ToolsEbpMicroAppletListV30", request, options);
  }

  /**
   * 更新字节小程序
   *
   * POST /open_api/v3.0/tools/ebp/micro_applet/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487541689347
   */
  toolsEbpMicroAppletUpdateV30(
    request: EndpointRequestMap["ToolsEbpMicroAppletUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroAppletUpdateV30"]> {
    return this.execute("ToolsEbpMicroAppletUpdateV30", request, options);
  }

  /**
   * 新增字节小游戏
   *
   * POST /open_api/v3.0/tools/ebp/micro_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487590982660
   */
  toolsEbpMicroGameCreateV30(
    request: EndpointRequestMap["ToolsEbpMicroGameCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroGameCreateV30"]> {
    return this.execute("ToolsEbpMicroGameCreateV30", request, options);
  }

  /**
   * 获取字节小游戏链接详情
   *
   * GET /open_api/v3.0/tools/ebp/micro_game/link/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487751501836
   */
  toolsEbpMicroGameLinkListV30(
    request: EndpointRequestMap["ToolsEbpMicroGameLinkListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroGameLinkListV30"]> {
    return this.execute("ToolsEbpMicroGameLinkListV30", request, options);
  }

  /**
   * 获取字节小游戏列表
   *
   * GET /open_api/v3.0/tools/ebp/micro_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487579709768
   */
  toolsEbpMicroGameListV30(
    request: EndpointRequestMap["ToolsEbpMicroGameListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroGameListV30"]> {
    return this.execute("ToolsEbpMicroGameListV30", request, options);
  }

  /**
   * 更新字节小游戏
   *
   * POST /open_api/v3.0/tools/ebp/micro_game/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487694947340
   */
  toolsEbpMicroGameUpdateV30(
    request: EndpointRequestMap["ToolsEbpMicroGameUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpMicroGameUpdateV30"]> {
    return this.execute("ToolsEbpMicroGameUpdateV30", request, options);
  }

  /**
   * EBP组织-删除试玩/直玩素材
   *
   * POST /open_api/v3.0/tools/ebp/playable/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1870677089664795
   */
  toolsEbpPlayableDeleteV30(
    request: EndpointRequestMap["ToolsEbpPlayableDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpPlayableDeleteV30"]> {
    return this.execute("ToolsEbpPlayableDeleteV30", request, options);
  }

  /**
   * 获取账户可用的组织试玩/直玩素材
   *
   * GET /open_api/v3.0/tools/ebp/playable/list/
   * @see https://open.oceanengine.com/labels/7/docs/1870677509430347
   */
  toolsEbpPlayableListV30(
    request: EndpointRequestMap["ToolsEbpPlayableListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpPlayableListV30"]> {
    return this.execute("ToolsEbpPlayableListV30", request, options);
  }

  /**
   * 升级版工作台组织上传试玩/直玩素材
   *
   * POST /open_api/v3.0/tools/ebp/playable/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1870677384747337
   */
  toolsEbpPlayableUploadV30(
    request: EndpointRequestMap["ToolsEbpPlayableUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpPlayableUploadV30"]> {
    return this.execute("ToolsEbpPlayableUploadV30", request, options);
  }

  /**
   * ToolsEbpStarTaskGetV30
   *
   * GET /open_api/v3.0/tools/ebp/star_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Febp%2Fstar_task%2Fget%2F
   */
  toolsEbpStarTaskGetV30(
    request: EndpointRequestMap["ToolsEbpStarTaskGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpStarTaskGetV30"]> {
    return this.execute("ToolsEbpStarTaskGetV30", request, options);
  }

  /**
   * 获取升级版巨量引擎工作台账户星广联投任务列表
   *
   * GET /open_api/v3.0/tools/ebp/star_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1868949066560512
   */
  toolsEbpStarTaskListV30(
    request: EndpointRequestMap["ToolsEbpStarTaskListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpStarTaskListV30"]> {
    return this.execute("ToolsEbpStarTaskListV30", request, options);
  }

  /**
   * 获取升级版巨量引擎工作台账户星广联投任务已投稿达人信息
   *
   * GET /open_api/v3.0/tools/ebp/star_task/task_author/get/
   * @see https://open.oceanengine.com/labels/7/docs/1868950079138956
   */
  toolsEbpStarTaskTaskAuthorGetV30(
    request: EndpointRequestMap["ToolsEbpStarTaskTaskAuthorGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpStarTaskTaskAuthorGetV30"]> {
    return this.execute("ToolsEbpStarTaskTaskAuthorGetV30", request, options);
  }

  /**
   * ToolsEbpStarTaskTaskAuthorVedioGetV30
   *
   * GET /open_api/v3.0/tools/ebp/star_task/task_author_vedio/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Febp%2Fstar_task%2Ftask_author_vedio%2Fget%2F
   */
  toolsEbpStarTaskTaskAuthorVedioGetV30(
    request: EndpointRequestMap["ToolsEbpStarTaskTaskAuthorVedioGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpStarTaskTaskAuthorVedioGetV30"]> {
    return this.execute("ToolsEbpStarTaskTaskAuthorVedioGetV30", request, options);
  }

  /**
   * 获取升级版巨量引擎工作台账户星广联投视频数据
   *
   * GET /open_api/v3.0/tools/ebp/star_task/task_video_data/get/
   * @see https://open.oceanengine.com/labels/7/docs/1868950518957124
   */
  toolsEbpStarTaskTaskVideoDataGetV30(
    request: EndpointRequestMap["ToolsEbpStarTaskTaskVideoDataGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpStarTaskTaskVideoDataGetV30"]> {
    return this.execute("ToolsEbpStarTaskTaskVideoDataGetV30", request, options);
  }

  /**
   * 获取组织认证及授权主体列表
   *
   * GET /open_api/v3.0/tools/ebp/subject/list/
   * @see https://open.oceanengine.com/labels/7/docs/1855089467521035
   */
  toolsEbpSubjectListV30(
    request: EndpointRequestMap["ToolsEbpSubjectListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpSubjectListV30"]> {
    return this.execute("ToolsEbpSubjectListV30", request, options);
  }

  /**
   * 升级版工作台获取视频素材评估标签
   *
   * GET /open_api/v3.0/tools/ebp/video_attributes/list/
   * @see https://open.oceanengine.com/labels/7/docs/1855453250877440
   */
  toolsEbpVideoAttributesListV30(
    request: EndpointRequestMap["ToolsEbpVideoAttributesListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpVideoAttributesListV30"]> {
    return this.execute("ToolsEbpVideoAttributesListV30", request, options);
  }

  /**
   * 升级版工作台批量删除视频
   *
   * POST /open_api/v3.0/tools/ebp/video/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1855450454372428
   */
  toolsEbpVideoDeleteV30(
    request: EndpointRequestMap["ToolsEbpVideoDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpVideoDeleteV30"]> {
    return this.execute("ToolsEbpVideoDeleteV30", request, options);
  }

  /**
   * 升级版工作台更新视频
   *
   * POST /open_api/v3.0/tools/ebp/video/update/
   * @see https://open.oceanengine.com/labels/7/docs/1855449500037184
   */
  toolsEbpVideoUpdateV30(
    request: EndpointRequestMap["ToolsEbpVideoUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpVideoUpdateV30"]> {
    return this.execute("ToolsEbpVideoUpdateV30", request, options);
  }

  /**
   * 升级版工作台上传视频
   *
   * POST /open_api/v3.0/tools/ebp/video/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1855448450527623
   */
  toolsEbpVideoUploadV30(
    request: EndpointRequestMap["ToolsEbpVideoUploadV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpVideoUploadV30"]> {
    return this.execute("ToolsEbpVideoUploadV30", request, options);
  }

  /**
   * 新建微信小程序
   *
   * POST /open_api/v3.0/tools/ebp/wechat_applet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487724040192
   */
  toolsEbpWechatAppletCreateV30(
    request: EndpointRequestMap["ToolsEbpWechatAppletCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpWechatAppletCreateV30"]> {
    return this.execute("ToolsEbpWechatAppletCreateV30", request, options);
  }

  /**
   * 获取微信小程序列表
   *
   * GET /open_api/v3.0/tools/ebp/wechat_applet/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487716271104
   */
  toolsEbpWechatAppletListV30(
    request: EndpointRequestMap["ToolsEbpWechatAppletListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpWechatAppletListV30"]> {
    return this.execute("ToolsEbpWechatAppletListV30", request, options);
  }

  /**
   * 更新微信小程序
   *
   * POST /open_api/v3.0/tools/ebp/wechat_applet/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487757321420
   */
  toolsEbpWechatAppletUpdateV30(
    request: EndpointRequestMap["ToolsEbpWechatAppletUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpWechatAppletUpdateV30"]> {
    return this.execute("ToolsEbpWechatAppletUpdateV30", request, options);
  }

  /**
   * 新建微信小游戏
   *
   * POST /open_api/v3.0/tools/ebp/wechat_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487731257344
   */
  toolsEbpWechatGameCreateV30(
    request: EndpointRequestMap["ToolsEbpWechatGameCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpWechatGameCreateV30"]> {
    return this.execute("ToolsEbpWechatGameCreateV30", request, options);
  }

  /**
   * 微信小游戏列表
   *
   * GET /open_api/v3.0/tools/ebp/wechat_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487703955596
   */
  toolsEbpWechatGameListV30(
    request: EndpointRequestMap["ToolsEbpWechatGameListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpWechatGameListV30"]> {
    return this.execute("ToolsEbpWechatGameListV30", request, options);
  }

  /**
   * 更新微信小游戏
   *
   * POST /open_api/v3.0/tools/ebp/wechat_game/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487737913356
   */
  toolsEbpWechatGameUpdateV30(
    request: EndpointRequestMap["ToolsEbpWechatGameUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEbpWechatGameUpdateV30"]> {
    return this.execute("ToolsEbpWechatGameUpdateV30", request, options);
  }

  /**
   * 查询受众预估结果
   *
   * GET /open_api/2/tools/estimate_audience/
   * @see https://open.oceanengine.com/labels/7/docs/1696710675422208
   */
  toolsEstimateAudienceV2(
    request: EndpointRequestMap["ToolsEstimateAudienceV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEstimateAudienceV2"]> {
    return this.execute("ToolsEstimateAudienceV2", request, options);
  }

  /**
   * 获取预估点击成本
   *
   * GET /open_api/2/tools/estimated_price/get/
   * @see https://open.oceanengine.com/labels/7/docs/1717213696709710
   */
  toolsEstimatedPriceGetV2(
    request: EndpointRequestMap["ToolsEstimatedPriceGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEstimatedPriceGetV2"]> {
    return this.execute("ToolsEstimatedPriceGetV2", request, options);
  }

  /**
   * 获取已创建资产详情（新）
   *
   * GET /open_api/2/tools/event/all_assets/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1800988620664954
   */
  toolsEventAllAssetsDetailV2(
    request: EndpointRequestMap["ToolsEventAllAssetsDetailV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEventAllAssetsDetailV2"]> {
    return this.execute("ToolsEventAllAssetsDetailV2", request, options);
  }

  /**
   * 获取账户下资产列表
   *
   * GET /open_api/2/tools/event/all_assets/list/
   * @see https://open.oceanengine.com/labels/7/docs/1800985709803914
   */
  toolsEventAllAssetsListV2(
    request: EndpointRequestMap["ToolsEventAllAssetsListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEventAllAssetsListV2"]> {
    return this.execute("ToolsEventAllAssetsListV2", request, options);
  }

  /**
   * ToolsEventAssetsGetV2
   *
   * GET /open_api/2/tools/event/assets/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fevent%2Fassets%2Fget%2F
   */
  toolsEventAssetsGetV2(
    request: EndpointRequestMap["ToolsEventAssetsGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEventAssetsGetV2"]> {
    return this.execute("ToolsEventAssetsGetV2", request, options);
  }

  /**
   * ToolsEventConvertOptimizedGoalGetV30
   *
   * GET /open_api/v3.0/tools/event_convert/optimized_goal/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fevent_convert%2Foptimized_goal%2Fget%2F
   */
  toolsEventConvertOptimizedGoalGetV30(
    request: EndpointRequestMap["ToolsEventConvertOptimizedGoalGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsEventConvertOptimizedGoalGetV30"]> {
    return this.execute("ToolsEventConvertOptimizedGoalGetV30", request, options);
  }

  /**
   * ToolsForbiddenLinkGreyGetV30
   *
   * GET /open_api/v3.0/tools/forbidden_link/grey/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fforbidden_link%2Fgrey%2Fget%2F
   */
  toolsForbiddenLinkGreyGetV30(
    request: EndpointRequestMap["ToolsForbiddenLinkGreyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsForbiddenLinkGreyGetV30"]> {
    return this.execute("ToolsForbiddenLinkGreyGetV30", request, options);
  }

  /**
   * 查询白名单能力
   *
   * GET /open_api/v3.0/tools/gray/get/
   * @see https://open.oceanengine.com/labels/7/docs/1763407285579840
   */
  toolsGrayGetV30(
    request: EndpointRequestMap["ToolsGrayGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsGrayGetV30"]> {
    return this.execute("ToolsGrayGetV30", request, options);
  }

  /**
   * ToolsHotMaterialDeriveAdoptV30
   *
   * POST /open_api/v3.0/tools/hot_material_derive/adopt/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fadopt%2F
   */
  toolsHotMaterialDeriveAdoptV30(
    request: EndpointRequestMap["ToolsHotMaterialDeriveAdoptV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsHotMaterialDeriveAdoptV30"]> {
    return this.execute("ToolsHotMaterialDeriveAdoptV30", request, options);
  }

  /**
   * ToolsHotMaterialDeriveGetV30
   *
   * GET /open_api/v3.0/tools/hot_material_derive/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fget%2F
   */
  toolsHotMaterialDeriveGetV30(
    request: EndpointRequestMap["ToolsHotMaterialDeriveGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsHotMaterialDeriveGetV30"]> {
    return this.execute("ToolsHotMaterialDeriveGetV30", request, options);
  }

  /**
   * ToolsHotMaterialDeriveListV30
   *
   * GET /open_api/v3.0/tools/hot_material_derive/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Flist%2F
   */
  toolsHotMaterialDeriveListV30(
    request: EndpointRequestMap["ToolsHotMaterialDeriveListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsHotMaterialDeriveListV30"]> {
    return this.execute("ToolsHotMaterialDeriveListV30", request, options);
  }

  /**
   * ToolsHotMaterialDeriveSubmitV30
   *
   * POST /open_api/v3.0/tools/hot_material_derive/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fsubmit%2F
   */
  toolsHotMaterialDeriveSubmitV30(
    request: EndpointRequestMap["ToolsHotMaterialDeriveSubmitV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsHotMaterialDeriveSubmitV30"]> {
    return this.execute("ToolsHotMaterialDeriveSubmitV30", request, options);
  }

  /**
   * 获取不活跃账户列表
   *
   * GET /open_api/v3.0/tools/inactive_advertiser/list/
   * @see https://open.oceanengine.com/labels/7/docs/1834548530596872
   */
  toolsInactiveAdvertiserListV30(
    request: EndpointRequestMap["ToolsInactiveAdvertiserListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsInactiveAdvertiserListV30"]> {
    return this.execute("ToolsInactiveAdvertiserListV30", request, options);
  }

  /**
   * 获取行业列表
   *
   * GET /open_api/2/tools/industry/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710677879808
   */
  toolsIndustryGetV2(
    request: EndpointRequestMap["ToolsIndustryGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsIndustryGetV2"]> {
    return this.execute("ToolsIndustryGetV2", request, options);
  }

  /**
   * 行为关键词查询
   *
   * GET /open_api/2/tools/interest_action/action/keyword/
   * @see https://open.oceanengine.com/labels/7/docs/1696710705721356
   */
  toolsInterestActionActionKeywordV2(
    request: EndpointRequestMap["ToolsInterestActionActionKeywordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsInterestActionActionKeywordV2"]> {
    return this.execute("ToolsInterestActionActionKeywordV2", request, options);
  }

  /**
   * 兴趣行为类目关键词id转词
   *
   * GET /open_api/2/tools/interest_action/id2word/
   * @see https://open.oceanengine.com/labels/7/docs/1696710707561472
   */
  toolsInterestActionId2wordV2(
    request: EndpointRequestMap["ToolsInterestActionId2wordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsInterestActionId2wordV2"]> {
    return this.execute("ToolsInterestActionId2wordV2", request, options);
  }

  /**
   * 兴趣关键词查询
   *
   * GET /open_api/2/tools/interest_action/interest/keyword/
   * @see https://open.oceanengine.com/labels/7/docs/1696710706958348
   */
  toolsInterestActionInterestKeywordV2(
    request: EndpointRequestMap["ToolsInterestActionInterestKeywordV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsInterestActionInterestKeywordV2"]> {
    return this.execute("ToolsInterestActionInterestKeywordV2", request, options);
  }

  /**
   * 获取行为兴趣推荐关键词
   *
   * GET /open_api/2/tools/interest_action/keyword/suggest/
   * @see https://open.oceanengine.com/labels/7/docs/1696710708197388
   */
  toolsInterestActionKeywordSuggestV2(
    request: EndpointRequestMap["ToolsInterestActionKeywordSuggestV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsInterestActionKeywordSuggestV2"]> {
    return this.execute("ToolsInterestActionKeywordSuggestV2", request, options);
  }

  /**
   * ToolsIsSupportUniversalGetV2
   *
   * GET /open_api/2/tools/is_support_universal/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fis_support_universal%2Fget%2F
   */
  toolsIsSupportUniversalGetV2(
    request: EndpointRequestMap["ToolsIsSupportUniversalGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsIsSupportUniversalGetV2"]> {
    return this.execute("ToolsIsSupportUniversalGetV2", request, options);
  }

  /**
   * ToolsJointBidCreateV30
   *
   * POST /open_api/v3.0/tools/joint_bid/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fcreate%2F
   */
  toolsJointBidCreateV30(
    request: EndpointRequestMap["ToolsJointBidCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsJointBidCreateV30"]> {
    return this.execute("ToolsJointBidCreateV30", request, options);
  }

  /**
   * ToolsJointBidGetV30
   *
   * GET /open_api/v3.0/tools/joint_bid/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fget%2F
   */
  toolsJointBidGetV30(
    request: EndpointRequestMap["ToolsJointBidGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsJointBidGetV30"]> {
    return this.execute("ToolsJointBidGetV30", request, options);
  }

  /**
   * ToolsJointBidUpdateV30
   *
   * POST /open_api/v3.0/tools/joint_bid/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fupdate%2F
   */
  toolsJointBidUpdateV30(
    request: EndpointRequestMap["ToolsJointBidUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsJointBidUpdateV30"]> {
    return this.execute("ToolsJointBidUpdateV30", request, options);
  }

  /**
   * 设置优词提量系数和生效维度
   *
   * POST /open_api/v3.0/tools/keywords_bid_ratio/create/
   * @see https://open.oceanengine.com/labels/7/docs/1760582291523597
   */
  toolsKeywordsBidRatioCreateV30(
    request: EndpointRequestMap["ToolsKeywordsBidRatioCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsKeywordsBidRatioCreateV30"]> {
    return this.execute("ToolsKeywordsBidRatioCreateV30", request, options);
  }

  /**
   * 删除优词计划
   *
   * POST /open_api/v3.0/tools/keywords_bid_ratio/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1760582420219982
   */
  toolsKeywordsBidRatioDeleteV30(
    request: EndpointRequestMap["ToolsKeywordsBidRatioDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsKeywordsBidRatioDeleteV30"]> {
    return this.execute("ToolsKeywordsBidRatioDeleteV30", request, options);
  }

  /**
   * 查询优词提量系数信息
   *
   * GET /open_api/v3.0/tools/keywords_bid_ratio/get/
   * @see https://open.oceanengine.com/labels/7/docs/1760582415753224
   */
  toolsKeywordsBidRatioGetV30(
    request: EndpointRequestMap["ToolsKeywordsBidRatioGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsKeywordsBidRatioGetV30"]> {
    return this.execute("ToolsKeywordsBidRatioGetV30", request, options);
  }

  /**
   * 更新优词提量系数和生效维度
   *
   * POST /open_api/v3.0/tools/keywords_bid_ratio/update/
   * @see https://open.oceanengine.com/labels/7/docs/1760582412101703
   */
  toolsKeywordsBidRatioUpdateV30(
    request: EndpointRequestMap["ToolsKeywordsBidRatioUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsKeywordsBidRatioUpdateV30"]> {
    return this.execute("ToolsKeywordsBidRatioUpdateV30", request, options);
  }

  /**
   * 查询优词绑定的项目信息
   *
   * GET /open_api/v3.0/tools/keywords_project_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1760582423563278
   */
  toolsKeywordsProjectInfoGetV30(
    request: EndpointRequestMap["ToolsKeywordsProjectInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsKeywordsProjectInfoGetV30"]> {
    return this.execute("ToolsKeywordsProjectInfoGetV30", request, options);
  }

  /**
   * 创建落地页组
   *
   * POST /open_api/2/tools/landing_group/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710628472844
   */
  toolsLandingGroupCreateV2(
    request: EndpointRequestMap["ToolsLandingGroupCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLandingGroupCreateV2"]> {
    return this.execute("ToolsLandingGroupCreateV2", request, options);
  }

  /**
   * 获取落地页组
   *
   * GET /open_api/2/tools/landing_group/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710629043212
   */
  toolsLandingGroupGetV2(
    request: EndpointRequestMap["ToolsLandingGroupGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLandingGroupGetV2"]> {
    return this.execute("ToolsLandingGroupGetV2", request, options);
  }

  /**
   * 更新落地页组站点状态
   *
   * POST /open_api/2/tools/landing_group/site_opt_status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710629600256
   */
  toolsLandingGroupSiteOptStatusUpdateV2(
    request: EndpointRequestMap["ToolsLandingGroupSiteOptStatusUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLandingGroupSiteOptStatusUpdateV2"]> {
    return this.execute("ToolsLandingGroupSiteOptStatusUpdateV2", request, options);
  }

  /**
   * 更新落地页组信息
   *
   * POST /open_api/2/tools/landing_group/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710630182912
   */
  toolsLandingGroupUpdateV2(
    request: EndpointRequestMap["ToolsLandingGroupUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLandingGroupUpdateV2"]> {
    return this.execute("ToolsLandingGroupUpdateV2", request, options);
  }

  /**
   * 查询授权直播抖音达人列表
   *
   * GET /open_api/2/tools/live_authorize/list/
   * @see https://open.oceanengine.com/labels/7/docs/1703442176442381
   */
  toolsLiveAuthorizeListV2(
    request: EndpointRequestMap["ToolsLiveAuthorizeListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLiveAuthorizeListV2"]> {
    return this.execute("ToolsLiveAuthorizeListV2", request, options);
  }

  /**
   * 获取操作日志详情
   *
   * GET /open_api/2/tools/log_search/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1854930515444873
   */
  toolsLogSearchDetailGetV2(
    request: EndpointRequestMap["ToolsLogSearchDetailGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLogSearchDetailGetV2"]> {
    return this.execute("ToolsLogSearchDetailGetV2", request, options);
  }

  /**
   * 操作日志查询
   *
   * GET /open_api/2/tools/log_search/
   * @see https://open.oceanengine.com/labels/7/docs/1696710682956815
   */
  toolsLogSearchV2(
    request: EndpointRequestMap["ToolsLogSearchV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsLogSearchV2"]> {
    return this.execute("ToolsLogSearchV2", request, options);
  }

  /**
   * 开启素材起量
   *
   * POST /open_api/v3.0/tools/material_raise/create/
   * @see https://open.oceanengine.com/labels/7/docs/1841780308383884
   */
  toolsMaterialRaiseCreateV30(
    request: EndpointRequestMap["ToolsMaterialRaiseCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMaterialRaiseCreateV30"]> {
    return this.execute("ToolsMaterialRaiseCreateV30", request, options);
  }

  /**
   * 获取素材起量方案列表
   *
   * GET /open_api/v3.0/tools/material_raise/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843312933108864
   */
  toolsMaterialRaiseGetV30(
    request: EndpointRequestMap["ToolsMaterialRaiseGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMaterialRaiseGetV30"]> {
    return this.execute("ToolsMaterialRaiseGetV30", request, options);
  }

  /**
   * 获取起量中素材列表
   *
   * GET /open_api/v3.0/tools/material_raise/material_ids/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843313912696841
   */
  toolsMaterialRaiseMaterialIdsGetV30(
    request: EndpointRequestMap["ToolsMaterialRaiseMaterialIdsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMaterialRaiseMaterialIdsGetV30"]> {
    return this.execute("ToolsMaterialRaiseMaterialIdsGetV30", request, options);
  }

  /**
   * 获取素材起量记录列表
   *
   * GET /open_api/v3.0/tools/material_raise_records/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843311260215556
   */
  toolsMaterialRaiseRecordsGetV30(
    request: EndpointRequestMap["ToolsMaterialRaiseRecordsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMaterialRaiseRecordsGetV30"]> {
    return this.execute("ToolsMaterialRaiseRecordsGetV30", request, options);
  }

  /**
   * 获取素材起量状态
   *
   * GET /open_api/v3.0/tools/material_raise_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843312582214784
   */
  toolsMaterialRaiseStatusGetV30(
    request: EndpointRequestMap["ToolsMaterialRaiseStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMaterialRaiseStatusGetV30"]> {
    return this.execute("ToolsMaterialRaiseStatusGetV30", request, options);
  }

  /**
   * 关停素材起量任务
   *
   * POST /open_api/v3.0/tools/material_raise/stop/
   * @see https://open.oceanengine.com/labels/7/docs/1843312719969155
   */
  toolsMaterialRaiseStopV30(
    request: EndpointRequestMap["ToolsMaterialRaiseStopV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMaterialRaiseStopV30"]> {
    return this.execute("ToolsMaterialRaiseStopV30", request, options);
  }

  /**
   * 创建字节小程序
   *
   * POST /open_api/v3.0/tools/micro_app/create/
   * @see https://open.oceanengine.com/labels/7/docs/1780613896121344
   */
  toolsMicroAppCreateV30(
    request: EndpointRequestMap["ToolsMicroAppCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroAppCreateV30"]> {
    return this.execute("ToolsMicroAppCreateV30", request, options);
  }

  /**
   * 获取字节小程序
   *
   * GET /open_api/v3.0/tools/micro_app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1778249831680135
   */
  toolsMicroAppListV30(
    request: EndpointRequestMap["ToolsMicroAppListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroAppListV30"]> {
    return this.execute("ToolsMicroAppListV30", request, options);
  }

  /**
   * 更新字节小程序
   *
   * POST /open_api/v3.0/tools/micro_app/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780614097935372
   */
  toolsMicroAppUpdateV30(
    request: EndpointRequestMap["ToolsMicroAppUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroAppUpdateV30"]> {
    return this.execute("ToolsMicroAppUpdateV30", request, options);
  }

  /**
   * 查询字节小游戏归因激活时间窗
   *
   * GET /open_api/v3.0/tools/micro_game/convert_window/get/
   * @see https://open.oceanengine.com/labels/7/docs/1824379978676224
   */
  toolsMicroGameConvertWindowGetV30(
    request: EndpointRequestMap["ToolsMicroGameConvertWindowGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroGameConvertWindowGetV30"]> {
    return this.execute("ToolsMicroGameConvertWindowGetV30", request, options);
  }

  /**
   * 修改字节小游戏归因激活时间窗
   *
   * POST /open_api/v3.0/tools/micro_game/convert_window/update/
   * @see https://open.oceanengine.com/labels/7/docs/1824379551374339
   */
  toolsMicroGameConvertWindowUpdateV30(
    request: EndpointRequestMap["ToolsMicroGameConvertWindowUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroGameConvertWindowUpdateV30"]> {
    return this.execute("ToolsMicroGameConvertWindowUpdateV30", request, options);
  }

  /**
   * 创建字节小游戏
   *
   * POST /open_api/v3.0/tools/micro_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1780614284853257
   */
  toolsMicroGameCreateV30(
    request: EndpointRequestMap["ToolsMicroGameCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroGameCreateV30"]> {
    return this.execute("ToolsMicroGameCreateV30", request, options);
  }

  /**
   * 获取字节小游戏
   *
   * GET /open_api/v3.0/tools/micro_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1778100726681600
   */
  toolsMicroGameListV30(
    request: EndpointRequestMap["ToolsMicroGameListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroGameListV30"]> {
    return this.execute("ToolsMicroGameListV30", request, options);
  }

  /**
   * 更新字节小游戏
   *
   * POST /open_api/v3.0/tools/micro_game/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780614388338698
   */
  toolsMicroGameUpdateV30(
    request: EndpointRequestMap["ToolsMicroGameUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsMicroGameUpdateV30"]> {
    return this.execute("ToolsMicroGameUpdateV30", request, options);
  }

  /**
   * ToolsNoBidSuggestBidV2
   *
   * GET /open_api/2/tools/no_bid/suggest_bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fno_bid%2Fsuggest_bid%2F
   */
  toolsNoBidSuggestBidV2(
    request: EndpointRequestMap["ToolsNoBidSuggestBidV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsNoBidSuggestBidV2"]> {
    return this.execute("ToolsNoBidSuggestBidV2", request, options);
  }

  /**
   * 通过优化目标获取橙子落地页站点信息 
   *
   * GET /open_api/v3.0/tools/orange_site/get/
   * @see https://open.oceanengine.com/labels/7/docs/1755162848410635
   */
  toolsOrangeSiteGetV30(
    request: EndpointRequestMap["ToolsOrangeSiteGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsOrangeSiteGetV30"]> {
    return this.execute("ToolsOrangeSiteGetV30", request, options);
  }

  /**
   * ToolsPioneerProgramAttachmentUploadV2
   *
   * POST /open_api/2/tools/pioneer_program/attachment/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpioneer_program%2Fattachment%2Fupload%2F
   */
  toolsPioneerProgramAttachmentUploadV2(
    request: EndpointRequestMap["ToolsPioneerProgramAttachmentUploadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPioneerProgramAttachmentUploadV2"]> {
    return this.execute("ToolsPioneerProgramAttachmentUploadV2", request, options);
  }

  /**
   * ToolsPlayableCloudGameListV2
   *
   * GET /open_api/2/tools/playable/cloud_game/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fcloud_game%2Flist%2F
   */
  toolsPlayableCloudGameListV2(
    request: EndpointRequestMap["ToolsPlayableCloudGameListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableCloudGameListV2"]> {
    return this.execute("ToolsPlayableCloudGameListV2", request, options);
  }

  /**
   * ToolsPlayableCreateV2
   *
   * POST /open_api/2/tools/playable/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fcreate%2F
   */
  toolsPlayableCreateV2(
    request: EndpointRequestMap["ToolsPlayableCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableCreateV2"]> {
    return this.execute("ToolsPlayableCreateV2", request, options);
  }

  /**
   * ToolsPlayableGrantResultV2
   *
   * GET /open_api/2/tools/playable/grant/result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fgrant%2Fresult%2F
   */
  toolsPlayableGrantResultV2(
    request: EndpointRequestMap["ToolsPlayableGrantResultV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableGrantResultV2"]> {
    return this.execute("ToolsPlayableGrantResultV2", request, options);
  }

  /**
   * ToolsPlayableGrantV2
   *
   * POST /open_api/2/tools/playable/grant/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fgrant%2F
   */
  toolsPlayableGrantV2(
    request: EndpointRequestMap["ToolsPlayableGrantV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableGrantV2"]> {
    return this.execute("ToolsPlayableGrantV2", request, options);
  }

  /**
   * ToolsPlayableListGetV2
   *
   * GET /open_api/2/tools/playable_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable_list%2Fget%2F
   */
  toolsPlayableListGetV2(
    request: EndpointRequestMap["ToolsPlayableListGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableListGetV2"]> {
    return this.execute("ToolsPlayableListGetV2", request, options);
  }

  /**
   * ToolsPlayableSaveV2
   *
   * POST /open_api/2/tools/playable/save/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fsave%2F
   */
  toolsPlayableSaveV2(
    request: EndpointRequestMap["ToolsPlayableSaveV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableSaveV2"]> {
    return this.execute("ToolsPlayableSaveV2", request, options);
  }

  /**
   * ToolsPlayableUploadV2
   *
   * POST /open_api/2/tools/playable/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fupload%2F
   */
  toolsPlayableUploadV2(
    request: EndpointRequestMap["ToolsPlayableUploadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableUploadV2"]> {
    return this.execute("ToolsPlayableUploadV2", request, options);
  }

  /**
   * ToolsPlayableValidateV2
   *
   * GET /open_api/2/tools/playable/validate/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fvalidate%2F
   */
  toolsPlayableValidateV2(
    request: EndpointRequestMap["ToolsPlayableValidateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPlayableValidateV2"]> {
    return this.execute("ToolsPlayableValidateV2", request, options);
  }

  /**
   * ToolsPreAuditGetV2
   *
   * GET /open_api/2/tools/pre_audit/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpre_audit%2Fget%2F
   */
  toolsPreAuditGetV2(
    request: EndpointRequestMap["ToolsPreAuditGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPreAuditGetV2"]> {
    return this.execute("ToolsPreAuditGetV2", request, options);
  }

  /**
   * ToolsPreAuditSendV2
   *
   * POST /open_api/2/tools/pre_audit/send/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpre_audit%2Fsend%2F
   */
  toolsPreAuditSendV2(
    request: EndpointRequestMap["ToolsPreAuditSendV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPreAuditSendV2"]> {
    return this.execute("ToolsPreAuditSendV2", request, options);
  }

  /**
   * ToolsPrivativeWordAdAddV2
   *
   * POST /open_api/2/tools/privative_word/ad/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fad%2Fadd%2F
   */
  toolsPrivativeWordAdAddV2(
    request: EndpointRequestMap["ToolsPrivativeWordAdAddV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordAdAddV2"]> {
    return this.execute("ToolsPrivativeWordAdAddV2", request, options);
  }

  /**
   * ToolsPrivativeWordAdUpdateV2
   *
   * POST /open_api/2/tools/privative_word/ad/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fad%2Fupdate%2F
   */
  toolsPrivativeWordAdUpdateV2(
    request: EndpointRequestMap["ToolsPrivativeWordAdUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordAdUpdateV2"]> {
    return this.execute("ToolsPrivativeWordAdUpdateV2", request, options);
  }

  /**
   * 批量获取项目否定词 
   *
   * POST /open_api/v3.0/tools/privative_word/batch_get/
   * @see https://open.oceanengine.com/labels/7/docs/1756247565488132
   */
  toolsPrivativeWordBatchGetV30(
    request: EndpointRequestMap["ToolsPrivativeWordBatchGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordBatchGetV30"]> {
    return this.execute("ToolsPrivativeWordBatchGetV30", request, options);
  }

  /**
   * ToolsPrivativeWordCampaignAddV2
   *
   * POST /open_api/2/tools/privative_word/campaign/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fcampaign%2Fadd%2F
   */
  toolsPrivativeWordCampaignAddV2(
    request: EndpointRequestMap["ToolsPrivativeWordCampaignAddV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordCampaignAddV2"]> {
    return this.execute("ToolsPrivativeWordCampaignAddV2", request, options);
  }

  /**
   * ToolsPrivativeWordCampaignUpdateV2
   *
   * POST /open_api/2/tools/privative_word/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fcampaign%2Fupdate%2F
   */
  toolsPrivativeWordCampaignUpdateV2(
    request: EndpointRequestMap["ToolsPrivativeWordCampaignUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordCampaignUpdateV2"]> {
    return this.execute("ToolsPrivativeWordCampaignUpdateV2", request, options);
  }

  /**
   * ToolsPrivativeWordGetV2
   *
   * GET /open_api/2/tools/privative_word/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fget%2F
   */
  toolsPrivativeWordGetV2(
    request: EndpointRequestMap["ToolsPrivativeWordGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordGetV2"]> {
    return this.execute("ToolsPrivativeWordGetV2", request, options);
  }

  /**
   * 批量添加项目否定词 
   *
   * POST /open_api/v3.0/tools/privative_word/project/add/
   * @see https://open.oceanengine.com/labels/7/docs/1756247416572931
   */
  toolsPrivativeWordProjectAddV30(
    request: EndpointRequestMap["ToolsPrivativeWordProjectAddV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordProjectAddV30"]> {
    return this.execute("ToolsPrivativeWordProjectAddV30", request, options);
  }

  /**
   * 批量更新项目否定词
   *
   * POST /open_api/v3.0/tools/privative_word/project/update/
   * @see https://open.oceanengine.com/labels/7/docs/1756247493882947
   */
  toolsPrivativeWordProjectUpdateV30(
    request: EndpointRequestMap["ToolsPrivativeWordProjectUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordProjectUpdateV30"]> {
    return this.execute("ToolsPrivativeWordProjectUpdateV30", request, options);
  }

  /**
   * 批量新增营销否定词
   *
   * POST /open_api/v3.0/tools/privative_word/promotion/add/
   * @see https://open.oceanengine.com/labels/7/docs/1760581052656648
   */
  toolsPrivativeWordPromotionAddV30(
    request: EndpointRequestMap["ToolsPrivativeWordPromotionAddV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordPromotionAddV30"]> {
    return this.execute("ToolsPrivativeWordPromotionAddV30", request, options);
  }

  /**
   * 批量更新营销否定词
   *
   * POST /open_api/v3.0/tools/privative_word/promotion/update/
   * @see https://open.oceanengine.com/labels/7/docs/1760581111863374
   */
  toolsPrivativeWordPromotionUpdateV30(
    request: EndpointRequestMap["ToolsPrivativeWordPromotionUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPrivativeWordPromotionUpdateV30"]> {
    return this.execute("ToolsPrivativeWordPromotionUpdateV30", request, options);
  }

  /**
   * 更新项目自选素材状态
   *
   * POST /open_api/v3.0/tools/project_material_type/update/
   * @see https://open.oceanengine.com/labels/7/docs/1869423189855306
   */
  toolsProjectMaterialTypeUpdateV30(
    request: EndpointRequestMap["ToolsProjectMaterialTypeUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsProjectMaterialTypeUpdateV30"]> {
    return this.execute("ToolsProjectMaterialTypeUpdateV30", request, options);
  }

  /**
   * ToolsPromotionCardRecommendGetV2
   *
   * GET /open_api/2/tools/promotion_card/recommend/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpromotion_card%2Frecommend%2Fget%2F
   */
  toolsPromotionCardRecommendGetV2(
    request: EndpointRequestMap["ToolsPromotionCardRecommendGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionCardRecommendGetV2"]> {
    return this.execute("ToolsPromotionCardRecommendGetV2", request, options);
  }

  /**
   * ToolsPromotionCardRecommendTitleGetV2
   *
   * GET /open_api/2/tools/promotion_card/recommend_title/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpromotion_card%2Frecommend_title%2Fget%2F
   */
  toolsPromotionCardRecommendTitleGetV2(
    request: EndpointRequestMap["ToolsPromotionCardRecommendTitleGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionCardRecommendTitleGetV2"]> {
    return this.execute("ToolsPromotionCardRecommendTitleGetV2", request, options);
  }

  /**
   * 采纳单元诊断建议
   *
   * POST /open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/
   * @see https://open.oceanengine.com/labels/7/docs/1754716131916803
   */
  toolsPromotionDiagnosisSuggestionAcceptV30(
    request: EndpointRequestMap["ToolsPromotionDiagnosisSuggestionAcceptV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionDiagnosisSuggestionAcceptV30"]> {
    return this.execute("ToolsPromotionDiagnosisSuggestionAcceptV30", request, options);
  }

  /**
   * 获取单元诊断建议
   *
   * GET /open_api/v3.0/tools/promotion_diagnosis/suggestion/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754715780584459
   */
  toolsPromotionDiagnosisSuggestionGetV30(
    request: EndpointRequestMap["ToolsPromotionDiagnosisSuggestionGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionDiagnosisSuggestionGetV30"]> {
    return this.execute("ToolsPromotionDiagnosisSuggestionGetV30", request, options);
  }

  /**
   * 开启/更新一键起量
   *
   * POST /open_api/v3.0/tools/promotion_raise/set/
   * @see https://open.oceanengine.com/labels/7/docs/1761603589597259
   */
  toolsPromotionRaiseSetV30(
    request: EndpointRequestMap["ToolsPromotionRaiseSetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionRaiseSetV30"]> {
    return this.execute("ToolsPromotionRaiseSetV30", request, options);
  }

  /**
   * 获取营销起量状态
   *
   * GET /open_api/v3.0/tools/promotion_raise_status_current_ids/get/
   * @see https://open.oceanengine.com/labels/7/docs/1765406483367948
   */
  toolsPromotionRaiseStatusCurrentIdsGetV30(
    request: EndpointRequestMap["ToolsPromotionRaiseStatusCurrentIdsGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionRaiseStatusCurrentIdsGetV30"]> {
    return this.execute("ToolsPromotionRaiseStatusCurrentIdsGetV30", request, options);
  }

  /**
   * 获取一键起量方案列表
   *
   * GET /open_api/v3.0/tools/promotion_raise_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1761603513577476
   */
  toolsPromotionRaiseStatusGetV30(
    request: EndpointRequestMap["ToolsPromotionRaiseStatusGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionRaiseStatusGetV30"]> {
    return this.execute("ToolsPromotionRaiseStatusGetV30", request, options);
  }

  /**
   * 关停正在起量的营销
   *
   * POST /open_api/v3.0/tools/promotion_raise/stop/
   * @see https://open.oceanengine.com/labels/7/docs/1761603666011139
   */
  toolsPromotionRaiseStopV30(
    request: EndpointRequestMap["ToolsPromotionRaiseStopV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionRaiseStopV30"]> {
    return this.execute("ToolsPromotionRaiseStopV30", request, options);
  }

  /**
   * 获取起量版本信息
   *
   * GET /open_api/v3.0/tools/promotion_raise_version/get/
   * @see https://open.oceanengine.com/labels/7/docs/1761603462670403
   */
  toolsPromotionRaiseVersionGetV30(
    request: EndpointRequestMap["ToolsPromotionRaiseVersionGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsPromotionRaiseVersionGetV30"]> {
    return this.execute("ToolsPromotionRaiseVersionGetV30", request, options);
  }

  /**
   * 查询在投计划配额
   *
   * GET /open_api/2/tools/quota/get/
   * @see https://open.oceanengine.com/labels/7/docs/1731070251873293
   */
  toolsQuotaGetV2(
    request: EndpointRequestMap["ToolsQuotaGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsQuotaGetV2"]> {
    return this.execute("ToolsQuotaGetV2", request, options);
  }

  /**
   * 获取地域列表
   *
   * GET /open_api/2/tools/region/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710678458380
   */
  toolsRegionGetV2(
    request: EndpointRequestMap["ToolsRegionGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRegionGetV2"]> {
    return this.execute("ToolsRegionGetV2", request, options);
  }

  /**
   * ToolsRtaGetInfoTmpV2
   *
   * GET /open_api/2/tools/rta/get_info_tmp/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frta%2Fget_info_tmp%2F
   */
  toolsRtaGetInfoTmpV2(
    request: EndpointRequestMap["ToolsRtaGetInfoTmpV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRtaGetInfoTmpV2"]> {
    return this.execute("ToolsRtaGetInfoTmpV2", request, options);
  }

  /**
   * 获取RTA策略数据
   *
   * GET /open_api/2/tools/rta/get_info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710749205519
   */
  toolsRtaGetInfoV2(
    request: EndpointRequestMap["ToolsRtaGetInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRtaGetInfoV2"]> {
    return this.execute("ToolsRtaGetInfoV2", request, options);
  }

  /**
   * 获取可用的RTA策略
   *
   * GET /open_api/2/tools/rta/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710749917196
   */
  toolsRtaGetV2(
    request: EndpointRequestMap["ToolsRtaGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRtaGetV2"]> {
    return this.execute("ToolsRtaGetV2", request, options);
  }

  /**
   * 获取RTA策略绑定信息列表
   *
   * GET /open_api/v3.0/tools/rta/scope/get/
   * @see https://open.oceanengine.com/labels/7/docs/1760867710819341
   */
  toolsRtaScopeGetV30(
    request: EndpointRequestMap["ToolsRtaScopeGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRtaScopeGetV30"]> {
    return this.execute("ToolsRtaScopeGetV30", request, options);
  }

  /**
   * 设置账户下RTA策略生效范围
   *
   * POST /open_api/2/tools/rta/set_scope/
   * @see https://open.oceanengine.com/labels/7/docs/1727976691326976
   */
  toolsRtaSetScopeV2(
    request: EndpointRequestMap["ToolsRtaSetScopeV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRtaSetScopeV2"]> {
    return this.execute("ToolsRtaSetScopeV2", request, options);
  }

  /**
   * 批量启停账户下RTA策略
   *
   * POST /open_api/2/tools/rta/status_update/
   * @see https://open.oceanengine.com/labels/7/docs/1727976605031439
   */
  toolsRtaStatusUpdateV2(
    request: EndpointRequestMap["ToolsRtaStatusUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRtaStatusUpdateV2"]> {
    return this.execute("ToolsRtaStatusUpdateV2", request, options);
  }

  /**
   * ToolsRubeexPlayableAdListV2
   *
   * GET /open_api/2/tools/rubeex_playable/ad_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frubeex_playable%2Fad_list%2F
   */
  toolsRubeexPlayableAdListV2(
    request: EndpointRequestMap["ToolsRubeexPlayableAdListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRubeexPlayableAdListV2"]> {
    return this.execute("ToolsRubeexPlayableAdListV2", request, options);
  }

  /**
   * ToolsRubeexPlayableListV2
   *
   * GET /open_api/2/tools/rubeex_playable/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frubeex_playable%2Flist%2F
   */
  toolsRubeexPlayableListV2(
    request: EndpointRequestMap["ToolsRubeexPlayableListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRubeexPlayableListV2"]> {
    return this.execute("ToolsRubeexPlayableListV2", request, options);
  }

  /**
   * 获取作品场景
   *
   * GET /open_api/2/tools/rubeex/remark/
   * @see https://open.oceanengine.com/labels/7/docs/1701620936632388
   */
  toolsRubeexRemarkV2(
    request: EndpointRequestMap["ToolsRubeexRemarkV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRubeexRemarkV2"]> {
    return this.execute("ToolsRubeexRemarkV2", request, options);
  }

  /**
   * 获取作品版本信息
   *
   * GET /open_api/2/tools/rubeex/version/get/
   * @see https://open.oceanengine.com/labels/7/docs/1701620989640707
   */
  toolsRubeexVersionGetV2(
    request: EndpointRequestMap["ToolsRubeexVersionGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsRubeexVersionGetV2"]> {
    return this.execute("ToolsRubeexVersionGetV2", request, options);
  }

  /**
   * 获取快投推荐出价系数
   *
   * GET /open_api/2/tools/search_bid_ratio/get/
   * @see https://open.oceanengine.com/labels/7/docs/1740289237468175
   */
  toolsSearchBidRatioGetV2(
    request: EndpointRequestMap["ToolsSearchBidRatioGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSearchBidRatioGetV2"]> {
    return this.execute("ToolsSearchBidRatioGetV2", request, options);
  }

  /**
   * 建站工具-建站复制
   *
   * POST /open_api/2/tools/site/copy/
   * @see https://open.oceanengine.com/labels/7/docs/1696710623908864
   */
  toolsSiteCopyV2(
    request: EndpointRequestMap["ToolsSiteCopyV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteCopyV2"]> {
    return this.execute("ToolsSiteCopyV2", request, options);
  }

  /**
   * 创建橙子建站站点
   *
   * POST /open_api/2/tools/site/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710617712640
   */
  toolsSiteCreateV2(
    request: EndpointRequestMap["ToolsSiteCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteCreateV2"]> {
    return this.execute("ToolsSiteCreateV2", request, options);
  }

  /**
   * 获取落地页预约表单信息
   *
   * GET /open_api/2/tools/site/forms/list/
   * @see https://open.oceanengine.com/labels/7/docs/1696710622810127
   */
  toolsSiteFormsListV2(
    request: EndpointRequestMap["ToolsSiteFormsListV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteFormsListV2"]> {
    return this.execute("ToolsSiteFormsListV2", request, options);
  }

  /**
   * 获取橙子建站站点列表
   *
   * GET /open_api/2/tools/site/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710620579852
   */
  toolsSiteGetV2(
    request: EndpointRequestMap["ToolsSiteGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteGetV2"]> {
    return this.execute("ToolsSiteGetV2", request, options);
  }

  /**
   * 建站工具-建站样式复制（跨账户）
   *
   * POST /open_api/2/tools/site/handsel/
   * @see https://open.oceanengine.com/labels/7/docs/1696710623352844
   */
  toolsSiteHandselV2(
    request: EndpointRequestMap["ToolsSiteHandselV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteHandselV2"]> {
    return this.execute("ToolsSiteHandselV2", request, options);
  }

  /**
   * 获取橙子建站站点预览地址
   *
   * GET /open_api/2/tools/site/preview/
   * @see https://open.oceanengine.com/labels/7/docs/1696710619437056
   */
  toolsSitePreviewV2(
    request: EndpointRequestMap["ToolsSitePreviewV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSitePreviewV2"]> {
    return this.execute("ToolsSitePreviewV2", request, options);
  }

  /**
   * 获取橙子建站站点详细信息
   *
   * GET /open_api/2/tools/site/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710620022799
   */
  toolsSiteReadV2(
    request: EndpointRequestMap["ToolsSiteReadV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteReadV2"]> {
    return this.execute("ToolsSiteReadV2", request, options);
  }

  /**
   * 基于站点创建模板
   *
   * POST /open_api/2/tools/site_template/create/
   * @see https://open.oceanengine.com/labels/7/docs/1722273160450059
   */
  toolsSiteTemplateCreateV2(
    request: EndpointRequestMap["ToolsSiteTemplateCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteTemplateCreateV2"]> {
    return this.execute("ToolsSiteTemplateCreateV2", request, options);
  }

  /**
   * 获取站点模版列表
   *
   * GET /open_api/2/tools/site_template/get/
   * @see https://open.oceanengine.com/labels/7/docs/1722273219292292
   */
  toolsSiteTemplateGetV2(
    request: EndpointRequestMap["ToolsSiteTemplateGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteTemplateGetV2"]> {
    return this.execute("ToolsSiteTemplateGetV2", request, options);
  }

  /**
   * 获取模板/站点URL
   *
   * GET /open_api/2/tools/site_template/pic_url/get/
   * @see https://open.oceanengine.com/labels/7/docs/1772995231995911
   */
  toolsSiteTemplatePicUrlGetV2(
    request: EndpointRequestMap["ToolsSiteTemplatePicUrlGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteTemplatePicUrlGetV2"]> {
    return this.execute("ToolsSiteTemplatePicUrlGetV2", request, options);
  }

  /**
   * 获取模版预览链接
   *
   * GET /open_api/2/tools/site_template/preview/
   * @see https://open.oceanengine.com/labels/7/docs/1722273233146891
   */
  toolsSiteTemplatePreviewV2(
    request: EndpointRequestMap["ToolsSiteTemplatePreviewV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteTemplatePreviewV2"]> {
    return this.execute("ToolsSiteTemplatePreviewV2", request, options);
  }

  /**
   * 基于模板创建站点
   *
   * POST /open_api/2/tools/site_template/site/create/
   * @see https://open.oceanengine.com/labels/7/docs/1722273197263875
   */
  toolsSiteTemplateSiteCreateV2(
    request: EndpointRequestMap["ToolsSiteTemplateSiteCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteTemplateSiteCreateV2"]> {
    return this.execute("ToolsSiteTemplateSiteCreateV2", request, options);
  }

  /**
   * 更改橙子建站站点状态
   *
   * POST /open_api/2/tools/site/update_status/
   * @see https://open.oceanengine.com/labels/7/docs/1696710618884096
   */
  toolsSiteUpdateStatusV2(
    request: EndpointRequestMap["ToolsSiteUpdateStatusV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteUpdateStatusV2"]> {
    return this.execute("ToolsSiteUpdateStatusV2", request, options);
  }

  /**
   * 修改橙子建站站点
   *
   * POST /open_api/2/tools/site/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710618300431
   */
  toolsSiteUpdateV2(
    request: EndpointRequestMap["ToolsSiteUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSiteUpdateV2"]> {
    return this.execute("ToolsSiteUpdateV2", request, options);
  }

  /**
   * ToolsStarTaskSettlementConfigV2
   *
   * GET /open_api/2/tools/star_task/settlement_config/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fstar_task%2Fsettlement_config%2F
   */
  toolsStarTaskSettlementConfigV2(
    request: EndpointRequestMap["ToolsStarTaskSettlementConfigV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsStarTaskSettlementConfigV2"]> {
    return this.execute("ToolsStarTaskSettlementConfigV2", request, options);
  }

  /**
   * ToolsStarTaskTitleTopicGetV2
   *
   * GET /open_api/2/tools/star_task/title_topic/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fstar_task%2Ftitle_topic%2Fget%2F
   */
  toolsStarTaskTitleTopicGetV2(
    request: EndpointRequestMap["ToolsStarTaskTitleTopicGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsStarTaskTitleTopicGetV2"]> {
    return this.execute("ToolsStarTaskTitleTopicGetV2", request, options);
  }

  /**
   * 获取营销建议起量预算
   *
   * GET /open_api/v3.0/tools/suggest_budget/get/
   * @see https://open.oceanengine.com/labels/7/docs/1761603631358979
   */
  toolsSuggestBudgetGetV30(
    request: EndpointRequestMap["ToolsSuggestBudgetGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsSuggestBudgetGetV30"]> {
    return this.execute("ToolsSuggestBudgetGetV30", request, options);
  }

  /**
   * 新建优选起量任务
   *
   * POST /open_api/2/tools/task_raise/create/
   * @see https://open.oceanengine.com/labels/7/docs/1733956164012035
   */
  toolsTaskRaiseCreateV2(
    request: EndpointRequestMap["ToolsTaskRaiseCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsTaskRaiseCreateV2"]> {
    return this.execute("ToolsTaskRaiseCreateV2", request, options);
  }

  /**
   * 查询优选起量任务数据
   *
   * GET /open_api/2/tools/task_raise/data/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733956354030596
   */
  toolsTaskRaiseDataGetV2(
    request: EndpointRequestMap["ToolsTaskRaiseDataGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsTaskRaiseDataGetV2"]> {
    return this.execute("ToolsTaskRaiseDataGetV2", request, options);
  }

  /**
   * 查询优选起量任务
   *
   * GET /open_api/2/tools/task_raise/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733956250006603
   */
  toolsTaskRaiseGetV2(
    request: EndpointRequestMap["ToolsTaskRaiseGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsTaskRaiseGetV2"]> {
    return this.execute("ToolsTaskRaiseGetV2", request, options);
  }

  /**
   * 查询优选起量状态
   *
   * GET /open_api/2/tools/task_raise/optimization_ids/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733956327213060
   */
  toolsTaskRaiseOptimizationIdsGetV2(
    request: EndpointRequestMap["ToolsTaskRaiseOptimizationIdsGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsTaskRaiseOptimizationIdsGetV2"]> {
    return this.execute("ToolsTaskRaiseOptimizationIdsGetV2", request, options);
  }

  /**
   * 关闭优选起量任务
   *
   * POST /open_api/2/tools/task_raise/status/stop/
   * @see https://open.oceanengine.com/labels/7/docs/1733956297312259
   */
  toolsTaskRaiseStatusStopV2(
    request: EndpointRequestMap["ToolsTaskRaiseStatusStopV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsTaskRaiseStatusStopV2"]> {
    return this.execute("ToolsTaskRaiseStatusStopV2", request, options);
  }

  /**
   * 删除第三方落地页站点
   *
   * POST /open_api/2/tools/third_site/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710626717696
   */
  toolsThirdSiteDeleteV2(
    request: EndpointRequestMap["ToolsThirdSiteDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsThirdSiteDeleteV2"]> {
    return this.execute("ToolsThirdSiteDeleteV2", request, options);
  }

  /**
   * 获取第三方落地页站点列表
   *
   * GET /open_api/2/tools/third_site/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710624992256
   */
  toolsThirdSiteGetV2(
    request: EndpointRequestMap["ToolsThirdSiteGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsThirdSiteGetV2"]> {
    return this.execute("ToolsThirdSiteGetV2", request, options);
  }

  /**
   * 获取第三方落地页预览地址
   *
   * GET /open_api/2/tools/third_site/preview/
   * @see https://open.oceanengine.com/labels/7/docs/1696710627256332
   */
  toolsThirdSitePreviewV2(
    request: EndpointRequestMap["ToolsThirdSitePreviewV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsThirdSitePreviewV2"]> {
    return this.execute("ToolsThirdSitePreviewV2", request, options);
  }

  /**
   * 修改第三方落地页站点
   *
   * POST /open_api/2/tools/third_site/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710626095116
   */
  toolsThirdSiteUpdateV2(
    request: EndpointRequestMap["ToolsThirdSiteUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsThirdSiteUpdateV2"]> {
    return this.execute("ToolsThirdSiteUpdateV2", request, options);
  }

  /**
   * ToolsToolsTaskDetailGetV30
   *
   * GET /open_api/v3.0/tools/tools_task_detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Ftools_task_detail%2Fget%2F
   */
  toolsToolsTaskDetailGetV30(
    request: EndpointRequestMap["ToolsToolsTaskDetailGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsToolsTaskDetailGetV30"]> {
    return this.execute("ToolsToolsTaskDetailGetV30", request, options);
  }

  /**
   * ToolsToolsTaskGetV30
   *
   * GET /open_api/v3.0/tools/tools_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Ftools_task%2Fget%2F
   */
  toolsToolsTaskGetV30(
    request: EndpointRequestMap["ToolsToolsTaskGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsToolsTaskGetV30"]> {
    return this.execute("ToolsToolsTaskGetV30", request, options);
  }

  /**
   * 创建穿山甲流量包
   *
   * POST /open_api/2/tools/union/flow_package/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710721249295
   */
  toolsUnionFlowPackageCreateV2(
    request: EndpointRequestMap["ToolsUnionFlowPackageCreateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsUnionFlowPackageCreateV2"]> {
    return this.execute("ToolsUnionFlowPackageCreateV2", request, options);
  }

  /**
   * 删除穿山甲流量包
   *
   * POST /open_api/2/tools/union/flow_package/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710722514956
   */
  toolsUnionFlowPackageDeleteV2(
    request: EndpointRequestMap["ToolsUnionFlowPackageDeleteV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsUnionFlowPackageDeleteV2"]> {
    return this.execute("ToolsUnionFlowPackageDeleteV2", request, options);
  }

  /**
   * 获取穿山甲流量包
   *
   * GET /open_api/2/tools/union/flow_package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710720565248
   */
  toolsUnionFlowPackageGetV2(
    request: EndpointRequestMap["ToolsUnionFlowPackageGetV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsUnionFlowPackageGetV2"]> {
    return this.execute("ToolsUnionFlowPackageGetV2", request, options);
  }

  /**
   * 查看2.0rit数据
   *
   * GET /open_api/v3.0/tools/union/flow_package/promotion/report/
   * @see https://open.oceanengine.com/labels/7/docs/1775179912274944
   */
  toolsUnionFlowPackagePromotionReportV30(
    request: EndpointRequestMap["ToolsUnionFlowPackagePromotionReportV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsUnionFlowPackagePromotionReportV30"]> {
    return this.execute("ToolsUnionFlowPackagePromotionReportV30", request, options);
  }

  /**
   * 查看rit数据
   *
   * GET /open_api/2/tools/union/flow_package/report/
   * @see https://open.oceanengine.com/labels/7/docs/1696710723136512
   */
  toolsUnionFlowPackageReportV2(
    request: EndpointRequestMap["ToolsUnionFlowPackageReportV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsUnionFlowPackageReportV2"]> {
    return this.execute("ToolsUnionFlowPackageReportV2", request, options);
  }

  /**
   * 修改穿山甲流量包
   *
   * POST /open_api/2/tools/union/flow_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710721833984
   */
  toolsUnionFlowPackageUpdateV2(
    request: EndpointRequestMap["ToolsUnionFlowPackageUpdateV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsUnionFlowPackageUpdateV2"]> {
    return this.execute("ToolsUnionFlowPackageUpdateV2", request, options);
  }

  /**
   * 查询视频是否挂载下载类锚点
   *
   * GET /open_api/2/tools/video/check_available_anchor/
   * @see https://open.oceanengine.com/labels/7/docs/1729984030929924
   */
  toolsVideoCheckAvailableAnchorV2(
    request: EndpointRequestMap["ToolsVideoCheckAvailableAnchorV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsVideoCheckAvailableAnchorV2"]> {
    return this.execute("ToolsVideoCheckAvailableAnchorV2", request, options);
  }

  /**
   * 获取视频智能封面
   *
   * GET /open_api/2/tools/video_cover/suggest/
   * @see https://open.oceanengine.com/labels/7/docs/1696710602404864
   */
  toolsVideoCoverSuggestV2(
    request: EndpointRequestMap["ToolsVideoCoverSuggestV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsVideoCoverSuggestV2"]> {
    return this.execute("ToolsVideoCoverSuggestV2", request, options);
  }

  /**
   * 创建微信小程序
   *
   * POST /open_api/v3.0/tools/wechat_applet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1771744149686286
   */
  toolsWechatAppletCreateV30(
    request: EndpointRequestMap["ToolsWechatAppletCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsWechatAppletCreateV30"]> {
    return this.execute("ToolsWechatAppletCreateV30", request, options);
  }

  /**
   * 获取微信小程序列表
   *
   * GET /open_api/v3.0/tools/wechat_applet/list/
   * @see https://open.oceanengine.com/labels/7/docs/1771203622020111
   */
  toolsWechatAppletListV30(
    request: EndpointRequestMap["ToolsWechatAppletListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsWechatAppletListV30"]> {
    return this.execute("ToolsWechatAppletListV30", request, options);
  }

  /**
   * 更新微信小程序
   *
   * POST /open_api/v3.0/tools/wechat_applet/update/
   * @see https://open.oceanengine.com/labels/7/docs/1771744756803659
   */
  toolsWechatAppletUpdateV30(
    request: EndpointRequestMap["ToolsWechatAppletUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsWechatAppletUpdateV30"]> {
    return this.execute("ToolsWechatAppletUpdateV30", request, options);
  }

  /**
   * 创建微信小游戏
   *
   * POST /open_api/v3.0/tools/wechat_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1771744962990147
   */
  toolsWechatGameCreateV30(
    request: EndpointRequestMap["ToolsWechatGameCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsWechatGameCreateV30"]> {
    return this.execute("ToolsWechatGameCreateV30", request, options);
  }

  /**
   * 获取微信小游戏列表
   *
   * GET /open_api/v3.0/tools/wechat_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1771362185154564
   */
  toolsWechatGameListV30(
    request: EndpointRequestMap["ToolsWechatGameListV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["ToolsWechatGameListV30"]> {
    return this.execute("ToolsWechatGameListV30", request, options);
  }

  /**
   * UniProjectAwemeAuthorizedGetV30
   *
   * GET /open_api/v3.0/uni_project/aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Faweme%2Fauthorized%2Fget%2F
   */
  uniProjectAwemeAuthorizedGetV30(
    request: EndpointRequestMap["UniProjectAwemeAuthorizedGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UniProjectAwemeAuthorizedGetV30"]> {
    return this.execute("UniProjectAwemeAuthorizedGetV30", request, options);
  }

  /**
   * UniProjectCreateV30
   *
   * POST /open_api/v3.0/uni_project/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fcreate%2F
   */
  uniProjectCreateV30(
    request: EndpointRequestMap["UniProjectCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UniProjectCreateV30"]> {
    return this.execute("UniProjectCreateV30", request, options);
  }

  /**
   * UniProjectListGetV30
   *
   * GET /open_api/v3.0/uni_project_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project_list%2Fget%2F
   */
  uniProjectListGetV30(
    request: EndpointRequestMap["UniProjectListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UniProjectListGetV30"]> {
    return this.execute("UniProjectListGetV30", request, options);
  }

  /**
   * UniProjectMonetizationModeUpdateV30
   *
   * POST /open_api/v3.0/uni_project/monetization_mode/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fmonetization_mode%2Fupdate%2F
   */
  uniProjectMonetizationModeUpdateV30(
    request: EndpointRequestMap["UniProjectMonetizationModeUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UniProjectMonetizationModeUpdateV30"]> {
    return this.execute("UniProjectMonetizationModeUpdateV30", request, options);
  }

  /**
   * UniProjectUpdateV30
   *
   * POST /open_api/v3.0/uni_project/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fupdate%2F
   */
  uniProjectUpdateV30(
    request: EndpointRequestMap["UniProjectUpdateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UniProjectUpdateV30"]> {
    return this.execute("UniProjectUpdateV30", request, options);
  }

  /**
   * UploadStatementV2
   *
   * POST /open_api/2/upload/statement/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fupload%2Fstatement%2F
   */
  uploadStatementV2(
    request: EndpointRequestMap["UploadStatementV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UploadStatementV2"]> {
    return this.execute("UploadStatementV2", request, options);
  }

  /**
   * 获取授权User信息
   *
   * GET /open_api/2/user/info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710507039756
   */
  userInfoV2(
    request: EndpointRequestMap["UserInfoV2"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["UserInfoV2"]> {
    return this.execute("UserInfoV2", request, options);
  }

  /**
   * 钱包充值校验
   *
   * GET /open_api/v3.0/wallet/charge/verify/get/
   * @see https://open.oceanengine.com/labels/7/docs/1855620253598148
   */
  walletChargeVerifyGetV30(
    request: EndpointRequestMap["WalletChargeVerifyGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["WalletChargeVerifyGetV30"]> {
    return this.execute("WalletChargeVerifyGetV30", request, options);
  }

  /**
   * 钱包对公充值
   *
   * POST /open_api/v3.0/wallet/prepay_charge/generate_remittance_code/create/
   * @see https://open.oceanengine.com/labels/7/docs/1859993655883840
   */
  walletPrepayChargeGenerateRemittanceCodeCreateV30(
    request: EndpointRequestMap["WalletPrepayChargeGenerateRemittanceCodeCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["WalletPrepayChargeGenerateRemittanceCodeCreateV30"]> {
    return this.execute("WalletPrepayChargeGenerateRemittanceCodeCreateV30", request, options);
  }

  /**
   * 钱包查询汇款码列表
   *
   * GET /open_api/v3.0/wallet/remittance_code/list/get/
   * @see https://open.oceanengine.com/labels/7/docs/1859992775252292
   */
  walletRemittanceCodeListGetV30(
    request: EndpointRequestMap["WalletRemittanceCodeListGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["WalletRemittanceCodeListGetV30"]> {
    return this.execute("WalletRemittanceCodeListGetV30", request, options);
  }

  /**
   * YuntuAudienceInfoCreateV30
   *
   * POST /open_api/v3.0/yuntu/audience_info/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fcreate%2F
   */
  yuntuAudienceInfoCreateV30(
    request: EndpointRequestMap["YuntuAudienceInfoCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuAudienceInfoCreateV30"]> {
    return this.execute("YuntuAudienceInfoCreateV30", request, options);
  }

  /**
   * YuntuAudienceInfoDeleteV30
   *
   * POST /open_api/v3.0/yuntu/audience_info/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fdelete%2F
   */
  yuntuAudienceInfoDeleteV30(
    request: EndpointRequestMap["YuntuAudienceInfoDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuAudienceInfoDeleteV30"]> {
    return this.execute("YuntuAudienceInfoDeleteV30", request, options);
  }

  /**
   * YuntuAudienceInfoGetV30
   *
   * GET /open_api/v3.0/yuntu/audience_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fget%2F
   */
  yuntuAudienceInfoGetV30(
    request: EndpointRequestMap["YuntuAudienceInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuAudienceInfoGetV30"]> {
    return this.execute("YuntuAudienceInfoGetV30", request, options);
  }

  /**
   * YuntuAudienceLabelCreateV30
   *
   * POST /open_api/v3.0/yuntu/audience_label/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fcreate%2F
   */
  yuntuAudienceLabelCreateV30(
    request: EndpointRequestMap["YuntuAudienceLabelCreateV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuAudienceLabelCreateV30"]> {
    return this.execute("YuntuAudienceLabelCreateV30", request, options);
  }

  /**
   * YuntuAudienceLabelDeleteV30
   *
   * POST /open_api/v3.0/yuntu/audience_label/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fdelete%2F
   */
  yuntuAudienceLabelDeleteV30(
    request: EndpointRequestMap["YuntuAudienceLabelDeleteV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuAudienceLabelDeleteV30"]> {
    return this.execute("YuntuAudienceLabelDeleteV30", request, options);
  }

  /**
   * YuntuAudienceLabelGetV30
   *
   * GET /open_api/v3.0/yuntu/audience_label/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fget%2F
   */
  yuntuAudienceLabelGetV30(
    request: EndpointRequestMap["YuntuAudienceLabelGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuAudienceLabelGetV30"]> {
    return this.execute("YuntuAudienceLabelGetV30", request, options);
  }

  /**
   * YuntuBrandInfoGetV30
   *
   * GET /open_api/v3.0/yuntu/brand_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Fbrand_info%2Fget%2F
   */
  yuntuBrandInfoGetV30(
    request: EndpointRequestMap["YuntuBrandInfoGetV30"],
    options: RequestOptions = {},
  ): Promise<EndpointResponseMap["YuntuBrandInfoGetV30"]> {
    return this.execute("YuntuBrandInfoGetV30", request, options);
  }
}
