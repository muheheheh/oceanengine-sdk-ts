// Generated from oceanengine/ad_open_sdk_go v1.1.93. Do not edit manually.

import type * as Models from './models.js';

export type UploadFile = Blob | { data: Blob; filename?: string };

export const endpoints = {
  /**
   * 批量查询账户余额
   *
   * GET /open_api/v3.0/account/fund/get/
   * @see https://open.oceanengine.com/labels/7/docs/1799006604968971
   */
  "AccountFundGetV30": { method: "GET", path: "/open_api/v3.0/account/fund/get/", title: "批量查询账户余额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1799006604968971", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AccountUpdateV30
   *
   * POST /open_api/v3.0/account/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faccount%2Fupdate%2F
   */
  "AccountUpdateV30": { method: "POST", path: "/open_api/v3.0/account/update/", title: "AccountUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faccount%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-获取唯一操作id
   *
   * GET /open_api/v3.0/ad_billing/unique_id/get/
   * @see https://open.oceanengine.com/labels/7/docs/1848384417379332
   */
  "AdBillingUniqueIdGetV30": { method: "GET", path: "/open_api/v3.0/ad_billing/unique_id/get/", title: "资金共享-获取唯一操作id", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848384417379332", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AdConvertSignalV2
   *
   * POST /open_api/2/ad_convert/signal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad_convert%2Fsignal%2F
   */
  "AdConvertSignalV2": { method: "POST", path: "/open_api/2/ad_convert/signal/", title: "AdConvertSignalV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad_convert%2Fsignal%2F", kind: "json", responseKind: "bytes", fileFields: [] },
  /**
   * AdCostProtectStatusGetV2
   *
   * GET /open_api/2/ad/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fcost_protect_status%2Fget%2F
   */
  "AdCostProtectStatusGetV2": { method: "GET", path: "/open_api/2/ad/cost_protect_status/get/", title: "AdCostProtectStatusGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fcost_protect_status%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AdGetV2
   *
   * GET /open_api/2/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fget%2F
   */
  "AdGetV2": { method: "GET", path: "/open_api/2/ad/get/", title: "AdGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AdRejectReasonV2
   *
   * GET /open_api/2/ad/reject_reason/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Freject_reason%2F
   */
  "AdRejectReasonV2": { method: "GET", path: "/open_api/2/ad/reject_reason/", title: "AdRejectReasonV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Freject_reason%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AdShopInfoUpdateV30
   *
   * POST /open_api/v3.0/ad/shop_info/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fad%2Fshop_info%2Fupdate%2F
   */
  "AdShopInfoUpdateV30": { method: "POST", path: "/open_api/v3.0/ad/shop_info/update/", title: "AdShopInfoUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fad%2Fshop_info%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AdUdUpdateV2
   *
   * POST /open_api/2/ad/ud/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fud%2Fupdate%2F
   */
  "AdUdUpdateV2": { method: "POST", path: "/open_api/2/ad/ud/update/", title: "AdUdUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fud%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AdUpdateBidV2
   *
   * POST /open_api/2/ad/update/bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fupdate%2Fbid%2F
   */
  "AdUpdateBidV2": { method: "POST", path: "/open_api/2/ad/update/bid/", title: "AdUpdateBidV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fupdate%2Fbid%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AdUpdateBudgetV2
   *
   * POST /open_api/2/ad/update/budget/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fupdate%2Fbudget%2F
   */
  "AdUpdateBudgetV2": { method: "POST", path: "/open_api/2/ad/update/budget/", title: "AdUpdateBudgetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fad%2Fupdate%2Fbudget%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 引流下单转化信息获取
   *
   * POST /open_api/2/adv_convert/ole/convert/
   * @see https://open.oceanengine.com/labels/7/docs/1774836168252548
   */
  "AdvConvertOleConvertV2": { method: "POST", path: "/open_api/2/adv_convert/ole/convert/", title: "引流下单转化信息获取", docsUrl: "https://open.oceanengine.com/labels/7/docs/1774836168252548", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AdvertiserAttachmentUploadV30
   *
   * POST /open_api/v3.0/advertiser/attachment/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fadvertiser%2Fattachment%2Fupload%2F
   */
  "AdvertiserAttachmentUploadV30": { method: "POST", path: "/open_api/v3.0/advertiser/attachment/upload/", title: "AdvertiserAttachmentUploadV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fadvertiser%2Fattachment%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["image_data"] },
  /**
   * 查询投放账户头像
   *
   * GET /open_api/2/advertiser/avatar/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710512904192
   */
  "AdvertiserAvatarGetV2": { method: "GET", path: "/open_api/2/advertiser/avatar/get/", title: "查询投放账户头像", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710512904192", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新投放账户头像
   *
   * POST /open_api/2/advertiser/avatar/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1696710512435215
   */
  "AdvertiserAvatarSubmitV2": { method: "POST", path: "/open_api/2/advertiser/avatar/submit/", title: "更新投放账户头像", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710512435215", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取投放账户头像ID
   *
   * POST /open_api/2/advertiser/avatar/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1794039016601604
   */
  "AdvertiserAvatarUploadV2": { method: "POST", path: "/open_api/2/advertiser/avatar/upload/", title: "获取投放账户头像ID", docsUrl: "https://open.oceanengine.com/labels/7/docs/1794039016601604", kind: "multipart", responseKind: "json", fileFields: ["image_file"] },
  /**
   * 获取账户日预算
   *
   * GET /open_api/2/advertiser/budget/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710531128335
   */
  "AdvertiserBudgetGetV2": { method: "GET", path: "/open_api/2/advertiser/budget/get/", title: "获取账户日预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710531128335", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取营销产品资质规则配置
   *
   * GET /open_api/v3.0/advertiser/delivery_pkg_config/
   * @see https://open.oceanengine.com/labels/7/docs/1776710970860551
   */
  "AdvertiserDeliveryPkgConfigV30": { method: "GET", path: "/open_api/v3.0/advertiser/delivery_pkg_config/", title: "获取营销产品资质规则配置", docsUrl: "https://open.oceanengine.com/labels/7/docs/1776710970860551", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量删除营销产品资质
   *
   * POST /open_api/v3.0/advertiser/delivery_pkg/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1783952807559307
   */
  "AdvertiserDeliveryPkgDeleteV30": { method: "POST", path: "/open_api/v3.0/advertiser/delivery_pkg/delete/", title: "批量删除营销产品资质", docsUrl: "https://open.oceanengine.com/labels/7/docs/1783952807559307", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取营销产品资质
   *
   * GET /open_api/v3.0/advertiser/delivery_pkg/get/
   * @see https://open.oceanengine.com/labels/7/docs/1776711148266572
   */
  "AdvertiserDeliveryPkgGetV30": { method: "GET", path: "/open_api/v3.0/advertiser/delivery_pkg/get/", title: "获取营销产品资质", docsUrl: "https://open.oceanengine.com/labels/7/docs/1776711148266572", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传/更新营销产品资质
   *
   * POST /open_api/v3.0/advertiser/delivery_pkg/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1776711210685572
   */
  "AdvertiserDeliveryPkgSubmitV30": { method: "POST", path: "/open_api/v3.0/advertiser/delivery_pkg/submit/", title: "上传/更新营销产品资质", docsUrl: "https://open.oceanengine.com/labels/7/docs/1776711210685572", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量删除投放资质
   *
   * POST /open_api/v3.0/advertiser/delivery_qualification/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1783952358997067
   */
  "AdvertiserDeliveryQualificationDeleteV30": { method: "POST", path: "/open_api/v3.0/advertiser/delivery_qualification/delete/", title: "批量删除投放资质", docsUrl: "https://open.oceanengine.com/labels/7/docs/1783952358997067", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取投放资质（新版）
   *
   * GET /open_api/v3.0/advertiser/delivery_qualification/list/
   * @see https://open.oceanengine.com/labels/7/docs/1761500990156815
   */
  "AdvertiserDeliveryQualificationListV30": { method: "GET", path: "/open_api/v3.0/advertiser/delivery_qualification/list/", title: "获取投放资质（新版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761500990156815", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传/更新投放资质（新版）
   *
   * POST /open_api/v3.0/advertiser/delivery_qualification/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1761501324513352
   */
  "AdvertiserDeliveryQualificationSubmitV30": { method: "POST", path: "/open_api/v3.0/advertiser/delivery_qualification/submit/", title: "上传/更新投放资质（新版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761501324513352", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询账户日流水
   *
   * GET /open_api/2/advertiser/fund/daily_stat/
   * @see https://open.oceanengine.com/labels/7/docs/1696710526682112
   */
  "AdvertiserFundDailyStatV2": { method: "GET", path: "/open_api/2/advertiser/fund/daily_stat/", title: "查询账户日流水", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710526682112", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AdvertiserFundDetailGrantV2
   *
   * GET /open_api/2/advertiser/fund/detail_grant/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ffund%2Fdetail_grant%2F
   */
  "AdvertiserFundDetailGrantV2": { method: "GET", path: "/open_api/2/advertiser/fund/detail_grant/", title: "AdvertiserFundDetailGrantV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ffund%2Fdetail_grant%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询账号余额
   *
   * GET /open_api/2/advertiser/fund/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710526192652
   */
  "AdvertiserFundGetV2": { method: "GET", path: "/open_api/2/advertiser/fund/get/", title: "查询账号余额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710526192652", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AdvertiserFundGrantTransactionGetV2
   *
   * GET /open_api/2/advertiser/fund/grant_transaction/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ffund%2Fgrant_transaction%2Fget%2F
   */
  "AdvertiserFundGrantTransactionGetV2": { method: "GET", path: "/open_api/2/advertiser/fund/grant_transaction/get/", title: "AdvertiserFundGrantTransactionGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ffund%2Fgrant_transaction%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询账号流水明细
   *
   * GET /open_api/2/advertiser/fund/transaction/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710527205388
   */
  "AdvertiserFundTransactionGetV2": { method: "GET", path: "/open_api/2/advertiser/fund/transaction/get/", title: "查询账号流水明细", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710527205388", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取投放账户信息
   *
   * GET /open_api/2/advertiser/info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710508983311
   */
  "AdvertiserInfoV2": { method: "GET", path: "/open_api/2/advertiser/info/", title: "获取投放账户信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710508983311", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取客户公开信息
   *
   * GET /open_api/2/advertiser/public_info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710511950860
   */
  "AdvertiserPublicInfoV2": { method: "GET", path: "/open_api/2/advertiser/public_info/", title: "获取客户公开信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710511950860", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传投放资质（旧版）
   *
   * POST /open_api/2/advertiser/qualification/create_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1696710514343951
   */
  "AdvertiserQualificationCreateV2V2": { method: "POST", path: "/open_api/2/advertiser/qualification/create_v2/", title: "上传投放资质（旧版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710514343951", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取主体资质（新版）
   *
   * GET /open_api/v3.0/advertiser/qualification/get/
   * @see https://open.oceanengine.com/labels/7/docs/1743294338713611
   */
  "AdvertiserQualificationGetV30": { method: "GET", path: "/open_api/v3.0/advertiser/qualification/get/", title: "获取主体资质（新版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1743294338713611", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取投放资质（旧版）
   *
   * GET /open_api/2/advertiser/qualification/select_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1696710513397775
   */
  "AdvertiserQualificationSelectV2V2": { method: "GET", path: "/open_api/2/advertiser/qualification/select_v2/", title: "获取投放资质（旧版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710513397775", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传主体资质（新版）
   *
   * POST /open_api/v3.0/advertiser/qualification/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1743294661429259
   */
  "AdvertiserQualificationSubmitV30": { method: "POST", path: "/open_api/v3.0/advertiser/qualification/submit/", title: "上传主体资质（新版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1743294661429259", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AdvertiserTransferableFundGetV2
   *
   * GET /open_api/2/advertiser/transferable_fund/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ftransferable_fund%2Fget%2F
   */
  "AdvertiserTransferableFundGetV2": { method: "GET", path: "/open_api/2/advertiser/transferable_fund/get/", title: "AdvertiserTransferableFundGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fadvertiser%2Ftransferable_fund%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新账户日预算
   *
   * POST /open_api/2/advertiser/update/budget/
   * @see https://open.oceanengine.com/labels/7/docs/1696710531631116
   */
  "AdvertiserUpdateBudgetV2": { method: "POST", path: "/open_api/2/advertiser/update/budget/", title: "更新账户日预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710531631116", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AdvertiserVerifyInfoGetV30
   *
   * GET /open_api/v3.0/advertiser/verify_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fadvertiser%2Fverify_info%2Fget%2F
   */
  "AdvertiserVerifyInfoGetV30": { method: "GET", path: "/open_api/v3.0/advertiser/verify_info/get/", title: "AdvertiserVerifyInfoGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fadvertiser%2Fverify_info%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新广告主所属销售
   *
   * POST /open_api/2/agent/adv/advertiser/update_sale/
   * @see https://open.oceanengine.com/labels/7/docs/1831550732043264
   */
  "AgentAdvAdvertiserUpdateSaleV2": { method: "POST", path: "/open_api/2/agent/adv/advertiser/update_sale/", title: "更新广告主所属销售", docsUrl: "https://open.oceanengine.com/labels/7/docs/1831550732043264", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 代理商竞价投放数据 
   *
   * GET /open_api/2/agent/adv/bidding/list/query/
   * @see https://open.oceanengine.com/labels/7/docs/1815032517161050
   */
  "AgentAdvBiddingListQueryV2": { method: "GET", path: "/open_api/2/agent/adv/bidding/list/query/", title: "代理商竞价投放数据 ", docsUrl: "https://open.oceanengine.com/labels/7/docs/1815032517161050", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商品牌投放数据
   *
   * GET /open_api/2/agent/adv/brand/list/query/
   * @see https://open.oceanengine.com/labels/7/docs/1815032592622740
   */
  "AgentAdvBrandListQueryV2": { method: "GET", path: "/open_api/2/agent/adv/brand/list/query/", title: "代理商品牌投放数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1815032592622740", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商消耗报表数据
   *
   * POST /open_api/2/agent/adv/cost_report/list/query/
   * @see https://open.oceanengine.com/labels/7/docs/1784979080790218
   */
  "AgentAdvCostReportListQueryV2": { method: "POST", path: "/open_api/2/agent/adv/cost_report/list/query/", title: "代理商消耗报表数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1784979080790218", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AgentAdvPerenniallyPunishHistoryQueryV2
   *
   * GET /open_api/2/agent/adv/perennially/punish_history/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Fperennially%2Fpunish_history%2Fquery%2F
   */
  "AgentAdvPerenniallyPunishHistoryQueryV2": { method: "GET", path: "/open_api/2/agent/adv/perennially/punish_history/query/", title: "AgentAdvPerenniallyPunishHistoryQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Fperennially%2Fpunish_history%2Fquery%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AgentAdvPerenniallyPunishV2
   *
   * POST /open_api/2/agent/adv/perennially/punish/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Fperennially%2Fpunish%2F
   */
  "AgentAdvPerenniallyPunishV2": { method: "POST", path: "/open_api/2/agent/adv/perennially/punish/", title: "AgentAdvPerenniallyPunishV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Fperennially%2Fpunish%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询代理商充值记录
   *
   * GET /open_api/2/agent/adv/recharge/recharge_record/
   * @see https://open.oceanengine.com/labels/7/docs/1836524802345028
   */
  "AgentAdvRechargeRechargeRecordV2": { method: "GET", path: "/open_api/2/agent/adv/recharge/recharge_record/", title: "查询代理商充值记录", docsUrl: "https://open.oceanengine.com/labels/7/docs/1836524802345028", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AgentAdvTemporaryPunishV2
   *
   * POST /open_api/2/agent/adv/temporary/punish/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Ftemporary%2Fpunish%2F
   */
  "AgentAdvTemporaryPunishV2": { method: "POST", path: "/open_api/2/agent/adv/temporary/punish/", title: "AgentAdvTemporaryPunishV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadv%2Ftemporary%2Fpunish%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AgentAdvertiserAssignV2
   *
   * POST /open_api/2/agent/advertiser/assign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadvertiser%2Fassign%2F
   */
  "AgentAdvertiserAssignV2": { method: "POST", path: "/open_api/2/agent/advertiser/assign/", title: "AgentAdvertiserAssignV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadvertiser%2Fassign%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 投放账户复制
   *
   * POST /open_api/2/agent/advertiser/copy/
   * @see https://open.oceanengine.com/labels/7/docs/1775097300794371
   */
  "AgentAdvertiserCopyV2": { method: "POST", path: "/open_api/2/agent/advertiser/copy/", title: "投放账户复制", docsUrl: "https://open.oceanengine.com/labels/7/docs/1775097300794371", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 投放账户信息查询
   *
   * GET /open_api/2/agent/advertiser_info/query/
   * @see https://open.oceanengine.com/labels/7/docs/1809915654787136
   */
  "AgentAdvertiserInfoQueryV2": { method: "GET", path: "/open_api/2/agent/advertiser_info/query/", title: "投放账户信息查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1809915654787136", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商管理账户列表
   *
   * GET /open_api/2/agent/advertiser/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710516003852
   */
  "AgentAdvertiserSelectV2": { method: "GET", path: "/open_api/2/agent/advertiser/select/", title: "代理商管理账户列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710516003852", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AgentAdvertiserUnassignV2
   *
   * POST /open_api/2/agent/advertiser/unassign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadvertiser%2Funassign%2F
   */
  "AgentAdvertiserUnassignV2": { method: "POST", path: "/open_api/2/agent/advertiser/unassign/", title: "AgentAdvertiserUnassignV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fadvertiser%2Funassign%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新客户信息
   *
   * POST /open_api/2/agent/advertiser/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710517205007
   */
  "AgentAdvertiserUpdateV2": { method: "POST", path: "/open_api/2/agent/advertiser/update/", title: "更新客户信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710517205007", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 代理商充值校验
   *
   * GET /open_api/2/agent/charge/verify/
   * @see https://open.oceanengine.com/labels/7/docs/1832711147925257
   */
  "AgentChargeVerifyV2": { method: "GET", path: "/open_api/2/agent/charge/verify/", title: "代理商充值校验", docsUrl: "https://open.oceanengine.com/labels/7/docs/1832711147925257", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 二级代理商列表
   *
   * GET /open_api/2/agent/child_agent/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710517693452
   */
  "AgentChildAgentSelectV2": { method: "GET", path: "/open_api/2/agent/child_agent/select/", title: "二级代理商列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710517693452", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AgentCompanyBiddingListQueryV2
   *
   * GET /open_api/2/agent/company/bidding/list/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fcompany%2Fbidding%2Flist%2Fquery%2F
   */
  "AgentCompanyBiddingListQueryV2": { method: "GET", path: "/open_api/2/agent/company/bidding/list/query/", title: "AgentCompanyBiddingListQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fcompany%2Fbidding%2Flist%2Fquery%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AgentCompanyBrandListQueryV2
   *
   * GET /open_api/2/agent/company/brand/list/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fcompany%2Fbrand%2Flist%2Fquery%2F
   */
  "AgentCompanyBrandListQueryV2": { method: "GET", path: "/open_api/2/agent/company/brand/list/query/", title: "AgentCompanyBrandListQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fagent%2Fcompany%2Fbrand%2Flist%2Fquery%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商提交授信充值
   *
   * POST /open_api/2/agent/credit_charge/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1832711098846217
   */
  "AgentCreditChargeSubmitV2": { method: "POST", path: "/open_api/2/agent/credit_charge/submit/", title: "代理商提交授信充值", docsUrl: "https://open.oceanengine.com/labels/7/docs/1832711098846217", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取代理商信息
   *
   * GET /open_api/2/agent/info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710518158351
   */
  "AgentInfoV2": { method: "GET", path: "/open_api/2/agent/info/", title: "获取代理商信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710518158351", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商预付充值生成汇款码
   *
   * POST /open_api/2/agent/prepay_charge/generate_remittance_code/
   * @see https://open.oceanengine.com/labels/7/docs/1834443692643336
   */
  "AgentPrepayChargeGenerateRemittanceCodeV2": { method: "POST", path: "/open_api/2/agent/prepay_charge/generate_remittance_code/", title: "代理商预付充值生成汇款码", docsUrl: "https://open.oceanengine.com/labels/7/docs/1834443692643336", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 代理商违规信息推送-AD-本地推
   *
   * GET /open_api/2/agent/query/risk_promotion_list/
   * @see https://open.oceanengine.com/labels/7/docs/1866222259978252
   */
  "AgentQueryRiskPromotionListV2": { method: "GET", path: "/open_api/2/agent/query/risk_promotion_list/", title: "代理商违规信息推送-AD-本地推", docsUrl: "https://open.oceanengine.com/labels/7/docs/1866222259978252", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询代理商转账记录
   *
   * GET /open_api/2/agent/transfer/transaction_record/
   * @see https://open.oceanengine.com/labels/7/docs/1795124749017235
   */
  "AgentTransferTransactionRecordV2": { method: "GET", path: "/open_api/2/agent/transfer/transaction_record/", title: "查询代理商转账记录", docsUrl: "https://open.oceanengine.com/labels/7/docs/1795124749017235", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AicElementDeleteV30
   *
   * POST /open_api/v3.0/aic/element/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fdelete%2F
   */
  "AicElementDeleteV30": { method: "POST", path: "/open_api/v3.0/aic/element/delete/", title: "AicElementDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AicElementGetV30
   *
   * GET /open_api/v3.0/aic/element/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fget%2F
   */
  "AicElementGetV30": { method: "GET", path: "/open_api/v3.0/aic/element/get/", title: "AicElementGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AicElementUpdateV30
   *
   * POST /open_api/v3.0/aic/element/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fupdate%2F
   */
  "AicElementUpdateV30": { method: "POST", path: "/open_api/v3.0/aic/element/update/", title: "AicElementUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AicElementUploadV30
   *
   * POST /open_api/v3.0/aic/element/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fupload%2F
   */
  "AicElementUploadV30": { method: "POST", path: "/open_api/v3.0/aic/element/upload/", title: "AicElementUploadV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Felement%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["file"] },
  /**
   * AicImageMixcutCreateV30
   *
   * POST /open_api/v3.0/aic/image_mixcut/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fimage_mixcut%2Fcreate%2F
   */
  "AicImageMixcutCreateV30": { method: "POST", path: "/open_api/v3.0/aic/image_mixcut/create/", title: "AicImageMixcutCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fimage_mixcut%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AicMaterialGetV30
   *
   * GET /open_api/v3.0/aic/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmaterial%2Fget%2F
   */
  "AicMaterialGetV30": { method: "GET", path: "/open_api/v3.0/aic/material/get/", title: "AicMaterialGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmaterial%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AicMaterialPushV30
   *
   * POST /open_api/v3.0/aic/material/push/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmaterial%2Fpush%2F
   */
  "AicMaterialPushV30": { method: "POST", path: "/open_api/v3.0/aic/material/push/", title: "AicMaterialPushV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmaterial%2Fpush%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AicMixcutTaskResultGetV30
   *
   * GET /open_api/v3.0/aic/mixcut_task/result/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmixcut_task%2Fresult%2Fget%2F
   */
  "AicMixcutTaskResultGetV30": { method: "GET", path: "/open_api/v3.0/aic/mixcut_task/result/get/", title: "AicMixcutTaskResultGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmixcut_task%2Fresult%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * AicMixcutTaskSaveV30
   *
   * POST /open_api/v3.0/aic/mixcut_task/save/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmixcut_task%2Fsave%2F
   */
  "AicMixcutTaskSaveV30": { method: "POST", path: "/open_api/v3.0/aic/mixcut_task/save/", title: "AicMixcutTaskSaveV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fmixcut_task%2Fsave%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AicVideoMixcutCreateV30
   *
   * POST /open_api/v3.0/aic/video_mixcut/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fvideo_mixcut%2Fcreate%2F
   */
  "AicVideoMixcutCreateV30": { method: "POST", path: "/open_api/v3.0/aic/video_mixcut/create/", title: "AicVideoMixcutCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Faic%2Fvideo_mixcut%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AnalyticsAttributionV30
   *
   * POST /open_api/v3.0/analytics/attribution/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fanalytics%2Fattribution%2F
   */
  "AnalyticsAttributionV30": { method: "POST", path: "/open_api/v3.0/analytics/attribution/", title: "AnalyticsAttributionV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fanalytics%2Fattribution%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建组件
   *
   * POST /open_api/2/assets/creative_component/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710672391183
   */
  "AssetsCreativeComponentCreateV2": { method: "POST", path: "/open_api/2/assets/creative_component/create/", title: "创建组件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710672391183", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询组件列表
   *
   * GET /open_api/2/assets/creative_component/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710673645580
   */
  "AssetsCreativeComponentGetV2": { method: "GET", path: "/open_api/2/assets/creative_component/get/", title: "查询组件列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710673645580", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新组件
   *
   * POST /open_api/2/assets/creative_component/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710673083407
   */
  "AssetsCreativeComponentUpdateV2": { method: "POST", path: "/open_api/2/assets/creative_component/update/", title: "更新组件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710673083407", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AsyncTaskCreateV2
   *
   * POST /open_api/2/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fcreate%2F
   */
  "AsyncTaskCreateV2": { method: "POST", path: "/open_api/2/async_task/create/", title: "AsyncTaskCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * AsyncTaskDownloadV2
   *
   * GET /open_api/2/async_task/download/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fdownload%2F
   */
  "AsyncTaskDownloadV2": { method: "GET", path: "/open_api/2/async_task/download/", title: "AsyncTaskDownloadV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fdownload%2F", kind: "query", responseKind: "bytes", fileFields: [] },
  /**
   * AsyncTaskGetV2
   *
   * GET /open_api/2/async_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fget%2F
   */
  "AsyncTaskGetV2": { method: "GET", path: "/open_api/2/async_task/get/", title: "AsyncTaskGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fasync_task%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 定向包查询关联项目信息
   *
   * GET /open_api/v3.0/audience_package_bindinfo/get/
   * @see https://open.oceanengine.com/labels/7/docs/1815599949508922
   */
  "AudiencePackageBindinfoGetV30": { method: "GET", path: "/open_api/v3.0/audience_package_bindinfo/get/", title: "定向包查询关联项目信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1815599949508922", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建定向包
   *
   * POST /open_api/2/audience_package/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710735901711
   */
  "AudiencePackageCreateV2": { method: "POST", path: "/open_api/2/audience_package/create/", title: "创建定向包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710735901711", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除定向包
   *
   * POST /open_api/2/audience_package/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710732991488
   */
  "AudiencePackageDeleteV2": { method: "POST", path: "/open_api/2/audience_package/delete/", title: "删除定向包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710732991488", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取定向包
   *
   * GET /open_api/v3.0/audience_package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1815573577937932
   */
  "AudiencePackageGetV30": { method: "GET", path: "/open_api/v3.0/audience_package/get/", title: "获取定向包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1815573577937932", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新定向包
   *
   * POST /open_api/2/audience_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710732349455
   */
  "AudiencePackageUpdateV2": { method: "POST", path: "/open_api/2/audience_package/update/", title: "更新定向包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710732349455", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandActionCategoryV30
   *
   * GET /open_api/v3.0/brand/action_category/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Faction_category%2F
   */
  "BrandActionCategoryV30": { method: "GET", path: "/open_api/v3.0/brand/action_category/", title: "BrandActionCategoryV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Faction_category%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandAdCancelDeleteV30
   *
   * POST /open_api/v3.0/brand/ad/cancel_delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fcancel_delete%2F
   */
  "BrandAdCancelDeleteV30": { method: "POST", path: "/open_api/v3.0/brand/ad/cancel_delete/", title: "BrandAdCancelDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fcancel_delete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandAdDeleteV30
   *
   * POST /open_api/v3.0/brand/ad/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fdelete%2F
   */
  "BrandAdDeleteV30": { method: "POST", path: "/open_api/v3.0/brand/ad/delete/", title: "BrandAdDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandAdGetV30
   *
   * GET /open_api/v3.0/brand/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fget%2F
   */
  "BrandAdGetV30": { method: "GET", path: "/open_api/v3.0/brand/ad/get/", title: "BrandAdGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandAdUpdateBaseInfoV30
   *
   * POST /open_api/v3.0/brand/ad/update_base_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fupdate_base_info%2F
   */
  "BrandAdUpdateBaseInfoV30": { method: "POST", path: "/open_api/v3.0/brand/ad/update_base_info/", title: "BrandAdUpdateBaseInfoV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fupdate_base_info%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandAdUpdateDeliveryInfoV30
   *
   * POST /open_api/v3.0/brand/ad/update_delivery_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fupdate_delivery_info%2F
   */
  "BrandAdUpdateDeliveryInfoV30": { method: "POST", path: "/open_api/v3.0/brand/ad/update_delivery_info/", title: "BrandAdUpdateDeliveryInfoV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fad%2Fupdate_delivery_info%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandAnchorListV30
   *
   * GET /open_api/v3.0/brand/anchor/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fanchor%2Flist%2F
   */
  "BrandAnchorListV30": { method: "GET", path: "/open_api/v3.0/brand/anchor/list/", title: "BrandAnchorListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fanchor%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandAwemeListV30
   *
   * GET /open_api/v3.0/brand/aweme_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Faweme_list%2F
   */
  "BrandAwemeListV30": { method: "GET", path: "/open_api/v3.0/brand/aweme_list/", title: "BrandAwemeListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Faweme_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignAddV30
   *
   * POST /open_api/v3.0/brand/campaign/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fadd%2F
   */
  "BrandCampaignAddV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/add/", title: "BrandCampaignAddV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fadd%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignDeleteV30
   *
   * POST /open_api/v3.0/brand/campaign/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fdelete%2F
   */
  "BrandCampaignDeleteV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/delete/", title: "BrandCampaignDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignEditV30
   *
   * POST /open_api/v3.0/brand/campaign/edit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fedit%2F
   */
  "BrandCampaignEditV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/edit/", title: "BrandCampaignEditV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fedit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignGetV30
   *
   * GET /open_api/v3.0/brand/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fget%2F
   */
  "BrandCampaignGetV30": { method: "GET", path: "/open_api/v3.0/brand/campaign/get/", title: "BrandCampaignGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignListV30
   *
   * GET /open_api/v3.0/brand/campaign/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Flist%2F
   */
  "BrandCampaignListV30": { method: "GET", path: "/open_api/v3.0/brand/campaign/list/", title: "BrandCampaignListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignModifyV30
   *
   * POST /open_api/v3.0/brand/campaign/modify/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fmodify%2F
   */
  "BrandCampaignModifyV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/modify/", title: "BrandCampaignModifyV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fmodify%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignOperateV30
   *
   * POST /open_api/v3.0/brand/campaign/operate/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Foperate%2F
   */
  "BrandCampaignOperateV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/operate/", title: "BrandCampaignOperateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Foperate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignRemoveV30
   *
   * POST /open_api/v3.0/brand/campaign/remove/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fremove%2F
   */
  "BrandCampaignRemoveV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/remove/", title: "BrandCampaignRemoveV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fremove%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignRevokeModifyV30
   *
   * POST /open_api/v3.0/brand/campaign/revoke_modify/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Frevoke_modify%2F
   */
  "BrandCampaignRevokeModifyV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/revoke_modify/", title: "BrandCampaignRevokeModifyV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Frevoke_modify%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignSubmitV30
   *
   * POST /open_api/v3.0/brand/campaign/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fsubmit%2F
   */
  "BrandCampaignSubmitV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/submit/", title: "BrandCampaignSubmitV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fsubmit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCampaignUpdateV30
   *
   * POST /open_api/v3.0/brand/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fupdate%2F
   */
  "BrandCampaignUpdateV30": { method: "POST", path: "/open_api/v3.0/brand/campaign/update/", title: "BrandCampaignUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcampaign%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandContractGetV30
   *
   * GET /open_api/v3.0/brand/contract/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcontract%2Fget%2F
   */
  "BrandContractGetV30": { method: "GET", path: "/open_api/v3.0/brand/contract/get/", title: "BrandContractGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcontract%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandCreativeCreateV30
   *
   * POST /open_api/v3.0/brand/creative/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fcreate%2F
   */
  "BrandCreativeCreateV30": { method: "POST", path: "/open_api/v3.0/brand/creative/create/", title: "BrandCreativeCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCreativeDeleteV30
   *
   * POST /open_api/v3.0/brand/creative/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fdelete%2F
   */
  "BrandCreativeDeleteV30": { method: "POST", path: "/open_api/v3.0/brand/creative/delete/", title: "BrandCreativeDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCreativeGetV30
   *
   * GET /open_api/v3.0/brand/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fget%2F
   */
  "BrandCreativeGetV30": { method: "GET", path: "/open_api/v3.0/brand/creative/get/", title: "BrandCreativeGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandCreativeUpdateV30
   *
   * POST /open_api/v3.0/brand/creative/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fupdate%2F
   */
  "BrandCreativeUpdateV30": { method: "POST", path: "/open_api/v3.0/brand/creative/update/", title: "BrandCreativeUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcreative%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandCustomAudienceListV30
   *
   * GET /open_api/v3.0/brand/custom_audience/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcustom_audience%2Flist%2F
   */
  "BrandCustomAudienceListV30": { method: "GET", path: "/open_api/v3.0/brand/custom_audience/list/", title: "BrandCustomAudienceListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fcustom_audience%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandFileVideoUploadV30
   *
   * POST /open_api/v3.0/brand/file/video/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ffile%2Fvideo%2Fupload%2F
   */
  "BrandFileVideoUploadV30": { method: "POST", path: "/open_api/v3.0/brand/file/video/upload/", title: "BrandFileVideoUploadV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ffile%2Fvideo%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["video_file"] },
  /**
   * BrandMaterialCreateV30
   *
   * POST /open_api/v3.0/brand/material/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Fcreate%2F
   */
  "BrandMaterialCreateV30": { method: "POST", path: "/open_api/v3.0/brand/material/create/", title: "BrandMaterialCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandMaterialListV30
   *
   * GET /open_api/v3.0/brand/material/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Flist%2F
   */
  "BrandMaterialListV30": { method: "GET", path: "/open_api/v3.0/brand/material/list/", title: "BrandMaterialListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandMaterialUpdateV30
   *
   * POST /open_api/v3.0/brand/material/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Fupdate%2F
   */
  "BrandMaterialUpdateV30": { method: "POST", path: "/open_api/v3.0/brand/material/update/", title: "BrandMaterialUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fmaterial%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandOperationLogQueryV30
   *
   * GET /open_api/v3.0/brand/operation_log/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Foperation_log%2Fquery%2F
   */
  "BrandOperationLogQueryV30": { method: "GET", path: "/open_api/v3.0/brand/operation_log/query/", title: "BrandOperationLogQueryV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Foperation_log%2Fquery%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandOrderCancelDeleteV30
   *
   * POST /open_api/v3.0/brand/order/cancel_delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fcancel_delete%2F
   */
  "BrandOrderCancelDeleteV30": { method: "POST", path: "/open_api/v3.0/brand/order/cancel_delete/", title: "BrandOrderCancelDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fcancel_delete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandOrderCreateV30
   *
   * POST /open_api/v3.0/brand/order/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fcreate%2F
   */
  "BrandOrderCreateV30": { method: "POST", path: "/open_api/v3.0/brand/order/create/", title: "BrandOrderCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandOrderDeleteV30
   *
   * POST /open_api/v3.0/brand/order/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fdelete%2F
   */
  "BrandOrderDeleteV30": { method: "POST", path: "/open_api/v3.0/brand/order/delete/", title: "BrandOrderDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandOrderListV30
   *
   * GET /open_api/v3.0/brand/order/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Flist%2F
   */
  "BrandOrderListV30": { method: "GET", path: "/open_api/v3.0/brand/order/list/", title: "BrandOrderListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandOrderUpdateV30
   *
   * POST /open_api/v3.0/brand/order/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fupdate%2F
   */
  "BrandOrderUpdateV30": { method: "POST", path: "/open_api/v3.0/brand/order/update/", title: "BrandOrderUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Forder%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * BrandPolicyListV30
   *
   * GET /open_api/v3.0/brand/policy/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fpolicy%2Flist%2F
   */
  "BrandPolicyListV30": { method: "GET", path: "/open_api/v3.0/brand/policy/list/", title: "BrandPolicyListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fpolicy%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandQueryStockV30
   *
   * GET /open_api/v3.0/brand/query_stock/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fquery_stock%2F
   */
  "BrandQueryStockV30": { method: "GET", path: "/open_api/v3.0/brand/query_stock/", title: "BrandQueryStockV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fquery_stock%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandQueryYuntu5aBrandCategoryV30
   *
   * GET /open_api/v3.0/brand/query_yuntu_5a_brand_category/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fquery_yuntu_5a_brand_category%2F
   */
  "BrandQueryYuntu5aBrandCategoryV30": { method: "GET", path: "/open_api/v3.0/brand/query_yuntu_5a_brand_category/", title: "BrandQueryYuntu5aBrandCategoryV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fquery_yuntu_5a_brand_category%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandRegionGetV30
   *
   * GET /open_api/v3.0/brand/region/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fregion%2Fget%2F
   */
  "BrandRegionGetV30": { method: "GET", path: "/open_api/v3.0/brand/region/get/", title: "BrandRegionGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fregion%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandToolCreativePreviewV30
   *
   * GET /open_api/v3.0/brand/tool/creative_preview/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fcreative_preview%2F
   */
  "BrandToolCreativePreviewV30": { method: "GET", path: "/open_api/v3.0/brand/tool/creative_preview/", title: "BrandToolCreativePreviewV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fcreative_preview%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandToolMaterialPreviewV30
   *
   * GET /open_api/v3.0/brand/tool/material_preview/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fmaterial_preview%2F
   */
  "BrandToolMaterialPreviewV30": { method: "GET", path: "/open_api/v3.0/brand/tool/material_preview/", title: "BrandToolMaterialPreviewV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fmaterial_preview%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandToolQueryPublishPriceV30
   *
   * GET /open_api/v3.0/brand/tool/query_publish_price/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fquery_publish_price%2F
   */
  "BrandToolQueryPublishPriceV30": { method: "GET", path: "/open_api/v3.0/brand/tool/query_publish_price/", title: "BrandToolQueryPublishPriceV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fquery_publish_price%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandToolQueryStockBalanceV30
   *
   * GET /open_api/v3.0/brand/tool/query_stock_balance/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fquery_stock_balance%2F
   */
  "BrandToolQueryStockBalanceV30": { method: "GET", path: "/open_api/v3.0/brand/tool/query_stock_balance/", title: "BrandToolQueryStockBalanceV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Ftool%2Fquery_stock_balance%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BrandUploadImageV30
   *
   * POST /open_api/v3.0/brand/upload_image/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fupload_image%2F
   */
  "BrandUploadImageV30": { method: "POST", path: "/open_api/v3.0/brand/upload_image/", title: "BrandUploadImageV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fbrand%2Fupload_image%2F", kind: "multipart", responseKind: "json", fileFields: ["image_file"] },
  /**
   * 创建预算组
   *
   * POST /open_api/v3.0/budget_group/create/
   * @see https://open.oceanengine.com/labels/7/docs/1780159359081540
   */
  "BudgetGroupCreateV30": { method: "POST", path: "/open_api/v3.0/budget_group/create/", title: "创建预算组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780159359081540", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量删除预算组
   *
   * POST /open_api/v3.0/budget_group/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1780643886635008
   */
  "BudgetGroupDeleteV30": { method: "POST", path: "/open_api/v3.0/budget_group/delete/", title: "批量删除预算组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780643886635008", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取预算组列表
   *
   * GET /open_api/v3.0/budget_group/list/
   * @see https://open.oceanengine.com/labels/7/docs/1780644067911818
   */
  "BudgetGroupListV30": { method: "GET", path: "/open_api/v3.0/budget_group/list/", title: "获取预算组列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780644067911818", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新预算组
   *
   * POST /open_api/v3.0/budget_group/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780643450710028
   */
  "BudgetGroupUpdateV30": { method: "POST", path: "/open_api/v3.0/budget_group/update/", title: "更新预算组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780643450710028", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取主体下的账户列表
   *
   * GET /open_api/v3.0/business_platform/company_account/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741479196149775
   */
  "BusinessPlatformCompanyAccountGetV30": { method: "GET", path: "/open_api/v3.0/business_platform/company_account/get/", title: "获取主体下的账户列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741479196149775", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取旧版巨量引擎工作台下主体信息
   *
   * GET /open_api/v3.0/business_platform/company_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741478619724813
   */
  "BusinessPlatformCompanyInfoGetV30": { method: "GET", path: "/open_api/v3.0/business_platform/company_info/get/", title: "获取旧版巨量引擎工作台下主体信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741478619724813", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * BusinessPlatformPartnerOrganizationListV2
   *
   * GET /open_api/2/business_platform/partner_organization/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fbusiness_platform%2Fpartner_organization%2Flist%2F
   */
  "BusinessPlatformPartnerOrganizationListV2": { method: "GET", path: "/open_api/2/business_platform/partner_organization/list/", title: "BusinessPlatformPartnerOrganizationListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fbusiness_platform%2Fpartner_organization%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CampaignCreateV2
   *
   * POST /open_api/2/campaign/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fcreate%2F
   */
  "CampaignCreateV2": { method: "POST", path: "/open_api/2/campaign/create/", title: "CampaignCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CampaignGetV2
   *
   * GET /open_api/2/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fget%2F
   */
  "CampaignGetV2": { method: "GET", path: "/open_api/2/campaign/get/", title: "CampaignGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CampaignUpdateStatusV2
   *
   * POST /open_api/2/campaign/update/status/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fupdate%2Fstatus%2F
   */
  "CampaignUpdateStatusV2": { method: "POST", path: "/open_api/2/campaign/update/status/", title: "CampaignUpdateStatusV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fupdate%2Fstatus%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CampaignUpdateV2
   *
   * POST /open_api/2/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fupdate%2F
   */
  "CampaignUpdateV2": { method: "POST", path: "/open_api/2/campaign/update/", title: "CampaignUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcampaign%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取同主体下客户图文素材
   *
   * GET /open_api/2/carousel/ad/get/
   * @see https://open.oceanengine.com/labels/7/docs/1773560989475840
   */
  "CarouselAdGetV2": { method: "GET", path: "/open_api/2/carousel/ad/get/", title: "获取同主体下客户图文素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773560989475840", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传图文
   *
   * POST /open_api/2/carousel/create/
   * @see https://open.oceanengine.com/labels/7/docs/1773552433235140
   */
  "CarouselCreateV2": { method: "POST", path: "/open_api/2/carousel/create/", title: "上传图文", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773552433235140", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量删除图文
   *
   * POST /open_api/2/carousel/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1773561744826380
   */
  "CarouselDeleteV2": { method: "POST", path: "/open_api/2/carousel/delete/", title: "批量删除图文", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773561744826380", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取图文素材
   *
   * GET /open_api/2/carousel/list/
   * @see https://open.oceanengine.com/labels/7/docs/1773554026740736
   */
  "CarouselListV2": { method: "GET", path: "/open_api/2/carousel/list/", title: "获取图文素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773554026740736", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新图文信息
   *
   * POST /open_api/2/carousel/update/
   * @see https://open.oceanengine.com/labels/7/docs/1773554529716228
   */
  "CarouselUpdateV2": { method: "POST", path: "/open_api/2/carousel/update/", title: "更新图文信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773554529716228", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取关联云图的投放账户信息
   *
   * GET /open_api/v3.0/cdp/brand/get/
   * @see https://open.oceanengine.com/labels/7/docs/1768100113310735
   */
  "CdpBrandGetV30": { method: "GET", path: "/open_api/v3.0/cdp/brand/get/", title: "获取关联云图的投放账户信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1768100113310735", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 工作台转账-获取最大可转余额
   *
   * GET /open_api/v3.0/cg_transfer/can_transfer_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816052561374300
   */
  "CgTransferCanTransferBalanceGetV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/can_transfer_balance/get/", title: "工作台转账-获取最大可转余额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816052561374300", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 工作台转账-获取可转列表
   *
   * GET /open_api/v3.0/cg_transfer/can_transfer_target/list/
   * @see https://open.oceanengine.com/labels/7/docs/1816052658391124
   */
  "CgTransferCanTransferTargetListV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/can_transfer_target/list/", title: "工作台转账-获取可转列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816052658391124", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 转账-发起转账（代理）
   *
   * POST /open_api/v3.0/cg_transfer/create_transfer/
   * @see https://open.oceanengine.com/labels/7/docs/1789755060558916
   */
  "CgTransferCreateTransferV30": { method: "POST", path: "/open_api/v3.0/cg_transfer/create_transfer/", title: "转账-发起转账（代理）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1789755060558916", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 转账-获取最大可转余额（代理）
   *
   * GET /open_api/v3.0/cg_transfer/query_can_transfer_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1789754975045699
   */
  "CgTransferQueryCanTransferBalanceV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/query_can_transfer_balance/", title: "转账-获取最大可转余额（代理）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1789754975045699", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 转账-查询账户转账余额（代理）
   *
   * GET /open_api/v3.0/cg_transfer/query_transfer_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1789754859486282
   */
  "CgTransferQueryTransferBalanceV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/query_transfer_balance/", title: "转账-查询账户转账余额（代理）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1789754859486282", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 转账-查询转账单信息（代理）
   *
   * GET /open_api/v3.0/cg_transfer/query_transfer_detail/
   * @see https://open.oceanengine.com/labels/7/docs/1789755120706634
   */
  "CgTransferQueryTransferDetailV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/query_transfer_detail/", title: "转账-查询转账单信息（代理）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1789755120706634", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 工作台转账-查询账户转账余额
   *
   * GET /open_api/v3.0/cg_transfer/transfer_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816052431206464
   */
  "CgTransferTransferBalanceGetV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/transfer_balance/get/", title: "工作台转账-查询账户转账余额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816052431206464", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 工作台转账-发起转账
   *
   * POST /open_api/v3.0/cg_transfer/transfer/create/
   * @see https://open.oceanengine.com/labels/7/docs/1816052723776516
   */
  "CgTransferTransferCreateV30": { method: "POST", path: "/open_api/v3.0/cg_transfer/transfer/create/", title: "工作台转账-发起转账", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816052723776516", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 工作台转账-查询转账单信息
   *
   * GET /open_api/v3.0/cg_transfer/transfer_detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816052335753539
   */
  "CgTransferTransferDetailGetV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/transfer_detail/get/", title: "工作台转账-查询转账单信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816052335753539", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-最大可转余额查询
   *
   * GET /open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1799667820221452
   */
  "CgTransferWalletTransferCanTransferBalanceV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/", title: "资金共享-最大可转余额查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1799667820221452", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-发起转账
   *
   * POST /open_api/v3.0/cg_transfer/wallet/transfer/create/
   * @see https://open.oceanengine.com/labels/7/docs/1799669807408128
   */
  "CgTransferWalletTransferCreateV30": { method: "POST", path: "/open_api/v3.0/cg_transfer/wallet/transfer/create/", title: "资金共享-发起转账", docsUrl: "https://open.oceanengine.com/labels/7/docs/1799669807408128", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询转账单信息
   *
   * GET /open_api/v3.0/cg_transfer/wallet/transfer/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1799669496440960
   */
  "CgTransferWalletTransferDetailV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/wallet/transfer/detail/", title: "资金共享-查询转账单信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1799669496440960", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询转账列表
   *
   * GET /open_api/v3.0/cg_transfer/wallet/transfer/list/
   * @see https://open.oceanengine.com/labels/7/docs/1799669722480836
   */
  "CgTransferWalletTransferListV30": { method: "GET", path: "/open_api/v3.0/cg_transfer/wallet/transfer/list/", title: "资金共享-查询转账列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1799669722480836", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ChargeListV30
   *
   * GET /open_api/v3.0/charge/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcharge%2Flist%2F
   */
  "ChargeListV30": { method: "GET", path: "/open_api/v3.0/charge/list/", title: "ChargeListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcharge%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询充值结果
   *
   * GET /open_api/v3.0/charge/result/
   * @see https://open.oceanengine.com/labels/7/docs/1831879601111308
   */
  "ChargeResultV30": { method: "GET", path: "/open_api/v3.0/charge/result/", title: "查询充值结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1831879601111308", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 投放账户充值校验
   *
   * GET /open_api/v3.0/charge/verify/get/
   * @see https://open.oceanengine.com/labels/7/docs/1855639332504666
   */
  "ChargeVerifyGetV30": { method: "GET", path: "/open_api/v3.0/charge/verify/get/", title: "投放账户充值校验", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855639332504666", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ClueCaCreateV2
   *
   * POST /open_api/2/clue/ca/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Fcreate%2F
   */
  "ClueCaCreateV2": { method: "POST", path: "/open_api/2/clue/ca/create/", title: "ClueCaCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ClueCaInterfaceCreateV2
   *
   * POST /open_api/2/clue/ca/interface/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Finterface%2Fcreate%2F
   */
  "ClueCaInterfaceCreateV2": { method: "POST", path: "/open_api/2/clue/ca/interface/create/", title: "ClueCaInterfaceCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Finterface%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ClueCaInterfaceUpdateV2
   *
   * POST /open_api/2/clue/ca/interface/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Finterface%2Fupdate%2F
   */
  "ClueCaInterfaceUpdateV2": { method: "POST", path: "/open_api/2/clue/ca/interface/update/", title: "ClueCaInterfaceUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Finterface%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ClueCaUpdateV2
   *
   * POST /open_api/2/clue/ca/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Fupdate%2F
   */
  "ClueCaUpdateV2": { method: "POST", path: "/open_api/2/clue/ca/update/", title: "ClueCaUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fca%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 核销券码
   *
   * POST /open_api/2/clue/coupon/code/consume/
   * @see https://open.oceanengine.com/labels/7/docs/1696710641144847
   */
  "ClueCouponCodeConsumeV2": { method: "POST", path: "/open_api/2/clue/coupon/code/consume/", title: "核销券码", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710641144847", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询券码记录
   *
   * GET /open_api/2/clue/coupon/code/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710640575488
   */
  "ClueCouponCodeGetV2": { method: "GET", path: "/open_api/2/clue/coupon/code/get/", title: "查询券码记录", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710640575488", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建卡券
   *
   * POST /open_api/2/clue/coupon/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710637538316
   */
  "ClueCouponCreateV2": { method: "POST", path: "/open_api/2/clue/coupon/create/", title: "创建卡券", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710637538316", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取卡券详情
   *
   * GET /open_api/2/clue/coupon/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1696710638772239
   */
  "ClueCouponDetailV2": { method: "GET", path: "/open_api/2/clue/coupon/detail/", title: "获取卡券详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710638772239", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 添加核销员
   *
   * POST /open_api/2/clue/coupon/employee/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710642258944
   */
  "ClueCouponEmployeeCreateV2": { method: "POST", path: "/open_api/2/clue/coupon/employee/create/", title: "添加核销员", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710642258944", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除核销员
   *
   * POST /open_api/2/clue/coupon/employee/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710642825228
   */
  "ClueCouponEmployeeDeleteV2": { method: "POST", path: "/open_api/2/clue/coupon/employee/delete/", title: "删除核销员", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710642825228", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询核销员
   *
   * GET /open_api/2/clue/coupon/employee/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710641718284
   */
  "ClueCouponEmployeeGetV2": { method: "GET", path: "/open_api/2/clue/coupon/employee/get/", title: "查询核销员", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710641718284", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取卡券列表
   *
   * GET /open_api/2/clue/coupon/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710639364108
   */
  "ClueCouponGetV2": { method: "GET", path: "/open_api/2/clue/coupon/get/", title: "获取卡券列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710639364108", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 编辑卡券
   *
   * POST /open_api/2/clue/coupon/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710639943692
   */
  "ClueCouponUpdateV2": { method: "POST", path: "/open_api/2/clue/coupon/update/", title: "编辑卡券", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710639943692", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建表单
   *
   * POST /open_api/2/clue/form/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710635254784
   */
  "ClueFormCreateV2": { method: "POST", path: "/open_api/2/clue/form/create/", title: "创建表单", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710635254784", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除表单
   *
   * POST /open_api/2/clue/form/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710636402700
   */
  "ClueFormDeleteV2": { method: "POST", path: "/open_api/2/clue/form/delete/", title: "删除表单", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710636402700", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取表单详情
   *
   * GET /open_api/2/clue/form/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1696710634103823
   */
  "ClueFormDetailV2": { method: "GET", path: "/open_api/2/clue/form/detail/", title: "获取表单详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710634103823", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取表单列表
   *
   * GET /open_api/2/clue/form/list/
   * @see https://open.oceanengine.com/labels/7/docs/1696710634663948
   */
  "ClueFormListV2": { method: "GET", path: "/open_api/2/clue/form/list/", title: "获取表单列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710634663948", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新表单
   *
   * POST /open_api/2/clue/form/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710635816975
   */
  "ClueFormUpdateV2": { method: "POST", path: "/open_api/2/clue/form/update/", title: "更新表单", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710635816975", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建智能电话
   *
   * POST /open_api/2/clue/smartphone/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710643975180
   */
  "ClueSmartphoneCreateV2": { method: "POST", path: "/open_api/2/clue/smartphone/create/", title: "创建智能电话", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710643975180", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除智能电话
   *
   * POST /open_api/2/clue/smartphone/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710645145615
   */
  "ClueSmartphoneDeleteV2": { method: "POST", path: "/open_api/2/clue/smartphone/delete/", title: "删除智能电话", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710645145615", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取智能电话列表
   *
   * GET /open_api/2/clue/smartphone/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710644556812
   */
  "ClueSmartphoneGetV2": { method: "GET", path: "/open_api/2/clue/smartphone/get/", title: "获取智能电话列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710644556812", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询智能电话拨打记录
   *
   * GET /open_api/2/clue/smartphone/record/
   * @see https://open.oceanengine.com/labels/7/docs/1696710645723148
   */
  "ClueSmartphoneRecordV2": { method: "GET", path: "/open_api/2/clue/smartphone/record/", title: "查询智能电话拨打记录", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710645723148", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ClueWechatDataGetV2
   *
   * GET /open_api/2/clue/wechat_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fwechat_data%2Fget%2F
   */
  "ClueWechatDataGetV2": { method: "GET", path: "/open_api/2/clue/wechat_data/get/", title: "ClueWechatDataGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fclue%2Fwechat_data%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取微信号码包详情
   *
   * GET /open_api/2/clue/wechat_instance/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1738854514506759
   */
  "ClueWechatInstanceDetailV2": { method: "GET", path: "/open_api/2/clue/wechat_instance/detail/", title: "获取微信号码包详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738854514506759", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取微信号码包列表
   *
   * GET /open_api/2/clue/wechat_instance/list/
   * @see https://open.oceanengine.com/labels/7/docs/1738854779841614
   */
  "ClueWechatInstanceListV2": { method: "GET", path: "/open_api/2/clue/wechat_instance/list/", title: "获取微信号码包列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738854779841614", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新微信号码包
   *
   * POST /open_api/2/clue/wechat_instance/update/
   * @see https://open.oceanengine.com/labels/7/docs/1738854823266311
   */
  "ClueWechatInstanceUpdateV2": { method: "POST", path: "/open_api/2/clue/wechat_instance/update/", title: "更新微信号码包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738854823266311", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取微信库微信号列表
   *
   * GET /open_api/2/clue/wechat_pool/list/
   * @see https://open.oceanengine.com/labels/7/docs/1738854207455240
   */
  "ClueWechatPoolListV2": { method: "GET", path: "/open_api/2/clue/wechat_pool/list/", title: "获取微信库微信号列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738854207455240", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CreateProjectInvoiceV2
   *
   * POST /open_api/2/create/project_invoice/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreate%2Fproject_invoice%2F
   */
  "CreateProjectInvoiceV2": { method: "POST", path: "/open_api/2/create/project_invoice/", title: "CreateProjectInvoiceV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreate%2Fproject_invoice%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 开票-新建开票申请单（代理商版）
   *
   * POST /open_api/2/create/statement_invoice/
   * @see https://open.oceanengine.com/labels/7/docs/1806785904427155
   */
  "CreateStatementInvoiceV2": { method: "POST", path: "/open_api/2/create/statement_invoice/", title: "开票-新建开票申请单（代理商版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1806785904427155", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CreateStatementV2
   *
   * POST /open_api/2/create/statement/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreate%2Fstatement%2F
   */
  "CreateStatementV2": { method: "POST", path: "/open_api/2/create/statement/", title: "CreateStatementV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreate%2Fstatement%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CreativeCustomCreativeCreateV2
   *
   * POST /open_api/2/creative/custom_creative/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fcustom_creative%2Fcreate%2F
   */
  "CreativeCustomCreativeCreateV2": { method: "POST", path: "/open_api/2/creative/custom_creative/create/", title: "CreativeCustomCreativeCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fcustom_creative%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CreativeCustomCreativeUpdateV2
   *
   * POST /open_api/2/creative/custom_creative/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fcustom_creative%2Fupdate%2F
   */
  "CreativeCustomCreativeUpdateV2": { method: "POST", path: "/open_api/2/creative/custom_creative/update/", title: "CreativeCustomCreativeUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fcustom_creative%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CreativeDetailGetV30
   *
   * GET /open_api/v3.0/creative/detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcreative%2Fdetail%2Fget%2F
   */
  "CreativeDetailGetV30": { method: "GET", path: "/open_api/v3.0/creative/detail/get/", title: "CreativeDetailGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcreative%2Fdetail%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CreativeGetV2
   *
   * GET /open_api/2/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fget%2F
   */
  "CreativeGetV2": { method: "GET", path: "/open_api/2/creative/get/", title: "CreativeGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CreativeProceduralCreativeCreateV2
   *
   * POST /open_api/2/creative/procedural_creative/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fprocedural_creative%2Fcreate%2F
   */
  "CreativeProceduralCreativeCreateV2": { method: "POST", path: "/open_api/2/creative/procedural_creative/create/", title: "CreativeProceduralCreativeCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fprocedural_creative%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CreativeProceduralCreativeUpdateV2
   *
   * POST /open_api/2/creative/procedural_creative/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fprocedural_creative%2Fupdate%2F
   */
  "CreativeProceduralCreativeUpdateV2": { method: "POST", path: "/open_api/2/creative/procedural_creative/update/", title: "CreativeProceduralCreativeUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fprocedural_creative%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CreativeRejectReasonV2
   *
   * GET /open_api/2/creative/reject_reason/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Freject_reason%2F
   */
  "CreativeRejectReasonV2": { method: "GET", path: "/open_api/2/creative/reject_reason/", title: "CreativeRejectReasonV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Freject_reason%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CreativeStrategyListV2
   *
   * GET /open_api/2/creative/strategy/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fstrategy%2Flist%2F
   */
  "CreativeStrategyListV2": { method: "GET", path: "/open_api/2/creative/strategy/list/", title: "CreativeStrategyListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcreative%2Fstrategy%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CustomerCenterAccountListV30
   *
   * GET /open_api/v3.0/customer_center/account/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcustomer_center%2Faccount%2Flist%2F
   */
  "CustomerCenterAccountListV30": { method: "GET", path: "/open_api/v3.0/customer_center/account/list/", title: "CustomerCenterAccountListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcustomer_center%2Faccount%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CustomerCenterAccountOfflineListV30
   *
   * GET /open_api/v3.0/customer_center/account/offline_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcustomer_center%2Faccount%2Foffline_list%2F
   */
  "CustomerCenterAccountOfflineListV30": { method: "GET", path: "/open_api/v3.0/customer_center/account/offline_list/", title: "CustomerCenterAccountOfflineListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fcustomer_center%2Faccount%2Foffline_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CustomerCenterAdvertiserCopyV2
   *
   * POST /open_api/2/customer_center/advertiser/copy/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Fadvertiser%2Fcopy%2F
   */
  "CustomerCenterAdvertiserCopyV2": { method: "POST", path: "/open_api/2/customer_center/advertiser/copy/", title: "CustomerCenterAdvertiserCopyV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Fadvertiser%2Fcopy%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取旧版巨量引擎工作台下账户列表
   *
   * GET /open_api/2/customer_center/advertiser/list/
   * @see https://open.oceanengine.com/labels/7/docs/1696710520884224
   */
  "CustomerCenterAdvertiserListV2": { method: "GET", path: "/open_api/2/customer_center/advertiser/list/", title: "获取旧版巨量引擎工作台下账户列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710520884224", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CustomerCenterAdvertiserTransferableListV2
   *
   * GET /open_api/2/customer_center/advertiser/transferable/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Fadvertiser%2Ftransferable%2Flist%2F
   */
  "CustomerCenterAdvertiserTransferableListV2": { method: "GET", path: "/open_api/2/customer_center/advertiser/transferable/list/", title: "CustomerCenterAdvertiserTransferableListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Fadvertiser%2Ftransferable%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * CustomerCenterFundTransferSeqCommitV2
   *
   * POST /open_api/2/customer_center/fund/transfer_seq/commit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Ffund%2Ftransfer_seq%2Fcommit%2F
   */
  "CustomerCenterFundTransferSeqCommitV2": { method: "POST", path: "/open_api/2/customer_center/fund/transfer_seq/commit/", title: "CustomerCenterFundTransferSeqCommitV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Ffund%2Ftransfer_seq%2Fcommit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * CustomerCenterFundTransferSeqCreateV2
   *
   * POST /open_api/2/customer_center/fund/transfer_seq/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Ffund%2Ftransfer_seq%2Fcreate%2F
   */
  "CustomerCenterFundTransferSeqCreateV2": { method: "POST", path: "/open_api/2/customer_center/fund/transfer_seq/create/", title: "CustomerCenterFundTransferSeqCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fcustomer_center%2Ffund%2Ftransfer_seq%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * DcdChargeSubmitV30
   *
   * POST /open_api/v3.0/dcd/charge/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdcd%2Fcharge%2Fsubmit%2F
   */
  "DcdChargeSubmitV30": { method: "POST", path: "/open_api/v3.0/dcd/charge/submit/", title: "DcdChargeSubmitV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdcd%2Fcharge%2Fsubmit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取家装联盟卡券列表
   *
   * GET /open_api/v3.0/decoration/coupon/get/
   * @see https://open.oceanengine.com/labels/7/docs/1756248521099331
   */
  "DecorationCouponGetV30": { method: "GET", path: "/open_api/v3.0/decoration/coupon/get/", title: "获取家装联盟卡券列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1756248521099331", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * Adv创建前测任务
   *
   * POST /open_api/2/diagnosis_task/adv/create/
   * @see https://open.oceanengine.com/labels/7/docs/1816971004339210
   */
  "DiagnosisTaskAdvCreateV2": { method: "POST", path: "/open_api/2/diagnosis_task/adv/create/", title: "Adv创建前测任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816971004339210", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * Adv轮询任务结果
   *
   * GET /open_api/2/diagnosis_task/adv/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816971088404715
   */
  "DiagnosisTaskAdvGetV2": { method: "GET", path: "/open_api/2/diagnosis_task/adv/get/", title: "Adv轮询任务结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816971088404715", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * Adv获取任务列表
   *
   * GET /open_api/2/diagnosis_task/adv/list/
   * @see https://open.oceanengine.com/labels/7/docs/1816971069170691
   */
  "DiagnosisTaskAdvListV2": { method: "GET", path: "/open_api/2/diagnosis_task/adv/list/", title: "Adv获取任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816971069170691", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商创建前测任务
   *
   * POST /open_api/2/diagnosis_task/agent/create/
   * @see https://open.oceanengine.com/labels/7/docs/1816970745502732
   */
  "DiagnosisTaskAgentCreateV2": { method: "POST", path: "/open_api/2/diagnosis_task/agent/create/", title: "代理商创建前测任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816970745502732", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 代理商轮询任务结果
   *
   * GET /open_api/2/diagnosis_task/agent/get/
   * @see https://open.oceanengine.com/labels/7/docs/1816970934411355
   */
  "DiagnosisTaskAgentGetV2": { method: "GET", path: "/open_api/2/diagnosis_task/agent/get/", title: "代理商轮询任务结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816970934411355", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 代理商获取任务列表
   *
   * GET /open_api/2/diagnosis_task/agent/list/
   * @see https://open.oceanengine.com/labels/7/docs/1816970967050522
   */
  "DiagnosisTaskAgentListV2": { method: "GET", path: "/open_api/2/diagnosis_task/agent/list/", title: "代理商获取任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1816970967050522", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取投放账户关联云图账户信息
   *
   * GET /open_api/2/dmp/brand/get/
   * @see https://open.oceanengine.com/labels/7/docs/1729365568399363
   */
  "DmpBrandGetV2": { method: "GET", path: "/open_api/2/dmp/brand/get/", title: "获取投放账户关联云图账户信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1729365568399363", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 推送dmp人群包到云图账户
   *
   * POST /open_api/2/dmp/custom_audience/copy/
   * @see https://open.oceanengine.com/labels/7/docs/1729365642747908
   */
  "DmpCustomAudienceCopyV2": { method: "POST", path: "/open_api/2/dmp/custom_audience/copy/", title: "推送dmp人群包到云图账户", docsUrl: "https://open.oceanengine.com/labels/7/docs/1729365642747908", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除人群包
   *
   * POST /open_api/2/dmp/custom_audience/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710572836879
   */
  "DmpCustomAudienceDeleteV2": { method: "POST", path: "/open_api/2/dmp/custom_audience/delete/", title: "删除人群包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710572836879", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 发布人群包
   *
   * POST /open_api/2/dmp/custom_audience/publish/
   * @see https://open.oceanengine.com/labels/7/docs/1696710571768844
   */
  "DmpCustomAudiencePublishV2": { method: "POST", path: "/open_api/2/dmp/custom_audience/publish/", title: "发布人群包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710571768844", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 推送人群包
   *
   * POST /open_api/2/dmp/custom_audience/push_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1696710572311552
   */
  "DmpCustomAudiencePushV2V2": { method: "POST", path: "/open_api/2/dmp/custom_audience/push_v2/", title: "推送人群包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710572311552", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 人群包详细信息
   *
   * GET /open_api/2/dmp/custom_audience/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710571259916
   */
  "DmpCustomAudienceReadV2": { method: "GET", path: "/open_api/2/dmp/custom_audience/read/", title: "人群包详细信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710571259916", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 人群包列表
   *
   * GET /open_api/2/dmp/custom_audience/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710570721295
   */
  "DmpCustomAudienceSelectV2": { method: "GET", path: "/open_api/2/dmp/custom_audience/select/", title: "人群包列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710570721295", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 数据源创建
   *
   * POST /open_api/2/dmp/data_source/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710569089024
   */
  "DmpDataSourceCreateV2": { method: "POST", path: "/open_api/2/dmp/data_source/create/", title: "数据源创建", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710569089024", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 数据源文件上传
   *
   * POST /open_api/2/dmp/data_source/file/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1696710568556544
   */
  "DmpDataSourceFileUploadV2": { method: "POST", path: "/open_api/2/dmp/data_source/file/upload/", title: "数据源文件上传", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710568556544", kind: "multipart", responseKind: "json", fileFields: ["file"] },
  /**
   * 数据源详细信息
   *
   * GET /open_api/2/dmp/data_source/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710570207247
   */
  "DmpDataSourceReadV2": { method: "GET", path: "/open_api/2/dmp/data_source/read/", title: "数据源详细信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710570207247", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 数据源更新
   *
   * POST /open_api/2/dmp/data_source/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710569591823
   */
  "DmpDataSourceUpdateV2": { method: "POST", path: "/open_api/2/dmp/data_source/update/", title: "数据源更新", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710569591823", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取可投放视频列表
   *
   * GET /open_api/v3.0/douplus/optional_items/list/
   * @see https://open.oceanengine.com/labels/7/docs/1809885773454336
   */
  "DouplusOptionalItemsListV30": { method: "GET", path: "/open_api/v3.0/douplus/optional_items/list/", title: "获取可投放视频列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1809885773454336", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取视频可投放转化目标
   *
   * GET /open_api/v3.0/douplus/optional_targets/list/
   * @see https://open.oceanengine.com/labels/7/docs/1809880238014554
   */
  "DouplusOptionalTargetsListV30": { method: "GET", path: "/open_api/v3.0/douplus/optional_targets/list/", title: "获取视频可投放转化目标", docsUrl: "https://open.oceanengine.com/labels/7/docs/1809880238014554", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 终止订单接口
   *
   * POST /open_api/v3.0/douplus/order/close/
   * @see https://open.oceanengine.com/labels/7/docs/1794677923694601
   */
  "DouplusOrderCloseV30": { method: "POST", path: "/open_api/v3.0/douplus/order/close/", title: "终止订单接口", docsUrl: "https://open.oceanengine.com/labels/7/docs/1794677923694601", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建订单接口
   *
   * POST /open_api/v3.0/douplus/order/create/
   * @see https://open.oceanengine.com/labels/7/docs/1794677902211227
   */
  "DouplusOrderCreateV30": { method: "POST", path: "/open_api/v3.0/douplus/order/create/", title: "创建订单接口", docsUrl: "https://open.oceanengine.com/labels/7/docs/1794677902211227", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询订单列表
   *
   * GET /open_api/v3.0/douplus/order/list/
   * @see https://open.oceanengine.com/labels/7/docs/1771736421276680
   */
  "DouplusOrderListV30": { method: "GET", path: "/open_api/v3.0/douplus/order/list/", title: "查询订单列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771736421276680", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 续费DOU+订单接口
   *
   * POST /open_api/v3.0/douplus/order/renew/
   * @see https://open.oceanengine.com/labels/7/docs/1809885394723065
   */
  "DouplusOrderRenewV30": { method: "POST", path: "/open_api/v3.0/douplus/order/renew/", title: "续费DOU+订单接口", docsUrl: "https://open.oceanengine.com/labels/7/docs/1809885394723065", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取订单数据报表
   *
   * GET /open_api/v3.0/douplus/order/report/
   * @see https://open.oceanengine.com/labels/7/docs/1771739377034318
   */
  "DouplusOrderReportV30": { method: "GET", path: "/open_api/v3.0/douplus/order/report/", title: "获取订单数据报表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771739377034318", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DouplusRtaGetInfoV30
   *
   * GET /open_api/v3.0/douplus/rta/get_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdouplus%2Frta%2Fget_info%2F
   */
  "DouplusRtaGetInfoV30": { method: "GET", path: "/open_api/v3.0/douplus/rta/get_info/", title: "DouplusRtaGetInfoV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdouplus%2Frta%2Fget_info%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DouplusRtaSetScopeV30
   *
   * POST /open_api/v3.0/douplus/rta/set_scope/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdouplus%2Frta%2Fset_scope%2F
   */
  "DouplusRtaSetScopeV30": { method: "POST", path: "/open_api/v3.0/douplus/rta/set_scope/", title: "DouplusRtaSetScopeV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdouplus%2Frta%2Fset_scope%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * DownloadStatementEsignFileV2
   *
   * GET /open_api/2/download/statement/esign_file/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdownload%2Fstatement%2Fesign_file%2F
   */
  "DownloadStatementEsignFileV2": { method: "GET", path: "/open_api/2/download/statement/esign_file/", title: "DownloadStatementEsignFileV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdownload%2Fstatement%2Fesign_file%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DownloadStatementV2
   *
   * GET /open_api/2/download/statement/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdownload%2Fstatement%2F
   */
  "DownloadStatementV2": { method: "GET", path: "/open_api/2/download/statement/", title: "DownloadStatementV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdownload%2Fstatement%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传短剧剧目
   *
   * POST /open_api/v3.0/dpa/album/create/
   * @see https://open.oceanengine.com/labels/7/docs/1830808097554259
   */
  "DpaAlbumCreateV30": { method: "POST", path: "/open_api/v3.0/dpa/album/create/", title: "上传短剧剧目", docsUrl: "https://open.oceanengine.com/labels/7/docs/1830808097554259", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询短剧可投状态
   *
   * GET /open_api/v3.0/dpa/album_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1830811308177048
   */
  "DpaAlbumStatusGetV30": { method: "GET", path: "/open_api/v3.0/dpa/album_status/get/", title: "查询短剧可投状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1830811308177048", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DpaAssetV2DetailReadV2
   *
   * POST /open_api/2/dpa/asset_v2/detail/read/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdpa%2Fasset_v2%2Fdetail%2Fread%2F
   */
  "DpaAssetV2DetailReadV2": { method: "POST", path: "/open_api/2/dpa/asset_v2/detail/read/", title: "DpaAssetV2DetailReadV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdpa%2Fasset_v2%2Fdetail%2Fread%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取商品投放条件列表（线索版）
   *
   * POST /open_api/2/dpa/asset_v2/list/
   * @see https://open.oceanengine.com/labels/7/docs/1788119750912003
   */
  "DpaAssetV2ListV2": { method: "POST", path: "/open_api/2/dpa/asset_v2/list/", title: "获取商品投放条件列表（线索版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1788119750912003", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取投放条件详情（通用版）
   *
   * GET /open_api/2/dpa/assets/detail/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710579664911
   */
  "DpaAssetsDetailReadV2": { method: "GET", path: "/open_api/2/dpa/assets/detail/read/", title: "获取投放条件详情（通用版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710579664911", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户可投品牌列表
   *
   * GET /open_api/v3.0/dpa/brand/adv_auth/fuzzy/get/
   * @see https://open.oceanengine.com/labels/7/docs/1866516136873355
   */
  "DpaBrandAdvAuthFuzzyGetV30": { method: "GET", path: "/open_api/v3.0/dpa/brand/adv_auth/fuzzy/get/", title: "获取账户可投品牌列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1866516136873355", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户可用品牌行业信息
   *
   * GET /open_api/v3.0/dpa/brand/adv_auth/industry/get/
   * @see https://open.oceanengine.com/labels/7/docs/1866517384079625
   */
  "DpaBrandAdvAuthIndustryGetV30": { method: "GET", path: "/open_api/v3.0/dpa/brand/adv_auth/industry/get/", title: "获取账户可用品牌行业信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1866517384079625", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DpaBrandFuzzyGetV30
   *
   * GET /open_api/v3.0/dpa/brand/fuzzy/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Fbrand%2Ffuzzy%2Fget%2F
   */
  "DpaBrandFuzzyGetV30": { method: "GET", path: "/open_api/v3.0/dpa/brand/fuzzy/get/", title: "DpaBrandFuzzyGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Fbrand%2Ffuzzy%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取DPA分类
   *
   * GET /open_api/2/dpa/category/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710580168716
   */
  "DpaCategoryGetV2": { method: "GET", path: "/open_api/2/dpa/category/get/", title: "获取DPA分类", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710580168716", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DpaCheckIndexEntryProgressV2
   *
   * POST /open_api/2/dpa/check_index_entry_progress/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdpa%2Fcheck_index_entry_progress%2F
   */
  "DpaCheckIndexEntryProgressV2": { method: "POST", path: "/open_api/2/dpa/check_index_entry_progress/", title: "DpaCheckIndexEntryProgressV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fdpa%2Fcheck_index_entry_progress%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除升级版商品
   *
   * POST /open_api/2/dpa/clue_product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1817606743728155
   */
  "DpaClueProductDeleteV2": { method: "POST", path: "/open_api/2/dpa/clue_product/delete/", title: "删除升级版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1817606743728155", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版商品详情
   *
   * GET /open_api/2/dpa/clue_product/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1779436000953415
   */
  "DpaClueProductDetailV2": { method: "GET", path: "/open_api/2/dpa/clue_product/detail/", title: "获取升级版商品详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1779436000953415", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版商品列表
   *
   * GET /open_api/2/dpa/clue_product/list/
   * @see https://open.oceanengine.com/labels/7/docs/1779430442685440
   */
  "DpaClueProductListV2": { method: "GET", path: "/open_api/2/dpa/clue_product/list/", title: "获取升级版商品列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1779430442685440", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建/编辑升级版商品
   *
   * POST /open_api/2/dpa/clue_product/save/
   * @see https://open.oceanengine.com/labels/7/docs/1802816766094363
   */
  "DpaClueProductSaveV2": { method: "POST", path: "/open_api/2/dpa/clue_product/save/", title: "创建/编辑升级版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1802816766094363", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取商品列表
   *
   * GET /open_api/2/dpa/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710578078732
   */
  "DpaDetailGetV2": { method: "GET", path: "/open_api/2/dpa/detail/get/", title: "获取商品列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710578078732", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取DPA词包
   *
   * GET /open_api/2/dpa/dict/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710580712463
   */
  "DpaDictGetV2": { method: "GET", path: "/open_api/2/dpa/dict/get/", title: "获取DPA词包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710580712463", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取商品库DPA分类
   *
   * GET /open_api/v3.0/dpa/ebp/category/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846200236566720
   */
  "DpaEbpCategoryGetV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/category/get/", title: "获取商品库DPA分类", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200236566720", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 删除升级版商品
   *
   * POST /open_api/v3.0/dpa/ebp/clue_product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1846200682152971
   */
  "DpaEbpClueProductDeleteV30": { method: "POST", path: "/open_api/v3.0/dpa/ebp/clue_product/delete/", title: "删除升级版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200682152971", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版商品详情
   *
   * GET /open_api/v3.0/dpa/ebp/clue_product/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846200329551114
   */
  "DpaEbpClueProductGetV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/clue_product/get/", title: "获取升级版商品详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200329551114", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版商品列表
   *
   * GET /open_api/v3.0/dpa/ebp/clue_product/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846200582278283
   */
  "DpaEbpClueProductListV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/clue_product/list/", title: "获取升级版商品列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200582278283", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 升级版组织-创建/编辑升级版商品
   *
   * POST /open_api/v3.0/dpa/ebp/clue_product/save/
   * @see https://open.oceanengine.com/labels/7/docs/1846200828633995
   */
  "DpaEbpClueProductSaveV30": { method: "POST", path: "/open_api/v3.0/dpa/ebp/clue_product/save/", title: "升级版组织-创建/编辑升级版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200828633995", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取商品库DPA词包
   *
   * GET /open_api/v3.0/dpa/ebp/dict/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846199586366875
   */
  "DpaEbpDictGetV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/dict/get/", title: "获取商品库DPA词包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846199586366875", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取商品库列表
   *
   * GET /open_api/v3.0/dpa/ebp/library/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846200555058186
   */
  "DpaEbpLibraryListV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/library/list/", title: "获取商品库列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200555058186", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DpaEbpMetaGetV30
   *
   * GET /open_api/v3.0/dpa/ebp/meta/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Febp%2Fmeta%2Fget%2F
   */
  "DpaEbpMetaGetV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/meta/get/", title: "DpaEbpMetaGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Febp%2Fmeta%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询短剧商品原片授权申请状态
   *
   * GET /open_api/v3.0/dpa/ebp/playlet/auth/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846199438930378
   */
  "DpaEbpPlayletAuthGetV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/playlet/auth/get/", title: "查询短剧商品原片授权申请状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846199438930378", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 升级版组织-新建通用版商品
   *
   * POST /open_api/v3.0/dpa/ebp/product/create/
   * @see https://open.oceanengine.com/labels/7/docs/1846200859217482
   */
  "DpaEbpProductCreateV30": { method: "POST", path: "/open_api/v3.0/dpa/ebp/product/create/", title: "升级版组织-新建通用版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200859217482", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除通用版商品
   *
   * POST /open_api/v3.0/dpa/ebp/product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1846200772027529
   */
  "DpaEbpProductDeleteV30": { method: "POST", path: "/open_api/v3.0/dpa/ebp/product/delete/", title: "删除通用版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200772027529", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取通用版商品详情
   *
   * GET /open_api/v3.0/dpa/ebp/product/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1846200441152906
   */
  "DpaEbpProductDetailGetV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/product/detail/get/", title: "获取通用版商品详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200441152906", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取通用版商品列表
   *
   * GET /open_api/v3.0/dpa/ebp/product/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846200485909513
   */
  "DpaEbpProductListV30": { method: "GET", path: "/open_api/v3.0/dpa/ebp/product/list/", title: "获取通用版商品列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200485909513", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量修改DPA商品状态
   *
   * POST /open_api/v3.0/dpa/ebp/product_status/batch_update/
   * @see https://open.oceanengine.com/labels/7/docs/1846200705851659
   */
  "DpaEbpProductStatusBatchUpdateV30": { method: "POST", path: "/open_api/v3.0/dpa/ebp/product_status/batch_update/", title: "批量修改DPA商品状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200705851659", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 升级版组织-编辑通用版商品
   *
   * POST /open_api/v3.0/dpa/ebp/product/update/
   * @see https://open.oceanengine.com/labels/7/docs/1846200800780617
   */
  "DpaEbpProductUpdateV30": { method: "POST", path: "/open_api/v3.0/dpa/ebp/product/update/", title: "升级版组织-编辑通用版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846200800780617", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取商品库元信息
   *
   * GET /open_api/2/dpa/meta/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710577566735
   */
  "DpaMetaGetV2": { method: "GET", path: "/open_api/2/dpa/meta/get/", title: "获取商品库元信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710577566735", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * DpaOfflineProductBatchDeleteV30
   *
   * POST /open_api/v3.0/dpa/offline_product_batch/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Foffline_product_batch%2Fdelete%2F
   */
  "DpaOfflineProductBatchDeleteV30": { method: "POST", path: "/open_api/v3.0/dpa/offline_product_batch/delete/", title: "DpaOfflineProductBatchDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fdpa%2Foffline_product_batch%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询短剧商品原片授权申请状态
   *
   * GET /open_api/2/dpa/playlet/auth/get/
   * @see https://open.oceanengine.com/labels/7/docs/1805903150040128
   */
  "DpaPlayletAuthGetV2": { method: "GET", path: "/open_api/2/dpa/playlet/auth/get/", title: "查询短剧商品原片授权申请状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1805903150040128", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取商品库信息
   *
   * GET /open_api/2/dpa/product/availables/
   * @see https://open.oceanengine.com/labels/7/docs/1696710577036288
   */
  "DpaProductAvailablesV2": { method: "GET", path: "/open_api/2/dpa/product/availables/", title: "获取商品库信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710577036288", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 【新版】创建通用版商品（无商品id）
   *
   * POST /open_api/2/dpa/product/create/
   * @see https://open.oceanengine.com/labels/7/docs/1814331946951769
   */
  "DpaProductCreateV2": { method: "POST", path: "/open_api/2/dpa/product/create/", title: "【新版】创建通用版商品（无商品id）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1814331946951769", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除通用版商品
   *
   * POST /open_api/2/dpa/product/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1726629070419968
   */
  "DpaProductDeleteV2": { method: "POST", path: "/open_api/2/dpa/product/delete/", title: "删除通用版商品", docsUrl: "https://open.oceanengine.com/labels/7/docs/1726629070419968", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取商品详情
   *
   * GET /open_api/2/dpa/product/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710578614272
   */
  "DpaProductDetailGetV2": { method: "GET", path: "/open_api/2/dpa/product/detail/get/", title: "获取商品详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710578614272", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量修改DPA商品状态
   *
   * POST /open_api/2/dpa/product_status/batch_update/
   * @see https://open.oceanengine.com/labels/7/docs/1726637930114048
   */
  "DpaProductStatusBatchUpdateV2": { method: "POST", path: "/open_api/2/dpa/product_status/batch_update/", title: "批量修改DPA商品状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1726637930114048", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 【新版】创建通用版商品（已有商品id）/修改通用版商品 
   *
   * POST /open_api/2/dpa/product/update/
   * @see https://open.oceanengine.com/labels/7/docs/1814241996290218
   */
  "DpaProductUpdateV2": { method: "POST", path: "/open_api/2/dpa/product/update/", title: "【新版】创建通用版商品（已有商品id）/修改通用版商品\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1814241996290218", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取DPA私有模板
   *
   * GET /open_api/2/dpa/template/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710581781519
   */
  "DpaTemplateGetV2": { method: "GET", path: "/open_api/2/dpa/template/get/", title: "获取DPA私有模板", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710581781519", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取 DPA 商品库视频模板
   *
   * GET /open_api/2/dpa/video/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710582303744
   */
  "DpaVideoGetV2": { method: "GET", path: "/open_api/2/dpa/video/get/", title: "获取 DPA 商品库视频模板", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710582303744", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版巨量引擎工作台下账户列表
   *
   * GET /open_api/2/ebp/advertiser/list/
   * @see https://open.oceanengine.com/labels/7/docs/1829550825614739
   */
  "EbpAdvertiserListV2": { method: "GET", path: "/open_api/2/ebp/advertiser/list/", title: "获取升级版巨量引擎工作台下账户列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1829550825614739", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建获取升级版巨量引擎工作台账户任务
   *
   * POST /open_api/2/ebp/advertiser/task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1829552494525707
   */
  "EbpAdvertiserTaskCreateV2": { method: "POST", path: "/open_api/2/ebp/advertiser/task/create/", title: "创建获取升级版巨量引擎工作台账户任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1829552494525707", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 下载获取升级版巨量引擎工作台账户任务结果
   *
   * GET /open_api/2/ebp/advertiser/task/download/
   * @see https://open.oceanengine.com/labels/7/docs/1829552986209882
   */
  "EbpAdvertiserTaskDownloadV2": { method: "GET", path: "/open_api/2/ebp/advertiser/task/download/", title: "下载获取升级版巨量引擎工作台账户任务结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1829552986209882", kind: "query", responseKind: "bytes", fileFields: [] },
  /**
   * EbpAdvertiserTaskListV2
   *
   * GET /open_api/2/ebp/advertiser/task/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Febp%2Fadvertiser%2Ftask%2Flist%2F
   */
  "EbpAdvertiserTaskListV2": { method: "GET", path: "/open_api/2/ebp/advertiser/task/list/", title: "EbpAdvertiserTaskListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Febp%2Fadvertiser%2Ftask%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取工作台组织关系（升级版）
   *
   * GET /open_api/2/ebp/level/get/
   * @see https://open.oceanengine.com/labels/7/docs/1829551362400384
   */
  "EbpLevelGetV2": { method: "GET", path: "/open_api/2/ebp/level/get/", title: "获取工作台组织关系（升级版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1829551362400384", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * EBP用户角色接口权限查询
   *
   * GET /open_api/2/ebp/role_permission/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872666215168064
   */
  "EbpRolePermissionGetV2": { method: "GET", path: "/open_api/2/ebp/role_permission/get/", title: "EBP用户角色接口权限查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872666215168064", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取异常应用资产列表
   *
   * GET /open_api/v3.0/event_manager/abnormal_assets/get/
   * @see https://open.oceanengine.com/labels/7/docs/1823745189417120
   */
  "EventManagerAbnormalAssetsGetV30": { method: "GET", path: "/open_api/v3.0/event_manager/abnormal_assets/get/", title: "获取异常应用资产列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1823745189417120", kind: "query", responseKind: "json", fileFields: [] },
  /**
   *  创建事件资产
   *
   * POST /open_api/2/event_manager/assets/create/
   * @see https://open.oceanengine.com/labels/7/docs/1850398228888576
   */
  "EventManagerAssetsCreateV2": { method: "POST", path: "/open_api/2/event_manager/assets/create/", title: " 创建事件资产", docsUrl: "https://open.oceanengine.com/labels/7/docs/1850398228888576", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthAddPublicKeyV2
   *
   * POST /open_api/2/event_manager/auth/add_public_key/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fadd_public_key%2F
   */
  "EventManagerAuthAddPublicKeyV2": { method: "POST", path: "/open_api/2/event_manager/auth/add_public_key/", title: "EventManagerAuthAddPublicKeyV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fadd_public_key%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthDelPublicKeyV2
   *
   * POST /open_api/2/event_manager/auth/del_public_key/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fdel_public_key%2F
   */
  "EventManagerAuthDelPublicKeyV2": { method: "POST", path: "/open_api/2/event_manager/auth/del_public_key/", title: "EventManagerAuthDelPublicKeyV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fdel_public_key%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthDisableV2
   *
   * POST /open_api/2/event_manager/auth/disable/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fdisable%2F
   */
  "EventManagerAuthDisableV2": { method: "POST", path: "/open_api/2/event_manager/auth/disable/", title: "EventManagerAuthDisableV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fdisable%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthEnableV2
   *
   * POST /open_api/2/event_manager/auth/enable/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fenable%2F
   */
  "EventManagerAuthEnableV2": { method: "POST", path: "/open_api/2/event_manager/auth/enable/", title: "EventManagerAuthEnableV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fenable%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthGetAllPublicKeysV2
   *
   * GET /open_api/2/event_manager/auth/get_all_public_keys/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_all_public_keys%2F
   */
  "EventManagerAuthGetAllPublicKeysV2": { method: "GET", path: "/open_api/2/event_manager/auth/get_all_public_keys/", title: "EventManagerAuthGetAllPublicKeysV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_all_public_keys%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthGetAuthStatusV2
   *
   * GET /open_api/2/event_manager/auth/get_auth_status/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_auth_status%2F
   */
  "EventManagerAuthGetAuthStatusV2": { method: "GET", path: "/open_api/2/event_manager/auth/get_auth_status/", title: "EventManagerAuthGetAuthStatusV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_auth_status%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * EventManagerAuthGetPublicKeyV2
   *
   * GET /open_api/2/event_manager/auth/get_public_key/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_public_key%2F
   */
  "EventManagerAuthGetPublicKeyV2": { method: "GET", path: "/open_api/2/event_manager/auth/get_public_key/", title: "EventManagerAuthGetPublicKeyV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fevent_manager%2Fauth%2Fget_public_key%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可创建事件列表
   *
   * GET /open_api/2/event_manager/available_events/get/
   * @see https://open.oceanengine.com/labels/7/docs/1709793059412996
   */
  "EventManagerAvailableEventsGetV2": { method: "GET", path: "/open_api/2/event_manager/available_events/get/", title: "获取可创建事件列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1709793059412996", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 标准项目下获取可用深度优化方式
   *
   * GET /open_api/v3.0/event_manager/dbt/get/
   * @see https://open.oceanengine.com/labels/7/docs/1865818869111811
   */
  "EventManagerDbtGetV30": { method: "GET", path: "/open_api/v3.0/event_manager/dbt/get/", title: "标准项目下获取可用深度优化方式", docsUrl: "https://open.oceanengine.com/labels/7/docs/1865818869111811", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可用深度优化方式（营销投放升级版）
   *
   * GET /open_api/v3.0/event_manager/deep_bid_type/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754875889727563
   */
  "EventManagerDeepBidTypeGetV30": { method: "GET", path: "/open_api/v3.0/event_manager/deep_bid_type/get/", title: "获取可用深度优化方式（营销投放升级版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754875889727563", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取资产下已创建事件列表
   *
   * GET /open_api/2/event_manager/event_configs/get/
   * @see https://open.oceanengine.com/labels/7/docs/1709793086075972
   */
  "EventManagerEventConfigsGetV2": { method: "GET", path: "/open_api/2/event_manager/event_configs/get/", title: "获取资产下已创建事件列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1709793086075972", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资产下创建事件
   *
   * POST /open_api/2/event_manager/events/create/
   * @see https://open.oceanengine.com/labels/7/docs/1709792900524035
   */
  "EventManagerEventsCreateV2": { method: "POST", path: "/open_api/2/event_manager/events/create/", title: "资产下创建事件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1709792900524035", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取可用优化目标（巨量营销升级版）
   *
   * GET /open_api/v3.0/event_manager/optimized_goal/get_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1740944984250381
   */
  "EventManagerOptimizedGoalGetV2V30": { method: "GET", path: "/open_api/v3.0/event_manager/optimized_goal/get_v2/", title: "获取可用优化目标（巨量营销升级版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740944984250381", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 标准项目下获取可用优化目标
   *
   * GET /open_api/v3.0/event_manager/optimized_goal/get/
   * @see https://open.oceanengine.com/labels/7/docs/1865817103800970
   */
  "EventManagerOptimizedGoalGetV30": { method: "GET", path: "/open_api/v3.0/event_manager/optimized_goal/get/", title: "标准项目下获取可用优化目标", docsUrl: "https://open.oceanengine.com/labels/7/docs/1865817103800970", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 事件管理资产取消共享
   *
   * POST /open_api/v3.0/event_manager/share/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1738862469146628
   */
  "EventManagerShareCancelV30": { method: "POST", path: "/open_api/v3.0/event_manager/share/cancel/", title: "事件管理资产取消共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738862469146628", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 事件管理资产查看共享范围
   *
   * GET /open_api/v3.0/event_manager/share/get/
   * @see https://open.oceanengine.com/labels/7/docs/1738862504734731
   */
  "EventManagerShareGetV30": { method: "GET", path: "/open_api/v3.0/event_manager/share/get/", title: "事件管理资产查看共享范围", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738862504734731", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 事件管理资产共享
   *
   * POST /open_api/v3.0/event_manager/share/
   * @see https://open.oceanengine.com/labels/7/docs/1738862409262084
   */
  "EventManagerShareV30": { method: "POST", path: "/open_api/v3.0/event_manager/share/", title: "事件管理资产共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738862409262084", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 事件资产下创建监测链接组
   *
   * POST /open_api/2/event_manager/track_url/create/
   * @see https://open.oceanengine.com/labels/7/docs/1727898582816775
   */
  "EventManagerTrackUrlCreateV2": { method: "POST", path: "/open_api/2/event_manager/track_url/create/", title: "事件资产下创建监测链接组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1727898582816775", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取事件资产下的监测链接组
   *
   * GET /open_api/2/event_manager/track_url/get/
   * @see https://open.oceanengine.com/labels/7/docs/1727901957092365
   */
  "EventManagerTrackUrlGetV2": { method: "GET", path: "/open_api/2/event_manager/track_url/get/", title: "获取事件资产下的监测链接组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1727901957092365", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 事件资产下更新监测链接组
   *
   * POST /open_api/2/event_manager/track_url/update/
   * @see https://open.oceanengine.com/labels/7/docs/1727899035395079
   */
  "EventManagerTrackUrlUpdateV2": { method: "POST", path: "/open_api/2/event_manager/track_url/update/", title: "事件资产下更新监测链接组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1727899035395079", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 上传图文内的音频素材
   *
   * POST /open_api/2/file/audio/ad/
   * @see https://open.oceanengine.com/labels/7/docs/1780005237921792
   */
  "FileAudioAdV2": { method: "POST", path: "/open_api/2/file/audio/ad/", title: "上传图文内的音频素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780005237921792", kind: "multipart", responseKind: "json", fileFields: ["audio_file"] },
  /**
   * 获取音频素材（用于图文新建）
   *
   * GET /open_api/2/file/audio/get/
   * @see https://open.oceanengine.com/labels/7/docs/1797569167671364
   */
  "FileAudioGetV2": { method: "GET", path: "/open_api/2/file/audio/get/", title: "获取音频素材（用于图文新建）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1797569167671364", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * FileAutoGenerateSourceGetV2
   *
   * GET /open_api/2/file/auto_generate_source/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ffile%2Fauto_generate_source%2Fget%2F
   */
  "FileAutoGenerateSourceGetV2": { method: "GET", path: "/open_api/2/file/auto_generate_source/get/", title: "FileAutoGenerateSourceGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ffile%2Fauto_generate_source%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取创编可用的抖音图文素材
   *
   * GET /open_api/v3.0/file/carousel/aweme/get/
   * @see https://open.oceanengine.com/labels/7/docs/1812353010729227
   */
  "FileCarouselAwemeGetV30": { method: "GET", path: "/open_api/v3.0/file/carousel/aweme/get/", title: "获取创编可用的抖音图文素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1812353010729227", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户可用的组织视频列表
   *
   * GET /open_api/v3.0/file/ebp_video/get/
   * @see https://open.oceanengine.com/labels/7/docs/1847847898159115
   */
  "FileEbpVideoGetV30": { method: "GET", path: "/open_api/v3.0/file/ebp_video/get/", title: "获取账户可用的组织视频列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847847898159115", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取同主体下客户图片素材
   *
   * GET /open_api/2/file/image/ad/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710602952719
   */
  "FileImageAdGetV2": { method: "GET", path: "/open_api/2/file/image/ad/get/", title: "获取同主体下客户图片素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710602952719", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传广告图片
   *
   * POST /open_api/2/file/image/ad/
   * @see https://open.oceanengine.com/labels/7/docs/1696710600176640
   */
  "FileImageAdV2": { method: "POST", path: "/open_api/2/file/image/ad/", title: "上传广告图片", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710600176640", kind: "multipart", responseKind: "json", fileFields: ["image_file"] },
  /**
   * 上传资质图片
   *
   * POST /open_api/2/file/image/advertiser/
   * @see https://open.oceanengine.com/labels/7/docs/1696710599659532
   */
  "FileImageAdvertiserV2": { method: "POST", path: "/open_api/2/file/image/advertiser/", title: "上传资质图片", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710599659532", kind: "multipart", responseKind: "json", fileFields: ["image_file"] },
  /**
   * 批量删除图片素材
   *
   * POST /open_api/v3.0/file/image/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1761577471849479
   */
  "FileImageDeleteV30": { method: "POST", path: "/open_api/v3.0/file/image/delete/", title: "批量删除图片素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761577471849479", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取图片素材
   *
   * GET /open_api/2/file/image/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710601254912
   */
  "FileImageGetV2": { method: "GET", path: "/open_api/2/file/image/get/", title: "获取图片素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710601254912", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * FileIncentivePolicyBaseInfoGetV2
   *
   * GET /open_api/2/file/incentive_policy_base_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ffile%2Fincentive_policy_base_info%2Fget%2F
   */
  "FileIncentivePolicyBaseInfoGetV2": { method: "GET", path: "/open_api/2/file/incentive_policy_base_info/get/", title: "FileIncentivePolicyBaseInfoGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ffile%2Fincentive_policy_base_info%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取视频素材评估标签（新版）
   *
   * GET /open_api/2/file/material_attributes/list/
   * @see https://open.oceanengine.com/labels/7/docs/1789500809829388
   */
  "FileMaterialAttributesListV2": { method: "GET", path: "/open_api/2/file/material_attributes/list/", title: "获取视频素材评估标签（新版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1789500809829388", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 素材推送
   *
   * POST /open_api/2/file/material/bind/
   * @see https://open.oceanengine.com/labels/7/docs/1696710604852236
   */
  "FileMaterialBindV2": { method: "POST", path: "/open_api/2/file/material/bind/", title: "素材推送", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710604852236", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询素材标签信息
   *
   * GET /open_api/2/file/material/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1763768835703812
   */
  "FileMaterialDetailV2": { method: "GET", path: "/open_api/2/file/material/detail/", title: "查询素材标签信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1763768835703812", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取素材标签列表
   *
   * GET /open_api/2/file/material/list/
   * @see https://open.oceanengine.com/labels/7/docs/1761499216182279
   */
  "FileMaterialListV2": { method: "GET", path: "/open_api/2/file/material/list/", title: "获取素材标签列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761499216182279", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传试玩/直玩素材
   *
   * POST /open_api/v3.0/file/playable/create/
   * @see https://open.oceanengine.com/labels/7/docs/1836623015076167
   */
  "FilePlayableCreateV30": { method: "POST", path: "/open_api/v3.0/file/playable/create/", title: "上传试玩/直玩素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1836623015076167", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取试玩/直玩素材列表
   *
   * GET /open_api/v3.0/file/playable/list/
   * @see https://open.oceanengine.com/labels/7/docs/1836615534374475
   */
  "FilePlayableListV30": { method: "GET", path: "/open_api/v3.0/file/playable/list/", title: "获取试玩/直玩素材列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1836615534374475", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * FilePreauditGetV30
   *
   * GET /open_api/v3.0/file/preaudit/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fpreaudit%2Fget%2F
   */
  "FilePreauditGetV30": { method: "GET", path: "/open_api/v3.0/file/preaudit/get/", title: "FilePreauditGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fpreaudit%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * FilePreauditSubmitV30
   *
   * POST /open_api/v3.0/file/preaudit/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fpreaudit%2Fsubmit%2F
   */
  "FilePreauditSubmitV30": { method: "POST", path: "/open_api/v3.0/file/preaudit/submit/", title: "FilePreauditSubmitV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fpreaudit%2Fsubmit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * FileQualityGetV30
   *
   * GET /open_api/v3.0/file/quality/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fquality%2Fget%2F
   */
  "FileQualityGetV30": { method: "GET", path: "/open_api/v3.0/file/quality/get/", title: "FileQualityGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fquality%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * FileQualitySubmitV30
   *
   * POST /open_api/v3.0/file/quality/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fquality%2Fsubmit%2F
   */
  "FileQualitySubmitV30": { method: "POST", path: "/open_api/v3.0/file/quality/submit/", title: "FileQualitySubmitV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ffile%2Fquality%2Fsubmit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 【代理返点】创建下载任务-返点(素材)
   *
   * POST /open_api/2/file/rebate/common_download/create_task/
   * @see https://open.oceanengine.com/labels/7/docs/1819289415886986
   */
  "FileRebateCommonDownloadCreateTaskV2": { method: "POST", path: "/open_api/2/file/rebate/common_download/create_task/", title: "【代理返点】创建下载任务-返点(素材)", docsUrl: "https://open.oceanengine.com/labels/7/docs/1819289415886986", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 【代理返点】下载任务结果-通用
   *
   * GET /open_api/2/file/rebate/common_download/download_file/
   * @see https://open.oceanengine.com/labels/7/docs/1818838139772251
   */
  "FileRebateCommonDownloadDownloadFileV2": { method: "GET", path: "/open_api/2/file/rebate/common_download/download_file/", title: "【代理返点】下载任务结果-通用", docsUrl: "https://open.oceanengine.com/labels/7/docs/1818838139772251", kind: "query", responseKind: "bytes", fileFields: [] },
  /**
   * 【代理返点】查询下载任务-通用
   *
   * GET /open_api/2/file/rebate/common_download/get_download_task_list/
   * @see https://open.oceanengine.com/labels/7/docs/1818837922277385
   */
  "FileRebateCommonDownloadGetDownloadTaskListV2": { method: "GET", path: "/open_api/2/file/rebate/common_download/get_download_task_list/", title: "【代理返点】查询下载任务-通用", docsUrl: "https://open.oceanengine.com/labels/7/docs/1818837922277385", kind: "query", responseKind: "json", fileFields: [] },
  /**
   *  【代理返点】创建下载任务-返点(非素材)&激励
   *
   * POST /open_api/2/file/rebate/rebate_download/create_task/
   * @see https://open.oceanengine.com/labels/7/docs/1812970751420483
   */
  "FileRebateRebateDownloadCreateTaskV2": { method: "POST", path: "/open_api/2/file/rebate/rebate_download/create_task/", title: " 【代理返点】创建下载任务-返点(非素材)&激励", docsUrl: "https://open.oceanengine.com/labels/7/docs/1812970751420483", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 异步上传视频文件
   *
   * POST /open_api/2/file/upload_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1801533703648324
   */
  "FileUploadTaskCreateV2": { method: "POST", path: "/open_api/2/file/upload_task/create/", title: "异步上传视频文件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1801533703648324", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取同主体下客户视频素材
   *
   * GET /open_api/2/file/video/ad/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710603509772
   */
  "FileVideoAdGetV2": { method: "GET", path: "/open_api/2/file/video/ad/get/", title: "获取同主体下客户视频素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710603509772", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传视频
   *
   * POST /open_api/2/file/video/ad/
   * @see https://open.oceanengine.com/labels/7/docs/1696710600730639
   */
  "FileVideoAdV2": { method: "POST", path: "/open_api/2/file/video/ad/", title: "上传视频", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710600730639", kind: "multipart", responseKind: "json", fileFields: ["video_file"] },
  /**
   * 代理商获取视频素材
   *
   * GET /open_api/2/file/video/agent/get/
   * @see https://open.oceanengine.com/labels/7/docs/1827197414504772
   */
  "FileVideoAgentGetV2": { method: "GET", path: "/open_api/2/file/video/agent/get/", title: "代理商获取视频素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1827197414504772", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 【代理商】上传自产首发素材至方舟（搬运治理）
   *
   * POST /open_api/2/file/video/agent/
   * @see https://open.oceanengine.com/labels/7/docs/1792582253929536
   */
  "FileVideoAgentV2": { method: "POST", path: "/open_api/2/file/video/agent/", title: "【代理商】上传自产首发素材至方舟（搬运治理）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1792582253929536", kind: "multipart", responseKind: "json", fileFields: ["video_file"] },
  /**
   * 获取抖音主页视频
   *
   * GET /open_api/2/file/video/aweme/get/
   * @see https://open.oceanengine.com/labels/7/docs/1729982871844879
   */
  "FileVideoAwemeGetV2": { method: "GET", path: "/open_api/2/file/video/aweme/get/", title: "获取抖音主页视频", docsUrl: "https://open.oceanengine.com/labels/7/docs/1729982871844879", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量删除视频素材
   *
   * POST /open_api/2/file/video/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710605373455
   */
  "FileVideoDeleteV2": { method: "POST", path: "/open_api/2/file/video/delete/", title: "批量删除视频素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710605373455", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取低效素材
   *
   * GET /open_api/2/file/video/efficiency/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733880964883467
   */
  "FileVideoEfficiencyGetV2": { method: "GET", path: "/open_api/2/file/video/efficiency/get/", title: "获取低效素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1733880964883467", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取视频素材
   *
   * GET /open_api/2/file/video/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710601820172
   */
  "FileVideoGetV2": { method: "GET", path: "/open_api/2/file/video/get/", title: "获取视频素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710601820172", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建素材清理任务
   *
   * POST /open_api/2/file/video/material/clear_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1764209655140366
   */
  "FileVideoMaterialClearTaskCreateV2": { method: "POST", path: "/open_api/2/file/video/material/clear_task/create/", title: "创建素材清理任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1764209655140366", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取清理任务列表
   *
   * GET /open_api/2/file/video/material/clear_task/get/
   * @see https://open.oceanengine.com/labels/7/docs/1764210394714119
   */
  "FileVideoMaterialClearTaskGetV2": { method: "GET", path: "/open_api/2/file/video/material/clear_task/get/", title: "获取清理任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1764210394714119", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 下载清理任务结果
   *
   * GET /open_api/2/file/video/material/clear_task_result/get/
   * @see https://open.oceanengine.com/labels/7/docs/1764216974179400
   */
  "FileVideoMaterialClearTaskResultGetV2": { method: "GET", path: "/open_api/2/file/video/material/clear_task_result/get/", title: "下载清理任务结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1764216974179400", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 【代理商】批量暂停明点无效素材
   *
   * POST /open_api/2/file/video/pause/
   * @see https://open.oceanengine.com/labels/7/docs/1779985717273613
   */
  "FileVideoPauseV2": { method: "POST", path: "/open_api/2/file/video/pause/", title: "【代理商】批量暂停明点无效素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1779985717273613", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新视频
   *
   * POST /open_api/2/file/video/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710605909004
   */
  "FileVideoUpdateV2": { method: "POST", path: "/open_api/2/file/video/update/", title: "更新视频", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710605909004", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取异步上传视频文件结果
   *
   * GET /open_api/2/file/video/upload_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1801544428603604
   */
  "FileVideoUploadTaskListV2": { method: "GET", path: "/open_api/2/file/video/upload_task/list/", title: "获取异步上传视频文件结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1801544428603604", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 投放账户查询汇款码列表
   *
   * GET /open_api/v3.0/fix_remittance_code/list/get/
   * @see https://open.oceanengine.com/labels/7/docs/1860068101111872
   */
  "FixRemittanceCodeListGetV30": { method: "GET", path: "/open_api/v3.0/fix_remittance_code/list/get/", title: "投放账户查询汇款码列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1860068101111872", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取返货共享钱包余额
   *
   * GET /open_api/2/fund/shared_wallet_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1703323812831239
   */
  "FundSharedWalletBalanceGetV2": { method: "GET", path: "/open_api/2/fund/shared_wallet_balance/get/", title: "获取返货共享钱包余额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1703323812831239", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * GameAddictionIdGetV30
   *
   * GET /open_api/v3.0/game_addiction_id/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fgame_addiction_id%2Fget%2F
   */
  "GameAddictionIdGetV30": { method: "GET", path: "/open_api/v3.0/game_addiction_id/get/", title: "GameAddictionIdGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fgame_addiction_id%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询游戏玩法列表
   *
   * GET /open_api/v3.0/gameplay/list/
   * @see https://open.oceanengine.com/labels/7/docs/1849726032553225
   */
  "GameplayListV30": { method: "GET", path: "/open_api/v3.0/gameplay/list/", title: "查询游戏玩法列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1849726032553225", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * InvoiceApplyOrderCreateV30
   *
   * POST /open_api/v3.0/invoice/apply_order/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_order%2Fcreate%2F
   */
  "InvoiceApplyOrderCreateV30": { method: "POST", path: "/open_api/v3.0/invoice/apply_order/create/", title: "InvoiceApplyOrderCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_order%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * InvoiceApplyOrderListV30
   *
   * GET /open_api/v3.0/invoice/apply_order/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_order%2Flist%2F
   */
  "InvoiceApplyOrderListV30": { method: "GET", path: "/open_api/v3.0/invoice/apply_order/list/", title: "InvoiceApplyOrderListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_order%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * InvoiceApplyResultGetV30
   *
   * GET /open_api/v3.0/invoice/apply_result/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_result%2Fget%2F
   */
  "InvoiceApplyResultGetV30": { method: "GET", path: "/open_api/v3.0/invoice/apply_result/get/", title: "InvoiceApplyResultGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fapply_result%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * InvoiceDownloadUrlListV30
   *
   * GET /open_api/v3.0/invoice/download_url/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fdownload_url%2Flist%2F
   */
  "InvoiceDownloadUrlListV30": { method: "GET", path: "/open_api/v3.0/invoice/download_url/list/", title: "InvoiceDownloadUrlListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fdownload_url%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * InvoiceTicketListV30
   *
   * GET /open_api/v3.0/invoice/ticket/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fticket%2Flist%2F
   */
  "InvoiceTicketListV30": { method: "GET", path: "/open_api/v3.0/invoice/ticket/list/", title: "InvoiceTicketListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Finvoice%2Fticket%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询IOS应用列表
   *
   * GET /open_api/v3.0/ios_app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1866322298595340
   */
  "IosAppListV30": { method: "GET", path: "/open_api/v3.0/ios_app/list/", title: "查询IOS应用列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1866322298595340", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * KeywordCreateV2V2
   *
   * POST /open_api/2/keyword/create_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fcreate_v2%2F
   */
  "KeywordCreateV2V2": { method: "POST", path: "/open_api/2/keyword/create_v2/", title: "KeywordCreateV2V2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fcreate_v2%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建关键词
   *
   * POST /open_api/v3.0/keyword/create/
   * @see https://open.oceanengine.com/labels/7/docs/1768010379579407
   */
  "KeywordCreateV30": { method: "POST", path: "/open_api/v3.0/keyword/create/", title: "创建关键词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1768010379579407", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * KeywordDeleteV2V2
   *
   * POST /open_api/2/keyword/delete_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fdelete_v2%2F
   */
  "KeywordDeleteV2V2": { method: "POST", path: "/open_api/2/keyword/delete_v2/", title: "KeywordDeleteV2V2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fdelete_v2%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除关键词
   *
   * POST /open_api/v3.0/keyword/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1768012737961092
   */
  "KeywordDeleteV30": { method: "POST", path: "/open_api/v3.0/keyword/delete/", title: "删除关键词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1768012737961092", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * KeywordFeedadsSuggestV2
   *
   * GET /open_api/2/keyword_feedads/suggest/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword_feedads%2Fsuggest%2F
   */
  "KeywordFeedadsSuggestV2": { method: "GET", path: "/open_api/2/keyword_feedads/suggest/", title: "KeywordFeedadsSuggestV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword_feedads%2Fsuggest%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * KeywordGetV2
   *
   * GET /open_api/2/keyword/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fget%2F
   */
  "KeywordGetV2": { method: "GET", path: "/open_api/2/keyword/get/", title: "KeywordGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取关键词列表
   *
   * GET /open_api/v3.0/keyword/list/
   * @see https://open.oceanengine.com/labels/7/docs/1768012871181443
   */
  "KeywordListV30": { method: "GET", path: "/open_api/v3.0/keyword/list/", title: "获取关键词列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1768012871181443", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * KeywordUpdateV2V2
   *
   * POST /open_api/2/keyword/update_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fupdate_v2%2F
   */
  "KeywordUpdateV2V2": { method: "POST", path: "/open_api/2/keyword/update_v2/", title: "KeywordUpdateV2V2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fkeyword%2Fupdate_v2%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新关键词属性
   *
   * POST /open_api/v3.0/keyword/update/
   * @see https://open.oceanengine.com/labels/7/docs/1768011243105411
   */
  "KeywordUpdateV30": { method: "POST", path: "/open_api/v3.0/keyword/update/", title: "更新关键词属性", docsUrl: "https://open.oceanengine.com/labels/7/docs/1768011243105411", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 行为类目查询
   *
   * GET /open_api/v3.0/local/action/category/
   * @see https://open.oceanengine.com/labels/37/docs/1848487707954248
   */
  "LocalActionCategoryV30": { method: "GET", path: "/open_api/v3.0/local/action/category/", title: "行为类目查询", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848487707954248", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 行为关键词查询
   *
   * GET /open_api/v3.0/local/action/keyword/
   * @see https://open.oceanengine.com/labels/37/docs/1848487896231948
   */
  "LocalActionKeywordV30": { method: "GET", path: "/open_api/v3.0/local/action/keyword/", title: "行为关键词查询", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848487896231948", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户日预算
   *
   * GET /open_api/v3.0/local/advertiser/budget/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848476262968665
   */
  "LocalAdvertiserBudgetGetV30": { method: "GET", path: "/open_api/v3.0/local/advertiser/budget/get/", title: "获取账户日预算", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848476262968665", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取定向包
   *
   * GET /open_api/v3.0/local/audience_package/get/
   * @see https://open.oceanengine.com/labels/37/docs/1865802661094727
   */
  "LocalAudiencePackageGetV30": { method: "GET", path: "/open_api/v3.0/local/audience_package/get/", title: "获取定向包", docsUrl: "https://open.oceanengine.com/labels/37/docs/1865802661094727", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新定向包
   *
   * POST /open_api/v3.0/local/audience_package/update/
   * @see https://open.oceanengine.com/labels/37/docs/1865803054737420
   */
  "LocalAudiencePackageUpdateV30": { method: "POST", path: "/open_api/v3.0/local/audience_package/update/", title: "更新定向包", docsUrl: "https://open.oceanengine.com/labels/37/docs/1865803054737420", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalAwemeAuthCancelUpdateV30
   *
   * POST /open_api/v3.0/local/aweme_auth_cancel/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth_cancel%2Fupdate%2F
   */
  "LocalAwemeAuthCancelUpdateV30": { method: "POST", path: "/open_api/v3.0/local/aweme_auth_cancel/update/", title: "LocalAwemeAuthCancelUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth_cancel%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalAwemeAuthCreateV30
   *
   * POST /open_api/v3.0/local/aweme_auth/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth%2Fcreate%2F
   */
  "LocalAwemeAuthCreateV30": { method: "POST", path: "/open_api/v3.0/local/aweme_auth/create/", title: "LocalAwemeAuthCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalAwemeAuthListV30
   *
   * GET /open_api/v3.0/local/aweme_auth/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth%2Flist%2F
   */
  "LocalAwemeAuthListV30": { method: "GET", path: "/open_api/v3.0/local/aweme_auth/list/", title: "LocalAwemeAuthListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalAwemeAuthRenewCreateV30
   *
   * POST /open_api/v3.0/local/aweme_auth_renew/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth_renew%2Fcreate%2F
   */
  "LocalAwemeAuthRenewCreateV30": { method: "POST", path: "/open_api/v3.0/local/aweme_auth_renew/create/", title: "LocalAwemeAuthRenewCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Faweme_auth_renew%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取本地推创编可用抖音号
   *
   * GET /open_api/v3.0/local/aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/37/docs/1807990317937690
   */
  "LocalAwemeAuthorizedGetV30": { method: "GET", path: "/open_api/v3.0/local/aweme/authorized/get/", title: "获取本地推创编可用抖音号", docsUrl: "https://open.oceanengine.com/labels/37/docs/1807990317937690", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新账户日预算
   *
   * POST /open_api/v3.0/local/budget/update/
   * @see https://open.oceanengine.com/labels/37/docs/1866308787374080
   */
  "LocalBudgetUpdateV30": { method: "POST", path: "/open_api/v3.0/local/budget/update/", title: "更新账户日预算", docsUrl: "https://open.oceanengine.com/labels/37/docs/1866308787374080", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalChargeListV30
   *
   * GET /open_api/v3.0/local/charge/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Flist%2F
   */
  "LocalChargeListV30": { method: "GET", path: "/open_api/v3.0/local/charge/list/", title: "LocalChargeListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalChargeResultV30
   *
   * GET /open_api/v3.0/local/charge/result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Fresult%2F
   */
  "LocalChargeResultV30": { method: "GET", path: "/open_api/v3.0/local/charge/result/", title: "LocalChargeResultV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Fresult%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalChargeSubmitV30
   *
   * POST /open_api/v3.0/local/charge/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Fsubmit%2F
   */
  "LocalChargeSubmitV30": { method: "POST", path: "/open_api/v3.0/local/charge/submit/", title: "LocalChargeSubmitV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fcharge%2Fsubmit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取私信接待抖音号
   *
   * GET /open_api/v3.0/local/consult_awame_list/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848483292162059
   */
  "LocalConsultAwameListGetV30": { method: "GET", path: "/open_api/v3.0/local/consult_awame_list/get/", title: "获取私信接待抖音号", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848483292162059", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询本地推创编可用人群包
   *
   * GET /open_api/v3.0/local/custom_audience/get/
   * @see https://open.oceanengine.com/labels/37/docs/1808003891639609
   */
  "LocalCustomAudienceGetV30": { method: "GET", path: "/open_api/v3.0/local/custom_audience/get/", title: "查询本地推创编可用人群包", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808003891639609", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取投放资质
   *
   * GET /open_api/v3.0/local/delivery_qualification/list/
   * @see https://open.oceanengine.com/labels/37/docs/1848479321495563
   */
  "LocalDeliveryQualificationListV30": { method: "GET", path: "/open_api/v3.0/local/delivery_qualification/list/", title: "获取投放资质", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848479321495563", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取图文素材
   *
   * GET /open_api/v3.0/local/file/carousel/list/
   * @see https://open.oceanengine.com/labels/37/docs/1849312906748032
   */
  "LocalFileCarouselListV30": { method: "GET", path: "/open_api/v3.0/local/file/carousel/list/", title: "获取图文素材", docsUrl: "https://open.oceanengine.com/labels/37/docs/1849312906748032", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 异步上传本地推视频
   *
   * POST /open_api/v3.0/local/file/upload_task/create/
   * @see https://open.oceanengine.com/labels/37/docs/1810070109238283
   */
  "LocalFileUploadTaskCreateV30": { method: "POST", path: "/open_api/v3.0/local/file/upload_task/create/", title: "异步上传本地推视频", docsUrl: "https://open.oceanengine.com/labels/37/docs/1810070109238283", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取抖音主页视频
   *
   * GET /open_api/v3.0/local/file/video/aweme/get/
   * @see https://open.oceanengine.com/labels/37/docs/1808004088768608
   */
  "LocalFileVideoAwemeGetV30": { method: "GET", path: "/open_api/v3.0/local/file/video/aweme/get/", title: "获取抖音主页视频", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808004088768608", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取素材库视频
   *
   * GET /open_api/v3.0/local/file/video/get/
   * @see https://open.oceanengine.com/labels/37/docs/1808613640441882
   */
  "LocalFileVideoGetV30": { method: "GET", path: "/open_api/v3.0/local/file/video/get/", title: "获取素材库视频", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808613640441882", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询异步上传本地推视频结果
   *
   * GET /open_api/v3.0/local/file/video/upload_task/list/
   * @see https://open.oceanengine.com/labels/37/docs/1810070318501988
   */
  "LocalFileVideoUploadTaskListV30": { method: "GET", path: "/open_api/v3.0/local/file/video/upload_task/list/", title: "查询异步上传本地推视频结果", docsUrl: "https://open.oceanengine.com/labels/37/docs/1810070318501988", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 上传视频
   *
   * POST /open_api/v3.0/local/file/video/upload/
   * @see https://open.oceanengine.com/labels/37/docs/1808003989738499
   */
  "LocalFileVideoUploadV30": { method: "POST", path: "/open_api/v3.0/local/file/video/upload/", title: "上传视频", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808003989738499", kind: "multipart", responseKind: "json", fileFields: [] },
  /**
   * LocalImAccountGetV30
   *
   * GET /open_api/v3.0/local/im/account/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Faccount%2Fget%2F
   */
  "LocalImAccountGetV30": { method: "GET", path: "/open_api/v3.0/local/im/account/get/", title: "LocalImAccountGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Faccount%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalImAutoSettingGetV30
   *
   * GET /open_api/v3.0/local/im_auto_setting/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_auto_setting%2Fget%2F
   */
  "LocalImAutoSettingGetV30": { method: "GET", path: "/open_api/v3.0/local/im_auto_setting/get/", title: "LocalImAutoSettingGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_auto_setting%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalImAutoSettingUpdateV30
   *
   * POST /open_api/v3.0/local/im_auto_setting/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_auto_setting%2Fupdate%2F
   */
  "LocalImAutoSettingUpdateV30": { method: "POST", path: "/open_api/v3.0/local/im_auto_setting/update/", title: "LocalImAutoSettingUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_auto_setting%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalImCardGetV30
   *
   * GET /open_api/v3.0/local/im_card/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_card%2Fget%2F
   */
  "LocalImCardGetV30": { method: "GET", path: "/open_api/v3.0/local/im_card/get/", title: "LocalImCardGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim_card%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalImQueryMsgV30
   *
   * GET /open_api/v3.0/local/im/query/msg/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fquery%2Fmsg%2F
   */
  "LocalImQueryMsgV30": { method: "GET", path: "/open_api/v3.0/local/im/query/msg/", title: "LocalImQueryMsgV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fquery%2Fmsg%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalImSendMsgV30
   *
   * POST /open_api/v3.0/local/im/send/msg/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fsend%2Fmsg%2F
   */
  "LocalImSendMsgV30": { method: "POST", path: "/open_api/v3.0/local/im/send/msg/", title: "LocalImSendMsgV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fsend%2Fmsg%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalImUploadImageV30
   *
   * POST /open_api/v3.0/local/im/upload/image/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fupload%2Fimage%2F
   */
  "LocalImUploadImageV30": { method: "POST", path: "/open_api/v3.0/local/im/upload/image/", title: "LocalImUploadImageV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Fim%2Fupload%2Fimage%2F", kind: "multipart", responseKind: "json", fileFields: ["image_file"] },
  /**
   * 上传图片素材
   *
   * POST /open_api/v3.0/local/image/upload/
   * @see https://open.oceanengine.com/labels/37/docs/1851654919296067
   */
  "LocalImageUploadV30": { method: "POST", path: "/open_api/v3.0/local/image/upload/", title: "上传图片素材", docsUrl: "https://open.oceanengine.com/labels/37/docs/1851654919296067", kind: "multipart", responseKind: "json", fileFields: ["image_file"] },
  /**
   * 兴趣类目查询
   *
   * GET /open_api/v3.0/local/interest/category/
   * @see https://open.oceanengine.com/labels/37/docs/1848488007184460
   */
  "LocalInterestCategoryV30": { method: "GET", path: "/open_api/v3.0/local/interest/category/", title: "兴趣类目查询", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848488007184460", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 兴趣关键词查询
   *
   * GET /open_api/v3.0/local/interest/keyword/
   * @see https://open.oceanengine.com/labels/37/docs/1848488533820416
   */
  "LocalInterestKeywordV30": { method: "GET", path: "/open_api/v3.0/local/interest/keyword/", title: "兴趣关键词查询", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848488533820416", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * LocalLifeAdvertiserCreateV30
   *
   * POST /open_api/v3.0/local/life/advertiser/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Flife%2Fadvertiser%2Fcreate%2F
   */
  "LocalLifeAdvertiserCreateV30": { method: "POST", path: "/open_api/v3.0/local/life/advertiser/create/", title: "LocalLifeAdvertiserCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Flife%2Fadvertiser%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * LocalLifeAdvertiserListV30
   *
   * GET /open_api/v3.0/local/life/advertiser/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Flife%2Fadvertiser%2Flist%2F
   */
  "LocalLifeAdvertiserListV30": { method: "GET", path: "/open_api/v3.0/local/life/advertiser/list/", title: "LocalLifeAdvertiserListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Flocal%2Flife%2Fadvertiser%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询营销页详情
   *
   * GET /open_api/v3.0/local/market_page/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848482831406092
   */
  "LocalMarketPageGetV30": { method: "GET", path: "/open_api/v3.0/local/market_page/get/", title: "查询营销页详情", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848482831406092", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可用营销页列表
   *
   * GET /open_api/v3.0/local/market_page_list/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848482084888708
   */
  "LocalMarketPageListGetV30": { method: "GET", path: "/open_api/v3.0/local/market_page_list/get/", title: "获取可用营销页列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848482084888708", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 根据多门店ID拉取门店ID
   *
   * GET /open_api/v3.0/local/multi_poi_id/poi_ids/get/
   * @see https://open.oceanengine.com/labels/37/docs/1809719485612043
   */
  "LocalMultiPoiIdPoiIdsGetV30": { method: "GET", path: "/open_api/v3.0/local/multi_poi_id/poi_ids/get/", title: "根据多门店ID拉取门店ID", docsUrl: "https://open.oceanengine.com/labels/37/docs/1809719485612043", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取项目下素材（新版）
   *
   * GET /open_api/v3.0/local/oc_material/get/
   * @see https://open.oceanengine.com/labels/37/docs/1872559916484608
   */
  "LocalOcMaterialGetV30": { method: "GET", path: "/open_api/v3.0/local/oc_material/get/", title: "获取项目下素材（新版）", docsUrl: "https://open.oceanengine.com/labels/37/docs/1872559916484608", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取标准投放项目详情
   *
   * GET /open_api/v3.0/local/oc_project/get/
   * @see https://open.oceanengine.com/labels/37/docs/1872563621154816
   */
  "LocalOcProjectGetV30": { method: "GET", path: "/open_api/v3.0/local/oc_project/get/", title: "获取标准投放项目详情", docsUrl: "https://open.oceanengine.com/labels/37/docs/1872563621154816", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取标准投放项目列表（新版）
   *
   * GET /open_api/v3.0/local/oc_project/list/
   * @see https://open.oceanengine.com/labels/37/docs/1872561465118212
   */
  "LocalOcProjectListV30": { method: "GET", path: "/open_api/v3.0/local/oc_project/list/", title: "获取标准投放项目列表（新版）", docsUrl: "https://open.oceanengine.com/labels/37/docs/1872561465118212", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可投门店列表
   *
   * GET /open_api/v3.0/local/poi/get/
   * @see https://open.oceanengine.com/labels/37/docs/1807977760174122
   */
  "LocalPoiGetV30": { method: "GET", path: "/open_api/v3.0/local/poi/get/", title: "获取可投门店列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1807977760174122", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 根据门店ID拉取商品
   *
   * GET /open_api/v3.0/local/product/get_by_poiids/
   * @see https://open.oceanengine.com/labels/37/docs/1810064083323002
   */
  "LocalProductGetByPoiidsV30": { method: "GET", path: "/open_api/v3.0/local/product/get_by_poiids/", title: "根据门店ID拉取商品", docsUrl: "https://open.oceanengine.com/labels/37/docs/1810064083323002", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可投商品列表
   *
   * GET /open_api/v3.0/local/product/get/
   * @see https://open.oceanengine.com/labels/37/docs/1807978367423588
   */
  "LocalProductGetV30": { method: "GET", path: "/open_api/v3.0/local/product/get/", title: "获取可投商品列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1807978367423588", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建项目
   *
   * POST /open_api/v3.0/local/project/create/
   * @see https://open.oceanengine.com/labels/37/docs/1808094783305739
   */
  "LocalProjectCreateV30": { method: "POST", path: "/open_api/v3.0/local/project/create/", title: "创建项目", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808094783305739", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除项目
   *
   * POST /open_api/v3.0/local/project/delete/
   * @see https://open.oceanengine.com/labels/37/docs/1866308320649799
   */
  "LocalProjectDeleteV30": { method: "POST", path: "/open_api/v3.0/local/project/delete/", title: "删除项目", docsUrl: "https://open.oceanengine.com/labels/37/docs/1866308320649799", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取项目详情
   *
   * GET /open_api/v3.0/local/project/detail/
   * @see https://open.oceanengine.com/labels/37/docs/1808441520771339
   */
  "LocalProjectDetailV30": { method: "GET", path: "/open_api/v3.0/local/project/detail/", title: "获取项目详情", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808441520771339", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取项目列表
   *
   * GET /open_api/v3.0/local/project/list/
   * @see https://open.oceanengine.com/labels/37/docs/1807977310878736
   */
  "LocalProjectListV30": { method: "GET", path: "/open_api/v3.0/local/project/list/", title: "获取项目列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1807977310878736", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目状态
   *
   * POST /open_api/v3.0/local/project/status/update/
   * @see https://open.oceanengine.com/labels/37/docs/1809958369980564
   */
  "LocalProjectStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/local/project/status/update/", title: "批量更新项目状态", docsUrl: "https://open.oceanengine.com/labels/37/docs/1809958369980564", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新项目
   *
   * POST /open_api/v3.0/local/project/update/
   * @see https://open.oceanengine.com/labels/37/docs/1808440838642948
   */
  "LocalProjectUpdateV30": { method: "POST", path: "/open_api/v3.0/local/project/update/", title: "更新项目", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808440838642948", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 列表批量更新项目投放时段
   *
   * POST /open_api/v3.0/local/project/week_schedule/update/
   * @see https://open.oceanengine.com/labels/37/docs/1848483664605003
   */
  "LocalProjectWeekScheduleUpdateV30": { method: "POST", path: "/open_api/v3.0/local/project/week_schedule/update/", title: "列表批量更新项目投放时段", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848483664605003", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取单元成本保障状态
   *
   * GET /open_api/v3.0/local/promotion/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/37/docs/1866308600274000
   */
  "LocalPromotionCostProtectStatusGetV30": { method: "GET", path: "/open_api/v3.0/local/promotion/cost_protect_status/get/", title: "获取单元成本保障状态", docsUrl: "https://open.oceanengine.com/labels/37/docs/1866308600274000", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建单元
   *
   * POST /open_api/v3.0/local/promotion/create/
   * @see https://open.oceanengine.com/labels/37/docs/1808165017797977
   */
  "LocalPromotionCreateV30": { method: "POST", path: "/open_api/v3.0/local/promotion/create/", title: "创建单元", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808165017797977", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除单元
   *
   * POST /open_api/v3.0/local/promotion/delete/
   * @see https://open.oceanengine.com/labels/37/docs/1866307400506627
   */
  "LocalPromotionDeleteV30": { method: "POST", path: "/open_api/v3.0/local/promotion/delete/", title: "删除单元", docsUrl: "https://open.oceanengine.com/labels/37/docs/1866307400506627", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取单元详情
   *
   * GET /open_api/v3.0/local/promotion/detail/
   * @see https://open.oceanengine.com/labels/37/docs/1808442943397963
   */
  "LocalPromotionDetailV30": { method: "GET", path: "/open_api/v3.0/local/promotion/detail/", title: "获取单元详情", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808442943397963", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取单元列表
   *
   * GET /open_api/v3.0/local/promotion/list/
   * @see https://open.oceanengine.com/labels/37/docs/1808147672950851
   */
  "LocalPromotionListV30": { method: "GET", path: "/open_api/v3.0/local/promotion/list/", title: "获取单元列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808147672950851", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量获取广告审核建议
   *
   * GET /open_api/v3.0/local/promotion/reject_reason/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848484376642649
   */
  "LocalPromotionRejectReasonGetV30": { method: "GET", path: "/open_api/v3.0/local/promotion/reject_reason/get/", title: "批量获取广告审核建议", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848484376642649", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量更新单元状态
   *
   * POST /open_api/v3.0/local/promotion/status/update/
   * @see https://open.oceanengine.com/labels/37/docs/1809958381935689
   */
  "LocalPromotionStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/local/promotion/status/update/", title: "批量更新单元状态", docsUrl: "https://open.oceanengine.com/labels/37/docs/1809958381935689", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新单元
   *
   * POST /open_api/v3.0/local/promotion/update/
   * @see https://open.oceanengine.com/labels/37/docs/1808440848912411
   */
  "LocalPromotionUpdateV30": { method: "POST", path: "/open_api/v3.0/local/promotion/update/", title: "更新单元", docsUrl: "https://open.oceanengine.com/labels/37/docs/1808440848912411", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取主体资质
   *
   * GET /open_api/v3.0/local/qualification/get/
   * @see https://open.oceanengine.com/labels/37/docs/1849311987038410
   */
  "LocalQualificationGetV30": { method: "GET", path: "/open_api/v3.0/local/qualification/get/", title: "获取主体资质", docsUrl: "https://open.oceanengine.com/labels/37/docs/1849311987038410", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询账户数据
   *
   * GET /open_api/v3.0/local/report/account/get/
   * @see https://open.oceanengine.com/labels/37/docs/1819564415845708
   */
  "LocalReportAccountGetV30": { method: "GET", path: "/open_api/v3.0/local/report/account/get/", title: "查询账户数据", docsUrl: "https://open.oceanengine.com/labels/37/docs/1819564415845708", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取本地推受众分析数据
   *
   * GET /open_api/v3.0/local/report/audience/get/
   * @see https://open.oceanengine.com/labels/37/docs/1830268904570887
   */
  "LocalReportAudienceGetV30": { method: "GET", path: "/open_api/v3.0/local/report/audience/get/", title: "获取本地推受众分析数据", docsUrl: "https://open.oceanengine.com/labels/37/docs/1830268904570887", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取素材数据
   *
   * GET /open_api/v3.0/local/report/material/get/
   * @see https://open.oceanengine.com/labels/37/docs/1804001258474595
   */
  "LocalReportMaterialGetV30": { method: "GET", path: "/open_api/v3.0/local/report/material/get/", title: "获取素材数据", docsUrl: "https://open.oceanengine.com/labels/37/docs/1804001258474595", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取项目数据
   *
   * GET /open_api/v3.0/local/report/project/get/
   * @see https://open.oceanengine.com/labels/37/docs/1804000847733786
   */
  "LocalReportProjectGetV30": { method: "GET", path: "/open_api/v3.0/local/report/project/get/", title: "获取项目数据", docsUrl: "https://open.oceanengine.com/labels/37/docs/1804000847733786", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取单元数据
   *
   * GET /open_api/v3.0/local/report/promotion/get/
   * @see https://open.oceanengine.com/labels/37/docs/1804001121909835
   */
  "LocalReportPromotionGetV30": { method: "GET", path: "/open_api/v3.0/local/report/promotion/get/", title: "获取单元数据", docsUrl: "https://open.oceanengine.com/labels/37/docs/1804001121909835", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可用留资组件详情
   *
   * GET /open_api/v3.0/local/tool_pack/detail/
   * @see https://open.oceanengine.com/labels/37/docs/1848481896981834
   */
  "LocalToolPackDetailV30": { method: "GET", path: "/open_api/v3.0/local/tool_pack/detail/", title: "获取可用留资组件详情", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848481896981834", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可用留资组件列表
   *
   * GET /open_api/v3.0/local/tool_pack_list/get/
   * @see https://open.oceanengine.com/labels/37/docs/1848481263218688
   */
  "LocalToolPackListGetV30": { method: "GET", path: "/open_api/v3.0/local/tool_pack_list/get/", title: "获取可用留资组件列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1848481263218688", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取旧版巨量引擎工作台下账户列表
   *
   * GET /open_api/2/majordomo/advertiser/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710519607296
   */
  "MajordomoAdvertiserSelectV2": { method: "GET", path: "/open_api/2/majordomo/advertiser/select/", title: "获取旧版巨量引擎工作台下账户列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710519607296", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量更新营销素材启用状态
   *
   * POST /open_api/v3.0/material/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1755355780973568
   */
  "MaterialStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/material/status/update/", title: "批量更新营销素材启用状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755355780973568", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建原生锚点
   *
   * POST /open_api/v3.0/native_anchor/create/
   * @see https://open.oceanengine.com/labels/7/docs/1757798123491403
   */
  "NativeAnchorCreateV30": { method: "POST", path: "/open_api/v3.0/native_anchor/create/", title: "创建原生锚点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1757798123491403", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除原生锚点
   *
   * POST /open_api/v3.0/native_anchor/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1780079261760524
   */
  "NativeAnchorDeleteV30": { method: "POST", path: "/open_api/v3.0/native_anchor/delete/", title: "删除原生锚点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780079261760524", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取原生锚点详情
   *
   * GET /open_api/v3.0/native_anchor/get/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1786407342576640
   */
  "NativeAnchorGetDetailV30": { method: "GET", path: "/open_api/v3.0/native_anchor/get/detail/", title: "获取原生锚点详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1786407342576640", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取原生锚点列表
   *
   * GET /open_api/v3.0/native_anchor/get/
   * @see https://open.oceanengine.com/labels/7/docs/1757715831323652
   */
  "NativeAnchorGetV30": { method: "GET", path: "/open_api/v3.0/native_anchor/get/", title: "获取原生锚点列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1757715831323652", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量获取锚点预览url
   *
   * GET /open_api/v3.0/native_anchor/qrcode_preview/get/
   * @see https://open.oceanengine.com/labels/7/docs/1786414975773770
   */
  "NativeAnchorQrcodePreviewGetV30": { method: "GET", path: "/open_api/v3.0/native_anchor/qrcode_preview/get/", title: "批量获取锚点预览url", docsUrl: "https://open.oceanengine.com/labels/7/docs/1786414975773770", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新原生锚点
   *
   * POST /open_api/v3.0/native_anchor/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780079786680328
   */
  "NativeAnchorUpdateV30": { method: "POST", path: "/open_api/v3.0/native_anchor/update/", title: "更新原生锚点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780079786680328", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取Access Token
   *
   * POST /open_api/oauth2/access_token/
   * @see https://open.oceanengine.com/labels/7/docs/1696710505596940
   */
  "Oauth2AccessToken": { method: "POST", path: "/open_api/oauth2/access_token/", title: "获取Access Token", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710505596940", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取已授权账户
   *
   * GET /open_api/oauth2/advertiser/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710506574848
   */
  "Oauth2AdvertiserGet": { method: "GET", path: "/open_api/oauth2/advertiser/get/", title: "获取已授权账户", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710506574848", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取APP Access Token
   *
   * POST /open_api/oauth2/app_access_token/
   * @see https://open.oceanengine.com/labels/7/docs/1713655428885516
   */
  "Oauth2AppAccessToken": { method: "POST", path: "/open_api/oauth2/app_access_token/", title: "获取APP Access Token", docsUrl: "https://open.oceanengine.com/labels/7/docs/1713655428885516", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 刷新Refresh Token
   *
   * POST /open_api/oauth2/refresh_token/
   * @see https://open.oceanengine.com/labels/7/docs/1696710506097679
   */
  "Oauth2RefreshToken": { method: "POST", path: "/open_api/oauth2/refresh_token/", title: "刷新Refresh Token", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710506097679", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * Oauth2RenewToken
   *
   * POST /open_api/oauth2/renew_token/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Foauth2%2Frenew_token%2F
   */
  "Oauth2RenewToken": { method: "POST", path: "/open_api/oauth2/renew_token/", title: "Oauth2RenewToken", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Foauth2%2Frenew_token%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量添加投放项目下素材
   *
   * POST /open_api/v3.0/oc_project/material/create/
   * @see https://open.oceanengine.com/labels/7/docs/1854929666566346
   */
  "OcProjectMaterialCreateV30": { method: "POST", path: "/open_api/v3.0/oc_project/material/create/", title: "批量添加投放项目下素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1854929666566346", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除投放项目下素材
   *
   * POST /open_api/v3.0/oc_project/material/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1854929995241483
   */
  "OcProjectMaterialDeleteV30": { method: "POST", path: "/open_api/v3.0/oc_project/material/delete/", title: "删除投放项目下素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1854929995241483", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取投放项目下素材
   *
   * GET /open_api/v3.0/oc_project/material/get/
   * @see https://open.oceanengine.com/labels/7/docs/1854927239666825
   */
  "OcProjectMaterialGetV30": { method: "GET", path: "/open_api/v3.0/oc_project/material/get/", title: "获取投放项目下素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1854927239666825", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量修改投放项目下素材状态
   *
   * POST /open_api/v3.0/oc_project/material/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1854930119140363
   */
  "OcProjectMaterialStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/oc_project/material/status/update/", title: "批量修改投放项目下素材状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1854930119140363", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * OcProjectRejectReasonGetV30
   *
   * GET /open_api/v3.0/oc_project/reject_reason/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Foc_project%2Freject_reason%2Fget%2F
   */
  "OcProjectRejectReasonGetV30": { method: "GET", path: "/open_api/v3.0/oc_project/reject_reason/get/", title: "OcProjectRejectReasonGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Foc_project%2Freject_reason%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取项目下剩余可建调控任务数量
   *
   * GET /open_api/v3.0/oc_project/std_project/tools/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872130175108228
   */
  "OcProjectStdProjectToolsGetV30": { method: "GET", path: "/open_api/v3.0/oc_project/std_project/tools/get/", title: "获取项目下剩余可建调控任务数量", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872130175108228", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/create/
   * @see https://open.oceanengine.com/labels/7/docs/1872036641062924
   */
  "OcProjectToolsAudienceCreateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_audience/create/", title: "创建定向调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872036641062924", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1872036997115008
   */
  "OcProjectToolsAudienceDeleteV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_audience/delete/", title: "删除定向调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872036997115008", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取定向调控任务列表
   *
   * GET /open_api/v3.0/oc_project/tools_audience/list/
   * @see https://open.oceanengine.com/labels/7/docs/1872037169709132
   */
  "OcProjectToolsAudienceListV30": { method: "GET", path: "/open_api/v3.0/oc_project/tools_audience/list/", title: "获取定向调控任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872037169709132", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量启停定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872037080814604
   */
  "OcProjectToolsAudienceStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_audience/status/update/", title: "批量启停定向调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872037080814604", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 编辑定向调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_audience/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872036761269376
   */
  "OcProjectToolsAudienceUpdateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_audience/update/", title: "编辑定向调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872036761269376", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取项目/调控任务保障历史列表
   *
   * GET /open_api/v3.0/oc_project/tools/compensate_history_list/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872131888860160
   */
  "OcProjectToolsCompensateHistoryListGetV30": { method: "GET", path: "/open_api/v3.0/oc_project/tools/compensate_history_list/get/", title: "获取项目/调控任务保障历史列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872131888860160", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取任务成本保障状态
   *
   * GET /open_api/v3.0/oc_project/tools/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872133236794380
   */
  "OcProjectToolsCostProtectStatusGetV30": { method: "GET", path: "/open_api/v3.0/oc_project/tools/cost_protect_status/get/", title: "获取任务成本保障状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872133236794380", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/create/
   * @see https://open.oceanengine.com/labels/7/docs/1872037607466537
   */
  "OcProjectToolsKeywordCreateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_keyword/create/", title: "创建关键词调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872037607466537", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1872037861597259
   */
  "OcProjectToolsKeywordDeleteV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_keyword/delete/", title: "删除关键词调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872037861597259", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取关键词调控任务列表
   *
   * GET /open_api/v3.0/oc_project/tools_keyword/list/
   * @see https://open.oceanengine.com/labels/7/docs/1872137299017099
   */
  "OcProjectToolsKeywordListV30": { method: "GET", path: "/open_api/v3.0/oc_project/tools_keyword/list/", title: "获取关键词调控任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872137299017099", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量启停关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872138027320329
   */
  "OcProjectToolsKeywordStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_keyword/status/update/", title: "批量启停关键词调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872138027320329", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 编辑关键词调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_keyword/update/
   * @see https://open.oceanengine.com/labels/7/docs/1872037755000315
   */
  "OcProjectToolsKeywordUpdateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_keyword/update/", title: "编辑关键词调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872037755000315", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建素材起量调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_material_raise/create/
   * @see https://open.oceanengine.com/labels/7/docs/1872041259727386
   */
  "OcProjectToolsMaterialRaiseCreateV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_material_raise/create/", title: "创建素材起量调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872041259727386", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除素材起量调控任务
   *
   * POST /open_api/v3.0/oc_project/tools_material_raise/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1872038932102156
   */
  "OcProjectToolsMaterialRaiseDeleteV30": { method: "POST", path: "/open_api/v3.0/oc_project/tools_material_raise/delete/", title: "删除素材起量调控任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872038932102156", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取素材起量调控任务列表
   *
   * GET /open_api/v3.0/oc_project/tools_material_raise/get/
   * @see https://open.oceanengine.com/labels/7/docs/1872033559772938
   */
  "OcProjectToolsMaterialRaiseGetV30": { method: "GET", path: "/open_api/v3.0/oc_project/tools_material_raise/get/", title: "获取素材起量调控任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1872033559772938", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 营销素材预审结果查询（连山云视频点播版）
   *
   * GET /open_api/v3.0/open_material_audit/pro/get/
   * @see https://open.oceanengine.com/labels/7/docs/1832825121155465
   */
  "OpenMaterialAuditProGetV30": { method: "GET", path: "/open_api/v3.0/open_material_audit/pro/get/", title: "营销素材预审结果查询（连山云视频点播版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1832825121155465", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 营销素材预审提交接口（连山云视频点播版）
   *
   * POST /open_api/v3.0/open_material_audit/pro/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1832825155593417
   */
  "OpenMaterialAuditProSubmitV30": { method: "POST", path: "/open_api/v3.0/open_material_audit/pro/submit/", title: "营销素材预审提交接口（连山云视频点播版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1832825155593417", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PenaltyTaskGetV30
   *
   * GET /open_api/v3.0/penalty_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpenalty_task%2Fget%2F
   */
  "PenaltyTaskGetV30": { method: "GET", path: "/open_api/v3.0/penalty_task/get/", title: "PenaltyTaskGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpenalty_task%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 投放账户对公充值
   *
   * POST /open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/
   * @see https://open.oceanengine.com/labels/7/docs/1860068027672588
   */
  "PrepayChargeGenerateFixRemiattanceCodeCreateV30": { method: "POST", path: "/open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/", title: "投放账户对公充值", docsUrl: "https://open.oceanengine.com/labels/7/docs/1860068027672588", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PrepayChargeGenerateRemittanceCodeCreateV30
   *
   * POST /open_api/v3.0/prepay_charge/generate_remittance_code/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fprepay_charge%2Fgenerate_remittance_code%2Fcreate%2F
   */
  "PrepayChargeGenerateRemittanceCodeCreateV30": { method: "POST", path: "/open_api/v3.0/prepay_charge/generate_remittance_code/create/", title: "PrepayChargeGenerateRemittanceCodeCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fprepay_charge%2Fgenerate_remittance_code%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目预算
   *
   * POST /open_api/v3.0/project/budget/update/
   * @see https://open.oceanengine.com/labels/7/docs/1755353873798155
   */
  "ProjectBudgetUpdateV30": { method: "POST", path: "/open_api/v3.0/project/budget/update/", title: "批量更新项目预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755353873798155", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量获取项目成本保障状态
   *
   * GET /open_api/v3.0/project/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1802842544128000
   */
  "ProjectCostProtectStatusGetV30": { method: "GET", path: "/open_api/v3.0/project/cost_protect_status/get/", title: "批量获取项目成本保障状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1802842544128000", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目出价
   *
   * POST /open_api/v3.0/project/cpa_bid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1858174581876745
   */
  "ProjectCpaBidUpdateV30": { method: "POST", path: "/open_api/v3.0/project/cpa_bid/update/", title: "批量更新项目出价", docsUrl: "https://open.oceanengine.com/labels/7/docs/1858174581876745", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建项目
   *
   * POST /open_api/v3.0/project/create/
   * @see https://open.oceanengine.com/labels/7/docs/1740868093375503
   */
  "ProjectCreateV30": { method: "POST", path: "/open_api/v3.0/project/create/", title: "创建项目", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740868093375503", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新深层项目出价
   *
   * POST /open_api/v3.0/project/deep_cpa_bid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1858175093068809
   */
  "ProjectDeepCpaBidUpdateV30": { method: "POST", path: "/open_api/v3.0/project/deep_cpa_bid/update/", title: "批量更新深层项目出价", docsUrl: "https://open.oceanengine.com/labels/7/docs/1858175093068809", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量删除项目
   *
   * POST /open_api/v3.0/project/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1740944781036608
   */
  "ProjectDeleteV30": { method: "POST", path: "/open_api/v3.0/project/delete/", title: "批量删除项目", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740944781036608", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取项目列表
   *
   * GET /open_api/v3.0/project/list/
   * @see https://open.oceanengine.com/labels/7/docs/1740937147595776
   */
  "ProjectListV30": { method: "GET", path: "/open_api/v3.0/project/list/", title: "获取项目列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740937147595776", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ProjectNameUpdateV30
   *
   * POST /open_api/v3.0/project_name/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fproject_name%2Fupdate%2F
   */
  "ProjectNameUpdateV30": { method: "POST", path: "/open_api/v3.0/project_name/update/", title: "ProjectNameUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fproject_name%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量修改项目ROI系数
   *
   * POST /open_api/v3.0/project/roigoal/update/
   * @see https://open.oceanengine.com/labels/7/docs/1794208148473859
   */
  "ProjectRoigoalUpdateV30": { method: "POST", path: "/open_api/v3.0/project/roigoal/update/", title: "批量修改项目ROI系数", docsUrl: "https://open.oceanengine.com/labels/7/docs/1794208148473859", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目投放时间
   *
   * POST /open_api/v3.0/project/schedule_time/update/
   * @see https://open.oceanengine.com/labels/7/docs/1779258970970184
   */
  "ProjectScheduleTimeUpdateV30": { method: "POST", path: "/open_api/v3.0/project/schedule_time/update/", title: "批量更新项目投放时间", docsUrl: "https://open.oceanengine.com/labels/7/docs/1779258970970184", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目状态
   *
   * POST /open_api/v3.0/project/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1740941413906432
   */
  "ProjectStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/project/status/update/", title: "批量更新项目状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740941413906432", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新项目
   *
   * POST /open_api/v3.0/project/update/
   * @see https://open.oceanengine.com/labels/7/docs/1740936504522831
   */
  "ProjectUpdateV30": { method: "POST", path: "/open_api/v3.0/project/update/", title: "更新项目", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740936504522831", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目投放时段
   *
   * POST /open_api/v3.0/project/week_schedule/update/
   * @see https://open.oceanengine.com/labels/7/docs/1779260654537728
   */
  "ProjectWeekScheduleUpdateV30": { method: "POST", path: "/open_api/v3.0/project/week_schedule/update/", title: "批量更新项目投放时段", docsUrl: "https://open.oceanengine.com/labels/7/docs/1779260654537728", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionAidGetV30
   *
   * GET /open_api/v3.0/promotion/aid/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Faid%2Fget%2F
   */
  "PromotionAidGetV30": { method: "GET", path: "/open_api/v3.0/promotion/aid/get/", title: "PromotionAidGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Faid%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * PromotionAutoGenerateConfigCreateV30
   *
   * POST /open_api/v3.0/promotion/auto_generate_config/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fauto_generate_config%2Fcreate%2F
   */
  "PromotionAutoGenerateConfigCreateV30": { method: "POST", path: "/open_api/v3.0/promotion/auto_generate_config/create/", title: "PromotionAutoGenerateConfigCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fauto_generate_config%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionAutoGenerateConfigGetV30
   *
   * GET /open_api/v3.0/promotion/auto_generate_config/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fauto_generate_config%2Fget%2F
   */
  "PromotionAutoGenerateConfigGetV30": { method: "GET", path: "/open_api/v3.0/promotion/auto_generate_config/get/", title: "PromotionAutoGenerateConfigGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fauto_generate_config%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量更新营销出价
   *
   * POST /open_api/v3.0/promotion/bid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1741031138305028
   */
  "PromotionBidUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/bid/update/", title: "批量更新营销出价", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741031138305028", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新营销预算
   *
   * POST /open_api/v3.0/promotion/budget/update/
   * @see https://open.oceanengine.com/labels/7/docs/1741030872454148
   */
  "PromotionBudgetUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/budget/update/", title: "批量更新营销预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741030872454148", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量获取营销成本保障状态
   *
   * GET /open_api/v3.0/promotion/cost_protect_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1755355980850191
   */
  "PromotionCostProtectStatusGetV30": { method: "GET", path: "/open_api/v3.0/promotion/cost_protect_status/get/", title: "批量获取营销成本保障状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755355980850191", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建单元
   *
   * POST /open_api/v3.0/promotion/create/
   * @see https://open.oceanengine.com/labels/7/docs/1740946299496459
   */
  "PromotionCreateV30": { method: "POST", path: "/open_api/v3.0/promotion/create/", title: "创建单元", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740946299496459", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量修改深度出价
   *
   * POST /open_api/v3.0/promotion/deepbid/update/
   * @see https://open.oceanengine.com/labels/7/docs/1755355890182159
   */
  "PromotionDeepbidUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/deepbid/update/", title: "批量修改深度出价", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755355890182159", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量删除营销
   *
   * POST /open_api/v3.0/promotion/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1741031376580675
   */
  "PromotionDeleteV30": { method: "POST", path: "/open_api/v3.0/promotion/delete/", title: "批量删除营销", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741031376580675", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionEasyKeepDeliverySwitchUpdateV30
   *
   * POST /open_api/v3.0/promotion_easy/keep_delivery_switch/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_easy%2Fkeep_delivery_switch%2Fupdate%2F
   */
  "PromotionEasyKeepDeliverySwitchUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion_easy/keep_delivery_switch/update/", title: "PromotionEasyKeepDeliverySwitchUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_easy%2Fkeep_delivery_switch%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionEasyUpdateV30
   *
   * POST /open_api/v3.0/promotion_easy/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_easy%2Fupdate%2F
   */
  "PromotionEasyUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion_easy/update/", title: "PromotionEasyUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_easy%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取单元列表
   *
   * GET /open_api/v3.0/promotion/list/
   * @see https://open.oceanengine.com/labels/7/docs/1741028841006095
   */
  "PromotionListV30": { method: "GET", path: "/open_api/v3.0/promotion/list/", title: "获取单元列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741028841006095", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 删除营销下素材
   *
   * POST /open_api/v3.0/promotion/material/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1797183832412380
   */
  "PromotionMaterialDeleteV30": { method: "POST", path: "/open_api/v3.0/promotion/material/delete/", title: "删除营销下素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1797183832412380", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionNameUpdateV30
   *
   * POST /open_api/v3.0/promotion_name/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_name%2Fupdate%2F
   */
  "PromotionNameUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion_name/update/", title: "PromotionNameUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_name%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionNewcustomerCreateV30
   *
   * POST /open_api/v3.0/promotion_newcustomer/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_newcustomer%2Fcreate%2F
   */
  "PromotionNewcustomerCreateV30": { method: "POST", path: "/open_api/v3.0/promotion_newcustomer/create/", title: "PromotionNewcustomerCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_newcustomer%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionNewcustomerTypeGetV30
   *
   * GET /open_api/v3.0/promotion_newcustomer_type/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_newcustomer_type%2Fget%2F
   */
  "PromotionNewcustomerTypeGetV30": { method: "GET", path: "/open_api/v3.0/promotion_newcustomer_type/get/", title: "PromotionNewcustomerTypeGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion_newcustomer_type%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量获取广告审核建议
   *
   * GET /open_api/v3.0/promotion/reject_reason/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741031528693771
   */
  "PromotionRejectReasonGetV30": { method: "GET", path: "/open_api/v3.0/promotion/reject_reason/get/", title: "批量获取广告审核建议", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741031528693771", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量更新营销投放时段
   *
   * POST /open_api/v3.0/promotion/schedule_time/update/
   * @see https://open.oceanengine.com/labels/7/docs/1769912402184199
   */
  "PromotionScheduleTimeUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/schedule_time/update/", title: "批量更新营销投放时段", docsUrl: "https://open.oceanengine.com/labels/7/docs/1769912402184199", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * PromotionShopInfoUpdateV30
   *
   * POST /open_api/v3.0/promotion/shop_info/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fshop_info%2Fupdate%2F
   */
  "PromotionShopInfoUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/shop_info/update/", title: "PromotionShopInfoUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fpromotion%2Fshop_info%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新营销启用状态
   *
   * POST /open_api/v3.0/promotion/status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1741031308559364
   */
  "PromotionStatusUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/status/update/", title: "批量更新营销启用状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741031308559364", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改单元
   *
   * POST /open_api/v3.0/promotion/update/
   * @see https://open.oceanengine.com/labels/7/docs/1740952287987719
   */
  "PromotionUpdateV30": { method: "POST", path: "/open_api/v3.0/promotion/update/", title: "修改单元", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740952287987719", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取账户余额
   *
   * GET /open_api/v1.0/qianchuan/account/balance/get/
   * @see https://open.oceanengine.com/labels/12/docs/1783322092364800
   */
  "QianchuanAccountBalanceGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/account/balance/get/", title: "获取账户余额", docsUrl: "https://open.oceanengine.com/labels/12/docs/1783322092364800", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户日预算
   *
   * GET /open_api/v1.0/qianchuan/account/budget/get/
   * @see https://open.oceanengine.com/labels/12/docs/1777635660375047
   */
  "QianchuanAccountBudgetGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/account/budget/get/", title: "获取账户日预算", docsUrl: "https://open.oceanengine.com/labels/12/docs/1777635660375047", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新账户日预算
   *
   * POST /open_api/v1.0/qianchuan/account/budget/update/
   * @see https://open.oceanengine.com/labels/12/docs/1777637543919619
   */
  "QianchuanAccountBudgetUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/account/budget/update/", title: "更新账户日预算", docsUrl: "https://open.oceanengine.com/labels/12/docs/1777637543919619", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdBidUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/bid/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fbid%2Fupdate%2F
   */
  "QianchuanAdBidUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/bid/update/", title: "QianchuanAdBidUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fbid%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdBudgetUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/budget/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fbudget%2Fupdate%2F
   */
  "QianchuanAdBudgetUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/budget/update/", title: "QianchuanAdBudgetUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fbudget%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取计划成本保障状态
   *
   * GET /open_api/v1.0/qianchuan/ad/compensate_status/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778157489597440
   */
  "QianchuanAdCompensateStatusGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/compensate_status/get/", title: "获取计划成本保障状态", docsUrl: "https://open.oceanengine.com/labels/12/docs/1778157489597440", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdCreateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fcreate%2F
   */
  "QianchuanAdCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/create/", title: "QianchuanAdCreateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdDetailGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fdetail%2Fget%2F
   */
  "QianchuanAdDetailGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/detail/get/", title: "QianchuanAdDetailGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fdetail%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fget%2F
   */
  "QianchuanAdGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/get/", title: "QianchuanAdGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdKeywordsGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/keywords/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fkeywords%2Fget%2F
   */
  "QianchuanAdKeywordsGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/keywords/get/", title: "QianchuanAdKeywordsGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fkeywords%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取计划学习期状态
   *
   * GET /open_api/v1.0/qianchuan/ad/learing_status/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778158222500876
   */
  "QianchuanAdLearingStatusGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/learing_status/get/", title: "获取计划学习期状态", docsUrl: "https://open.oceanengine.com/labels/12/docs/1778158222500876", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdMaterialDeleteV10
   *
   * POST /open_api/v1.0/qianchuan/ad/material/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fdelete%2F
   */
  "QianchuanAdMaterialDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/material/delete/", title: "QianchuanAdMaterialDeleteV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fget%2F
   */
  "QianchuanAdMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/material/get/", title: "QianchuanAdMaterialGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdMaterialSuggestionV10
   *
   * GET /open_api/v1.0/qianchuan/ad/material/suggestion/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fsuggestion%2F
   */
  "QianchuanAdMaterialSuggestionV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/material/suggestion/", title: "QianchuanAdMaterialSuggestionV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fmaterial%2Fsuggestion%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 全域计划升级为乘方计划
   *
   * POST /open_api/v1.0/qianchuan/ad/overall_marketing/update/
   * @see https://open.oceanengine.com/labels/12/docs/1866761206705753
   */
  "QianchuanAdOverallMarketingUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/overall_marketing/update/", title: "全域计划升级为乘方计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1866761206705753", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取在投计划配额信息
   *
   * GET /open_api/v1.0/qianchuan/ad/quota/get/
   * @see https://open.oceanengine.com/labels/12/docs/1731182713398283
   */
  "QianchuanAdQuotaGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/quota/get/", title: "获取在投计划配额信息", docsUrl: "https://open.oceanengine.com/labels/12/docs/1731182713398283", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdRecommendKeywordsGetV10
   *
   * GET /open_api/v1.0/qianchuan/ad/recommend_keywords/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Frecommend_keywords%2Fget%2F
   */
  "QianchuanAdRecommendKeywordsGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/recommend_keywords/get/", title: "QianchuanAdRecommendKeywordsGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Frecommend_keywords%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdRegionUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/region/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fregion%2Fupdate%2F
   */
  "QianchuanAdRegionUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/region/update/", title: "QianchuanAdRegionUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fregion%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdRejectReasonV10
   *
   * GET /open_api/v1.0/qianchuan/ad/reject_reason/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Freject_reason%2F
   */
  "QianchuanAdRejectReasonV10": { method: "GET", path: "/open_api/v1.0/qianchuan/ad/reject_reason/", title: "QianchuanAdRejectReasonV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Freject_reason%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdScheduleDateUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/schedule_date/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fschedule_date%2Fupdate%2F
   */
  "QianchuanAdScheduleDateUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/schedule_date/update/", title: "QianchuanAdScheduleDateUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fschedule_date%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdScheduleFixedRangeUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fschedule_fixed_range%2Fupdate%2F
   */
  "QianchuanAdScheduleFixedRangeUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/", title: "QianchuanAdScheduleFixedRangeUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fschedule_fixed_range%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdStatusUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/status/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fstatus%2Fupdate%2F
   */
  "QianchuanAdStatusUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/status/update/", title: "QianchuanAdStatusUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fstatus%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAdUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/ad/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fupdate%2F
   */
  "QianchuanAdUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/ad/update/", title: "QianchuanAdUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fad%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取千川账户类型
   *
   * GET /open_api/v1.0/qianchuan/advertiser/type/get/
   * @see https://open.oceanengine.com/labels/12/docs/1754620816918532
   */
  "QianchuanAdvertiserTypeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/advertiser/type/get/", title: "获取千川账户类型", docsUrl: "https://open.oceanengine.com/labels/12/docs/1754620816918532", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAudienceCreateByFileV10
   *
   * POST /open_api/v1.0/qianchuan/audience/create_by_file/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fcreate_by_file%2F
   */
  "QianchuanAudienceCreateByFileV10": { method: "POST", path: "/open_api/v1.0/qianchuan/audience/create_by_file/", title: "QianchuanAudienceCreateByFileV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fcreate_by_file%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAudienceDeleteV10
   *
   * POST /open_api/v1.0/qianchuan/audience/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fdelete%2F
   */
  "QianchuanAudienceDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/audience/delete/", title: "QianchuanAudienceDeleteV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAudienceFilePartUploadV10
   *
   * POST /open_api/v1.0/qianchuan/audience_file/part_upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_file%2Fpart_upload%2F
   */
  "QianchuanAudienceFilePartUploadV10": { method: "POST", path: "/open_api/v1.0/qianchuan/audience_file/part_upload/", title: "QianchuanAudienceFilePartUploadV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_file%2Fpart_upload%2F", kind: "multipart", responseKind: "json", fileFields: ["file"] },
  /**
   * QianchuanAudienceFileUploadV10
   *
   * POST /open_api/v1.0/qianchuan/audience_file/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_file%2Fupload%2F
   */
  "QianchuanAudienceFileUploadV10": { method: "POST", path: "/open_api/v1.0/qianchuan/audience_file/upload/", title: "QianchuanAudienceFileUploadV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_file%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["file"] },
  /**
   * QianchuanAudienceGroupGetV10
   *
   * GET /open_api/v1.0/qianchuan/audience_group/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_group%2Fget%2F
   */
  "QianchuanAudienceGroupGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/audience_group/get/", title: "QianchuanAudienceGroupGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_group%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAudienceListGetV10
   *
   * GET /open_api/v1.0/qianchuan/audience_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_list%2Fget%2F
   */
  "QianchuanAudienceListGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/audience_list/get/", title: "QianchuanAudienceListGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience_list%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAudiencePushV10
   *
   * POST /open_api/v1.0/qianchuan/audience/push/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fpush%2F
   */
  "QianchuanAudiencePushV10": { method: "POST", path: "/open_api/v1.0/qianchuan/audience/push/", title: "QianchuanAudiencePushV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faudience%2Fpush%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取千川账户下抖音号授权列表
   *
   * GET /open_api/v1.0/qianchuan/aweme_auth_list/get/
   * @see https://open.oceanengine.com/labels/12/docs/1804287262648346
   */
  "QianchuanAwemeAuthListGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme_auth_list/get/", title: "获取千川账户下抖音号授权列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804287262648346", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeAuthorizedGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fauthorized%2Fget%2F
   */
  "QianchuanAwemeAuthorizedGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/authorized/get/", title: "QianchuanAwemeAuthorizedGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fauthorized%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeEstimateProfitV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/estimate_profit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Festimate_profit%2F
   */
  "QianchuanAwemeEstimateProfitV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/estimate_profit/", title: "QianchuanAwemeEstimateProfitV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Festimate_profit%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeInterestActionInterestKeywordV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Finterest_action%2Finterest%2Fkeyword%2F
   */
  "QianchuanAwemeInterestActionInterestKeywordV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/", title: "QianchuanAwemeInterestActionInterestKeywordV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Finterest_action%2Finterest%2Fkeyword%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderBudgetAddV10
   *
   * POST /open_api/v1.0/qianchuan/aweme/order/budget/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fbudget%2Fadd%2F
   */
  "QianchuanAwemeOrderBudgetAddV10": { method: "POST", path: "/open_api/v1.0/qianchuan/aweme/order/budget/add/", title: "QianchuanAwemeOrderBudgetAddV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fbudget%2Fadd%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderCreateV10
   *
   * POST /open_api/v1.0/qianchuan/aweme/order/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fcreate%2F
   */
  "QianchuanAwemeOrderCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/aweme/order/create/", title: "QianchuanAwemeOrderCreateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderDetailGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fdetail%2Fget%2F
   */
  "QianchuanAwemeOrderDetailGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/order/detail/get/", title: "QianchuanAwemeOrderDetailGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fdetail%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fget%2F
   */
  "QianchuanAwemeOrderGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/order/get/", title: "QianchuanAwemeOrderGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderQuotaGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/quota/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fquota%2Fget%2F
   */
  "QianchuanAwemeOrderQuotaGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/order/quota/get/", title: "QianchuanAwemeOrderQuotaGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fquota%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderSuggestDeliveryTimeGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fsuggest%2Fdelivery_time%2Fget%2F
   */
  "QianchuanAwemeOrderSuggestDeliveryTimeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/", title: "QianchuanAwemeOrderSuggestDeliveryTimeGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fsuggest%2Fdelivery_time%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeOrderTerminateV10
   *
   * POST /open_api/v1.0/qianchuan/aweme/order/terminate/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fterminate%2F
   */
  "QianchuanAwemeOrderTerminateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/aweme/order/terminate/", title: "QianchuanAwemeOrderTerminateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Forder%2Fterminate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeProductAvailableGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/product/available/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fproduct%2Favailable%2Fget%2F
   */
  "QianchuanAwemeProductAvailableGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/product/available/get/", title: "QianchuanAwemeProductAvailableGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fproduct%2Favailable%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeReportOrderGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/report/order/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Freport%2Forder%2Fget%2F
   */
  "QianchuanAwemeReportOrderGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/report/order/get/", title: "QianchuanAwemeReportOrderGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Freport%2Forder%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeSuggestBidV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/suggest_bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fsuggest_bid%2F
   */
  "QianchuanAwemeSuggestBidV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/suggest_bid/", title: "QianchuanAwemeSuggestBidV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fsuggest_bid%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeSuggestRoiGoalV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/suggest/roi/goal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fsuggest%2Froi%2Fgoal%2F
   */
  "QianchuanAwemeSuggestRoiGoalV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/suggest/roi/goal/", title: "QianchuanAwemeSuggestRoiGoalV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fsuggest%2Froi%2Fgoal%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域订单下素材列表
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/
   * @see https://open.oceanengine.com/labels/12/docs/1844129152007108
   */
  "QianchuanAwemeUniPromotionAdMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/", title: "获取随心推全域订单下素材列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1844129152007108", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域投放效果预估
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/
   * @see https://open.oceanengine.com/labels/12/docs/1834804152700935
   */
  "QianchuanAwemeUniPromotionEstimateEffectV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/", title: "获取随心推全域投放效果预估", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834804152700935", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 追加随心推全域订单预算
   *
   * POST /open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/
   * @see https://open.oceanengine.com/labels/12/docs/1836629305445384
   */
  "QianchuanAwemeUniPromotionOrderBudgetAddV10": { method: "POST", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/", title: "追加随心推全域订单预算", docsUrl: "https://open.oceanengine.com/labels/12/docs/1836629305445384", kind: "json", responseKind: "json", fileFields: [] },
  /**
   *  创建随心推全域订单
   *
   * POST /open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/
   * @see https://open.oceanengine.com/labels/12/docs/1834781332397449
   */
  "QianchuanAwemeUniPromotionOrderCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/", title: " 创建随心推全域订单", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834781332397449", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域订单详情
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/detail/
   * @see https://open.oceanengine.com/labels/12/docs/1834798638887948
   */
  "QianchuanAwemeUniPromotionOrderDetailV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/detail/", title: "获取随心推全域订单详情", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834798638887948", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域订单列表
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/
   * @see https://open.oceanengine.com/labels/12/docs/1834797699331148
   */
  "QianchuanAwemeUniPromotionOrderGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/", title: "获取随心推全域订单列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834797699331148", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域订单数据
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/
   * @see https://open.oceanengine.com/labels/12/docs/1844129628513816
   */
  "QianchuanAwemeUniPromotionOrderReportGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/", title: "获取随心推全域订单数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1844129628513816", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域续费建议延长时长
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/suggest/delivery_time/get/
   * @see https://open.oceanengine.com/labels/12/docs/1836628495717452
   */
  "QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/order/suggest/delivery_time/get/", title: "获取随心推全域续费建议延长时长", docsUrl: "https://open.oceanengine.com/labels/12/docs/1836628495717452", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域账户数据
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/report/
   * @see https://open.oceanengine.com/labels/12/docs/1834802422645760
   */
  "QianchuanAwemeUniPromotionReportV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/report/", title: "获取随心推全域账户数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834802422645760", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域手动出价计划建议ROI
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/
   * @see https://open.oceanengine.com/labels/12/docs/1834804305062915
   */
  "QianchuanAwemeUniPromotionSuggestRoiV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/", title: "获取随心推全域手动出价计划建议ROI", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834804305062915", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取随心推全域投放建议
   *
   * GET /open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/
   * @see https://open.oceanengine.com/labels/12/docs/1834803969912960
   */
  "QianchuanAwemeUniPromotionSuggestV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/", title: "获取随心推全域投放建议", docsUrl: "https://open.oceanengine.com/labels/12/docs/1834803969912960", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanAwemeVideoGetV10
   *
   * GET /open_api/v1.0/qianchuan/aweme/video/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fvideo%2Fget%2F
   */
  "QianchuanAwemeVideoGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/aweme/video/get/", title: "QianchuanAwemeVideoGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Faweme%2Fvideo%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanBatchCampaignStatusUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/batch_campaign_status/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbatch_campaign_status%2Fupdate%2F
   */
  "QianchuanBatchCampaignStatusUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/batch_campaign_status/update/", title: "QianchuanBatchCampaignStatusUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbatch_campaign_status%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanBrandAuthorizedGetV10
   *
   * GET /open_api/v1.0/qianchuan/brand/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Fauthorized%2Fget%2F
   */
  "QianchuanBrandAuthorizedGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/brand/authorized/get/", title: "QianchuanBrandAuthorizedGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Fauthorized%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanBrandReportAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/brand/report/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Freport%2Fad%2Fget%2F
   */
  "QianchuanBrandReportAdGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/brand/report/ad/get/", title: "QianchuanBrandReportAdGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Freport%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanBrandReportAdvertiserGetV10
   *
   * GET /open_api/v1.0/qianchuan/brand/report/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Freport%2Fadvertiser%2Fget%2F
   */
  "QianchuanBrandReportAdvertiserGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/brand/report/advertiser/get/", title: "QianchuanBrandReportAdvertiserGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fbrand%2Freport%2Fadvertiser%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanCampaignCreateV10
   *
   * POST /open_api/v1.0/qianchuan/campaign/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign%2Fcreate%2F
   */
  "QianchuanCampaignCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/campaign/create/", title: "QianchuanCampaignCreateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanCampaignListGetV10
   *
   * GET /open_api/v1.0/qianchuan/campaign_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign_list%2Fget%2F
   */
  "QianchuanCampaignListGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/campaign_list/get/", title: "QianchuanCampaignListGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign_list%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanCampaignUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign%2Fupdate%2F
   */
  "QianchuanCampaignUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/campaign/update/", title: "QianchuanCampaignUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fcampaign%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取抖音号下的图文
   *
   * GET /open_api/v1.0/qianchuan/carousel/aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778159412906125
   */
  "QianchuanCarouselAwemeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/carousel/aweme/get/", title: "获取抖音号下的图文", docsUrl: "https://open.oceanengine.com/labels/12/docs/1778159412906125", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川素材库图文
   *
   * GET /open_api/v1.0/qianchuan/carousel/get/
   * @see https://open.oceanengine.com/labels/12/docs/1778159308092424
   */
  "QianchuanCarouselGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/carousel/get/", title: "获取千川素材库图文", docsUrl: "https://open.oceanengine.com/labels/12/docs/1778159308092424", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanDmpAudiencesGetV10
   *
   * GET /open_api/v1.0/qianchuan/dmp/audiences/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fdmp%2Faudiences%2Fget%2F
   */
  "QianchuanDmpAudiencesGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/dmp/audiences/get/", title: "QianchuanDmpAudiencesGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fdmp%2Faudiences%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanEstimateEffectV10
   *
   * GET /open_api/v1.0/qianchuan/estimate/effect/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Festimate%2Feffect%2F
   */
  "QianchuanEstimateEffectV10": { method: "GET", path: "/open_api/v1.0/qianchuan/estimate/effect/", title: "QianchuanEstimateEffectV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Festimate%2Feffect%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量删除图片素材
   *
   * POST /open_api/v1.0/qianchuan/file/image/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1763394443752520
   */
  "QianchuanFileImageDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/file/image/delete/", title: "批量删除图片素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763394443752520", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取抖音号下的视频
   *
   * GET /open_api/v1.0/qianchuan/file/video/aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1697466774382599
   */
  "QianchuanFileVideoAwemeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/file/video/aweme/get/", title: "获取抖音号下的视频", docsUrl: "https://open.oceanengine.com/labels/12/docs/1697466774382599", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量删除视频素材
   *
   * POST /open_api/v1.0/qianchuan/file/video/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1763394567366656
   */
  "QianchuanFileVideoDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/file/video/delete/", title: "批量删除视频素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763394567366656", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取低效素材
   *
   * GET /open_api/v1.0/qianchuan/file/video/efficiency/get/
   * @see https://open.oceanengine.com/labels/12/docs/1754607188087808
   */
  "QianchuanFileVideoEfficiencyGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/file/video/efficiency/get/", title: "获取低效素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1754607188087808", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取首发素材
   *
   * GET /open_api/v1.0/qianchuan/file/video/original/get/
   * @see https://open.oceanengine.com/labels/12/docs/1754607275560015
   */
  "QianchuanFileVideoOriginalGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/file/video/original/get/", title: "获取首发素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1754607275560015", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取财务流水信息
   *
   * GET /open_api/v1.0/qianchuan/finance/detail/get/
   * @see https://open.oceanengine.com/labels/12/docs/1725977659075599
   */
  "QianchuanFinanceDetailGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/finance/detail/get/", title: "获取财务流水信息", docsUrl: "https://open.oceanengine.com/labels/12/docs/1725977659075599", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户钱包信息
   *
   * GET /open_api/v1.0/qianchuan/finance/wallet/get/
   * @see https://open.oceanengine.com/labels/12/docs/1725977604633615
   */
  "QianchuanFinanceWalletGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/finance/wallet/get/", title: "获取账户钱包信息", docsUrl: "https://open.oceanengine.com/labels/12/docs/1725977604633615", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川素材库图片
   *
   * GET /open_api/v1.0/qianchuan/image/get/
   * @see https://open.oceanengine.com/labels/12/docs/1739304248623182
   */
  "QianchuanImageGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/image/get/", title: "获取千川素材库图片", docsUrl: "https://open.oceanengine.com/labels/12/docs/1739304248623182", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanKeywordCheckV10
   *
   * POST /open_api/v1.0/qianchuan/keyword/check/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fkeyword%2Fcheck%2F
   */
  "QianchuanKeywordCheckV10": { method: "POST", path: "/open_api/v1.0/qianchuan/keyword/check/", title: "QianchuanKeywordCheckV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fkeyword%2Fcheck%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanKeywordPackageGetV10
   *
   * GET /open_api/v1.0/qianchuan/keyword_package/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fkeyword_package%2Fget%2F
   */
  "QianchuanKeywordPackageGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/keyword_package/get/", title: "QianchuanKeywordPackageGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fkeyword_package%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanLqAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/lq_ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Flq_ad%2Fget%2F
   */
  "QianchuanLqAdGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/lq_ad/get/", title: "QianchuanLqAdGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Flq_ad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanMaterialAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/material/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fmaterial%2Fad%2Fget%2F
   */
  "QianchuanMaterialAdGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/material/ad/get/", title: "QianchuanMaterialAdGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fmaterial%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fmaterial%2Fget%2F
   */
  "QianchuanMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/material/get/", title: "QianchuanMaterialGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fmaterial%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取定向包列表
   *
   * GET /open_api/v1.0/qianchuan/orientation_package/get/
   * @see https://open.oceanengine.com/labels/12/docs/1741765278816256
   */
  "QianchuanOrientationPackageGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/orientation_package/get/", title: "获取定向包列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1741765278816256", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 删除乘方商品乘方下的抖音号
   *
   * POST /open_api/v1.0/qianchuan/overall_aweme/aweme/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1866762361388233
   */
  "QianchuanOverallAwemeAwemeDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/overall_aweme/aweme/delete/", title: "删除乘方商品乘方下的抖音号", docsUrl: "https://open.oceanengine.com/labels/12/docs/1866762361388233", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 乘方商品-抖音号选择列表
   *
   * GET /open_api/v1.0/qianchuan/overall_aweme/list/
   * @see https://open.oceanengine.com/labels/12/docs/1870942264507403
   */
  "QianchuanOverallAwemeListV10": { method: "GET", path: "/open_api/v1.0/qianchuan/overall_aweme/list/", title: "乘方商品-抖音号选择列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1870942264507403", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 新建乘方直播投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_live/create/
   * @see https://open.oceanengine.com/labels/12/docs/1871954016096256
   */
  "QianchuanOverallLiveCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/overall_live/create/", title: "新建乘方直播投放计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1871954016096256", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 编辑乘方直播投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_live/update/
   * @see https://open.oceanengine.com/labels/12/docs/1872486209713225
   */
  "QianchuanOverallLiveUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/overall_live/update/", title: "编辑乘方直播投放计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1872486209713225", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取直播-乘方星选素材可投商品
   *
   * GET /open_api/v1.0/qianchuan/overall_star_product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1872489111561108
   */
  "QianchuanOverallStarProductGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/overall_star_product/get/", title: "获取直播-乘方星选素材可投商品", docsUrl: "https://open.oceanengine.com/labels/12/docs/1872489111561108", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取乘方投放控成本计划建议支付ROI目标
   *
   * GET /open_api/v1.0/qianchuan/overall/suggest/roi/get/
   * @see https://open.oceanengine.com/labels/12/docs/1871505298758800
   */
  "QianchuanOverallSuggestRoiGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/overall/suggest/roi/get/", title: "获取乘方投放控成本计划建议支付ROI目标", docsUrl: "https://open.oceanengine.com/labels/12/docs/1871505298758800", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 新建乘方商品投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_video/create/
   * @see https://open.oceanengine.com/labels/12/docs/1872485038037385
   */
  "QianchuanOverallVideoCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/overall_video/create/", title: "新建乘方商品投放计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1872485038037385", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 编辑乘方商品投放计划
   *
   * POST /open_api/v1.0/qianchuan/overall_video/update/
   * @see https://open.oceanengine.com/labels/12/docs/1872485645689866
   */
  "QianchuanOverallVideoUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/overall_video/update/", title: "编辑乘方商品投放计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1872485645689866", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanProductAvailableGetV10
   *
   * GET /open_api/v1.0/qianchuan/product/available/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fproduct%2Favailable%2Fget%2F
   */
  "QianchuanProductAvailableGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/product/available/get/", title: "QianchuanProductAvailableGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fproduct%2Favailable%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取直播大屏可用指标和维度
   *
   * GET /open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807424096554059
   */
  "QianchuanQianchuanReportTodayLiveRoomConfigGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/", title: "获取直播大屏可用指标和维度", docsUrl: "https://open.oceanengine.com/labels/12/docs/1807424096554059", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanQianchuanVideoStarGetV10
   *
   * GET /open_api/v1.0/qianchuan/qianchuan/video/star/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fqianchuan%2Fvideo%2Fstar%2Fget%2F
   */
  "QianchuanQianchuanVideoStarGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/qianchuan/video/star/get/", title: "QianchuanQianchuanVideoStarGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fqianchuan%2Fvideo%2Fstar%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportAdGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fad%2Fget%2F
   */
  "QianchuanReportAdGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/ad/get/", title: "QianchuanReportAdGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportAdMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/ad/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fad%2Fmaterial%2Fget%2F
   */
  "QianchuanReportAdMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/ad/material/get/", title: "QianchuanReportAdMaterialGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fad%2Fmaterial%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportAdvertiserGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fadvertiser%2Fget%2F
   */
  "QianchuanReportAdvertiserGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/advertiser/get/", title: "QianchuanReportAdvertiserGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fadvertiser%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川投放账户维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/all_promotion/get/
   * @see https://open.oceanengine.com/labels/12/docs/1865675229008199
   */
  "QianchuanReportAllPromotionGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/all_promotion/get/", title: "获取千川投放账户维度数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1865675229008199", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportCustomConfigGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/custom/config/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fcustom%2Fconfig%2Fget%2F
   */
  "QianchuanReportCustomConfigGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/custom/config/get/", title: "QianchuanReportCustomConfigGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fcustom%2Fconfig%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportCustomGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/custom/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fcustom%2Fget%2F
   */
  "QianchuanReportCustomGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/custom/get/", title: "QianchuanReportCustomGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fcustom%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取今日直播数据
   *
   * GET /open_api/v1.0/qianchuan/report/live/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763406675800128
   */
  "QianchuanReportLiveGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/live/get/", title: "获取今日直播数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763406675800128", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取长周期订单明细可用指标和维度
   *
   * GET /open_api/v1.0/qianchuan/report/long_transfer/order/config/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807348855527500
   */
  "QianchuanReportLongTransferOrderConfigGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/long_transfer/order/config/get/", title: "获取长周期订单明细可用指标和维度", docsUrl: "https://open.oceanengine.com/labels/12/docs/1807348855527500", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取长周期订单数据
   *
   * GET /open_api/v1.0/qianchuan/report/long_transfer/order/data/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807348907403268
   */
  "QianchuanReportLongTransferOrderDataGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/long_transfer/order/data/get/", title: "获取长周期订单数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1807348907403268", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportLongTransferOrderGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/long_transfer/order/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Flong_transfer%2Forder%2Fget%2F
   */
  "QianchuanReportLongTransferOrderGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/long_transfer/order/get/", title: "QianchuanReportLongTransferOrderGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Flong_transfer%2Forder%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportMaterialGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fmaterial%2Fget%2F
   */
  "QianchuanReportMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/material/get/", title: "QianchuanReportMaterialGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fmaterial%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportSearchWordGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/search_word/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fsearch_word%2Fget%2F
   */
  "QianchuanReportSearchWordGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/search_word/get/", title: "QianchuanReportSearchWordGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fsearch_word%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportTodayLiveGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/today_live/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Ftoday_live%2Fget%2F
   */
  "QianchuanReportTodayLiveGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/today_live/get/", title: "QianchuanReportTodayLiveGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Ftoday_live%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportTodayLiveRoomConfigGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/today_live/room/config/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Ftoday_live%2Froom%2Fconfig%2Fget%2F
   */
  "QianchuanReportTodayLiveRoomConfigGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/today_live/room/config/get/", title: "QianchuanReportTodayLiveRoomConfigGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Ftoday_live%2Froom%2Fconfig%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取直播大屏数据
   *
   * GET /open_api/v1.0/qianchuan/report/today_live/room/data/get/
   * @see https://open.oceanengine.com/labels/12/docs/1807433722476556
   */
  "QianchuanReportTodayLiveRoomDataGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/today_live/room/data/get/", title: "获取直播大屏数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1807433722476556", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川数据报表-可用维度和指标
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/config/get/
   * @see https://open.oceanengine.com/labels/12/docs/1823296280645708
   */
  "QianchuanReportUniPromotionConfigGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/uni_promotion/config/get/", title: "获取千川数据报表-可用维度和指标", docsUrl: "https://open.oceanengine.com/labels/12/docs/1823296280645708", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川数据报表数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/data/get/
   * @see https://open.oceanengine.com/labels/12/docs/1823297941140569
   */
  "QianchuanReportUniPromotionDataGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/uni_promotion/data/get/", title: "获取千川数据报表数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1823297941140569", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取全域投放抖音号维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/
   * @see https://open.oceanengine.com/labels/12/docs/1786236031165513
   */
  "QianchuanReportUniPromotionDimensionDataAuthorGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/", title: "获取全域投放抖音号维度数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1786236031165513", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取全域投放直播间维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/
   * @see https://open.oceanengine.com/labels/12/docs/1786235355858947
   */
  "QianchuanReportUniPromotionDimensionDataRoomGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/", title: "获取全域投放直播间维度数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1786235355858947", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取全域投放账户维度数据
   *
   * GET /open_api/v1.0/qianchuan/report/uni_promotion/get/
   * @see https://open.oceanengine.com/labels/12/docs/1770675169146947
   */
  "QianchuanReportUniPromotionGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/uni_promotion/get/", title: "获取全域投放账户维度数据", docsUrl: "https://open.oceanengine.com/labels/12/docs/1770675169146947", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanReportVideoUserLoseGetV10
   *
   * GET /open_api/v1.0/qianchuan/report/video_user_lose/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fvideo_user_lose%2Fget%2F
   */
  "QianchuanReportVideoUserLoseGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/report/video_user_lose/get/", title: "QianchuanReportVideoUserLoseGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Freport%2Fvideo_user_lose%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanRoiGoalUpdateV10
   *
   * POST /open_api/v1.0/qianchuan/roi/goal/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Froi%2Fgoal%2Fupdate%2F
   */
  "QianchuanRoiGoalUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/roi/goal/update/", title: "QianchuanRoiGoalUpdateV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Froi%2Fgoal%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取店铺账户关联的投放账户列表
   *
   * GET /open_api/v1.0/qianchuan/shop/advertiser/list/
   * @see https://open.oceanengine.com/labels/12/docs/1697467801357320
   */
  "QianchuanShopAdvertiserListV10": { method: "GET", path: "/open_api/v1.0/qianchuan/shop/advertiser/list/", title: "获取店铺账户关联的投放账户列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1697467801357320", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanShopAuthorizedGetV10
   *
   * GET /open_api/v1.0/qianchuan/shop/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fshop%2Fauthorized%2Fget%2F
   */
  "QianchuanShopAuthorizedGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/shop/authorized/get/", title: "QianchuanShopAuthorizedGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fshop%2Fauthorized%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取店铺账户信息
   *
   * GET /open_api/v1.0/qianchuan/shop/get/
   * @see https://open.oceanengine.com/labels/12/docs/1697467920617483
   */
  "QianchuanShopGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/shop/get/", title: "获取店铺账户信息", docsUrl: "https://open.oceanengine.com/labels/12/docs/1697467920617483", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanSuggestBidV10
   *
   * GET /open_api/v1.0/qianchuan/suggest_bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest_bid%2F
   */
  "QianchuanSuggestBidV10": { method: "GET", path: "/open_api/v1.0/qianchuan/suggest_bid/", title: "QianchuanSuggestBidV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest_bid%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanSuggestBudgetV10
   *
   * GET /open_api/v1.0/qianchuan/suggest/budget/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest%2Fbudget%2F
   */
  "QianchuanSuggestBudgetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/suggest/budget/", title: "QianchuanSuggestBudgetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest%2Fbudget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanSuggestRoiGoalV10
   *
   * GET /open_api/v1.0/qianchuan/suggest/roi/goal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest%2Froi%2Fgoal%2F
   */
  "QianchuanSuggestRoiGoalV10": { method: "GET", path: "/open_api/v1.0/qianchuan/suggest/roi/goal/", title: "QianchuanSuggestRoiGoalV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Fsuggest%2Froi%2Fgoal%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取直播间详情
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/detail/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763409499649031
   */
  "QianchuanTodayLiveRoomDetailGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/today_live/room/detail/get/", title: "获取直播间详情", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763409499649031", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取直播间流量表现
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/flow_performance/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763409732890699
   */
  "QianchuanTodayLiveRoomFlowPerformanceGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/today_live/room/flow_performance/get/", title: "获取直播间流量表现", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763409732890699", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取今日直播间列表
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763408973310988
   */
  "QianchuanTodayLiveRoomGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/today_live/room/get/", title: "获取今日直播间列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763408973310988", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取直播间商品列表
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/product_list/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763410225446924
   */
  "QianchuanTodayLiveRoomProductListGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/today_live/room/product_list/get/", title: "获取直播间商品列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763410225446924", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取直播间用户洞察
   *
   * GET /open_api/v1.0/qianchuan/today_live/room/user/get/
   * @see https://open.oceanengine.com/labels/12/docs/1763409882431488
   */
  "QianchuanTodayLiveRoomUserGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/today_live/room/user/get/", title: "获取直播间用户洞察", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763409882431488", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanTodayLiveV2RoomUserGetV10
   *
   * GET /open_api/v1.0/qianchuan/today_live_v2/room/user/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftoday_live_v2%2Froom%2Fuser%2Fget%2F
   */
  "QianchuanTodayLiveV2RoomUserGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/today_live_v2/room/user/get/", title: "QianchuanTodayLiveV2RoomUserGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftoday_live_v2%2Froom%2Fuser%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 智能优惠券白名单
   *
   * GET /open_api/v1.0/qianchuan/tools/allow_coupon/
   * @see https://open.oceanengine.com/labels/12/docs/1771275948928071
   */
  "QianchuanToolsAllowCouponV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/allow_coupon/", title: "智能优惠券白名单", docsUrl: "https://open.oceanengine.com/labels/12/docs/1771275948928071", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 抖音号授权
   *
   * POST /open_api/v1.0/qianchuan/tools/aweme_auth/
   * @see https://open.oceanengine.com/labels/12/docs/1771376926549067
   */
  "QianchuanToolsAwemeAuthV10": { method: "POST", path: "/open_api/v1.0/qianchuan/tools/aweme_auth/", title: "抖音号授权", docsUrl: "https://open.oceanengine.com/labels/12/docs/1771376926549067", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取定向受众预估
   *
   * GET /open_api/v1.0/qianchuan/tools/estimate_audience/
   * @see https://open.oceanengine.com/labels/12/docs/1757702925729792
   */
  "QianchuanToolsEstimateAudienceV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/estimate_audience/", title: "获取定向受众预估", docsUrl: "https://open.oceanengine.com/labels/12/docs/1757702925729792", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取白名单能力
   *
   * GET /open_api/v1.0/qianchuan/tools/gray/
   * @see https://open.oceanengine.com/labels/12/docs/1763675121890315
   */
  "QianchuanToolsGrayV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/gray/", title: "获取白名单能力", docsUrl: "https://open.oceanengine.com/labels/12/docs/1763675121890315", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川操作日志
   *
   * GET /open_api/v1.0/qianchuan/tools/log_search/
   * @see https://open.oceanengine.com/labels/12/docs/1832813828161028
   */
  "QianchuanToolsLogSearchV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/log_search/", title: "获取千川操作日志", docsUrl: "https://open.oceanengine.com/labels/12/docs/1832813828161028", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 店铺新客定向授权
   *
   * POST /open_api/v1.0/qianchuan/tools/shop_auth/
   * @see https://open.oceanengine.com/labels/12/docs/1775801912689664
   */
  "QianchuanToolsShopAuthV10": { method: "POST", path: "/open_api/v1.0/qianchuan/tools/shop_auth/", title: "店铺新客定向授权", docsUrl: "https://open.oceanengine.com/labels/12/docs/1775801912689664", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanToolsSmartBoostAdBoostReportGetV10
   *
   * GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Freport%2Fget%2F
   */
  "QianchuanToolsSmartBoostAdBoostReportGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/", title: "QianchuanToolsSmartBoostAdBoostReportGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Freport%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanToolsSmartBoostAdBoostSetV10
   *
   * POST /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fset%2F
   */
  "QianchuanToolsSmartBoostAdBoostSetV10": { method: "POST", path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/", title: "QianchuanToolsSmartBoostAdBoostSetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fset%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * QianchuanToolsSmartBoostAdBoostStatusGetV10
   *
   * GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fstatus%2Fget%2F
   */
  "QianchuanToolsSmartBoostAdBoostStatusGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/", title: "QianchuanToolsSmartBoostAdBoostStatusGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fstatus%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanToolsSmartBoostAdBoostVersionGetV10
   *
   * GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fversion%2Fget%2F
   */
  "QianchuanToolsSmartBoostAdBoostVersionGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/", title: "QianchuanToolsSmartBoostAdBoostVersionGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftools%2Fsmart_boost%2Fad_boost%2Fversion%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QianchuanTrackUrlCheckV10
   *
   * GET /open_api/v1.0/qianchuan/track_url/check/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftrack_url%2Fcheck%2F
   */
  "QianchuanTrackUrlCheckV10": { method: "GET", path: "/open_api/v1.0/qianchuan/track_url/check/", title: "QianchuanTrackUrlCheckV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fqianchuan%2Ftrack_url%2Fcheck%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 新建全域投放计划
   *
   * POST /open_api/v1.0/qianchuan/uni_aweme/ad/create/
   * @see https://open.oceanengine.com/labels/12/docs/1804360384937988
   */
  "QianchuanUniAwemeAdCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_aweme/ad/create/", title: "新建全域投放计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804360384937988", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 编辑全域投放计划
   *
   * POST /open_api/v1.0/qianchuan/uni_aweme/ad/update/
   * @see https://open.oceanengine.com/labels/12/docs/1804361214022656
   */
  "QianchuanUniAwemeAdUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_aweme/ad/update/", title: "编辑全域投放计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804361214022656", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取乘方&全域投放抖音号列表
   *
   * GET /open_api/v1.0/qianchuan/uni_aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/12/docs/1771196800070656
   */
  "QianchuanUniAwemeAuthorizedGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_aweme/authorized/get/", title: "获取乘方&全域投放抖音号列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1771196800070656", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取全域建议预算
   *
   * GET /open_api/v1.0/qianchuan/uni_aweme/suggest/budget/
   * @see https://open.oceanengine.com/labels/12/docs/1828257556490251
   */
  "QianchuanUniAwemeSuggestBudgetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/budget/", title: "获取全域建议预算", docsUrl: "https://open.oceanengine.com/labels/12/docs/1828257556490251", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取全域投放控成本计划建议支付ROI目标
   *
   * GET /open_api/v1.0/qianchuan/uni_aweme/suggest/roi/
   * @see https://open.oceanengine.com/labels/12/docs/1851652691167244
   */
  "QianchuanUniAwemeSuggestRoiV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_aweme/suggest/roi/", title: "获取全域投放控成本计划建议支付ROI目标", docsUrl: "https://open.oceanengine.com/labels/12/docs/1851652691167244", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新乘方&全域投放计划预算
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841395352172800
   */
  "QianchuanUniPromotionAdBudgetUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/", title: "更新乘方&全域投放计划预算", docsUrl: "https://open.oceanengine.com/labels/12/docs/1841395352172800", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改调控任务预算
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848753215997963
   */
  "QianchuanUniPromotionAdControlTaskBudgetUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/", title: "修改调控任务预算", docsUrl: "https://open.oceanengine.com/labels/12/docs/1848753215997963", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建调控任务
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/
   * @see https://open.oceanengine.com/labels/12/docs/1825827435645963
   */
  "QianchuanUniPromotionAdControlTaskCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/", title: "创建调控任务", docsUrl: "https://open.oceanengine.com/labels/12/docs/1825827435645963", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改调控任务投放时长
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848754090824768
   */
  "QianchuanUniPromotionAdControlTaskDurationUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/", title: "修改调控任务投放时长", docsUrl: "https://open.oceanengine.com/labels/12/docs/1848754090824768", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取调控任务列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/
   * @see https://open.oceanengine.com/labels/12/docs/1824940765838411
   */
  "QianchuanUniPromotionAdControlTaskListV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/", title: "获取调控任务列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1824940765838411", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建直播-一键控量计划
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/
   * @see https://open.oceanengine.com/labels/12/docs/1848756884121668
   */
  "QianchuanUniPromotionAdControlTaskSmartControlCreateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/", title: "创建直播-一键控量计划", docsUrl: "https://open.oceanengine.com/labels/12/docs/1848756884121668", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改直播-一键控量计划调控状态
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848757011743171
   */
  "QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/", title: "修改直播-一键控量计划调控状态", docsUrl: "https://open.oceanengine.com/labels/12/docs/1848757011743171", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改任务调控状态
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/
   * @see https://open.oceanengine.com/labels/12/docs/1825827367287017
   */
  "QianchuanUniPromotionAdControlTaskStatusUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/", title: "修改任务调控状态", docsUrl: "https://open.oceanengine.com/labels/12/docs/1825827367287017", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改调控任务设置
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/
   * @see https://open.oceanengine.com/labels/12/docs/1848759062499338
   */
  "QianchuanUniPromotionAdControlTaskUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/", title: "修改调控任务设置", docsUrl: "https://open.oceanengine.com/labels/12/docs/1848759062499338", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取全域&乘方投放计划详情
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/detail/
   * @see https://open.oceanengine.com/labels/12/docs/1804362305657868
   */
  "QianchuanUniPromotionAdDetailV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/detail/", title: "获取全域&乘方投放计划详情", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804362305657868", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 添加乘方&全域投放计划下素材
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/material/add/
   * @see https://open.oceanengine.com/labels/12/docs/1835232814536707
   */
  "QianchuanUniPromotionAdMaterialAddV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/add/", title: "添加乘方&全域投放计划下素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1835232814536707", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除全域投放计划下素材
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1804363891396633
   */
  "QianchuanUniPromotionAdMaterialDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/", title: "删除全域投放计划下素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804363891396633", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取全域投放计划下素材
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/material/get/
   * @see https://open.oceanengine.com/labels/12/docs/1804363488115850
   */
  "QianchuanUniPromotionAdMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/material/get/", title: "获取全域投放计划下素材", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804363488115850", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新商品投放计划名称
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/name/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841393870503040
   */
  "QianchuanUniPromotionAdNameUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/name/update/", title: "更新商品投放计划名称", docsUrl: "https://open.oceanengine.com/labels/12/docs/1841393870503040", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除乘方&全域计划下商品
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/
   * @see https://open.oceanengine.com/labels/12/docs/1831614660975370
   */
  "QianchuanUniPromotionAdProductDeleteV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/", title: "删除乘方&全域计划下商品", docsUrl: "https://open.oceanengine.com/labels/12/docs/1831614660975370", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取全域计划下商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1832185836349447
   */
  "QianchuanUniPromotionAdProductGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/product/get/", title: "获取全域计划下商品列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1832185836349447", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新乘方&全域投放控成本计划支付ROI目标
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841394087572811
   */
  "QianchuanUniPromotionAdRoi2GoalUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/", title: "更新乘方&全域投放控成本计划支付ROI目标", docsUrl: "https://open.oceanengine.com/labels/12/docs/1841394087572811", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新乘方&全域投放计划投放时间
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/
   * @see https://open.oceanengine.com/labels/12/docs/1841394454066176
   */
  "QianchuanUniPromotionAdScheduleDateUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/", title: "更新乘方&全域投放计划投放时间", docsUrl: "https://open.oceanengine.com/labels/12/docs/1841394454066176", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更改乘方&全域投放计划状态
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/ad/status/update/
   * @see https://open.oceanengine.com/labels/12/docs/1804364027501580
   */
  "QianchuanUniPromotionAdStatusUpdateV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/status/update/", title: "更改乘方&全域投放计划状态", docsUrl: "https://open.oceanengine.com/labels/12/docs/1804364027501580", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取千川投放计划审核建议
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/
   * @see https://open.oceanengine.com/labels/12/docs/1832628101966183
   */
  "QianchuanUniPromotionAdSuggestionV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/", title: "获取千川投放计划审核建议", docsUrl: "https://open.oceanengine.com/labels/12/docs/1832628101966183", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 全域授权初始化
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/auth/init/
   * @see https://open.oceanengine.com/labels/12/docs/1840937462771724
   */
  "QianchuanUniPromotionAuthInitV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/auth/init/", title: "全域授权初始化", docsUrl: "https://open.oceanengine.com/labels/12/docs/1840937462771724", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取商品全域可授权店铺列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/
   * @see https://open.oceanengine.com/labels/12/docs/1844495918167047
   */
  "QianchuanUniPromotionAuthorizableShopListV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/", title: "获取商品全域可授权店铺列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1844495918167047", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 客户申请全域投放授权
   *
   * POST /open_api/v1.0/qianchuan/uni_promotion/authorization/apply/
   * @see https://open.oceanengine.com/labels/12/docs/1844496211119108
   */
  "QianchuanUniPromotionAuthorizationApplyV10": { method: "POST", path: "/open_api/v1.0/qianchuan/uni_promotion/authorization/apply/", title: "客户申请全域投放授权", docsUrl: "https://open.oceanengine.com/labels/12/docs/1844496211119108", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取投放计划可排除抖音视频/图文列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/block_material/get/
   * @see https://open.oceanengine.com/labels/12/docs/1825215820766292
   */
  "QianchuanUniPromotionBlockMaterialGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/block_material/get/", title: "获取投放计划可排除抖音视频/图文列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1825215820766292", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 千川全域计划变更消息
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/list/
   * @see https://open.oceanengine.com/labels/12/docs/1829975277306058
   */
  "QianchuanUniPromotionListV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/list/", title: "千川全域计划变更消息", docsUrl: "https://open.oceanengine.com/labels/12/docs/1829975277306058", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 乘方&全域-达人/机构获取可选商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1825216033296576
   */
  "QianchuanUniPromotionProductAwemeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/", title: "乘方&全域-达人/机构获取可选商品列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1825216033296576", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 全域&乘方 商家可选商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1825216221095947
   */
  "QianchuanUniPromotionProductGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/product/get/", title: "全域&乘方 商家可选商品列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1825216221095947", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取全店托管计划下商品列表
   *
   * GET /open_api/v1.0/qianchuan/uni_promotion/promshop/product/get/
   * @see https://open.oceanengine.com/labels/12/docs/1870062108453964
   */
  "QianchuanUniPromotionPromshopProductGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/uni_promotion/promshop/product/get/", title: "获取全店托管计划下商品列表", docsUrl: "https://open.oceanengine.com/labels/12/docs/1870062108453964", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取抖音主页视频对应素材库视频
   *
   * GET /open_api/v1.0/qianchuan/video/by_aweme/get/
   * @see https://open.oceanengine.com/labels/12/docs/1814938748938240
   */
  "QianchuanVideoByAwemeGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/video/by_aweme/get/", title: "获取抖音主页视频对应素材库视频", docsUrl: "https://open.oceanengine.com/labels/12/docs/1814938748938240", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取千川素材库视频
   *
   * GET /open_api/v1.0/qianchuan/video/get/
   * @see https://open.oceanengine.com/labels/12/docs/1739309912219663
   */
  "QianchuanVideoGetV10": { method: "GET", path: "/open_api/v1.0/qianchuan/video/get/", title: "获取千川素材库视频", docsUrl: "https://open.oceanengine.com/labels/12/docs/1739309912219663", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 排期—查询业务实体ID
   *
   * GET /open_api/2/query/booking/business_entity_id/get/
   * @see https://open.oceanengine.com/labels/7/docs/1805443291577572
   */
  "QueryBookingBusinessEntityIdGetV2": { method: "GET", path: "/open_api/2/query/booking/business_entity_id/get/", title: "排期—查询业务实体ID", docsUrl: "https://open.oceanengine.com/labels/7/docs/1805443291577572", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QueryInvoiceDetailSelfV2
   *
   * GET /open_api/2/query/invoice_detail/self/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_detail%2Fself%2F
   */
  "QueryInvoiceDetailSelfV2": { method: "GET", path: "/open_api/2/query/invoice_detail/self/", title: "QueryInvoiceDetailSelfV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_detail%2Fself%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QueryInvoiceDetailV2
   *
   * GET /open_api/2/query/invoice_detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_detail%2F
   */
  "QueryInvoiceDetailV2": { method: "GET", path: "/open_api/2/query/invoice_detail/", title: "QueryInvoiceDetailV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_detail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QueryInvoiceElectronicUrlSelfV2
   *
   * GET /open_api/2/query/invoice_electronic_url/self/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_electronic_url%2Fself%2F
   */
  "QueryInvoiceElectronicUrlSelfV2": { method: "GET", path: "/open_api/2/query/invoice_electronic_url/self/", title: "QueryInvoiceElectronicUrlSelfV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_electronic_url%2Fself%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 开票-获取电子发票文件接口（代理商版）
   *
   * GET /open_api/2/query/invoice_electronic_url/
   * @see https://open.oceanengine.com/labels/7/docs/1806786410732555
   */
  "QueryInvoiceElectronicUrlV2": { method: "GET", path: "/open_api/2/query/invoice_electronic_url/", title: "开票-获取电子发票文件接口（代理商版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1806786410732555", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QueryInvoiceSelfV2
   *
   * GET /open_api/2/query/invoice/self/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice%2Fself%2F
   */
  "QueryInvoiceSelfV2": { method: "GET", path: "/open_api/2/query/invoice/self/", title: "QueryInvoiceSelfV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice%2Fself%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QueryInvoiceTaxV2
   *
   * GET /open_api/2/query/invoice_tax/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_tax%2F
   */
  "QueryInvoiceTaxV2": { method: "GET", path: "/open_api/2/query/invoice_tax/", title: "QueryInvoiceTaxV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fquery%2Finvoice_tax%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 开票-查询开票单数据（代理商版）
   *
   * GET /open_api/2/query/invoice/
   * @see https://open.oceanengine.com/labels/7/docs/1784608912700420
   */
  "QueryInvoiceV2": { method: "GET", path: "/open_api/2/query/invoice/", title: "开票-查询开票单数据（代理商版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1784608912700420", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询项目信息
   *
   * GET /open_api/2/query/project/
   * @see https://open.oceanengine.com/labels/7/docs/1784608638831619
   */
  "QueryProjectV2": { method: "GET", path: "/open_api/2/query/project/", title: "查询项目信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1784608638831619", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * QueryProjectV30
   *
   * GET /open_api/v3.0/query/project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fquery%2Fproject%2F
   */
  "QueryProjectV30": { method: "GET", path: "/open_api/v3.0/query/project/", title: "QueryProjectV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fquery%2Fproject%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 返点-查询返点核算流水
   *
   * GET /open_api/2/query/rebate_accounting_info/
   * @see https://open.oceanengine.com/labels/7/docs/1800830404289562
   */
  "QueryRebateAccountingInfoV2": { method: "GET", path: "/open_api/2/query/rebate_accounting_info/", title: "返点-查询返点核算流水", docsUrl: "https://open.oceanengine.com/labels/7/docs/1800830404289562", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 返点-查询返点流水
   *
   * GET /open_api/2/query/rebate_balance/
   * @see https://open.oceanengine.com/labels/7/docs/1800831263778816
   */
  "QueryRebateBalanceV2": { method: "GET", path: "/open_api/2/query/rebate_balance/", title: "返点-查询返点流水", docsUrl: "https://open.oceanengine.com/labels/7/docs/1800831263778816", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询项目关联结算单信息
   *
   * GET /open_api/2/query/statement/
   * @see https://open.oceanengine.com/labels/7/docs/1783699726068811
   */
  "QueryStatementV2": { method: "GET", path: "/open_api/2/query/statement/", title: "查询项目关联结算单信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1783699726068811", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取推荐使用的视频素材
   *
   * POST /open_api/v3.0/recommend/video/list/
   * @see https://open.oceanengine.com/labels/7/docs/1806800041632778
   */
  "RecommendVideoListV30": { method: "POST", path: "/open_api/v3.0/recommend/video/list/", title: "获取推荐使用的视频素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1806800041632778", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建采纳「拒审素材修复建议」任务
   *
   * POST /open_api/v3.0/reject_material/ai_repair_accept_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1827080076923659
   */
  "RejectMaterialAiRepairAcceptTaskCreateV30": { method: "POST", path: "/open_api/v3.0/reject_material/ai_repair_accept_task/create/", title: "创建采纳「拒审素材修复建议」任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1827080076923659", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取采纳素材修复建议任务结果
   *
   * GET /open_api/v3.0/reject_material/ai_repair_accept_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1825916274554634
   */
  "RejectMaterialAiRepairAcceptTaskListV30": { method: "GET", path: "/open_api/v3.0/reject_material/ai_repair_accept_task/list/", title: "获取采纳素材修复建议任务结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1825916274554634", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 根据mid查询同主体账户下修复建议列表 
   *
   * GET /open_api/v3.0/reject_material/ai_repair/cross_account/get/
   * @see https://open.oceanengine.com/labels/7/docs/1828071966256128
   */
  "RejectMaterialAiRepairCrossAccountGetV30": { method: "GET", path: "/open_api/v3.0/reject_material/ai_repair/cross_account/get/", title: "根据mid查询同主体账户下修复建议列表\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1828071966256128", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取拒审素材修复建议
   *
   * GET /open_api/v3.0/reject_material/ai_repair/get/
   * @see https://open.oceanengine.com/labels/7/docs/1827079072367946
   */
  "RejectMaterialAiRepairGetV30": { method: "GET", path: "/open_api/v3.0/reject_material/ai_repair/get/", title: "获取拒审素材修复建议", docsUrl: "https://open.oceanengine.com/labels/7/docs/1827079072367946", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * RemittanceCodeListGetV30
   *
   * GET /open_api/v3.0/remittance_code/list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fremittance_code%2Flist%2Fget%2F
   */
  "RemittanceCodeListGetV30": { method: "GET", path: "/open_api/v3.0/remittance_code/list/get/", title: "RemittanceCodeListGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fremittance_code%2Flist%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询汇款码列表信息
   *
   * GET /open_api/v3.0/remittance_code/list/
   * @see https://open.oceanengine.com/labels/7/docs/1834443721254920
   */
  "RemittanceCodeListV30": { method: "GET", path: "/open_api/v3.0/remittance_code/list/", title: "查询汇款码列表信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1834443721254920", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAdGetV2
   *
   * GET /open_api/2/report/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fad%2Fget%2F
   */
  "ReportAdGetV2": { method: "GET", path: "/open_api/2/report/ad/get/", title: "ReportAdGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAdvertiserGetV2
   *
   * GET /open_api/2/report/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fadvertiser%2Fget%2F
   */
  "ReportAdvertiserGetV2": { method: "GET", path: "/open_api/2/report/advertiser/get/", title: "ReportAdvertiserGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fadvertiser%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAgentGetV2V2
   *
   * GET /open_api/2/report/agent/get_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fagent%2Fget_v2%2F
   */
  "ReportAgentGetV2V2": { method: "GET", path: "/open_api/2/report/agent/get_v2/", title: "ReportAgentGetV2V2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fagent%2Fget_v2%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAudienceAgeV2
   *
   * GET /open_api/2/report/audience/age/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fage%2F
   */
  "ReportAudienceAgeV2": { method: "GET", path: "/open_api/2/report/audience/age/", title: "ReportAudienceAgeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fage%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAudienceAwemeListV2
   *
   * GET /open_api/2/report/audience/aweme/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Faweme%2Flist%2F
   */
  "ReportAudienceAwemeListV2": { method: "GET", path: "/open_api/2/report/audience/aweme/list/", title: "ReportAudienceAwemeListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Faweme%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAudienceCityV2
   *
   * GET /open_api/2/report/audience/city/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fcity%2F
   */
  "ReportAudienceCityV2": { method: "GET", path: "/open_api/2/report/audience/city/", title: "ReportAudienceCityV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fcity%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAudienceGenderV2
   *
   * GET /open_api/2/report/audience/gender/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fgender%2F
   */
  "ReportAudienceGenderV2": { method: "GET", path: "/open_api/2/report/audience/gender/", title: "ReportAudienceGenderV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fgender%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAudienceInterestActionListV2
   *
   * GET /open_api/2/report/audience/interest_action/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Finterest_action%2Flist%2F
   */
  "ReportAudienceInterestActionListV2": { method: "GET", path: "/open_api/2/report/audience/interest_action/list/", title: "ReportAudienceInterestActionListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Finterest_action%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportAudienceProvinceV2
   *
   * GET /open_api/2/report/audience/province/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fprovince%2F
   */
  "ReportAudienceProvinceV2": { method: "GET", path: "/open_api/2/report/audience/province/", title: "ReportAudienceProvinceV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Faudience%2Fprovince%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBrandAdGetV30
   *
   * GET /open_api/v3.0/report/brand/ad/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fad%2Fget%2F
   */
  "ReportBrandAdGetV30": { method: "GET", path: "/open_api/v3.0/report/brand/ad/get/", title: "ReportBrandAdGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fad%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBrandAdvertiserGetV30
   *
   * GET /open_api/v3.0/report/brand/advertiser/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fadvertiser%2Fget%2F
   */
  "ReportBrandAdvertiserGetV30": { method: "GET", path: "/open_api/v3.0/report/brand/advertiser/get/", title: "ReportBrandAdvertiserGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fadvertiser%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBrandAgentDataV30
   *
   * GET /open_api/v3.0/report/brand/agent/data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fagent%2Fdata%2F
   */
  "ReportBrandAgentDataV30": { method: "GET", path: "/open_api/v3.0/report/brand/agent/data/", title: "ReportBrandAgentDataV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fagent%2Fdata%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBrandCampaignGetV30
   *
   * GET /open_api/v3.0/report/brand/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fcampaign%2Fget%2F
   */
  "ReportBrandCampaignGetV30": { method: "GET", path: "/open_api/v3.0/report/brand/campaign/get/", title: "ReportBrandCampaignGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fcampaign%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBrandCreativeGetV30
   *
   * GET /open_api/v3.0/report/brand/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fcreative%2Fget%2F
   */
  "ReportBrandCreativeGetV30": { method: "GET", path: "/open_api/v3.0/report/brand/creative/get/", title: "ReportBrandCreativeGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fcreative%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBrandDataV30
   *
   * GET /open_api/v3.0/report/brand/data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fdata%2F
   */
  "ReportBrandDataV30": { method: "GET", path: "/open_api/v3.0/report/brand/data/", title: "ReportBrandDataV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbrand%2Fdata%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportBusinessPlatformStardeliveryTaskVideoDataGetV30
   *
   * GET /open_api/v3.0/report/business_platform/stardelivery/task_video_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbusiness_platform%2Fstardelivery%2Ftask_video_data%2Fget%2F
   */
  "ReportBusinessPlatformStardeliveryTaskVideoDataGetV30": { method: "GET", path: "/open_api/v3.0/report/business_platform/stardelivery/task_video_data/get/", title: "ReportBusinessPlatformStardeliveryTaskVideoDataGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fbusiness_platform%2Fstardelivery%2Ftask_video_data%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportCampaignGetV2
   *
   * GET /open_api/2/report/campaign/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fcampaign%2Fget%2F
   */
  "ReportCampaignGetV2": { method: "GET", path: "/open_api/2/report/campaign/get/", title: "ReportCampaignGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fcampaign%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportCreativeGetV2
   *
   * GET /open_api/2/report/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fcreative%2Fget%2F
   */
  "ReportCreativeGetV2": { method: "GET", path: "/open_api/2/report/creative/get/", title: "ReportCreativeGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fcreative%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportCustomAsyncTaskCreateV30
   *
   * POST /open_api/v3.0/report/custom/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fcreate%2F
   */
  "ReportCustomAsyncTaskCreateV30": { method: "POST", path: "/open_api/v3.0/report/custom/async_task/create/", title: "ReportCustomAsyncTaskCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ReportCustomAsyncTaskDownloadV30
   *
   * GET /open_api/v3.0/report/custom/async_task/download/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fdownload%2F
   */
  "ReportCustomAsyncTaskDownloadV30": { method: "GET", path: "/open_api/v3.0/report/custom/async_task/download/", title: "ReportCustomAsyncTaskDownloadV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fdownload%2F", kind: "query", responseKind: "bytes", fileFields: [] },
  /**
   * ReportCustomAsyncTaskGetV30
   *
   * GET /open_api/v3.0/report/custom/async_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fget%2F
   */
  "ReportCustomAsyncTaskGetV30": { method: "GET", path: "/open_api/v3.0/report/custom/async_task/get/", title: "ReportCustomAsyncTaskGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fasync_task%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取自定义报表可用指标和维度
   *
   * GET /open_api/v3.0/report/custom/config/get/
   * @see https://open.oceanengine.com/labels/7/docs/1755261744248832
   */
  "ReportCustomConfigGetV30": { method: "GET", path: "/open_api/v3.0/report/custom/config/get/", title: "获取自定义报表可用指标和维度", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755261744248832", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportCustomCreativeGetV30
   *
   * GET /open_api/v3.0/report/custom/creative/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fcreative%2Fget%2F
   */
  "ReportCustomCreativeGetV30": { method: "GET", path: "/open_api/v3.0/report/custom/creative/get/", title: "ReportCustomCreativeGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fcustom%2Fcreative%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 自定义报表
   *
   * GET /open_api/v3.0/report/custom/get/
   * @see https://open.oceanengine.com/labels/7/docs/1741387668314126
   */
  "ReportCustomGetV30": { method: "GET", path: "/open_api/v3.0/report/custom/get/", title: "自定义报表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1741387668314126", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportJointGrowthCusGetV30
   *
   * GET /open_api/v3.0/report/joint_growth_cus/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fjoint_growth_cus%2Fget%2F
   */
  "ReportJointGrowthCusGetV30": { method: "GET", path: "/open_api/v3.0/report/joint_growth_cus/get/", title: "ReportJointGrowthCusGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fjoint_growth_cus%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportJointGrowthGetV30
   *
   * GET /open_api/v3.0/report/joint_growth/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fjoint_growth%2Fget%2F
   */
  "ReportJointGrowthGetV30": { method: "GET", path: "/open_api/v3.0/report/joint_growth/get/", title: "ReportJointGrowthGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fjoint_growth%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 直播间分析报表【新】
   *
   * GET /open_api/v3.0/report/live_room/analysis/get/
   * @see https://open.oceanengine.com/labels/7/docs/1844117189152843
   */
  "ReportLiveRoomAnalysisGetV30": { method: "GET", path: "/open_api/v3.0/report/live_room/analysis/get/", title: "直播间分析报表【新】", docsUrl: "https://open.oceanengine.com/labels/7/docs/1844117189152843", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportProductAsyncTaskDownloadV30
   *
   * GET /open_api/v3.0/report/product/async_task/download/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct%2Fasync_task%2Fdownload%2F
   */
  "ReportProductAsyncTaskDownloadV30": { method: "GET", path: "/open_api/v3.0/report/product/async_task/download/", title: "ReportProductAsyncTaskDownloadV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct%2Fasync_task%2Fdownload%2F", kind: "query", responseKind: "bytes", fileFields: [] },
  /**
   * ReportProductAsyncTaskGetV30
   *
   * POST /open_api/v3.0/report/product/async_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct%2Fasync_task%2Fget%2F
   */
  "ReportProductAsyncTaskGetV30": { method: "POST", path: "/open_api/v3.0/report/product/async_task/get/", title: "ReportProductAsyncTaskGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct%2Fasync_task%2Fget%2F", kind: "json", responseKind: "bytes", fileFields: [] },
  /**
   * ReportProductDailyAsyncTaskCreateV30
   *
   * POST /open_api/v3.0/report/product_daily/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct_daily%2Fasync_task%2Fcreate%2F
   */
  "ReportProductDailyAsyncTaskCreateV30": { method: "POST", path: "/open_api/v3.0/report/product_daily/async_task/create/", title: "ReportProductDailyAsyncTaskCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct_daily%2Fasync_task%2Fcreate%2F", kind: "json", responseKind: "bytes", fileFields: [] },
  /**
   * ReportProductHourlyAsyncTaskCreateV30
   *
   * POST /open_api/v3.0/report/product_hourly/async_task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct_hourly%2Fasync_task%2Fcreate%2F
   */
  "ReportProductHourlyAsyncTaskCreateV30": { method: "POST", path: "/open_api/v3.0/report/product_hourly/async_task/create/", title: "ReportProductHourlyAsyncTaskCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fproduct_hourly%2Fasync_task%2Fcreate%2F", kind: "json", responseKind: "bytes", fileFields: [] },
  /**
   * 直播间受众分析报表【新】
   *
   * GET /open_api/v3.0/report/report/live_room/audience/portrait/get/
   * @see https://open.oceanengine.com/labels/7/docs/1844124823356825
   */
  "ReportReportLiveRoomAudiencePortraitGetV30": { method: "GET", path: "/open_api/v3.0/report/report/live_room/audience/portrait/get/", title: "直播间受众分析报表【新】", docsUrl: "https://open.oceanengine.com/labels/7/docs/1844124823356825", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取穿山甲客户分流联合实验数据
   *
   * GET /open_api/2/report/rta_cus_exp/get/
   * @see https://open.oceanengine.com/labels/7/docs/1789418134779913
   */
  "ReportRtaCusExpGetV2": { method: "GET", path: "/open_api/2/report/rta_cus_exp/get/", title: "获取穿山甲客户分流联合实验数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1789418134779913", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取穿山甲渠道RTA联合实验数据
   *
   * GET /open_api/2/report/rta_exp/get/
   * @see https://open.oceanengine.com/labels/7/docs/1738683217044484
   */
  "ReportRtaExpGetV2": { method: "GET", path: "/open_api/2/report/rta_exp/get/", title: "获取穿山甲渠道RTA联合实验数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738683217044484", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取站内媒体RTA联合实验数据（分天t+1）
   *
   * GET /open_api/v3.0/report/rta_exp_local_daily/get/
   * @see https://open.oceanengine.com/labels/7/docs/1743460024243204
   */
  "ReportRtaExpLocalDailyGetV30": { method: "GET", path: "/open_api/v3.0/report/rta_exp_local_daily/get/", title: "获取站内媒体RTA联合实验数据（分天t+1）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1743460024243204", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取站内媒体RTA联合实验数据（分时t+5）
   *
   * GET /open_api/v3.0/report/rta_exp_local_hourly/get/
   * @see https://open.oceanengine.com/labels/7/docs/1743392244103246
   */
  "ReportRtaExpLocalHourlyGetV30": { method: "GET", path: "/open_api/v3.0/report/rta_exp_local_hourly/get/", title: "获取站内媒体RTA联合实验数据（分时t+5）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1743392244103246", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportRtaGetV2
   *
   * GET /open_api/2/report/rta/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Frta%2Fget%2F
   */
  "ReportRtaGetV2": { method: "GET", path: "/open_api/2/report/rta/get/", title: "ReportRtaGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Frta%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportRubeexGetV2
   *
   * GET /open_api/2/report/rubeex/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Frubeex%2Fget%2F
   */
  "ReportRubeexGetV2": { method: "GET", path: "/open_api/2/report/rubeex/get/", title: "ReportRubeexGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Frubeex%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 橙子建站落地页数据
   *
   * GET /open_api/2/report/site/page/
   * @see https://open.oceanengine.com/labels/7/docs/1696710565390348
   */
  "ReportSitePageV2": { method: "GET", path: "/open_api/2/report/site/page/", title: "橙子建站落地页数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710565390348", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportStardeliveryTaskDataGetV30
   *
   * GET /open_api/v3.0/report/stardelivery/task_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fstardelivery%2Ftask_data%2Fget%2F
   */
  "ReportStardeliveryTaskDataGetV30": { method: "GET", path: "/open_api/v3.0/report/stardelivery/task_data/get/", title: "ReportStardeliveryTaskDataGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fstardelivery%2Ftask_data%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportStardeliveryTaskVideoDataGetV30
   *
   * GET /open_api/v3.0/report/stardelivery/task_video_data/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fstardelivery%2Ftask_video_data%2Fget%2F
   */
  "ReportStardeliveryTaskVideoDataGetV30": { method: "GET", path: "/open_api/v3.0/report/stardelivery/task_video_data/get/", title: "ReportStardeliveryTaskVideoDataGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Freport%2Fstardelivery%2Ftask_video_data%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ReportVideoFrameGetV2
   *
   * GET /open_api/2/report/video/frame/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fvideo%2Fframe%2Fget%2F
   */
  "ReportVideoFrameGetV2": { method: "GET", path: "/open_api/2/report/video/frame/get/", title: "ReportVideoFrameGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Freport%2Fvideo%2Fframe%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ScheduleResultGetV30
   *
   * GET /open_api/v3.0/schedule/result/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fschedule%2Fresult%2Fget%2F
   */
  "ScheduleResultGetV30": { method: "GET", path: "/open_api/v3.0/schedule/result/get/", title: "ScheduleResultGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fschedule%2Fresult%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * SecurityAuditResultsV30
   *
   * GET /open_api/v3.0/security/audit_results/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Faudit_results%2F
   */
  "SecurityAuditResultsV30": { method: "GET", path: "/open_api/v3.0/security/audit_results/", title: "SecurityAuditResultsV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Faudit_results%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * SecurityCreateAppealV30
   *
   * POST /open_api/v3.0/security/create_appeal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fcreate_appeal%2F
   */
  "SecurityCreateAppealV30": { method: "POST", path: "/open_api/v3.0/security/create_appeal/", title: "SecurityCreateAppealV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fcreate_appeal%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * SecurityGetConsultResultV30
   *
   * GET /open_api/v3.0/security/get_consult_result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fget_consult_result%2F
   */
  "SecurityGetConsultResultV30": { method: "GET", path: "/open_api/v3.0/security/get_consult_result/", title: "SecurityGetConsultResultV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fget_consult_result%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 非积分处置事件
   *
   * GET /open_api/v3.0/security/non_score_disposal_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1862334279237632
   */
  "SecurityNonScoreDisposalInfoGetV30": { method: "GET", path: "/open_api/v3.0/security/non_score_disposal_info/get/", title: "非积分处置事件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1862334279237632", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * SecurityOpenMaterialAuditV30
   *
   * POST /open_api/v3.0/security/open_material_audit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fopen_material_audit%2F
   */
  "SecurityOpenMaterialAuditV30": { method: "POST", path: "/open_api/v3.0/security/open_material_audit/", title: "SecurityOpenMaterialAuditV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsecurity%2Fopen_material_audit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 积分处置事件
   *
   * GET /open_api/v3.0/security/score_disposal_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1807434773467145
   */
  "SecurityScoreDisposalInfoGetV30": { method: "GET", path: "/open_api/v3.0/security/score_disposal_info/get/", title: "积分处置事件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1807434773467145", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询账户累计积分
   *
   * GET /open_api/v3.0/security/score_total/get/
   * @see https://open.oceanengine.com/labels/7/docs/1807434247414986
   */
  "SecurityScoreTotalGetV30": { method: "GET", path: "/open_api/v3.0/security/score_total/get/", title: "查询账户累计积分", docsUrl: "https://open.oceanengine.com/labels/7/docs/1807434247414986", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 违规积分事件
   *
   * GET /open_api/v3.0/security/score_violation_event/get/
   * @see https://open.oceanengine.com/labels/7/docs/1807434741637545
   */
  "SecurityScoreViolationEventGetV30": { method: "GET", path: "/open_api/v3.0/security/score_violation_event/get/", title: "违规积分事件", docsUrl: "https://open.oceanengine.com/labels/7/docs/1807434741637545", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ServeMarketActiveFuncGetV10
   *
   * GET /open_api/v1.0/serve_market/active_func/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fserve_market%2Factive_func%2Fget%2F
   */
  "ServeMarketActiveFuncGetV10": { method: "GET", path: "/open_api/v1.0/serve_market/active_func/get/", title: "ServeMarketActiveFuncGetV10", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv1.0%2Fserve_market%2Factive_func%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取App Access Token校验信息
   *
   * GET /open_api/v1.0/serve_market/cid/verify_token/
   * @see https://open.oceanengine.com/labels/30/docs/1782609755121690
   */
  "ServeMarketCidVerifyTokenV10": { method: "GET", path: "/open_api/v1.0/serve_market/cid/verify_token/", title: "获取App Access Token校验信息", docsUrl: "https://open.oceanengine.com/labels/30/docs/1782609755121690", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取应用订单数据
   *
   * GET /open_api/v1.0/serve_market/order/get/
   * @see https://open.oceanengine.com/labels/30/docs/1736319607097355
   */
  "ServeMarketOrderGetV10": { method: "GET", path: "/open_api/v1.0/serve_market/order/get/", title: "获取应用订单数据", docsUrl: "https://open.oceanengine.com/labels/30/docs/1736319607097355", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 共享钱包-查询账户对应公司下的钱包关系
   *
   * GET /open_api/v3.0/shared_wallet/account_relation/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798907322782729
   */
  "SharedWalletAccountRelationGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/account_relation/get/", title: "共享钱包-查询账户对应公司下的钱包关系", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798907322782729", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询子钱包预算
   *
   * GET /open_api/v3.0/shared_wallet/budget/get/
   * @see https://open.oceanengine.com/labels/7/docs/1840959608957207
   */
  "SharedWalletBudgetGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/budget/get/", title: "资金共享-查询子钱包预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1840959608957207", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-设置子钱包预算
   *
   * POST /open_api/v3.0/shared_wallet/budget/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1841044638550027
   */
  "SharedWalletBudgetSubmitV30": { method: "POST", path: "/open_api/v3.0/shared_wallet/budget/submit/", title: "资金共享-设置子钱包预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1841044638550027", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询共享钱包日流水
   *
   * GET /open_api/v3.0/shared_wallet/daily_stat/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465810440256
   */
  "SharedWalletDailyStatGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/daily_stat/get/", title: "资金共享-查询共享钱包日流水", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798465810440256", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-共享钱包信息查询
   *
   * GET /open_api/v3.0/shared_wallet/main_wallet/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465885126668
   */
  "SharedWalletMainWalletGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/main_wallet/get/", title: "资金共享-共享钱包信息查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798465885126668", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-共享钱包绑定/换绑/解绑
   *
   * POST /open_api/v3.0/shared_wallet/shared_relation/create/
   * @see https://open.oceanengine.com/labels/7/docs/1848121521443095
   */
  "SharedWalletSharedRelationCreateV30": { method: "POST", path: "/open_api/v3.0/shared_wallet/shared_relation/create/", title: "资金共享-共享钱包绑定/换绑/解绑", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848121521443095", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-创建小钱包
   *
   * POST /open_api/v3.0/shared_wallet/sub_wallet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1859153660820492
   */
  "SharedWalletSubWalletCreateV30": { method: "POST", path: "/open_api/v3.0/shared_wallet/sub_wallet/create/", title: "资金共享-创建小钱包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1859153660820492", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询共享钱包流水明细
   *
   * GET /open_api/v3.0/shared_wallet/transaction_detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465768014922
   */
  "SharedWalletTransactionDetailGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/transaction_detail/get/", title: "资金共享-查询共享钱包流水明细", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798465768014922", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询ADV粒度操作记录
   *
   * GET /open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/
   * @see https://open.oceanengine.com/labels/7/docs/1848384541742468
   */
  "SharedWalletWalletAdvOperationLogGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/", title: "资金共享-查询ADV粒度操作记录", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848384541742468", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-批量查询钱包余额
   *
   * GET /open_api/v3.0/shared_wallet/wallet_balance/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465689405452
   */
  "SharedWalletWalletBalanceGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/wallet_balance/get/", title: "资金共享-批量查询钱包余额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798465689405452", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * SharedWalletWalletEbpRelationGetV30
   *
   * GET /open_api/v3.0/shared_wallet/wallet_ebp_relation/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshared_wallet%2Fwallet_ebp_relation%2Fget%2F
   */
  "SharedWalletWalletEbpRelationGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/wallet_ebp_relation/get/", title: "SharedWalletWalletEbpRelationGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshared_wallet%2Fwallet_ebp_relation%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-批量查询钱包信息
   *
   * GET /open_api/v3.0/shared_wallet/wallet_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465839055872
   */
  "SharedWalletWalletInfoGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/wallet_info/get/", title: "资金共享-批量查询钱包信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798465839055872", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询钱包粒度操作记录
   *
   * GET /open_api/v3.0/shared_wallet/wallet_operation_log/get/
   * @see https://open.oceanengine.com/labels/7/docs/1848384507795715
   */
  "SharedWalletWalletOperationLogGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/wallet_operation_log/get/", title: "查询钱包粒度操作记录", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848384507795715", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询子钱包下绑定的adv列表
   *
   * GET /open_api/v3.0/shared_wallet/wallet_relation/get/
   * @see https://open.oceanengine.com/labels/7/docs/1798465996741772
   */
  "SharedWalletWalletRelationGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/wallet_relation/get/", title: "资金共享-查询子钱包下绑定的adv列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1798465996741772", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-查询子钱包盯盘规则
   *
   * GET /open_api/v3.0/shared_wallet/watch_rule/get/
   * @see https://open.oceanengine.com/labels/7/docs/1840960035997696
   */
  "SharedWalletWatchRuleGetV30": { method: "GET", path: "/open_api/v3.0/shared_wallet/watch_rule/get/", title: "资金共享-查询子钱包盯盘规则", docsUrl: "https://open.oceanengine.com/labels/7/docs/1840960035997696", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 资金共享-设置子钱包盯盘规则
   *
   * POST /open_api/v3.0/shared_wallet/watch_rule/submit/
   * @see https://open.oceanengine.com/labels/7/docs/1841044864825417
   */
  "SharedWalletWatchRuleSubmitV30": { method: "POST", path: "/open_api/v3.0/shared_wallet/watch_rule/submit/", title: "资金共享-设置子钱包盯盘规则", docsUrl: "https://open.oceanengine.com/labels/7/docs/1841044864825417", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ShopBonusCreateV30
   *
   * POST /open_api/v3.0/shop_bonus/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshop_bonus%2Fcreate%2F
   */
  "ShopBonusCreateV30": { method: "POST", path: "/open_api/v3.0/shop_bonus/create/", title: "ShopBonusCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshop_bonus%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ShopBonusSuccessGetV30
   *
   * GET /open_api/v3.0/shop_bonus_success/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshop_bonus_success%2Fget%2F
   */
  "ShopBonusSuccessGetV30": { method: "GET", path: "/open_api/v3.0/shop_bonus_success/get/", title: "ShopBonusSuccessGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fshop_bonus_success%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取推送数据列表
   *
   * GET /open_api/2/spi_task/get/
   * @see https://open.oceanengine.com/labels/7/docs/1725097846184964
   */
  "SpiTaskGetV2": { method: "GET", path: "/open_api/2/spi_task/get/", title: "获取推送数据列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1725097846184964", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarAttachmentUploadV2
   *
   * POST /open_api/2/star/attachment/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattachment%2Fupload%2F
   */
  "StarAttachmentUploadV2": { method: "POST", path: "/open_api/2/star/attachment/upload/", title: "StarAttachmentUploadV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattachment%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["file"] },
  /**
   * StarAttributeItemEventFeedbackV2
   *
   * POST /open_api/2/star/attribute/item_event_feedback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fitem_event_feedback%2F
   */
  "StarAttributeItemEventFeedbackV2": { method: "POST", path: "/open_api/2/star/attribute/item_event_feedback/", title: "StarAttributeItemEventFeedbackV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fitem_event_feedback%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarAttributeJdOverflowConvertV2
   *
   * POST /open_api/2/star/attribute/jd_overflow_convert/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fjd_overflow_convert%2F
   */
  "StarAttributeJdOverflowConvertV2": { method: "POST", path: "/open_api/2/star/attribute/jd_overflow_convert/", title: "StarAttributeJdOverflowConvertV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fjd_overflow_convert%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarAttributeUserEventFeedbackV2
   *
   * POST /open_api/2/star/attribute/user_event_feedback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fuser_event_feedback%2F
   */
  "StarAttributeUserEventFeedbackV2": { method: "POST", path: "/open_api/2/star/attribute/user_event_feedback/", title: "StarAttributeUserEventFeedbackV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fuser_event_feedback%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarAttributeUserInfoFeedbackV2
   *
   * POST /open_api/2/star/attribute/user_info_feedback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fuser_info_feedback%2F
   */
  "StarAttributeUserInfoFeedbackV2": { method: "POST", path: "/open_api/2/star/attribute/user_info_feedback/", title: "StarAttributeUserInfoFeedbackV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fattribute%2Fuser_info_feedback%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarBillGetPendingV2
   *
   * GET /open_api/2/star/bill/get_pending/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbill%2Fget_pending%2F
   */
  "StarBillGetPendingV2": { method: "GET", path: "/open_api/2/star/bill/get_pending/", title: "StarBillGetPendingV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbill%2Fget_pending%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarBillPayV2
   *
   * POST /open_api/2/star/bill/pay/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbill%2Fpay%2F
   */
  "StarBillPayV2": { method: "POST", path: "/open_api/2/star/bill/pay/", title: "StarBillPayV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbill%2Fpay%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarBrandCategoryListV2
   *
   * GET /open_api/2/star/brand_category/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbrand_category%2Flist%2F
   */
  "StarBrandCategoryListV2": { method: "GET", path: "/open_api/2/star/brand_category/list/", title: "StarBrandCategoryListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbrand_category%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarBrandListV2
   *
   * GET /open_api/2/star/brand/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbrand%2Flist%2F
   */
  "StarBrandListV2": { method: "GET", path: "/open_api/2/star/brand/list/", title: "StarBrandListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fbrand%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarCampaignListV2
   *
   * GET /open_api/2/star/campaign/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcampaign%2Flist%2F
   */
  "StarCampaignListV2": { method: "GET", path: "/open_api/2/star/campaign/list/", title: "StarCampaignListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcampaign%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeAddBudgetV2
   *
   * POST /open_api/2/star/challenge/add_budget/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fadd_budget%2F
   */
  "StarChallengeAddBudgetV2": { method: "POST", path: "/open_api/2/star/challenge/add_budget/", title: "StarChallengeAddBudgetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fadd_budget%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeAuthorListV2
   *
   * GET /open_api/2/star/challenge/author_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fauthor_list%2F
   */
  "StarChallengeAuthorListV2": { method: "GET", path: "/open_api/2/star/challenge/author_list/", title: "StarChallengeAuthorListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fauthor_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeCancelV2
   *
   * POST /open_api/2/star/challenge/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fcancel%2F
   */
  "StarChallengeCancelV2": { method: "POST", path: "/open_api/2/star/challenge/cancel/", title: "StarChallengeCancelV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fcancel%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeChooseTaskItemWithRewardV2
   *
   * POST /open_api/2/star/challenge/choose_task_item_with_reward/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fchoose_task_item_with_reward%2F
   */
  "StarChallengeChooseTaskItemWithRewardV2": { method: "POST", path: "/open_api/2/star/challenge/choose_task_item_with_reward/", title: "StarChallengeChooseTaskItemWithRewardV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fchoose_task_item_with_reward%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeExpandRangeV2
   *
   * POST /open_api/2/star/challenge/expand_range/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fexpand_range%2F
   */
  "StarChallengeExpandRangeV2": { method: "POST", path: "/open_api/2/star/challenge/expand_range/", title: "StarChallengeExpandRangeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fexpand_range%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeGetCustomTaskDataV2
   *
   * GET /open_api/2/star/challenge/get_custom_task_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_custom_task_data%2F
   */
  "StarChallengeGetCustomTaskDataV2": { method: "GET", path: "/open_api/2/star/challenge/get_custom_task_data/", title: "StarChallengeGetCustomTaskDataV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_custom_task_data%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeGetCustomTaskListV2
   *
   * GET /open_api/2/star/challenge/get_custom_task_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_custom_task_list%2F
   */
  "StarChallengeGetCustomTaskListV2": { method: "GET", path: "/open_api/2/star/challenge/get_custom_task_list/", title: "StarChallengeGetCustomTaskListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_custom_task_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeGetPushAdResultsV2
   *
   * GET /open_api/2/star/challenge/get_push_ad_results/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_push_ad_results%2F
   */
  "StarChallengeGetPushAdResultsV2": { method: "GET", path: "/open_api/2/star/challenge/get_push_ad_results/", title: "StarChallengeGetPushAdResultsV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fget_push_ad_results%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeInfoV2
   *
   * GET /open_api/2/star/challenge/info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Finfo%2F
   */
  "StarChallengeInfoV2": { method: "GET", path: "/open_api/2/star/challenge/info/", title: "StarChallengeInfoV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Finfo%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeItemsDataV2
   *
   * GET /open_api/2/star/challenge/items_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fitems_data%2F
   */
  "StarChallengeItemsDataV2": { method: "GET", path: "/open_api/2/star/challenge/items_data/", title: "StarChallengeItemsDataV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fitems_data%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeListV2
   *
   * GET /open_api/2/star/challenge/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Flist%2F
   */
  "StarChallengeListV2": { method: "GET", path: "/open_api/2/star/challenge/list/", title: "StarChallengeListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarChallengePushItemsToAdV2
   *
   * POST /open_api/2/star/challenge/push_items_to_ad/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fpush_items_to_ad%2F
   */
  "StarChallengePushItemsToAdV2": { method: "POST", path: "/open_api/2/star/challenge/push_items_to_ad/", title: "StarChallengePushItemsToAdV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fpush_items_to_ad%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarChallengeSyncItemToAdV2
   *
   * POST /open_api/2/star/challenge/sync_item_to_ad/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fsync_item_to_ad%2F
   */
  "StarChallengeSyncItemToAdV2": { method: "POST", path: "/open_api/2/star/challenge/sync_item_to_ad/", title: "StarChallengeSyncItemToAdV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fchallenge%2Fsync_item_to_ad%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取星图订单投后线索
   *
   * GET /open_api/2/star/clue/get/
   * @see https://open.oceanengine.com/labels/13/docs/1703055296121864
   */
  "StarClueGetV2": { method: "GET", path: "/open_api/2/star/clue/get/", title: "获取星图订单投后线索", docsUrl: "https://open.oceanengine.com/labels/13/docs/1703055296121864", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarComponentCreateCommonComponentV2
   *
   * POST /open_api/2/star/component/create_common_component/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fcreate_common_component%2F
   */
  "StarComponentCreateCommonComponentV2": { method: "POST", path: "/open_api/2/star/component/create_common_component/", title: "StarComponentCreateCommonComponentV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fcreate_common_component%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarComponentCreateLinkV2
   *
   * POST /open_api/2/star/component/create_link/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fcreate_link%2F
   */
  "StarComponentCreateLinkV2": { method: "POST", path: "/open_api/2/star/component/create_link/", title: "StarComponentCreateLinkV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fcreate_link%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarComponentQueryIndustryAnchorV2
   *
   * GET /open_api/2/star/component/query_industry_anchor/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fquery_industry_anchor%2F
   */
  "StarComponentQueryIndustryAnchorV2": { method: "GET", path: "/open_api/2/star/component/query_industry_anchor/", title: "StarComponentQueryIndustryAnchorV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fquery_industry_anchor%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarComponentQueryLinkV2
   *
   * GET /open_api/2/star/component/query_link/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fquery_link%2F
   */
  "StarComponentQueryLinkV2": { method: "GET", path: "/open_api/2/star/component/query_link/", title: "StarComponentQueryLinkV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fquery_link%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarComponentUpdateCommonComponentV2
   *
   * POST /open_api/2/star/component/update_common_component/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fupdate_common_component%2F
   */
  "StarComponentUpdateCommonComponentV2": { method: "POST", path: "/open_api/2/star/component/update_common_component/", title: "StarComponentUpdateCommonComponentV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fupdate_common_component%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarComponentUpdateLinkV2
   *
   * POST /open_api/2/star/component/update_link/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fupdate_link%2F
   */
  "StarComponentUpdateLinkV2": { method: "POST", path: "/open_api/2/star/component/update_link/", title: "StarComponentUpdateLinkV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcomponent%2Fupdate_link%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarCopyrightCreateV2
   *
   * POST /open_api/2/star/copyright/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcopyright%2Fcreate%2F
   */
  "StarCopyrightCreateV2": { method: "POST", path: "/open_api/2/star/copyright/create/", title: "StarCopyrightCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcopyright%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarCopyrightGetV2
   *
   * GET /open_api/2/star/copyright/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcopyright%2Fget%2F
   */
  "StarCopyrightGetV2": { method: "GET", path: "/open_api/2/star/copyright/get/", title: "StarCopyrightGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcopyright%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarCreateProjectV2
   *
   * POST /open_api/2/star/create/project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcreate%2Fproject%2F
   */
  "StarCreateProjectV2": { method: "POST", path: "/open_api/2/star/create/project/", title: "StarCreateProjectV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fcreate%2Fproject%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDataTaskTimelineReportV2
   *
   * GET /open_api/2/star/data/task_timeline_report/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdata%2Ftask_timeline_report%2F
   */
  "StarDataTaskTimelineReportV2": { method: "GET", path: "/open_api/2/star/data/task_timeline_report/", title: "StarDataTaskTimelineReportV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdata%2Ftask_timeline_report%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandCreateAssignV2
   *
   * POST /open_api/2/star/demand/create_assign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fcreate_assign%2F
   */
  "StarDemandCreateAssignV2": { method: "POST", path: "/open_api/2/star/demand/create_assign/", title: "StarDemandCreateAssignV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fcreate_assign%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDemandCreateChallengeV2
   *
   * POST /open_api/2/star/demand/create_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fcreate_challenge%2F
   */
  "StarDemandCreateChallengeV2": { method: "POST", path: "/open_api/2/star/demand/create_challenge/", title: "StarDemandCreateChallengeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fcreate_challenge%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDemandGetEpisodeLimitV2
   *
   * GET /open_api/2/star/demand/get_episode_limit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fget_episode_limit%2F
   */
  "StarDemandGetEpisodeLimitV2": { method: "GET", path: "/open_api/2/star/demand/get_episode_limit/", title: "StarDemandGetEpisodeLimitV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fget_episode_limit%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandGetResellCodeV2
   *
   * GET /open_api/2/star/demand/get_resell_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fget_resell_code%2F
   */
  "StarDemandGetResellCodeV2": { method: "GET", path: "/open_api/2/star/demand/get_resell_code/", title: "StarDemandGetResellCodeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fget_resell_code%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取星图客户任务列表
   *
   * GET /open_api/2/star/demand/list/
   * @see https://open.oceanengine.com/labels/13/docs/1696710606998540
   */
  "StarDemandListV2": { method: "GET", path: "/open_api/2/star/demand/list/", title: "获取星图客户任务列表", docsUrl: "https://open.oceanengine.com/labels/13/docs/1696710606998540", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandMixListGetV2
   *
   * GET /open_api/2/star/demand/mix/list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fmix%2Flist%2Fget%2F
   */
  "StarDemandMixListGetV2": { method: "GET", path: "/open_api/2/star/demand/mix/list/get/", title: "StarDemandMixListGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fmix%2Flist%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmCreateChallengeV2
   *
   * POST /open_api/2/star/demand/om_create_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_create_challenge%2F
   */
  "StarDemandOmCreateChallengeV2": { method: "POST", path: "/open_api/2/star/demand/om_create_challenge/", title: "StarDemandOmCreateChallengeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_create_challenge%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmExpandChallengeProviderV2
   *
   * POST /open_api/2/star/demand/om_expand_challenge_provider/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_expand_challenge_provider%2F
   */
  "StarDemandOmExpandChallengeProviderV2": { method: "POST", path: "/open_api/2/star/demand/om_expand_challenge_provider/", title: "StarDemandOmExpandChallengeProviderV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_expand_challenge_provider%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmExpandChallengeV2
   *
   * POST /open_api/2/star/demand/om_expand_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_expand_challenge%2F
   */
  "StarDemandOmExpandChallengeV2": { method: "POST", path: "/open_api/2/star/demand/om_expand_challenge/", title: "StarDemandOmExpandChallengeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_expand_challenge%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmGetChallengeDispatchedProviderListV2
   *
   * GET /open_api/2/star/demand/om_get_challenge_dispatched_provider_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge_dispatched_provider_list%2F
   */
  "StarDemandOmGetChallengeDispatchedProviderListV2": { method: "GET", path: "/open_api/2/star/demand/om_get_challenge_dispatched_provider_list/", title: "StarDemandOmGetChallengeDispatchedProviderListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge_dispatched_provider_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmGetChallengeItemsDataV2
   *
   * GET /open_api/2/star/demand/om_get_challenge_items_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge_items_data%2F
   */
  "StarDemandOmGetChallengeItemsDataV2": { method: "GET", path: "/open_api/2/star/demand/om_get_challenge_items_data/", title: "StarDemandOmGetChallengeItemsDataV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge_items_data%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmGetChallengeV2
   *
   * GET /open_api/2/star/demand/om_get_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge%2F
   */
  "StarDemandOmGetChallengeV2": { method: "GET", path: "/open_api/2/star/demand/om_get_challenge/", title: "StarDemandOmGetChallengeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_challenge%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmGetDemandListV2
   *
   * GET /open_api/2/star/demand/om_get_demand_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_demand_list%2F
   */
  "StarDemandOmGetDemandListV2": { method: "GET", path: "/open_api/2/star/demand/om_get_demand_list/", title: "StarDemandOmGetDemandListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_get_demand_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandOmUpdateChallengeV2
   *
   * POST /open_api/2/star/demand/om_update_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_update_challenge%2F
   */
  "StarDemandOmUpdateChallengeV2": { method: "POST", path: "/open_api/2/star/demand/om_update_challenge/", title: "StarDemandOmUpdateChallengeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fom_update_challenge%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取星图客户任务订单列表
   *
   * GET /open_api/2/star/demand/order/list/
   * @see https://open.oceanengine.com/labels/13/docs/1696710607541263
   */
  "StarDemandOrderListV2": { method: "GET", path: "/open_api/2/star/demand/order/list/", title: "获取星图客户任务订单列表", docsUrl: "https://open.oceanengine.com/labels/13/docs/1696710607541263", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemandSearchWordModifyV2
   *
   * POST /open_api/2/star/demand/search_word/modify/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fsearch_word%2Fmodify%2F
   */
  "StarDemandSearchWordModifyV2": { method: "POST", path: "/open_api/2/star/demand/search_word/modify/", title: "StarDemandSearchWordModifyV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemand%2Fsearch_word%2Fmodify%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarDemanderDemanderGetAuthorBindInfoV2
   *
   * GET /open_api/2/star/demander/demander_get_author_bind_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fdemander_get_author_bind_info%2F
   */
  "StarDemanderDemanderGetAuthorBindInfoV2": { method: "GET", path: "/open_api/2/star/demander/demander_get_author_bind_info/", title: "StarDemanderDemanderGetAuthorBindInfoV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fdemander_get_author_bind_info%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemanderDemanderGetBindShareCodeV2
   *
   * GET /open_api/2/star/demander/demander_get_bind_share_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fdemander_get_bind_share_code%2F
   */
  "StarDemanderDemanderGetBindShareCodeV2": { method: "GET", path: "/open_api/2/star/demander/demander_get_bind_share_code/", title: "StarDemanderDemanderGetBindShareCodeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fdemander_get_bind_share_code%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemanderGetCarBrandListV2
   *
   * GET /open_api/2/star/demander/get_car_brand_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fget_car_brand_list%2F
   */
  "StarDemanderGetCarBrandListV2": { method: "GET", path: "/open_api/2/star/demander/get_car_brand_list/", title: "StarDemanderGetCarBrandListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fget_car_brand_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemanderGetRegisteredIpActsV2
   *
   * GET /open_api/2/star/demander/get_registered_ip_acts/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fget_registered_ip_acts%2F
   */
  "StarDemanderGetRegisteredIpActsV2": { method: "GET", path: "/open_api/2/star/demander/get_registered_ip_acts/", title: "StarDemanderGetRegisteredIpActsV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander%2Fget_registered_ip_acts%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemanderQueryCpsTaskSalesV2
   *
   * GET /open_api/2/star/demander_query_cps_task_sales/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander_query_cps_task_sales%2F
   */
  "StarDemanderQueryCpsTaskSalesV2": { method: "GET", path: "/open_api/2/star/demander_query_cps_task_sales/", title: "StarDemanderQueryCpsTaskSalesV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander_query_cps_task_sales%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarDemanderUploadCpsTaskSalesV2
   *
   * POST /open_api/2/star/demander_upload_cps_task_sales/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander_upload_cps_task_sales%2F
   */
  "StarDemanderUploadCpsTaskSalesV2": { method: "POST", path: "/open_api/2/star/demander_upload_cps_task_sales/", title: "StarDemanderUploadCpsTaskSalesV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fdemander_upload_cps_task_sales%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarFeCommonServiceTalentDayGetCheckInCodeV2
   *
   * GET /open_api/2/star/fe_common_service/talent_day/get_check_in_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ffe_common_service%2Ftalent_day%2Fget_check_in_code%2F
   */
  "StarFeCommonServiceTalentDayGetCheckInCodeV2": { method: "GET", path: "/open_api/2/star/fe_common_service/talent_day/get_check_in_code/", title: "StarFeCommonServiceTalentDayGetCheckInCodeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ffe_common_service%2Ftalent_day%2Fget_check_in_code%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarFeCommonServiceTalentDayJudgeCheckedInV2
   *
   * GET /open_api/2/star/fe_common_service/talent_day/judge_checked_in/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ffe_common_service%2Ftalent_day%2Fjudge_checked_in%2F
   */
  "StarFeCommonServiceTalentDayJudgeCheckedInV2": { method: "GET", path: "/open_api/2/star/fe_common_service/talent_day/judge_checked_in/", title: "StarFeCommonServiceTalentDayJudgeCheckedInV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ffe_common_service%2Ftalent_day%2Fjudge_checked_in%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarGetCreateChallengeDataDictV2
   *
   * GET /open_api/2/star/get_create_challenge_data_dict/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fget_create_challenge_data_dict%2F
   */
  "StarGetCreateChallengeDataDictV2": { method: "GET", path: "/open_api/2/star/get_create_challenge_data_dict/", title: "StarGetCreateChallengeDataDictV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fget_create_challenge_data_dict%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取星图账户信息
   *
   * GET /open_api/2/star/info/
   * @see https://open.oceanengine.com/labels/13/docs/1795928648995961
   */
  "StarInfoV2": { method: "GET", path: "/open_api/2/star/info/", title: "获取星图账户信息", docsUrl: "https://open.oceanengine.com/labels/13/docs/1795928648995961", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarItemAuthorGetV2
   *
   * GET /open_api/2/star/item/author/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fitem%2Fauthor%2Fget%2F
   */
  "StarItemAuthorGetV2": { method: "GET", path: "/open_api/2/star/item/author/get/", title: "StarItemAuthorGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fitem%2Fauthor%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnContractChallengeV2
   *
   * POST /open_api/2/star/mcn/contract_challenge/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fcontract_challenge%2F
   */
  "StarMcnContractChallengeV2": { method: "POST", path: "/open_api/2/star/mcn/contract_challenge/", title: "StarMcnContractChallengeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fcontract_challenge%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarMcnGetAuthorListV2
   *
   * GET /open_api/2/star/mcn/get_author_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_author_list%2F
   */
  "StarMcnGetAuthorListV2": { method: "GET", path: "/open_api/2/star/mcn/get_author_list/", title: "StarMcnGetAuthorListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_author_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnGetContractChallengeAuthorItemListV2V2
   *
   * GET /open_api/2/star/mcn/get_contract_challenge_author_item_list_v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contract_challenge_author_item_list_v2%2F
   */
  "StarMcnGetContractChallengeAuthorItemListV2V2": { method: "GET", path: "/open_api/2/star/mcn/get_contract_challenge_author_item_list_v2/", title: "StarMcnGetContractChallengeAuthorItemListV2V2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contract_challenge_author_item_list_v2%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnGetContractedChallengeListV2
   *
   * GET /open_api/2/star/mcn/get_contracted_challenge_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contracted_challenge_list%2F
   */
  "StarMcnGetContractedChallengeListV2": { method: "GET", path: "/open_api/2/star/mcn/get_contracted_challenge_list/", title: "StarMcnGetContractedChallengeListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contracted_challenge_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnGetContractedChallengeUrlV2
   *
   * GET /open_api/2/star/mcn/get_contracted_challenge_url/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contracted_challenge_url%2F
   */
  "StarMcnGetContractedChallengeUrlV2": { method: "GET", path: "/open_api/2/star/mcn/get_contracted_challenge_url/", title: "StarMcnGetContractedChallengeUrlV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_contracted_challenge_url%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnGetUnparticipatedTaskV2
   *
   * GET /open_api/2/star/mcn/get_unparticipated_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_unparticipated_task%2F
   */
  "StarMcnGetUnparticipatedTaskV2": { method: "GET", path: "/open_api/2/star/mcn/get_unparticipated_task/", title: "StarMcnGetUnparticipatedTaskV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fget_unparticipated_task%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnMixListGetV2
   *
   * GET /open_api/2/star/mcn/mix/list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fmix%2Flist%2Fget%2F
   */
  "StarMcnMixListGetV2": { method: "GET", path: "/open_api/2/star/mcn/mix/list/get/", title: "StarMcnMixListGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fmix%2Flist%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetParticipatedTaskV2
   *
   * GET /open_api/2/star/mcn/provider_get_participated_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_participated_task%2F
   */
  "StarMcnProviderGetParticipatedTaskV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_participated_task/", title: "StarMcnProviderGetParticipatedTaskV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_participated_task%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetRecruitInfoGetV2
   *
   * GET /open_api/2/star/mcn/provider_get_recruit_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_recruit_info%2Fget%2F
   */
  "StarMcnProviderGetRecruitInfoGetV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_recruit_info/get/", title: "StarMcnProviderGetRecruitInfoGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_recruit_info%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetTagOnTaskV2
   *
   * GET /open_api/2/star/mcn/provider_get_tag_on_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_tag_on_task%2F
   */
  "StarMcnProviderGetTagOnTaskV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_tag_on_task/", title: "StarMcnProviderGetTagOnTaskV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_tag_on_task%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetTaskAuthorListV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_author_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_author_list%2F
   */
  "StarMcnProviderGetTaskAuthorListV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_task_author_list/", title: "StarMcnProviderGetTaskAuthorListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_author_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetTaskDetailV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_detail%2F
   */
  "StarMcnProviderGetTaskDetailV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_task_detail/", title: "StarMcnProviderGetTaskDetailV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_detail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetTaskItemListV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_item_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_item_list%2F
   */
  "StarMcnProviderGetTaskItemListV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_task_item_list/", title: "StarMcnProviderGetTaskItemListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_item_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetTaskShareCodeV2
   *
   * GET /open_api/2/star/mcn/provider_get_task_share_code/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_share_code%2F
   */
  "StarMcnProviderGetTaskShareCodeV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_task_share_code/", title: "StarMcnProviderGetTaskShareCodeV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_task_share_code%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderGetUnparticipatedTaskV2
   *
   * GET /open_api/2/star/mcn/provider_get_unparticipated_task/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_unparticipated_task%2F
   */
  "StarMcnProviderGetUnparticipatedTaskV2": { method: "GET", path: "/open_api/2/star/mcn/provider_get_unparticipated_task/", title: "StarMcnProviderGetUnparticipatedTaskV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_get_unparticipated_task%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderHandleJoinedAuthorV2
   *
   * POST /open_api/2/star/mcn/provider_handle_joined_author/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_handle_joined_author%2F
   */
  "StarMcnProviderHandleJoinedAuthorV2": { method: "POST", path: "/open_api/2/star/mcn/provider_handle_joined_author/", title: "StarMcnProviderHandleJoinedAuthorV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_handle_joined_author%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarMcnProviderUploadSearchItemV2
   *
   * POST /open_api/2/star/mcn/provider_upload_search_item/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_upload_search_item%2F
   */
  "StarMcnProviderUploadSearchItemV2": { method: "POST", path: "/open_api/2/star/mcn/provider_upload_search_item/", title: "StarMcnProviderUploadSearchItemV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Fprovider_upload_search_item%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarMcnRecuritProviderGetTaskOrderListGetV2
   *
   * GET /open_api/2/star/mcn/recurit_provider_get_task_order_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Frecurit_provider_get_task_order_list%2Fget%2F
   */
  "StarMcnRecuritProviderGetTaskOrderListGetV2": { method: "GET", path: "/open_api/2/star/mcn/recurit_provider_get_task_order_list/get/", title: "StarMcnRecuritProviderGetTaskOrderListGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fmcn%2Frecurit_provider_get_task_order_list%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderApproveResourceV2
   *
   * POST /open_api/2/star/order/approve_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fapprove_resource%2F
   */
  "StarOrderApproveResourceV2": { method: "POST", path: "/open_api/2/star/order/approve_resource/", title: "StarOrderApproveResourceV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fapprove_resource%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderDemanderCancelV2
   *
   * POST /open_api/2/star/order/demander_cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fdemander_cancel%2F
   */
  "StarOrderDemanderCancelV2": { method: "POST", path: "/open_api/2/star/order/demander_cancel/", title: "StarOrderDemanderCancelV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fdemander_cancel%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderDetailV2
   *
   * GET /open_api/2/star/order/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fdetail%2F
   */
  "StarOrderDetailV2": { method: "GET", path: "/open_api/2/star/order/detail/", title: "StarOrderDetailV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fdetail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderFinishV2
   *
   * POST /open_api/2/star/order/finish/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Ffinish%2F
   */
  "StarOrderFinishV2": { method: "POST", path: "/open_api/2/star/order/finish/", title: "StarOrderFinishV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Ffinish%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderGetCancelAmountV2
   *
   * GET /open_api/2/star/order/get_cancel_amount/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_cancel_amount%2F
   */
  "StarOrderGetCancelAmountV2": { method: "GET", path: "/open_api/2/star/order/get_cancel_amount/", title: "StarOrderGetCancelAmountV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_cancel_amount%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderGetComponentV2
   *
   * GET /open_api/2/star/order/get_component/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_component%2F
   */
  "StarOrderGetComponentV2": { method: "GET", path: "/open_api/2/star/order/get_component/", title: "StarOrderGetComponentV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_component%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderGetInfoV2
   *
   * GET /open_api/2/star/order/get_info/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_info%2F
   */
  "StarOrderGetInfoV2": { method: "GET", path: "/open_api/2/star/order/get_info/", title: "StarOrderGetInfoV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_info%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderGetLiveV2
   *
   * GET /open_api/2/star/order/get_live/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_live%2F
   */
  "StarOrderGetLiveV2": { method: "GET", path: "/open_api/2/star/order/get_live/", title: "StarOrderGetLiveV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_live%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderGetScriptV2
   *
   * GET /open_api/2/star/order/get_script/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_script%2F
   */
  "StarOrderGetScriptV2": { method: "GET", path: "/open_api/2/star/order/get_script/", title: "StarOrderGetScriptV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_script%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderGetVideoV2
   *
   * GET /open_api/2/star/order/get_video/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_video%2F
   */
  "StarOrderGetVideoV2": { method: "GET", path: "/open_api/2/star/order/get_video/", title: "StarOrderGetVideoV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fget_video%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderListByCampaignV2
   *
   * GET /open_api/2/star/order/list_by_campaign/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Flist_by_campaign%2F
   */
  "StarOrderListByCampaignV2": { method: "GET", path: "/open_api/2/star/order/list_by_campaign/", title: "StarOrderListByCampaignV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Flist_by_campaign%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarOrderPublishResourceV2
   *
   * POST /open_api/2/star/order/publish_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fpublish_resource%2F
   */
  "StarOrderPublishResourceV2": { method: "POST", path: "/open_api/2/star/order/publish_resource/", title: "StarOrderPublishResourceV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fpublish_resource%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderPushResourceV2
   *
   * POST /open_api/2/star/order/push_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fpush_resource%2F
   */
  "StarOrderPushResourceV2": { method: "POST", path: "/open_api/2/star/order/push_resource/", title: "StarOrderPushResourceV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fpush_resource%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderRejectResourceV2
   *
   * POST /open_api/2/star/order/reject_resource/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Freject_resource%2F
   */
  "StarOrderRejectResourceV2": { method: "POST", path: "/open_api/2/star/order/reject_resource/", title: "StarOrderRejectResourceV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Freject_resource%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderReplyAuthorCancelV2
   *
   * POST /open_api/2/star/order/reply_author_cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Freply_author_cancel%2F
   */
  "StarOrderReplyAuthorCancelV2": { method: "POST", path: "/open_api/2/star/order/reply_author_cancel/", title: "StarOrderReplyAuthorCancelV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Freply_author_cancel%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarOrderUpdateV2
   *
   * POST /open_api/2/star/order/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fupdate%2F
   */
  "StarOrderUpdateV2": { method: "POST", path: "/open_api/2/star/order/update/", title: "StarOrderUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Forder%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarProjectListV2
   *
   * GET /open_api/2/star/project/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fproject%2Flist%2F
   */
  "StarProjectListV2": { method: "GET", path: "/open_api/2/star/project/list/", title: "StarProjectListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fproject%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarProviderTaskItemListV2
   *
   * GET /open_api/2/star/provider/task/item/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fprovider%2Ftask%2Fitem%2Flist%2F
   */
  "StarProviderTaskItemListV2": { method: "GET", path: "/open_api/2/star/provider/task/item/list/", title: "StarProviderTaskItemListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fprovider%2Ftask%2Fitem%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarProviderTaskListV2
   *
   * GET /open_api/2/star/provider/task/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fprovider%2Ftask%2Flist%2F
   */
  "StarProviderTaskListV2": { method: "GET", path: "/open_api/2/star/provider/task/list/", title: "StarProviderTaskListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fprovider%2Ftask%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取投后每日趋势数据（短视频）
   *
   * GET /open_api/2/star/report/custom_data_topic_daily_report/
   * @see https://open.oceanengine.com/labels/13/docs/1792833494331403
   */
  "StarReportCustomDataTopicDailyReportV2": { method: "GET", path: "/open_api/2/star/report/custom_data_topic_daily_report/", title: "获取投后每日趋势数据（短视频）", docsUrl: "https://open.oceanengine.com/labels/13/docs/1792833494331403", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取投后数据主题累计数据
   *
   * GET /open_api/2/star/report/custom_data_topic_report/
   * @see https://open.oceanengine.com/labels/13/docs/1792052602066947
   */
  "StarReportCustomDataTopicReportV2": { method: "GET", path: "/open_api/2/star/report/custom_data_topic_report/", title: "获取投后数据主题累计数据", docsUrl: "https://open.oceanengine.com/labels/13/docs/1792052602066947", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取任务下累计可查询的数据指标
   *
   * GET /open_api/2/star/report/data_topic_config/
   * @see https://open.oceanengine.com/labels/13/docs/1792691290570819
   */
  "StarReportDataTopicConfigV2": { method: "GET", path: "/open_api/2/star/report/data_topic_config/", title: "获取任务下累计可查询的数据指标", docsUrl: "https://open.oceanengine.com/labels/13/docs/1792691290570819", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取订单投后分析报表
   *
   * GET /open_api/2/star/report/order_overview/get/
   * @see https://open.oceanengine.com/labels/13/docs/1696710608099328
   */
  "StarReportOrderOverviewGetV2": { method: "GET", path: "/open_api/2/star/report/order_overview/get/", title: "获取订单投后分析报表", docsUrl: "https://open.oceanengine.com/labels/13/docs/1696710608099328", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarReportOrderOverviewV2
   *
   * GET /open_api/2/star/report/order_overview/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Freport%2Forder_overview%2F
   */
  "StarReportOrderOverviewV2": { method: "GET", path: "/open_api/2/star/report/order_overview/", title: "StarReportOrderOverviewV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Freport%2Forder_overview%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取订单投后受众报表
   *
   * GET /open_api/2/star/report/order_user_distribution/get/
   * @see https://open.oceanengine.com/labels/13/docs/1696710608627712
   */
  "StarReportOrderUserDistributionGetV2": { method: "GET", path: "/open_api/2/star/report/order_user_distribution/get/", title: "获取订单投后受众报表", docsUrl: "https://open.oceanengine.com/labels/13/docs/1696710608627712", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取星广联投(星图版)任务维度数据
   *
   * GET /open_api/2/star/star_ad_unite_task/detail/
   * @see https://open.oceanengine.com/labels/13/docs/1796659328192516
   */
  "StarStarAdUniteTaskDetailV2": { method: "GET", path: "/open_api/2/star/star_ad_unite_task/detail/", title: "获取星广联投(星图版)任务维度数据", docsUrl: "https://open.oceanengine.com/labels/13/docs/1796659328192516", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取星广联投(星图版)视频维度数据
   *
   * GET /open_api/2/star/star_ad_unite_task_item/list/
   * @see https://open.oceanengine.com/labels/13/docs/1796659452874762
   */
  "StarStarAdUniteTaskItemListV2": { method: "GET", path: "/open_api/2/star/star_ad_unite_task_item/list/", title: "获取星广联投(星图版)视频维度数据", docsUrl: "https://open.oceanengine.com/labels/13/docs/1796659452874762", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取星广联投(星图版)任务列表
   *
   * GET /open_api/2/star/star_ad_unite_task/list/
   * @see https://open.oceanengine.com/labels/13/docs/1796659222192234
   */
  "StarStarAdUniteTaskListV2": { method: "GET", path: "/open_api/2/star/star_ad_unite_task/list/", title: "获取星广联投(星图版)任务列表", docsUrl: "https://open.oceanengine.com/labels/13/docs/1796659222192234", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarTaskBindProjectV2
   *
   * POST /open_api/2/star/task/bind_project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ftask%2Fbind_project%2F
   */
  "StarTaskBindProjectV2": { method: "POST", path: "/open_api/2/star/task/bind_project/", title: "StarTaskBindProjectV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ftask%2Fbind_project%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarTaskListByProjectV2
   *
   * GET /open_api/2/star/task/list_by_project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ftask%2Flist_by_project%2F
   */
  "StarTaskListByProjectV2": { method: "GET", path: "/open_api/2/star/task/list_by_project/", title: "StarTaskListByProjectV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Ftask%2Flist_by_project%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarUpdateProjectV2
   *
   * POST /open_api/2/star/update/project/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fupdate%2Fproject%2F
   */
  "StarUpdateProjectV2": { method: "POST", path: "/open_api/2/star/update/project/", title: "StarUpdateProjectV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fupdate%2Fproject%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarUserGetAwemeAuthorIdV2
   *
   * GET /open_api/2/star/user/get_aweme_author_id/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fuser%2Fget_aweme_author_id%2F
   */
  "StarUserGetAwemeAuthorIdV2": { method: "GET", path: "/open_api/2/star/user/get_aweme_author_id/", title: "StarUserGetAwemeAuthorIdV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fuser%2Fget_aweme_author_id%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarUserGetStarIdV2
   *
   * GET /open_api/2/star/user/get_star_id/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fuser%2Fget_star_id%2F
   */
  "StarUserGetStarIdV2": { method: "GET", path: "/open_api/2/star/user/get_star_id/", title: "StarUserGetStarIdV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fuser%2Fget_star_id%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarVasAppendOrderToBoostItemGroupV2
   *
   * POST /open_api/2/star/vas/append_order_to_boost_item_group/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fappend_order_to_boost_item_group%2F
   */
  "StarVasAppendOrderToBoostItemGroupV2": { method: "POST", path: "/open_api/2/star/vas/append_order_to_boost_item_group/", title: "StarVasAppendOrderToBoostItemGroupV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fappend_order_to_boost_item_group%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarVasCancelBoostItemGroupV2
   *
   * POST /open_api/2/star/vas/cancel_boost_item_group/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fcancel_boost_item_group%2F
   */
  "StarVasCancelBoostItemGroupV2": { method: "POST", path: "/open_api/2/star/vas/cancel_boost_item_group/", title: "StarVasCancelBoostItemGroupV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fcancel_boost_item_group%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarVasCreateBoostItemGroupV2
   *
   * POST /open_api/2/star/vas/create_boost_item_group/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fcreate_boost_item_group%2F
   */
  "StarVasCreateBoostItemGroupV2": { method: "POST", path: "/open_api/2/star/vas/create_boost_item_group/", title: "StarVasCreateBoostItemGroupV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fcreate_boost_item_group%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StarVasGetBoostGroupListV2
   *
   * GET /open_api/2/star/vas/get_boost_group_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_boost_group_list%2F
   */
  "StarVasGetBoostGroupListV2": { method: "GET", path: "/open_api/2/star/vas/get_boost_group_list/", title: "StarVasGetBoostGroupListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_boost_group_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询助推组标签定向的选项值
   *
   * GET /open_api/2/star/vas/get_boost_group_options/
   * @see https://open.oceanengine.com/labels/13/docs/1851090583270855
   */
  "StarVasGetBoostGroupOptionsV2": { method: "GET", path: "/open_api/2/star/vas/get_boost_group_options/", title: "查询助推组标签定向的选项值", docsUrl: "https://open.oceanengine.com/labels/13/docs/1851090583270855", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarVasGetBoostItemGroupDetailV2
   *
   * GET /open_api/2/star/vas/get_boost_item_group_detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_boost_item_group_detail%2F
   */
  "StarVasGetBoostItemGroupDetailV2": { method: "GET", path: "/open_api/2/star/vas/get_boost_item_group_detail/", title: "StarVasGetBoostItemGroupDetailV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_boost_item_group_detail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarVasGetCommonAuthorPackageListV2
   *
   * GET /open_api/2/star/vas/get_common_author_package_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_common_author_package_list%2F
   */
  "StarVasGetCommonAuthorPackageListV2": { method: "GET", path: "/open_api/2/star/vas/get_common_author_package_list/", title: "StarVasGetCommonAuthorPackageListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_common_author_package_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarVasGetExportBoostItemGroupResultV2
   *
   * GET /open_api/2/star/vas/get_export_boost_item_group_result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_export_boost_item_group_result%2F
   */
  "StarVasGetExportBoostItemGroupResultV2": { method: "GET", path: "/open_api/2/star/vas/get_export_boost_item_group_result/", title: "StarVasGetExportBoostItemGroupResultV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fget_export_boost_item_group_result%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StarVasSubmitExportBoostItemGroupDataV2
   *
   * POST /open_api/2/star/vas/submit_export_boost_item_group_data/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fsubmit_export_boost_item_group_data%2F
   */
  "StarVasSubmitExportBoostItemGroupDataV2": { method: "POST", path: "/open_api/2/star/vas/submit_export_boost_item_group_data/", title: "StarVasSubmitExportBoostItemGroupDataV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fstar%2Fvas%2Fsubmit_export_boost_item_group_data%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskAuthorDetailV30
   *
   * GET /open_api/v3.0/stardelivery/task_author/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author%2Fdetail%2F
   */
  "StardeliveryTaskAuthorDetailV30": { method: "GET", path: "/open_api/v3.0/stardelivery/task_author/detail/", title: "StardeliveryTaskAuthorDetailV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author%2Fdetail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskAuthorVideoAuditV30
   *
   * POST /open_api/v3.0/stardelivery/task_author_video/audit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author_video%2Faudit%2F
   */
  "StardeliveryTaskAuthorVideoAuditV30": { method: "POST", path: "/open_api/v3.0/stardelivery/task_author_video/audit/", title: "StardeliveryTaskAuthorVideoAuditV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author_video%2Faudit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskAuthorVideoDetailV30
   *
   * GET /open_api/v3.0/stardelivery/task_author_video/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author_video%2Fdetail%2F
   */
  "StardeliveryTaskAuthorVideoDetailV30": { method: "GET", path: "/open_api/v3.0/stardelivery/task_author_video/detail/", title: "StardeliveryTaskAuthorVideoDetailV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask_author_video%2Fdetail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskBudgetUpdateV30
   *
   * POST /open_api/v3.0/stardelivery/task/budget/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fbudget%2Fupdate%2F
   */
  "StardeliveryTaskBudgetUpdateV30": { method: "POST", path: "/open_api/v3.0/stardelivery/task/budget/update/", title: "StardeliveryTaskBudgetUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fbudget%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskCancelV30
   *
   * POST /open_api/v3.0/stardelivery/task/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fcancel%2F
   */
  "StardeliveryTaskCancelV30": { method: "POST", path: "/open_api/v3.0/stardelivery/task/cancel/", title: "StardeliveryTaskCancelV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fcancel%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskDetailV30
   *
   * GET /open_api/v3.0/stardelivery/task/detail/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fdetail%2F
   */
  "StardeliveryTaskDetailV30": { method: "GET", path: "/open_api/v3.0/stardelivery/task/detail/", title: "StardeliveryTaskDetailV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fdetail%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskListV30
   *
   * GET /open_api/v3.0/stardelivery/task/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Flist%2F
   */
  "StardeliveryTaskListV30": { method: "GET", path: "/open_api/v3.0/stardelivery/task/list/", title: "StardeliveryTaskListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskPostEndTimeUpdateV30
   *
   * POST /open_api/v3.0/stardelivery/task/post_end_time/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fpost_end_time%2Fupdate%2F
   */
  "StardeliveryTaskPostEndTimeUpdateV30": { method: "POST", path: "/open_api/v3.0/stardelivery/task/post_end_time/update/", title: "StardeliveryTaskPostEndTimeUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fpost_end_time%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskShareV30
   *
   * POST /open_api/v3.0/stardelivery/task/share/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fshare%2F
   */
  "StardeliveryTaskShareV30": { method: "POST", path: "/open_api/v3.0/stardelivery/task/share/", title: "StardeliveryTaskShareV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fshare%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskShareableListV30
   *
   * GET /open_api/v3.0/stardelivery/task/shareable/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fshareable%2Flist%2F
   */
  "StardeliveryTaskShareableListV30": { method: "GET", path: "/open_api/v3.0/stardelivery/task/shareable/list/", title: "StardeliveryTaskShareableListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fshareable%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskSharingListV30
   *
   * GET /open_api/v3.0/stardelivery/task/sharing/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fsharing%2Flist%2F
   */
  "StardeliveryTaskSharingListV30": { method: "GET", path: "/open_api/v3.0/stardelivery/task/sharing/list/", title: "StardeliveryTaskSharingListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Fsharing%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * StardeliveryTaskUnshareV30
   *
   * POST /open_api/v3.0/stardelivery/task/unshare/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Funshare%2F
   */
  "StardeliveryTaskUnshareV30": { method: "POST", path: "/open_api/v3.0/stardelivery/task/unshare/", title: "StardeliveryTaskUnshareV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fstardelivery%2Ftask%2Funshare%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建标准项目
   *
   * POST /open_api/v3.0/std_project/create/
   * @see https://open.oceanengine.com/labels/7/docs/1865819566002436
   */
  "StdProjectCreateV30": { method: "POST", path: "/open_api/v3.0/std_project/create/", title: "创建标准项目", docsUrl: "https://open.oceanengine.com/labels/7/docs/1865819566002436", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 【智擎版】标准项目状态实时推送
   *
   * GET /open_api/v3.0/std_project/list/
   * @see https://open.oceanengine.com/labels/7/docs/1870870452456523
   */
  "StdProjectListV30": { method: "GET", path: "/open_api/v3.0/std_project/list/", title: "【智擎版】标准项目状态实时推送", docsUrl: "https://open.oceanengine.com/labels/7/docs/1870870452456523", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新标准项目
   *
   * POST /open_api/v3.0/std_project/update/
   * @see https://open.oceanengine.com/labels/7/docs/1865873315616282
   */
  "StdProjectUpdateV30": { method: "POST", path: "/open_api/v3.0/std_project/update/", title: "更新标准项目", docsUrl: "https://open.oceanengine.com/labels/7/docs/1865873315616282", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 新增 Adv 订阅
   *
   * POST /open_api/v3.0/subscribe/accounts/add/
   * @see https://open.oceanengine.com/labels/7/docs/1818567687958707
   */
  "SubscribeAccountsAddV30": { method: "POST", path: "/open_api/v3.0/subscribe/accounts/add/", title: "新增 Adv 订阅", docsUrl: "https://open.oceanengine.com/labels/7/docs/1818567687958707", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询订阅 Adv
   *
   * GET /open_api/v3.0/subscribe/accounts/list/
   * @see https://open.oceanengine.com/labels/7/docs/1818567348129040
   */
  "SubscribeAccountsListV30": { method: "GET", path: "/open_api/v3.0/subscribe/accounts/list/", title: "查询订阅 Adv", docsUrl: "https://open.oceanengine.com/labels/7/docs/1818567348129040", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 取消 Adv 订阅
   *
   * POST /open_api/v3.0/subscribe/accounts/remove/
   * @see https://open.oceanengine.com/labels/7/docs/1818566670161920
   */
  "SubscribeAccountsRemoveV30": { method: "POST", path: "/open_api/v3.0/subscribe/accounts/remove/", title: "取消 Adv 订阅", docsUrl: "https://open.oceanengine.com/labels/7/docs/1818566670161920", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取推荐关键词
   *
   * POST /open_api/v3.0/sugg_words/
   * @see https://open.oceanengine.com/labels/7/docs/1755356193295372
   */
  "SuggWordsV30": { method: "POST", path: "/open_api/v3.0/sugg_words/", title: "获取推荐关键词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755356193295372", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * SvipChargeVerifyGetV30
   *
   * GET /open_api/v3.0/svip/charge/verify/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsvip%2Fcharge%2Fverify%2Fget%2F
   */
  "SvipChargeVerifyGetV30": { method: "GET", path: "/open_api/v3.0/svip/charge/verify/get/", title: "SvipChargeVerifyGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fsvip%2Fcharge%2Fverify%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询快应用信息
   *
   * GET /open_api/2/tool/quick_app_management/quick_app/get/
   * @see https://open.oceanengine.com/labels/7/docs/1758407389420547
   */
  "ToolQuickAppManagementQuickAppGetV2": { method: "GET", path: "/open_api/2/tool/quick_app_management/quick_app/get/", title: "查询快应用信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1758407389420547", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取预览二维码（升级版）
   *
   * GET /open_api/v3.0/tools/ad_preview/qrcode_get/
   * @see https://open.oceanengine.com/labels/7/docs/1763117461145604
   */
  "ToolsAdPreviewQrcodeGetV30": { method: "GET", path: "/open_api/v3.0/tools/ad_preview/qrcode_get/", title: "获取预览二维码（升级版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1763117461145604", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAdRaiseStatusGetV2
   *
   * GET /open_api/2/tools/ad_raise_status/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fad_raise_status%2Fget%2F
   */
  "ToolsAdRaiseStatusGetV2": { method: "GET", path: "/open_api/2/tools/ad_raise_status/get/", title: "ToolsAdRaiseStatusGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fad_raise_status%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取行政信息
   *
   * GET /open_api/2/tools/admin/info/
   * @see https://open.oceanengine.com/labels/7/docs/1709606596424718
   */
  "ToolsAdminInfoV2": { method: "GET", path: "/open_api/2/tools/admin/info/", title: "获取行政信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1709606596424718", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30
   *
   * POST /open_api/v3.0/tools/advertiser_diagnosis/suggestion/accept/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fadvertiser_diagnosis%2Fsuggestion%2Faccept%2Fupdate%2F
   */
  "ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/accept/update/", title: "ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fadvertiser_diagnosis%2Fsuggestion%2Faccept%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAdvertiserDiagnosisSuggestionGetV30
   *
   * GET /open_api/v3.0/tools/advertiser_diagnosis/suggestion/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fadvertiser_diagnosis%2Fsuggestion%2Fget%2F
   */
  "ToolsAdvertiserDiagnosisSuggestionGetV30": { method: "GET", path: "/open_api/v3.0/tools/advertiser_diagnosis/suggestion/get/", title: "ToolsAdvertiserDiagnosisSuggestionGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fadvertiser_diagnosis%2Fsuggestion%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAdvertiserStoreSearchV2
   *
   * GET /open_api/2/tools/advertiser_store/search/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fadvertiser_store%2Fsearch%2F
   */
  "ToolsAdvertiserStoreSearchV2": { method: "GET", path: "/open_api/2/tools/advertiser_store/search/", title: "ToolsAdvertiserStoreSearchV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fadvertiser_store%2Fsearch%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAgreementCreateV30
   *
   * POST /open_api/v3.0/tools/agreement/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fagreement%2Fcreate%2F
   */
  "ToolsAgreementCreateV30": { method: "POST", path: "/open_api/v3.0/tools/agreement/create/", title: "ToolsAgreementCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fagreement%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAgreementListV30
   *
   * GET /open_api/v3.0/tools/agreement/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fagreement%2Flist%2F
   */
  "ToolsAgreementListV30": { method: "GET", path: "/open_api/v3.0/tools/agreement/list/", title: "ToolsAgreementListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fagreement%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAigcMaterialGetV2
   *
   * GET /open_api/2/tools/aigc_material/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faigc_material%2Fget%2F
   */
  "ToolsAigcMaterialGetV2": { method: "GET", path: "/open_api/2/tools/aigc_material/get/", title: "ToolsAigcMaterialGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faigc_material%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAipThirdSiteCreateV2
   *
   * POST /open_api/2/tools/aip_third_site/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fcreate%2F
   */
  "ToolsAipThirdSiteCreateV2": { method: "POST", path: "/open_api/2/tools/aip_third_site/create/", title: "ToolsAipThirdSiteCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAipThirdSiteGetV2
   *
   * GET /open_api/2/tools/aip_third_site/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fget%2F
   */
  "ToolsAipThirdSiteGetV2": { method: "GET", path: "/open_api/2/tools/aip_third_site/get/", title: "ToolsAipThirdSiteGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAipThirdSiteUpdateV2
   *
   * POST /open_api/2/tools/aip_third_site/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fupdate%2F
   */
  "ToolsAipThirdSiteUpdateV2": { method: "POST", path: "/open_api/2/tools/aip_third_site/update/", title: "ToolsAipThirdSiteUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faip_third_site%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAppIosListV2
   *
   * GET /open_api/2/tools/app/ios/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp%2Fios%2Flist%2F
   */
  "ToolsAppIosListV2": { method: "GET", path: "/open_api/2/tools/app/ios/list/", title: "ToolsAppIosListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp%2Fios%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询安卓应用信息（支持所有账户体系）
   *
   * GET /open_api/2/tools/app_management/android_app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1710414664846349
   */
  "ToolsAppManagementAndroidAppListV2": { method: "GET", path: "/open_api/2/tools/app_management/android_app/list/", title: "查询安卓应用信息（支持所有账户体系）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1710414664846349", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询安卓应用母包
   *
   * GET /open_api/2/tools/app_management/android_basic_package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1714057253379079
   */
  "ToolsAppManagementAndroidBasicPackageGetV2": { method: "GET", path: "/open_api/2/tools/app_management/android_basic_package/get/", title: "查询安卓应用母包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1714057253379079", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 发布安卓应用母包
   *
   * POST /open_api/2/tools/app_management/android_basic_package/publish/
   * @see https://open.oceanengine.com/labels/7/docs/1714118271558664
   */
  "ToolsAppManagementAndroidBasicPackagePublishV2": { method: "POST", path: "/open_api/2/tools/app_management/android_basic_package/publish/", title: "发布安卓应用母包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1714118271558664", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新安卓应用母包
   *
   * POST /open_api/2/tools/app_management/android_basic_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1714057119751182
   */
  "ToolsAppManagementAndroidBasicPackageUpdateV2": { method: "POST", path: "/open_api/2/tools/app_management/android_basic_package/update/", title: "更新安卓应用母包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1714057119751182", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询安卓应用信息
   *
   * GET /open_api/2/tools/app_management/app/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710742760448
   */
  "ToolsAppManagementAppGetV2": { method: "GET", path: "/open_api/2/tools/app_management/app/get/", title: "查询安卓应用信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710742760448", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询游戏预约信息
   *
   * GET /open_api/2/tools/app_management/booking/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710742162447
   */
  "ToolsAppManagementBookingGetV2": { method: "GET", path: "/open_api/2/tools/app_management/booking/get/", title: "查询游戏预约信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710742162447", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询游戏预约记录详情
   *
   * GET /open_api/2/tools/app_management/booking_records/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710743409676
   */
  "ToolsAppManagementBookingRecordsGetV2": { method: "GET", path: "/open_api/2/tools/app_management/booking_records/get/", title: "查询游戏预约记录详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710743409676", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 取消应用共享关系
   *
   * POST /open_api/2/tools/app_management/bp_share/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1710413893446668
   */
  "ToolsAppManagementBpShareCancelV2": { method: "POST", path: "/open_api/2/tools/app_management/bp_share/cancel/", title: "取消应用共享关系", docsUrl: "https://open.oceanengine.com/labels/7/docs/1710413893446668", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 设置应用共享
   *
   * POST /open_api/2/tools/app_management/bp_share/
   * @see https://open.oceanengine.com/labels/7/docs/1710413925222415
   */
  "ToolsAppManagementBpShareV2": { method: "POST", path: "/open_api/2/tools/app_management/bp_share/", title: "设置应用共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1710413925222415", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建安卓应用分包
   *
   * POST /open_api/2/tools/app_management/extend_package/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710746028047
   */
  "ToolsAppManagementExtendPackageCreateV2": { method: "POST", path: "/open_api/2/tools/app_management/extend_package/create/", title: "创建安卓应用分包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710746028047", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建安卓应用分包 （支持所有账户体系）
   *
   * POST /open_api/2/tools/app_management/extend_package/create_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1710414234180623
   */
  "ToolsAppManagementExtendPackageCreateV2V2": { method: "POST", path: "/open_api/2/tools/app_management/extend_package/create_v2/", title: "创建安卓应用分包 （支持所有账户体系）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1710414234180623", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAppManagementExtendPackageListV2
   *
   * GET /open_api/2/tools/app_management/extend_package/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp_management%2Fextend_package%2Flist%2F
   */
  "ToolsAppManagementExtendPackageListV2": { method: "GET", path: "/open_api/2/tools/app_management/extend_package/list/", title: "ToolsAppManagementExtendPackageListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp_management%2Fextend_package%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询安卓应用分包列表 （支持所有账户体系）
   *
   * GET /open_api/2/tools/app_management/extend_package/list_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1710414490537101
   */
  "ToolsAppManagementExtendPackageListV2V2": { method: "GET", path: "/open_api/2/tools/app_management/extend_package/list_v2/", title: "查询安卓应用分包列表 （支持所有账户体系）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1710414490537101", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新安卓应用分包版本
   *
   * POST /open_api/2/tools/app_management/extend_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710746645516
   */
  "ToolsAppManagementExtendPackageUpdateV2": { method: "POST", path: "/open_api/2/tools/app_management/extend_package/update/", title: "更新安卓应用分包版本", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710746645516", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新安卓应用分包版本（支持所有账户体系）
   *
   * POST /open_api/2/tools/app_management/extend_package/update_v2/
   * @see https://open.oceanengine.com/labels/7/docs/1785215984044233
   */
  "ToolsAppManagementExtendPackageUpdateV2V2": { method: "POST", path: "/open_api/2/tools/app_management/extend_package/update_v2/", title: "更新安卓应用分包版本（支持所有账户体系）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1785215984044233", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询鸿蒙应用列表
   *
   * GET /open_api/2/tools/app_management/harmony_app_list/
   * @see https://open.oceanengine.com/labels/7/docs/1826461039581386
   */
  "ToolsAppManagementHarmonyAppListV2": { method: "GET", path: "/open_api/2/tools/app_management/harmony_app_list/", title: "查询鸿蒙应用列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1826461039581386", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAppManagementIndustryInfoListV2
   *
   * GET /open_api/2/tools/app_management/industry_info/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp_management%2Findustry_info%2Flist%2F
   */
  "ToolsAppManagementIndustryInfoListV2": { method: "GET", path: "/open_api/2/tools/app_management/industry_info/list/", title: "ToolsAppManagementIndustryInfoListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fapp_management%2Findustry_info%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查看应用共享范围
   *
   * GET /open_api/2/tools/app_management/share_account/list/
   * @see https://open.oceanengine.com/labels/7/docs/1710412460273664
   */
  "ToolsAppManagementShareAccountListV2": { method: "GET", path: "/open_api/2/tools/app_management/share_account/list/", title: "查看应用共享范围", docsUrl: "https://open.oceanengine.com/labels/7/docs/1710412460273664", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新应用共享关系
   *
   * POST /open_api/2/tools/app_management/update/authorization/
   * @see https://open.oceanengine.com/labels/7/docs/1738385189486592
   */
  "ToolsAppManagementUpdateAuthorizationV2": { method: "POST", path: "/open_api/2/tools/app_management/update/authorization/", title: "更新应用共享关系", docsUrl: "https://open.oceanengine.com/labels/7/docs/1738385189486592", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建异步文件上传任务 
   *
   * POST /open_api/2/tools/app_management/upload_task/create/
   * @see https://open.oceanengine.com/labels/7/docs/1714118126561421
   */
  "ToolsAppManagementUploadTaskCreateV2": { method: "POST", path: "/open_api/2/tools/app_management/upload_task/create/", title: "创建异步文件上传任务 ", docsUrl: "https://open.oceanengine.com/labels/7/docs/1714118126561421", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询文件异步上传任务
   *
   * GET /open_api/2/tools/app_management/upload_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1714057019136013
   */
  "ToolsAppManagementUploadTaskListV2": { method: "GET", path: "/open_api/2/tools/app_management/upload_task/list/", title: "查询文件异步上传任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1714057019136013", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小程序/小游戏详情内容
   *
   * GET /open_api/v3.0/tools/asset_link/list/
   * @see https://open.oceanengine.com/labels/7/docs/1778265753535620
   */
  "ToolsAssetLinkListV30": { method: "GET", path: "/open_api/v3.0/tools/asset_link/list/", title: "获取字节小程序/小游戏详情内容", docsUrl: "https://open.oceanengine.com/labels/7/docs/1778265753535620", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAwemeAuthAuthShareAdShareV2
   *
   * POST /open_api/2/tools/aweme_auth/auth_share/ad_share/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Fauth_share%2Fad_share%2F
   */
  "ToolsAwemeAuthAuthShareAdShareV2": { method: "POST", path: "/open_api/2/tools/aweme_auth/auth_share/ad_share/", title: "ToolsAwemeAuthAuthShareAdShareV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Fauth_share%2Fad_share%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAwemeAuthCancelV2
   *
   * POST /open_api/2/tools/aweme_auth/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Fcancel%2F
   */
  "ToolsAwemeAuthCancelV2": { method: "POST", path: "/open_api/2/tools/aweme_auth/cancel/", title: "ToolsAwemeAuthCancelV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Fcancel%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取抖音授权关系
   *
   * GET /open_api/2/tools/aweme_auth_list/
   * @see https://open.oceanengine.com/labels/7/docs/1729983667746823
   */
  "ToolsAwemeAuthListV2": { method: "GET", path: "/open_api/2/tools/aweme_auth_list/", title: "获取抖音授权关系", docsUrl: "https://open.oceanengine.com/labels/7/docs/1729983667746823", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsAwemeAuthRenewalV2
   *
   * POST /open_api/2/tools/aweme_auth/renewal/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Frenewal%2F
   */
  "ToolsAwemeAuthRenewalV2": { method: "POST", path: "/open_api/2/tools/aweme_auth/renewal/", title: "ToolsAwemeAuthRenewalV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2Frenewal%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsAwemeAuthV2
   *
   * POST /open_api/2/tools/aweme_auth/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2F
   */
  "ToolsAwemeAuthV2": { method: "POST", path: "/open_api/2/tools/aweme_auth/", title: "ToolsAwemeAuthV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Faweme_auth%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询抖音号id对应的达人信息
   *
   * GET /open_api/2/tools/aweme_author_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710689703948
   */
  "ToolsAwemeAuthorInfoGetV2": { method: "GET", path: "/open_api/2/tools/aweme_author_info/get/", title: "查询抖音号id对应的达人信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710689703948", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 添加屏蔽用户 
   *
   * POST /open_api/v3.0/tools/aweme_banned/create/
   * @see https://open.oceanengine.com/labels/7/docs/1754804387645448
   */
  "ToolsAwemeBannedCreateV30": { method: "POST", path: "/open_api/v3.0/tools/aweme_banned/create/", title: "添加屏蔽用户\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804387645448", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除屏蔽用户 
   *
   * POST /open_api/v3.0/tools/aweme_banned/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1754804392604743
   */
  "ToolsAwemeBannedDeleteV30": { method: "POST", path: "/open_api/v3.0/tools/aweme_banned/delete/", title: "删除屏蔽用户\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804392604743", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取屏蔽用户列表 
   *
   * GET /open_api/v3.0/tools/aweme_banned/list/
   * @see https://open.oceanengine.com/labels/7/docs/1754804753733632
   */
  "ToolsAwemeBannedListV30": { method: "GET", path: "/open_api/v3.0/tools/aweme_banned/list/", title: "获取屏蔽用户列表\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804753733632", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询抖音类目下的推荐达人
   *
   * GET /open_api/2/tools/aweme_category_top_author/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710689096719
   */
  "ToolsAwemeCategoryTopAuthorGetV2": { method: "GET", path: "/open_api/2/tools/aweme_category_top_author/get/", title: "查询抖音类目下的推荐达人", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710689096719", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询抖音帐号和类目信息
   *
   * GET /open_api/2/tools/aweme_info_search/
   * @see https://open.oceanengine.com/labels/7/docs/1696710687210511
   */
  "ToolsAwemeInfoSearchV2": { method: "GET", path: "/open_api/2/tools/aweme_info_search/", title: "查询抖音帐号和类目信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710687210511", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询抖音类目列表
   *
   * GET /open_api/2/tools/aweme_multi_level_category/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710688389120
   */
  "ToolsAwemeMultiLevelCategoryGetV2": { method: "GET", path: "/open_api/2/tools/aweme_multi_level_category/get/", title: "查询抖音类目列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710688389120", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询抖音类似帐号
   *
   * GET /open_api/2/tools/aweme_similar_author_search/
   * @see https://open.oceanengine.com/labels/7/docs/1696710687807500
   */
  "ToolsAwemeSimilarAuthorSearchV2": { method: "GET", path: "/open_api/2/tools/aweme_similar_author_search/", title: "查询抖音类似帐号", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710687807500", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsBidSuggestV2
   *
   * GET /open_api/2/tools/bid/suggest/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fbid%2Fsuggest%2F
   */
  "ToolsBidSuggestV2": { method: "GET", path: "/open_api/2/tools/bid/suggest/", title: "ToolsBidSuggestV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fbid%2Fsuggest%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询建议出价（巨量营销升级版）
   *
   * GET /open_api/v3.0/tools/bids/suggest/
   * @see https://open.oceanengine.com/labels/7/docs/1771363823169544
   */
  "ToolsBidsSuggestV30": { method: "GET", path: "/open_api/v3.0/tools/bids/suggest/", title: "查询建议出价（巨量营销升级版）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771363823169544", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取项目下可用蓝海关键词
   *
   * GET /open_api/v3.0/tools/blue_flow_keyword/list/
   * @see https://open.oceanengine.com/labels/7/docs/1794683979261140
   */
  "ToolsBlueFlowKeywordListV30": { method: "GET", path: "/open_api/v3.0/tools/blue_flow_keyword/list/", title: "获取项目下可用蓝海关键词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1794683979261140", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取蓝海流量包
   *
   * GET /open_api/v3.0/tools/blue_flow_package/list/
   * @see https://open.oceanengine.com/labels/7/docs/1794683678442643
   */
  "ToolsBlueFlowPackageListV30": { method: "GET", path: "/open_api/v3.0/tools/blue_flow_package/list/", title: "获取蓝海流量包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1794683678442643", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 取消小游戏/小程序/商品库/商品共享关系
   *
   * POST /open_api/v3.0/tools/bp_asset_management/share/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1773102677218368
   */
  "ToolsBpAssetManagementShareCancelV30": { method: "POST", path: "/open_api/v3.0/tools/bp_asset_management/share/cancel/", title: "取消小游戏/小程序/商品库/商品共享关系", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773102677218368", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查看小游戏/小程序共享范围
   *
   * GET /open_api/v3.0/tools/bp_asset_management/share/get/
   * @see https://open.oceanengine.com/labels/7/docs/1773105971421187
   */
  "ToolsBpAssetManagementShareGetV30": { method: "GET", path: "/open_api/v3.0/tools/bp_asset_management/share/get/", title: "查看小游戏/小程序共享范围", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773105971421187", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 设置小游戏&小程序&商品库&商品共享
   *
   * POST /open_api/v3.0/tools/bp_asset_management/share/
   * @see https://open.oceanengine.com/labels/7/docs/1773089427219584
   */
  "ToolsBpAssetManagementShareV30": { method: "POST", path: "/open_api/v3.0/tools/bp_asset_management/share/", title: "设置小游戏&小程序&商品库&商品共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773089427219584", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueBridgeCallCreateV2
   *
   * POST /open_api/2/tools/clue/bridge_call/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fbridge_call%2Fcreate%2F
   */
  "ToolsClueBridgeCallCreateV2": { method: "POST", path: "/open_api/2/tools/clue/bridge_call/create/", title: "ToolsClueBridgeCallCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fbridge_call%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueCallCreateV2
   *
   * POST /open_api/2/tools/clue/call/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall%2Fcreate%2F
   */
  "ToolsClueCallCreateV2": { method: "POST", path: "/open_api/2/tools/clue/call/create/", title: "ToolsClueCallCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueCallVirtualNumberGetV2
   *
   * GET /open_api/2/tools/clue/call_virtual_number/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall_virtual_number%2Fget%2F
   */
  "ToolsClueCallVirtualNumberGetV2": { method: "GET", path: "/open_api/2/tools/clue/call_virtual_number/get/", title: "ToolsClueCallVirtualNumberGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall_virtual_number%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueCallVirtualNumberRefundDetailGetV2
   *
   * GET /open_api/2/tools/clue/call_virtual_number/refund_detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall_virtual_number%2Frefund_detail%2Fget%2F
   */
  "ToolsClueCallVirtualNumberRefundDetailGetV2": { method: "GET", path: "/open_api/2/tools/clue/call_virtual_number/refund_detail/get/", title: "ToolsClueCallVirtualNumberRefundDetailGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcall_virtual_number%2Frefund_detail%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 回传有效线索
   *
   * POST /open_api/2/tools/clue/callback/
   * @see https://open.oceanengine.com/labels/7/docs/1696710631812096
   */
  "ToolsClueCallbackV2": { method: "POST", path: "/open_api/2/tools/clue/callback/", title: "回传有效线索", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710631812096", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueClueOverviewQueryV2
   *
   * GET /open_api/2/tools/clue/clue/overview/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fclue%2Foverview%2Fquery%2F
   */
  "ToolsClueClueOverviewQueryV2": { method: "GET", path: "/open_api/2/tools/clue/clue/overview/query/", title: "ToolsClueClueOverviewQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fclue%2Foverview%2Fquery%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueContactLogListV2
   *
   * GET /open_api/2/tools/clue/contact_log/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Flist%2F
   */
  "ToolsClueContactLogListV2": { method: "GET", path: "/open_api/2/tools/clue/contact_log/list/", title: "ToolsClueContactLogListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueContactLogOverviewQueryV2
   *
   * GET /open_api/2/tools/clue/contact_log/overview/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Foverview%2Fquery%2F
   */
  "ToolsClueContactLogOverviewQueryV2": { method: "GET", path: "/open_api/2/tools/clue/contact_log/overview/query/", title: "ToolsClueContactLogOverviewQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Foverview%2Fquery%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueContactLogRecordUrlGetV2
   *
   * GET /open_api/2/tools/clue/contact_log/record_url/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Frecord_url%2Fget%2F
   */
  "ToolsClueContactLogRecordUrlGetV2": { method: "GET", path: "/open_api/2/tools/clue/contact_log/record_url/get/", title: "ToolsClueContactLogRecordUrlGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fcontact_log%2Frecord_url%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueExtInfoCallbackV2
   *
   * POST /open_api/2/tools/clue/ext_info/callback/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fext_info%2Fcallback%2F
   */
  "ToolsClueExtInfoCallbackV2": { method: "POST", path: "/open_api/2/tools/clue/ext_info/callback/", title: "ToolsClueExtInfoCallbackV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fext_info%2Fcallback%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 建站工具——查询表单详情
   *
   * GET /open_api/2/tools/clue/form/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1696710622245903
   */
  "ToolsClueFormDetailV2": { method: "GET", path: "/open_api/2/tools/clue/form/detail/", title: "建站工具——查询表单详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710622245903", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 建站工具——查询已有表单列表
   *
   * GET /open_api/2/tools/clue/form/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710621705216
   */
  "ToolsClueFormGetV2": { method: "GET", path: "/open_api/2/tools/clue/form/get/", title: "建站工具——查询已有表单列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710621705216", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取线索列表
   *
   * GET /open_api/2/tools/clue/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710631271436
   */
  "ToolsClueGetV2": { method: "GET", path: "/open_api/2/tools/clue/get/", title: "获取线索列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710631271436", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueInfoGetV2
   *
   * GET /open_api/2/tools/clue_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue_info%2Fget%2F
   */
  "ToolsClueInfoGetV2": { method: "GET", path: "/open_api/2/tools/clue_info/get/", title: "ToolsClueInfoGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue_info%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueInfoUpdateV2
   *
   * POST /open_api/2/tools/clue/info/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Finfo%2Fupdate%2F
   */
  "ToolsClueInfoUpdateV2": { method: "POST", path: "/open_api/2/tools/clue/info/update/", title: "ToolsClueInfoUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Finfo%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 本地推线索回传
   *
   * POST /open_api/2/tools/clue/life/callback/
   * @see https://open.oceanengine.com/labels/37/docs/1805613694863499
   */
  "ToolsClueLifeCallbackV2": { method: "POST", path: "/open_api/2/tools/clue/life/callback/", title: "本地推线索回传", docsUrl: "https://open.oceanengine.com/labels/37/docs/1805613694863499", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取本地推线索列表
   *
   * POST /open_api/2/tools/clue/life/get/
   * @see https://open.oceanengine.com/labels/37/docs/1794759460056076
   */
  "ToolsClueLifeGetV2": { method: "POST", path: "/open_api/2/tools/clue/life/get/", title: "获取本地推线索列表", docsUrl: "https://open.oceanengine.com/labels/37/docs/1794759460056076", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueLiteContactGetV2
   *
   * POST /open_api/2/tools/clue/lite/contact/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Flite%2Fcontact%2Fget%2F
   */
  "ToolsClueLiteContactGetV2": { method: "POST", path: "/open_api/2/tools/clue/lite/contact/get/", title: "ToolsClueLiteContactGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Flite%2Fcontact%2Fget%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueLiteContactRecordV2
   *
   * POST /open_api/2/tools/clue/lite/contact/record/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Flite%2Fcontact%2Frecord%2F
   */
  "ToolsClueLiteContactRecordV2": { method: "POST", path: "/open_api/2/tools/clue/lite/contact/record/", title: "ToolsClueLiteContactRecordV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Flite%2Fcontact%2Frecord%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 私信线索转化回传接口
   *
   * POST /open_api/2/tools/clue/private_message/callback/
   * @see https://open.oceanengine.com/labels/7/docs/1826462960148556
   */
  "ToolsCluePrivateMessageCallbackV2": { method: "POST", path: "/open_api/2/tools/clue/private_message/callback/", title: "私信线索转化回传接口", docsUrl: "https://open.oceanengine.com/labels/7/docs/1826462960148556", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRefundDetailGetV2
   *
   * GET /open_api/2/tools/clue/refund_detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_detail%2Fget%2F
   */
  "ToolsClueRefundDetailGetV2": { method: "GET", path: "/open_api/2/tools/clue/refund_detail/get/", title: "ToolsClueRefundDetailGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_detail%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRefundInfoQueryV2
   *
   * POST /open_api/2/tools/clue/refund/info/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund%2Finfo%2Fquery%2F
   */
  "ToolsClueRefundInfoQueryV2": { method: "POST", path: "/open_api/2/tools/clue/refund/info/query/", title: "ToolsClueRefundInfoQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund%2Finfo%2Fquery%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRefundReportGetV2
   *
   * GET /open_api/2/tools/clue/refund_report/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_report%2Fget%2F
   */
  "ToolsClueRefundReportGetV2": { method: "GET", path: "/open_api/2/tools/clue/refund_report/get/", title: "ToolsClueRefundReportGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_report%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRefundViewGetV2
   *
   * GET /open_api/2/tools/clue/refund_view/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_view%2Fget%2F
   */
  "ToolsClueRefundViewGetV2": { method: "GET", path: "/open_api/2/tools/clue/refund_view/get/", title: "ToolsClueRefundViewGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frefund_view%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRobotScriptQueryV2
   *
   * POST /open_api/2/tools/clue/robot/script/query/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Fscript%2Fquery%2F
   */
  "ToolsClueRobotScriptQueryV2": { method: "POST", path: "/open_api/2/tools/clue/robot/script/query/", title: "ToolsClueRobotScriptQueryV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Fscript%2Fquery%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRobotTaskCancelV2
   *
   * POST /open_api/2/tools/clue/robot/task/cancel/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Ftask%2Fcancel%2F
   */
  "ToolsClueRobotTaskCancelV2": { method: "POST", path: "/open_api/2/tools/clue/robot/task/cancel/", title: "ToolsClueRobotTaskCancelV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Ftask%2Fcancel%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueRobotTaskCreateV2
   *
   * POST /open_api/2/tools/clue/robot/task/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Ftask%2Fcreate%2F
   */
  "ToolsClueRobotTaskCreateV2": { method: "POST", path: "/open_api/2/tools/clue/robot/task/create/", title: "ToolsClueRobotTaskCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Frobot%2Ftask%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 建站工具——查询已有智能电话
   *
   * GET /open_api/2/tools/clue/smart_phone/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710621120524
   */
  "ToolsClueSmartPhoneGetV2": { method: "GET", path: "/open_api/2/tools/clue/smart_phone/get/", title: "建站工具——查询已有智能电话", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710621120524", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueWebrtcCreateV2V30
   *
   * POST /open_api/v3.0/tools/clue/webrtc/create/v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fclue%2Fwebrtc%2Fcreate%2Fv2%2F
   */
  "ToolsClueWebrtcCreateV2V30": { method: "POST", path: "/open_api/v3.0/tools/clue/webrtc/create/v2/", title: "ToolsClueWebrtcCreateV2V30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fclue%2Fwebrtc%2Fcreate%2Fv2%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueWebrtcTokenGetV2
   *
   * POST /open_api/2/tools/clue/webrtc/token/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fwebrtc%2Ftoken%2Fget%2F
   */
  "ToolsClueWebrtcTokenGetV2": { method: "POST", path: "/open_api/2/tools/clue/webrtc/token/get/", title: "ToolsClueWebrtcTokenGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fclue%2Fwebrtc%2Ftoken%2Fget%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsClueWebrtcTokenGetV2V30
   *
   * POST /open_api/v3.0/tools/clue/webrtc/token/get/v2/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fclue%2Fwebrtc%2Ftoken%2Fget%2Fv2%2F
   */
  "ToolsClueWebrtcTokenGetV2V30": { method: "POST", path: "/open_api/v3.0/tools/clue/webrtc/token/get/v2/", title: "ToolsClueWebrtcTokenGetV2V30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fclue%2Fwebrtc%2Ftoken%2Fget%2Fv2%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取评论列表 
   *
   * GET /open_api/v3.0/tools/comment/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754803808580608
   */
  "ToolsCommentGetV30": { method: "GET", path: "/open_api/v3.0/tools/comment/get/", title: "获取评论列表\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754803808580608", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 隐藏评论 
   *
   * POST /open_api/v3.0/tools/comment/hide/
   * @see https://open.oceanengine.com/labels/7/docs/1754804147204108
   */
  "ToolsCommentHideV30": { method: "POST", path: "/open_api/v3.0/tools/comment/hide/", title: "隐藏评论\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804147204108", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取评论统计指标
   *
   * GET /open_api/v3.0/tools/comment_metrics/get/
   * @see https://open.oceanengine.com/labels/7/docs/1779551814119427
   */
  "ToolsCommentMetricsGetV30": { method: "GET", path: "/open_api/v3.0/tools/comment_metrics/get/", title: "获取评论统计指标", docsUrl: "https://open.oceanengine.com/labels/7/docs/1779551814119427", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取评论视频ID列表
   *
   * GET /open_api/v3.0/tools/comment/mid2item_id/
   * @see https://open.oceanengine.com/labels/7/docs/1773084580896776
   */
  "ToolsCommentMid2itemIdV30": { method: "GET", path: "/open_api/v3.0/tools/comment/mid2item_id/", title: "获取评论视频ID列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1773084580896776", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取评论回复
   *
   * GET /open_api/v3.0/tools/comment_reply/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754803965480960
   */
  "ToolsCommentReplyGetV30": { method: "GET", path: "/open_api/v3.0/tools/comment_reply/get/", title: "获取评论回复", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754803965480960", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 回复评论
   *
   * POST /open_api/v3.0/tools/comment/reply/
   * @see https://open.oceanengine.com/labels/7/docs/1754803971592192
   */
  "ToolsCommentReplyV30": { method: "POST", path: "/open_api/v3.0/tools/comment/reply/", title: "回复评论", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754803971592192", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsCommentStickOnTopV30
   *
   * POST /open_api/v3.0/tools/comment/stick_on_top/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fcomment%2Fstick_on_top%2F
   */
  "ToolsCommentStickOnTopV30": { method: "POST", path: "/open_api/v3.0/tools/comment/stick_on_top/", title: "ToolsCommentStickOnTopV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fcomment%2Fstick_on_top%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量添加屏蔽词
   *
   * POST /open_api/v3.0/tools/comment/terms_banned/add/
   * @see https://open.oceanengine.com/labels/7/docs/1754804283302926
   */
  "ToolsCommentTermsBannedAddV30": { method: "POST", path: "/open_api/v3.0/tools/comment/terms_banned/add/", title: "批量添加屏蔽词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804283302926", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量删除屏蔽词 
   *
   * POST /open_api/v3.0/tools/comment/terms_banned/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1754804370901006
   */
  "ToolsCommentTermsBannedDeleteV30": { method: "POST", path: "/open_api/v3.0/tools/comment/terms_banned/delete/", title: "批量删除屏蔽词\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804370901006", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取屏蔽词 
   *
   * GET /open_api/v3.0/tools/comment/terms_banned/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754804382543880
   */
  "ToolsCommentTermsBannedGetV30": { method: "GET", path: "/open_api/v3.0/tools/comment/terms_banned/get/", title: "获取屏蔽词\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804382543880", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新屏蔽词 
   *
   * POST /open_api/v3.0/tools/comment/terms_banned/update/
   * @see https://open.oceanengine.com/labels/7/docs/1754804376185863
   */
  "ToolsCommentTermsBannedUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/comment/terms_banned/update/", title: "更新屏蔽词\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754804376185863", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询国家/区域信息
   *
   * GET /open_api/2/tools/country/info/
   * @see https://open.oceanengine.com/labels/7/docs/1709606374050823
   */
  "ToolsCountryInfoV2": { method: "GET", path: "/open_api/2/tools/country/info/", title: "查询国家/区域信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1709606374050823", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询动态创意词包
   *
   * GET /open_api/2/tools/creative_word/select/
   * @see https://open.oceanengine.com/labels/7/docs/1696710718137356
   */
  "ToolsCreativeWordSelectV2": { method: "GET", path: "/open_api/2/tools/creative_word/select/", title: "查询动态创意词包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710718137356", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取诊断建议
   *
   * GET /open_api/v3.0/tools/diagnosis/suggestion/get/
   * @see https://open.oceanengine.com/labels/7/docs/1847119758118924
   */
  "ToolsDiagnosisSuggestionGetV30": { method: "GET", path: "/open_api/v3.0/tools/diagnosis/suggestion/get/", title: "获取诊断建议", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847119758118924", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询包解析状态
   *
   * GET /open_api/2/tools/download/package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710744774656
   */
  "ToolsDownloadPackageGetV2": { method: "GET", path: "/open_api/2/tools/download/package/get/", title: "查询包解析状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710744774656", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 提交解析应用包任务
   *
   * POST /open_api/2/tools/download/package/parse/
   * @see https://open.oceanengine.com/labels/7/docs/1696710744089612
   */
  "ToolsDownloadPackageParseV2": { method: "POST", path: "/open_api/2/tools/download/package/parse/", title: "提交解析应用包任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710744089612", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询安卓应用母包详情
   *
   * GET /open_api/v3.0/tools/ebp/app/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1847390783454532
   */
  "ToolsEbpAppDetailV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/app/detail/", title: "查询安卓应用母包详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847390783454532", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建安卓分包
   *
   * POST /open_api/v3.0/tools/ebp/app_extend/create/
   * @see https://open.oceanengine.com/labels/7/docs/1846773756545432
   */
  "ToolsEbpAppExtendCreateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/app_extend/create/", title: "创建安卓分包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846773756545432", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询安卓应用分包列表
   *
   * GET /open_api/v3.0/tools/ebp/app_extend/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846776873285771
   */
  "ToolsEbpAppExtendListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/app_extend/list/", title: "查询安卓应用分包列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846776873285771", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新安卓应用分包版本
   *
   * POST /open_api/v3.0/tools/ebp/app_extend/update/
   * @see https://open.oceanengine.com/labels/7/docs/1846831390014537
   */
  "ToolsEbpAppExtendUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/app_extend/update/", title: "更新安卓应用分包版本", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846831390014537", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取游戏预约列表
   *
   * GET /open_api/v3.0/tools/ebp/app_game_book/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487494516931
   */
  "ToolsEbpAppGameBookListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/app_game_book/list/", title: "获取游戏预约列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487494516931", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取安卓应用列表
   *
   * GET /open_api/v3.0/tools/ebp/app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1846773030696265
   */
  "ToolsEbpAppListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/app/list/", title: "获取安卓应用列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1846773030696265", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 发布安卓应用母包
   *
   * POST /open_api/v3.0/tools/ebp/app/publish/
   * @see https://open.oceanengine.com/labels/7/docs/1847487521798855
   */
  "ToolsEbpAppPublishV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/app/publish/", title: "发布安卓应用母包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487521798855", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新安卓应用母包
   *
   * POST /open_api/v3.0/tools/ebp/app/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847462300780553
   */
  "ToolsEbpAppUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/app/update/", title: "更新安卓应用母包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847462300780553", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 取消资产共享
   *
   * POST /open_api/v3.0/tools/ebp/asset/auth/cancel/
   * @see https://open.oceanengine.com/labels/7/docs/1848328204842138
   */
  "ToolsEbpAssetAuthCancelV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/asset/auth/cancel/", title: "取消资产共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848328204842138", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询资产共享范围
   *
   * GET /open_api/v3.0/tools/ebp/asset/auth/list/
   * @see https://open.oceanengine.com/labels/7/docs/1848326390305163
   */
  "ToolsEbpAssetAuthListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/asset/auth/list/", title: "查询资产共享范围", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848326390305163", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 添加资产共享
   *
   * POST /open_api/v3.0/tools/ebp/asset/auth/
   * @see https://open.oceanengine.com/labels/7/docs/1848327327721671
   */
  "ToolsEbpAssetAuthV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/asset/auth/", title: "添加资产共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1848327327721671", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台素材共享
   *
   * POST /open_api/v3.0/tools/ebp/material/auth/create/
   * @see https://open.oceanengine.com/labels/7/docs/1854120947746880
   */
  "ToolsEbpMaterialAuthCreateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/material/auth/create/", title: "升级版工作台素材共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1854120947746880", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台取消素材共享
   *
   * POST /open_api/v3.0/tools/ebp/material/auth/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1855452458903624
   */
  "ToolsEbpMaterialAuthDeleteV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/material/auth/delete/", title: "升级版工作台取消素材共享", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855452458903624", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台查询素材共享范围
   *
   * GET /open_api/v3.0/tools/ebp/material/auth/list/
   * @see https://open.oceanengine.com/labels/7/docs/1855451294366919
   */
  "ToolsEbpMaterialAuthListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/material/auth/list/", title: "升级版工作台查询素材共享范围", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855451294366919", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取组织维度视频列表（ebp）
   *
   * GET /open_api/v3.0/tools/ebp/material/list/
   * @see https://open.oceanengine.com/labels/7/docs/1871578054932524
   */
  "ToolsEbpMaterialListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/material/list/", title: "获取组织维度视频列表（ebp）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1871578054932524", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 新建字节小程序
   *
   * POST /open_api/v3.0/tools/ebp/micro_applet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487532455299
   */
  "ToolsEbpMicroAppletCreateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/micro_applet/create/", title: "新建字节小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487532455299", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小程序link详情
   *
   * GET /open_api/v3.0/tools/ebp/micro_applet/link/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487745198092
   */
  "ToolsEbpMicroAppletLinkListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/micro_applet/link/list/", title: "获取字节小程序link详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487745198092", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小程序列表
   *
   * GET /open_api/v3.0/tools/ebp/micro_applet/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487562418308
   */
  "ToolsEbpMicroAppletListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/micro_applet/list/", title: "获取字节小程序列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487562418308", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新字节小程序
   *
   * POST /open_api/v3.0/tools/ebp/micro_applet/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487541689347
   */
  "ToolsEbpMicroAppletUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/micro_applet/update/", title: "更新字节小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487541689347", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 新增字节小游戏
   *
   * POST /open_api/v3.0/tools/ebp/micro_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487590982660
   */
  "ToolsEbpMicroGameCreateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/micro_game/create/", title: "新增字节小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487590982660", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小游戏链接详情
   *
   * GET /open_api/v3.0/tools/ebp/micro_game/link/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487751501836
   */
  "ToolsEbpMicroGameLinkListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/micro_game/link/list/", title: "获取字节小游戏链接详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487751501836", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小游戏列表
   *
   * GET /open_api/v3.0/tools/ebp/micro_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487579709768
   */
  "ToolsEbpMicroGameListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/micro_game/list/", title: "获取字节小游戏列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487579709768", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新字节小游戏
   *
   * POST /open_api/v3.0/tools/ebp/micro_game/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487694947340
   */
  "ToolsEbpMicroGameUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/micro_game/update/", title: "更新字节小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487694947340", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * EBP组织-删除试玩/直玩素材
   *
   * POST /open_api/v3.0/tools/ebp/playable/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1870677089664795
   */
  "ToolsEbpPlayableDeleteV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/playable/delete/", title: "EBP组织-删除试玩/直玩素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1870677089664795", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取账户可用的组织试玩/直玩素材
   *
   * GET /open_api/v3.0/tools/ebp/playable/list/
   * @see https://open.oceanengine.com/labels/7/docs/1870677509430347
   */
  "ToolsEbpPlayableListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/playable/list/", title: "获取账户可用的组织试玩/直玩素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1870677509430347", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台组织上传试玩/直玩素材
   *
   * POST /open_api/v3.0/tools/ebp/playable/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1870677384747337
   */
  "ToolsEbpPlayableUploadV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/playable/upload/", title: "升级版工作台组织上传试玩/直玩素材", docsUrl: "https://open.oceanengine.com/labels/7/docs/1870677384747337", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsEbpStarTaskGetV30
   *
   * GET /open_api/v3.0/tools/ebp/star_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Febp%2Fstar_task%2Fget%2F
   */
  "ToolsEbpStarTaskGetV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/star_task/get/", title: "ToolsEbpStarTaskGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Febp%2Fstar_task%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版巨量引擎工作台账户星广联投任务列表
   *
   * GET /open_api/v3.0/tools/ebp/star_task/list/
   * @see https://open.oceanengine.com/labels/7/docs/1868949066560512
   */
  "ToolsEbpStarTaskListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/star_task/list/", title: "获取升级版巨量引擎工作台账户星广联投任务列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1868949066560512", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版巨量引擎工作台账户星广联投任务已投稿达人信息
   *
   * GET /open_api/v3.0/tools/ebp/star_task/task_author/get/
   * @see https://open.oceanengine.com/labels/7/docs/1868950079138956
   */
  "ToolsEbpStarTaskTaskAuthorGetV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/star_task/task_author/get/", title: "获取升级版巨量引擎工作台账户星广联投任务已投稿达人信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1868950079138956", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsEbpStarTaskTaskAuthorVedioGetV30
   *
   * GET /open_api/v3.0/tools/ebp/star_task/task_author_vedio/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Febp%2Fstar_task%2Ftask_author_vedio%2Fget%2F
   */
  "ToolsEbpStarTaskTaskAuthorVedioGetV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/star_task/task_author_vedio/get/", title: "ToolsEbpStarTaskTaskAuthorVedioGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Febp%2Fstar_task%2Ftask_author_vedio%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取升级版巨量引擎工作台账户星广联投视频数据
   *
   * GET /open_api/v3.0/tools/ebp/star_task/task_video_data/get/
   * @see https://open.oceanengine.com/labels/7/docs/1868950518957124
   */
  "ToolsEbpStarTaskTaskVideoDataGetV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/star_task/task_video_data/get/", title: "获取升级版巨量引擎工作台账户星广联投视频数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1868950518957124", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取组织认证及授权主体列表
   *
   * GET /open_api/v3.0/tools/ebp/subject/list/
   * @see https://open.oceanengine.com/labels/7/docs/1855089467521035
   */
  "ToolsEbpSubjectListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/subject/list/", title: "获取组织认证及授权主体列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855089467521035", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台获取视频素材评估标签
   *
   * GET /open_api/v3.0/tools/ebp/video_attributes/list/
   * @see https://open.oceanengine.com/labels/7/docs/1855453250877440
   */
  "ToolsEbpVideoAttributesListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/video_attributes/list/", title: "升级版工作台获取视频素材评估标签", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855453250877440", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台批量删除视频
   *
   * POST /open_api/v3.0/tools/ebp/video/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1855450454372428
   */
  "ToolsEbpVideoDeleteV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/video/delete/", title: "升级版工作台批量删除视频", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855450454372428", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台更新视频
   *
   * POST /open_api/v3.0/tools/ebp/video/update/
   * @see https://open.oceanengine.com/labels/7/docs/1855449500037184
   */
  "ToolsEbpVideoUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/video/update/", title: "升级版工作台更新视频", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855449500037184", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 升级版工作台上传视频
   *
   * POST /open_api/v3.0/tools/ebp/video/upload/
   * @see https://open.oceanengine.com/labels/7/docs/1855448450527623
   */
  "ToolsEbpVideoUploadV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/video/upload/", title: "升级版工作台上传视频", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855448450527623", kind: "multipart", responseKind: "json", fileFields: ["video_file"] },
  /**
   * 新建微信小程序
   *
   * POST /open_api/v3.0/tools/ebp/wechat_applet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487724040192
   */
  "ToolsEbpWechatAppletCreateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/wechat_applet/create/", title: "新建微信小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487724040192", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取微信小程序列表
   *
   * GET /open_api/v3.0/tools/ebp/wechat_applet/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487716271104
   */
  "ToolsEbpWechatAppletListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/wechat_applet/list/", title: "获取微信小程序列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487716271104", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新微信小程序
   *
   * POST /open_api/v3.0/tools/ebp/wechat_applet/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487757321420
   */
  "ToolsEbpWechatAppletUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/wechat_applet/update/", title: "更新微信小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487757321420", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 新建微信小游戏
   *
   * POST /open_api/v3.0/tools/ebp/wechat_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1847487731257344
   */
  "ToolsEbpWechatGameCreateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/wechat_game/create/", title: "新建微信小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487731257344", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 微信小游戏列表
   *
   * GET /open_api/v3.0/tools/ebp/wechat_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1847487703955596
   */
  "ToolsEbpWechatGameListV30": { method: "GET", path: "/open_api/v3.0/tools/ebp/wechat_game/list/", title: "微信小游戏列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487703955596", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新微信小游戏
   *
   * POST /open_api/v3.0/tools/ebp/wechat_game/update/
   * @see https://open.oceanengine.com/labels/7/docs/1847487737913356
   */
  "ToolsEbpWechatGameUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/ebp/wechat_game/update/", title: "更新微信小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1847487737913356", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询受众预估结果
   *
   * GET /open_api/2/tools/estimate_audience/
   * @see https://open.oceanengine.com/labels/7/docs/1696710675422208
   */
  "ToolsEstimateAudienceV2": { method: "GET", path: "/open_api/2/tools/estimate_audience/", title: "查询受众预估结果", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710675422208", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取预估点击成本
   *
   * GET /open_api/2/tools/estimated_price/get/
   * @see https://open.oceanengine.com/labels/7/docs/1717213696709710
   */
  "ToolsEstimatedPriceGetV2": { method: "GET", path: "/open_api/2/tools/estimated_price/get/", title: "获取预估点击成本", docsUrl: "https://open.oceanengine.com/labels/7/docs/1717213696709710", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取已创建资产详情（新）
   *
   * GET /open_api/2/tools/event/all_assets/detail/
   * @see https://open.oceanengine.com/labels/7/docs/1800988620664954
   */
  "ToolsEventAllAssetsDetailV2": { method: "GET", path: "/open_api/2/tools/event/all_assets/detail/", title: "获取已创建资产详情（新）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1800988620664954", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取账户下资产列表
   *
   * GET /open_api/2/tools/event/all_assets/list/
   * @see https://open.oceanengine.com/labels/7/docs/1800985709803914
   */
  "ToolsEventAllAssetsListV2": { method: "GET", path: "/open_api/2/tools/event/all_assets/list/", title: "获取账户下资产列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1800985709803914", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsEventAssetsGetV2
   *
   * GET /open_api/2/tools/event/assets/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fevent%2Fassets%2Fget%2F
   */
  "ToolsEventAssetsGetV2": { method: "GET", path: "/open_api/2/tools/event/assets/get/", title: "ToolsEventAssetsGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fevent%2Fassets%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsEventConvertOptimizedGoalGetV30
   *
   * GET /open_api/v3.0/tools/event_convert/optimized_goal/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fevent_convert%2Foptimized_goal%2Fget%2F
   */
  "ToolsEventConvertOptimizedGoalGetV30": { method: "GET", path: "/open_api/v3.0/tools/event_convert/optimized_goal/get/", title: "ToolsEventConvertOptimizedGoalGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fevent_convert%2Foptimized_goal%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsForbiddenLinkGreyGetV30
   *
   * GET /open_api/v3.0/tools/forbidden_link/grey/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fforbidden_link%2Fgrey%2Fget%2F
   */
  "ToolsForbiddenLinkGreyGetV30": { method: "GET", path: "/open_api/v3.0/tools/forbidden_link/grey/get/", title: "ToolsForbiddenLinkGreyGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fforbidden_link%2Fgrey%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询白名单能力
   *
   * GET /open_api/v3.0/tools/gray/get/
   * @see https://open.oceanengine.com/labels/7/docs/1763407285579840
   */
  "ToolsGrayGetV30": { method: "GET", path: "/open_api/v3.0/tools/gray/get/", title: "查询白名单能力", docsUrl: "https://open.oceanengine.com/labels/7/docs/1763407285579840", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsHotMaterialDeriveAdoptV30
   *
   * POST /open_api/v3.0/tools/hot_material_derive/adopt/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fadopt%2F
   */
  "ToolsHotMaterialDeriveAdoptV30": { method: "POST", path: "/open_api/v3.0/tools/hot_material_derive/adopt/", title: "ToolsHotMaterialDeriveAdoptV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fadopt%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsHotMaterialDeriveGetV30
   *
   * GET /open_api/v3.0/tools/hot_material_derive/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fget%2F
   */
  "ToolsHotMaterialDeriveGetV30": { method: "GET", path: "/open_api/v3.0/tools/hot_material_derive/get/", title: "ToolsHotMaterialDeriveGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsHotMaterialDeriveListV30
   *
   * GET /open_api/v3.0/tools/hot_material_derive/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Flist%2F
   */
  "ToolsHotMaterialDeriveListV30": { method: "GET", path: "/open_api/v3.0/tools/hot_material_derive/list/", title: "ToolsHotMaterialDeriveListV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsHotMaterialDeriveSubmitV30
   *
   * POST /open_api/v3.0/tools/hot_material_derive/submit/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fsubmit%2F
   */
  "ToolsHotMaterialDeriveSubmitV30": { method: "POST", path: "/open_api/v3.0/tools/hot_material_derive/submit/", title: "ToolsHotMaterialDeriveSubmitV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fhot_material_derive%2Fsubmit%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取不活跃账户列表
   *
   * GET /open_api/v3.0/tools/inactive_advertiser/list/
   * @see https://open.oceanengine.com/labels/7/docs/1834548530596872
   */
  "ToolsInactiveAdvertiserListV30": { method: "GET", path: "/open_api/v3.0/tools/inactive_advertiser/list/", title: "获取不活跃账户列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1834548530596872", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取行业列表
   *
   * GET /open_api/2/tools/industry/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710677879808
   */
  "ToolsIndustryGetV2": { method: "GET", path: "/open_api/2/tools/industry/get/", title: "获取行业列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710677879808", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 行为关键词查询
   *
   * GET /open_api/2/tools/interest_action/action/keyword/
   * @see https://open.oceanengine.com/labels/7/docs/1696710705721356
   */
  "ToolsInterestActionActionKeywordV2": { method: "GET", path: "/open_api/2/tools/interest_action/action/keyword/", title: "行为关键词查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710705721356", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 兴趣行为类目关键词id转词
   *
   * GET /open_api/2/tools/interest_action/id2word/
   * @see https://open.oceanengine.com/labels/7/docs/1696710707561472
   */
  "ToolsInterestActionId2wordV2": { method: "GET", path: "/open_api/2/tools/interest_action/id2word/", title: "兴趣行为类目关键词id转词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710707561472", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 兴趣关键词查询
   *
   * GET /open_api/2/tools/interest_action/interest/keyword/
   * @see https://open.oceanengine.com/labels/7/docs/1696710706958348
   */
  "ToolsInterestActionInterestKeywordV2": { method: "GET", path: "/open_api/2/tools/interest_action/interest/keyword/", title: "兴趣关键词查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710706958348", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取行为兴趣推荐关键词
   *
   * GET /open_api/2/tools/interest_action/keyword/suggest/
   * @see https://open.oceanengine.com/labels/7/docs/1696710708197388
   */
  "ToolsInterestActionKeywordSuggestV2": { method: "GET", path: "/open_api/2/tools/interest_action/keyword/suggest/", title: "获取行为兴趣推荐关键词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710708197388", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsIsSupportUniversalGetV2
   *
   * GET /open_api/2/tools/is_support_universal/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fis_support_universal%2Fget%2F
   */
  "ToolsIsSupportUniversalGetV2": { method: "GET", path: "/open_api/2/tools/is_support_universal/get/", title: "ToolsIsSupportUniversalGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fis_support_universal%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsJointBidCreateV30
   *
   * POST /open_api/v3.0/tools/joint_bid/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fcreate%2F
   */
  "ToolsJointBidCreateV30": { method: "POST", path: "/open_api/v3.0/tools/joint_bid/create/", title: "ToolsJointBidCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsJointBidGetV30
   *
   * GET /open_api/v3.0/tools/joint_bid/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fget%2F
   */
  "ToolsJointBidGetV30": { method: "GET", path: "/open_api/v3.0/tools/joint_bid/get/", title: "ToolsJointBidGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsJointBidUpdateV30
   *
   * POST /open_api/v3.0/tools/joint_bid/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fupdate%2F
   */
  "ToolsJointBidUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/joint_bid/update/", title: "ToolsJointBidUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Fjoint_bid%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 设置优词提量系数和生效维度
   *
   * POST /open_api/v3.0/tools/keywords_bid_ratio/create/
   * @see https://open.oceanengine.com/labels/7/docs/1760582291523597
   */
  "ToolsKeywordsBidRatioCreateV30": { method: "POST", path: "/open_api/v3.0/tools/keywords_bid_ratio/create/", title: "设置优词提量系数和生效维度", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760582291523597", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除优词计划
   *
   * POST /open_api/v3.0/tools/keywords_bid_ratio/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1760582420219982
   */
  "ToolsKeywordsBidRatioDeleteV30": { method: "POST", path: "/open_api/v3.0/tools/keywords_bid_ratio/delete/", title: "删除优词计划", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760582420219982", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询优词提量系数信息
   *
   * GET /open_api/v3.0/tools/keywords_bid_ratio/get/
   * @see https://open.oceanengine.com/labels/7/docs/1760582415753224
   */
  "ToolsKeywordsBidRatioGetV30": { method: "GET", path: "/open_api/v3.0/tools/keywords_bid_ratio/get/", title: "查询优词提量系数信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760582415753224", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新优词提量系数和生效维度
   *
   * POST /open_api/v3.0/tools/keywords_bid_ratio/update/
   * @see https://open.oceanengine.com/labels/7/docs/1760582412101703
   */
  "ToolsKeywordsBidRatioUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/keywords_bid_ratio/update/", title: "更新优词提量系数和生效维度", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760582412101703", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询优词绑定的项目信息
   *
   * GET /open_api/v3.0/tools/keywords_project_info/get/
   * @see https://open.oceanengine.com/labels/7/docs/1760582423563278
   */
  "ToolsKeywordsProjectInfoGetV30": { method: "GET", path: "/open_api/v3.0/tools/keywords_project_info/get/", title: "查询优词绑定的项目信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760582423563278", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建落地页组
   *
   * POST /open_api/2/tools/landing_group/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710628472844
   */
  "ToolsLandingGroupCreateV2": { method: "POST", path: "/open_api/2/tools/landing_group/create/", title: "创建落地页组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710628472844", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取落地页组
   *
   * GET /open_api/2/tools/landing_group/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710629043212
   */
  "ToolsLandingGroupGetV2": { method: "GET", path: "/open_api/2/tools/landing_group/get/", title: "获取落地页组", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710629043212", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新落地页组站点状态
   *
   * POST /open_api/2/tools/landing_group/site_opt_status/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710629600256
   */
  "ToolsLandingGroupSiteOptStatusUpdateV2": { method: "POST", path: "/open_api/2/tools/landing_group/site_opt_status/update/", title: "更新落地页组站点状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710629600256", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新落地页组信息
   *
   * POST /open_api/2/tools/landing_group/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710630182912
   */
  "ToolsLandingGroupUpdateV2": { method: "POST", path: "/open_api/2/tools/landing_group/update/", title: "更新落地页组信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710630182912", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询授权直播抖音达人列表
   *
   * GET /open_api/2/tools/live_authorize/list/
   * @see https://open.oceanengine.com/labels/7/docs/1703442176442381
   */
  "ToolsLiveAuthorizeListV2": { method: "GET", path: "/open_api/2/tools/live_authorize/list/", title: "查询授权直播抖音达人列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1703442176442381", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取操作日志详情
   *
   * GET /open_api/2/tools/log_search/detail/get/
   * @see https://open.oceanengine.com/labels/7/docs/1854930515444873
   */
  "ToolsLogSearchDetailGetV2": { method: "GET", path: "/open_api/2/tools/log_search/detail/get/", title: "获取操作日志详情", docsUrl: "https://open.oceanengine.com/labels/7/docs/1854930515444873", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 操作日志查询
   *
   * GET /open_api/2/tools/log_search/
   * @see https://open.oceanengine.com/labels/7/docs/1696710682956815
   */
  "ToolsLogSearchV2": { method: "GET", path: "/open_api/2/tools/log_search/", title: "操作日志查询", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710682956815", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 开启素材起量
   *
   * POST /open_api/v3.0/tools/material_raise/create/
   * @see https://open.oceanengine.com/labels/7/docs/1841780308383884
   */
  "ToolsMaterialRaiseCreateV30": { method: "POST", path: "/open_api/v3.0/tools/material_raise/create/", title: "开启素材起量", docsUrl: "https://open.oceanengine.com/labels/7/docs/1841780308383884", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取素材起量方案列表
   *
   * GET /open_api/v3.0/tools/material_raise/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843312933108864
   */
  "ToolsMaterialRaiseGetV30": { method: "GET", path: "/open_api/v3.0/tools/material_raise/get/", title: "获取素材起量方案列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1843312933108864", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取起量中素材列表
   *
   * GET /open_api/v3.0/tools/material_raise/material_ids/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843313912696841
   */
  "ToolsMaterialRaiseMaterialIdsGetV30": { method: "GET", path: "/open_api/v3.0/tools/material_raise/material_ids/get/", title: "获取起量中素材列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1843313912696841", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取素材起量记录列表
   *
   * GET /open_api/v3.0/tools/material_raise_records/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843311260215556
   */
  "ToolsMaterialRaiseRecordsGetV30": { method: "GET", path: "/open_api/v3.0/tools/material_raise_records/get/", title: "获取素材起量记录列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1843311260215556", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取素材起量状态
   *
   * GET /open_api/v3.0/tools/material_raise_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1843312582214784
   */
  "ToolsMaterialRaiseStatusGetV30": { method: "GET", path: "/open_api/v3.0/tools/material_raise_status/get/", title: "获取素材起量状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1843312582214784", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 关停素材起量任务
   *
   * POST /open_api/v3.0/tools/material_raise/stop/
   * @see https://open.oceanengine.com/labels/7/docs/1843312719969155
   */
  "ToolsMaterialRaiseStopV30": { method: "POST", path: "/open_api/v3.0/tools/material_raise/stop/", title: "关停素材起量任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1843312719969155", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建字节小程序
   *
   * POST /open_api/v3.0/tools/micro_app/create/
   * @see https://open.oceanengine.com/labels/7/docs/1780613896121344
   */
  "ToolsMicroAppCreateV30": { method: "POST", path: "/open_api/v3.0/tools/micro_app/create/", title: "创建字节小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780613896121344", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小程序
   *
   * GET /open_api/v3.0/tools/micro_app/list/
   * @see https://open.oceanengine.com/labels/7/docs/1778249831680135
   */
  "ToolsMicroAppListV30": { method: "GET", path: "/open_api/v3.0/tools/micro_app/list/", title: "获取字节小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1778249831680135", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新字节小程序
   *
   * POST /open_api/v3.0/tools/micro_app/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780614097935372
   */
  "ToolsMicroAppUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/micro_app/update/", title: "更新字节小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780614097935372", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询字节小游戏归因激活时间窗
   *
   * GET /open_api/v3.0/tools/micro_game/convert_window/get/
   * @see https://open.oceanengine.com/labels/7/docs/1824379978676224
   */
  "ToolsMicroGameConvertWindowGetV30": { method: "GET", path: "/open_api/v3.0/tools/micro_game/convert_window/get/", title: "查询字节小游戏归因激活时间窗", docsUrl: "https://open.oceanengine.com/labels/7/docs/1824379978676224", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 修改字节小游戏归因激活时间窗
   *
   * POST /open_api/v3.0/tools/micro_game/convert_window/update/
   * @see https://open.oceanengine.com/labels/7/docs/1824379551374339
   */
  "ToolsMicroGameConvertWindowUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/micro_game/convert_window/update/", title: "修改字节小游戏归因激活时间窗", docsUrl: "https://open.oceanengine.com/labels/7/docs/1824379551374339", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建字节小游戏
   *
   * POST /open_api/v3.0/tools/micro_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1780614284853257
   */
  "ToolsMicroGameCreateV30": { method: "POST", path: "/open_api/v3.0/tools/micro_game/create/", title: "创建字节小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780614284853257", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取字节小游戏
   *
   * GET /open_api/v3.0/tools/micro_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1778100726681600
   */
  "ToolsMicroGameListV30": { method: "GET", path: "/open_api/v3.0/tools/micro_game/list/", title: "获取字节小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1778100726681600", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新字节小游戏
   *
   * POST /open_api/v3.0/tools/micro_game/update/
   * @see https://open.oceanengine.com/labels/7/docs/1780614388338698
   */
  "ToolsMicroGameUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/micro_game/update/", title: "更新字节小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1780614388338698", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsNoBidSuggestBidV2
   *
   * GET /open_api/2/tools/no_bid/suggest_bid/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fno_bid%2Fsuggest_bid%2F
   */
  "ToolsNoBidSuggestBidV2": { method: "GET", path: "/open_api/2/tools/no_bid/suggest_bid/", title: "ToolsNoBidSuggestBidV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fno_bid%2Fsuggest_bid%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 通过优化目标获取橙子落地页站点信息 
   *
   * GET /open_api/v3.0/tools/orange_site/get/
   * @see https://open.oceanengine.com/labels/7/docs/1755162848410635
   */
  "ToolsOrangeSiteGetV30": { method: "GET", path: "/open_api/v3.0/tools/orange_site/get/", title: "通过优化目标获取橙子落地页站点信息\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1755162848410635", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPioneerProgramAttachmentUploadV2
   *
   * POST /open_api/2/tools/pioneer_program/attachment/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpioneer_program%2Fattachment%2Fupload%2F
   */
  "ToolsPioneerProgramAttachmentUploadV2": { method: "POST", path: "/open_api/2/tools/pioneer_program/attachment/upload/", title: "ToolsPioneerProgramAttachmentUploadV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpioneer_program%2Fattachment%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["file_data"] },
  /**
   * ToolsPlayableCloudGameListV2
   *
   * GET /open_api/2/tools/playable/cloud_game/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fcloud_game%2Flist%2F
   */
  "ToolsPlayableCloudGameListV2": { method: "GET", path: "/open_api/2/tools/playable/cloud_game/list/", title: "ToolsPlayableCloudGameListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fcloud_game%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPlayableCreateV2
   *
   * POST /open_api/2/tools/playable/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fcreate%2F
   */
  "ToolsPlayableCreateV2": { method: "POST", path: "/open_api/2/tools/playable/create/", title: "ToolsPlayableCreateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPlayableGrantResultV2
   *
   * GET /open_api/2/tools/playable/grant/result/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fgrant%2Fresult%2F
   */
  "ToolsPlayableGrantResultV2": { method: "GET", path: "/open_api/2/tools/playable/grant/result/", title: "ToolsPlayableGrantResultV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fgrant%2Fresult%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPlayableGrantV2
   *
   * POST /open_api/2/tools/playable/grant/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fgrant%2F
   */
  "ToolsPlayableGrantV2": { method: "POST", path: "/open_api/2/tools/playable/grant/", title: "ToolsPlayableGrantV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fgrant%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPlayableListGetV2
   *
   * GET /open_api/2/tools/playable_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable_list%2Fget%2F
   */
  "ToolsPlayableListGetV2": { method: "GET", path: "/open_api/2/tools/playable_list/get/", title: "ToolsPlayableListGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable_list%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPlayableSaveV2
   *
   * POST /open_api/2/tools/playable/save/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fsave%2F
   */
  "ToolsPlayableSaveV2": { method: "POST", path: "/open_api/2/tools/playable/save/", title: "ToolsPlayableSaveV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fsave%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPlayableUploadV2
   *
   * POST /open_api/2/tools/playable/upload/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fupload%2F
   */
  "ToolsPlayableUploadV2": { method: "POST", path: "/open_api/2/tools/playable/upload/", title: "ToolsPlayableUploadV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fupload%2F", kind: "multipart", responseKind: "json", fileFields: ["playable_package"] },
  /**
   * ToolsPlayableValidateV2
   *
   * GET /open_api/2/tools/playable/validate/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fvalidate%2F
   */
  "ToolsPlayableValidateV2": { method: "GET", path: "/open_api/2/tools/playable/validate/", title: "ToolsPlayableValidateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fplayable%2Fvalidate%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPreAuditGetV2
   *
   * GET /open_api/2/tools/pre_audit/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpre_audit%2Fget%2F
   */
  "ToolsPreAuditGetV2": { method: "GET", path: "/open_api/2/tools/pre_audit/get/", title: "ToolsPreAuditGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpre_audit%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPreAuditSendV2
   *
   * POST /open_api/2/tools/pre_audit/send/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpre_audit%2Fsend%2F
   */
  "ToolsPreAuditSendV2": { method: "POST", path: "/open_api/2/tools/pre_audit/send/", title: "ToolsPreAuditSendV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpre_audit%2Fsend%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPrivativeWordAdAddV2
   *
   * POST /open_api/2/tools/privative_word/ad/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fad%2Fadd%2F
   */
  "ToolsPrivativeWordAdAddV2": { method: "POST", path: "/open_api/2/tools/privative_word/ad/add/", title: "ToolsPrivativeWordAdAddV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fad%2Fadd%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPrivativeWordAdUpdateV2
   *
   * POST /open_api/2/tools/privative_word/ad/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fad%2Fupdate%2F
   */
  "ToolsPrivativeWordAdUpdateV2": { method: "POST", path: "/open_api/2/tools/privative_word/ad/update/", title: "ToolsPrivativeWordAdUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fad%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量获取项目否定词 
   *
   * POST /open_api/v3.0/tools/privative_word/batch_get/
   * @see https://open.oceanengine.com/labels/7/docs/1756247565488132
   */
  "ToolsPrivativeWordBatchGetV30": { method: "POST", path: "/open_api/v3.0/tools/privative_word/batch_get/", title: "批量获取项目否定词\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1756247565488132", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPrivativeWordCampaignAddV2
   *
   * POST /open_api/2/tools/privative_word/campaign/add/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fcampaign%2Fadd%2F
   */
  "ToolsPrivativeWordCampaignAddV2": { method: "POST", path: "/open_api/2/tools/privative_word/campaign/add/", title: "ToolsPrivativeWordCampaignAddV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fcampaign%2Fadd%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPrivativeWordCampaignUpdateV2
   *
   * POST /open_api/2/tools/privative_word/campaign/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fcampaign%2Fupdate%2F
   */
  "ToolsPrivativeWordCampaignUpdateV2": { method: "POST", path: "/open_api/2/tools/privative_word/campaign/update/", title: "ToolsPrivativeWordCampaignUpdateV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fcampaign%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPrivativeWordGetV2
   *
   * GET /open_api/2/tools/privative_word/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fget%2F
   */
  "ToolsPrivativeWordGetV2": { method: "GET", path: "/open_api/2/tools/privative_word/get/", title: "ToolsPrivativeWordGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fprivative_word%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 批量添加项目否定词 
   *
   * POST /open_api/v3.0/tools/privative_word/project/add/
   * @see https://open.oceanengine.com/labels/7/docs/1756247416572931
   */
  "ToolsPrivativeWordProjectAddV30": { method: "POST", path: "/open_api/v3.0/tools/privative_word/project/add/", title: "批量添加项目否定词\n", docsUrl: "https://open.oceanengine.com/labels/7/docs/1756247416572931", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新项目否定词
   *
   * POST /open_api/v3.0/tools/privative_word/project/update/
   * @see https://open.oceanengine.com/labels/7/docs/1756247493882947
   */
  "ToolsPrivativeWordProjectUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/privative_word/project/update/", title: "批量更新项目否定词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1756247493882947", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量新增营销否定词
   *
   * POST /open_api/v3.0/tools/privative_word/promotion/add/
   * @see https://open.oceanengine.com/labels/7/docs/1760581052656648
   */
  "ToolsPrivativeWordPromotionAddV30": { method: "POST", path: "/open_api/v3.0/tools/privative_word/promotion/add/", title: "批量新增营销否定词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760581052656648", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量更新营销否定词
   *
   * POST /open_api/v3.0/tools/privative_word/promotion/update/
   * @see https://open.oceanengine.com/labels/7/docs/1760581111863374
   */
  "ToolsPrivativeWordPromotionUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/privative_word/promotion/update/", title: "批量更新营销否定词", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760581111863374", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更新项目自选素材状态
   *
   * POST /open_api/v3.0/tools/project_material_type/update/
   * @see https://open.oceanengine.com/labels/7/docs/1869423189855306
   */
  "ToolsProjectMaterialTypeUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/project_material_type/update/", title: "更新项目自选素材状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1869423189855306", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsPromotionCardRecommendGetV2
   *
   * GET /open_api/2/tools/promotion_card/recommend/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpromotion_card%2Frecommend%2Fget%2F
   */
  "ToolsPromotionCardRecommendGetV2": { method: "GET", path: "/open_api/2/tools/promotion_card/recommend/get/", title: "ToolsPromotionCardRecommendGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpromotion_card%2Frecommend%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsPromotionCardRecommendTitleGetV2
   *
   * GET /open_api/2/tools/promotion_card/recommend_title/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpromotion_card%2Frecommend_title%2Fget%2F
   */
  "ToolsPromotionCardRecommendTitleGetV2": { method: "GET", path: "/open_api/2/tools/promotion_card/recommend_title/get/", title: "ToolsPromotionCardRecommendTitleGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fpromotion_card%2Frecommend_title%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 采纳单元诊断建议
   *
   * POST /open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/
   * @see https://open.oceanengine.com/labels/7/docs/1754716131916803
   */
  "ToolsPromotionDiagnosisSuggestionAcceptV30": { method: "POST", path: "/open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/", title: "采纳单元诊断建议", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754716131916803", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取单元诊断建议
   *
   * GET /open_api/v3.0/tools/promotion_diagnosis/suggestion/get/
   * @see https://open.oceanengine.com/labels/7/docs/1754715780584459
   */
  "ToolsPromotionDiagnosisSuggestionGetV30": { method: "GET", path: "/open_api/v3.0/tools/promotion_diagnosis/suggestion/get/", title: "获取单元诊断建议", docsUrl: "https://open.oceanengine.com/labels/7/docs/1754715780584459", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 开启/更新一键起量
   *
   * POST /open_api/v3.0/tools/promotion_raise/set/
   * @see https://open.oceanengine.com/labels/7/docs/1761603589597259
   */
  "ToolsPromotionRaiseSetV30": { method: "POST", path: "/open_api/v3.0/tools/promotion_raise/set/", title: "开启/更新一键起量", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761603589597259", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取营销起量状态
   *
   * GET /open_api/v3.0/tools/promotion_raise_status_current_ids/get/
   * @see https://open.oceanengine.com/labels/7/docs/1765406483367948
   */
  "ToolsPromotionRaiseStatusCurrentIdsGetV30": { method: "GET", path: "/open_api/v3.0/tools/promotion_raise_status_current_ids/get/", title: "获取营销起量状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1765406483367948", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取一键起量方案列表
   *
   * GET /open_api/v3.0/tools/promotion_raise_status/get/
   * @see https://open.oceanengine.com/labels/7/docs/1761603513577476
   */
  "ToolsPromotionRaiseStatusGetV30": { method: "GET", path: "/open_api/v3.0/tools/promotion_raise_status/get/", title: "获取一键起量方案列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761603513577476", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 关停正在起量的营销
   *
   * POST /open_api/v3.0/tools/promotion_raise/stop/
   * @see https://open.oceanengine.com/labels/7/docs/1761603666011139
   */
  "ToolsPromotionRaiseStopV30": { method: "POST", path: "/open_api/v3.0/tools/promotion_raise/stop/", title: "关停正在起量的营销", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761603666011139", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取起量版本信息
   *
   * GET /open_api/v3.0/tools/promotion_raise_version/get/
   * @see https://open.oceanengine.com/labels/7/docs/1761603462670403
   */
  "ToolsPromotionRaiseVersionGetV30": { method: "GET", path: "/open_api/v3.0/tools/promotion_raise_version/get/", title: "获取起量版本信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761603462670403", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询在投计划配额
   *
   * GET /open_api/2/tools/quota/get/
   * @see https://open.oceanengine.com/labels/7/docs/1731070251873293
   */
  "ToolsQuotaGetV2": { method: "GET", path: "/open_api/2/tools/quota/get/", title: "查询在投计划配额", docsUrl: "https://open.oceanengine.com/labels/7/docs/1731070251873293", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取地域列表
   *
   * GET /open_api/2/tools/region/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710678458380
   */
  "ToolsRegionGetV2": { method: "GET", path: "/open_api/2/tools/region/get/", title: "获取地域列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710678458380", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsRtaGetInfoTmpV2
   *
   * GET /open_api/2/tools/rta/get_info_tmp/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frta%2Fget_info_tmp%2F
   */
  "ToolsRtaGetInfoTmpV2": { method: "GET", path: "/open_api/2/tools/rta/get_info_tmp/", title: "ToolsRtaGetInfoTmpV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frta%2Fget_info_tmp%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取RTA策略数据
   *
   * GET /open_api/2/tools/rta/get_info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710749205519
   */
  "ToolsRtaGetInfoV2": { method: "GET", path: "/open_api/2/tools/rta/get_info/", title: "获取RTA策略数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710749205519", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取可用的RTA策略
   *
   * GET /open_api/2/tools/rta/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710749917196
   */
  "ToolsRtaGetV2": { method: "GET", path: "/open_api/2/tools/rta/get/", title: "获取可用的RTA策略", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710749917196", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取RTA策略绑定信息列表
   *
   * GET /open_api/v3.0/tools/rta/scope/get/
   * @see https://open.oceanengine.com/labels/7/docs/1760867710819341
   */
  "ToolsRtaScopeGetV30": { method: "GET", path: "/open_api/v3.0/tools/rta/scope/get/", title: "获取RTA策略绑定信息列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1760867710819341", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 设置账户下RTA策略生效范围
   *
   * POST /open_api/2/tools/rta/set_scope/
   * @see https://open.oceanengine.com/labels/7/docs/1727976691326976
   */
  "ToolsRtaSetScopeV2": { method: "POST", path: "/open_api/2/tools/rta/set_scope/", title: "设置账户下RTA策略生效范围", docsUrl: "https://open.oceanengine.com/labels/7/docs/1727976691326976", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 批量启停账户下RTA策略
   *
   * POST /open_api/2/tools/rta/status_update/
   * @see https://open.oceanengine.com/labels/7/docs/1727976605031439
   */
  "ToolsRtaStatusUpdateV2": { method: "POST", path: "/open_api/2/tools/rta/status_update/", title: "批量启停账户下RTA策略", docsUrl: "https://open.oceanengine.com/labels/7/docs/1727976605031439", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsRubeexPlayableAdListV2
   *
   * GET /open_api/2/tools/rubeex_playable/ad_list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frubeex_playable%2Fad_list%2F
   */
  "ToolsRubeexPlayableAdListV2": { method: "GET", path: "/open_api/2/tools/rubeex_playable/ad_list/", title: "ToolsRubeexPlayableAdListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frubeex_playable%2Fad_list%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsRubeexPlayableListV2
   *
   * GET /open_api/2/tools/rubeex_playable/list/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frubeex_playable%2Flist%2F
   */
  "ToolsRubeexPlayableListV2": { method: "GET", path: "/open_api/2/tools/rubeex_playable/list/", title: "ToolsRubeexPlayableListV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Frubeex_playable%2Flist%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取作品场景
   *
   * GET /open_api/2/tools/rubeex/remark/
   * @see https://open.oceanengine.com/labels/7/docs/1701620936632388
   */
  "ToolsRubeexRemarkV2": { method: "GET", path: "/open_api/2/tools/rubeex/remark/", title: "获取作品场景", docsUrl: "https://open.oceanengine.com/labels/7/docs/1701620936632388", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取作品版本信息
   *
   * GET /open_api/2/tools/rubeex/version/get/
   * @see https://open.oceanengine.com/labels/7/docs/1701620989640707
   */
  "ToolsRubeexVersionGetV2": { method: "GET", path: "/open_api/2/tools/rubeex/version/get/", title: "获取作品版本信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1701620989640707", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取快投推荐出价系数
   *
   * GET /open_api/2/tools/search_bid_ratio/get/
   * @see https://open.oceanengine.com/labels/7/docs/1740289237468175
   */
  "ToolsSearchBidRatioGetV2": { method: "GET", path: "/open_api/2/tools/search_bid_ratio/get/", title: "获取快投推荐出价系数", docsUrl: "https://open.oceanengine.com/labels/7/docs/1740289237468175", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 建站工具-建站复制
   *
   * POST /open_api/2/tools/site/copy/
   * @see https://open.oceanengine.com/labels/7/docs/1696710623908864
   */
  "ToolsSiteCopyV2": { method: "POST", path: "/open_api/2/tools/site/copy/", title: "建站工具-建站复制", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710623908864", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建橙子建站站点
   *
   * POST /open_api/2/tools/site/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710617712640
   */
  "ToolsSiteCreateV2": { method: "POST", path: "/open_api/2/tools/site/create/", title: "创建橙子建站站点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710617712640", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取落地页预约表单信息
   *
   * GET /open_api/2/tools/site/forms/list/
   * @see https://open.oceanengine.com/labels/7/docs/1696710622810127
   */
  "ToolsSiteFormsListV2": { method: "GET", path: "/open_api/2/tools/site/forms/list/", title: "获取落地页预约表单信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710622810127", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取橙子建站站点列表
   *
   * GET /open_api/2/tools/site/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710620579852
   */
  "ToolsSiteGetV2": { method: "GET", path: "/open_api/2/tools/site/get/", title: "获取橙子建站站点列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710620579852", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 建站工具-建站样式复制（跨账户）
   *
   * POST /open_api/2/tools/site/handsel/
   * @see https://open.oceanengine.com/labels/7/docs/1696710623352844
   */
  "ToolsSiteHandselV2": { method: "POST", path: "/open_api/2/tools/site/handsel/", title: "建站工具-建站样式复制（跨账户）", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710623352844", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取橙子建站站点预览地址
   *
   * GET /open_api/2/tools/site/preview/
   * @see https://open.oceanengine.com/labels/7/docs/1696710619437056
   */
  "ToolsSitePreviewV2": { method: "GET", path: "/open_api/2/tools/site/preview/", title: "获取橙子建站站点预览地址", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710619437056", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取橙子建站站点详细信息
   *
   * GET /open_api/2/tools/site/read/
   * @see https://open.oceanengine.com/labels/7/docs/1696710620022799
   */
  "ToolsSiteReadV2": { method: "GET", path: "/open_api/2/tools/site/read/", title: "获取橙子建站站点详细信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710620022799", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 基于站点创建模板
   *
   * POST /open_api/2/tools/site_template/create/
   * @see https://open.oceanengine.com/labels/7/docs/1722273160450059
   */
  "ToolsSiteTemplateCreateV2": { method: "POST", path: "/open_api/2/tools/site_template/create/", title: "基于站点创建模板", docsUrl: "https://open.oceanengine.com/labels/7/docs/1722273160450059", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取站点模版列表
   *
   * GET /open_api/2/tools/site_template/get/
   * @see https://open.oceanengine.com/labels/7/docs/1722273219292292
   */
  "ToolsSiteTemplateGetV2": { method: "GET", path: "/open_api/2/tools/site_template/get/", title: "获取站点模版列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1722273219292292", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取模板/站点URL
   *
   * GET /open_api/2/tools/site_template/pic_url/get/
   * @see https://open.oceanengine.com/labels/7/docs/1772995231995911
   */
  "ToolsSiteTemplatePicUrlGetV2": { method: "GET", path: "/open_api/2/tools/site_template/pic_url/get/", title: "获取模板/站点URL", docsUrl: "https://open.oceanengine.com/labels/7/docs/1772995231995911", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取模版预览链接
   *
   * GET /open_api/2/tools/site_template/preview/
   * @see https://open.oceanengine.com/labels/7/docs/1722273233146891
   */
  "ToolsSiteTemplatePreviewV2": { method: "GET", path: "/open_api/2/tools/site_template/preview/", title: "获取模版预览链接", docsUrl: "https://open.oceanengine.com/labels/7/docs/1722273233146891", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 基于模板创建站点
   *
   * POST /open_api/2/tools/site_template/site/create/
   * @see https://open.oceanengine.com/labels/7/docs/1722273197263875
   */
  "ToolsSiteTemplateSiteCreateV2": { method: "POST", path: "/open_api/2/tools/site_template/site/create/", title: "基于模板创建站点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1722273197263875", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 更改橙子建站站点状态
   *
   * POST /open_api/2/tools/site/update_status/
   * @see https://open.oceanengine.com/labels/7/docs/1696710618884096
   */
  "ToolsSiteUpdateStatusV2": { method: "POST", path: "/open_api/2/tools/site/update_status/", title: "更改橙子建站站点状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710618884096", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 修改橙子建站站点
   *
   * POST /open_api/2/tools/site/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710618300431
   */
  "ToolsSiteUpdateV2": { method: "POST", path: "/open_api/2/tools/site/update/", title: "修改橙子建站站点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710618300431", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsStarTaskSettlementConfigV2
   *
   * GET /open_api/2/tools/star_task/settlement_config/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fstar_task%2Fsettlement_config%2F
   */
  "ToolsStarTaskSettlementConfigV2": { method: "GET", path: "/open_api/2/tools/star_task/settlement_config/", title: "ToolsStarTaskSettlementConfigV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fstar_task%2Fsettlement_config%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsStarTaskTitleTopicGetV2
   *
   * GET /open_api/2/tools/star_task/title_topic/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fstar_task%2Ftitle_topic%2Fget%2F
   */
  "ToolsStarTaskTitleTopicGetV2": { method: "GET", path: "/open_api/2/tools/star_task/title_topic/get/", title: "ToolsStarTaskTitleTopicGetV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Ftools%2Fstar_task%2Ftitle_topic%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取营销建议起量预算
   *
   * GET /open_api/v3.0/tools/suggest_budget/get/
   * @see https://open.oceanengine.com/labels/7/docs/1761603631358979
   */
  "ToolsSuggestBudgetGetV30": { method: "GET", path: "/open_api/v3.0/tools/suggest_budget/get/", title: "获取营销建议起量预算", docsUrl: "https://open.oceanengine.com/labels/7/docs/1761603631358979", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 新建优选起量任务
   *
   * POST /open_api/2/tools/task_raise/create/
   * @see https://open.oceanengine.com/labels/7/docs/1733956164012035
   */
  "ToolsTaskRaiseCreateV2": { method: "POST", path: "/open_api/2/tools/task_raise/create/", title: "新建优选起量任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1733956164012035", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询优选起量任务数据
   *
   * GET /open_api/2/tools/task_raise/data/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733956354030596
   */
  "ToolsTaskRaiseDataGetV2": { method: "GET", path: "/open_api/2/tools/task_raise/data/get/", title: "查询优选起量任务数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1733956354030596", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询优选起量任务
   *
   * GET /open_api/2/tools/task_raise/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733956250006603
   */
  "ToolsTaskRaiseGetV2": { method: "GET", path: "/open_api/2/tools/task_raise/get/", title: "查询优选起量任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1733956250006603", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查询优选起量状态
   *
   * GET /open_api/2/tools/task_raise/optimization_ids/get/
   * @see https://open.oceanengine.com/labels/7/docs/1733956327213060
   */
  "ToolsTaskRaiseOptimizationIdsGetV2": { method: "GET", path: "/open_api/2/tools/task_raise/optimization_ids/get/", title: "查询优选起量状态", docsUrl: "https://open.oceanengine.com/labels/7/docs/1733956327213060", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 关闭优选起量任务
   *
   * POST /open_api/2/tools/task_raise/status/stop/
   * @see https://open.oceanengine.com/labels/7/docs/1733956297312259
   */
  "ToolsTaskRaiseStatusStopV2": { method: "POST", path: "/open_api/2/tools/task_raise/status/stop/", title: "关闭优选起量任务", docsUrl: "https://open.oceanengine.com/labels/7/docs/1733956297312259", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除第三方落地页站点
   *
   * POST /open_api/2/tools/third_site/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710626717696
   */
  "ToolsThirdSiteDeleteV2": { method: "POST", path: "/open_api/2/tools/third_site/delete/", title: "删除第三方落地页站点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710626717696", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取第三方落地页站点列表
   *
   * GET /open_api/2/tools/third_site/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710624992256
   */
  "ToolsThirdSiteGetV2": { method: "GET", path: "/open_api/2/tools/third_site/get/", title: "获取第三方落地页站点列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710624992256", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取第三方落地页预览地址
   *
   * GET /open_api/2/tools/third_site/preview/
   * @see https://open.oceanengine.com/labels/7/docs/1696710627256332
   */
  "ToolsThirdSitePreviewV2": { method: "GET", path: "/open_api/2/tools/third_site/preview/", title: "获取第三方落地页预览地址", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710627256332", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 修改第三方落地页站点
   *
   * POST /open_api/2/tools/third_site/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710626095116
   */
  "ToolsThirdSiteUpdateV2": { method: "POST", path: "/open_api/2/tools/third_site/update/", title: "修改第三方落地页站点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710626095116", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * ToolsToolsTaskDetailGetV30
   *
   * GET /open_api/v3.0/tools/tools_task_detail/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Ftools_task_detail%2Fget%2F
   */
  "ToolsToolsTaskDetailGetV30": { method: "GET", path: "/open_api/v3.0/tools/tools_task_detail/get/", title: "ToolsToolsTaskDetailGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Ftools_task_detail%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * ToolsToolsTaskGetV30
   *
   * GET /open_api/v3.0/tools/tools_task/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Ftools_task%2Fget%2F
   */
  "ToolsToolsTaskGetV30": { method: "GET", path: "/open_api/v3.0/tools/tools_task/get/", title: "ToolsToolsTaskGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Ftools%2Ftools_task%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建穿山甲流量包
   *
   * POST /open_api/2/tools/union/flow_package/create/
   * @see https://open.oceanengine.com/labels/7/docs/1696710721249295
   */
  "ToolsUnionFlowPackageCreateV2": { method: "POST", path: "/open_api/2/tools/union/flow_package/create/", title: "创建穿山甲流量包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710721249295", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 删除穿山甲流量包
   *
   * POST /open_api/2/tools/union/flow_package/delete/
   * @see https://open.oceanengine.com/labels/7/docs/1696710722514956
   */
  "ToolsUnionFlowPackageDeleteV2": { method: "POST", path: "/open_api/2/tools/union/flow_package/delete/", title: "删除穿山甲流量包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710722514956", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取穿山甲流量包
   *
   * GET /open_api/2/tools/union/flow_package/get/
   * @see https://open.oceanengine.com/labels/7/docs/1696710720565248
   */
  "ToolsUnionFlowPackageGetV2": { method: "GET", path: "/open_api/2/tools/union/flow_package/get/", title: "获取穿山甲流量包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710720565248", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查看2.0rit数据
   *
   * GET /open_api/v3.0/tools/union/flow_package/promotion/report/
   * @see https://open.oceanengine.com/labels/7/docs/1775179912274944
   */
  "ToolsUnionFlowPackagePromotionReportV30": { method: "GET", path: "/open_api/v3.0/tools/union/flow_package/promotion/report/", title: "查看2.0rit数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1775179912274944", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 查看rit数据
   *
   * GET /open_api/2/tools/union/flow_package/report/
   * @see https://open.oceanengine.com/labels/7/docs/1696710723136512
   */
  "ToolsUnionFlowPackageReportV2": { method: "GET", path: "/open_api/2/tools/union/flow_package/report/", title: "查看rit数据", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710723136512", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 修改穿山甲流量包
   *
   * POST /open_api/2/tools/union/flow_package/update/
   * @see https://open.oceanengine.com/labels/7/docs/1696710721833984
   */
  "ToolsUnionFlowPackageUpdateV2": { method: "POST", path: "/open_api/2/tools/union/flow_package/update/", title: "修改穿山甲流量包", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710721833984", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 查询视频是否挂载下载类锚点
   *
   * GET /open_api/2/tools/video/check_available_anchor/
   * @see https://open.oceanengine.com/labels/7/docs/1729984030929924
   */
  "ToolsVideoCheckAvailableAnchorV2": { method: "GET", path: "/open_api/2/tools/video/check_available_anchor/", title: "查询视频是否挂载下载类锚点", docsUrl: "https://open.oceanengine.com/labels/7/docs/1729984030929924", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 获取视频智能封面
   *
   * GET /open_api/2/tools/video_cover/suggest/
   * @see https://open.oceanengine.com/labels/7/docs/1696710602404864
   */
  "ToolsVideoCoverSuggestV2": { method: "GET", path: "/open_api/2/tools/video_cover/suggest/", title: "获取视频智能封面", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710602404864", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 创建微信小程序
   *
   * POST /open_api/v3.0/tools/wechat_applet/create/
   * @see https://open.oceanengine.com/labels/7/docs/1771744149686286
   */
  "ToolsWechatAppletCreateV30": { method: "POST", path: "/open_api/v3.0/tools/wechat_applet/create/", title: "创建微信小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771744149686286", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取微信小程序列表
   *
   * GET /open_api/v3.0/tools/wechat_applet/list/
   * @see https://open.oceanengine.com/labels/7/docs/1771203622020111
   */
  "ToolsWechatAppletListV30": { method: "GET", path: "/open_api/v3.0/tools/wechat_applet/list/", title: "获取微信小程序列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771203622020111", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 更新微信小程序
   *
   * POST /open_api/v3.0/tools/wechat_applet/update/
   * @see https://open.oceanengine.com/labels/7/docs/1771744756803659
   */
  "ToolsWechatAppletUpdateV30": { method: "POST", path: "/open_api/v3.0/tools/wechat_applet/update/", title: "更新微信小程序", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771744756803659", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 创建微信小游戏
   *
   * POST /open_api/v3.0/tools/wechat_game/create/
   * @see https://open.oceanengine.com/labels/7/docs/1771744962990147
   */
  "ToolsWechatGameCreateV30": { method: "POST", path: "/open_api/v3.0/tools/wechat_game/create/", title: "创建微信小游戏", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771744962990147", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 获取微信小游戏列表
   *
   * GET /open_api/v3.0/tools/wechat_game/list/
   * @see https://open.oceanengine.com/labels/7/docs/1771362185154564
   */
  "ToolsWechatGameListV30": { method: "GET", path: "/open_api/v3.0/tools/wechat_game/list/", title: "获取微信小游戏列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1771362185154564", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * UniProjectAwemeAuthorizedGetV30
   *
   * GET /open_api/v3.0/uni_project/aweme/authorized/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Faweme%2Fauthorized%2Fget%2F
   */
  "UniProjectAwemeAuthorizedGetV30": { method: "GET", path: "/open_api/v3.0/uni_project/aweme/authorized/get/", title: "UniProjectAwemeAuthorizedGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Faweme%2Fauthorized%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * UniProjectCreateV30
   *
   * POST /open_api/v3.0/uni_project/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fcreate%2F
   */
  "UniProjectCreateV30": { method: "POST", path: "/open_api/v3.0/uni_project/create/", title: "UniProjectCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * UniProjectListGetV30
   *
   * GET /open_api/v3.0/uni_project_list/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project_list%2Fget%2F
   */
  "UniProjectListGetV30": { method: "GET", path: "/open_api/v3.0/uni_project_list/get/", title: "UniProjectListGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project_list%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * UniProjectMonetizationModeUpdateV30
   *
   * POST /open_api/v3.0/uni_project/monetization_mode/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fmonetization_mode%2Fupdate%2F
   */
  "UniProjectMonetizationModeUpdateV30": { method: "POST", path: "/open_api/v3.0/uni_project/monetization_mode/update/", title: "UniProjectMonetizationModeUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fmonetization_mode%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * UniProjectUpdateV30
   *
   * POST /open_api/v3.0/uni_project/update/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fupdate%2F
   */
  "UniProjectUpdateV30": { method: "POST", path: "/open_api/v3.0/uni_project/update/", title: "UniProjectUpdateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Funi_project%2Fupdate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * UploadStatementV2
   *
   * POST /open_api/2/upload/statement/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fupload%2Fstatement%2F
   */
  "UploadStatementV2": { method: "POST", path: "/open_api/2/upload/statement/", title: "UploadStatementV2", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2F2%2Fupload%2Fstatement%2F", kind: "multipart", responseKind: "json", fileFields: ["file"] },
  /**
   * 获取授权User信息
   *
   * GET /open_api/2/user/info/
   * @see https://open.oceanengine.com/labels/7/docs/1696710507039756
   */
  "UserInfoV2": { method: "GET", path: "/open_api/2/user/info/", title: "获取授权User信息", docsUrl: "https://open.oceanengine.com/labels/7/docs/1696710507039756", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 钱包充值校验
   *
   * GET /open_api/v3.0/wallet/charge/verify/get/
   * @see https://open.oceanengine.com/labels/7/docs/1855620253598148
   */
  "WalletChargeVerifyGetV30": { method: "GET", path: "/open_api/v3.0/wallet/charge/verify/get/", title: "钱包充值校验", docsUrl: "https://open.oceanengine.com/labels/7/docs/1855620253598148", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * 钱包对公充值
   *
   * POST /open_api/v3.0/wallet/prepay_charge/generate_remittance_code/create/
   * @see https://open.oceanengine.com/labels/7/docs/1859993655883840
   */
  "WalletPrepayChargeGenerateRemittanceCodeCreateV30": { method: "POST", path: "/open_api/v3.0/wallet/prepay_charge/generate_remittance_code/create/", title: "钱包对公充值", docsUrl: "https://open.oceanengine.com/labels/7/docs/1859993655883840", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * 钱包查询汇款码列表
   *
   * GET /open_api/v3.0/wallet/remittance_code/list/get/
   * @see https://open.oceanengine.com/labels/7/docs/1859992775252292
   */
  "WalletRemittanceCodeListGetV30": { method: "GET", path: "/open_api/v3.0/wallet/remittance_code/list/get/", title: "钱包查询汇款码列表", docsUrl: "https://open.oceanengine.com/labels/7/docs/1859992775252292", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * YuntuAudienceInfoCreateV30
   *
   * POST /open_api/v3.0/yuntu/audience_info/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fcreate%2F
   */
  "YuntuAudienceInfoCreateV30": { method: "POST", path: "/open_api/v3.0/yuntu/audience_info/create/", title: "YuntuAudienceInfoCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * YuntuAudienceInfoDeleteV30
   *
   * POST /open_api/v3.0/yuntu/audience_info/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fdelete%2F
   */
  "YuntuAudienceInfoDeleteV30": { method: "POST", path: "/open_api/v3.0/yuntu/audience_info/delete/", title: "YuntuAudienceInfoDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * YuntuAudienceInfoGetV30
   *
   * GET /open_api/v3.0/yuntu/audience_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fget%2F
   */
  "YuntuAudienceInfoGetV30": { method: "GET", path: "/open_api/v3.0/yuntu/audience_info/get/", title: "YuntuAudienceInfoGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_info%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * YuntuAudienceLabelCreateV30
   *
   * POST /open_api/v3.0/yuntu/audience_label/create/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fcreate%2F
   */
  "YuntuAudienceLabelCreateV30": { method: "POST", path: "/open_api/v3.0/yuntu/audience_label/create/", title: "YuntuAudienceLabelCreateV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fcreate%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * YuntuAudienceLabelDeleteV30
   *
   * POST /open_api/v3.0/yuntu/audience_label/delete/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fdelete%2F
   */
  "YuntuAudienceLabelDeleteV30": { method: "POST", path: "/open_api/v3.0/yuntu/audience_label/delete/", title: "YuntuAudienceLabelDeleteV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fdelete%2F", kind: "json", responseKind: "json", fileFields: [] },
  /**
   * YuntuAudienceLabelGetV30
   *
   * GET /open_api/v3.0/yuntu/audience_label/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fget%2F
   */
  "YuntuAudienceLabelGetV30": { method: "GET", path: "/open_api/v3.0/yuntu/audience_label/get/", title: "YuntuAudienceLabelGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Faudience_label%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
  /**
   * YuntuBrandInfoGetV30
   *
   * GET /open_api/v3.0/yuntu/brand_info/get/
   * @see https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Fbrand_info%2Fget%2F
   */
  "YuntuBrandInfoGetV30": { method: "GET", path: "/open_api/v3.0/yuntu/brand_info/get/", title: "YuntuBrandInfoGetV30", docsUrl: "https://open.oceanengine.com/labels/search?s=%2Fopen_api%2Fv3.0%2Fyuntu%2Fbrand_info%2Fget%2F", kind: "query", responseKind: "json", fileFields: [] },
} as const;

export type EndpointName = keyof typeof endpoints;

export interface EndpointRequestMap {
  "AccountFundGetV30": { "account_ids": number[]; "account_type": Models.AccountFundGetV30AccountType; "grant_type_split"?: Models.AccountFundGetV30GrantTypeSplit };
  "AccountUpdateV30": Models.AccountUpdateV30Request;
  "AdBillingUniqueIdGetV30": { "advertiser_id": number; "count": number; "unique_id_type": Models.AdBillingUniqueIdGetV30UniqueIdType };
  "AdConvertSignalV2": Models.AdConvertSignalV2Request;
  "AdCostProtectStatusGetV2": { "advertiser_id": number; "ad_ids": number[] };
  "AdGetV2": { "advertiser_id"?: number; "fields"?: string[]; "filtering"?: Models.AdGetV2Filtering; "page"?: number; "page_size"?: number };
  "AdRejectReasonV2": { "ad_ids"?: number[]; "advertiser_id"?: number };
  "AdShopInfoUpdateV30": Models.AdShopInfoUpdateV30Request;
  "AdUdUpdateV2": Models.AdUdUpdateV2Request;
  "AdUpdateBidV2": Models.AdUpdateBidV2Request;
  "AdUpdateBudgetV2": Models.AdUpdateBudgetV2Request;
  "AdvConvertOleConvertV2": Models.AdvConvertOleConvertV2Request;
  "AdvertiserAttachmentUploadV30": { "advertiser_id": number; "attachment_type": Models.AdvertiserAttachmentUploadV30AttachmentType; "filename": string; "image_data": UploadFile };
  "AdvertiserAvatarGetV2": { "advertiser_id": number };
  "AdvertiserAvatarSubmitV2": Models.AdvertiserAvatarSubmitV2Request;
  "AdvertiserAvatarUploadV2": { "advertiser_id": number; "image_file": UploadFile };
  "AdvertiserBudgetGetV2": { "advertiser_ids": number[] };
  "AdvertiserDeliveryPkgConfigV30": { "advertiser_id"?: number; "first_industry_id": number; "second_industry_id": number; "third_industry_id": number };
  "AdvertiserDeliveryPkgDeleteV30": Models.AdvertiserDeliveryPkgDeleteV30Request;
  "AdvertiserDeliveryPkgGetV30": { "advertiser_id": number; "pkg_id": number };
  "AdvertiserDeliveryPkgSubmitV30": Models.AdvertiserDeliveryPkgSubmitV30Request;
  "AdvertiserDeliveryQualificationDeleteV30": Models.AdvertiserDeliveryQualificationDeleteV30Request;
  "AdvertiserDeliveryQualificationListV30": { "advertiser_id": number; "qualification_type"?: Models.AdvertiserDeliveryQualificationListV30QualificationType; "status"?: Models.AdvertiserDeliveryQualificationListV30Status; "page": number; "page_size": number };
  "AdvertiserDeliveryQualificationSubmitV30": Models.AdvertiserDeliveryQualificationSubmitV30Request;
  "AdvertiserFundDailyStatV2": { "advertiser_id": number; "start_date"?: string; "end_date"?: string; "page"?: number; "page_size"?: number; "account_type"?: Models.AdvertiserFundDailyStatV2AccountType };
  "AdvertiserFundDetailGrantV2": { "advertiser_id": number; "start_date"?: string; "end_date"?: string; "page"?: number; "page_size"?: number };
  "AdvertiserFundGetV2": { "advertiser_id"?: number; "grant_type_split"?: Models.AdvertiserFundGetV2GrantTypeSplit };
  "AdvertiserFundGrantTransactionGetV2": { "advertiser_id": number; "page"?: string; "page_size"?: string; "start_time": string; "end_time": string; "transaction_type"?: string };
  "AdvertiserFundTransactionGetV2": { "advertiser_id": number; "start_date": string; "end_date": string; "transaction_type": Models.AdvertiserFundTransactionGetV2TransactionType; "page"?: number; "page_size"?: number };
  "AdvertiserInfoV2": { "advertiser_ids"?: number[]; "fields"?: string[] };
  "AdvertiserPublicInfoV2": { "advertiser_ids"?: number[] };
  "AdvertiserQualificationCreateV2V2": Models.AdvertiserQualificationCreateV2V2Request;
  "AdvertiserQualificationGetV30": { "advertiser_id": number };
  "AdvertiserQualificationSelectV2V2": { "advertiser_id": number };
  "AdvertiserQualificationSubmitV30": Models.AdvertiserQualificationSubmitV30Request;
  "AdvertiserTransferableFundGetV2": { "advertiser_id"?: number };
  "AdvertiserUpdateBudgetV2": Models.AdvertiserUpdateBudgetV2Request;
  "AdvertiserVerifyInfoGetV30": { "advertiser_id": number };
  "AgentAdvAdvertiserUpdateSaleV2": Models.AgentAdvAdvertiserUpdateSaleV2Request;
  "AgentAdvBiddingListQueryV2": { "agent_id": number; "start_date": string; "end_date": string; "filtering": Models.AgentAdvBiddingListQueryV2Filtering; "cursor"?: number; "cursor_size"?: number };
  "AgentAdvBrandListQueryV2": { "agent_id": number; "start_date": string; "end_date": string; "filtering": Models.AgentAdvBrandListQueryV2Filtering; "cursor"?: number; "cursor_size"?: number };
  "AgentAdvCostReportListQueryV2": Models.AgentAdvCostReportListQueryV2Request;
  "AgentAdvPerenniallyPunishHistoryQueryV2": { "agent_id": number; "advertiser_ids": number[] };
  "AgentAdvPerenniallyPunishV2": Models.AgentAdvPerenniallyPunishV2Request;
  "AgentAdvRechargeRechargeRecordV2": { "agent_ids": number[]; "start_time": string; "end_time": string; "filtering"?: Models.AgentAdvRechargeRechargeRecordV2Filtering; "page": number; "page_size": number; "agent_company_id"?: number };
  "AgentAdvTemporaryPunishV2": Models.AgentAdvTemporaryPunishV2Request;
  "AgentAdvertiserAssignV2": Models.AgentAdvertiserAssignV2Request;
  "AgentAdvertiserCopyV2": Models.AgentAdvertiserCopyV2Request;
  "AgentAdvertiserInfoQueryV2": { "account_ids": number[] };
  "AgentAdvertiserSelectV2": { "advertiser_id"?: number; "company_ids"?: number[]; "count"?: number; "cursor"?: number; "filtering"?: Models.AgentAdvertiserSelectV2Filtering; "page"?: number; "page_size"?: number };
  "AgentAdvertiserUnassignV2": Models.AgentAdvertiserUnassignV2Request;
  "AgentAdvertiserUpdateV2": Models.AgentAdvertiserUpdateV2Request;
  "AgentChargeVerifyV2": { "agent_id": number; "charge_type": Models.AgentChargeVerifyV2ChargeType };
  "AgentChildAgentSelectV2": { "advertiser_id": number; "page"?: number; "page_size"?: number };
  "AgentCompanyBiddingListQueryV2": { "agent_id": number; "start_date": string; "end_date": string; "filtering": Models.AgentCompanyBiddingListQueryV2Filtering; "cursor"?: number; "cursor_size"?: number };
  "AgentCompanyBrandListQueryV2": { "agent_id": number; "start_date": string; "end_date": string; "filtering": Models.AgentCompanyBrandListQueryV2Filtering; "cursor"?: number; "cursor_size"?: number };
  "AgentCreditChargeSubmitV2": Models.AgentCreditChargeSubmitV2Request;
  "AgentInfoV2": { "advertiser_ids"?: number[]; "fields"?: Models.AgentInfoV2Fields[] };
  "AgentPrepayChargeGenerateRemittanceCodeV2": Models.AgentPrepayChargeGenerateRemittanceCodeV2Request;
  "AgentQueryRiskPromotionListV2": { "agent_id": number; "business_type"?: Models.AgentQueryRiskPromotionListV2BusinessType; "start_date": string; "end_date": string; "cursor"?: number; "count"?: number; "filtering"?: Models.AgentQueryRiskPromotionListV2Filtering; "business_type_list"?: Models.AgentQueryRiskPromotionListV2BusinessTypeList[] };
  "AgentTransferTransactionRecordV2": { "agent_id": number; "start_date": string; "end_date": string; "filtering"?: Models.AgentTransferTransactionRecordV2Filtering; "page"?: number; "page_size"?: number };
  "AicElementDeleteV30": Models.AicElementDeleteV30Request;
  "AicElementGetV30": { "account_id": number; "account_type": Models.AicElementGetV30AccountType; "filtering"?: Models.AicElementGetV30Filtering; "page"?: number; "page_size"?: number; "order_field"?: Models.AicElementGetV30OrderField; "order_type"?: Models.AicElementGetV30OrderType };
  "AicElementUpdateV30": Models.AicElementUpdateV30Request;
  "AicElementUploadV30": { "account_id": number; "account_type": Models.AicElementUploadV30AccountType; "element_name"?: string; "element_type": Models.AicElementUploadV30ElementType; "path_name"?: string; "use_as"?: Models.AicElementUploadV30UseAs; "file"?: UploadFile };
  "AicImageMixcutCreateV30": Models.AicImageMixcutCreateV30Request;
  "AicMaterialGetV30": { "account_id": number; "account_type": Models.AicMaterialGetV30AccountType; "filtering"?: Models.AicMaterialGetV30Filtering; "page"?: number; "page_size"?: number; "order_field"?: Models.AicMaterialGetV30OrderField; "order_type"?: Models.AicMaterialGetV30OrderType };
  "AicMaterialPushV30": Models.AicMaterialPushV30Request;
  "AicMixcutTaskResultGetV30": { "account_id": number; "account_type": Models.AicMixcutTaskResultGetV30AccountType; "task_id": string };
  "AicMixcutTaskSaveV30": Models.AicMixcutTaskSaveV30Request;
  "AicVideoMixcutCreateV30": Models.AicVideoMixcutCreateV30Request;
  "AnalyticsAttributionV30": Models.AnalyticsAttributionV30Request;
  "AssetsCreativeComponentCreateV2": Models.AssetsCreativeComponentCreateV2Request;
  "AssetsCreativeComponentGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number; "filtering"?: Models.AssetsCreativeComponentGetV2Filtering };
  "AssetsCreativeComponentUpdateV2": Models.AssetsCreativeComponentUpdateV2Request;
  "AsyncTaskCreateV2": Models.AsyncTaskCreateV2Request;
  "AsyncTaskDownloadV2": { "advertiser_id": number; "task_id": number; "range_from"?: number; "range_to"?: number };
  "AsyncTaskGetV2": { "advertiser_id": number; "filtering"?: Models.AsyncTaskGetV2Filtering; "page"?: number; "page_size"?: number };
  "AudiencePackageBindinfoGetV30": { "advertiser_id": number; "audience_package_id": number; "page": number; "page_size": number };
  "AudiencePackageCreateV2": Models.AudiencePackageCreateV2Request;
  "AudiencePackageDeleteV2": Models.AudiencePackageDeleteV2Request;
  "AudiencePackageGetV30": { "advertiser_id": number; "filtering"?: Models.AudiencePackageGetV30Filtering; "page"?: number; "page_size"?: number };
  "AudiencePackageUpdateV2": Models.AudiencePackageUpdateV2Request;
  "BrandActionCategoryV30": { "advertiser_id": number };
  "BrandAdCancelDeleteV30": Models.BrandAdCancelDeleteV30Request;
  "BrandAdDeleteV30": Models.BrandAdDeleteV30Request;
  "BrandAdGetV30": { "advertiser_id": number; "ad_ids"?: string[]; "ad_names"?: string[]; "campaign_ids"?: string[]; "app_origin"?: Models.BrandAdGetV30AppOrigin; "ad_form"?: Models.BrandAdGetV30AdForm; "ad_status"?: Models.BrandAdGetV30AdStatus; "create_start_time"?: string; "create_end_time"?: string; "start_time"?: string; "end_time"?: string; "page": number; "size": number };
  "BrandAdUpdateBaseInfoV30": Models.BrandAdUpdateBaseInfoV30Request;
  "BrandAdUpdateDeliveryInfoV30": Models.BrandAdUpdateDeliveryInfoV30Request;
  "BrandAnchorListV30": { "advertiser_id"?: number; "page"?: Models.BrandAnchorListV30Page };
  "BrandAwemeListV30": { "advertiser_id": number };
  "BrandCampaignAddV30": Models.BrandCampaignAddV30Request;
  "BrandCampaignDeleteV30": Models.BrandCampaignDeleteV30Request;
  "BrandCampaignEditV30": Models.BrandCampaignEditV30Request;
  "BrandCampaignGetV30": { "advertiser_id": number; "campaign_ids"?: string[]; "campaign_names"?: string[]; "campaign_status"?: Models.BrandCampaignGetV30CampaignStatus; "create_start_time"?: string; "create_end_time"?: string; "start_time"?: string; "end_time"?: string; "page": number; "size": number };
  "BrandCampaignListV30": { "advertiser_id": number; "filter"?: Models.BrandCampaignListV30Filter; "page_info"?: Models.BrandCampaignListV30PageInfo };
  "BrandCampaignModifyV30": Models.BrandCampaignModifyV30Request;
  "BrandCampaignOperateV30": Models.BrandCampaignOperateV30Request;
  "BrandCampaignRemoveV30": Models.BrandCampaignRemoveV30Request;
  "BrandCampaignRevokeModifyV30": Models.BrandCampaignRevokeModifyV30Request;
  "BrandCampaignSubmitV30": Models.BrandCampaignSubmitV30Request;
  "BrandCampaignUpdateV30": Models.BrandCampaignUpdateV30Request;
  "BrandContractGetV30": { "advertiser_id": number };
  "BrandCreativeCreateV30": Models.BrandCreativeCreateV30Request;
  "BrandCreativeDeleteV30": Models.BrandCreativeDeleteV30Request;
  "BrandCreativeGetV30": { "advertiser_id": number; "ad_ids"?: string[]; "campaign_ids"?: string[]; "creative_ids"?: string[]; "creative_status"?: Models.BrandCreativeGetV30CreativeStatus; "create_start_time"?: string; "create_end_time"?: string; "start_time"?: string; "end_time"?: string; "page": number; "size": number };
  "BrandCreativeUpdateV30": Models.BrandCreativeUpdateV30Request;
  "BrandCustomAudienceListV30": { "advertiser_id": number };
  "BrandFileVideoUploadV30": { "advertiser_id": number; "video_file": UploadFile };
  "BrandMaterialCreateV30": Models.BrandMaterialCreateV30Request;
  "BrandMaterialListV30": { "advertiser_id": number; "material_ids"?: number[]; "material_name"?: string; "material_status"?: Models.BrandMaterialListV30MaterialStatus[]; "ies_core_user_id"?: string; "order_filter"?: Models.BrandMaterialListV30OrderFilter; "start_time"?: string; "end_time"?: string; "campaign_filter"?: Models.BrandMaterialListV30CampaignFilter; "page_info"?: Models.BrandMaterialListV30PageInfo };
  "BrandMaterialUpdateV30": Models.BrandMaterialUpdateV30Request;
  "BrandOperationLogQueryV30": { "advertiser_id": number; "object_id": number; "object_type": Models.BrandOperationLogQueryV30ObjectType; "fields"?: Models.BrandOperationLogQueryV30Fields[]; "start_date"?: string; "end_date"?: string; "page"?: Models.BrandOperationLogQueryV30Page };
  "BrandOrderCancelDeleteV30": Models.BrandOrderCancelDeleteV30Request;
  "BrandOrderCreateV30": Models.BrandOrderCreateV30Request;
  "BrandOrderDeleteV30": Models.BrandOrderDeleteV30Request;
  "BrandOrderListV30": { "advertiser_id": number; "filter"?: Models.BrandOrderListV30Filter; "campaign_filter"?: Models.BrandOrderListV30CampaignFilter; "page_info"?: Models.BrandOrderListV30PageInfo };
  "BrandOrderUpdateV30": Models.BrandOrderUpdateV30Request;
  "BrandPolicyListV30": { "advertiser_id": number; "classify": Models.BrandPolicyListV30Classify; "intention_no"?: string; "pro_type": Models.BrandPolicyListV30ProType; "ad_form": Models.BrandPolicyListV30AdForm; "app_origin": Models.BrandPolicyListV30AppOrigin; "pricing_type": Models.BrandPolicyListV30PricingType; "gd_send_type": Models.BrandPolicyListV30GdSendType; "audience_info"?: Models.BrandPolicyListV30AudienceInfo; "frequency_info"?: Models.BrandPolicyListV30FrequencyInfo; "delivery_info": Models.BrandPolicyListV30DeliveryInfo };
  "BrandQueryStockV30": { "advertiser_id": number; "classify": Models.BrandQueryStockV30Classify; "landing_type": Models.BrandQueryStockV30LandingType; "app_origin": Models.BrandQueryStockV30AppOrigin; "ad_form": Models.BrandQueryStockV30AdForm; "gd_send_type": Models.BrandQueryStockV30GdSendType; "audience_info"?: Models.BrandQueryStockV30AudienceInfo; "policy_no": string; "schedule_info": Models.BrandQueryStockV30ScheduleInfo; "merchant_intention_no"?: string };
  "BrandQueryYuntu5aBrandCategoryV30": { "advertiser_id": number };
  "BrandRegionGetV30": { "advertiser_id": number };
  "BrandToolCreativePreviewV30": { "advertiser_id": number; "creative_id": number };
  "BrandToolMaterialPreviewV30": { "advertiser_id": number; "material_id": number };
  "BrandToolQueryPublishPriceV30": { "advertiser_id": number; "classify": Models.BrandToolQueryPublishPriceV30Classify; "intention_no"?: string; "pro_type": Models.BrandToolQueryPublishPriceV30ProType; "ad_form": Models.BrandToolQueryPublishPriceV30AdForm; "app_origin": Models.BrandToolQueryPublishPriceV30AppOrigin; "pricing_type": Models.BrandToolQueryPublishPriceV30PricingType; "gd_send_type": Models.BrandToolQueryPublishPriceV30GdSendType; "audience_info"?: Models.BrandToolQueryPublishPriceV30AudienceInfo; "frequency_info"?: Models.BrandToolQueryPublishPriceV30FrequencyInfo; "policy_no": string; "delivery_info": Models.BrandToolQueryPublishPriceV30DeliveryInfo };
  "BrandToolQueryStockBalanceV30": { "advertiser_id": number; "classify": Models.BrandToolQueryStockBalanceV30Classify; "intention_no"?: string; "pro_type": Models.BrandToolQueryStockBalanceV30ProType; "ad_form": Models.BrandToolQueryStockBalanceV30AdForm; "app_origin": Models.BrandToolQueryStockBalanceV30AppOrigin; "pricing_type": Models.BrandToolQueryStockBalanceV30PricingType; "gd_send_type": Models.BrandToolQueryStockBalanceV30GdSendType; "audience_info"?: Models.BrandToolQueryStockBalanceV30AudienceInfo; "frequency_info"?: Models.BrandToolQueryStockBalanceV30FrequencyInfo; "policy_no": string; "delivery_info": Models.BrandToolQueryStockBalanceV30DeliveryInfo };
  "BrandUploadImageV30": { "advertiser_id": number; "image_file": UploadFile };
  "BudgetGroupCreateV30": Models.BudgetGroupCreateV30Request;
  "BudgetGroupDeleteV30": Models.BudgetGroupDeleteV30Request;
  "BudgetGroupListV30": { "advertiser_id": number; "filtering"?: Models.BudgetGroupListV30Filtering; "page": number; "page_size": number };
  "BudgetGroupUpdateV30": Models.BudgetGroupUpdateV30Request;
  "BusinessPlatformCompanyAccountGetV30": { "organization_id": number; "company_id": number; "account_type": Models.BusinessPlatformCompanyAccountGetV30AccountType[]; "page"?: number; "page_size"?: number };
  "BusinessPlatformCompanyInfoGetV30": { "organization_id": number; "page"?: number; "page_size"?: number };
  "BusinessPlatformPartnerOrganizationListV2": { "organization_id": number; "page"?: number; "page_size"?: number; "filtering"?: Models.BusinessPlatformPartnerOrganizationListV2Filtering };
  "CampaignCreateV2": Models.CampaignCreateV2Request;
  "CampaignGetV2": { "advertiser_id"?: number; "fields"?: string[]; "filtering"?: Models.CampaignGetV2Filtering; "page"?: number; "page_size"?: number };
  "CampaignUpdateStatusV2": Models.CampaignUpdateStatusV2Request;
  "CampaignUpdateV2": Models.CampaignUpdateV2Request;
  "CarouselAdGetV2": { "advertiser_id": number; "carousel_ids": number[] };
  "CarouselCreateV2": Models.CarouselCreateV2Request;
  "CarouselDeleteV2": Models.CarouselDeleteV2Request;
  "CarouselListV2": { "advertiser_id": number; "filtering"?: Models.CarouselListV2Filtering; "page_size"?: number; "page"?: number };
  "CarouselUpdateV2": Models.CarouselUpdateV2Request;
  "CdpBrandGetV30": { "advertiser_id": number };
  "CgTransferCanTransferBalanceGetV30": { "organization_id": number; "biz_request_no": string; "opponent_target_id": number; "target_id_list": number[]; "transfer_direction": Models.CgTransferCanTransferBalanceGetV30TransferDirection; "platform": Models.CgTransferCanTransferBalanceGetV30Platform };
  "CgTransferCanTransferTargetListV30": { "organization_id": number; "biz_request_no": string; "opponent_target_id": number; "transfer_direction": Models.CgTransferCanTransferTargetListV30TransferDirection; "platform": Models.CgTransferCanTransferTargetListV30Platform; "page"?: number; "page_size"?: number };
  "CgTransferCreateTransferV30": Models.CgTransferCreateTransferV30Request;
  "CgTransferQueryCanTransferBalanceV30": { "biz_request_no": string; "agent_id": number; "account_id": number; "target_account_id_list": number[]; "transfer_direction": Models.CgTransferQueryCanTransferBalanceV30TransferDirection };
  "CgTransferQueryTransferBalanceV30": { "biz_request_no": string; "agent_id": number; "account_id_list": number[] };
  "CgTransferQueryTransferDetailV30": { "biz_request_no": string; "agent_id": number; "transfer_biz_request_no"?: string; "transfer_serial"?: string };
  "CgTransferTransferBalanceGetV30": { "organization_id": number; "biz_request_no": string; "target_id_list": number[]; "platform": Models.CgTransferTransferBalanceGetV30Platform };
  "CgTransferTransferCreateV30": Models.CgTransferTransferCreateV30Request;
  "CgTransferTransferDetailGetV30": { "organization_id": number; "biz_request_no": string; "transfer_biz_request_no"?: string; "transfer_serial"?: string; "platform": Models.CgTransferTransferDetailGetV30Platform };
  "CgTransferWalletTransferCanTransferBalanceV30": { "account_id": number; "account_type": Models.CgTransferWalletTransferCanTransferBalanceV30AccountType; "biz_request_no": string; "main_wallet_id": number; "sub_wallet_list": number[]; "transfer_direction": Models.CgTransferWalletTransferCanTransferBalanceV30TransferDirection };
  "CgTransferWalletTransferCreateV30": Models.CgTransferWalletTransferCreateV30Request;
  "CgTransferWalletTransferDetailV30": { "account_id": number; "account_type": Models.CgTransferWalletTransferDetailV30AccountType; "biz_request_no": string; "transfer_biz_request_no"?: string; "transfer_serial"?: string };
  "CgTransferWalletTransferListV30": { "account_id": number; "account_type": Models.CgTransferWalletTransferListV30AccountType; "biz_request_no": string; "query_begin_time": string; "query_end_time": string; "query_wallet_id_list": number[]; "payee_id"?: number; "remitter_id"?: number; "page_info": Models.CgTransferWalletTransferListV30PageInfo };
  "ChargeListV30": { "advertiser_id": number; "charge_target_type": Models.ChargeListV30ChargeTargetType; "platform_list": Models.ChargeListV30PlatformList[]; "charge_status_list": Models.ChargeListV30ChargeStatusList[]; "charge_source_list"?: Models.ChargeListV30ChargeSourceList[]; "start_time"?: string; "end_time"?: string; "charge_type_list": Models.ChargeListV30ChargeTypeList[]; "need_total_amount"?: boolean; "page"?: number; "page_size"?: number };
  "ChargeResultV30": { "advertiser_id": number; "charge_order_id": number };
  "ChargeVerifyGetV30": { "cc_account_id": number; "account_id": number; "platform": Models.ChargeVerifyGetV30Platform; "request_id": string; "charge_type": Models.ChargeVerifyGetV30ChargeType; "charge_source": Models.ChargeVerifyGetV30ChargeSource; "caller": Models.ChargeVerifyGetV30Caller };
  "ClueCaCreateV2": Models.ClueCaCreateV2Request;
  "ClueCaInterfaceCreateV2": Models.ClueCaInterfaceCreateV2Request;
  "ClueCaInterfaceUpdateV2": Models.ClueCaInterfaceUpdateV2Request;
  "ClueCaUpdateV2": Models.ClueCaUpdateV2Request;
  "ClueCouponCodeConsumeV2": Models.ClueCouponCodeConsumeV2Request;
  "ClueCouponCodeGetV2": { "activity_id"?: number; "advertiser_id"?: number; "coupon_id"?: number; "end_time"?: string; "page"?: number; "page_size"?: number; "resource_id"?: number; "start_time"?: string; "status"?: Models.ClueCouponCodeGetV2Status };
  "ClueCouponCreateV2": Models.ClueCouponCreateV2Request;
  "ClueCouponDetailV2": { "activity_id"?: number; "advertiser_id"?: number };
  "ClueCouponEmployeeCreateV2": Models.ClueCouponEmployeeCreateV2Request;
  "ClueCouponEmployeeDeleteV2": Models.ClueCouponEmployeeDeleteV2Request;
  "ClueCouponEmployeeGetV2": { "advertiser_id"?: number; "page"?: number; "page_size"?: number };
  "ClueCouponGetV2": { "activity_ids"?: number[]; "activity_types"?: Models.ClueCouponGetV2ActivityTypes[]; "advertiser_id"?: number; "end_time"?: string; "is_del"?: Models.ClueCouponGetV2IsDel; "page"?: number; "page_size"?: number; "start_time"?: string };
  "ClueCouponUpdateV2": Models.ClueCouponUpdateV2Request;
  "ClueFormCreateV2": Models.ClueFormCreateV2Request;
  "ClueFormDeleteV2": Models.ClueFormDeleteV2Request;
  "ClueFormDetailV2": { "advertiser_id"?: number; "instance_id"?: number };
  "ClueFormListV2": { "advertiser_id"?: number; "end_time"?: string; "instance_ids"?: number[]; "is_del"?: Models.ClueFormListV2IsDel; "page"?: number; "page_size"?: number; "start_time"?: string };
  "ClueFormUpdateV2": Models.ClueFormUpdateV2Request;
  "ClueSmartphoneCreateV2": Models.ClueSmartphoneCreateV2Request;
  "ClueSmartphoneDeleteV2": Models.ClueSmartphoneDeleteV2Request;
  "ClueSmartphoneGetV2": { "advertiser_id"?: number; "end_time"?: string; "instance_ids"?: number[]; "is_del"?: Models.ClueSmartphoneGetV2IsDel; "page"?: number; "page_size"?: number; "start_time"?: string };
  "ClueSmartphoneRecordV2": { "advertiser_id": number; "instance_ids"?: number[]; "clue_ids"?: number[]; "site_ids"?: number[]; "ad_ids"?: number[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number };
  "ClueWechatDataGetV2": { "advertiser_id": number; "union_id": string; "state"?: string };
  "ClueWechatInstanceDetailV2": { "advertiser_id": number; "instance_id": number };
  "ClueWechatInstanceListV2": { "advertiser_id": number; "filter"?: Models.ClueWechatInstanceListV2Filter };
  "ClueWechatInstanceUpdateV2": Models.ClueWechatInstanceUpdateV2Request;
  "ClueWechatPoolListV2": { "advertiser_id": number; "filter"?: Models.ClueWechatPoolListV2Filter };
  "CreateProjectInvoiceV2": Models.CreateProjectInvoiceV2Request;
  "CreateStatementInvoiceV2": Models.CreateStatementInvoiceV2Request;
  "CreateStatementV2": Models.CreateStatementV2Request;
  "CreativeCustomCreativeCreateV2": Models.CreativeCustomCreativeCreateV2Request;
  "CreativeCustomCreativeUpdateV2": Models.CreativeCustomCreativeUpdateV2Request;
  "CreativeDetailGetV30": { "advertiser_id": number; "ad_id": number };
  "CreativeGetV2": { "advertiser_id": number; "filtering"?: Models.CreativeGetV2Filtering; "fields"?: string[]; "page"?: number; "page_size"?: number; "cursor"?: number; "count"?: number };
  "CreativeProceduralCreativeCreateV2": Models.CreativeProceduralCreativeCreateV2Request;
  "CreativeProceduralCreativeUpdateV2": Models.CreativeProceduralCreativeUpdateV2Request;
  "CreativeRejectReasonV2": { "advertiser_id"?: number; "creative_ids"?: number[] };
  "CreativeStrategyListV2": { "advertiser_id": number; "strategy_types"?: Models.CreativeStrategyListV2StrategyTypes[]; "page"?: number; "page_size"?: number };
  "CustomerCenterAccountListV30": { "account_id": number; "filter": Models.CustomerCenterAccountListV30Filter; "page"?: number; "page_size"?: number };
  "CustomerCenterAccountOfflineListV30": { "account_id": number; "filter": Models.CustomerCenterAccountOfflineListV30Filter };
  "CustomerCenterAdvertiserCopyV2": Models.CustomerCenterAdvertiserCopyV2Request;
  "CustomerCenterAdvertiserListV2": { "account_source"?: Models.CustomerCenterAdvertiserListV2AccountSource; "cc_account_id"?: number; "filtering"?: Models.CustomerCenterAdvertiserListV2Filtering; "page"?: number; "page_size"?: number };
  "CustomerCenterAdvertiserTransferableListV2": { "advertiser_id": number; "transfer_account_type"?: Models.CustomerCenterAdvertiserTransferableListV2TransferAccountType; "page"?: number; "page_size"?: number };
  "CustomerCenterFundTransferSeqCommitV2": Models.CustomerCenterFundTransferSeqCommitV2Request;
  "CustomerCenterFundTransferSeqCreateV2": Models.CustomerCenterFundTransferSeqCreateV2Request;
  "DcdChargeSubmitV30": Models.DcdChargeSubmitV30Request;
  "DecorationCouponGetV30": { "advertiser_id": number; "filtering"?: Models.DecorationCouponGetV30Filtering; "page"?: number; "page_size"?: number };
  "DiagnosisTaskAdvCreateV2": Models.DiagnosisTaskAdvCreateV2Request;
  "DiagnosisTaskAdvGetV2": { "advertiser_id"?: number; "task_ids"?: number[] };
  "DiagnosisTaskAdvListV2": { "advertiser_id"?: number; "results"?: Models.DiagnosisTaskAdvListV2Results[]; "status"?: Models.DiagnosisTaskAdvListV2Status[]; "start_time"?: number; "end_time"?: number; "page"?: number; "page_size"?: number };
  "DiagnosisTaskAgentCreateV2": Models.DiagnosisTaskAgentCreateV2Request;
  "DiagnosisTaskAgentGetV2": { "agent_id": number; "task_ids"?: number[] };
  "DiagnosisTaskAgentListV2": { "agent_id": number; "results"?: Models.DiagnosisTaskAgentListV2Results[]; "status"?: Models.DiagnosisTaskAgentListV2Status[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number; "start_date_time"?: string; "end_date_time"?: string };
  "DmpBrandGetV2": { "advertiser_id"?: number };
  "DmpCustomAudienceCopyV2": Models.DmpCustomAudienceCopyV2Request;
  "DmpCustomAudienceDeleteV2": Models.DmpCustomAudienceDeleteV2Request;
  "DmpCustomAudiencePublishV2": Models.DmpCustomAudiencePublishV2Request;
  "DmpCustomAudiencePushV2V2": Models.DmpCustomAudiencePushV2V2Request;
  "DmpCustomAudienceReadV2": { "advertiser_id": number; "custom_audience_ids": number[] };
  "DmpCustomAudienceSelectV2": { "advertiser_id": number; "select_type"?: Models.DmpCustomAudienceSelectV2SelectType; "offset"?: number; "limit"?: number };
  "DmpDataSourceCreateV2": Models.DmpDataSourceCreateV2Request;
  "DmpDataSourceFileUploadV2": { "advertiser_id": number; "file_signature"?: string; "file": UploadFile };
  "DmpDataSourceReadV2": { "advertiser_id"?: number; "data_source_id_list"?: string[] };
  "DmpDataSourceUpdateV2": Models.DmpDataSourceUpdateV2Request;
  "DouplusOptionalItemsListV30": { "aweme_sec_uid": string; "external_action": Models.DouplusOptionalItemsListV30ExternalAction; "aweme_id": string; "count": number; "cursor": number };
  "DouplusOptionalTargetsListV30": { "aweme_sec_uid"?: string; "item_id"?: number; "live_aweme_id"?: string };
  "DouplusOrderCloseV30": Models.DouplusOrderCloseV30Request;
  "DouplusOrderCreateV30": Models.DouplusOrderCreateV30Request;
  "DouplusOrderListV30": { "aweme_sec_uid"?: string; "filter"?: Models.DouplusOrderListV30Filter; "page_size"?: number; "page"?: number; "order_by_field"?: Models.DouplusOrderListV30OrderByField; "order_by_type"?: Models.DouplusOrderListV30OrderByType };
  "DouplusOrderRenewV30": Models.DouplusOrderRenewV30Request;
  "DouplusOrderReportV30": { "aweme_sec_uid"?: string; "stat_time"?: Models.DouplusOrderReportV30StatTime; "group_by"?: Models.DouplusOrderReportV30GroupBy[]; "filter"?: Models.DouplusOrderReportV30Filter; "page_size"?: number; "page"?: number };
  "DouplusRtaGetInfoV30": { "aweme_sec_uid": string };
  "DouplusRtaSetScopeV30": Models.DouplusRtaSetScopeV30Request;
  "DownloadStatementEsignFileV2": { "agent_id": number; "statement_id": number };
  "DownloadStatementV2": { "agent_id": number; "attach_id": number; "statement_id": number };
  "DpaAlbumCreateV30": Models.DpaAlbumCreateV30Request;
  "DpaAlbumStatusGetV30": { "album_id": string; "app_id": number };
  "DpaAssetV2DetailReadV2": Models.DpaAssetV2DetailReadV2Request;
  "DpaAssetV2ListV2": Models.DpaAssetV2ListV2Request;
  "DpaAssetsDetailReadV2": { "advertiser_id"?: number; "asset_ids"?: number[] };
  "DpaBrandAdvAuthFuzzyGetV30": { "account_id": number; "brand_name"?: string; "match_type"?: Models.DpaBrandAdvAuthFuzzyGetV30MatchType; "brand_data_source_list": Models.DpaBrandAdvAuthFuzzyGetV30BrandDataSourceList[]; "has_5a_grass_brand"?: Models.DpaBrandAdvAuthFuzzyGetV30Has5aGrassBrand; "page": number; "page_size": number };
  "DpaBrandAdvAuthIndustryGetV30": { "account_id": number; "origin_req": Models.DpaBrandAdvAuthIndustryGetV30OriginReq };
  "DpaBrandFuzzyGetV30": { "account_id": number; "account_type": Models.DpaBrandFuzzyGetV30AccountType; "brand_name": string; "page"?: number; "page_size"?: number };
  "DpaCategoryGetV2": { "advertiser_id": number; "platform_id": number };
  "DpaCheckIndexEntryProgressV2": Models.DpaCheckIndexEntryProgressV2Request;
  "DpaClueProductDeleteV2": Models.DpaClueProductDeleteV2Request;
  "DpaClueProductDetailV2": { "advertiser_id": number; "product_ids": number[] };
  "DpaClueProductListV2": { "advertiser_id": number; "filtering"?: Models.DpaClueProductListV2Filtering; "page": number; "page_size": number };
  "DpaClueProductSaveV2": Models.DpaClueProductSaveV2Request;
  "DpaDetailGetV2": { "advertiser_id": number; "product_platform_id": number; "filtering"?: Models.DpaDetailGetV2Filtering; "page"?: number; "page_size"?: number };
  "DpaDictGetV2": { "advertiser_id": number; "platform_id": number };
  "DpaEbpCategoryGetV30": { "account_id": number; "account_type": Models.DpaEbpCategoryGetV30AccountType; "platform_id": number };
  "DpaEbpClueProductDeleteV30": Models.DpaEbpClueProductDeleteV30Request;
  "DpaEbpClueProductGetV30": { "account_id": number; "account_type": Models.DpaEbpClueProductGetV30AccountType; "product_ids": number[] };
  "DpaEbpClueProductListV30": { "account_id": number; "account_type": Models.DpaEbpClueProductListV30AccountType; "product_ids"?: number[]; "product_name"?: string; "audit_status"?: Models.DpaEbpClueProductListV30AuditStatus[]; "category_ids"?: number[]; "product_id_or_name_search"?: string; "statuses"?: Models.DpaEbpClueProductListV30Statuses[]; "asset_query_scope"?: Models.DpaEbpClueProductListV30AssetQueryScope; "offset": number; "limit": number };
  "DpaEbpClueProductSaveV30": Models.DpaEbpClueProductSaveV30Request;
  "DpaEbpDictGetV30": { "account_id": number; "account_type": Models.DpaEbpDictGetV30AccountType; "platform_id": number };
  "DpaEbpLibraryListV30": { "account_id": number; "account_type": Models.DpaEbpLibraryListV30AccountType; "store_type"?: number; "name_or_id"?: string; "offset"?: number; "limit"?: number; "asset_query_scope"?: Models.DpaEbpLibraryListV30AssetQueryScope };
  "DpaEbpMetaGetV30": { "account_id": number; "account_type": Models.DpaEbpMetaGetV30AccountType; "platform_id": number; "indexable"?: number; "extractable"?: number; "industry"?: number; "status"?: number; "media_type"?: number };
  "DpaEbpPlayletAuthGetV30": { "account_id": number; "account_type": Models.DpaEbpPlayletAuthGetV30AccountType; "platform_id": number; "product_id": number };
  "DpaEbpProductCreateV30": Models.DpaEbpProductCreateV30Request;
  "DpaEbpProductDeleteV30": Models.DpaEbpProductDeleteV30Request;
  "DpaEbpProductDetailGetV30": { "account_id"?: number; "account_type"?: Models.DpaEbpProductDetailGetV30AccountType; "platform_id"?: number; "filtering"?: Models.DpaEbpProductDetailGetV30Filtering; "page"?: number; "page_size"?: number };
  "DpaEbpProductListV30": { "account_id": number; "account_type": Models.DpaEbpProductListV30AccountType; "product_platform_id": number; "filtering"?: Models.DpaEbpProductListV30Filtering; "page"?: number; "page_size"?: number };
  "DpaEbpProductStatusBatchUpdateV30": Models.DpaEbpProductStatusBatchUpdateV30Request;
  "DpaEbpProductUpdateV30": Models.DpaEbpProductUpdateV30Request;
  "DpaMetaGetV2": { "advertiser_id": number; "platform_id": number; "indexable"?: number; "extractable"?: number; "industry"?: number; "status"?: number; "mediaType"?: number };
  "DpaOfflineProductBatchDeleteV30": Models.DpaOfflineProductBatchDeleteV30Request;
  "DpaPlayletAuthGetV2": { "advertiser_id": number; "platform_id": number; "product_id": number };
  "DpaProductAvailablesV2": { "advertiser_id": number };
  "DpaProductCreateV2": Models.DpaProductCreateV2Request;
  "DpaProductDeleteV2": Models.DpaProductDeleteV2Request;
  "DpaProductDetailGetV2": { "advertiser_id"?: number; "filtering"?: Models.DpaProductDetailGetV2Filtering; "page"?: number; "page_size"?: number; "platform_id"?: number };
  "DpaProductStatusBatchUpdateV2": Models.DpaProductStatusBatchUpdateV2Request;
  "DpaProductUpdateV2": Models.DpaProductUpdateV2Request;
  "DpaTemplateGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number };
  "DpaVideoGetV2": { "advertiser_id"?: number; "filtering"?: Models.DpaVideoGetV2Filtering; "page"?: number; "page_size"?: number };
  "EbpAdvertiserListV2": { "enterprise_organization_id": number; "account_source": Models.EbpAdvertiserListV2AccountSource; "filtering"?: Models.EbpAdvertiserListV2Filtering; "page"?: number; "page_size"?: number };
  "EbpAdvertiserTaskCreateV2": Models.EbpAdvertiserTaskCreateV2Request;
  "EbpAdvertiserTaskDownloadV2": { "enterprise_organization_id": number; "task_id"?: number };
  "EbpAdvertiserTaskListV2": { "enterprise_organization_id": number; "task_ids": number[] };
  "EbpLevelGetV2": { "enterprise_organization_id": number };
  "EbpRolePermissionGetV2": { "enterprise_organization_ids": number[] };
  "EventManagerAbnormalAssetsGetV30": { "advertiser_id": string; "page_info"?: Models.EventManagerAbnormalAssetsGetV30PageInfo };
  "EventManagerAssetsCreateV2": Models.EventManagerAssetsCreateV2Request;
  "EventManagerAuthAddPublicKeyV2": Models.EventManagerAuthAddPublicKeyV2Request;
  "EventManagerAuthDelPublicKeyV2": Models.EventManagerAuthDelPublicKeyV2Request;
  "EventManagerAuthDisableV2": Models.EventManagerAuthDisableV2Request;
  "EventManagerAuthEnableV2": Models.EventManagerAuthEnableV2Request;
  "EventManagerAuthGetAllPublicKeysV2": { "advertiser_id": number };
  "EventManagerAuthGetAuthStatusV2": { "advertiser_id": number };
  "EventManagerAuthGetPublicKeyV2": { "advertiser_id": number; "credential": string };
  "EventManagerAvailableEventsGetV2": { "advertiser_id": number; "asset_id": number };
  "EventManagerDbtGetV30": { "advertiser_id": number; "landing_type"?: Models.EventManagerDbtGetV30LandingType; "ad_type"?: Models.EventManagerDbtGetV30AdType; "marketing_goal"?: Models.EventManagerDbtGetV30MarketingGoal; "asset_id"?: number; "external_action": Models.EventManagerDbtGetV30ExternalAction; "deep_external_action"?: Models.EventManagerDbtGetV30DeepExternalAction; "value_optimized_type"?: Models.EventManagerDbtGetV30ValueOptimizedType; "delivery_mode"?: Models.EventManagerDbtGetV30DeliveryMode; "product_setting"?: Models.EventManagerDbtGetV30ProductSetting; "multi_delivery_medium"?: Models.EventManagerDbtGetV30MultiDeliveryMedium; "delivery_medium"?: Models.EventManagerDbtGetV30DeliveryMedium; "delivery_product"?: string };
  "EventManagerDeepBidTypeGetV30": { "advertiser_id": number; "asset_id"?: number; "external_action": Models.EventManagerDeepBidTypeGetV30ExternalAction; "deep_external_action"?: Models.EventManagerDeepBidTypeGetV30DeepExternalAction; "convert_id"?: number; "delivery_mode"?: Models.EventManagerDeepBidTypeGetV30DeliveryMode; "landing_type"?: Models.EventManagerDeepBidTypeGetV30LandingType; "ad_type"?: Models.EventManagerDeepBidTypeGetV30AdType; "marketing_goal"?: Models.EventManagerDeepBidTypeGetV30MarketingGoal; "micro_promotion_type"?: Models.EventManagerDeepBidTypeGetV30MicroPromotionType; "product_setting"?: Models.EventManagerDeepBidTypeGetV30ProductSetting; "value_optimized_type"?: Models.EventManagerDeepBidTypeGetV30ValueOptimizedType };
  "EventManagerEventConfigsGetV2": { "advertiser_id": number; "asset_id": number; "sort_type"?: Models.EventManagerEventConfigsGetV2SortType };
  "EventManagerEventsCreateV2": Models.EventManagerEventsCreateV2Request;
  "EventManagerOptimizedGoalGetV2V30": { "advertiser_id": number; "landing_type": Models.EventManagerOptimizedGoalGetV2V30LandingType; "ad_type": Models.EventManagerOptimizedGoalGetV2V30AdType; "asset_type"?: Models.EventManagerOptimizedGoalGetV2V30AssetType; "multi_asset_type"?: Models.EventManagerOptimizedGoalGetV2V30MultiAssetType; "asset_id"?: number; "package_name"?: string; "app_type"?: Models.EventManagerOptimizedGoalGetV2V30AppType; "app_promotion_type"?: Models.EventManagerOptimizedGoalGetV2V30AppPromotionType; "marketing_goal"?: Models.EventManagerOptimizedGoalGetV2V30MarketingGoal; "quick_app_id"?: number; "delivery_mode"?: Models.EventManagerOptimizedGoalGetV2V30DeliveryMode; "mini_program_id"?: string; "dpa_adtype"?: Models.EventManagerOptimizedGoalGetV2V30DpaAdtype; "micro_promotion_type"?: Models.EventManagerOptimizedGoalGetV2V30MicroPromotionType; "micro_app_instance_id"?: number; "delivery_type"?: Models.EventManagerOptimizedGoalGetV2V30DeliveryType };
  "EventManagerOptimizedGoalGetV30": { "advertiser_id": number; "landing_type": Models.EventManagerOptimizedGoalGetV30LandingType; "ad_type": Models.EventManagerOptimizedGoalGetV30AdType; "delivery_medium"?: Models.EventManagerOptimizedGoalGetV30DeliveryMedium; "multi_delivery_medium"?: Models.EventManagerOptimizedGoalGetV30MultiDeliveryMedium; "asset_id"?: number; "package_name"?: string; "app_type"?: Models.EventManagerOptimizedGoalGetV30AppType; "app_promotion_type"?: Models.EventManagerOptimizedGoalGetV30AppPromotionType; "marketing_goal"?: Models.EventManagerOptimizedGoalGetV30MarketingGoal; "quick_app_id"?: number; "delivery_mode"?: Models.EventManagerOptimizedGoalGetV30DeliveryMode; "mini_program_id"?: string; "micro_promotion_type"?: Models.EventManagerOptimizedGoalGetV30MicroPromotionType; "micro_app_instance_id"?: number; "delivery_type"?: Models.EventManagerOptimizedGoalGetV30DeliveryType; "product_setting"?: Models.EventManagerOptimizedGoalGetV30ProductSetting };
  "EventManagerShareCancelV30": Models.EventManagerShareCancelV30Request;
  "EventManagerShareGetV30": { "organization_id": number; "asset_id": number; "page"?: number; "page_size"?: number };
  "EventManagerShareV30": Models.EventManagerShareV30Request;
  "EventManagerTrackUrlCreateV2": Models.EventManagerTrackUrlCreateV2Request;
  "EventManagerTrackUrlGetV2": { "advertiser_id": number; "asset_id": number; "download_url"?: string; "track_url_group_name"?: string; "track_url_group_id"?: number; "page"?: number; "page_size"?: number };
  "EventManagerTrackUrlUpdateV2": Models.EventManagerTrackUrlUpdateV2Request;
  "FileAudioAdV2": { "advertiser_id": number; "audio_signature"?: string; "audio_url"?: string; "upload_type": Models.FileAudioAdV2UploadType; "audio_file"?: UploadFile };
  "FileAudioGetV2": { "advertiser_id": number; "filtering"?: Models.FileAudioGetV2Filtering; "page"?: number; "page_size"?: number };
  "FileAutoGenerateSourceGetV2": { "advertiser_id"?: number; "materials"?: Models.FileAutoGenerateSourceGetV2MaterialsInner[] };
  "FileCarouselAwemeGetV30": { "advertiser_id": number; "aweme_id": string; "filtering"?: Models.FileCarouselAwemeGetV30Filtering; "cursor"?: string; "count"?: number };
  "FileEbpVideoGetV30": { "advertiser_id": number; "filtering"?: Models.FileEbpVideoGetV30Filtering; "page"?: number; "page_size"?: number };
  "FileImageAdGetV2": { "advertiser_id": number; "image_ids": string[] };
  "FileImageAdV2": { "advertiser_id": number; "filename"?: string; "image_signature"?: string; "image_url"?: string; "is_aigc"?: boolean; "upload_type"?: Models.FileImageAdV2UploadType; "image_file"?: UploadFile };
  "FileImageAdvertiserV2": { "advertiser_id": number; "image_signature"?: string; "image_url"?: string; "upload_to": Models.FileImageAdvertiserV2UploadTo; "upload_type"?: Models.FileImageAdvertiserV2UploadType; "image_file"?: UploadFile };
  "FileImageDeleteV30": Models.FileImageDeleteV30Request;
  "FileImageGetV2": { "advertiser_id": number; "filtering"?: Models.FileImageGetV2Filtering; "page"?: number; "page_size"?: number };
  "FileIncentivePolicyBaseInfoGetV2": { "agent_id": number; "year": number };
  "FileMaterialAttributesListV2": { "account_id": number; "account_type": Models.FileMaterialAttributesListV2AccountType; "filtering"?: Models.FileMaterialAttributesListV2Filtering; "return_lowquality_suggestions"?: boolean; "page_size": number; "page": number };
  "FileMaterialBindV2": Models.FileMaterialBindV2Request;
  "FileMaterialDetailV2": { "advertiser_id": number; "material_ids": number[] };
  "FileMaterialListV2": { "advertiser_id": number; "material_source": Models.FileMaterialListV2MaterialSource; "properties_filter"?: Models.FileMaterialListV2PropertiesFilter[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number };
  "FilePlayableCreateV30": Models.FilePlayableCreateV30Request;
  "FilePlayableListV30": { "advertiser_id": number; "material_type": Models.FilePlayableListV30MaterialType; "filtering"?: Models.FilePlayableListV30Filtering; "page_size"?: number; "page"?: number };
  "FilePreauditGetV30": { "advertiser_id": number; "filtering"?: Models.FilePreauditGetV30Filtering; "page"?: number; "page_size"?: number };
  "FilePreauditSubmitV30": Models.FilePreauditSubmitV30Request;
  "FileQualityGetV30": { "advertiser_id": number; "material_ids": number[] };
  "FileQualitySubmitV30": Models.FileQualitySubmitV30Request;
  "FileRebateCommonDownloadCreateTaskV2": Models.FileRebateCommonDownloadCreateTaskV2Request;
  "FileRebateCommonDownloadDownloadFileV2": { "agent_id": number; "task_id": string };
  "FileRebateCommonDownloadGetDownloadTaskListV2": { "agent_id": number; "query_id"?: string };
  "FileRebateRebateDownloadCreateTaskV2": Models.FileRebateRebateDownloadCreateTaskV2Request;
  "FileUploadTaskCreateV2": Models.FileUploadTaskCreateV2Request;
  "FileVideoAdGetV2": { "advertiser_id": number; "video_ids": string[] };
  "FileVideoAdV2": { "advertiser_id": number; "filename"?: string; "is_aigc"?: boolean; "is_guide_video"?: boolean; "labels"?: string[]; "upload_type"?: Models.FileVideoAdV2UploadType; "video_cover_id"?: string; "video_signature"?: string; "video_url"?: string; "video_file"?: UploadFile };
  "FileVideoAgentGetV2": { "agent_id": number; "filtering"?: Models.FileVideoAgentGetV2Filtering; "page"?: number; "page_size"?: number };
  "FileVideoAgentV2": { "agent_id": number; "file_name": string; "is_aigc"?: boolean; "is_need_auth": boolean; "upload_type"?: Models.FileVideoAgentV2UploadType; "video_signature"?: string; "video_url"?: string; "video_file"?: UploadFile };
  "FileVideoAwemeGetV2": { "advertiser_id": number; "aweme_id": string; "filtering"?: Models.FileVideoAwemeGetV2Filtering; "page"?: number; "page_size"?: number; "cursor"?: string; "count"?: number };
  "FileVideoDeleteV2": Models.FileVideoDeleteV2Request;
  "FileVideoEfficiencyGetV2": { "advertiser_id": string; "material_ids": string[] };
  "FileVideoGetV2": { "advertiser_id": number; "filtering"?: Models.FileVideoGetV2Filtering; "page"?: number; "page_size"?: number };
  "FileVideoMaterialClearTaskCreateV2": Models.FileVideoMaterialClearTaskCreateV2Request;
  "FileVideoMaterialClearTaskGetV2": { "advertiser_id": number; "clear_ids"?: number[]; "page"?: number; "page_size"?: number };
  "FileVideoMaterialClearTaskResultGetV2": { "advertiser_id": number; "clear_id": number; "page"?: number; "page_size"?: number };
  "FileVideoPauseV2": Models.FileVideoPauseV2Request;
  "FileVideoUpdateV2": Models.FileVideoUpdateV2Request;
  "FileVideoUploadTaskListV2": { "account_id": number; "account_type": Models.FileVideoUploadTaskListV2AccountType; "task_ids": number[] };
  "FixRemittanceCodeListGetV30": { "cc_account_id": number; "account_id": number; "page"?: number; "page_size"?: number; "remittance_code_list": string[] };
  "FundSharedWalletBalanceGetV2": { "advertiser_ids"?: number[] };
  "GameAddictionIdGetV30": { "advertiser_id": number; "asset_id"?: number; "user_name"?: string };
  "GameplayListV30": { "account_id": number; "account_type": Models.GameplayListV30AccountType; "asset_id": string; "asset_type": Models.GameplayListV30AssetType; "filter_play_names"?: string[]; "page_info": Models.GameplayListV30PageInfo };
  "InvoiceApplyOrderCreateV30": Models.InvoiceApplyOrderCreateV30Request;
  "InvoiceApplyOrderListV30": { "account_id": number; "platform": Models.InvoiceApplyOrderListV30Platform; "invoice_directions"?: Models.InvoiceApplyOrderListV30InvoiceDirections[]; "invoice_types"?: Models.InvoiceApplyOrderListV30InvoiceTypes[]; "invoice_statuses"?: Models.InvoiceApplyOrderListV30InvoiceStatuses[]; "invoice_apply_serials"?: string[]; "reverse_statuses"?: Models.InvoiceApplyOrderListV30ReverseStatuses[]; "start_date"?: string; "end_date"?: string; "page"?: number; "page_size"?: number };
  "InvoiceApplyResultGetV30": { "account_id": number; "request_id": string };
  "InvoiceDownloadUrlListV30": { "account_id": number; "invoice_apply_serials": string[] };
  "InvoiceTicketListV30": { "account_ids": number[]; "platform": Models.InvoiceTicketListV30Platform; "start_month"?: string; "end_month"?: string; "ticket_statuses"?: Models.InvoiceTicketListV30TicketStatuses[]; "scroll_id"?: string; "page_size"?: number };
  "IosAppListV30": { "account_id": number; "page"?: number; "size"?: number; "search_key"?: string; "status"?: Models.IosAppListV30Status; "search_type"?: Models.IosAppListV30SearchType; "account_asset_query_scope"?: Models.IosAppListV30AccountAssetQueryScope; "account_type"?: Models.IosAppListV30AccountType; "hierarchy"?: Models.IosAppListV30Hierarchy; "publish_time"?: Models.IosAppListV30PublishTime; "asset_generation"?: Models.IosAppListV30AssetGeneration };
  "KeywordCreateV2V2": Models.KeywordCreateV2V2Request;
  "KeywordCreateV30": Models.KeywordCreateV30Request;
  "KeywordDeleteV2V2": Models.KeywordDeleteV2V2Request;
  "KeywordDeleteV30": Models.KeywordDeleteV30Request;
  "KeywordFeedadsSuggestV2": { "ad_id"?: number; "advertiser_id"?: number; "req_keyword_type"?: number };
  "KeywordGetV2": { "advertiser_id"?: number; "filtering"?: Models.KeywordGetV2Filtering };
  "KeywordListV30": { "advertiser_id": number; "filtering": Models.KeywordListV30Filtering };
  "KeywordUpdateV2V2": Models.KeywordUpdateV2V2Request;
  "KeywordUpdateV30": Models.KeywordUpdateV30Request;
  "LocalActionCategoryV30": { "local_account_id": number };
  "LocalActionKeywordV30": { "local_account_id": number; "query_words": string; "action_days": Models.LocalActionKeywordV30ActionDays };
  "LocalAdvertiserBudgetGetV30": { "local_account_id": number[] };
  "LocalAudiencePackageGetV30": { "local_account_id": number; "page"?: number; "page_size"?: number };
  "LocalAudiencePackageUpdateV30": Models.LocalAudiencePackageUpdateV30Request;
  "LocalAwemeAuthCancelUpdateV30": Models.LocalAwemeAuthCancelUpdateV30Request;
  "LocalAwemeAuthCreateV30": Models.LocalAwemeAuthCreateV30Request;
  "LocalAwemeAuthListV30": { "local_account_id": number; "page"?: number; "page_size"?: number; "filtering"?: Models.LocalAwemeAuthListV30Filtering };
  "LocalAwemeAuthRenewCreateV30": Models.LocalAwemeAuthRenewCreateV30Request;
  "LocalAwemeAuthorizedGetV30": { "local_account_id": number; "filtering"?: Models.LocalAwemeAuthorizedGetV30Filtering; "page"?: number; "page_size"?: number; "marketing_goal": Models.LocalAwemeAuthorizedGetV30MarketingGoal };
  "LocalBudgetUpdateV30": Models.LocalBudgetUpdateV30Request;
  "LocalChargeListV30": { "local_account_id": number; "start_time": string; "end_time": string; "charge_methods"?: Models.LocalChargeListV30ChargeMethods[]; "page"?: number; "page_size"?: number };
  "LocalChargeResultV30": { "local_account_id": number; "charge_order_id": number };
  "LocalChargeSubmitV30": Models.LocalChargeSubmitV30Request;
  "LocalConsultAwameListGetV30": { "local_account_id": number; "delivery_goal": Models.LocalConsultAwameListGetV30DeliveryGoal; "poi_ids"?: number[]; "product_ids"?: number[]; "filtering"?: Models.LocalConsultAwameListGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalCustomAudienceGetV30": { "local_account_id": number; "tags_type"?: Models.LocalCustomAudienceGetV30TagsType; "page"?: number; "page_size"?: number };
  "LocalDeliveryQualificationListV30": { "local_account_id": number; "qualification_type"?: Models.LocalDeliveryQualificationListV30QualificationType; "status"?: Models.LocalDeliveryQualificationListV30Status; "page": number; "page_size": number };
  "LocalFileCarouselListV30": { "local_account_id": number; "keyword"?: string; "carousel_ids"?: number[]; "start_time"?: string; "end_time"?: string; "order"?: Models.LocalFileCarouselListV30Order; "page"?: number; "page_size"?: number };
  "LocalFileUploadTaskCreateV30": Models.LocalFileUploadTaskCreateV30Request;
  "LocalFileVideoAwemeGetV30": { "local_account_id": number; "filtering"?: Models.LocalFileVideoAwemeGetV30Filtering; "order_filed"?: Models.LocalFileVideoAwemeGetV30OrderFiled; "external_action"?: Models.LocalFileVideoAwemeGetV30ExternalAction; "count"?: number; "cursor": string };
  "LocalFileVideoGetV30": { "local_account_id": number; "filtering"?: Models.LocalFileVideoGetV30Filtering; "order_field"?: Models.LocalFileVideoGetV30OrderField; "order_type"?: Models.LocalFileVideoGetV30OrderType; "page"?: number; "page_size"?: number };
  "LocalFileVideoUploadTaskListV30": { "local_account_id": number; "task_ids": number[] };
  "LocalFileVideoUploadV30": { "filename": string; "local_account_id": number; "video_file": Models.LocalFileVideoUploadV30RequestVideoFile; "video_signature": string };
  "LocalImAccountGetV30": { "life_account_id": number; "query_life_account_type"?: Models.LocalImAccountGetV30QueryLifeAccountType; "page"?: number; "page_size"?: number };
  "LocalImAutoSettingGetV30": { "local_account_id": number; "life_account_id_list"?: number[]; "source_name": Models.LocalImAutoSettingGetV30SourceName };
  "LocalImAutoSettingUpdateV30": Models.LocalImAutoSettingUpdateV30Request;
  "LocalImCardGetV30": { "local_account_id": number; "life_account_id": number; "source_name": Models.LocalImCardGetV30SourceName; "page": number; "page_size": number; "card_type": number; "status"?: number; "card_id_list"?: number[] };
  "LocalImQueryMsgV30": { "local_account_id": number; "msg_id": string };
  "LocalImSendMsgV30": Models.LocalImSendMsgV30Request;
  "LocalImUploadImageV30": { "local_account_id": number; "image_file": UploadFile };
  "LocalImageUploadV30": { "image_signature"?: string; "is_aigc"?: boolean; "local_account_id": number; "upload_type"?: Models.LocalImageUploadV30UploadType; "image_file"?: UploadFile };
  "LocalInterestCategoryV30": { "local_account_id": number };
  "LocalInterestKeywordV30": { "local_account_id": number; "query_words": string };
  "LocalLifeAdvertiserCreateV30": Models.LocalLifeAdvertiserCreateV30Request;
  "LocalLifeAdvertiserListV30": { "life_account_id": number; "filtering"?: Models.LocalLifeAdvertiserListV30Filtering; "page"?: number; "page_size"?: number };
  "LocalMarketPageGetV30": { "local_account_id": number; "market_page_ids": number[] };
  "LocalMarketPageListGetV30": { "local_account_id": number; "delivery_goal": Models.LocalMarketPageListGetV30DeliveryGoal; "poi_ids"?: number[]; "product_ids"?: number[]; "page"?: number; "page_size"?: number };
  "LocalMultiPoiIdPoiIdsGetV30": { "local_account_id": number; "multi_poi_ids": number[]; "need_enable"?: boolean };
  "LocalOcMaterialGetV30": { "local_account_id": number; "project_id": number; "filter"?: Models.LocalOcMaterialGetV30Filter; "page_size"?: number; "page"?: number };
  "LocalOcProjectGetV30": { "local_account_id": number; "project_id": number };
  "LocalOcProjectListV30": { "local_account_id": number; "filtering"?: Models.LocalOcProjectListV30Filtering; "page"?: number; "page_size"?: number };
  "LocalPoiGetV30": { "local_account_id": number; "local_delivery_scene": Models.LocalPoiGetV30LocalDeliveryScene; "filtering"?: Models.LocalPoiGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalProductGetByPoiidsV30": { "local_account_id": number; "poi_ids": number[]; "local_delivery_scene"?: Models.LocalProductGetByPoiidsV30LocalDeliveryScene };
  "LocalProductGetV30": { "local_account_id": number; "local_delivery_scene": Models.LocalProductGetV30LocalDeliveryScene; "filtering"?: Models.LocalProductGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalProjectCreateV30": Models.LocalProjectCreateV30Request;
  "LocalProjectDeleteV30": Models.LocalProjectDeleteV30Request;
  "LocalProjectDetailV30": { "local_account_id": number; "project_id": number };
  "LocalProjectListV30": { "local_account_id": number; "filtering"?: Models.LocalProjectListV30Filtering; "page"?: number; "page_size"?: number };
  "LocalProjectStatusUpdateV30": Models.LocalProjectStatusUpdateV30Request;
  "LocalProjectUpdateV30": Models.LocalProjectUpdateV30Request;
  "LocalProjectWeekScheduleUpdateV30": Models.LocalProjectWeekScheduleUpdateV30Request;
  "LocalPromotionCostProtectStatusGetV30": { "local_account_id": number; "promotion_ids"?: number[] };
  "LocalPromotionCreateV30": Models.LocalPromotionCreateV30Request;
  "LocalPromotionDeleteV30": Models.LocalPromotionDeleteV30Request;
  "LocalPromotionDetailV30": { "local_account_id": number; "promotion_id": number };
  "LocalPromotionListV30": { "local_account_id": number; "filtering"?: Models.LocalPromotionListV30Filtering; "page"?: number; "page_size"?: number };
  "LocalPromotionRejectReasonGetV30": { "local_account_id": number; "promotion_ids": number[] };
  "LocalPromotionStatusUpdateV30": Models.LocalPromotionStatusUpdateV30Request;
  "LocalPromotionUpdateV30": Models.LocalPromotionUpdateV30Request;
  "LocalQualificationGetV30": { "local_account_id": number };
  "LocalReportAccountGetV30": { "local_account_id": number; "time_granularity"?: Models.LocalReportAccountGetV30TimeGranularity; "start_date": string; "end_date": string; "metrics": string[]; "order_type"?: Models.LocalReportAccountGetV30OrderType; "order_field"?: string; "filtering"?: Models.LocalReportAccountGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalReportAudienceGetV30": { "local_account_id": number; "start_date": string; "end_date": string; "audience_dimension": Models.LocalReportAudienceGetV30AudienceDimension; "data_dimension": Models.LocalReportAudienceGetV30DataDimension; "fields"?: string[]; "order_type"?: Models.LocalReportAudienceGetV30OrderType; "order_field"?: string; "filtering"?: Models.LocalReportAudienceGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalReportMaterialGetV30": { "local_account_id": number; "time_granularity"?: Models.LocalReportMaterialGetV30TimeGranularity; "start_date": string; "end_date": string; "order_type"?: Models.LocalReportMaterialGetV30OrderType; "order_field"?: string; "metrics": string[]; "filtering"?: Models.LocalReportMaterialGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalReportProjectGetV30": { "local_account_id": number; "time_granularity"?: Models.LocalReportProjectGetV30TimeGranularity; "start_date": string; "end_date": string; "order_type"?: Models.LocalReportProjectGetV30OrderType; "order_field"?: string; "metrics": string[]; "filtering"?: Models.LocalReportProjectGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalReportPromotionGetV30": { "local_account_id": number; "time_granularity"?: Models.LocalReportPromotionGetV30TimeGranularity; "start_date": string; "end_date": string; "order_type"?: Models.LocalReportPromotionGetV30OrderType; "order_field"?: string; "metrics": string[]; "filtering"?: Models.LocalReportPromotionGetV30Filtering; "page"?: number; "page_size"?: number };
  "LocalToolPackDetailV30": { "local_account_id": number; "tool_pack_id": number };
  "LocalToolPackListGetV30": { "local_account_id": number; "delivery_goal": Models.LocalToolPackListGetV30DeliveryGoal; "poi_ids"?: number[]; "product_ids"?: number[]; "intelligent_selection_mode": Models.LocalToolPackListGetV30IntelligentSelectionMode; "page"?: number; "page_size"?: number };
  "MajordomoAdvertiserSelectV2": { "advertiser_id": number };
  "MaterialStatusUpdateV30": Models.MaterialStatusUpdateV30Request;
  "NativeAnchorCreateV30": Models.NativeAnchorCreateV30Request;
  "NativeAnchorDeleteV30": Models.NativeAnchorDeleteV30Request;
  "NativeAnchorGetDetailV30": { "anchor_ids": string[]; "advertiser_id": number; "anchor_type": Models.NativeAnchorGetDetailV30AnchorType };
  "NativeAnchorGetV30": { "advertiser_id": number; "page"?: number; "page_size"?: number; "filtering"?: Models.NativeAnchorGetV30Filtering };
  "NativeAnchorQrcodePreviewGetV30": { "advertiser_id": number; "anchor_ids": string[]; "anchor_type": Models.NativeAnchorQrcodePreviewGetV30AnchorType };
  "NativeAnchorUpdateV30": Models.NativeAnchorUpdateV30Request;
  "Oauth2AccessToken": Models.Oauth2AccessTokenRequest;
  "Oauth2AdvertiserGet": { "access_token"?: string };
  "Oauth2AppAccessToken": Models.Oauth2AppAccessTokenRequest;
  "Oauth2RefreshToken": Models.Oauth2RefreshTokenRequest;
  "Oauth2RenewToken": Models.Oauth2RenewTokenRequest;
  "OcProjectMaterialCreateV30": Models.OcProjectMaterialCreateV30Request;
  "OcProjectMaterialDeleteV30": Models.OcProjectMaterialDeleteV30Request;
  "OcProjectMaterialGetV30": { "advertiser_id": number; "project_id": number; "filtering": Models.OcProjectMaterialGetV30Filtering; "page"?: number; "page_size"?: number };
  "OcProjectMaterialStatusUpdateV30": Models.OcProjectMaterialStatusUpdateV30Request;
  "OcProjectRejectReasonGetV30": { "advertiser_id": number; "project_id": number; "page"?: number; "page_size"?: number };
  "OcProjectStdProjectToolsGetV30": { "advertiser_id": number; "project_ids": number[] };
  "OcProjectToolsAudienceCreateV30": Models.OcProjectToolsAudienceCreateV30Request;
  "OcProjectToolsAudienceDeleteV30": Models.OcProjectToolsAudienceDeleteV30Request;
  "OcProjectToolsAudienceListV30": { "advertiser_id": number; "filtering": Models.OcProjectToolsAudienceListV30Filtering; "page_info": Models.OcProjectToolsAudienceListV30PageInfo };
  "OcProjectToolsAudienceStatusUpdateV30": Models.OcProjectToolsAudienceStatusUpdateV30Request;
  "OcProjectToolsAudienceUpdateV30": Models.OcProjectToolsAudienceUpdateV30Request;
  "OcProjectToolsCompensateHistoryListGetV30": { "advertiser_id": number; "project_id"?: number; "schedule_id"?: number };
  "OcProjectToolsCostProtectStatusGetV30": { "advertiser_id": number; "schedule_ids"?: number[] };
  "OcProjectToolsKeywordCreateV30": Models.OcProjectToolsKeywordCreateV30Request;
  "OcProjectToolsKeywordDeleteV30": Models.OcProjectToolsKeywordDeleteV30Request;
  "OcProjectToolsKeywordListV30": { "advertiser_id": number; "filtering"?: Models.OcProjectToolsKeywordListV30Filtering; "page_info": Models.OcProjectToolsKeywordListV30PageInfo };
  "OcProjectToolsKeywordStatusUpdateV30": Models.OcProjectToolsKeywordStatusUpdateV30Request;
  "OcProjectToolsKeywordUpdateV30": Models.OcProjectToolsKeywordUpdateV30Request;
  "OcProjectToolsMaterialRaiseCreateV30": Models.OcProjectToolsMaterialRaiseCreateV30Request;
  "OcProjectToolsMaterialRaiseDeleteV30": Models.OcProjectToolsMaterialRaiseDeleteV30Request;
  "OcProjectToolsMaterialRaiseGetV30": { "advertiser_id": number; "filtering": Models.OcProjectToolsMaterialRaiseGetV30Filtering; "page"?: number; "page_size"?: number };
  "OpenMaterialAuditProGetV30": { "advertiser_id": number; "run_id": string };
  "OpenMaterialAuditProSubmitV30": Models.OpenMaterialAuditProSubmitV30Request;
  "PenaltyTaskGetV30": { "advertiser_ids": number[]; "customer_ids"?: number[]; "disposal_start_time"?: string; "disposal_end_time"?: string; "page"?: number; "page_size"?: number };
  "PrepayChargeGenerateFixRemiattanceCodeCreateV30": Models.PrepayChargeGenerateFixRemiattanceCodeCreateV30Request;
  "PrepayChargeGenerateRemittanceCodeCreateV30": Models.PrepayChargeGenerateRemittanceCodeCreateV30Request;
  "ProjectBudgetUpdateV30": Models.ProjectBudgetUpdateV30Request;
  "ProjectCostProtectStatusGetV30": { "advertiser_id": number; "project_ids": number[] };
  "ProjectCpaBidUpdateV30": Models.ProjectCpaBidUpdateV30Request;
  "ProjectCreateV30": Models.ProjectCreateV30Request;
  "ProjectDeepCpaBidUpdateV30": Models.ProjectDeepCpaBidUpdateV30Request;
  "ProjectDeleteV30": Models.ProjectDeleteV30Request;
  "ProjectListV30": { "fields"?: string[]; "filtering"?: Models.ProjectListV30Filtering; "advertiser_id": number; "page"?: number; "page_size"?: number };
  "ProjectNameUpdateV30": Models.ProjectNameUpdateV30Request;
  "ProjectRoigoalUpdateV30": Models.ProjectRoigoalUpdateV30Request;
  "ProjectScheduleTimeUpdateV30": Models.ProjectScheduleTimeUpdateV30Request;
  "ProjectStatusUpdateV30": Models.ProjectStatusUpdateV30Request;
  "ProjectUpdateV30": Models.ProjectUpdateV30Request;
  "ProjectWeekScheduleUpdateV30": Models.ProjectWeekScheduleUpdateV30Request;
  "PromotionAidGetV30": { "advertiser_id": number; "promotion_ids": number[] };
  "PromotionAutoGenerateConfigCreateV30": Models.PromotionAutoGenerateConfigCreateV30Request;
  "PromotionAutoGenerateConfigGetV30": { "advertiser_id": number; "config_id": number };
  "PromotionBidUpdateV30": Models.PromotionBidUpdateV30Request;
  "PromotionBudgetUpdateV30": Models.PromotionBudgetUpdateV30Request;
  "PromotionCostProtectStatusGetV30": { "advertiser_id": number; "promotion_ids": number[] };
  "PromotionCreateV30": Models.PromotionCreateV30Request;
  "PromotionDeepbidUpdateV30": Models.PromotionDeepbidUpdateV30Request;
  "PromotionDeleteV30": Models.PromotionDeleteV30Request;
  "PromotionEasyKeepDeliverySwitchUpdateV30": Models.PromotionEasyKeepDeliverySwitchUpdateV30Request;
  "PromotionEasyUpdateV30": Models.PromotionEasyUpdateV30Request;
  "PromotionListV30": { "advertiser_id": number; "filtering"?: Models.PromotionListV30Filtering; "fields"?: string[]; "including_material_atrributes"?: Models.PromotionListV30IncludingMaterialAtrributes; "page"?: number; "page_size"?: number; "cursor"?: number; "count"?: number };
  "PromotionMaterialDeleteV30": Models.PromotionMaterialDeleteV30Request;
  "PromotionNameUpdateV30": Models.PromotionNameUpdateV30Request;
  "PromotionNewcustomerCreateV30": Models.PromotionNewcustomerCreateV30Request;
  "PromotionNewcustomerTypeGetV30": { "advertiser_id"?: number };
  "PromotionRejectReasonGetV30": { "advertiser_id": number; "promotion_ids": number[]; "delivery_mode"?: Models.PromotionRejectReasonGetV30DeliveryMode; "need_material_lego_mid"?: boolean };
  "PromotionScheduleTimeUpdateV30": Models.PromotionScheduleTimeUpdateV30Request;
  "PromotionShopInfoUpdateV30": Models.PromotionShopInfoUpdateV30Request;
  "PromotionStatusUpdateV30": Models.PromotionStatusUpdateV30Request;
  "PromotionUpdateV30": Models.PromotionUpdateV30Request;
  "QianchuanAccountBalanceGetV10": { "advertiser_id": number };
  "QianchuanAccountBudgetGetV10": { "advertiser_id": number };
  "QianchuanAccountBudgetUpdateV10": Models.QianchuanAccountBudgetUpdateV10Request;
  "QianchuanAdBidUpdateV10": Models.QianchuanAdBidUpdateV10Request;
  "QianchuanAdBudgetUpdateV10": Models.QianchuanAdBudgetUpdateV10Request;
  "QianchuanAdCompensateStatusGetV10": { "advertiser_id": number; "ad_ids": number[] };
  "QianchuanAdCreateV10": Models.QianchuanAdCreateV10Request;
  "QianchuanAdDetailGetV10": { "advertiser_id": number; "ad_id": number; "request_material_url"?: boolean; "version"?: string };
  "QianchuanAdGetV10": { "advertiser_id": number; "request_aweme_info"?: number; "filtering": Models.QianchuanAdGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanAdKeywordsGetV10": { "advertiser_id": number; "filtering": Models.QianchuanAdKeywordsGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanAdLearingStatusGetV10": { "advertiser_id": number; "ad_ids": number[] };
  "QianchuanAdMaterialDeleteV10": Models.QianchuanAdMaterialDeleteV10Request;
  "QianchuanAdMaterialGetV10": { "advertiser_id": number; "ad_id": number; "filtering": Models.QianchuanAdMaterialGetV10Filtering; "page"?: number; "page_size"?: Models.QianchuanAdMaterialGetV10PageSize; "order_type"?: Models.QianchuanAdMaterialGetV10OrderType; "order_field"?: string };
  "QianchuanAdMaterialSuggestionV10": { "advertiser_id": number; "ad_id": number; "material_ids": number[] };
  "QianchuanAdOverallMarketingUpdateV10": Models.QianchuanAdOverallMarketingUpdateV10Request;
  "QianchuanAdQuotaGetV10": { "advertiser_id": number };
  "QianchuanAdRecommendKeywordsGetV10": { "advertiser_id": number; "filtering": Models.QianchuanAdRecommendKeywordsGetV10Filtering; "order_field"?: Models.QianchuanAdRecommendKeywordsGetV10OrderField; "order_type"?: Models.QianchuanAdRecommendKeywordsGetV10OrderType; "cache_id"?: string; "page"?: number; "page_size"?: number };
  "QianchuanAdRegionUpdateV10": Models.QianchuanAdRegionUpdateV10Request;
  "QianchuanAdRejectReasonV10": { "ad_ids"?: number[]; "advertiser_id"?: number };
  "QianchuanAdScheduleDateUpdateV10": Models.QianchuanAdScheduleDateUpdateV10Request;
  "QianchuanAdScheduleFixedRangeUpdateV10": Models.QianchuanAdScheduleFixedRangeUpdateV10Request;
  "QianchuanAdStatusUpdateV10": Models.QianchuanAdStatusUpdateV10Request;
  "QianchuanAdUpdateV10": Models.QianchuanAdUpdateV10Request;
  "QianchuanAdvertiserTypeGetV10": { "advertiser_ids": number[] };
  "QianchuanAudienceCreateByFileV10": Models.QianchuanAudienceCreateByFileV10Request;
  "QianchuanAudienceDeleteV10": Models.QianchuanAudienceDeleteV10Request;
  "QianchuanAudienceFilePartUploadV10": { "advertiser_id": number; "file_key"?: string; "is_finished": number; "part_num": number; "file": UploadFile };
  "QianchuanAudienceFileUploadV10": { "advertiser_id": number; "file": UploadFile };
  "QianchuanAudienceGroupGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanAudienceGroupGetV10Filtering };
  "QianchuanAudienceListGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanAudienceListGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanAudiencePushV10": Models.QianchuanAudiencePushV10Request;
  "QianchuanAwemeAuthListGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanAwemeAuthListGetV10Filtering; "page"?: number; "page_size"?: Models.QianchuanAwemeAuthListGetV10PageSize };
  "QianchuanAwemeAuthorizedGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanAwemeAuthorizedGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanAwemeEstimateProfitV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanAwemeEstimateProfitV10MarketingGoal; "delivery_setting": Models.QianchuanAwemeEstimateProfitV10DeliverySetting; "audience"?: Models.QianchuanAwemeEstimateProfitV10Audience };
  "QianchuanAwemeInterestActionInterestKeywordV10": { "advertiser_id": number };
  "QianchuanAwemeOrderBudgetAddV10": Models.QianchuanAwemeOrderBudgetAddV10Request;
  "QianchuanAwemeOrderCreateV10": Models.QianchuanAwemeOrderCreateV10Request;
  "QianchuanAwemeOrderDetailGetV10": { "order_id": number; "advertiser_id": number };
  "QianchuanAwemeOrderGetV10": { "advertiser_id": number; "filtering": Models.QianchuanAwemeOrderGetV10Filtering; "cursor"?: number; "count"?: Models.QianchuanAwemeOrderGetV10Count; "order_field"?: Models.QianchuanAwemeOrderGetV10OrderField; "order_create_start_date"?: string; "order_create_end_date"?: string };
  "QianchuanAwemeOrderQuotaGetV10": { "advertiser_id": number };
  "QianchuanAwemeOrderSuggestDeliveryTimeGetV10": { "advertiser_id": number; "order_id": number; "add_amount": number };
  "QianchuanAwemeOrderTerminateV10": Models.QianchuanAwemeOrderTerminateV10Request;
  "QianchuanAwemeProductAvailableGetV10": { "advertiser_id": number; "aweme_id": number; "cursor"?: number };
  "QianchuanAwemeReportOrderGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "fields"?: string[]; "order_field"?: string; "order_type"?: Models.QianchuanAwemeReportOrderGetV10OrderType; "filtering": Models.QianchuanAwemeReportOrderGetV10Filtering; "page"?: number; "page_size"?: Models.QianchuanAwemeReportOrderGetV10PageSize };
  "QianchuanAwemeSuggestBidV10": { "advertiser_id": number; "delivery_setting": Models.QianchuanAwemeSuggestBidV10DeliverySetting; "audience"?: Models.QianchuanAwemeSuggestBidV10Audience };
  "QianchuanAwemeSuggestRoiGoalV10": { "advertiser_id": number; "aweme_id": number };
  "QianchuanAwemeUniPromotionAdMaterialGetV10": { "advertiser_id": number; "order_id": number; "filter": Models.QianchuanAwemeUniPromotionAdMaterialGetV10Filter; "order_type"?: Models.QianchuanAwemeUniPromotionAdMaterialGetV10OrderType; "order_field"?: Models.QianchuanAwemeUniPromotionAdMaterialGetV10OrderField; "page"?: number; "page_size"?: Models.QianchuanAwemeUniPromotionAdMaterialGetV10PageSize };
  "QianchuanAwemeUniPromotionEstimateEffectV10": { "advertiser_id": number; "aweme_id": number; "product_id": number; "delivery_time": number; "amount": number; "add_amount"?: number; "add_delivery_time"?: number };
  "QianchuanAwemeUniPromotionOrderBudgetAddV10": Models.QianchuanAwemeUniPromotionOrderBudgetAddV10Request;
  "QianchuanAwemeUniPromotionOrderCreateV10": Models.QianchuanAwemeUniPromotionOrderCreateV10Request;
  "QianchuanAwemeUniPromotionOrderDetailV10": { "advertiser_id": number; "order_id": number };
  "QianchuanAwemeUniPromotionOrderGetV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanAwemeUniPromotionOrderGetV10MarketingGoal; "filtering"?: Models.QianchuanAwemeUniPromotionOrderGetV10Filtering; "order_field"?: Models.QianchuanAwemeUniPromotionOrderGetV10OrderField; "cursor"?: number; "count"?: Models.QianchuanAwemeUniPromotionOrderGetV10Count };
  "QianchuanAwemeUniPromotionOrderReportGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "time_granularity"?: Models.QianchuanAwemeUniPromotionOrderReportGetV10TimeGranularity; "filter"?: Models.QianchuanAwemeUniPromotionOrderReportGetV10Filter; "order_type"?: Models.QianchuanAwemeUniPromotionOrderReportGetV10OrderType; "order_field"?: Models.QianchuanAwemeUniPromotionOrderReportGetV10OrderField; "page"?: number; "page_size"?: Models.QianchuanAwemeUniPromotionOrderReportGetV10PageSize };
  "QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10": { "advertiser_id": number; "order_id": number; "add_amount": number };
  "QianchuanAwemeUniPromotionReportV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanAwemeUniPromotionReportV10MarketingGoal; "start_date": string; "end_date": string; "fields"?: string[] };
  "QianchuanAwemeUniPromotionSuggestRoiV10": { "advertiser_id": number; "aweme_id": number; "product_id": number };
  "QianchuanAwemeUniPromotionSuggestV10": { "advertiser_id": number; "aweme_id": number; "product_id": number; "bid_type": Models.QianchuanAwemeUniPromotionSuggestV10BidType };
  "QianchuanAwemeVideoGetV10": { "advertiser_id": number; "aweme_id": number; "marketing_goal": Models.QianchuanAwemeVideoGetV10MarketingGoal; "cursor"?: number; "count"?: number };
  "QianchuanBatchCampaignStatusUpdateV10": Models.QianchuanBatchCampaignStatusUpdateV10Request;
  "QianchuanBrandAuthorizedGetV10": { "advertiser_id": number };
  "QianchuanBrandReportAdGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "fields": string[]; "filtering": Models.QianchuanBrandReportAdGetV10Filtering; "time_granularity"?: Models.QianchuanBrandReportAdGetV10TimeGranularity; "order_field"?: string; "order_type"?: Models.QianchuanBrandReportAdGetV10OrderType; "page"?: number; "page_size"?: number };
  "QianchuanBrandReportAdvertiserGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "fields": string[]; "filtering": Models.QianchuanBrandReportAdvertiserGetV10Filtering; "time_granularity"?: Models.QianchuanBrandReportAdvertiserGetV10TimeGranularity; "order_field"?: string; "order_type"?: Models.QianchuanBrandReportAdvertiserGetV10OrderType; "page"?: number; "page_size"?: number };
  "QianchuanCampaignCreateV10": Models.QianchuanCampaignCreateV10Request;
  "QianchuanCampaignListGetV10": { "advertiser_id": number; "filter": Models.QianchuanCampaignListGetV10Filter; "page"?: number; "page_size"?: number };
  "QianchuanCampaignUpdateV10": Models.QianchuanCampaignUpdateV10Request;
  "QianchuanCarouselAwemeGetV10": { "advertiser_id": number; "aweme_id": number; "filtering"?: Models.QianchuanCarouselAwemeGetV10Filtering; "cursor"?: number; "count"?: number; "order_field"?: Models.QianchuanCarouselAwemeGetV10OrderField; "order_type"?: Models.QianchuanCarouselAwemeGetV10OrderType };
  "QianchuanCarouselGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanCarouselGetV10Filtering; "order_field"?: string; "order_type"?: Models.QianchuanCarouselGetV10OrderType; "page_size"?: number; "page"?: number };
  "QianchuanDmpAudiencesGetV10": { "advertiser_id": number; "retargeting_tags_type": number; "offset"?: number; "limit"?: number };
  "QianchuanEstimateEffectV10": { "advertiser_id": number; "aweme_id": number; "external_action": Models.QianchuanEstimateEffectV10ExternalAction; "deep_external_action"?: Models.QianchuanEstimateEffectV10DeepExternalAction; "deep_bid_type"?: Models.QianchuanEstimateEffectV10DeepBidType; "budget_mode": Models.QianchuanEstimateEffectV10BudgetMode; "budget": number; "live_schedule_type": Models.QianchuanEstimateEffectV10LiveScheduleType; "start_time"?: string; "end_time"?: string; "schedule_time"?: string; "schedule_fixed_range"?: number };
  "QianchuanFileImageDeleteV10": Models.QianchuanFileImageDeleteV10Request;
  "QianchuanFileVideoAwemeGetV10": { "advertiser_id": number; "aweme_id"?: number; "ad_bind_aweme_id"?: number; "pull_aweme_excellent_video"?: boolean; "filtering"?: Models.QianchuanFileVideoAwemeGetV10Filtering; "cursor"?: number; "count"?: number };
  "QianchuanFileVideoDeleteV10": Models.QianchuanFileVideoDeleteV10Request;
  "QianchuanFileVideoEfficiencyGetV10": { "advertiser_id": string; "material_ids": string[] };
  "QianchuanFileVideoOriginalGetV10": { "advertiser_id": string; "material_ids": string[] };
  "QianchuanFinanceDetailGetV10": { "advertiser_id": number; "start_date"?: string; "end_date"?: string; "page"?: number; "page_size"?: number };
  "QianchuanFinanceWalletGetV10": { "advertiser_id": number };
  "QianchuanImageGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanImageGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanKeywordCheckV10": Models.QianchuanKeywordCheckV10Request;
  "QianchuanKeywordPackageGetV10": { "advertiser_id": number; "aweme_id": number; "product_id"?: number };
  "QianchuanLqAdGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanLqAdGetV10Filtering };
  "QianchuanMaterialAdGetV10": { "advertiser_id": number; "material_id": number; "material_type": Models.QianchuanMaterialAdGetV10MaterialType; "marketing_scene": Models.QianchuanMaterialAdGetV10MarketingScene; "marketing_goal": Models.QianchuanMaterialAdGetV10MarketingGoal; "start_time": string; "end_time": string; "fields": string[]; "order_field"?: string; "order_type"?: Models.QianchuanMaterialAdGetV10OrderType; "page"?: number; "page_size"?: Models.QianchuanMaterialAdGetV10PageSize };
  "QianchuanMaterialGetV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanMaterialGetV10MarketingGoal; "campaign_scene"?: Models.QianchuanMaterialGetV10CampaignScene[]; "marketing_scene": Models.QianchuanMaterialGetV10MarketingScene; "filtering": Models.QianchuanMaterialGetV10Filtering; "fields": string[]; "page"?: number; "page_size"?: Models.QianchuanMaterialGetV10PageSize; "order_type"?: Models.QianchuanMaterialGetV10OrderType; "order_field"?: string };
  "QianchuanOrientationPackageGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanOrientationPackageGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanOverallAwemeAwemeDeleteV10": Models.QianchuanOverallAwemeAwemeDeleteV10Request;
  "QianchuanOverallAwemeListV10": { "advertiser_id": number; "filter"?: Models.QianchuanOverallAwemeListV10Filter; "page_params": Models.QianchuanOverallAwemeListV10PageParams };
  "QianchuanOverallLiveCreateV10": Models.QianchuanOverallLiveCreateV10Request;
  "QianchuanOverallLiveUpdateV10": Models.QianchuanOverallLiveUpdateV10Request;
  "QianchuanOverallStarProductGetV10": { "advertiser_id": number; "shop_id": number; "user_id": number; "page_params"?: Models.QianchuanOverallStarProductGetV10PageParams };
  "QianchuanOverallSuggestRoiGetV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanOverallSuggestRoiGetV10MarketingGoal; "aweme_id"?: number; "deep_external_action": Models.QianchuanOverallSuggestRoiGetV10DeepExternalAction; "ad_id"?: number; "overall_cost_items"?: Models.QianchuanOverallSuggestRoiGetV10OverallCostItems; "product_id_2_aweme_uid"?: Models.QianchuanOverallSuggestRoiGetV10ProductId2AwemeUidInner[] };
  "QianchuanOverallVideoCreateV10": Models.QianchuanOverallVideoCreateV10Request;
  "QianchuanOverallVideoUpdateV10": Models.QianchuanOverallVideoUpdateV10Request;
  "QianchuanProductAvailableGetV10": { "advertiser_id": number; "aweme_id"?: number; "filter"?: Models.QianchuanProductAvailableGetV10Filter; "campaign_scene"?: Models.QianchuanProductAvailableGetV10CampaignScene; "page"?: number; "page_size"?: number; "cursor"?: number };
  "QianchuanQianchuanReportTodayLiveRoomConfigGetV10": { "advertiser_id": number; "data_topics": Models.QianchuanQianchuanReportTodayLiveRoomConfigGetV10DataTopics[] };
  "QianchuanQianchuanVideoStarGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanQianchuanVideoStarGetV10Filtering; "order_field"?: Models.QianchuanQianchuanVideoStarGetV10OrderField; "cursor"?: number; "count"?: number };
  "QianchuanReportAdGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "fields": string[]; "filtering": Models.QianchuanReportAdGetV10Filtering; "time_granularity"?: Models.QianchuanReportAdGetV10TimeGranularity; "order_field"?: string; "order_type"?: Models.QianchuanReportAdGetV10OrderType; "page"?: number; "page_size"?: number };
  "QianchuanReportAdMaterialGetV10": { "advertiser_id": number; "ad_id": number; "order_type"?: Models.QianchuanReportAdMaterialGetV10OrderType; "order_field"?: string; "start_date": string; "end_date": string; "fields": string[]; "filtering": Models.QianchuanReportAdMaterialGetV10Filtering };
  "QianchuanReportAdvertiserGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "fields": string[]; "filtering": Models.QianchuanReportAdvertiserGetV10Filtering; "time_granularity"?: Models.QianchuanReportAdvertiserGetV10TimeGranularity; "order_field"?: string; "order_type"?: Models.QianchuanReportAdvertiserGetV10OrderType; "page"?: number; "page_size"?: number };
  "QianchuanReportAllPromotionGetV10": { "advertiser_id": number; "start_time": string; "end_time": string; "adlab_scene": Models.QianchuanReportAllPromotionGetV10AdlabScene; "data_period"?: Models.QianchuanReportAllPromotionGetV10DataPeriod; "marketing_goal"?: Models.QianchuanReportAllPromotionGetV10MarketingGoal; "order_platform"?: Models.QianchuanReportAllPromotionGetV10OrderPlatform; "fields": string[] };
  "QianchuanReportCustomConfigGetV10": { "advertiser_id": number; "data_topics": Models.QianchuanReportCustomConfigGetV10DataTopics[] };
  "QianchuanReportCustomGetV10": { "advertiser_id"?: number; "data_topic": Models.QianchuanReportCustomGetV10DataTopic; "dimensions": string[]; "metrics": string[]; "filters": Models.QianchuanReportCustomGetV10FiltersInner[]; "start_time": string; "end_time": string; "order_by": Models.QianchuanReportCustomGetV10OrderByInner[]; "page"?: number; "page_size"?: number };
  "QianchuanReportLiveGetV10": { "advertiser_id": number; "aweme_id": number; "start_time": string; "end_time": string; "fields": string[]; "stats_authority"?: Models.QianchuanReportLiveGetV10StatsAuthority };
  "QianchuanReportLongTransferOrderConfigGetV10": { "advertiser_id": number; "data_topics": Models.QianchuanReportLongTransferOrderConfigGetV10DataTopics[] };
  "QianchuanReportLongTransferOrderDataGetV10": { "advertiser_id": number; "data_topic": Models.QianchuanReportLongTransferOrderDataGetV10DataTopic; "dimensions": string[]; "metrics": string[]; "filters": Models.QianchuanReportLongTransferOrderDataGetV10FiltersInner[]; "start_time": string; "end_time": string; "order_by"?: Models.QianchuanReportLongTransferOrderDataGetV10OrderByInner[]; "page"?: number; "page_size"?: number };
  "QianchuanReportLongTransferOrderGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "optimization_time_scope": Models.QianchuanReportLongTransferOrderGetV10OptimizationTimeScope; "filtering": Models.QianchuanReportLongTransferOrderGetV10Filtering; "marketing_goal": Models.QianchuanReportLongTransferOrderGetV10MarketingGoal; "order_type"?: Models.QianchuanReportLongTransferOrderGetV10OrderType; "page"?: number; "page_size"?: number };
  "QianchuanReportMaterialGetV10": { "start_date": string; "end_date": string; "order_type"?: Models.QianchuanReportMaterialGetV10OrderType; "order_field"?: string; "advertiser_id": number; "filtering"?: Models.QianchuanReportMaterialGetV10Filtering; "fields": string[]; "page"?: number; "page_size"?: number };
  "QianchuanReportSearchWordGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "time_granularity"?: Models.QianchuanReportSearchWordGetV10TimeGranularity; "fields": string[]; "word_type": Models.QianchuanReportSearchWordGetV10WordType; "filtering": Models.QianchuanReportSearchWordGetV10Filtering; "order_field"?: string; "order_type"?: Models.QianchuanReportSearchWordGetV10OrderType; "page"?: number; "page_size"?: number };
  "QianchuanReportTodayLiveGetV10": { "advertiser_id": number; "aweme_id": number; "start_time": string; "end_time": string; "fields": string[]; "stats_authority"?: Models.QianchuanReportTodayLiveGetV10StatsAuthority };
  "QianchuanReportTodayLiveRoomConfigGetV10": { "advertiser_id": number; "data_topics": Models.QianchuanReportTodayLiveRoomConfigGetV10DataTopics[] };
  "QianchuanReportTodayLiveRoomDataGetV10": { "advertiser_id": number; "data_topic": Models.QianchuanReportTodayLiveRoomDataGetV10DataTopic; "dimensions": string[]; "metrics": string[]; "filters": Models.QianchuanReportTodayLiveRoomDataGetV10FiltersInner[]; "start_time": string; "end_time": string; "order_by": Models.QianchuanReportTodayLiveRoomDataGetV10OrderByInner[]; "page"?: number; "page_size"?: number };
  "QianchuanReportUniPromotionConfigGetV10": { "advertiser_id": number; "data_topics": Models.QianchuanReportUniPromotionConfigGetV10DataTopics[]; "data_period"?: Models.QianchuanReportUniPromotionConfigGetV10DataPeriod };
  "QianchuanReportUniPromotionDataGetV10": { "advertiser_id": number; "data_topic": Models.QianchuanReportUniPromotionDataGetV10DataTopic; "data_period"?: Models.QianchuanReportUniPromotionDataGetV10DataPeriod; "dimensions": string[]; "metrics": string[]; "filters": Models.QianchuanReportUniPromotionDataGetV10FiltersInner[]; "start_time": string; "end_time": string; "order_by": Models.QianchuanReportUniPromotionDataGetV10OrderByInner[]; "page"?: number; "page_size"?: Models.QianchuanReportUniPromotionDataGetV10PageSize };
  "QianchuanReportUniPromotionDimensionDataAuthorGetV10": { "advertiser_id": number; "marketing_goal"?: Models.QianchuanReportUniPromotionDimensionDataAuthorGetV10MarketingGoal; "aweme_id": number; "metrics"?: Models.QianchuanReportUniPromotionDimensionDataAuthorGetV10Metrics[]; "start_time"?: string; "end_time"?: string; "dimension"?: Models.QianchuanReportUniPromotionDimensionDataAuthorGetV10Dimension; "order_type"?: Models.QianchuanReportUniPromotionDimensionDataAuthorGetV10OrderType; "order_field"?: string; "filtering"?: Models.QianchuanReportUniPromotionDimensionDataAuthorGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanReportUniPromotionDimensionDataRoomGetV10": { "advertiser_id": number; "room_id": number; "start_time"?: string; "end_time"?: string; "dimension"?: Models.QianchuanReportUniPromotionDimensionDataRoomGetV10Dimension; "metrics"?: Models.QianchuanReportUniPromotionDimensionDataRoomGetV10Metrics[]; "order_field"?: string; "order_type"?: Models.QianchuanReportUniPromotionDimensionDataRoomGetV10OrderType; "page"?: number; "page_size"?: number; "filtering"?: Models.QianchuanReportUniPromotionDimensionDataRoomGetV10Filtering };
  "QianchuanReportUniPromotionGetV10": { "advertiser_id": number; "start_date": string; "end_date": string; "marketing_goal"?: Models.QianchuanReportUniPromotionGetV10MarketingGoal; "order_platform"?: Models.QianchuanReportUniPromotionGetV10OrderPlatform; "fields": string[] };
  "QianchuanReportVideoUserLoseGetV10": { "fields": string[]; "start_date": string; "end_date": string; "filtering": Models.QianchuanReportVideoUserLoseGetV10Filtering; "advertiser_id": number };
  "QianchuanRoiGoalUpdateV10": Models.QianchuanRoiGoalUpdateV10Request;
  "QianchuanShopAdvertiserListV10": { "shop_id": number; "permission"?: Models.QianchuanShopAdvertiserListV10Permission[]; "page"?: number; "page_size"?: number };
  "QianchuanShopAuthorizedGetV10": { "advertiser_id": number; "page"?: number; "page_size"?: number };
  "QianchuanShopGetV10": { "shop_ids": number[] };
  "QianchuanSuggestBidV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanSuggestBidV10MarketingGoal; "external_action": Models.QianchuanSuggestBidV10ExternalAction; "aweme_id"?: number; "product_id"?: number; "campaign_scene"?: Models.QianchuanSuggestBidV10CampaignScene; "ecom_guest_type"?: Models.QianchuanSuggestBidV10EcomGuestType; "shop_id"?: number; "brand_id"?: number };
  "QianchuanSuggestBudgetV10": { "advertiser_id": number; "aweme_id": number; "live_schedule_type": Models.QianchuanSuggestBudgetV10LiveScheduleType; "start_time"?: string; "end_time"?: string; "schedule_time"?: string; "schedule_fixed_range"?: number };
  "QianchuanSuggestRoiGoalV10": { "advertiser_id": number; "aweme_id"?: number; "marketing_scene"?: Models.QianchuanSuggestRoiGoalV10MarketingScene; "marketing_goal"?: Models.QianchuanSuggestRoiGoalV10MarketingGoal; "product_id"?: number; "product_new_open"?: boolean; "external_action"?: Models.QianchuanSuggestRoiGoalV10ExternalAction; "campaign_scene"?: Models.QianchuanSuggestRoiGoalV10CampaignScene; "deep_external_action"?: Models.QianchuanSuggestRoiGoalV10DeepExternalAction; "deep_bid_type"?: Models.QianchuanSuggestRoiGoalV10DeepBidType; "ecom_guest_type"?: Models.QianchuanSuggestRoiGoalV10EcomGuestType; "shop_id"?: number; "brand_id"?: number };
  "QianchuanTodayLiveRoomDetailGetV10": { "advertiser_id": number; "room_id": number };
  "QianchuanTodayLiveRoomFlowPerformanceGetV10": { "advertiser_id": number; "room_id": number; "flow_source"?: Models.QianchuanTodayLiveRoomFlowPerformanceGetV10FlowSource };
  "QianchuanTodayLiveRoomGetV10": { "advertiser_id": number; "aweme_id": number; "date_time": string; "room_status"?: Models.QianchuanTodayLiveRoomGetV10RoomStatus; "ad_status"?: Models.QianchuanTodayLiveRoomGetV10AdStatus; "fields": string[]; "page"?: number; "page_size"?: number };
  "QianchuanTodayLiveRoomProductListGetV10": { "advertiser_id": number; "room_id": number; "fields": string[]; "explain_status"?: Models.QianchuanTodayLiveRoomProductListGetV10ExplainStatus; "page"?: number; "page_size"?: number };
  "QianchuanTodayLiveRoomUserGetV10": { "advertiser_id": number; "room_id": number; "action_event": Models.QianchuanTodayLiveRoomUserGetV10ActionEvent; "dimension": Models.QianchuanTodayLiveRoomUserGetV10Dimension[]; "flow_source"?: Models.QianchuanTodayLiveRoomUserGetV10FlowSource };
  "QianchuanTodayLiveV2RoomUserGetV10": { "advertiser_id": number; "room_id": number; "action_event": Models.QianchuanTodayLiveV2RoomUserGetV10ActionEvent; "dimension": Models.QianchuanTodayLiveV2RoomUserGetV10Dimension[]; "flow_source": Models.QianchuanTodayLiveV2RoomUserGetV10FlowSource };
  "QianchuanToolsAllowCouponV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanToolsAllowCouponV10MarketingGoal; "campaign_scene": Models.QianchuanToolsAllowCouponV10CampaignScene; "marketing_scene": Models.QianchuanToolsAllowCouponV10MarketingScene; "aweme_ids"?: number[]; "product_ids"?: number[]; "is_lab_ad"?: boolean };
  "QianchuanToolsAwemeAuthV10": Models.QianchuanToolsAwemeAuthV10Request;
  "QianchuanToolsEstimateAudienceV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanToolsEstimateAudienceV10MarketingGoal; "external_action": Models.QianchuanToolsEstimateAudienceV10ExternalAction; "product_id"?: number; "aweme_id"?: number; "audience"?: Models.QianchuanToolsEstimateAudienceV10Audience };
  "QianchuanToolsGrayV10": { "advertiser_id": number; "gray_keys": string[]; "aweme_ids"?: number[] };
  "QianchuanToolsLogSearchV10": { "advertiser_id": number; "object_id"?: number; "object_type": Models.QianchuanToolsLogSearchV10ObjectType; "operator_id"?: number[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number };
  "QianchuanToolsShopAuthV10": Models.QianchuanToolsShopAuthV10Request;
  "QianchuanToolsSmartBoostAdBoostReportGetV10": { "advertiser_id": number; "ad_id": number; "ad_raise_version": number; "start_time": string; "end_time": string; "time_granularity"?: string; "filed"?: string[]; "order_field"?: string; "order_type"?: Models.QianchuanToolsSmartBoostAdBoostReportGetV10OrderType; "page": number; "page_size": number };
  "QianchuanToolsSmartBoostAdBoostSetV10": Models.QianchuanToolsSmartBoostAdBoostSetV10Request;
  "QianchuanToolsSmartBoostAdBoostStatusGetV10": { "advertiser_id": number; "ad_ids": number[] };
  "QianchuanToolsSmartBoostAdBoostVersionGetV10": { "advertiser_id": number; "ad_id": number; "cursor"?: number; "count"?: number };
  "QianchuanTrackUrlCheckV10": { "advertiser_id": number; "track_url": string[] };
  "QianchuanUniAwemeAdCreateV10": Models.QianchuanUniAwemeAdCreateV10Request;
  "QianchuanUniAwemeAdUpdateV10": Models.QianchuanUniAwemeAdUpdateV10Request;
  "QianchuanUniAwemeAuthorizedGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanUniAwemeAuthorizedGetV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanUniAwemeSuggestBudgetV10": { "advertiser_id": number; "aweme_id": number; "marketing_goal": Models.QianchuanUniAwemeSuggestBudgetV10MarketingGoal; "product_ids"?: number[]; "ad_id"?: number };
  "QianchuanUniAwemeSuggestRoiV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanUniAwemeSuggestRoiV10MarketingGoal; "aweme_id": number; "deep_external_action": Models.QianchuanUniAwemeSuggestRoiV10DeepExternalAction; "product_ids"?: number[]; "ad_id"?: number; "task_id"?: number; "scene"?: Models.QianchuanUniAwemeSuggestRoiV10Scene };
  "QianchuanUniPromotionAdBudgetUpdateV10": Models.QianchuanUniPromotionAdBudgetUpdateV10Request;
  "QianchuanUniPromotionAdControlTaskBudgetUpdateV10": Models.QianchuanUniPromotionAdControlTaskBudgetUpdateV10Request;
  "QianchuanUniPromotionAdControlTaskCreateV10": Models.QianchuanUniPromotionAdControlTaskCreateV10Request;
  "QianchuanUniPromotionAdControlTaskDurationUpdateV10": Models.QianchuanUniPromotionAdControlTaskDurationUpdateV10Request;
  "QianchuanUniPromotionAdControlTaskListV10": { "advertiser_id": number; "marketing_goal": Models.QianchuanUniPromotionAdControlTaskListV10MarketingGoal; "ad_id": number; "start_time": string; "end_time": string; "fields"?: Models.QianchuanUniPromotionAdControlTaskListV10Fields[]; "scene": Models.QianchuanUniPromotionAdControlTaskListV10Scene; "filtering"?: Models.QianchuanUniPromotionAdControlTaskListV10Filtering; "order_type"?: Models.QianchuanUniPromotionAdControlTaskListV10OrderType; "order_field"?: string; "page"?: number; "page_size"?: number };
  "QianchuanUniPromotionAdControlTaskSmartControlCreateV10": Models.QianchuanUniPromotionAdControlTaskSmartControlCreateV10Request;
  "QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10": Models.QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Request;
  "QianchuanUniPromotionAdControlTaskStatusUpdateV10": Models.QianchuanUniPromotionAdControlTaskStatusUpdateV10Request;
  "QianchuanUniPromotionAdControlTaskUpdateV10": Models.QianchuanUniPromotionAdControlTaskUpdateV10Request;
  "QianchuanUniPromotionAdDetailV10": { "advertiser_id": number; "ad_id": number };
  "QianchuanUniPromotionAdMaterialAddV10": Models.QianchuanUniPromotionAdMaterialAddV10Request;
  "QianchuanUniPromotionAdMaterialDeleteV10": Models.QianchuanUniPromotionAdMaterialDeleteV10Request;
  "QianchuanUniPromotionAdMaterialGetV10": { "advertiser_id": number; "ad_id": number; "filtering": Models.QianchuanUniPromotionAdMaterialGetV10Filtering; "fields"?: string[]; "order_type"?: Models.QianchuanUniPromotionAdMaterialGetV10OrderType; "order_field"?: string; "page"?: number; "page_size"?: Models.QianchuanUniPromotionAdMaterialGetV10PageSize };
  "QianchuanUniPromotionAdNameUpdateV10": Models.QianchuanUniPromotionAdNameUpdateV10Request;
  "QianchuanUniPromotionAdProductDeleteV10": Models.QianchuanUniPromotionAdProductDeleteV10Request;
  "QianchuanUniPromotionAdProductGetV10": { "advertiser_id": number; "ad_id": number; "start_date": string; "end_date": string; "filtering"?: Models.QianchuanUniPromotionAdProductGetV10Filtering; "fields": string[]; "order_type"?: Models.QianchuanUniPromotionAdProductGetV10OrderType; "order_field"?: string; "page"?: number; "page_size"?: Models.QianchuanUniPromotionAdProductGetV10PageSize };
  "QianchuanUniPromotionAdRoi2GoalUpdateV10": Models.QianchuanUniPromotionAdRoi2GoalUpdateV10Request;
  "QianchuanUniPromotionAdScheduleDateUpdateV10": Models.QianchuanUniPromotionAdScheduleDateUpdateV10Request;
  "QianchuanUniPromotionAdStatusUpdateV10": Models.QianchuanUniPromotionAdStatusUpdateV10Request;
  "QianchuanUniPromotionAdSuggestionV10": { "advertiser_id": number; "ad_id": number; "filtering"?: Models.QianchuanUniPromotionAdSuggestionV10Filtering; "page"?: number; "page_size"?: number };
  "QianchuanUniPromotionAuthInitV10": Models.QianchuanUniPromotionAuthInitV10Request;
  "QianchuanUniPromotionAuthorizableShopListV10": { "advertiser_id": number; "aweme_id"?: number; "filter"?: Models.QianchuanUniPromotionAuthorizableShopListV10Filter; "page"?: number; "page_size"?: number };
  "QianchuanUniPromotionAuthorizationApplyV10": Models.QianchuanUniPromotionAuthorizationApplyV10Request;
  "QianchuanUniPromotionBlockMaterialGetV10": { "advertiser_id": number; "aweme_id": number; "marketing_goal": Models.QianchuanUniPromotionBlockMaterialGetV10MarketingGoal; "media_type"?: Models.QianchuanUniPromotionBlockMaterialGetV10MediaType; "product_id"?: number[]; "filtering"?: Models.QianchuanUniPromotionBlockMaterialGetV10Filtering; "order_field"?: Models.QianchuanUniPromotionBlockMaterialGetV10OrderField; "cursor"?: number };
  "QianchuanUniPromotionListV10": { "advertiser_id": number; "start_time": string; "end_time": string; "marketing_goal": Models.QianchuanUniPromotionListV10MarketingGoal; "filtering"?: Models.QianchuanUniPromotionListV10Filtering; "need_compensate_info"?: boolean; "fields": Models.QianchuanUniPromotionListV10Fields[]; "order_type"?: Models.QianchuanUniPromotionListV10OrderType; "order_field"?: Models.QianchuanUniPromotionListV10OrderField; "page"?: number; "page_size"?: Models.QianchuanUniPromotionListV10PageSize; "adlab_scene"?: Models.QianchuanUniPromotionListV10AdlabScene; "data_period"?: Models.QianchuanUniPromotionListV10DataPeriod };
  "QianchuanUniPromotionProductAwemeGetV10": { "advertiser_id": number; "aweme_id": number; "filtering": Models.QianchuanUniPromotionProductAwemeGetV10Filtering; "cursor"?: number; "platform"?: Models.QianchuanUniPromotionProductAwemeGetV10Platform };
  "QianchuanUniPromotionProductGetV10": { "advertiser_id": number; "aweme_id"?: number; "is_overall_marketing"?: boolean; "filtering": Models.QianchuanUniPromotionProductGetV10Filtering; "order_field"?: Models.QianchuanUniPromotionProductGetV10OrderField; "order_type"?: Models.QianchuanUniPromotionProductGetV10OrderType; "page"?: number; "page_size"?: number; "cursor"?: number; "platfrom"?: Models.QianchuanUniPromotionProductGetV10Platfrom };
  "QianchuanUniPromotionPromshopProductGetV10": { "advertiser_id": number; "ad_id": number; "ad_product_block_status_list"?: number[]; "start_date": string; "end_date": string; "fields": string[]; "order_type"?: Models.QianchuanUniPromotionPromshopProductGetV10OrderType; "order_field"?: string; "page"?: number; "page_size"?: Models.QianchuanUniPromotionPromshopProductGetV10PageSize };
  "QianchuanVideoByAwemeGetV10": { "advertiser_id": number; "aweme_id": number; "aweme_item_url"?: string; "aweme_item_id"?: number };
  "QianchuanVideoGetV10": { "advertiser_id": number; "filtering"?: Models.QianchuanVideoGetV10Filtering; "page"?: number; "page_size"?: number };
  "QueryBookingBusinessEntityIdGetV2": { "agent_id": number; "order_ids": number[] };
  "QueryInvoiceDetailSelfV2": { "local_account_id": number; "invoice_serial"?: string; "invoice_id"?: number };
  "QueryInvoiceDetailV2": { "agent_ids": number[]; "invoice_serial"?: string; "invoice_id"?: number };
  "QueryInvoiceElectronicUrlSelfV2": { "local_account_id": number; "invoice_serial": string };
  "QueryInvoiceElectronicUrlV2": { "agent_ids"?: number[]; "invoice_serial": string };
  "QueryInvoiceSelfV2": { "local_account_id": number; "statement_serials"?: string[]; "project_serials"?: string[]; "invoice_statuses"?: number[]; "invoice_serial_list"?: string[]; "contract_serial"?: string; "submit_start_time"?: string; "submit_end_time"?: string; "invoice_start_date"?: string; "invoice_end_date"?: string; "invoice_type"?: Models.QueryInvoiceSelfV2InvoiceType; "difference_invoice"?: Models.QueryInvoiceSelfV2DifferenceInvoice; "revert_status_list"?: Models.QueryInvoiceSelfV2RevertStatusList[]; "platform"?: Models.QueryInvoiceSelfV2Platform; "page_size": number; "page": number };
  "QueryInvoiceTaxV2": { "agent_id": number; "filtering": Models.QueryInvoiceTaxV2Filtering };
  "QueryInvoiceV2": { "agent_id": number; "filtering"?: Models.QueryInvoiceV2Filtering; "page_size"?: number; "page"?: number };
  "QueryProjectV2": { "agent_id": number; "filtering"?: Models.QueryProjectV2Filtering; "count": number; "cursor": number };
  "QueryProjectV30": { "agent_id": number; "filtering"?: Models.QueryProjectV30Filtering; "count": number; "cursor": number };
  "QueryRebateAccountingInfoV2": { "agent_id": number; "filtering"?: Models.QueryRebateAccountingInfoV2Filtering; "page"?: number; "page_size"?: number };
  "QueryRebateBalanceV2": { "agent_id": number; "filtering"?: Models.QueryRebateBalanceV2Filtering; "page"?: number; "page_size"?: number };
  "QueryStatementV2": { "agent_id": number; "project_id_list": number[] };
  "RecommendVideoListV30": Models.RecommendVideoListV30Request;
  "RejectMaterialAiRepairAcceptTaskCreateV30": Models.RejectMaterialAiRepairAcceptTaskCreateV30Request;
  "RejectMaterialAiRepairAcceptTaskListV30": { "advertiser_id": number; "ai_repair_ids": number[] };
  "RejectMaterialAiRepairCrossAccountGetV30": { "advertiser_id": number; "material_id": number };
  "RejectMaterialAiRepairGetV30": { "advertiser_id": number; "filtering"?: Models.RejectMaterialAiRepairGetV30Filtering; "page"?: number; "page_size"?: number };
  "RemittanceCodeListGetV30": { "cc_account_id": number; "account_id": number; "page": number; "page_size": number; "remittance_code_list": string[] };
  "RemittanceCodeListV30": { "agent_id": number; "page"?: number; "page_size"?: number; "remittance_code_list"?: string[] };
  "ReportAdGetV2": { "advertiser_id"?: number; "end_date"?: string; "fields"?: string[]; "filtering"?: Models.ReportAdGetV2Filtering; "group_by"?: Models.ReportAdGetV2GroupBy[]; "order_field"?: Models.ReportAdGetV2OrderField; "order_type"?: Models.ReportAdGetV2OrderType; "page"?: number; "page_size"?: number; "start_date"?: string; "time_granularity"?: Models.ReportAdGetV2TimeGranularity };
  "ReportAdvertiserGetV2": { "advertiser_id"?: number; "end_date"?: string; "fields"?: string[]; "filtering"?: Models.ReportAdvertiserGetV2Filtering; "group_by"?: Models.ReportAdvertiserGetV2GroupBy[]; "order_field"?: Models.ReportAdvertiserGetV2OrderField; "order_type"?: Models.ReportAdvertiserGetV2OrderType; "page"?: number; "page_size"?: number; "start_date"?: string; "time_granularity"?: Models.ReportAdvertiserGetV2TimeGranularity };
  "ReportAgentGetV2V2": { "agent_id"?: number; "cursor"?: number; "cursor_size"?: number; "end_date"?: string; "filtering"?: Models.ReportAgentGetV2V2Filtering; "page"?: number; "page_size"?: number; "start_date"?: string };
  "ReportAudienceAgeV2": { "advertiser_id"?: number; "end_date"?: string; "id_type"?: Models.ReportAudienceAgeV2IdType; "ids"?: number[]; "metrics"?: string[]; "start_date"?: string };
  "ReportAudienceAwemeListV2": { "advertiser_id"?: number; "end_date"?: string; "filtering"?: Models.ReportAudienceAwemeListV2Filtering; "metrics"?: string[]; "page"?: number; "page_size"?: number; "start_date"?: string };
  "ReportAudienceCityV2": { "advertiser_id"?: number; "end_date"?: string; "id_type"?: Models.ReportAudienceCityV2IdType; "ids"?: number[]; "metrics"?: string[]; "start_date"?: string };
  "ReportAudienceGenderV2": { "advertiser_id"?: number; "end_date"?: string; "id_type"?: Models.ReportAudienceGenderV2IdType; "ids"?: number[]; "metrics"?: string[]; "start_date"?: string };
  "ReportAudienceInterestActionListV2": { "advertiser_id"?: number; "end_date"?: string; "filtering"?: Models.ReportAudienceInterestActionListV2Filtering; "metrics"?: string[]; "page"?: number; "page_size"?: number; "start_date"?: string };
  "ReportAudienceProvinceV2": { "advertiser_id"?: number; "end_date"?: string; "id_type"?: Models.ReportAudienceProvinceV2IdType; "ids"?: number[]; "metrics"?: string[]; "start_date"?: string };
  "ReportBrandAdGetV30": { "advertiser_id": number; "landing_type"?: Models.ReportBrandAdGetV30LandingType; "pricing_type"?: Models.ReportBrandAdGetV30PricingType; "ad_ids"?: string[]; "start_time"?: string; "end_time"?: string; "page": number; "size": number };
  "ReportBrandAdvertiserGetV30": { "advertiser_id": number; "landing_type"?: Models.ReportBrandAdvertiserGetV30LandingType; "pricing_type"?: Models.ReportBrandAdvertiserGetV30PricingType; "start_time": string; "end_time": string; "page": number; "size": number };
  "ReportBrandAgentDataV30": { "advertiser_id": number; "data_report_type": Models.ReportBrandAgentDataV30DataReportType; "start_time": string; "end_time": string; "time_dimension"?: Models.ReportBrandAgentDataV30TimeDimension; "page_type"?: Models.ReportBrandAgentDataV30PageType; "filter"?: Models.ReportBrandAgentDataV30Filter; "metrics"?: string[]; "page"?: Models.ReportBrandAgentDataV30Page };
  "ReportBrandCampaignGetV30": { "advertiser_id": number; "landing_type"?: Models.ReportBrandCampaignGetV30LandingType; "pricing_type"?: Models.ReportBrandCampaignGetV30PricingType; "campaign_ids"?: string[]; "start_time"?: string; "end_time"?: string; "page": number; "size": number };
  "ReportBrandCreativeGetV30": { "advertiser_id": number; "landing_type"?: number; "pricing_type"?: number; "creative_ids"?: string[]; "start_time"?: string; "end_time"?: string; "page": number; "size": number };
  "ReportBrandDataV30": { "advertiser_id": number; "data_report_type": Models.ReportBrandDataV30DataReportType; "start_time": string; "end_time": string; "time_dimension"?: Models.ReportBrandDataV30TimeDimension; "page_type"?: Models.ReportBrandDataV30PageType; "filter"?: Models.ReportBrandDataV30Filter; "metrics"?: string[]; "page"?: Models.ReportBrandDataV30Page };
  "ReportBusinessPlatformStardeliveryTaskVideoDataGetV30": { "organization_id": number; "start_date": string; "end_date": string; "filtering"?: Models.ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Filtering; "order_field"?: string; "order_type"?: Models.ReportBusinessPlatformStardeliveryTaskVideoDataGetV30OrderType; "page"?: number; "page_size"?: number };
  "ReportCampaignGetV2": { "advertiser_id"?: number; "end_date"?: string; "fields"?: string[]; "filtering"?: Models.ReportCampaignGetV2Filtering; "group_by"?: Models.ReportCampaignGetV2GroupBy[]; "order_field"?: Models.ReportCampaignGetV2OrderField; "order_type"?: Models.ReportCampaignGetV2OrderType; "page"?: number; "page_size"?: number; "start_date"?: string; "time_granularity"?: Models.ReportCampaignGetV2TimeGranularity };
  "ReportCreativeGetV2": { "advertiser_id"?: number; "end_date"?: string; "fields"?: string[]; "filtering"?: Models.ReportCreativeGetV2Filtering; "group_by"?: Models.ReportCreativeGetV2GroupBy[]; "order_field"?: Models.ReportCreativeGetV2OrderField; "order_type"?: Models.ReportCreativeGetV2OrderType; "page"?: number; "page_size"?: number; "start_date"?: string; "time_granularity"?: Models.ReportCreativeGetV2TimeGranularity };
  "ReportCustomAsyncTaskCreateV30": Models.ReportCustomAsyncTaskCreateV30Request;
  "ReportCustomAsyncTaskDownloadV30": { "advertiser_id": number; "task_id": number };
  "ReportCustomAsyncTaskGetV30": { "advertiser_id": number; "filtering"?: Models.ReportCustomAsyncTaskGetV30Filtering; "page"?: number; "page_size"?: number };
  "ReportCustomConfigGetV30": { "advertiser_id": number; "data_topics": Models.ReportCustomConfigGetV30DataTopics[] };
  "ReportCustomCreativeGetV30": { "dimensions": string[]; "advertiser_id": number; "metrics": string[]; "filters": Models.ReportCustomCreativeGetV30FiltersInner[]; "start_time": string; "end_time": string; "order_by": Models.ReportCustomCreativeGetV30OrderByInner[]; "page"?: number; "page_size"?: number };
  "ReportCustomGetV30": { "dimensions": string[]; "advertiser_id": number; "metrics": string[]; "filters": Models.ReportCustomGetV30FiltersInner[]; "start_time": string; "end_time": string; "order_by": Models.ReportCustomGetV30OrderByInner[]; "page"?: number; "page_size"?: number; "data_topic"?: Models.ReportCustomGetV30DataTopic };
  "ReportJointGrowthCusGetV30": { "advertiser_id": number; "rta_id": number; "start_time": string; "end_time": string; "page"?: number; "page_size"?: number };
  "ReportJointGrowthGetV30": { "advertiser_id": number; "rta_id": number; "start_time": string; "end_time": string; "page"?: number; "page_size"?: number };
  "ReportLiveRoomAnalysisGetV30": { "advertiser_id": number; "start_time"?: string; "end_time"?: string; "fields"?: string[]; "filtering": Models.ReportLiveRoomAnalysisGetV30Filtering; "order_field"?: string; "order_type"?: Models.ReportLiveRoomAnalysisGetV30OrderType; "page"?: number; "page_size"?: number };
  "ReportProductAsyncTaskDownloadV30": { "advertiser_id": number; "task_id": number; "range_from"?: number; "range_to"?: number };
  "ReportProductAsyncTaskGetV30": Models.ReportProductAsyncTaskGetV30Request;
  "ReportProductDailyAsyncTaskCreateV30": Models.ReportProductDailyAsyncTaskCreateV30Request;
  "ReportProductHourlyAsyncTaskCreateV30": Models.ReportProductHourlyAsyncTaskCreateV30Request;
  "ReportReportLiveRoomAudiencePortraitGetV30": { "advertiser_id": number; "dimension": Models.ReportReportLiveRoomAudiencePortraitGetV30Dimension; "start_time"?: string; "end_time"?: string; "fields"?: string[]; "filtering": Models.ReportReportLiveRoomAudiencePortraitGetV30Filtering; "order_field"?: string; "order_type"?: Models.ReportReportLiveRoomAudiencePortraitGetV30OrderType; "page"?: number; "page_size"?: number };
  "ReportRtaCusExpGetV2": { "advertiser_id": number; "rta_interface_id": number; "rta_id": number; "rta_vid": string; "start_time": string; "end_time": string };
  "ReportRtaExpGetV2": { "advertiser_id": number; "rta_id": number; "start_date": string; "end_date": string; "strategy": number };
  "ReportRtaExpLocalDailyGetV30": { "rta_id": number; "advertiser_id": number; "vid"?: number; "cus_vid"?: number; "start_date": string; "end_date": string; "filtering"?: Models.ReportRtaExpLocalDailyGetV30Filtering };
  "ReportRtaExpLocalHourlyGetV30": { "rta_id": number; "advertiser_id": number; "vid"?: number; "cus_vid"?: number; "start_date": string; "end_date": string };
  "ReportRtaGetV2": { "advertiser_id": number; "start_date": string; "end_date": string; "report_type": string; "time_granularity"?: string; "order_field"?: string; "order_type"?: Models.ReportRtaGetV2OrderType; "page"?: number; "page_size"?: number };
  "ReportRubeexGetV2": { "advertiser_id"?: number; "dimensions"?: string[]; "filtering"?: Models.ReportRubeexGetV2Filtering; "metrics"?: string[]; "order"?: Models.ReportRubeexGetV2Order; "page"?: number; "page_size"?: number; "project_id"?: number; "stat_time_day"?: string[] };
  "ReportSitePageV2": { "advertiser_id"?: number; "inventory_type"?: Models.ReportSitePageV2InventoryType; "site_id"?: string; "time_duration"?: Models.ReportSitePageV2TimeDuration };
  "ReportStardeliveryTaskDataGetV30": { "advertiser_id": number; "start_date": string; "end_date": string; "star_task_version"?: string; "filtering"?: Models.ReportStardeliveryTaskDataGetV30Filtering; "order_field"?: string; "order_type"?: Models.ReportStardeliveryTaskDataGetV30OrderType; "page"?: number; "page_size"?: number };
  "ReportStardeliveryTaskVideoDataGetV30": { "advertiser_id": number; "star_task_id": number; "start_date": string; "end_date": string; "filtering"?: Models.ReportStardeliveryTaskVideoDataGetV30Filtering; "order_field"?: string; "order_type"?: Models.ReportStardeliveryTaskVideoDataGetV30OrderType; "page"?: number; "page_size"?: number };
  "ReportVideoFrameGetV2": { "advertiser_id"?: number; "end_date"?: string; "filtering"?: Models.ReportVideoFrameGetV2Filtering; "metrics"?: Models.ReportVideoFrameGetV2Metrics[]; "start_date"?: string };
  "ScheduleResultGetV30": { "advertiser_id"?: number; "scheduler_id": number };
  "SecurityAuditResultsV30": { "account_id": number; "object_id": number };
  "SecurityCreateAppealV30": Models.SecurityCreateAppealV30Request;
  "SecurityGetConsultResultV30": { "advertiser_id": number; "appeal_track_ids": number[] };
  "SecurityNonScoreDisposalInfoGetV30": { "advertiser_id": number; "business_line": Models.SecurityNonScoreDisposalInfoGetV30BusinessLine; "time_range"?: Models.SecurityNonScoreDisposalInfoGetV30TimeRange; "page"?: number; "page_size"?: number };
  "SecurityOpenMaterialAuditV30": Models.SecurityOpenMaterialAuditV30Request;
  "SecurityScoreDisposalInfoGetV30": { "advertiser_id": number; "business_line": Models.SecurityScoreDisposalInfoGetV30BusinessLine; "page"?: number; "page_size"?: number; "order_field"?: Models.SecurityScoreDisposalInfoGetV30OrderField; "order_type"?: Models.SecurityScoreDisposalInfoGetV30OrderType; "filtering": Models.SecurityScoreDisposalInfoGetV30Filtering };
  "SecurityScoreTotalGetV30": { "advertiser_id": number; "page"?: number; "page_size"?: number; "business_line": Models.SecurityScoreTotalGetV30BusinessLine; "filtering"?: Models.SecurityScoreTotalGetV30Filtering };
  "SecurityScoreViolationEventGetV30": { "advertiser_id": number; "business_line": Models.SecurityScoreViolationEventGetV30BusinessLine; "filtering"?: Models.SecurityScoreViolationEventGetV30Filtering; "page"?: number; "page_size"?: number };
  "ServeMarketActiveFuncGetV10": { "use_uid": number; "app_id": number; "func_keys"?: string[]; "page": number; "page_size": number };
  "ServeMarketCidVerifyTokenV10": {  };
  "ServeMarketOrderGetV10": { "app_id"?: number; "filtering"?: Models.ServeMarketOrderGetV10Filtering; "page"?: number; "page_size"?: number };
  "SharedWalletAccountRelationGetV30": { "account_id": number; "account_type": Models.SharedWalletAccountRelationGetV30AccountType };
  "SharedWalletBudgetGetV30": { "account_id": number; "account_type": Models.SharedWalletBudgetGetV30AccountType; "sub_wallet_id": number };
  "SharedWalletBudgetSubmitV30": Models.SharedWalletBudgetSubmitV30Request;
  "SharedWalletDailyStatGetV30": { "account_id": number; "account_type": Models.SharedWalletDailyStatGetV30AccountType; "shared_wallet_id": number; "start_date"?: string; "end_date"?: string; "page"?: number; "page_size"?: number };
  "SharedWalletMainWalletGetV30": { "account_id": number; "main_wallet_id": number; "account_type": Models.SharedWalletMainWalletGetV30AccountType };
  "SharedWalletSharedRelationCreateV30": Models.SharedWalletSharedRelationCreateV30Request;
  "SharedWalletSubWalletCreateV30": Models.SharedWalletSubWalletCreateV30Request;
  "SharedWalletTransactionDetailGetV30": { "account_id": number; "account_type": Models.SharedWalletTransactionDetailGetV30AccountType; "shared_wallet_id": number; "start_date": string; "end_date": string; "page"?: number; "page_size"?: number };
  "SharedWalletWalletAdvOperationLogGetV30": { "account_id": number; "account_type": Models.SharedWalletWalletAdvOperationLogGetV30AccountType; "wallet_id": number; "filtering": Models.SharedWalletWalletAdvOperationLogGetV30Filtering; "page": number; "page_size": number };
  "SharedWalletWalletBalanceGetV30": { "account_id": number; "account_type": Models.SharedWalletWalletBalanceGetV30AccountType; "wallet_id_list": number[]; "wallet_balance_filters"?: Models.SharedWalletWalletBalanceGetV30WalletBalanceFilters };
  "SharedWalletWalletEbpRelationGetV30": { "account_id": number; "account_type": Models.SharedWalletWalletEbpRelationGetV30AccountType; "ebp_ids": number[]; "wallet_types": Models.SharedWalletWalletEbpRelationGetV30WalletTypes[] };
  "SharedWalletWalletInfoGetV30": { "account_id": number; "wallet_id_list": number[]; "account_type": Models.SharedWalletWalletInfoGetV30AccountType };
  "SharedWalletWalletOperationLogGetV30": { "account_id": number; "account_type": Models.SharedWalletWalletOperationLogGetV30AccountType; "wallet_id": number; "page": number; "page_size": number; "filtering"?: Models.SharedWalletWalletOperationLogGetV30Filtering };
  "SharedWalletWalletRelationGetV30": { "account_id": number; "shared_wallet_id": number; "page"?: number; "page_size"?: number; "account_type": Models.SharedWalletWalletRelationGetV30AccountType };
  "SharedWalletWatchRuleGetV30": { "account_id": number; "account_type": Models.SharedWalletWatchRuleGetV30AccountType; "sub_wallet_id": number };
  "SharedWalletWatchRuleSubmitV30": Models.SharedWalletWatchRuleSubmitV30Request;
  "ShopBonusCreateV30": Models.ShopBonusCreateV30Request;
  "ShopBonusSuccessGetV30": { "advertiser_id": number; "promotion_id": number };
  "SpiTaskGetV2": { "app_id"?: number; "count"?: number; "cursor"?: number; "end_date"?: string; "page"?: number; "page_size"?: number; "service_label"?: string; "start_date"?: string; "status"?: Models.SpiTaskGetV2Status; "subscribe_id"?: number };
  "StarAttachmentUploadV2": { "file_name": string; "star_id": number; "file": UploadFile };
  "StarAttributeItemEventFeedbackV2": Models.StarAttributeItemEventFeedbackV2Request;
  "StarAttributeJdOverflowConvertV2": Models.StarAttributeJdOverflowConvertV2Request;
  "StarAttributeUserEventFeedbackV2": Models.StarAttributeUserEventFeedbackV2Request;
  "StarAttributeUserInfoFeedbackV2": Models.StarAttributeUserInfoFeedbackV2Request;
  "StarBillGetPendingV2": { "star_id": number; "campaign_id"?: number; "order_id"?: number };
  "StarBillPayV2": Models.StarBillPayV2Request;
  "StarBrandCategoryListV2": { "star_id": number; "brand_id": number; "industry": string[] };
  "StarBrandListV2": { "star_id": number };
  "StarCampaignListV2": { "star_id": number; "search_name"?: string; "page"?: number; "limit"?: number };
  "StarChallengeAddBudgetV2": Models.StarChallengeAddBudgetV2Request;
  "StarChallengeAuthorListV2": { "star_id": number; "challenge_task_id": number; "page": number; "limit": number };
  "StarChallengeCancelV2": Models.StarChallengeCancelV2Request;
  "StarChallengeChooseTaskItemWithRewardV2": Models.StarChallengeChooseTaskItemWithRewardV2Request;
  "StarChallengeExpandRangeV2": Models.StarChallengeExpandRangeV2Request;
  "StarChallengeGetCustomTaskDataV2": { "star_id": number; "challenge_task_id": number; "page": number; "page_size": number };
  "StarChallengeGetCustomTaskListV2": { "star_id": number; "task_category": number; "page": number; "page_size": number };
  "StarChallengeGetPushAdResultsV2": { "star_id": number; "challenge_task_id": number; "item_ids": number[] };
  "StarChallengeInfoV2": { "star_id": number; "challenge_task_ids": number[] };
  "StarChallengeItemsDataV2": { "star_id": number; "challenge_task_id": number; "page"?: number; "limit"?: number };
  "StarChallengeListV2": { "star_id": number; "page"?: number; "limit"?: number };
  "StarChallengePushItemsToAdV2": Models.StarChallengePushItemsToAdV2Request;
  "StarChallengeSyncItemToAdV2": Models.StarChallengeSyncItemToAdV2Request;
  "StarClueGetV2": { "star_id": number; "demand_id"?: number; "order_id"?: number; "page"?: number; "page_size"?: number };
  "StarComponentCreateCommonComponentV2": Models.StarComponentCreateCommonComponentV2Request;
  "StarComponentCreateLinkV2": Models.StarComponentCreateLinkV2Request;
  "StarComponentQueryIndustryAnchorV2": { "star_id": number; "anchor_status"?: number; "anchor_type"?: number; "page"?: number; "limit"?: number };
  "StarComponentQueryLinkV2": { "star_id": number; "component_status"?: number; "page"?: number; "limit"?: number; "link_ids"?: number[]; "link_type"?: number };
  "StarComponentUpdateCommonComponentV2": Models.StarComponentUpdateCommonComponentV2Request;
  "StarComponentUpdateLinkV2": Models.StarComponentUpdateLinkV2Request;
  "StarCopyrightCreateV2": Models.StarCopyrightCreateV2Request;
  "StarCopyrightGetV2": { "star_id": number; "page": number; "limit": number };
  "StarCreateProjectV2": Models.StarCreateProjectV2Request;
  "StarDataTaskTimelineReportV2": { "star_id": number; "outer_project_id_list"?: string[]; "outer_task_id_list"?: string[]; "partition": string };
  "StarDemandCreateAssignV2": Models.StarDemandCreateAssignV2Request;
  "StarDemandCreateChallengeV2": Models.StarDemandCreateChallengeV2Request;
  "StarDemandGetEpisodeLimitV2": { "star_id": number; "album_id": number };
  "StarDemandGetResellCodeV2": { "star_id": number; "task_id": number };
  "StarDemandListV2": { "star_id": number; "filtering"?: Models.StarDemandListV2Filtering; "page"?: number; "page_size"?: number };
  "StarDemandMixListGetV2": { "star_id": number; "demand_id": number; "page"?: number; "page_size"?: number; "developer_id"?: number };
  "StarDemandOmCreateChallengeV2": Models.StarDemandOmCreateChallengeV2Request;
  "StarDemandOmExpandChallengeProviderV2": Models.StarDemandOmExpandChallengeProviderV2Request;
  "StarDemandOmExpandChallengeV2": Models.StarDemandOmExpandChallengeV2Request;
  "StarDemandOmGetChallengeDispatchedProviderListV2": { "star_id": number; "challenge_task_id": number; "page": number; "limit": number };
  "StarDemandOmGetChallengeItemsDataV2": { "star_id": number; "challenge_task_id": number; "page": number; "limit": number; "developer_id"?: number };
  "StarDemandOmGetChallengeV2": { "star_id": number; "challenge_task_id": number };
  "StarDemandOmGetDemandListV2": { "star_id": number; "universal_settlement_type"?: Models.StarDemandOmGetDemandListV2UniversalSettlementType; "page_no": number; "page_size": number; "micro_app_id"?: string; "create_start_time": number; "create_end_time": number };
  "StarDemandOmUpdateChallengeV2": Models.StarDemandOmUpdateChallengeV2Request;
  "StarDemandOrderListV2": { "star_id": number; "demand_id": number; "filtering"?: Models.StarDemandOrderListV2Filtering; "page"?: number; "page_size"?: number };
  "StarDemandSearchWordModifyV2": Models.StarDemandSearchWordModifyV2Request;
  "StarDemanderDemanderGetAuthorBindInfoV2": { "star_id": number; "biz_uid"?: string[]; "start_time"?: number; "end_time"?: number; "page"?: number; "limit"?: number };
  "StarDemanderDemanderGetBindShareCodeV2": { "star_id": number; "biz_uid": string };
  "StarDemanderGetCarBrandListV2": { "star_id": number };
  "StarDemanderGetRegisteredIpActsV2": { "star_id": number };
  "StarDemanderQueryCpsTaskSalesV2": { "star_id": number; "task_id": number; "page": number; "limit": number };
  "StarDemanderUploadCpsTaskSalesV2": Models.StarDemanderUploadCpsTaskSalesV2Request;
  "StarFeCommonServiceTalentDayGetCheckInCodeV2": { "s_core_user_id": number };
  "StarFeCommonServiceTalentDayJudgeCheckedInV2": { "code": string };
  "StarGetCreateChallengeDataDictV2": { "star_id": number };
  "StarInfoV2": { "star_ids": number[] };
  "StarItemAuthorGetV2": { "star_id": number; "item_ids": number[] };
  "StarMcnContractChallengeV2": Models.StarMcnContractChallengeV2Request;
  "StarMcnGetAuthorListV2": { "star_id": number; "author_id"?: number; "page"?: number; "page_size"?: number; "developer_id"?: number };
  "StarMcnGetContractChallengeAuthorItemListV2V2": { "star_id": number; "demand_id": number; "page": number; "page_size": number; "developer_id"?: number };
  "StarMcnGetContractedChallengeListV2": { "star_id": number; "page"?: number; "page_size"?: number; "pay_type"?: number; "keyword"?: string; "component_type"?: number; "challenge_status"?: number; "min_create_time_stamp"?: number; "max_create_time_stamp"?: number; "developer_id"?: number };
  "StarMcnGetContractedChallengeUrlV2": { "star_id": number; "demand_id": number; "channel_id"?: string; "developer_id"?: number };
  "StarMcnGetUnparticipatedTaskV2": { "star_id": number; "page": number; "page_size": number; "pay_type"?: number; "min_create_time_stamp"?: number; "max_create_time_stamp"?: number; "first_class_category"?: number; "second_class_category"?: number; "keyword"?: string; "settlement_type"?: number; "playlet_category"?: number; "playlet_theme"?: number[]; "playlet_gender"?: number; "playlet_hot"?: number; "playlet_first_week"?: number; "playlet_second_week"?: number; "high_profit_challenge"?: number; "developer_id"?: number };
  "StarMcnMixListGetV2": { "star_id": number; "demand_id": number; "page"?: number; "page_size"?: number; "developer_id"?: number };
  "StarMcnProviderGetParticipatedTaskV2": { "star_id": number; "page": number; "page_size": number; "provider_order_task_status"?: number; "provider_task_category"?: number; "is_comic_task"?: boolean };
  "StarMcnProviderGetRecruitInfoGetV2": { "star_id": number; "task_id": number };
  "StarMcnProviderGetTagOnTaskV2": { "star_id": number; "task_id": number };
  "StarMcnProviderGetTaskAuthorListV2": { "star_id": number; "task_id": number; "author_order_status"?: number; "page": number; "limit": number };
  "StarMcnProviderGetTaskDetailV2": { "star_id": number; "task_id": number };
  "StarMcnProviderGetTaskItemListV2": { "star_id": number; "task_id": number; "page": number; "limit": number; "provider_confirming"?: boolean };
  "StarMcnProviderGetTaskShareCodeV2": { "star_id": number; "task_id": number; "channel_id"?: string };
  "StarMcnProviderGetUnparticipatedTaskV2": { "star_id": number; "page": number; "page_size": number; "pay_type"?: number; "min_create_time_stamp"?: number; "max_create_time_stamp"?: number; "first_class_category"?: number; "second_class_category"?: number; "product_category"?: number; "app_id"?: string; "app_name"?: string; "demand_id"?: number; "game_type"?: number; "component_type"?: number; "search_tags"?: number[]; "first_category_id"?: number; "second_category_id"?: number };
  "StarMcnProviderHandleJoinedAuthorV2": Models.StarMcnProviderHandleJoinedAuthorV2Request;
  "StarMcnProviderUploadSearchItemV2": Models.StarMcnProviderUploadSearchItemV2Request;
  "StarMcnRecuritProviderGetTaskOrderListGetV2": { "star_id": number; "provider_order_task_status"?: number; "page"?: number; "page_size"?: number };
  "StarOrderApproveResourceV2": Models.StarOrderApproveResourceV2Request;
  "StarOrderDemanderCancelV2": Models.StarOrderDemanderCancelV2Request;
  "StarOrderDetailV2": { "star_id": number; "order_id": number };
  "StarOrderFinishV2": Models.StarOrderFinishV2Request;
  "StarOrderGetCancelAmountV2": { "star_id": number; "order_id": number };
  "StarOrderGetComponentV2": { "star_id": number; "order_ids": number[] };
  "StarOrderGetInfoV2": { "star_id": number; "order_ids"?: number[] };
  "StarOrderGetLiveV2": { "star_id": number; "order_ids": number[] };
  "StarOrderGetScriptV2": { "star_id": number; "order_ids": number[] };
  "StarOrderGetVideoV2": { "star_id": number; "order_ids": number[] };
  "StarOrderListByCampaignV2": { "star_id": number; "campaign_ids": number[]; "page"?: number; "limit"?: number };
  "StarOrderPublishResourceV2": Models.StarOrderPublishResourceV2Request;
  "StarOrderPushResourceV2": Models.StarOrderPushResourceV2Request;
  "StarOrderRejectResourceV2": Models.StarOrderRejectResourceV2Request;
  "StarOrderReplyAuthorCancelV2": Models.StarOrderReplyAuthorCancelV2Request;
  "StarOrderUpdateV2": Models.StarOrderUpdateV2Request;
  "StarProjectListV2": { "star_id": number; "search_name"?: string; "page": number; "limit": number };
  "StarProviderTaskItemListV2": { "star_id": number; "task_id": number; "item_search_key"?: string; "item_status"?: number[]; "page"?: number; "page_size"?: number; "statistics_start_time": number; "statistics_end_time": number };
  "StarProviderTaskListV2": { "star_id": number; "page": number; "page_size": number; "order_status"?: number[]; "task_name"?: string; "task_id"?: number; "product_name"?: string; "statistics_start_time": number; "statistics_end_time": number };
  "StarReportCustomDataTopicDailyReportV2": { "star_id": number; "work_id": number; "demand_id": number; "topics": Models.StarReportCustomDataTopicDailyReportV2Topics[]; "start_time": string; "end_time": string };
  "StarReportCustomDataTopicReportV2": { "star_id": number; "work_id": number; "demand_id": number; "topics": Models.StarReportCustomDataTopicReportV2Topics[] };
  "StarReportDataTopicConfigV2": { "star_id": number; "work_id": number; "demand_id": number; "topics": Models.StarReportDataTopicConfigV2Topics[] };
  "StarReportOrderOverviewGetV2": { "order_id": number; "star_id": number };
  "StarReportOrderOverviewV2": { "star_id": number; "order_ids": number[] };
  "StarReportOrderUserDistributionGetV2": { "fan_type"?: Models.StarReportOrderUserDistributionGetV2FanType; "interactive_type"?: Models.StarReportOrderUserDistributionGetV2InteractiveType; "order_id"?: number; "star_id"?: number };
  "StarStarAdUniteTaskDetailV2": { "star_id": number; "demand_id": number; "stat_start_date": string; "stat_end_date": string };
  "StarStarAdUniteTaskItemListV2": { "star_id": number; "page"?: number; "page_size"?: number; "stat_start_date": string; "stat_end_date": string; "demand_id": number };
  "StarStarAdUniteTaskListV2": { "star_id": number; "page"?: number; "page_size"?: number; "filtering"?: Models.StarStarAdUniteTaskListV2Filtering };
  "StarTaskBindProjectV2": Models.StarTaskBindProjectV2Request;
  "StarTaskListByProjectV2": { "star_id": number; "project_id": number; "page": number; "limit": number };
  "StarUpdateProjectV2": Models.StarUpdateProjectV2Request;
  "StarUserGetAwemeAuthorIdV2": { "star_id": number; "author_star_id": number };
  "StarUserGetStarIdV2": { "star_id": number; "aweme_author_id": number };
  "StarVasAppendOrderToBoostItemGroupV2": Models.StarVasAppendOrderToBoostItemGroupV2Request;
  "StarVasCancelBoostItemGroupV2": Models.StarVasCancelBoostItemGroupV2Request;
  "StarVasCreateBoostItemGroupV2": Models.StarVasCreateBoostItemGroupV2Request;
  "StarVasGetBoostGroupListV2": { "star_id": number; "page": number; "limit": number; "status"?: Models.StarVasGetBoostGroupListV2Status; "lt_create_time"?: number; "gt_create_time"?: number; "item_order_id"?: number };
  "StarVasGetBoostGroupOptionsV2": { "star_id": number };
  "StarVasGetBoostItemGroupDetailV2": { "star_id": number; "task_id": number };
  "StarVasGetCommonAuthorPackageListV2": { "star_id": number };
  "StarVasGetExportBoostItemGroupResultV2": { "star_id": number; "ticket_id": number };
  "StarVasSubmitExportBoostItemGroupDataV2": Models.StarVasSubmitExportBoostItemGroupDataV2Request;
  "StardeliveryTaskAuthorDetailV30": { "advertiser_id": number; "page"?: number; "page_size"?: number; "star_task_id": number; "filtering"?: Models.StardeliveryTaskAuthorDetailV30Filtering };
  "StardeliveryTaskAuthorVideoAuditV30": Models.StardeliveryTaskAuthorVideoAuditV30Request;
  "StardeliveryTaskAuthorVideoDetailV30": { "advertiser_id": number; "aweme_id"?: string; "star_task_id": number; "star_task_video_range"?: Models.StardeliveryTaskAuthorVideoDetailV30StarTaskVideoRange; "filtering"?: Models.StardeliveryTaskAuthorVideoDetailV30Filtering; "cursor"?: number; "count"?: number };
  "StardeliveryTaskBudgetUpdateV30": Models.StardeliveryTaskBudgetUpdateV30Request;
  "StardeliveryTaskCancelV30": Models.StardeliveryTaskCancelV30Request;
  "StardeliveryTaskDetailV30": { "advertiser_id": number; "star_task_id": number };
  "StardeliveryTaskListV30": { "advertiser_id": number; "star_task_version"?: string; "filtering"?: Models.StardeliveryTaskListV30Filtering; "page"?: number; "page_size"?: number };
  "StardeliveryTaskPostEndTimeUpdateV30": Models.StardeliveryTaskPostEndTimeUpdateV30Request;
  "StardeliveryTaskShareV30": Models.StardeliveryTaskShareV30Request;
  "StardeliveryTaskShareableListV30": { "advertiser_id": number; "page"?: number; "page_size"?: number };
  "StardeliveryTaskSharingListV30": { "advertiser_id": number; "star_task_id": number; "page"?: number; "page_size"?: number };
  "StardeliveryTaskUnshareV30": Models.StardeliveryTaskUnshareV30Request;
  "StdProjectCreateV30": Models.StdProjectCreateV30Request;
  "StdProjectListV30": { "advertiser_id": number; "filtering"?: Models.StdProjectListV30Filtering; "page"?: number; "page_size"?: number };
  "StdProjectUpdateV30": Models.StdProjectUpdateV30Request;
  "SubscribeAccountsAddV30": Models.SubscribeAccountsAddV30Request;
  "SubscribeAccountsListV30": { "app_id": number; "subscribe_task_id"?: number; "events"?: string[]; "core_user_id"?: number; "advertiser_ids"?: number[]; "statuses"?: Models.SubscribeAccountsListV30Statuses[]; "cursor"?: number; "count"?: number; "subscribe_package_type"?: Models.SubscribeAccountsListV30SubscribePackageType; "source"?: Models.SubscribeAccountsListV30Source; "account_type"?: Models.SubscribeAccountsListV30AccountType };
  "SubscribeAccountsRemoveV30": Models.SubscribeAccountsRemoveV30Request;
  "SuggWordsV30": Models.SuggWordsV30Request;
  "SvipChargeVerifyGetV30": { "cc_account_id": number; "account_id": number; "platform": Models.SvipChargeVerifyGetV30Platform; "request_id": string; "charge_type": Models.SvipChargeVerifyGetV30ChargeType; "charge_source": Models.SvipChargeVerifyGetV30ChargeSource; "caller": Models.SvipChargeVerifyGetV30Caller };
  "ToolQuickAppManagementQuickAppGetV2": { "advertiser_id": number; "status"?: Models.ToolQuickAppManagementQuickAppGetV2Status[]; "page"?: number; "page_size"?: number; "update_time"?: Models.ToolQuickAppManagementQuickAppGetV2UpdateTime; "search_key"?: string; "quick_app_ids"?: number[]; "asset_generation"?: Models.ToolQuickAppManagementQuickAppGetV2AssetGeneration };
  "ToolsAdPreviewQrcodeGetV30": { "advertiser_id": number; "id_type": string; "promotion_id"?: number; "material_id"?: number; "project_id"?: number };
  "ToolsAdRaiseStatusGetV2": { "ad_ids"?: number[]; "advertiser_id"?: number };
  "ToolsAdminInfoV2": { "advertiser_id": number; "codes": string[]; "language": Models.ToolsAdminInfoV2Language; "sub_district": Models.ToolsAdminInfoV2SubDistrict; "version"?: Models.ToolsAdminInfoV2Version };
  "ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30": Models.ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Request;
  "ToolsAdvertiserDiagnosisSuggestionGetV30": { "advertiser_id": number; "filtering"?: Models.ToolsAdvertiserDiagnosisSuggestionGetV30Filtering };
  "ToolsAdvertiserStoreSearchV2": { "advertiser_id"?: number; "page"?: number; "page_size"?: number; "type"?: Models.ToolsAdvertiserStoreSearchV2Type };
  "ToolsAgreementCreateV30": Models.ToolsAgreementCreateV30Request;
  "ToolsAgreementListV30": { "advertiser_id": number; "types"?: Models.ToolsAgreementListV30Types[]; "sign_status"?: Models.ToolsAgreementListV30SignStatus };
  "ToolsAigcMaterialGetV2": { "advertiser_id": number; "product_id"?: number; "product_platform_id"?: number; "unique_product_id"?: number; "delivery_medium"?: Models.ToolsAigcMaterialGetV2DeliveryMedium; "multi_delivery_medium"?: Models.ToolsAigcMaterialGetV2MultiDeliveryMedium; "aweme_id"?: string; "instance_id"?: number; "project_type": Models.ToolsAigcMaterialGetV2ProjectType; "page"?: number; "page_size"?: number };
  "ToolsAipThirdSiteCreateV2": Models.ToolsAipThirdSiteCreateV2Request;
  "ToolsAipThirdSiteGetV2": { "advertiser_id": number; "site_id": number };
  "ToolsAipThirdSiteUpdateV2": Models.ToolsAipThirdSiteUpdateV2Request;
  "ToolsAppIosListV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsAppIosListV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsAppManagementAndroidAppListV2": { "account_id": number; "account_type": Models.ToolsAppManagementAndroidAppListV2AccountType; "page"?: number; "page_size"?: number; "filtering"?: Models.ToolsAppManagementAndroidAppListV2Filtering; "account_asset_query_scope"?: Models.ToolsAppManagementAndroidAppListV2AccountAssetQueryScope };
  "ToolsAppManagementAndroidBasicPackageGetV2": { "account_id": number; "account_type": Models.ToolsAppManagementAndroidBasicPackageGetV2AccountType; "package_id": string };
  "ToolsAppManagementAndroidBasicPackagePublishV2": Models.ToolsAppManagementAndroidBasicPackagePublishV2Request;
  "ToolsAppManagementAndroidBasicPackageUpdateV2": Models.ToolsAppManagementAndroidBasicPackageUpdateV2Request;
  "ToolsAppManagementAppGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number; "search_key"?: string; "search_type"?: Models.ToolsAppManagementAppGetV2SearchType; "status"?: Models.ToolsAppManagementAppGetV2Status; "publish_time"?: Models.ToolsAppManagementAppGetV2PublishTime; "create_time"?: Models.ToolsAppManagementAppGetV2CreateTime; "account_asset_query_scope"?: Models.ToolsAppManagementAppGetV2AccountAssetQueryScope };
  "ToolsAppManagementBookingGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number; "search_key"?: string; "search_type"?: Models.ToolsAppManagementBookingGetV2SearchType; "status"?: Models.ToolsAppManagementBookingGetV2Status; "scheduled_publish_time"?: Models.ToolsAppManagementBookingGetV2ScheduledPublishTime; "create_time"?: Models.ToolsAppManagementBookingGetV2CreateTime; "account_asset_query_scope"?: Models.ToolsAppManagementBookingGetV2AccountAssetQueryScope };
  "ToolsAppManagementBookingRecordsGetV2": { "advertiser_id": number; "package_id": string; "host_type": Models.ToolsAppManagementBookingRecordsGetV2HostType; "page"?: number; "page_size"?: number; "create_time"?: Models.ToolsAppManagementBookingRecordsGetV2CreateTime };
  "ToolsAppManagementBpShareCancelV2": Models.ToolsAppManagementBpShareCancelV2Request;
  "ToolsAppManagementBpShareV2": Models.ToolsAppManagementBpShareV2Request;
  "ToolsAppManagementExtendPackageCreateV2": Models.ToolsAppManagementExtendPackageCreateV2Request;
  "ToolsAppManagementExtendPackageCreateV2V2": Models.ToolsAppManagementExtendPackageCreateV2V2Request;
  "ToolsAppManagementExtendPackageListV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsAppManagementExtendPackageListV2Filtering; "package_id"?: string; "page"?: number; "page_size"?: number };
  "ToolsAppManagementExtendPackageListV2V2": { "account_id": number; "account_type": Models.ToolsAppManagementExtendPackageListV2V2AccountType; "package_id": string; "page"?: number; "page_size"?: number; "filtering"?: Models.ToolsAppManagementExtendPackageListV2V2Filtering };
  "ToolsAppManagementExtendPackageUpdateV2": Models.ToolsAppManagementExtendPackageUpdateV2Request;
  "ToolsAppManagementExtendPackageUpdateV2V2": Models.ToolsAppManagementExtendPackageUpdateV2V2Request;
  "ToolsAppManagementHarmonyAppListV2": { "account_id": number; "account_type": Models.ToolsAppManagementHarmonyAppListV2AccountType; "page"?: number; "page_size"?: number; "filtering"?: Models.ToolsAppManagementHarmonyAppListV2Filtering; "account_asset_query_scope"?: Models.ToolsAppManagementHarmonyAppListV2AccountAssetQueryScope; "asset_generation"?: Models.ToolsAppManagementHarmonyAppListV2AssetGeneration };
  "ToolsAppManagementIndustryInfoListV2": { "account_id": number; "account_type": Models.ToolsAppManagementIndustryInfoListV2AccountType };
  "ToolsAppManagementShareAccountListV2": { "organization_id"?: number; "package_id"?: string; "page"?: number; "page_size"?: number; "search_type"?: Models.ToolsAppManagementShareAccountListV2SearchType };
  "ToolsAppManagementUpdateAuthorizationV2": Models.ToolsAppManagementUpdateAuthorizationV2Request;
  "ToolsAppManagementUploadTaskCreateV2": Models.ToolsAppManagementUploadTaskCreateV2Request;
  "ToolsAppManagementUploadTaskListV2": { "account_id": number; "account_type": Models.ToolsAppManagementUploadTaskListV2AccountType; "filtering": Models.ToolsAppManagementUploadTaskListV2Filtering };
  "ToolsAssetLinkListV30": { "advertiser_id": number; "filtering": Models.ToolsAssetLinkListV30Filtering; "page"?: number; "page_size"?: number; "cursor"?: number; "count"?: number };
  "ToolsAwemeAuthAuthShareAdShareV2": Models.ToolsAwemeAuthAuthShareAdShareV2Request;
  "ToolsAwemeAuthCancelV2": Models.ToolsAwemeAuthCancelV2Request;
  "ToolsAwemeAuthListV2": { "advertiser_id": number; "filtering"?: Models.ToolsAwemeAuthListV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsAwemeAuthRenewalV2": Models.ToolsAwemeAuthRenewalV2Request;
  "ToolsAwemeAuthV2": Models.ToolsAwemeAuthV2Request;
  "ToolsAwemeAuthorInfoGetV2": { "advertiser_id"?: number; "behaviors"?: Models.ToolsAwemeAuthorInfoGetV2Behaviors[]; "label_ids"?: number[] };
  "ToolsAwemeBannedCreateV30": Models.ToolsAwemeBannedCreateV30Request;
  "ToolsAwemeBannedDeleteV30": Models.ToolsAwemeBannedDeleteV30Request;
  "ToolsAwemeBannedListV30": { "advertiser_id": number; "banned_type"?: Models.ToolsAwemeBannedListV30BannedType; "aweme_id"?: string; "is_apply_to_adv"?: boolean; "nickname_keyword"?: string; "aweme_user_id"?: string; "page"?: number; "page_size"?: number };
  "ToolsAwemeCategoryTopAuthorGetV2": { "advertiser_id"?: number; "behaviors"?: Models.ToolsAwemeCategoryTopAuthorGetV2Behaviors[]; "category_id"?: number };
  "ToolsAwemeInfoSearchV2": { "advertiser_id": number; "query_word": string; "behaviors"?: Models.ToolsAwemeInfoSearchV2Behaviors[] };
  "ToolsAwemeMultiLevelCategoryGetV2": { "advertiser_id"?: number; "behaviors"?: Models.ToolsAwemeMultiLevelCategoryGetV2Behaviors[] };
  "ToolsAwemeSimilarAuthorSearchV2": { "advertiser_id": number; "aweme_id": string; "behaviors"?: Models.ToolsAwemeSimilarAuthorSearchV2Behaviors[] };
  "ToolsBidSuggestV2": { "ac"?: Models.ToolsBidSuggestV2Ac[]; "action_categories"?: number[]; "action_days"?: Models.ToolsBidSuggestV2ActionDays; "action_scene"?: Models.ToolsBidSuggestV2ActionScene[]; "action_words"?: number[]; "activate_type"?: Models.ToolsBidSuggestV2ActivateType[]; "ad_id"?: number; "ad_tag"?: number[]; "advertiser_id"?: number; "age"?: Models.ToolsBidSuggestV2Age[]; "android_osv"?: Models.ToolsBidSuggestV2AndroidOsv; "app_behavior_target"?: Models.ToolsBidSuggestV2AppBehaviorTarget; "app_category"?: number[]; "app_ids"?: number[]; "article_category"?: Models.ToolsBidSuggestV2ArticleCategory[]; "audience_package_id"?: number; "auto_extend_targets"?: Models.ToolsBidSuggestV2AutoExtendTargets[]; "aweme_fan_accounts"?: number[]; "aweme_fan_behaviors"?: Models.ToolsBidSuggestV2AwemeFanBehaviors[]; "aweme_fan_categories"?: number[]; "aweme_fan_time_scope"?: Models.ToolsBidSuggestV2AwemeFanTimeScope; "aweme_fans_numbers"?: number[]; "bid_mode"?: Models.ToolsBidSuggestV2BidMode; "budget"?: number; "budget_mode"?: Models.ToolsBidSuggestV2BudgetMode; "business_ids"?: number[]; "campaign_id"?: number; "career"?: Models.ToolsBidSuggestV2Career[]; "carrier"?: Models.ToolsBidSuggestV2Carrier[]; "city"?: number[]; "convert_id"?: number; "converted_time_duration"?: Models.ToolsBidSuggestV2ConvertedTimeDuration; "device_brand"?: Models.ToolsBidSuggestV2DeviceBrand[]; "device_type"?: Models.ToolsBidSuggestV2DeviceType[]; "district"?: Models.ToolsBidSuggestV2District; "dpa_local_audience"?: Models.ToolsBidSuggestV2DpaLocalAudience; "dpa_rta_recommend_type"?: Models.ToolsBidSuggestV2DpaRtaRecommendType; "dpa_rta_switch"?: Models.ToolsBidSuggestV2DpaRtaSwitch; "exclude_custom_actions"?: Models.ToolsBidSuggestV2ExcludeCustomActionsInner[]; "exclude_flow_package"?: number[]; "filter_aweme_abnormal_active"?: Models.ToolsBidSuggestV2FilterAwemeAbnormalActive; "filter_aweme_fans_count"?: number; "filter_own_aweme_fans"?: Models.ToolsBidSuggestV2FilterOwnAwemeFans; "flow_control_mode"?: Models.ToolsBidSuggestV2FlowControlMode; "flow_package"?: number[]; "gender"?: Models.ToolsBidSuggestV2Gender; "geolocation"?: Models.ToolsBidSuggestV2GeolocationInner[]; "hide_if_converted"?: Models.ToolsBidSuggestV2HideIfConverted; "hide_if_exists"?: Models.ToolsBidSuggestV2HideIfExists; "include_custom_actions"?: Models.ToolsBidSuggestV2IncludeCustomActionsInner[]; "interest_action_mode"?: Models.ToolsBidSuggestV2InterestActionMode; "interest_categories"?: number[]; "interest_tags"?: number[]; "interest_words"?: number[]; "ios_osv"?: Models.ToolsBidSuggestV2IosOsv; "launch_price"?: number[]; "location_type"?: Models.ToolsBidSuggestV2LocationType; "platform"?: Models.ToolsBidSuggestV2Platform[]; "pricing"?: Models.ToolsBidSuggestV2Pricing; "region_version"?: string; "retargeting_tags"?: number[]; "retargeting_tags_exclude"?: number[]; "retargeting_tags_include"?: number[]; "retargeting_type"?: Models.ToolsBidSuggestV2RetargetingType; "schedule_type"?: Models.ToolsBidSuggestV2ScheduleType; "superior_popularity_type"?: Models.ToolsBidSuggestV2SuperiorPopularityType; "user_type"?: number[] };
  "ToolsBidsSuggestV30": { "advertiser_id": number; "project_id"?: number; "pricing": Models.ToolsBidsSuggestV30Pricing; "external_action": Models.ToolsBidsSuggestV30ExternalAction; "deep_external_action"?: Models.ToolsBidsSuggestV30DeepExternalAction; "deep_bid_type"?: Models.ToolsBidsSuggestV30DeepBidType; "platform"?: Models.ToolsBidsSuggestV30Platform[]; "marketing_goal"?: Models.ToolsBidsSuggestV30MarketingGoal; "campaign_type"?: Models.ToolsBidsSuggestV30CampaignType; "package_name"?: string; "user_name"?: string; "app_id"?: string };
  "ToolsBlueFlowKeywordListV30": { "advertiser_id": number; "project_id": number; "filtering"?: Models.ToolsBlueFlowKeywordListV30Filtering };
  "ToolsBlueFlowPackageListV30": { "advertiser_id": number; "filtering"?: Models.ToolsBlueFlowPackageListV30Filtering };
  "ToolsBpAssetManagementShareCancelV30": Models.ToolsBpAssetManagementShareCancelV30Request;
  "ToolsBpAssetManagementShareGetV30": { "organization_id"?: number; "asset_type": Models.ToolsBpAssetManagementShareGetV30AssetType; "instance_id": number; "page"?: number; "page_size"?: number; "share_type"?: Models.ToolsBpAssetManagementShareGetV30ShareType };
  "ToolsBpAssetManagementShareV30": Models.ToolsBpAssetManagementShareV30Request;
  "ToolsClueBridgeCallCreateV2": Models.ToolsClueBridgeCallCreateV2Request;
  "ToolsClueCallCreateV2": Models.ToolsClueCallCreateV2Request;
  "ToolsClueCallVirtualNumberGetV2": { "advertiser_id": number; "clue_id": number; "caller_number": string; "callee_number": string };
  "ToolsClueCallVirtualNumberRefundDetailGetV2": { "advertiser_id": number; "month": string; "page"?: number; "page_size"?: number };
  "ToolsClueCallbackV2": Models.ToolsClueCallbackV2Request;
  "ToolsClueClueOverviewQueryV2": { "advertiser_id": number; "start_time": number; "end_time": number };
  "ToolsClueContactLogListV2": { "advertiser_id": number; "clue_id": number; "filter"?: Models.ToolsClueContactLogListV2Filter };
  "ToolsClueContactLogOverviewQueryV2": { "advertiser_id": number; "start_time": number; "end_time": number };
  "ToolsClueContactLogRecordUrlGetV2": { "advertiser_id": number; "clue_id": number; "filter"?: Models.ToolsClueContactLogRecordUrlGetV2Filter };
  "ToolsClueExtInfoCallbackV2": Models.ToolsClueExtInfoCallbackV2Request;
  "ToolsClueFormDetailV2": { "advertiser_id": number; "instance_id": number };
  "ToolsClueFormGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number; "start_time"?: string; "end_time"?: string; "instance_id"?: number; "name"?: string; "is_del"?: number; "form_type"?: Models.ToolsClueFormGetV2FormType };
  "ToolsClueGetV2": { "advertiser_ids"?: number[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number; "clue_ids"?: number[]; "encrypt_sensitive_fields"?: boolean };
  "ToolsClueInfoGetV2": { "advertiser_ids": number[]; "clue_ids": number[] };
  "ToolsClueInfoUpdateV2": Models.ToolsClueInfoUpdateV2Request;
  "ToolsClueLifeCallbackV2": Models.ToolsClueLifeCallbackV2Request;
  "ToolsClueLifeGetV2": Models.ToolsClueLifeGetV2Request;
  "ToolsClueLiteContactGetV2": Models.ToolsClueLiteContactGetV2Request;
  "ToolsClueLiteContactRecordV2": Models.ToolsClueLiteContactRecordV2Request;
  "ToolsCluePrivateMessageCallbackV2": Models.ToolsCluePrivateMessageCallbackV2Request;
  "ToolsClueRefundDetailGetV2": { "advertiser_id": number; "month": string; "page"?: number; "page_size"?: number };
  "ToolsClueRefundInfoQueryV2": Models.ToolsClueRefundInfoQueryV2Request;
  "ToolsClueRefundReportGetV2": { "advertiser_id": number; "month": string };
  "ToolsClueRefundViewGetV2": { "advertiser_id": number; "clue_id": number };
  "ToolsClueRobotScriptQueryV2": Models.ToolsClueRobotScriptQueryV2Request;
  "ToolsClueRobotTaskCancelV2": Models.ToolsClueRobotTaskCancelV2Request;
  "ToolsClueRobotTaskCreateV2": Models.ToolsClueRobotTaskCreateV2Request;
  "ToolsClueSmartPhoneGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number };
  "ToolsClueWebrtcCreateV2V30": Models.ToolsClueWebrtcCreateV2V30Request;
  "ToolsClueWebrtcTokenGetV2": Models.ToolsClueWebrtcTokenGetV2Request;
  "ToolsClueWebrtcTokenGetV2V30": Models.ToolsClueWebrtcTokenGetV2V30Request;
  "ToolsCommentGetV30": { "advertiser_id": number; "start_time": string; "end_time": string; "order_field"?: Models.ToolsCommentGetV30OrderField; "order_type"?: Models.ToolsCommentGetV30OrderType; "filtering"?: Models.ToolsCommentGetV30Filtering; "page"?: number; "page_size"?: number };
  "ToolsCommentHideV30": Models.ToolsCommentHideV30Request;
  "ToolsCommentMetricsGetV30": { "advertiser_id": number; "start_time": string; "end_time": string; "filtering"?: Models.ToolsCommentMetricsGetV30Filtering };
  "ToolsCommentMid2itemIdV30": { "advertiser_id": number; "start_time": string; "end_time": string; "material_id": number; "page"?: number; "page_size"?: number };
  "ToolsCommentReplyGetV30": { "advertiser_id": number; "comment_id": number; "page"?: number; "page_size"?: number };
  "ToolsCommentReplyV30": Models.ToolsCommentReplyV30Request;
  "ToolsCommentStickOnTopV30": Models.ToolsCommentStickOnTopV30Request;
  "ToolsCommentTermsBannedAddV30": Models.ToolsCommentTermsBannedAddV30Request;
  "ToolsCommentTermsBannedDeleteV30": Models.ToolsCommentTermsBannedDeleteV30Request;
  "ToolsCommentTermsBannedGetV30": { "advertiser_id": number; "page"?: number; "page_size"?: number; "aweme_id"?: string; "is_apply_to_adv"?: boolean };
  "ToolsCommentTermsBannedUpdateV30": Models.ToolsCommentTermsBannedUpdateV30Request;
  "ToolsCountryInfoV2": { "advertiser_id": number; "language": Models.ToolsCountryInfoV2Language };
  "ToolsCreativeWordSelectV2": { "advertiser_id": number; "creative_word_ids"?: number[] };
  "ToolsDiagnosisSuggestionGetV30": { "promotion_ids": number[]; "advertiser_id": number };
  "ToolsDownloadPackageGetV2": { "advertiser_id"?: number; "event_id"?: string };
  "ToolsDownloadPackageParseV2": Models.ToolsDownloadPackageParseV2Request;
  "ToolsEbpAppDetailV30": { "account_id": number; "account_type": Models.ToolsEbpAppDetailV30AccountType; "package_id": string };
  "ToolsEbpAppExtendCreateV30": Models.ToolsEbpAppExtendCreateV30Request;
  "ToolsEbpAppExtendListV30": { "account_id": number; "account_type"?: Models.ToolsEbpAppExtendListV30AccountType; "package_id": string; "filtering"?: Models.ToolsEbpAppExtendListV30Filtering; "update_time"?: Models.ToolsEbpAppExtendListV30UpdateTime; "page"?: number; "page_size"?: number };
  "ToolsEbpAppExtendUpdateV30": Models.ToolsEbpAppExtendUpdateV30Request;
  "ToolsEbpAppGameBookListV30": { "account_id": number; "asset_management_scope"?: Models.ToolsEbpAppGameBookListV30AssetManagementScope; "account_type": Models.ToolsEbpAppGameBookListV30AccountType; "search_key"?: string; "asset_ownership": Models.ToolsEbpAppGameBookListV30AssetOwnership; "filtering"?: Models.ToolsEbpAppGameBookListV30Filtering; "page"?: number; "page_size"?: number; "asset_generation"?: Models.ToolsEbpAppGameBookListV30AssetGeneration };
  "ToolsEbpAppListV30": { "account_id": number; "account_type": Models.ToolsEbpAppListV30AccountType; "asset_management_scope"?: Models.ToolsEbpAppListV30AssetManagementScope; "filtering"?: Models.ToolsEbpAppListV30Filtering; "page"?: number; "page_size"?: number; "asset_generation"?: Models.ToolsEbpAppListV30AssetGeneration };
  "ToolsEbpAppPublishV30": Models.ToolsEbpAppPublishV30Request;
  "ToolsEbpAppUpdateV30": Models.ToolsEbpAppUpdateV30Request;
  "ToolsEbpAssetAuthCancelV30": Models.ToolsEbpAssetAuthCancelV30Request;
  "ToolsEbpAssetAuthListV30": { "account_id": number; "account_type": Models.ToolsEbpAssetAuthListV30AccountType; "asset_type": Models.ToolsEbpAssetAuthListV30AssetType; "asset_scope"?: number; "asset_scope_type"?: Models.ToolsEbpAssetAuthListV30AssetScopeType; "page"?: number; "page_size"?: number };
  "ToolsEbpAssetAuthV30": Models.ToolsEbpAssetAuthV30Request;
  "ToolsEbpMaterialAuthCreateV30": Models.ToolsEbpMaterialAuthCreateV30Request;
  "ToolsEbpMaterialAuthDeleteV30": Models.ToolsEbpMaterialAuthDeleteV30Request;
  "ToolsEbpMaterialAuthListV30": { "account_id": number; "account_type"?: Models.ToolsEbpMaterialAuthListV30AccountType; "material_type"?: Models.ToolsEbpMaterialAuthListV30MaterialType; "page"?: number; "page_size"?: number };
  "ToolsEbpMaterialListV30": { "account_id": number; "material_range"?: string; "filtering"?: Models.ToolsEbpMaterialListV30Filtering; "page"?: number; "page_size"?: number };
  "ToolsEbpMicroAppletCreateV30": Models.ToolsEbpMicroAppletCreateV30Request;
  "ToolsEbpMicroAppletLinkListV30": { "account_id": number; "account_type": Models.ToolsEbpMicroAppletLinkListV30AccountType; "instance_id"?: number; "app_id"?: string; "create_time"?: Models.ToolsEbpMicroAppletLinkListV30CreateTime; "page"?: number; "page_size"?: number };
  "ToolsEbpMicroAppletListV30": { "account_id": number; "account_type": Models.ToolsEbpMicroAppletListV30AccountType; "asset_management_scope": Models.ToolsEbpMicroAppletListV30AssetManagementScope; "filtering"?: Models.ToolsEbpMicroAppletListV30Filtering; "page"?: number; "page_size"?: number; "asset_generation"?: Models.ToolsEbpMicroAppletListV30AssetGeneration };
  "ToolsEbpMicroAppletUpdateV30": Models.ToolsEbpMicroAppletUpdateV30Request;
  "ToolsEbpMicroGameCreateV30": Models.ToolsEbpMicroGameCreateV30Request;
  "ToolsEbpMicroGameLinkListV30": { "account_id": number; "account_type": Models.ToolsEbpMicroGameLinkListV30AccountType; "instance_id"?: number; "app_id"?: string; "create_time"?: Models.ToolsEbpMicroGameLinkListV30CreateTime; "page"?: number; "page_size"?: number };
  "ToolsEbpMicroGameListV30": { "account_id": number; "account_type": Models.ToolsEbpMicroGameListV30AccountType; "asset_management_scope"?: Models.ToolsEbpMicroGameListV30AssetManagementScope; "filtering"?: Models.ToolsEbpMicroGameListV30Filtering; "page"?: number; "page_size"?: number; "asset_generation"?: Models.ToolsEbpMicroGameListV30AssetGeneration };
  "ToolsEbpMicroGameUpdateV30": Models.ToolsEbpMicroGameUpdateV30Request;
  "ToolsEbpPlayableDeleteV30": Models.ToolsEbpPlayableDeleteV30Request;
  "ToolsEbpPlayableListV30": { "advertiser_id": number; "material_type": Models.ToolsEbpPlayableListV30MaterialType; "filtering"?: Models.ToolsEbpPlayableListV30Filtering; "page_size"?: number; "page"?: number };
  "ToolsEbpPlayableUploadV30": Models.ToolsEbpPlayableUploadV30Request;
  "ToolsEbpStarTaskGetV30": { "account_id": number; "account_type": Models.ToolsEbpStarTaskGetV30AccountType; "star_task_id": number };
  "ToolsEbpStarTaskListV30": { "account_id": number; "account_type": Models.ToolsEbpStarTaskListV30AccountType; "star_task_source"?: Models.ToolsEbpStarTaskListV30StarTaskSource; "start_date": string; "end_date": string; "filtering"?: Models.ToolsEbpStarTaskListV30Filtering; "order_field"?: string; "order_type"?: Models.ToolsEbpStarTaskListV30OrderType; "page"?: number; "page_size"?: number };
  "ToolsEbpStarTaskTaskAuthorGetV30": { "account_id": number; "account_type": Models.ToolsEbpStarTaskTaskAuthorGetV30AccountType; "star_task_id": number; "filtering"?: Models.ToolsEbpStarTaskTaskAuthorGetV30Filtering; "page"?: number; "page_size"?: number };
  "ToolsEbpStarTaskTaskAuthorVedioGetV30": { "account_id": number; "account_type": Models.ToolsEbpStarTaskTaskAuthorVedioGetV30AccountType; "star_task_id": number; "star_task_video_range"?: Models.ToolsEbpStarTaskTaskAuthorVedioGetV30StarTaskVideoRange; "aweme_id"?: string; "filtering"?: Models.ToolsEbpStarTaskTaskAuthorVedioGetV30Filtering; "cursor"?: number; "count"?: number };
  "ToolsEbpStarTaskTaskVideoDataGetV30": { "account_id": number; "account_type": Models.ToolsEbpStarTaskTaskVideoDataGetV30AccountType; "star_task_id": number; "start_date": string; "end_date": string; "filtering"?: Models.ToolsEbpStarTaskTaskVideoDataGetV30Filtering; "order_field"?: string; "order_type"?: Models.ToolsEbpStarTaskTaskVideoDataGetV30OrderType; "page"?: number; "page_size"?: number };
  "ToolsEbpSubjectListV30": { "enterprise_organization_id": number; "query_types": Models.ToolsEbpSubjectListV30QueryTypes[]; "filter_company_id"?: number[]; "filter_status"?: Models.ToolsEbpSubjectListV30FilterStatus[]; "filter_account_ids"?: number[]; "pagination": Models.ToolsEbpSubjectListV30Pagination };
  "ToolsEbpVideoAttributesListV30": { "account_id": number; "account_type"?: Models.ToolsEbpVideoAttributesListV30AccountType; "filtering"?: Models.ToolsEbpVideoAttributesListV30Filtering; "return_lowquality_suggestions"?: boolean; "page_size"?: number; "page"?: number };
  "ToolsEbpVideoDeleteV30": Models.ToolsEbpVideoDeleteV30Request;
  "ToolsEbpVideoUpdateV30": Models.ToolsEbpVideoUpdateV30Request;
  "ToolsEbpVideoUploadV30": { "account_id": number; "account_type"?: Models.ToolsEbpVideoUploadV30AccountType; "file_name"?: string; "is_aigc"?: boolean; "labels"?: string[]; "upload_type"?: Models.ToolsEbpVideoUploadV30UploadType; "video_signature"?: string; "video_url"?: string; "video_file"?: UploadFile };
  "ToolsEbpWechatAppletCreateV30": Models.ToolsEbpWechatAppletCreateV30Request;
  "ToolsEbpWechatAppletListV30": { "account_id": number; "account_type": Models.ToolsEbpWechatAppletListV30AccountType; "asset_management_scope"?: Models.ToolsEbpWechatAppletListV30AssetManagementScope; "filtering"?: Models.ToolsEbpWechatAppletListV30Filtering; "page"?: number; "page_size"?: number; "asset_generation"?: Models.ToolsEbpWechatAppletListV30AssetGeneration };
  "ToolsEbpWechatAppletUpdateV30": Models.ToolsEbpWechatAppletUpdateV30Request;
  "ToolsEbpWechatGameCreateV30": Models.ToolsEbpWechatGameCreateV30Request;
  "ToolsEbpWechatGameListV30": { "account_id": number; "account_type"?: Models.ToolsEbpWechatGameListV30AccountType; "asset_management_scope"?: Models.ToolsEbpWechatGameListV30AssetManagementScope; "filtering"?: Models.ToolsEbpWechatGameListV30Filtering; "page"?: number; "page_size"?: number; "asset_generation"?: Models.ToolsEbpWechatGameListV30AssetGeneration };
  "ToolsEbpWechatGameUpdateV30": Models.ToolsEbpWechatGameUpdateV30Request;
  "ToolsEstimateAudienceV2": { "ac"?: Models.ToolsEstimateAudienceV2Ac[]; "action_categories"?: number[]; "action_days"?: Models.ToolsEstimateAudienceV2ActionDays; "action_words"?: number[]; "activate_type"?: Models.ToolsEstimateAudienceV2ActivateType[]; "ad_tag"?: number[]; "advertiser_id"?: number; "age"?: Models.ToolsEstimateAudienceV2Age[]; "android_osv"?: Models.ToolsEstimateAudienceV2AndroidOsv; "app_behavior_target"?: Models.ToolsEstimateAudienceV2AppBehaviorTarget; "app_category"?: number[]; "app_ids"?: number[]; "article_category"?: Models.ToolsEstimateAudienceV2ArticleCategory[]; "audience_package_id"?: number; "auto_extend_enabled"?: Models.ToolsEstimateAudienceV2AutoExtendEnabled; "auto_extend_targets"?: Models.ToolsEstimateAudienceV2AutoExtendTargets[]; "aweme_fans_numbers"?: number[]; "carrier"?: Models.ToolsEstimateAudienceV2Carrier[]; "city"?: number[]; "device_brand"?: Models.ToolsEstimateAudienceV2DeviceBrand[]; "device_type"?: Models.ToolsEstimateAudienceV2DeviceType[]; "district"?: Models.ToolsEstimateAudienceV2District; "dpa_local_audience"?: Models.ToolsEstimateAudienceV2DpaLocalAudience; "exclude_custom_actions"?: Models.ToolsEstimateAudienceV2ExcludeCustomActionsInner[]; "exclude_flow_package"?: number[]; "filter_aweme_abnormal_active"?: Models.ToolsEstimateAudienceV2FilterAwemeAbnormalActive; "filter_aweme_fans_count"?: number; "filter_own_aweme_fans"?: Models.ToolsEstimateAudienceV2FilterOwnAwemeFans; "flow_package"?: number[]; "gender"?: Models.ToolsEstimateAudienceV2Gender; "geolocation"?: Models.ToolsEstimateAudienceV2GeolocationInner[]; "include_custom_actions"?: Models.ToolsEstimateAudienceV2IncludeCustomActionsInner[]; "interest_action_mode"?: Models.ToolsEstimateAudienceV2InterestActionMode; "interest_categories"?: number[]; "interest_tags"?: number[]; "interest_words"?: number[]; "ios_osv"?: Models.ToolsEstimateAudienceV2IosOsv; "launch_price"?: number[]; "location_type"?: Models.ToolsEstimateAudienceV2LocationType; "platform"?: Models.ToolsEstimateAudienceV2Platform[]; "retargeting_tags"?: number[]; "retargeting_tags_exclude"?: number[]; "retargeting_tags_include"?: number[]; "retargeting_type"?: Models.ToolsEstimateAudienceV2RetargetingType; "superior_popularity_type"?: Models.ToolsEstimateAudienceV2SuperiorPopularityType; "user_type"?: number[] };
  "ToolsEstimatedPriceGetV2": { "advertiser_id"?: number };
  "ToolsEventAllAssetsDetailV2": { "advertiser_id": number; "asset_ids": number[] };
  "ToolsEventAllAssetsListV2": { "advertiser_id": number; "filtering"?: Models.ToolsEventAllAssetsListV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsEventAssetsGetV2": { "advertiser_id": number; "asset_type": Models.ToolsEventAssetsGetV2AssetType; "filtering"?: Models.ToolsEventAssetsGetV2Filtering; "sort_type"?: Models.ToolsEventAssetsGetV2SortType; "page"?: number; "page_size"?: number };
  "ToolsEventConvertOptimizedGoalGetV30": { "advertiser_id"?: number; "site_id"?: number; "mini_program_id"?: string; "asset_id"?: number; "landing_type": Models.ToolsEventConvertOptimizedGoalGetV30LandingType; "marketing_purpose": Models.ToolsEventConvertOptimizedGoalGetV30MarketingPurpose; "asset_type": Models.ToolsEventConvertOptimizedGoalGetV30AssetType; "campaign_type"?: Models.ToolsEventConvertOptimizedGoalGetV30CampaignType; "micro_app_instance_id"?: number };
  "ToolsForbiddenLinkGreyGetV30": { "advertiser_id"?: number };
  "ToolsGrayGetV30": { "advertiser_id": number; "gray_keys": string[]; "version"?: Models.ToolsGrayGetV30Version };
  "ToolsHotMaterialDeriveAdoptV30": Models.ToolsHotMaterialDeriveAdoptV30Request;
  "ToolsHotMaterialDeriveGetV30": { "advertiser_id": number; "task_ids": number[] };
  "ToolsHotMaterialDeriveListV30": { "advertiser_id": number; "filtering"?: Models.ToolsHotMaterialDeriveListV30Filtering; "page": number; "page_size": number };
  "ToolsHotMaterialDeriveSubmitV30": Models.ToolsHotMaterialDeriveSubmitV30Request;
  "ToolsInactiveAdvertiserListV30": { "app_id": number; "cursor"?: number; "count"?: number; "advertiser_type"?: Models.ToolsInactiveAdvertiserListV30AdvertiserType };
  "ToolsIndustryGetV2": { "level"?: Models.ToolsIndustryGetV2Level; "type"?: Models.ToolsIndustryGetV2Type };
  "ToolsInterestActionActionKeywordV2": { "advertiser_id": number; "query_words": string; "action_days"?: Models.ToolsInterestActionActionKeywordV2ActionDays };
  "ToolsInterestActionId2wordV2": { "action_days"?: Models.ToolsInterestActionId2wordV2ActionDays; "advertiser_id"?: number; "ids"?: number[]; "tag_type"?: Models.ToolsInterestActionId2wordV2TagType; "targeting_type"?: Models.ToolsInterestActionId2wordV2TargetingType };
  "ToolsInterestActionInterestKeywordV2": { "advertiser_id": number; "query_words": string };
  "ToolsInterestActionKeywordSuggestV2": { "advertiser_id": number; "id": number; "tag_type": Models.ToolsInterestActionKeywordSuggestV2TagType; "targeting_type": Models.ToolsInterestActionKeywordSuggestV2TargetingType; "action_days"?: Models.ToolsInterestActionKeywordSuggestV2ActionDays };
  "ToolsIsSupportUniversalGetV2": { "advertiser_id": number; "landing_type": Models.ToolsIsSupportUniversalGetV2LandingType; "external_action": Models.ToolsIsSupportUniversalGetV2ExternalAction; "deep_external_action"?: Models.ToolsIsSupportUniversalGetV2DeepExternalAction; "deep_bid_type"?: Models.ToolsIsSupportUniversalGetV2DeepBidType };
  "ToolsJointBidCreateV30": Models.ToolsJointBidCreateV30Request;
  "ToolsJointBidGetV30": { "advertiser_id": number };
  "ToolsJointBidUpdateV30": Models.ToolsJointBidUpdateV30Request;
  "ToolsKeywordsBidRatioCreateV30": Models.ToolsKeywordsBidRatioCreateV30Request;
  "ToolsKeywordsBidRatioDeleteV30": Models.ToolsKeywordsBidRatioDeleteV30Request;
  "ToolsKeywordsBidRatioGetV30": { "advertiser_id": number; "filtering"?: Models.ToolsKeywordsBidRatioGetV30Filtering };
  "ToolsKeywordsBidRatioUpdateV30": Models.ToolsKeywordsBidRatioUpdateV30Request;
  "ToolsKeywordsProjectInfoGetV30": { "advertiser_id": number; "promotion_word_id": string };
  "ToolsLandingGroupCreateV2": Models.ToolsLandingGroupCreateV2Request;
  "ToolsLandingGroupGetV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsLandingGroupGetV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsLandingGroupSiteOptStatusUpdateV2": Models.ToolsLandingGroupSiteOptStatusUpdateV2Request;
  "ToolsLandingGroupUpdateV2": Models.ToolsLandingGroupUpdateV2Request;
  "ToolsLiveAuthorizeListV2": { "advertiser_id"?: number; "page"?: number; "page_size"?: number; "status"?: Models.ToolsLiveAuthorizeListV2Status[] };
  "ToolsLogSearchDetailGetV2": { "advertiser_id": number; "second_log_id": number };
  "ToolsLogSearchV2": { "advertiser_id": number; "object_id"?: number[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number };
  "ToolsMaterialRaiseCreateV30": Models.ToolsMaterialRaiseCreateV30Request;
  "ToolsMaterialRaiseGetV30": { "advertiser_id": number; "project_ids": number[]; "page"?: number; "page_size"?: number };
  "ToolsMaterialRaiseMaterialIdsGetV30": { "advertiser_id": number; "schedule_id": number };
  "ToolsMaterialRaiseRecordsGetV30": { "advertiser_id": number; "project_ids": number[]; "status"?: Models.ToolsMaterialRaiseRecordsGetV30Status[]; "page"?: number; "page_size"?: number };
  "ToolsMaterialRaiseStatusGetV30": { "advertiser_id": number; "project_ids": number[] };
  "ToolsMaterialRaiseStopV30": Models.ToolsMaterialRaiseStopV30Request;
  "ToolsMicroAppCreateV30": Models.ToolsMicroAppCreateV30Request;
  "ToolsMicroAppListV30": { "advertiser_id": number; "filtering"?: Models.ToolsMicroAppListV30Filtering; "page"?: number; "page_size"?: number; "account_asset_query_scope"?: Models.ToolsMicroAppListV30AccountAssetQueryScope };
  "ToolsMicroAppUpdateV30": Models.ToolsMicroAppUpdateV30Request;
  "ToolsMicroGameConvertWindowGetV30": { "account_id": number; "account_type": Models.ToolsMicroGameConvertWindowGetV30AccountType; "asset_id": string; "asset_type": Models.ToolsMicroGameConvertWindowGetV30AssetType };
  "ToolsMicroGameConvertWindowUpdateV30": Models.ToolsMicroGameConvertWindowUpdateV30Request;
  "ToolsMicroGameCreateV30": Models.ToolsMicroGameCreateV30Request;
  "ToolsMicroGameListV30": { "advertiser_id": number; "filtering"?: Models.ToolsMicroGameListV30Filtering; "page"?: number; "page_size"?: number; "account_asset_query_scope"?: Models.ToolsMicroGameListV30AccountAssetQueryScope };
  "ToolsMicroGameUpdateV30": Models.ToolsMicroGameUpdateV30Request;
  "ToolsNoBidSuggestBidV2": { "advertiser_id"?: number; "budget"?: number; "budget_mode"?: Models.ToolsNoBidSuggestBidV2BudgetMode; "external_action"?: Models.ToolsNoBidSuggestBidV2ExternalAction; "filtering"?: Models.ToolsNoBidSuggestBidV2Filtering };
  "ToolsOrangeSiteGetV30": { "advertiser_id": number; "page": number; "page_size": number; "status"?: Models.ToolsOrangeSiteGetV30Status; "filtering"?: Models.ToolsOrangeSiteGetV30Filtering; "optimize_goal": Models.ToolsOrangeSiteGetV30OptimizeGoal; "multi_asset_type"?: Models.ToolsOrangeSiteGetV30MultiAssetType };
  "ToolsPioneerProgramAttachmentUploadV2": { "app_id": number; "data_file_type": Models.ToolsPioneerProgramAttachmentUploadV2DataFileType; "debug_mode"?: boolean; "file_index": number; "file_total_num": number; "p_date": string; "platform": Models.ToolsPioneerProgramAttachmentUploadV2Platform; "file_data": UploadFile };
  "ToolsPlayableCloudGameListV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsPlayableCloudGameListV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsPlayableCreateV2": Models.ToolsPlayableCreateV2Request;
  "ToolsPlayableGrantResultV2": { "advertiser_id": number; "task_ids"?: number[]; "start_time"?: string; "end_time"?: string; "page"?: number; "page_size"?: number };
  "ToolsPlayableGrantV2": Models.ToolsPlayableGrantV2Request;
  "ToolsPlayableListGetV2": { "advertiser_id"?: number; "page"?: number; "page_size"?: number; "playable_source"?: Models.ToolsPlayableListGetV2PlayableSource; "playable_url"?: string; "status"?: Models.ToolsPlayableListGetV2Status };
  "ToolsPlayableSaveV2": Models.ToolsPlayableSaveV2Request;
  "ToolsPlayableUploadV2": { "advertiser_id": number; "playable_package": UploadFile };
  "ToolsPlayableValidateV2": { "advertiser_id": number; "playable_id": number };
  "ToolsPreAuditGetV2": { "advertiser_id": number; "filter"?: Models.ToolsPreAuditGetV2Filter; "page"?: number; "page_size"?: number };
  "ToolsPreAuditSendV2": Models.ToolsPreAuditSendV2Request;
  "ToolsPrivativeWordAdAddV2": Models.ToolsPrivativeWordAdAddV2Request;
  "ToolsPrivativeWordAdUpdateV2": Models.ToolsPrivativeWordAdUpdateV2Request;
  "ToolsPrivativeWordBatchGetV30": Models.ToolsPrivativeWordBatchGetV30Request;
  "ToolsPrivativeWordCampaignAddV2": Models.ToolsPrivativeWordCampaignAddV2Request;
  "ToolsPrivativeWordCampaignUpdateV2": Models.ToolsPrivativeWordCampaignUpdateV2Request;
  "ToolsPrivativeWordGetV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsPrivativeWordGetV2Filtering };
  "ToolsPrivativeWordProjectAddV30": Models.ToolsPrivativeWordProjectAddV30Request;
  "ToolsPrivativeWordProjectUpdateV30": Models.ToolsPrivativeWordProjectUpdateV30Request;
  "ToolsPrivativeWordPromotionAddV30": Models.ToolsPrivativeWordPromotionAddV30Request;
  "ToolsPrivativeWordPromotionUpdateV30": Models.ToolsPrivativeWordPromotionUpdateV30Request;
  "ToolsProjectMaterialTypeUpdateV30": Models.ToolsProjectMaterialTypeUpdateV30Request;
  "ToolsPromotionCardRecommendGetV2": { "ad_id"?: number; "advanced_creative_type"?: Models.ToolsPromotionCardRecommendGetV2AdvancedCreativeType; "advertiser_id"?: number; "download_type"?: Models.ToolsPromotionCardRecommendGetV2DownloadType; "recommend_type"?: Models.ToolsPromotionCardRecommendGetV2RecommendType; "title_list"?: Models.ToolsPromotionCardRecommendGetV2TitleListInner[] };
  "ToolsPromotionCardRecommendTitleGetV2": { "ad_id"?: number; "advertiser_id"?: number; "content_type"?: Models.ToolsPromotionCardRecommendTitleGetV2ContentType; "external_url"?: string; "industry_id"?: number; "text_type"?: Models.ToolsPromotionCardRecommendTitleGetV2TextType };
  "ToolsPromotionDiagnosisSuggestionAcceptV30": Models.ToolsPromotionDiagnosisSuggestionAcceptV30Request;
  "ToolsPromotionDiagnosisSuggestionGetV30": { "advertiser_id": number; "promotion_ids": number[]; "scenes": Models.ToolsPromotionDiagnosisSuggestionGetV30Scenes[] };
  "ToolsPromotionRaiseSetV30": Models.ToolsPromotionRaiseSetV30Request;
  "ToolsPromotionRaiseStatusCurrentIdsGetV30": { "advertiser_id": number; "promotion_ids": number[] };
  "ToolsPromotionRaiseStatusGetV30": { "advertiser_id": number; "promotion_ids": number[] };
  "ToolsPromotionRaiseStopV30": Models.ToolsPromotionRaiseStopV30Request;
  "ToolsPromotionRaiseVersionGetV30": { "advertiser_id": number; "promotion_id": number; "page"?: number; "page_size"?: number };
  "ToolsQuotaGetV2": { "advertiser_id": number; "campaign_type": Models.ToolsQuotaGetV2CampaignType; "delivery_range"?: Models.ToolsQuotaGetV2DeliveryRange };
  "ToolsRegionGetV2": { "region_level"?: Models.ToolsRegionGetV2RegionLevel; "region_type"?: Models.ToolsRegionGetV2RegionType };
  "ToolsRtaGetInfoTmpV2": { "advertiser_id": number; "campaign_id"?: number };
  "ToolsRtaGetInfoV2": { "advertiser_id": number; "campaign_id"?: number; "account_type"?: Models.ToolsRtaGetInfoV2AccountType };
  "ToolsRtaGetV2": { "advertiser_id": number; "account_type"?: Models.ToolsRtaGetV2AccountType };
  "ToolsRtaScopeGetV30": { "advertiser_id": number; "rta_id": number };
  "ToolsRtaSetScopeV2": Models.ToolsRtaSetScopeV2Request;
  "ToolsRtaStatusUpdateV2": Models.ToolsRtaStatusUpdateV2Request;
  "ToolsRubeexPlayableAdListV2": { "playable_id": number; "advertiser_id": number; "page"?: number; "page_size"?: number };
  "ToolsRubeexPlayableListV2": { "project_id": number; "advertiser_id": number; "page"?: number; "page_size"?: number; "filtering"?: Models.ToolsRubeexPlayableListV2Filtering };
  "ToolsRubeexRemarkV2": { "advertiser_id": number; "project_id": number; "scene": Models.ToolsRubeexRemarkV2Scene; "filtering"?: Models.ToolsRubeexRemarkV2Filtering };
  "ToolsRubeexVersionGetV2": { "advertiser_id": number; "project_id": number };
  "ToolsSearchBidRatioGetV2": { "advertiser_id": number; "ad_id"?: number };
  "ToolsSiteCopyV2": Models.ToolsSiteCopyV2Request;
  "ToolsSiteCreateV2": Models.ToolsSiteCreateV2Request;
  "ToolsSiteFormsListV2": { "advertiser_id"?: number; "site_id"?: number };
  "ToolsSiteGetV2": { "advertiser_id": number; "page"?: number; "page_size"?: number; "status"?: Models.ToolsSiteGetV2Status; "share_type"?: Models.ToolsSiteGetV2ShareType; "filtering"?: Models.ToolsSiteGetV2Filtering };
  "ToolsSiteHandselV2": Models.ToolsSiteHandselV2Request;
  "ToolsSitePreviewV2": { "advertiser_id": number; "site_id": string };
  "ToolsSiteReadV2": { "advertiser_id"?: string; "site_id"?: string };
  "ToolsSiteTemplateCreateV2": Models.ToolsSiteTemplateCreateV2Request;
  "ToolsSiteTemplateGetV2": { "advertiser_id": number; "filter"?: Models.ToolsSiteTemplateGetV2Filter; "page"?: number; "page_size"?: number };
  "ToolsSiteTemplatePicUrlGetV2": { "advertiser_id": number; "site_id"?: number; "template_id"?: number };
  "ToolsSiteTemplatePreviewV2": { "advertiser_id": number; "template_id": number };
  "ToolsSiteTemplateSiteCreateV2": Models.ToolsSiteTemplateSiteCreateV2Request;
  "ToolsSiteUpdateStatusV2": Models.ToolsSiteUpdateStatusV2Request;
  "ToolsSiteUpdateV2": Models.ToolsSiteUpdateV2Request;
  "ToolsStarTaskSettlementConfigV2": { "advertiser_id": number; "first_industry_id": number; "second_industry_id": number; "star_material_first_type": number; "star_material_second_type": number; "star_task_external_action": Models.ToolsStarTaskSettlementConfigV2StarTaskExternalAction };
  "ToolsStarTaskTitleTopicGetV2": { "advertiser_id": number; "title_specifies_topic_item": string };
  "ToolsSuggestBudgetGetV30": { "advertiser_id": number; "promotion_ids": number[] };
  "ToolsTaskRaiseCreateV2": Models.ToolsTaskRaiseCreateV2Request;
  "ToolsTaskRaiseDataGetV2": { "advertiser_id": number; "report_id": number };
  "ToolsTaskRaiseGetV2": { "advertiser_id": number; "page": number; "page_size": number; "platform_version"?: Models.ToolsTaskRaiseGetV2PlatformVersion };
  "ToolsTaskRaiseOptimizationIdsGetV2": { "advertiser_id": number; "platform_version"?: Models.ToolsTaskRaiseOptimizationIdsGetV2PlatformVersion };
  "ToolsTaskRaiseStatusStopV2": Models.ToolsTaskRaiseStatusStopV2Request;
  "ToolsThirdSiteDeleteV2": Models.ToolsThirdSiteDeleteV2Request;
  "ToolsThirdSiteGetV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsThirdSiteGetV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsThirdSitePreviewV2": { "advertiser_id": number; "site_id": number };
  "ToolsThirdSiteUpdateV2": Models.ToolsThirdSiteUpdateV2Request;
  "ToolsToolsTaskDetailGetV30": { "advertiser_id": number; "task_id": number; "page"?: number; "page_size"?: number };
  "ToolsToolsTaskGetV30": { "advertiser_id": number; "task_ids"?: number[]; "task_status"?: Models.ToolsToolsTaskGetV30TaskStatus[]; "page"?: number; "page_size"?: number };
  "ToolsUnionFlowPackageCreateV2": Models.ToolsUnionFlowPackageCreateV2Request;
  "ToolsUnionFlowPackageDeleteV2": Models.ToolsUnionFlowPackageDeleteV2Request;
  "ToolsUnionFlowPackageGetV2": { "advertiser_id"?: number; "filtering"?: Models.ToolsUnionFlowPackageGetV2Filtering; "page"?: number; "page_size"?: number };
  "ToolsUnionFlowPackagePromotionReportV30": { "advertiser_id": number; "filter": Models.ToolsUnionFlowPackagePromotionReportV30Filter; "order_field"?: string; "order_type"?: Models.ToolsUnionFlowPackagePromotionReportV30OrderType; "page"?: number; "page_size"?: number };
  "ToolsUnionFlowPackageReportV2": { "advertiser_id"?: number; "filter"?: Models.ToolsUnionFlowPackageReportV2Filter; "order_field"?: string; "order_type"?: Models.ToolsUnionFlowPackageReportV2OrderType; "page"?: number; "page_size"?: number };
  "ToolsUnionFlowPackageUpdateV2": Models.ToolsUnionFlowPackageUpdateV2Request;
  "ToolsVideoCheckAvailableAnchorV2": { "advertiser_id": number; "item_ids": number[]; "landing_type": Models.ToolsVideoCheckAvailableAnchorV2LandingType; "external_action": Models.ToolsVideoCheckAvailableAnchorV2ExternalAction };
  "ToolsVideoCoverSuggestV2": { "advertiser_id": number; "video_id": string };
  "ToolsWechatAppletCreateV30": Models.ToolsWechatAppletCreateV30Request;
  "ToolsWechatAppletListV30": { "advertiser_id": number; "filtering"?: Models.ToolsWechatAppletListV30Filtering; "page"?: number; "page_size"?: number; "order_type"?: Models.ToolsWechatAppletListV30OrderType; "order_field"?: Models.ToolsWechatAppletListV30OrderField; "account_asset_query_scope"?: Models.ToolsWechatAppletListV30AccountAssetQueryScope };
  "ToolsWechatAppletUpdateV30": Models.ToolsWechatAppletUpdateV30Request;
  "ToolsWechatGameCreateV30": Models.ToolsWechatGameCreateV30Request;
  "ToolsWechatGameListV30": { "account_id": number; "account_type": Models.ToolsWechatGameListV30AccountType; "page"?: number; "page_size"?: number; "account_asset_query_scope"?: Models.ToolsWechatGameListV30AccountAssetQueryScope; "filtering"?: Models.ToolsWechatGameListV30Filtering };
  "UniProjectAwemeAuthorizedGetV30": { "advertiser_id": number; "playlet_id": number; "page"?: number };
  "UniProjectCreateV30": Models.UniProjectCreateV30Request;
  "UniProjectListGetV30": { "advertiser_id": number; "filtering"?: Models.UniProjectListGetV30Filtering; "page"?: number; "page_size"?: number };
  "UniProjectMonetizationModeUpdateV30": Models.UniProjectMonetizationModeUpdateV30Request;
  "UniProjectUpdateV30": Models.UniProjectUpdateV30Request;
  "UploadStatementV2": { "agent_id": number; "file": UploadFile };
  "UserInfoV2": {  };
  "WalletChargeVerifyGetV30": { "account_id": number; "wallet_id": number; "charge_type": Models.WalletChargeVerifyGetV30ChargeType };
  "WalletPrepayChargeGenerateRemittanceCodeCreateV30": Models.WalletPrepayChargeGenerateRemittanceCodeCreateV30Request;
  "WalletRemittanceCodeListGetV30": { "account_id": number; "charge_target_id": number; "charge_target_type": Models.WalletRemittanceCodeListGetV30ChargeTargetType; "page"?: number; "page_size"?: number; "remittance_code_list": string[] };
  "YuntuAudienceInfoCreateV30": Models.YuntuAudienceInfoCreateV30Request;
  "YuntuAudienceInfoDeleteV30": Models.YuntuAudienceInfoDeleteV30Request;
  "YuntuAudienceInfoGetV30": { "yuntu_brand_id": number; "service_provider_id": number; "advertiser_id": number; "custom_audience_id": number };
  "YuntuAudienceLabelCreateV30": Models.YuntuAudienceLabelCreateV30Request;
  "YuntuAudienceLabelDeleteV30": Models.YuntuAudienceLabelDeleteV30Request;
  "YuntuAudienceLabelGetV30": { "yuntu_brand_id": number; "service_provider_id": number; "label_id": number };
  "YuntuBrandInfoGetV30": { "yuntu_brand_id": number; "service_provider_id": number };
}

export interface EndpointResponseMap {
  "AccountFundGetV30": Models.AccountFundGetV30Response;
  "AccountUpdateV30": Models.AccountUpdateV30Response;
  "AdBillingUniqueIdGetV30": Models.AdBillingUniqueIdGetV30Response;
  "AdConvertSignalV2": Uint8Array;
  "AdCostProtectStatusGetV2": Models.AdCostProtectStatusGetV2Response;
  "AdGetV2": Models.AdGetV2Response;
  "AdRejectReasonV2": Models.AdRejectReasonV2Response;
  "AdShopInfoUpdateV30": Models.AdShopInfoUpdateV30Response;
  "AdUdUpdateV2": Models.AdUdUpdateV2Response;
  "AdUpdateBidV2": Models.AdUpdateBidV2Response;
  "AdUpdateBudgetV2": Models.AdUpdateBudgetV2Response;
  "AdvConvertOleConvertV2": Models.AdvConvertOleConvertV2Response;
  "AdvertiserAttachmentUploadV30": Models.AdvertiserAttachmentUploadV30Response;
  "AdvertiserAvatarGetV2": Models.AdvertiserAvatarGetV2Response;
  "AdvertiserAvatarSubmitV2": Models.AdvertiserAvatarSubmitV2Response;
  "AdvertiserAvatarUploadV2": Models.AdvertiserAvatarUploadV2Response;
  "AdvertiserBudgetGetV2": Models.AdvertiserBudgetGetV2Response;
  "AdvertiserDeliveryPkgConfigV30": Models.AdvertiserDeliveryPkgConfigV30Response;
  "AdvertiserDeliveryPkgDeleteV30": Models.AdvertiserDeliveryPkgDeleteV30Response;
  "AdvertiserDeliveryPkgGetV30": Models.AdvertiserDeliveryPkgGetV30Response;
  "AdvertiserDeliveryPkgSubmitV30": Models.AdvertiserDeliveryPkgSubmitV30Response;
  "AdvertiserDeliveryQualificationDeleteV30": Models.AdvertiserDeliveryQualificationDeleteV30Response;
  "AdvertiserDeliveryQualificationListV30": Models.AdvertiserDeliveryQualificationListV30Response;
  "AdvertiserDeliveryQualificationSubmitV30": Models.AdvertiserDeliveryQualificationSubmitV30Response;
  "AdvertiserFundDailyStatV2": Models.AdvertiserFundDailyStatV2Response;
  "AdvertiserFundDetailGrantV2": Models.AdvertiserFundDetailGrantV2Response;
  "AdvertiserFundGetV2": Models.AdvertiserFundGetV2Response;
  "AdvertiserFundGrantTransactionGetV2": Models.AdvertiserFundGrantTransactionGetV2Response;
  "AdvertiserFundTransactionGetV2": Models.AdvertiserFundTransactionGetV2Response;
  "AdvertiserInfoV2": Models.AdvertiserInfoV2Response;
  "AdvertiserPublicInfoV2": Models.AdvertiserPublicInfoV2Response;
  "AdvertiserQualificationCreateV2V2": Models.AdvertiserQualificationCreateV2V2Response;
  "AdvertiserQualificationGetV30": Models.AdvertiserQualificationGetV30Response;
  "AdvertiserQualificationSelectV2V2": Models.AdvertiserQualificationSelectV2V2Response;
  "AdvertiserQualificationSubmitV30": Models.AdvertiserQualificationSubmitV30Response;
  "AdvertiserTransferableFundGetV2": Models.AdvertiserTransferableFundGetV2Response;
  "AdvertiserUpdateBudgetV2": Models.AdvertiserUpdateBudgetV2Response;
  "AdvertiserVerifyInfoGetV30": Models.AdvertiserVerifyInfoGetV30Response;
  "AgentAdvAdvertiserUpdateSaleV2": Models.AgentAdvAdvertiserUpdateSaleV2Response;
  "AgentAdvBiddingListQueryV2": Models.AgentAdvBiddingListQueryV2Response;
  "AgentAdvBrandListQueryV2": Models.AgentAdvBrandListQueryV2Response;
  "AgentAdvCostReportListQueryV2": Models.AgentAdvCostReportListQueryV2Response;
  "AgentAdvPerenniallyPunishHistoryQueryV2": Models.AgentAdvPerenniallyPunishHistoryQueryV2Response;
  "AgentAdvPerenniallyPunishV2": Models.AgentAdvPerenniallyPunishV2Response;
  "AgentAdvRechargeRechargeRecordV2": Models.AgentAdvRechargeRechargeRecordV2Response;
  "AgentAdvTemporaryPunishV2": Models.AgentAdvTemporaryPunishV2Response;
  "AgentAdvertiserAssignV2": Models.AgentAdvertiserAssignV2Response;
  "AgentAdvertiserCopyV2": Models.AgentAdvertiserCopyV2Response;
  "AgentAdvertiserInfoQueryV2": Models.AgentAdvertiserInfoQueryV2Response;
  "AgentAdvertiserSelectV2": Models.AgentAdvertiserSelectV2Response;
  "AgentAdvertiserUnassignV2": Models.AgentAdvertiserUnassignV2Response;
  "AgentAdvertiserUpdateV2": Models.AgentAdvertiserUpdateV2Response;
  "AgentChargeVerifyV2": Models.AgentChargeVerifyV2Response;
  "AgentChildAgentSelectV2": Models.AgentChildAgentSelectV2Response;
  "AgentCompanyBiddingListQueryV2": Models.AgentCompanyBiddingListQueryV2Response;
  "AgentCompanyBrandListQueryV2": Models.AgentCompanyBrandListQueryV2Response;
  "AgentCreditChargeSubmitV2": Models.AgentCreditChargeSubmitV2Response;
  "AgentInfoV2": Models.AgentInfoV2Response;
  "AgentPrepayChargeGenerateRemittanceCodeV2": Models.AgentPrepayChargeGenerateRemittanceCodeV2Response;
  "AgentQueryRiskPromotionListV2": Models.AgentQueryRiskPromotionListV2Response;
  "AgentTransferTransactionRecordV2": Models.AgentTransferTransactionRecordV2Response;
  "AicElementDeleteV30": Models.AicElementDeleteV30Response;
  "AicElementGetV30": Models.AicElementGetV30Response;
  "AicElementUpdateV30": Models.AicElementUpdateV30Response;
  "AicElementUploadV30": Models.AicElementUploadV30Response;
  "AicImageMixcutCreateV30": Models.AicImageMixcutCreateV30Response;
  "AicMaterialGetV30": Models.AicMaterialGetV30Response;
  "AicMaterialPushV30": Models.AicMaterialPushV30Response;
  "AicMixcutTaskResultGetV30": Models.AicMixcutTaskResultGetV30Response;
  "AicMixcutTaskSaveV30": Models.AicMixcutTaskSaveV30Response;
  "AicVideoMixcutCreateV30": Models.AicVideoMixcutCreateV30Response;
  "AnalyticsAttributionV30": Models.AnalyticsAttributionV30Response;
  "AssetsCreativeComponentCreateV2": Models.AssetsCreativeComponentCreateV2Response;
  "AssetsCreativeComponentGetV2": Models.AssetsCreativeComponentGetV2Response;
  "AssetsCreativeComponentUpdateV2": Models.AssetsCreativeComponentUpdateV2Response;
  "AsyncTaskCreateV2": Models.AsyncTaskCreateV2Response;
  "AsyncTaskDownloadV2": Uint8Array;
  "AsyncTaskGetV2": Models.AsyncTaskGetV2Response;
  "AudiencePackageBindinfoGetV30": Models.AudiencePackageBindinfoGetV30Response;
  "AudiencePackageCreateV2": Models.AudiencePackageCreateV2Response;
  "AudiencePackageDeleteV2": Models.AudiencePackageDeleteV2Response;
  "AudiencePackageGetV30": Models.AudiencePackageGetV30Response;
  "AudiencePackageUpdateV2": Models.AudiencePackageUpdateV2Response;
  "BrandActionCategoryV30": Models.BrandActionCategoryV30Response;
  "BrandAdCancelDeleteV30": Models.BrandAdCancelDeleteV30Response;
  "BrandAdDeleteV30": Models.BrandAdDeleteV30Response;
  "BrandAdGetV30": Models.BrandAdGetV30Response;
  "BrandAdUpdateBaseInfoV30": Models.BrandAdUpdateBaseInfoV30Response;
  "BrandAdUpdateDeliveryInfoV30": Models.BrandAdUpdateDeliveryInfoV30Response;
  "BrandAnchorListV30": Models.BrandAnchorListV30Response;
  "BrandAwemeListV30": Models.BrandAwemeListV30Response;
  "BrandCampaignAddV30": Models.BrandCampaignAddV30Response;
  "BrandCampaignDeleteV30": Models.BrandCampaignDeleteV30Response;
  "BrandCampaignEditV30": Models.BrandCampaignEditV30Response;
  "BrandCampaignGetV30": Models.BrandCampaignGetV30Response;
  "BrandCampaignListV30": Models.BrandCampaignListV30Response;
  "BrandCampaignModifyV30": Models.BrandCampaignModifyV30Response;
  "BrandCampaignOperateV30": Models.BrandCampaignOperateV30Response;
  "BrandCampaignRemoveV30": Models.BrandCampaignRemoveV30Response;
  "BrandCampaignRevokeModifyV30": Models.BrandCampaignRevokeModifyV30Response;
  "BrandCampaignSubmitV30": Models.BrandCampaignSubmitV30Response;
  "BrandCampaignUpdateV30": Models.BrandCampaignUpdateV30Response;
  "BrandContractGetV30": Models.BrandContractGetV30Response;
  "BrandCreativeCreateV30": Models.BrandCreativeCreateV30Response;
  "BrandCreativeDeleteV30": Models.BrandCreativeDeleteV30Response;
  "BrandCreativeGetV30": Models.BrandCreativeGetV30Response;
  "BrandCreativeUpdateV30": Models.BrandCreativeUpdateV30Response;
  "BrandCustomAudienceListV30": Models.BrandCustomAudienceListV30Response;
  "BrandFileVideoUploadV30": Models.BrandFileVideoUploadV30Response;
  "BrandMaterialCreateV30": Models.BrandMaterialCreateV30Response;
  "BrandMaterialListV30": Models.BrandMaterialListV30Response;
  "BrandMaterialUpdateV30": Models.BrandMaterialUpdateV30Response;
  "BrandOperationLogQueryV30": Models.BrandOperationLogQueryV30Response;
  "BrandOrderCancelDeleteV30": Models.BrandOrderCancelDeleteV30Response;
  "BrandOrderCreateV30": Models.BrandOrderCreateV30Response;
  "BrandOrderDeleteV30": Models.BrandOrderDeleteV30Response;
  "BrandOrderListV30": Models.BrandOrderListV30Response;
  "BrandOrderUpdateV30": Models.BrandOrderUpdateV30Response;
  "BrandPolicyListV30": Models.BrandPolicyListV30Response;
  "BrandQueryStockV30": Models.BrandQueryStockV30Response;
  "BrandQueryYuntu5aBrandCategoryV30": Models.BrandQueryYuntu5aBrandCategoryV30Response;
  "BrandRegionGetV30": Models.BrandRegionGetV30Response;
  "BrandToolCreativePreviewV30": Models.BrandToolCreativePreviewV30Response;
  "BrandToolMaterialPreviewV30": Models.BrandToolMaterialPreviewV30Response;
  "BrandToolQueryPublishPriceV30": Models.BrandToolQueryPublishPriceV30Response;
  "BrandToolQueryStockBalanceV30": Models.BrandToolQueryStockBalanceV30Response;
  "BrandUploadImageV30": Models.BrandUploadImageV30Response;
  "BudgetGroupCreateV30": Models.BudgetGroupCreateV30Response;
  "BudgetGroupDeleteV30": Models.BudgetGroupDeleteV30Response;
  "BudgetGroupListV30": Models.BudgetGroupListV30Response;
  "BudgetGroupUpdateV30": Models.BudgetGroupUpdateV30Response;
  "BusinessPlatformCompanyAccountGetV30": Models.BusinessPlatformCompanyAccountGetV30Response;
  "BusinessPlatformCompanyInfoGetV30": Models.BusinessPlatformCompanyInfoGetV30Response;
  "BusinessPlatformPartnerOrganizationListV2": Models.BusinessPlatformPartnerOrganizationListV2Response;
  "CampaignCreateV2": Models.CampaignCreateV2Response;
  "CampaignGetV2": Models.CampaignGetV2Response;
  "CampaignUpdateStatusV2": Models.CampaignUpdateStatusV2Response;
  "CampaignUpdateV2": Models.CampaignUpdateV2Response;
  "CarouselAdGetV2": Models.CarouselAdGetV2Response;
  "CarouselCreateV2": Models.CarouselCreateV2Response;
  "CarouselDeleteV2": Models.CarouselDeleteV2Response;
  "CarouselListV2": Models.CarouselListV2Response;
  "CarouselUpdateV2": Models.CarouselUpdateV2Response;
  "CdpBrandGetV30": Models.CdpBrandGetV30Response;
  "CgTransferCanTransferBalanceGetV30": Models.CgTransferCanTransferBalanceGetV30Response;
  "CgTransferCanTransferTargetListV30": Models.CgTransferCanTransferTargetListV30Response;
  "CgTransferCreateTransferV30": Models.CgTransferCreateTransferV30Response;
  "CgTransferQueryCanTransferBalanceV30": Models.CgTransferQueryCanTransferBalanceV30Response;
  "CgTransferQueryTransferBalanceV30": Models.CgTransferQueryTransferBalanceV30Response;
  "CgTransferQueryTransferDetailV30": Models.CgTransferQueryTransferDetailV30Response;
  "CgTransferTransferBalanceGetV30": Models.CgTransferTransferBalanceGetV30Response;
  "CgTransferTransferCreateV30": Models.CgTransferTransferCreateV30Response;
  "CgTransferTransferDetailGetV30": Models.CgTransferTransferDetailGetV30Response;
  "CgTransferWalletTransferCanTransferBalanceV30": Models.CgTransferWalletTransferCanTransferBalanceV30Response;
  "CgTransferWalletTransferCreateV30": Models.CgTransferWalletTransferCreateV30Response;
  "CgTransferWalletTransferDetailV30": Models.CgTransferWalletTransferDetailV30Response;
  "CgTransferWalletTransferListV30": Models.CgTransferWalletTransferListV30Response;
  "ChargeListV30": Models.ChargeListV30Response;
  "ChargeResultV30": Models.ChargeResultV30Response;
  "ChargeVerifyGetV30": Models.ChargeVerifyGetV30Response;
  "ClueCaCreateV2": Models.ClueCaCreateV2Response;
  "ClueCaInterfaceCreateV2": Models.ClueCaInterfaceCreateV2Response;
  "ClueCaInterfaceUpdateV2": Models.ClueCaInterfaceUpdateV2Response;
  "ClueCaUpdateV2": Models.ClueCaUpdateV2Response;
  "ClueCouponCodeConsumeV2": Models.ClueCouponCodeConsumeV2Response;
  "ClueCouponCodeGetV2": Models.ClueCouponCodeGetV2Response;
  "ClueCouponCreateV2": Models.ClueCouponCreateV2Response;
  "ClueCouponDetailV2": Models.ClueCouponDetailV2Response;
  "ClueCouponEmployeeCreateV2": Models.ClueCouponEmployeeCreateV2Response;
  "ClueCouponEmployeeDeleteV2": Models.ClueCouponEmployeeDeleteV2Response;
  "ClueCouponEmployeeGetV2": Models.ClueCouponEmployeeGetV2Response;
  "ClueCouponGetV2": Models.ClueCouponGetV2Response;
  "ClueCouponUpdateV2": Models.ClueCouponUpdateV2Response;
  "ClueFormCreateV2": Models.ClueFormCreateV2Response;
  "ClueFormDeleteV2": Models.ClueFormDeleteV2Response;
  "ClueFormDetailV2": Models.ClueFormDetailV2Response;
  "ClueFormListV2": Models.ClueFormListV2Response;
  "ClueFormUpdateV2": Models.ClueFormUpdateV2Response;
  "ClueSmartphoneCreateV2": Models.ClueSmartphoneCreateV2Response;
  "ClueSmartphoneDeleteV2": Models.ClueSmartphoneDeleteV2Response;
  "ClueSmartphoneGetV2": Models.ClueSmartphoneGetV2Response;
  "ClueSmartphoneRecordV2": Models.ClueSmartphoneRecordV2Response;
  "ClueWechatDataGetV2": Models.ClueWechatDataGetV2Response;
  "ClueWechatInstanceDetailV2": Models.ClueWechatInstanceDetailV2Response;
  "ClueWechatInstanceListV2": Models.ClueWechatInstanceListV2Response;
  "ClueWechatInstanceUpdateV2": Models.ClueWechatInstanceUpdateV2Response;
  "ClueWechatPoolListV2": Models.ClueWechatPoolListV2Response;
  "CreateProjectInvoiceV2": Models.CreateProjectInvoiceV2Response;
  "CreateStatementInvoiceV2": Models.CreateStatementInvoiceV2Response;
  "CreateStatementV2": Models.CreateStatementV2Response;
  "CreativeCustomCreativeCreateV2": Models.CreativeCustomCreativeCreateV2Response;
  "CreativeCustomCreativeUpdateV2": Models.CreativeCustomCreativeUpdateV2Response;
  "CreativeDetailGetV30": Models.CreativeDetailGetV30Response;
  "CreativeGetV2": Models.CreativeGetV2Response;
  "CreativeProceduralCreativeCreateV2": Models.CreativeProceduralCreativeCreateV2Response;
  "CreativeProceduralCreativeUpdateV2": Models.CreativeProceduralCreativeUpdateV2Response;
  "CreativeRejectReasonV2": Models.CreativeRejectReasonV2Response;
  "CreativeStrategyListV2": Models.CreativeStrategyListV2Response;
  "CustomerCenterAccountListV30": Models.CustomerCenterAccountListV30Response;
  "CustomerCenterAccountOfflineListV30": Models.CustomerCenterAccountOfflineListV30Response;
  "CustomerCenterAdvertiserCopyV2": Models.CustomerCenterAdvertiserCopyV2Response;
  "CustomerCenterAdvertiserListV2": Models.CustomerCenterAdvertiserListV2Response;
  "CustomerCenterAdvertiserTransferableListV2": Models.CustomerCenterAdvertiserTransferableListV2Response;
  "CustomerCenterFundTransferSeqCommitV2": Models.CustomerCenterFundTransferSeqCommitV2Response;
  "CustomerCenterFundTransferSeqCreateV2": Models.CustomerCenterFundTransferSeqCreateV2Response;
  "DcdChargeSubmitV30": Models.DcdChargeSubmitV30Response;
  "DecorationCouponGetV30": Models.DecorationCouponGetV30Response;
  "DiagnosisTaskAdvCreateV2": Models.DiagnosisTaskAdvCreateV2Response;
  "DiagnosisTaskAdvGetV2": Models.DiagnosisTaskAdvGetV2Response;
  "DiagnosisTaskAdvListV2": Models.DiagnosisTaskAdvListV2Response;
  "DiagnosisTaskAgentCreateV2": Models.DiagnosisTaskAgentCreateV2Response;
  "DiagnosisTaskAgentGetV2": Models.DiagnosisTaskAgentGetV2Response;
  "DiagnosisTaskAgentListV2": Models.DiagnosisTaskAgentListV2Response;
  "DmpBrandGetV2": Models.DmpBrandGetV2Response;
  "DmpCustomAudienceCopyV2": Models.DmpCustomAudienceCopyV2Response;
  "DmpCustomAudienceDeleteV2": Models.DmpCustomAudienceDeleteV2Response;
  "DmpCustomAudiencePublishV2": Models.DmpCustomAudiencePublishV2Response;
  "DmpCustomAudiencePushV2V2": Models.DmpCustomAudiencePushV2V2Response;
  "DmpCustomAudienceReadV2": Models.DmpCustomAudienceReadV2Response;
  "DmpCustomAudienceSelectV2": Models.DmpCustomAudienceSelectV2Response;
  "DmpDataSourceCreateV2": Models.DmpDataSourceCreateV2Response;
  "DmpDataSourceFileUploadV2": Models.DmpDataSourceFileUploadV2Response;
  "DmpDataSourceReadV2": Models.DmpDataSourceReadV2Response;
  "DmpDataSourceUpdateV2": Models.DmpDataSourceUpdateV2Response;
  "DouplusOptionalItemsListV30": Models.DouplusOptionalItemsListV30Response;
  "DouplusOptionalTargetsListV30": Models.DouplusOptionalTargetsListV30Response;
  "DouplusOrderCloseV30": Models.DouplusOrderCloseV30Response;
  "DouplusOrderCreateV30": Models.DouplusOrderCreateV30Response;
  "DouplusOrderListV30": Models.DouplusOrderListV30Response;
  "DouplusOrderRenewV30": Models.DouplusOrderRenewV30Response;
  "DouplusOrderReportV30": Models.DouplusOrderReportV30Response;
  "DouplusRtaGetInfoV30": Models.DouplusRtaGetInfoV30Response;
  "DouplusRtaSetScopeV30": Models.DouplusRtaSetScopeV30Response;
  "DownloadStatementEsignFileV2": Models.DownloadStatementEsignFileV2Response;
  "DownloadStatementV2": Models.DownloadStatementV2Response;
  "DpaAlbumCreateV30": Models.DpaAlbumCreateV30Response;
  "DpaAlbumStatusGetV30": Models.DpaAlbumStatusGetV30Response;
  "DpaAssetV2DetailReadV2": Models.DpaAssetV2DetailReadV2Response;
  "DpaAssetV2ListV2": Models.DpaAssetV2ListV2Response;
  "DpaAssetsDetailReadV2": Models.DpaAssetsDetailReadV2Response;
  "DpaBrandAdvAuthFuzzyGetV30": Models.DpaBrandAdvAuthFuzzyGetV30Response;
  "DpaBrandAdvAuthIndustryGetV30": Models.DpaBrandAdvAuthIndustryGetV30Response;
  "DpaBrandFuzzyGetV30": Models.DpaBrandFuzzyGetV30Response;
  "DpaCategoryGetV2": Models.DpaCategoryGetV2Response;
  "DpaCheckIndexEntryProgressV2": Models.DpaCheckIndexEntryProgressV2Response;
  "DpaClueProductDeleteV2": Models.DpaClueProductDeleteV2Response;
  "DpaClueProductDetailV2": Models.DpaClueProductDetailV2Response;
  "DpaClueProductListV2": Models.DpaClueProductListV2Response;
  "DpaClueProductSaveV2": Models.DpaClueProductSaveV2Response;
  "DpaDetailGetV2": Models.DpaDetailGetV2Response;
  "DpaDictGetV2": Models.DpaDictGetV2Response;
  "DpaEbpCategoryGetV30": Models.DpaEbpCategoryGetV30Response;
  "DpaEbpClueProductDeleteV30": Models.DpaEbpClueProductDeleteV30Response;
  "DpaEbpClueProductGetV30": Models.DpaEbpClueProductGetV30Response;
  "DpaEbpClueProductListV30": Models.DpaEbpClueProductListV30Response;
  "DpaEbpClueProductSaveV30": Models.DpaEbpClueProductSaveV30Response;
  "DpaEbpDictGetV30": Models.DpaEbpDictGetV30Response;
  "DpaEbpLibraryListV30": Models.DpaEbpLibraryListV30Response;
  "DpaEbpMetaGetV30": Models.DpaEbpMetaGetV30Response;
  "DpaEbpPlayletAuthGetV30": Models.DpaEbpPlayletAuthGetV30Response;
  "DpaEbpProductCreateV30": Models.DpaEbpProductCreateV30Response;
  "DpaEbpProductDeleteV30": Models.DpaEbpProductDeleteV30Response;
  "DpaEbpProductDetailGetV30": Models.DpaEbpProductDetailGetV30Response;
  "DpaEbpProductListV30": Models.DpaEbpProductListV30Response;
  "DpaEbpProductStatusBatchUpdateV30": Models.DpaEbpProductStatusBatchUpdateV30Response;
  "DpaEbpProductUpdateV30": Models.DpaEbpProductUpdateV30Response;
  "DpaMetaGetV2": Models.DpaMetaGetV2Response;
  "DpaOfflineProductBatchDeleteV30": Models.DpaOfflineProductBatchDeleteV30Response;
  "DpaPlayletAuthGetV2": Models.DpaPlayletAuthGetV2Response;
  "DpaProductAvailablesV2": Models.DpaProductAvailablesV2Response;
  "DpaProductCreateV2": Models.DpaProductCreateV2Response;
  "DpaProductDeleteV2": Models.DpaProductDeleteV2Response;
  "DpaProductDetailGetV2": Models.DpaProductDetailGetV2Response;
  "DpaProductStatusBatchUpdateV2": Models.DpaProductStatusBatchUpdateV2Response;
  "DpaProductUpdateV2": Models.DpaProductUpdateV2Response;
  "DpaTemplateGetV2": Models.DpaTemplateGetV2Response;
  "DpaVideoGetV2": Models.DpaVideoGetV2Response;
  "EbpAdvertiserListV2": Models.EbpAdvertiserListV2Response;
  "EbpAdvertiserTaskCreateV2": Models.EbpAdvertiserTaskCreateV2Response;
  "EbpAdvertiserTaskDownloadV2": Uint8Array;
  "EbpAdvertiserTaskListV2": Models.EbpAdvertiserTaskListV2Response;
  "EbpLevelGetV2": Models.EbpLevelGetV2Response;
  "EbpRolePermissionGetV2": Models.EbpRolePermissionGetV2Response;
  "EventManagerAbnormalAssetsGetV30": Models.EventManagerAbnormalAssetsGetV30Response;
  "EventManagerAssetsCreateV2": Models.EventManagerAssetsCreateV2Response;
  "EventManagerAuthAddPublicKeyV2": Models.EventManagerAuthAddPublicKeyV2Response;
  "EventManagerAuthDelPublicKeyV2": Models.EventManagerAuthDelPublicKeyV2Response;
  "EventManagerAuthDisableV2": Models.EventManagerAuthDisableV2Response;
  "EventManagerAuthEnableV2": Models.EventManagerAuthEnableV2Response;
  "EventManagerAuthGetAllPublicKeysV2": Models.EventManagerAuthGetAllPublicKeysV2Response;
  "EventManagerAuthGetAuthStatusV2": Models.EventManagerAuthGetAuthStatusV2Response;
  "EventManagerAuthGetPublicKeyV2": Models.EventManagerAuthGetPublicKeyV2Response;
  "EventManagerAvailableEventsGetV2": Models.EventManagerAvailableEventsGetV2Response;
  "EventManagerDbtGetV30": Models.EventManagerDbtGetV30Response;
  "EventManagerDeepBidTypeGetV30": Models.EventManagerDeepBidTypeGetV30Response;
  "EventManagerEventConfigsGetV2": Models.EventManagerEventConfigsGetV2Response;
  "EventManagerEventsCreateV2": Models.EventManagerEventsCreateV2Response;
  "EventManagerOptimizedGoalGetV2V30": Models.EventManagerOptimizedGoalGetV2V30Response;
  "EventManagerOptimizedGoalGetV30": Models.EventManagerOptimizedGoalGetV30Response;
  "EventManagerShareCancelV30": Models.EventManagerShareCancelV30Response;
  "EventManagerShareGetV30": Models.EventManagerShareGetV30Response;
  "EventManagerShareV30": Models.EventManagerShareV30Response;
  "EventManagerTrackUrlCreateV2": Models.EventManagerTrackUrlCreateV2Response;
  "EventManagerTrackUrlGetV2": Models.EventManagerTrackUrlGetV2Response;
  "EventManagerTrackUrlUpdateV2": Models.EventManagerTrackUrlUpdateV2Response;
  "FileAudioAdV2": Models.FileAudioAdV2Response;
  "FileAudioGetV2": Models.FileAudioGetV2Response;
  "FileAutoGenerateSourceGetV2": Models.FileAutoGenerateSourceGetV2Response;
  "FileCarouselAwemeGetV30": Models.FileCarouselAwemeGetV30Response;
  "FileEbpVideoGetV30": Models.FileEbpVideoGetV30Response;
  "FileImageAdGetV2": Models.FileImageAdGetV2Response;
  "FileImageAdV2": Models.FileImageAdV2Response;
  "FileImageAdvertiserV2": Models.FileImageAdvertiserV2Response;
  "FileImageDeleteV30": Models.FileImageDeleteV30Response;
  "FileImageGetV2": Models.FileImageGetV2Response;
  "FileIncentivePolicyBaseInfoGetV2": Models.FileIncentivePolicyBaseInfoGetV2Response;
  "FileMaterialAttributesListV2": Models.FileMaterialAttributesListV2Response;
  "FileMaterialBindV2": Models.FileMaterialBindV2Response;
  "FileMaterialDetailV2": Models.FileMaterialDetailV2Response;
  "FileMaterialListV2": Models.FileMaterialListV2Response;
  "FilePlayableCreateV30": Models.FilePlayableCreateV30Response;
  "FilePlayableListV30": Models.FilePlayableListV30Response;
  "FilePreauditGetV30": Models.FilePreauditGetV30Response;
  "FilePreauditSubmitV30": Models.FilePreauditSubmitV30Response;
  "FileQualityGetV30": Models.FileQualityGetV30Response;
  "FileQualitySubmitV30": Models.FileQualitySubmitV30Response;
  "FileRebateCommonDownloadCreateTaskV2": Models.FileRebateCommonDownloadCreateTaskV2Response;
  "FileRebateCommonDownloadDownloadFileV2": Uint8Array;
  "FileRebateCommonDownloadGetDownloadTaskListV2": Models.FileRebateCommonDownloadGetDownloadTaskListV2Response;
  "FileRebateRebateDownloadCreateTaskV2": Models.FileRebateRebateDownloadCreateTaskV2Response;
  "FileUploadTaskCreateV2": Models.FileUploadTaskCreateV2Response;
  "FileVideoAdGetV2": Models.FileVideoAdGetV2Response;
  "FileVideoAdV2": Models.FileVideoAdV2Response;
  "FileVideoAgentGetV2": Models.FileVideoAgentGetV2Response;
  "FileVideoAgentV2": Models.FileVideoAgentV2Response;
  "FileVideoAwemeGetV2": Models.FileVideoAwemeGetV2Response;
  "FileVideoDeleteV2": Models.FileVideoDeleteV2Response;
  "FileVideoEfficiencyGetV2": Models.FileVideoEfficiencyGetV2Response;
  "FileVideoGetV2": Models.FileVideoGetV2Response;
  "FileVideoMaterialClearTaskCreateV2": Models.FileVideoMaterialClearTaskCreateV2Response;
  "FileVideoMaterialClearTaskGetV2": Models.FileVideoMaterialClearTaskGetV2Response;
  "FileVideoMaterialClearTaskResultGetV2": Models.FileVideoMaterialClearTaskResultGetV2Response;
  "FileVideoPauseV2": Models.FileVideoPauseV2Response;
  "FileVideoUpdateV2": Models.FileVideoUpdateV2Response;
  "FileVideoUploadTaskListV2": Models.FileVideoUploadTaskListV2Response;
  "FixRemittanceCodeListGetV30": Models.FixRemittanceCodeListGetV30Response;
  "FundSharedWalletBalanceGetV2": Models.FundSharedWalletBalanceGetV2Response;
  "GameAddictionIdGetV30": Models.GameAddictionIdGetV30Response;
  "GameplayListV30": Models.GameplayListV30Response;
  "InvoiceApplyOrderCreateV30": Models.InvoiceApplyOrderCreateV30Response;
  "InvoiceApplyOrderListV30": Models.InvoiceApplyOrderListV30Response;
  "InvoiceApplyResultGetV30": Models.InvoiceApplyResultGetV30Response;
  "InvoiceDownloadUrlListV30": Models.InvoiceDownloadUrlListV30Response;
  "InvoiceTicketListV30": Models.InvoiceTicketListV30Response;
  "IosAppListV30": Models.IosAppListV30Response;
  "KeywordCreateV2V2": Models.KeywordCreateV2V2Response;
  "KeywordCreateV30": Models.KeywordCreateV30Response;
  "KeywordDeleteV2V2": Models.KeywordDeleteV2V2Response;
  "KeywordDeleteV30": Models.KeywordDeleteV30Response;
  "KeywordFeedadsSuggestV2": Models.KeywordFeedadsSuggestV2Response;
  "KeywordGetV2": Models.KeywordGetV2Response;
  "KeywordListV30": Models.KeywordListV30Response;
  "KeywordUpdateV2V2": Models.KeywordUpdateV2V2Response;
  "KeywordUpdateV30": Models.KeywordUpdateV30Response;
  "LocalActionCategoryV30": Models.LocalActionCategoryV30Response;
  "LocalActionKeywordV30": Models.LocalActionKeywordV30Response;
  "LocalAdvertiserBudgetGetV30": Models.LocalAdvertiserBudgetGetV30Response;
  "LocalAudiencePackageGetV30": Models.LocalAudiencePackageGetV30Response;
  "LocalAudiencePackageUpdateV30": Models.LocalAudiencePackageUpdateV30Response;
  "LocalAwemeAuthCancelUpdateV30": Models.LocalAwemeAuthCancelUpdateV30Response;
  "LocalAwemeAuthCreateV30": Models.LocalAwemeAuthCreateV30Response;
  "LocalAwemeAuthListV30": Models.LocalAwemeAuthListV30Response;
  "LocalAwemeAuthRenewCreateV30": Models.LocalAwemeAuthRenewCreateV30Response;
  "LocalAwemeAuthorizedGetV30": Models.LocalAwemeAuthorizedGetV30Response;
  "LocalBudgetUpdateV30": Models.LocalBudgetUpdateV30Response;
  "LocalChargeListV30": Models.LocalChargeListV30Response;
  "LocalChargeResultV30": Models.LocalChargeResultV30Response;
  "LocalChargeSubmitV30": Models.LocalChargeSubmitV30Response;
  "LocalConsultAwameListGetV30": Models.LocalConsultAwameListGetV30Response;
  "LocalCustomAudienceGetV30": Models.LocalCustomAudienceGetV30Response;
  "LocalDeliveryQualificationListV30": Models.LocalDeliveryQualificationListV30Response;
  "LocalFileCarouselListV30": Models.LocalFileCarouselListV30Response;
  "LocalFileUploadTaskCreateV30": Models.LocalFileUploadTaskCreateV30Response;
  "LocalFileVideoAwemeGetV30": Models.LocalFileVideoAwemeGetV30Response;
  "LocalFileVideoGetV30": Models.LocalFileVideoGetV30Response;
  "LocalFileVideoUploadTaskListV30": Models.LocalFileVideoUploadTaskListV30Response;
  "LocalFileVideoUploadV30": Models.LocalFileVideoUploadV30Response;
  "LocalImAccountGetV30": Models.LocalImAccountGetV30Response;
  "LocalImAutoSettingGetV30": Models.LocalImAutoSettingGetV30Response;
  "LocalImAutoSettingUpdateV30": Models.LocalImAutoSettingUpdateV30Response;
  "LocalImCardGetV30": Models.LocalImCardGetV30Response;
  "LocalImQueryMsgV30": Models.LocalImQueryMsgV30Response;
  "LocalImSendMsgV30": Models.LocalImSendMsgV30Response;
  "LocalImUploadImageV30": Models.LocalImUploadImageV30Response;
  "LocalImageUploadV30": Models.LocalImageUploadV30Response;
  "LocalInterestCategoryV30": Models.LocalInterestCategoryV30Response;
  "LocalInterestKeywordV30": Models.LocalInterestKeywordV30Response;
  "LocalLifeAdvertiserCreateV30": Models.LocalLifeAdvertiserCreateV30Response;
  "LocalLifeAdvertiserListV30": Models.LocalLifeAdvertiserListV30Response;
  "LocalMarketPageGetV30": Models.LocalMarketPageGetV30Response;
  "LocalMarketPageListGetV30": Models.LocalMarketPageListGetV30Response;
  "LocalMultiPoiIdPoiIdsGetV30": Models.LocalMultiPoiIdPoiIdsGetV30Response;
  "LocalOcMaterialGetV30": Models.LocalOcMaterialGetV30Response;
  "LocalOcProjectGetV30": Models.LocalOcProjectGetV30Response;
  "LocalOcProjectListV30": Models.LocalOcProjectListV30Response;
  "LocalPoiGetV30": Models.LocalPoiGetV30Response;
  "LocalProductGetByPoiidsV30": Models.LocalProductGetByPoiidsV30Response;
  "LocalProductGetV30": Models.LocalProductGetV30Response;
  "LocalProjectCreateV30": Models.LocalProjectCreateV30Response;
  "LocalProjectDeleteV30": Models.LocalProjectDeleteV30Response;
  "LocalProjectDetailV30": Models.LocalProjectDetailV30Response;
  "LocalProjectListV30": Models.LocalProjectListV30Response;
  "LocalProjectStatusUpdateV30": Models.LocalProjectStatusUpdateV30Response;
  "LocalProjectUpdateV30": Models.LocalProjectUpdateV30Response;
  "LocalProjectWeekScheduleUpdateV30": Models.LocalProjectWeekScheduleUpdateV30Response;
  "LocalPromotionCostProtectStatusGetV30": Models.LocalPromotionCostProtectStatusGetV30Response;
  "LocalPromotionCreateV30": Models.LocalPromotionCreateV30Response;
  "LocalPromotionDeleteV30": Models.LocalPromotionDeleteV30Response;
  "LocalPromotionDetailV30": Models.LocalPromotionDetailV30Response;
  "LocalPromotionListV30": Models.LocalPromotionListV30Response;
  "LocalPromotionRejectReasonGetV30": Models.LocalPromotionRejectReasonGetV30Response;
  "LocalPromotionStatusUpdateV30": Models.LocalPromotionStatusUpdateV30Response;
  "LocalPromotionUpdateV30": Models.LocalPromotionUpdateV30Response;
  "LocalQualificationGetV30": Models.LocalQualificationGetV30Response;
  "LocalReportAccountGetV30": Models.LocalReportAccountGetV30Response;
  "LocalReportAudienceGetV30": Models.LocalReportAudienceGetV30Response;
  "LocalReportMaterialGetV30": Models.LocalReportMaterialGetV30Response;
  "LocalReportProjectGetV30": Models.LocalReportProjectGetV30Response;
  "LocalReportPromotionGetV30": Models.LocalReportPromotionGetV30Response;
  "LocalToolPackDetailV30": Models.LocalToolPackDetailV30Response;
  "LocalToolPackListGetV30": Models.LocalToolPackListGetV30Response;
  "MajordomoAdvertiserSelectV2": Models.MajordomoAdvertiserSelectV2Response;
  "MaterialStatusUpdateV30": Models.MaterialStatusUpdateV30Response;
  "NativeAnchorCreateV30": Models.NativeAnchorCreateV30Response;
  "NativeAnchorDeleteV30": Models.NativeAnchorDeleteV30Response;
  "NativeAnchorGetDetailV30": Models.NativeAnchorGetDetailV30Response;
  "NativeAnchorGetV30": Models.NativeAnchorGetV30Response;
  "NativeAnchorQrcodePreviewGetV30": Models.NativeAnchorQrcodePreviewGetV30Response;
  "NativeAnchorUpdateV30": Models.NativeAnchorUpdateV30Response;
  "Oauth2AccessToken": Models.Oauth2AccessTokenResponse;
  "Oauth2AdvertiserGet": Models.Oauth2AdvertiserGetResponse;
  "Oauth2AppAccessToken": Models.Oauth2AppAccessTokenResponse;
  "Oauth2RefreshToken": Models.Oauth2RefreshTokenResponse;
  "Oauth2RenewToken": Models.Oauth2RenewTokenResponse;
  "OcProjectMaterialCreateV30": Models.OcProjectMaterialCreateV30Response;
  "OcProjectMaterialDeleteV30": Models.OcProjectMaterialDeleteV30Response;
  "OcProjectMaterialGetV30": Models.OcProjectMaterialGetV30Response;
  "OcProjectMaterialStatusUpdateV30": Models.OcProjectMaterialStatusUpdateV30Response;
  "OcProjectRejectReasonGetV30": Models.OcProjectRejectReasonGetV30Response;
  "OcProjectStdProjectToolsGetV30": Models.OcProjectStdProjectToolsGetV30Response;
  "OcProjectToolsAudienceCreateV30": Models.OcProjectToolsAudienceCreateV30Response;
  "OcProjectToolsAudienceDeleteV30": Models.OcProjectToolsAudienceDeleteV30Response;
  "OcProjectToolsAudienceListV30": Models.OcProjectToolsAudienceListV30Response;
  "OcProjectToolsAudienceStatusUpdateV30": Models.OcProjectToolsAudienceStatusUpdateV30Response;
  "OcProjectToolsAudienceUpdateV30": Models.OcProjectToolsAudienceUpdateV30Response;
  "OcProjectToolsCompensateHistoryListGetV30": Models.OcProjectToolsCompensateHistoryListGetV30Response;
  "OcProjectToolsCostProtectStatusGetV30": Models.OcProjectToolsCostProtectStatusGetV30Response;
  "OcProjectToolsKeywordCreateV30": Models.OcProjectToolsKeywordCreateV30Response;
  "OcProjectToolsKeywordDeleteV30": Models.OcProjectToolsKeywordDeleteV30Response;
  "OcProjectToolsKeywordListV30": Models.OcProjectToolsKeywordListV30Response;
  "OcProjectToolsKeywordStatusUpdateV30": Models.OcProjectToolsKeywordStatusUpdateV30Response;
  "OcProjectToolsKeywordUpdateV30": Models.OcProjectToolsKeywordUpdateV30Response;
  "OcProjectToolsMaterialRaiseCreateV30": Models.OcProjectToolsMaterialRaiseCreateV30Response;
  "OcProjectToolsMaterialRaiseDeleteV30": Models.OcProjectToolsMaterialRaiseDeleteV30Response;
  "OcProjectToolsMaterialRaiseGetV30": Models.OcProjectToolsMaterialRaiseGetV30Response;
  "OpenMaterialAuditProGetV30": Models.OpenMaterialAuditProGetV30Response;
  "OpenMaterialAuditProSubmitV30": Models.OpenMaterialAuditProSubmitV30Response;
  "PenaltyTaskGetV30": Models.PenaltyTaskGetV30Response;
  "PrepayChargeGenerateFixRemiattanceCodeCreateV30": Models.PrepayChargeGenerateFixRemiattanceCodeCreateV30Response;
  "PrepayChargeGenerateRemittanceCodeCreateV30": Models.PrepayChargeGenerateRemittanceCodeCreateV30Response;
  "ProjectBudgetUpdateV30": Models.ProjectBudgetUpdateV30Response;
  "ProjectCostProtectStatusGetV30": Models.ProjectCostProtectStatusGetV30Response;
  "ProjectCpaBidUpdateV30": Models.ProjectCpaBidUpdateV30Response;
  "ProjectCreateV30": Models.ProjectCreateV30Response;
  "ProjectDeepCpaBidUpdateV30": Models.ProjectDeepCpaBidUpdateV30Response;
  "ProjectDeleteV30": Models.ProjectDeleteV30Response;
  "ProjectListV30": Models.ProjectListV30Response;
  "ProjectNameUpdateV30": Models.ProjectNameUpdateV30Response;
  "ProjectRoigoalUpdateV30": Models.ProjectRoigoalUpdateV30Response;
  "ProjectScheduleTimeUpdateV30": Models.ProjectScheduleTimeUpdateV30Response;
  "ProjectStatusUpdateV30": Models.ProjectStatusUpdateV30Response;
  "ProjectUpdateV30": Models.ProjectUpdateV30Response;
  "ProjectWeekScheduleUpdateV30": Models.ProjectWeekScheduleUpdateV30Response;
  "PromotionAidGetV30": Models.PromotionAidGetV30Response;
  "PromotionAutoGenerateConfigCreateV30": Models.PromotionAutoGenerateConfigCreateV30Response;
  "PromotionAutoGenerateConfigGetV30": Models.PromotionAutoGenerateConfigGetV30Response;
  "PromotionBidUpdateV30": Models.PromotionBidUpdateV30Response;
  "PromotionBudgetUpdateV30": Models.PromotionBudgetUpdateV30Response;
  "PromotionCostProtectStatusGetV30": Models.PromotionCostProtectStatusGetV30Response;
  "PromotionCreateV30": Models.PromotionCreateV30Response;
  "PromotionDeepbidUpdateV30": Models.PromotionDeepbidUpdateV30Response;
  "PromotionDeleteV30": Models.PromotionDeleteV30Response;
  "PromotionEasyKeepDeliverySwitchUpdateV30": Models.PromotionEasyKeepDeliverySwitchUpdateV30Response;
  "PromotionEasyUpdateV30": Models.PromotionEasyUpdateV30Response;
  "PromotionListV30": Models.PromotionListV30Response;
  "PromotionMaterialDeleteV30": Models.PromotionMaterialDeleteV30Response;
  "PromotionNameUpdateV30": Models.PromotionNameUpdateV30Response;
  "PromotionNewcustomerCreateV30": Models.PromotionNewcustomerCreateV30Response;
  "PromotionNewcustomerTypeGetV30": Models.PromotionNewcustomerTypeGetV30Response;
  "PromotionRejectReasonGetV30": Models.PromotionRejectReasonGetV30Response;
  "PromotionScheduleTimeUpdateV30": Models.PromotionScheduleTimeUpdateV30Response;
  "PromotionShopInfoUpdateV30": Models.PromotionShopInfoUpdateV30Response;
  "PromotionStatusUpdateV30": Models.PromotionStatusUpdateV30Response;
  "PromotionUpdateV30": Models.PromotionUpdateV30Response;
  "QianchuanAccountBalanceGetV10": Models.QianchuanAccountBalanceGetV10Response;
  "QianchuanAccountBudgetGetV10": Models.QianchuanAccountBudgetGetV10Response;
  "QianchuanAccountBudgetUpdateV10": Models.QianchuanAccountBudgetUpdateV10Response;
  "QianchuanAdBidUpdateV10": Models.QianchuanAdBidUpdateV10Response;
  "QianchuanAdBudgetUpdateV10": Models.QianchuanAdBudgetUpdateV10Response;
  "QianchuanAdCompensateStatusGetV10": Models.QianchuanAdCompensateStatusGetV10Response;
  "QianchuanAdCreateV10": Models.QianchuanAdCreateV10Response;
  "QianchuanAdDetailGetV10": Models.QianchuanAdDetailGetV10Response;
  "QianchuanAdGetV10": Models.QianchuanAdGetV10Response;
  "QianchuanAdKeywordsGetV10": Models.QianchuanAdKeywordsGetV10Response;
  "QianchuanAdLearingStatusGetV10": Models.QianchuanAdLearingStatusGetV10Response;
  "QianchuanAdMaterialDeleteV10": Models.QianchuanAdMaterialDeleteV10Response;
  "QianchuanAdMaterialGetV10": Models.QianchuanAdMaterialGetV10Response;
  "QianchuanAdMaterialSuggestionV10": Models.QianchuanAdMaterialSuggestionV10Response;
  "QianchuanAdOverallMarketingUpdateV10": Models.QianchuanAdOverallMarketingUpdateV10Response;
  "QianchuanAdQuotaGetV10": Models.QianchuanAdQuotaGetV10Response;
  "QianchuanAdRecommendKeywordsGetV10": Models.QianchuanAdRecommendKeywordsGetV10Response;
  "QianchuanAdRegionUpdateV10": Models.QianchuanAdRegionUpdateV10Response;
  "QianchuanAdRejectReasonV10": Models.QianchuanAdRejectReasonV10Response;
  "QianchuanAdScheduleDateUpdateV10": Models.QianchuanAdScheduleDateUpdateV10Response;
  "QianchuanAdScheduleFixedRangeUpdateV10": Models.QianchuanAdScheduleFixedRangeUpdateV10Response;
  "QianchuanAdStatusUpdateV10": Models.QianchuanAdStatusUpdateV10Response;
  "QianchuanAdUpdateV10": Models.QianchuanAdUpdateV10Response;
  "QianchuanAdvertiserTypeGetV10": Models.QianchuanAdvertiserTypeGetV10Response;
  "QianchuanAudienceCreateByFileV10": Models.QianchuanAudienceCreateByFileV10Response;
  "QianchuanAudienceDeleteV10": Models.QianchuanAudienceDeleteV10Response;
  "QianchuanAudienceFilePartUploadV10": Models.QianchuanAudienceFilePartUploadV10Response;
  "QianchuanAudienceFileUploadV10": Models.QianchuanAudienceFileUploadV10Response;
  "QianchuanAudienceGroupGetV10": Models.QianchuanAudienceGroupGetV10Response;
  "QianchuanAudienceListGetV10": Models.QianchuanAudienceListGetV10Response;
  "QianchuanAudiencePushV10": Models.QianchuanAudiencePushV10Response;
  "QianchuanAwemeAuthListGetV10": Models.QianchuanAwemeAuthListGetV10Response;
  "QianchuanAwemeAuthorizedGetV10": Models.QianchuanAwemeAuthorizedGetV10Response;
  "QianchuanAwemeEstimateProfitV10": Models.QianchuanAwemeEstimateProfitV10Response;
  "QianchuanAwemeInterestActionInterestKeywordV10": Models.QianchuanAwemeInterestActionInterestKeywordV10Response;
  "QianchuanAwemeOrderBudgetAddV10": Models.QianchuanAwemeOrderBudgetAddV10Response;
  "QianchuanAwemeOrderCreateV10": Models.QianchuanAwemeOrderCreateV10Response;
  "QianchuanAwemeOrderDetailGetV10": Models.QianchuanAwemeOrderDetailGetV10Response;
  "QianchuanAwemeOrderGetV10": Models.QianchuanAwemeOrderGetV10Response;
  "QianchuanAwemeOrderQuotaGetV10": Models.QianchuanAwemeOrderQuotaGetV10Response;
  "QianchuanAwemeOrderSuggestDeliveryTimeGetV10": Models.QianchuanAwemeOrderSuggestDeliveryTimeGetV10Response;
  "QianchuanAwemeOrderTerminateV10": Models.QianchuanAwemeOrderTerminateV10Response;
  "QianchuanAwemeProductAvailableGetV10": Models.QianchuanAwemeProductAvailableGetV10Response;
  "QianchuanAwemeReportOrderGetV10": Models.QianchuanAwemeReportOrderGetV10Response;
  "QianchuanAwemeSuggestBidV10": Models.QianchuanAwemeSuggestBidV10Response;
  "QianchuanAwemeSuggestRoiGoalV10": Models.QianchuanAwemeSuggestRoiGoalV10Response;
  "QianchuanAwemeUniPromotionAdMaterialGetV10": Models.QianchuanAwemeUniPromotionAdMaterialGetV10Response;
  "QianchuanAwemeUniPromotionEstimateEffectV10": Models.QianchuanAwemeUniPromotionEstimateEffectV10Response;
  "QianchuanAwemeUniPromotionOrderBudgetAddV10": Models.QianchuanAwemeUniPromotionOrderBudgetAddV10Response;
  "QianchuanAwemeUniPromotionOrderCreateV10": Models.QianchuanAwemeUniPromotionOrderCreateV10Response;
  "QianchuanAwemeUniPromotionOrderDetailV10": Models.QianchuanAwemeUniPromotionOrderDetailV10Response;
  "QianchuanAwemeUniPromotionOrderGetV10": Models.QianchuanAwemeUniPromotionOrderGetV10Response;
  "QianchuanAwemeUniPromotionOrderReportGetV10": Models.QianchuanAwemeUniPromotionOrderReportGetV10Response;
  "QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10": Models.QianchuanAwemeUniPromotionOrderSuggestDeliveryTimeGetV10Response;
  "QianchuanAwemeUniPromotionReportV10": Models.QianchuanAwemeUniPromotionReportV10Response;
  "QianchuanAwemeUniPromotionSuggestRoiV10": Models.QianchuanAwemeUniPromotionSuggestRoiV10Response;
  "QianchuanAwemeUniPromotionSuggestV10": Models.QianchuanAwemeUniPromotionSuggestV10Response;
  "QianchuanAwemeVideoGetV10": Models.QianchuanAwemeVideoGetV10Response;
  "QianchuanBatchCampaignStatusUpdateV10": Models.QianchuanBatchCampaignStatusUpdateV10Response;
  "QianchuanBrandAuthorizedGetV10": Models.QianchuanBrandAuthorizedGetV10Response;
  "QianchuanBrandReportAdGetV10": Models.QianchuanBrandReportAdGetV10Response;
  "QianchuanBrandReportAdvertiserGetV10": Models.QianchuanBrandReportAdvertiserGetV10Response;
  "QianchuanCampaignCreateV10": Models.QianchuanCampaignCreateV10Response;
  "QianchuanCampaignListGetV10": Models.QianchuanCampaignListGetV10Response;
  "QianchuanCampaignUpdateV10": Models.QianchuanCampaignUpdateV10Response;
  "QianchuanCarouselAwemeGetV10": Models.QianchuanCarouselAwemeGetV10Response;
  "QianchuanCarouselGetV10": Models.QianchuanCarouselGetV10Response;
  "QianchuanDmpAudiencesGetV10": Models.QianchuanDmpAudiencesGetV10Response;
  "QianchuanEstimateEffectV10": Models.QianchuanEstimateEffectV10Response;
  "QianchuanFileImageDeleteV10": Models.QianchuanFileImageDeleteV10Response;
  "QianchuanFileVideoAwemeGetV10": Models.QianchuanFileVideoAwemeGetV10Response;
  "QianchuanFileVideoDeleteV10": Models.QianchuanFileVideoDeleteV10Response;
  "QianchuanFileVideoEfficiencyGetV10": Models.QianchuanFileVideoEfficiencyGetV10Response;
  "QianchuanFileVideoOriginalGetV10": Models.QianchuanFileVideoOriginalGetV10Response;
  "QianchuanFinanceDetailGetV10": Models.QianchuanFinanceDetailGetV10Response;
  "QianchuanFinanceWalletGetV10": Models.QianchuanFinanceWalletGetV10Response;
  "QianchuanImageGetV10": Models.QianchuanImageGetV10Response;
  "QianchuanKeywordCheckV10": Models.QianchuanKeywordCheckV10Response;
  "QianchuanKeywordPackageGetV10": Models.QianchuanKeywordPackageGetV10Response;
  "QianchuanLqAdGetV10": Models.QianchuanLqAdGetV10Response;
  "QianchuanMaterialAdGetV10": Models.QianchuanMaterialAdGetV10Response;
  "QianchuanMaterialGetV10": Models.QianchuanMaterialGetV10Response;
  "QianchuanOrientationPackageGetV10": Models.QianchuanOrientationPackageGetV10Response;
  "QianchuanOverallAwemeAwemeDeleteV10": Models.QianchuanOverallAwemeAwemeDeleteV10Response;
  "QianchuanOverallAwemeListV10": Models.QianchuanOverallAwemeListV10Response;
  "QianchuanOverallLiveCreateV10": Models.QianchuanOverallLiveCreateV10Response;
  "QianchuanOverallLiveUpdateV10": Models.QianchuanOverallLiveUpdateV10Response;
  "QianchuanOverallStarProductGetV10": Models.QianchuanOverallStarProductGetV10Response;
  "QianchuanOverallSuggestRoiGetV10": Models.QianchuanOverallSuggestRoiGetV10Response;
  "QianchuanOverallVideoCreateV10": Models.QianchuanOverallVideoCreateV10Response;
  "QianchuanOverallVideoUpdateV10": Models.QianchuanOverallVideoUpdateV10Response;
  "QianchuanProductAvailableGetV10": Models.QianchuanProductAvailableGetV10Response;
  "QianchuanQianchuanReportTodayLiveRoomConfigGetV10": Models.QianchuanQianchuanReportTodayLiveRoomConfigGetV10Response;
  "QianchuanQianchuanVideoStarGetV10": Models.QianchuanQianchuanVideoStarGetV10Response;
  "QianchuanReportAdGetV10": Models.QianchuanReportAdGetV10Response;
  "QianchuanReportAdMaterialGetV10": Models.QianchuanReportAdMaterialGetV10Response;
  "QianchuanReportAdvertiserGetV10": Models.QianchuanReportAdvertiserGetV10Response;
  "QianchuanReportAllPromotionGetV10": Models.QianchuanReportAllPromotionGetV10Response;
  "QianchuanReportCustomConfigGetV10": Models.QianchuanReportCustomConfigGetV10Response;
  "QianchuanReportCustomGetV10": Models.QianchuanReportCustomGetV10Response;
  "QianchuanReportLiveGetV10": Models.QianchuanReportLiveGetV10Response;
  "QianchuanReportLongTransferOrderConfigGetV10": Models.QianchuanReportLongTransferOrderConfigGetV10Response;
  "QianchuanReportLongTransferOrderDataGetV10": Models.QianchuanReportLongTransferOrderDataGetV10Response;
  "QianchuanReportLongTransferOrderGetV10": Models.QianchuanReportLongTransferOrderGetV10Response;
  "QianchuanReportMaterialGetV10": Models.QianchuanReportMaterialGetV10Response;
  "QianchuanReportSearchWordGetV10": Models.QianchuanReportSearchWordGetV10Response;
  "QianchuanReportTodayLiveGetV10": Models.QianchuanReportTodayLiveGetV10Response;
  "QianchuanReportTodayLiveRoomConfigGetV10": Models.QianchuanReportTodayLiveRoomConfigGetV10Response;
  "QianchuanReportTodayLiveRoomDataGetV10": Models.QianchuanReportTodayLiveRoomDataGetV10Response;
  "QianchuanReportUniPromotionConfigGetV10": Models.QianchuanReportUniPromotionConfigGetV10Response;
  "QianchuanReportUniPromotionDataGetV10": Models.QianchuanReportUniPromotionDataGetV10Response;
  "QianchuanReportUniPromotionDimensionDataAuthorGetV10": Models.QianchuanReportUniPromotionDimensionDataAuthorGetV10Response;
  "QianchuanReportUniPromotionDimensionDataRoomGetV10": Models.QianchuanReportUniPromotionDimensionDataRoomGetV10Response;
  "QianchuanReportUniPromotionGetV10": Models.QianchuanReportUniPromotionGetV10Response;
  "QianchuanReportVideoUserLoseGetV10": Models.QianchuanReportVideoUserLoseGetV10Response;
  "QianchuanRoiGoalUpdateV10": Models.QianchuanRoiGoalUpdateV10Response;
  "QianchuanShopAdvertiserListV10": Models.QianchuanShopAdvertiserListV10Response;
  "QianchuanShopAuthorizedGetV10": Models.QianchuanShopAuthorizedGetV10Response;
  "QianchuanShopGetV10": Models.QianchuanShopGetV10Response;
  "QianchuanSuggestBidV10": Models.QianchuanSuggestBidV10Response;
  "QianchuanSuggestBudgetV10": Models.QianchuanSuggestBudgetV10Response;
  "QianchuanSuggestRoiGoalV10": Models.QianchuanSuggestRoiGoalV10Response;
  "QianchuanTodayLiveRoomDetailGetV10": Models.QianchuanTodayLiveRoomDetailGetV10Response;
  "QianchuanTodayLiveRoomFlowPerformanceGetV10": Models.QianchuanTodayLiveRoomFlowPerformanceGetV10Response;
  "QianchuanTodayLiveRoomGetV10": Models.QianchuanTodayLiveRoomGetV10Response;
  "QianchuanTodayLiveRoomProductListGetV10": Models.QianchuanTodayLiveRoomProductListGetV10Response;
  "QianchuanTodayLiveRoomUserGetV10": Models.QianchuanTodayLiveRoomUserGetV10Response;
  "QianchuanTodayLiveV2RoomUserGetV10": Models.QianchuanTodayLiveV2RoomUserGetV10Response;
  "QianchuanToolsAllowCouponV10": Models.QianchuanToolsAllowCouponV10Response;
  "QianchuanToolsAwemeAuthV10": Models.QianchuanToolsAwemeAuthV10Response;
  "QianchuanToolsEstimateAudienceV10": Models.QianchuanToolsEstimateAudienceV10Response;
  "QianchuanToolsGrayV10": Models.QianchuanToolsGrayV10Response;
  "QianchuanToolsLogSearchV10": Models.QianchuanToolsLogSearchV10Response;
  "QianchuanToolsShopAuthV10": Models.QianchuanToolsShopAuthV10Response;
  "QianchuanToolsSmartBoostAdBoostReportGetV10": Models.QianchuanToolsSmartBoostAdBoostReportGetV10Response;
  "QianchuanToolsSmartBoostAdBoostSetV10": Models.QianchuanToolsSmartBoostAdBoostSetV10Response;
  "QianchuanToolsSmartBoostAdBoostStatusGetV10": Models.QianchuanToolsSmartBoostAdBoostStatusGetV10Response;
  "QianchuanToolsSmartBoostAdBoostVersionGetV10": Models.QianchuanToolsSmartBoostAdBoostVersionGetV10Response;
  "QianchuanTrackUrlCheckV10": Models.QianchuanTrackUrlCheckV10Response;
  "QianchuanUniAwemeAdCreateV10": Models.QianchuanUniAwemeAdCreateV10Response;
  "QianchuanUniAwemeAdUpdateV10": Models.QianchuanUniAwemeAdUpdateV10Response;
  "QianchuanUniAwemeAuthorizedGetV10": Models.QianchuanUniAwemeAuthorizedGetV10Response;
  "QianchuanUniAwemeSuggestBudgetV10": Models.QianchuanUniAwemeSuggestBudgetV10Response;
  "QianchuanUniAwemeSuggestRoiV10": Models.QianchuanUniAwemeSuggestRoiV10Response;
  "QianchuanUniPromotionAdBudgetUpdateV10": Models.QianchuanUniPromotionAdBudgetUpdateV10Response;
  "QianchuanUniPromotionAdControlTaskBudgetUpdateV10": Models.QianchuanUniPromotionAdControlTaskBudgetUpdateV10Response;
  "QianchuanUniPromotionAdControlTaskCreateV10": Models.QianchuanUniPromotionAdControlTaskCreateV10Response;
  "QianchuanUniPromotionAdControlTaskDurationUpdateV10": Models.QianchuanUniPromotionAdControlTaskDurationUpdateV10Response;
  "QianchuanUniPromotionAdControlTaskListV10": Models.QianchuanUniPromotionAdControlTaskListV10Response;
  "QianchuanUniPromotionAdControlTaskSmartControlCreateV10": Models.QianchuanUniPromotionAdControlTaskSmartControlCreateV10Response;
  "QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10": Models.QianchuanUniPromotionAdControlTaskSmartControlStatusUpdateV10Response;
  "QianchuanUniPromotionAdControlTaskStatusUpdateV10": Models.QianchuanUniPromotionAdControlTaskStatusUpdateV10Response;
  "QianchuanUniPromotionAdControlTaskUpdateV10": Models.QianchuanUniPromotionAdControlTaskUpdateV10Response;
  "QianchuanUniPromotionAdDetailV10": Models.QianchuanUniPromotionAdDetailV10Response;
  "QianchuanUniPromotionAdMaterialAddV10": Models.QianchuanUniPromotionAdMaterialAddV10Response;
  "QianchuanUniPromotionAdMaterialDeleteV10": Models.QianchuanUniPromotionAdMaterialDeleteV10Response;
  "QianchuanUniPromotionAdMaterialGetV10": Models.QianchuanUniPromotionAdMaterialGetV10Response;
  "QianchuanUniPromotionAdNameUpdateV10": Models.QianchuanUniPromotionAdNameUpdateV10Response;
  "QianchuanUniPromotionAdProductDeleteV10": Models.QianchuanUniPromotionAdProductDeleteV10Response;
  "QianchuanUniPromotionAdProductGetV10": Models.QianchuanUniPromotionAdProductGetV10Response;
  "QianchuanUniPromotionAdRoi2GoalUpdateV10": Models.QianchuanUniPromotionAdRoi2GoalUpdateV10Response;
  "QianchuanUniPromotionAdScheduleDateUpdateV10": Models.QianchuanUniPromotionAdScheduleDateUpdateV10Response;
  "QianchuanUniPromotionAdStatusUpdateV10": Models.QianchuanUniPromotionAdStatusUpdateV10Response;
  "QianchuanUniPromotionAdSuggestionV10": Models.QianchuanUniPromotionAdSuggestionV10Response;
  "QianchuanUniPromotionAuthInitV10": Models.QianchuanUniPromotionAuthInitV10Response;
  "QianchuanUniPromotionAuthorizableShopListV10": Models.QianchuanUniPromotionAuthorizableShopListV10Response;
  "QianchuanUniPromotionAuthorizationApplyV10": Models.QianchuanUniPromotionAuthorizationApplyV10Response;
  "QianchuanUniPromotionBlockMaterialGetV10": Models.QianchuanUniPromotionBlockMaterialGetV10Response;
  "QianchuanUniPromotionListV10": Models.QianchuanUniPromotionListV10Response;
  "QianchuanUniPromotionProductAwemeGetV10": Models.QianchuanUniPromotionProductAwemeGetV10Response;
  "QianchuanUniPromotionProductGetV10": Models.QianchuanUniPromotionProductGetV10Response;
  "QianchuanUniPromotionPromshopProductGetV10": Models.QianchuanUniPromotionPromshopProductGetV10Response;
  "QianchuanVideoByAwemeGetV10": Models.QianchuanVideoByAwemeGetV10Response;
  "QianchuanVideoGetV10": Models.QianchuanVideoGetV10Response;
  "QueryBookingBusinessEntityIdGetV2": Models.QueryBookingBusinessEntityIdGetV2Response;
  "QueryInvoiceDetailSelfV2": Models.QueryInvoiceDetailSelfV2Response;
  "QueryInvoiceDetailV2": Models.QueryInvoiceDetailV2Response;
  "QueryInvoiceElectronicUrlSelfV2": Models.QueryInvoiceElectronicUrlSelfV2Response;
  "QueryInvoiceElectronicUrlV2": Models.QueryInvoiceElectronicUrlV2Response;
  "QueryInvoiceSelfV2": Models.QueryInvoiceSelfV2Response;
  "QueryInvoiceTaxV2": Models.QueryInvoiceTaxV2Response;
  "QueryInvoiceV2": Models.QueryInvoiceV2Response;
  "QueryProjectV2": Models.QueryProjectV2Response;
  "QueryProjectV30": Models.QueryProjectV30Response;
  "QueryRebateAccountingInfoV2": Models.QueryRebateAccountingInfoV2Response;
  "QueryRebateBalanceV2": Models.QueryRebateBalanceV2Response;
  "QueryStatementV2": Models.QueryStatementV2Response;
  "RecommendVideoListV30": Models.RecommendVideoListV30Response;
  "RejectMaterialAiRepairAcceptTaskCreateV30": Models.RejectMaterialAiRepairAcceptTaskCreateV30Response;
  "RejectMaterialAiRepairAcceptTaskListV30": Models.RejectMaterialAiRepairAcceptTaskListV30Response;
  "RejectMaterialAiRepairCrossAccountGetV30": Models.RejectMaterialAiRepairCrossAccountGetV30Response;
  "RejectMaterialAiRepairGetV30": Models.RejectMaterialAiRepairGetV30Response;
  "RemittanceCodeListGetV30": Models.RemittanceCodeListGetV30Response;
  "RemittanceCodeListV30": Models.RemittanceCodeListV30Response;
  "ReportAdGetV2": Models.ReportAdGetV2Response;
  "ReportAdvertiserGetV2": Models.ReportAdvertiserGetV2Response;
  "ReportAgentGetV2V2": Models.ReportAgentGetV2V2Response;
  "ReportAudienceAgeV2": Models.ReportAudienceAgeV2Response;
  "ReportAudienceAwemeListV2": Models.ReportAudienceAwemeListV2Response;
  "ReportAudienceCityV2": Models.ReportAudienceCityV2Response;
  "ReportAudienceGenderV2": Models.ReportAudienceGenderV2Response;
  "ReportAudienceInterestActionListV2": Models.ReportAudienceInterestActionListV2Response;
  "ReportAudienceProvinceV2": Models.ReportAudienceProvinceV2Response;
  "ReportBrandAdGetV30": Models.ReportBrandAdGetV30Response;
  "ReportBrandAdvertiserGetV30": Models.ReportBrandAdvertiserGetV30Response;
  "ReportBrandAgentDataV30": Models.ReportBrandAgentDataV30Response;
  "ReportBrandCampaignGetV30": Models.ReportBrandCampaignGetV30Response;
  "ReportBrandCreativeGetV30": Models.ReportBrandCreativeGetV30Response;
  "ReportBrandDataV30": Models.ReportBrandDataV30Response;
  "ReportBusinessPlatformStardeliveryTaskVideoDataGetV30": Models.ReportBusinessPlatformStardeliveryTaskVideoDataGetV30Response;
  "ReportCampaignGetV2": Models.ReportCampaignGetV2Response;
  "ReportCreativeGetV2": Models.ReportCreativeGetV2Response;
  "ReportCustomAsyncTaskCreateV30": Models.ReportCustomAsyncTaskCreateV30Response;
  "ReportCustomAsyncTaskDownloadV30": Uint8Array;
  "ReportCustomAsyncTaskGetV30": Models.ReportCustomAsyncTaskGetV30Response;
  "ReportCustomConfigGetV30": Models.ReportCustomConfigGetV30Response;
  "ReportCustomCreativeGetV30": Models.ReportCustomCreativeGetV30Response;
  "ReportCustomGetV30": Models.ReportCustomGetV30Response;
  "ReportJointGrowthCusGetV30": Models.ReportJointGrowthCusGetV30Response;
  "ReportJointGrowthGetV30": Models.ReportJointGrowthGetV30Response;
  "ReportLiveRoomAnalysisGetV30": Models.ReportLiveRoomAnalysisGetV30Response;
  "ReportProductAsyncTaskDownloadV30": Uint8Array;
  "ReportProductAsyncTaskGetV30": Uint8Array;
  "ReportProductDailyAsyncTaskCreateV30": Uint8Array;
  "ReportProductHourlyAsyncTaskCreateV30": Uint8Array;
  "ReportReportLiveRoomAudiencePortraitGetV30": Models.ReportReportLiveRoomAudiencePortraitGetV30Response;
  "ReportRtaCusExpGetV2": Models.ReportRtaCusExpGetV2Response;
  "ReportRtaExpGetV2": Models.ReportRtaExpGetV2Response;
  "ReportRtaExpLocalDailyGetV30": Models.ReportRtaExpLocalDailyGetV30Response;
  "ReportRtaExpLocalHourlyGetV30": Models.ReportRtaExpLocalHourlyGetV30Response;
  "ReportRtaGetV2": Models.ReportRtaGetV2Response;
  "ReportRubeexGetV2": Models.ReportRubeexGetV2Response;
  "ReportSitePageV2": Models.ReportSitePageV2Response;
  "ReportStardeliveryTaskDataGetV30": Models.ReportStardeliveryTaskDataGetV30Response;
  "ReportStardeliveryTaskVideoDataGetV30": Models.ReportStardeliveryTaskVideoDataGetV30Response;
  "ReportVideoFrameGetV2": Models.ReportVideoFrameGetV2Response;
  "ScheduleResultGetV30": Models.ScheduleResultGetV30Response;
  "SecurityAuditResultsV30": Models.SecurityAuditResultsV30Response;
  "SecurityCreateAppealV30": Models.SecurityCreateAppealV30Response;
  "SecurityGetConsultResultV30": Models.SecurityGetConsultResultV30Response;
  "SecurityNonScoreDisposalInfoGetV30": Models.SecurityNonScoreDisposalInfoGetV30Response;
  "SecurityOpenMaterialAuditV30": Models.SecurityOpenMaterialAuditV30Response;
  "SecurityScoreDisposalInfoGetV30": Models.SecurityScoreDisposalInfoGetV30Response;
  "SecurityScoreTotalGetV30": Models.SecurityScoreTotalGetV30Response;
  "SecurityScoreViolationEventGetV30": Models.SecurityScoreViolationEventGetV30Response;
  "ServeMarketActiveFuncGetV10": Models.ServeMarketActiveFuncGetV10Response;
  "ServeMarketCidVerifyTokenV10": Models.ServeMarketCidVerifyTokenV10Response;
  "ServeMarketOrderGetV10": Models.ServeMarketOrderGetV10Response;
  "SharedWalletAccountRelationGetV30": Models.SharedWalletAccountRelationGetV30Response;
  "SharedWalletBudgetGetV30": Models.SharedWalletBudgetGetV30Response;
  "SharedWalletBudgetSubmitV30": Models.SharedWalletBudgetSubmitV30Response;
  "SharedWalletDailyStatGetV30": Models.SharedWalletDailyStatGetV30Response;
  "SharedWalletMainWalletGetV30": Models.SharedWalletMainWalletGetV30Response;
  "SharedWalletSharedRelationCreateV30": Models.SharedWalletSharedRelationCreateV30Response;
  "SharedWalletSubWalletCreateV30": Models.SharedWalletSubWalletCreateV30Response;
  "SharedWalletTransactionDetailGetV30": Models.SharedWalletTransactionDetailGetV30Response;
  "SharedWalletWalletAdvOperationLogGetV30": Models.SharedWalletWalletAdvOperationLogGetV30Response;
  "SharedWalletWalletBalanceGetV30": Models.SharedWalletWalletBalanceGetV30Response;
  "SharedWalletWalletEbpRelationGetV30": Models.SharedWalletWalletEbpRelationGetV30Response;
  "SharedWalletWalletInfoGetV30": Models.SharedWalletWalletInfoGetV30Response;
  "SharedWalletWalletOperationLogGetV30": Models.SharedWalletWalletOperationLogGetV30Response;
  "SharedWalletWalletRelationGetV30": Models.SharedWalletWalletRelationGetV30Response;
  "SharedWalletWatchRuleGetV30": Models.SharedWalletWatchRuleGetV30Response;
  "SharedWalletWatchRuleSubmitV30": Models.SharedWalletWatchRuleSubmitV30Response;
  "ShopBonusCreateV30": Models.ShopBonusCreateV30Response;
  "ShopBonusSuccessGetV30": Models.ShopBonusSuccessGetV30Response;
  "SpiTaskGetV2": Models.SpiTaskGetV2Response;
  "StarAttachmentUploadV2": Models.StarAttachmentUploadV2Response;
  "StarAttributeItemEventFeedbackV2": Models.StarAttributeItemEventFeedbackV2Response;
  "StarAttributeJdOverflowConvertV2": Models.StarAttributeJdOverflowConvertV2Response;
  "StarAttributeUserEventFeedbackV2": Models.StarAttributeUserEventFeedbackV2Response;
  "StarAttributeUserInfoFeedbackV2": Models.StarAttributeUserInfoFeedbackV2Response;
  "StarBillGetPendingV2": Models.StarBillGetPendingV2Response;
  "StarBillPayV2": Models.StarBillPayV2Response;
  "StarBrandCategoryListV2": Models.StarBrandCategoryListV2Response;
  "StarBrandListV2": Models.StarBrandListV2Response;
  "StarCampaignListV2": Models.StarCampaignListV2Response;
  "StarChallengeAddBudgetV2": Models.StarChallengeAddBudgetV2Response;
  "StarChallengeAuthorListV2": Models.StarChallengeAuthorListV2Response;
  "StarChallengeCancelV2": Models.StarChallengeCancelV2Response;
  "StarChallengeChooseTaskItemWithRewardV2": Models.StarChallengeChooseTaskItemWithRewardV2Response;
  "StarChallengeExpandRangeV2": Models.StarChallengeExpandRangeV2Response;
  "StarChallengeGetCustomTaskDataV2": Models.StarChallengeGetCustomTaskDataV2Response;
  "StarChallengeGetCustomTaskListV2": Models.StarChallengeGetCustomTaskListV2Response;
  "StarChallengeGetPushAdResultsV2": Models.StarChallengeGetPushAdResultsV2Response;
  "StarChallengeInfoV2": Models.StarChallengeInfoV2Response;
  "StarChallengeItemsDataV2": Models.StarChallengeItemsDataV2Response;
  "StarChallengeListV2": Models.StarChallengeListV2Response;
  "StarChallengePushItemsToAdV2": Models.StarChallengePushItemsToAdV2Response;
  "StarChallengeSyncItemToAdV2": Models.StarChallengeSyncItemToAdV2Response;
  "StarClueGetV2": Models.StarClueGetV2Response;
  "StarComponentCreateCommonComponentV2": Models.StarComponentCreateCommonComponentV2Response;
  "StarComponentCreateLinkV2": Models.StarComponentCreateLinkV2Response;
  "StarComponentQueryIndustryAnchorV2": Models.StarComponentQueryIndustryAnchorV2Response;
  "StarComponentQueryLinkV2": Models.StarComponentQueryLinkV2Response;
  "StarComponentUpdateCommonComponentV2": Models.StarComponentUpdateCommonComponentV2Response;
  "StarComponentUpdateLinkV2": Models.StarComponentUpdateLinkV2Response;
  "StarCopyrightCreateV2": Models.StarCopyrightCreateV2Response;
  "StarCopyrightGetV2": Models.StarCopyrightGetV2Response;
  "StarCreateProjectV2": Models.StarCreateProjectV2Response;
  "StarDataTaskTimelineReportV2": Models.StarDataTaskTimelineReportV2Response;
  "StarDemandCreateAssignV2": Models.StarDemandCreateAssignV2Response;
  "StarDemandCreateChallengeV2": Models.StarDemandCreateChallengeV2Response;
  "StarDemandGetEpisodeLimitV2": Models.StarDemandGetEpisodeLimitV2Response;
  "StarDemandGetResellCodeV2": Models.StarDemandGetResellCodeV2Response;
  "StarDemandListV2": Models.StarDemandListV2Response;
  "StarDemandMixListGetV2": Models.StarDemandMixListGetV2Response;
  "StarDemandOmCreateChallengeV2": Models.StarDemandOmCreateChallengeV2Response;
  "StarDemandOmExpandChallengeProviderV2": Models.StarDemandOmExpandChallengeProviderV2Response;
  "StarDemandOmExpandChallengeV2": Models.StarDemandOmExpandChallengeV2Response;
  "StarDemandOmGetChallengeDispatchedProviderListV2": Models.StarDemandOmGetChallengeDispatchedProviderListV2Response;
  "StarDemandOmGetChallengeItemsDataV2": Models.StarDemandOmGetChallengeItemsDataV2Response;
  "StarDemandOmGetChallengeV2": Models.StarDemandOmGetChallengeV2Response;
  "StarDemandOmGetDemandListV2": Models.StarDemandOmGetDemandListV2Response;
  "StarDemandOmUpdateChallengeV2": Models.StarDemandOmUpdateChallengeV2Response;
  "StarDemandOrderListV2": Models.StarDemandOrderListV2Response;
  "StarDemandSearchWordModifyV2": Models.StarDemandSearchWordModifyV2Response;
  "StarDemanderDemanderGetAuthorBindInfoV2": Models.StarDemanderDemanderGetAuthorBindInfoV2Response;
  "StarDemanderDemanderGetBindShareCodeV2": Models.StarDemanderDemanderGetBindShareCodeV2Response;
  "StarDemanderGetCarBrandListV2": Models.StarDemanderGetCarBrandListV2Response;
  "StarDemanderGetRegisteredIpActsV2": Models.StarDemanderGetRegisteredIpActsV2Response;
  "StarDemanderQueryCpsTaskSalesV2": Models.StarDemanderQueryCpsTaskSalesV2Response;
  "StarDemanderUploadCpsTaskSalesV2": Models.StarDemanderUploadCpsTaskSalesV2Response;
  "StarFeCommonServiceTalentDayGetCheckInCodeV2": Models.StarFeCommonServiceTalentDayGetCheckInCodeV2Response;
  "StarFeCommonServiceTalentDayJudgeCheckedInV2": Models.StarFeCommonServiceTalentDayJudgeCheckedInV2Response;
  "StarGetCreateChallengeDataDictV2": Models.StarGetCreateChallengeDataDictV2Response;
  "StarInfoV2": Models.StarInfoV2Response;
  "StarItemAuthorGetV2": Models.StarItemAuthorGetV2Response;
  "StarMcnContractChallengeV2": Models.StarMcnContractChallengeV2Response;
  "StarMcnGetAuthorListV2": Models.StarMcnGetAuthorListV2Response;
  "StarMcnGetContractChallengeAuthorItemListV2V2": Models.StarMcnGetContractChallengeAuthorItemListV2V2Response;
  "StarMcnGetContractedChallengeListV2": Models.StarMcnGetContractedChallengeListV2Response;
  "StarMcnGetContractedChallengeUrlV2": Models.StarMcnGetContractedChallengeUrlV2Response;
  "StarMcnGetUnparticipatedTaskV2": Models.StarMcnGetUnparticipatedTaskV2Response;
  "StarMcnMixListGetV2": Models.StarMcnMixListGetV2Response;
  "StarMcnProviderGetParticipatedTaskV2": Models.StarMcnProviderGetParticipatedTaskV2Response;
  "StarMcnProviderGetRecruitInfoGetV2": Models.StarMcnProviderGetRecruitInfoGetV2Response;
  "StarMcnProviderGetTagOnTaskV2": Models.StarMcnProviderGetTagOnTaskV2Response;
  "StarMcnProviderGetTaskAuthorListV2": Models.StarMcnProviderGetTaskAuthorListV2Response;
  "StarMcnProviderGetTaskDetailV2": Models.StarMcnProviderGetTaskDetailV2Response;
  "StarMcnProviderGetTaskItemListV2": Models.StarMcnProviderGetTaskItemListV2Response;
  "StarMcnProviderGetTaskShareCodeV2": Models.StarMcnProviderGetTaskShareCodeV2Response;
  "StarMcnProviderGetUnparticipatedTaskV2": Models.StarMcnProviderGetUnparticipatedTaskV2Response;
  "StarMcnProviderHandleJoinedAuthorV2": Models.StarMcnProviderHandleJoinedAuthorV2Response;
  "StarMcnProviderUploadSearchItemV2": Models.StarMcnProviderUploadSearchItemV2Response;
  "StarMcnRecuritProviderGetTaskOrderListGetV2": Models.StarMcnRecuritProviderGetTaskOrderListGetV2Response;
  "StarOrderApproveResourceV2": Models.StarOrderApproveResourceV2Response;
  "StarOrderDemanderCancelV2": Models.StarOrderDemanderCancelV2Response;
  "StarOrderDetailV2": Models.StarOrderDetailV2Response;
  "StarOrderFinishV2": Models.StarOrderFinishV2Response;
  "StarOrderGetCancelAmountV2": Models.StarOrderGetCancelAmountV2Response;
  "StarOrderGetComponentV2": Models.StarOrderGetComponentV2Response;
  "StarOrderGetInfoV2": Models.StarOrderGetInfoV2Response;
  "StarOrderGetLiveV2": Models.StarOrderGetLiveV2Response;
  "StarOrderGetScriptV2": Models.StarOrderGetScriptV2Response;
  "StarOrderGetVideoV2": Models.StarOrderGetVideoV2Response;
  "StarOrderListByCampaignV2": Models.StarOrderListByCampaignV2Response;
  "StarOrderPublishResourceV2": Models.StarOrderPublishResourceV2Response;
  "StarOrderPushResourceV2": Models.StarOrderPushResourceV2Response;
  "StarOrderRejectResourceV2": Models.StarOrderRejectResourceV2Response;
  "StarOrderReplyAuthorCancelV2": Models.StarOrderReplyAuthorCancelV2Response;
  "StarOrderUpdateV2": Models.StarOrderUpdateV2Response;
  "StarProjectListV2": Models.StarProjectListV2Response;
  "StarProviderTaskItemListV2": Models.StarProviderTaskItemListV2Response;
  "StarProviderTaskListV2": Models.StarProviderTaskListV2Response;
  "StarReportCustomDataTopicDailyReportV2": Models.StarReportCustomDataTopicDailyReportV2Response;
  "StarReportCustomDataTopicReportV2": Models.StarReportCustomDataTopicReportV2Response;
  "StarReportDataTopicConfigV2": Models.StarReportDataTopicConfigV2Response;
  "StarReportOrderOverviewGetV2": Models.StarReportOrderOverviewGetV2Response;
  "StarReportOrderOverviewV2": Models.StarReportOrderOverviewV2Response;
  "StarReportOrderUserDistributionGetV2": Models.StarReportOrderUserDistributionGetV2Response;
  "StarStarAdUniteTaskDetailV2": Models.StarStarAdUniteTaskDetailV2Response;
  "StarStarAdUniteTaskItemListV2": Models.StarStarAdUniteTaskItemListV2Response;
  "StarStarAdUniteTaskListV2": Models.StarStarAdUniteTaskListV2Response;
  "StarTaskBindProjectV2": Models.StarTaskBindProjectV2Response;
  "StarTaskListByProjectV2": Models.StarTaskListByProjectV2Response;
  "StarUpdateProjectV2": Models.StarUpdateProjectV2Response;
  "StarUserGetAwemeAuthorIdV2": Models.StarUserGetAwemeAuthorIdV2Response;
  "StarUserGetStarIdV2": Models.StarUserGetStarIdV2Response;
  "StarVasAppendOrderToBoostItemGroupV2": Models.StarVasAppendOrderToBoostItemGroupV2Response;
  "StarVasCancelBoostItemGroupV2": Models.StarVasCancelBoostItemGroupV2Response;
  "StarVasCreateBoostItemGroupV2": Models.StarVasCreateBoostItemGroupV2Response;
  "StarVasGetBoostGroupListV2": Models.StarVasGetBoostGroupListV2Response;
  "StarVasGetBoostGroupOptionsV2": Models.StarVasGetBoostGroupOptionsV2Response;
  "StarVasGetBoostItemGroupDetailV2": Models.StarVasGetBoostItemGroupDetailV2Response;
  "StarVasGetCommonAuthorPackageListV2": Models.StarVasGetCommonAuthorPackageListV2Response;
  "StarVasGetExportBoostItemGroupResultV2": Models.StarVasGetExportBoostItemGroupResultV2Response;
  "StarVasSubmitExportBoostItemGroupDataV2": Models.StarVasSubmitExportBoostItemGroupDataV2Response;
  "StardeliveryTaskAuthorDetailV30": Models.StardeliveryTaskAuthorDetailV30Response;
  "StardeliveryTaskAuthorVideoAuditV30": Models.StardeliveryTaskAuthorVideoAuditV30Response;
  "StardeliveryTaskAuthorVideoDetailV30": Models.StardeliveryTaskAuthorVideoDetailV30Response;
  "StardeliveryTaskBudgetUpdateV30": Models.StardeliveryTaskBudgetUpdateV30Response;
  "StardeliveryTaskCancelV30": Models.StardeliveryTaskCancelV30Response;
  "StardeliveryTaskDetailV30": Models.StardeliveryTaskDetailV30Response;
  "StardeliveryTaskListV30": Models.StardeliveryTaskListV30Response;
  "StardeliveryTaskPostEndTimeUpdateV30": Models.StardeliveryTaskPostEndTimeUpdateV30Response;
  "StardeliveryTaskShareV30": Models.StardeliveryTaskShareV30Response;
  "StardeliveryTaskShareableListV30": Models.StardeliveryTaskShareableListV30Response;
  "StardeliveryTaskSharingListV30": Models.StardeliveryTaskSharingListV30Response;
  "StardeliveryTaskUnshareV30": Models.StardeliveryTaskUnshareV30Response;
  "StdProjectCreateV30": Models.StdProjectCreateV30Response;
  "StdProjectListV30": Models.StdProjectListV30Response;
  "StdProjectUpdateV30": Models.StdProjectUpdateV30Response;
  "SubscribeAccountsAddV30": Models.SubscribeAccountsAddV30Response;
  "SubscribeAccountsListV30": Models.SubscribeAccountsListV30Response;
  "SubscribeAccountsRemoveV30": Models.SubscribeAccountsRemoveV30Response;
  "SuggWordsV30": Models.SuggWordsV30Response;
  "SvipChargeVerifyGetV30": Models.SvipChargeVerifyGetV30Response;
  "ToolQuickAppManagementQuickAppGetV2": Models.ToolQuickAppManagementQuickAppGetV2Response;
  "ToolsAdPreviewQrcodeGetV30": Models.ToolsAdPreviewQrcodeGetV30Response;
  "ToolsAdRaiseStatusGetV2": Models.ToolsAdRaiseStatusGetV2Response;
  "ToolsAdminInfoV2": Models.ToolsAdminInfoV2Response;
  "ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30": Models.ToolsAdvertiserDiagnosisSuggestionAcceptUpdateV30Response;
  "ToolsAdvertiserDiagnosisSuggestionGetV30": Models.ToolsAdvertiserDiagnosisSuggestionGetV30Response;
  "ToolsAdvertiserStoreSearchV2": Models.ToolsAdvertiserStoreSearchV2Response;
  "ToolsAgreementCreateV30": Models.ToolsAgreementCreateV30Response;
  "ToolsAgreementListV30": Models.ToolsAgreementListV30Response;
  "ToolsAigcMaterialGetV2": Models.ToolsAigcMaterialGetV2Response;
  "ToolsAipThirdSiteCreateV2": Models.ToolsAipThirdSiteCreateV2Response;
  "ToolsAipThirdSiteGetV2": Models.ToolsAipThirdSiteGetV2Response;
  "ToolsAipThirdSiteUpdateV2": Models.ToolsAipThirdSiteUpdateV2Response;
  "ToolsAppIosListV2": Models.ToolsAppIosListV2Response;
  "ToolsAppManagementAndroidAppListV2": Models.ToolsAppManagementAndroidAppListV2Response;
  "ToolsAppManagementAndroidBasicPackageGetV2": Models.ToolsAppManagementAndroidBasicPackageGetV2Response;
  "ToolsAppManagementAndroidBasicPackagePublishV2": Models.ToolsAppManagementAndroidBasicPackagePublishV2Response;
  "ToolsAppManagementAndroidBasicPackageUpdateV2": Models.ToolsAppManagementAndroidBasicPackageUpdateV2Response;
  "ToolsAppManagementAppGetV2": Models.ToolsAppManagementAppGetV2Response;
  "ToolsAppManagementBookingGetV2": Models.ToolsAppManagementBookingGetV2Response;
  "ToolsAppManagementBookingRecordsGetV2": Models.ToolsAppManagementBookingRecordsGetV2Response;
  "ToolsAppManagementBpShareCancelV2": Models.ToolsAppManagementBpShareCancelV2Response;
  "ToolsAppManagementBpShareV2": Models.ToolsAppManagementBpShareV2Response;
  "ToolsAppManagementExtendPackageCreateV2": Models.ToolsAppManagementExtendPackageCreateV2Response;
  "ToolsAppManagementExtendPackageCreateV2V2": Models.ToolsAppManagementExtendPackageCreateV2V2Response;
  "ToolsAppManagementExtendPackageListV2": Models.ToolsAppManagementExtendPackageListV2Response;
  "ToolsAppManagementExtendPackageListV2V2": Models.ToolsAppManagementExtendPackageListV2V2Response;
  "ToolsAppManagementExtendPackageUpdateV2": Models.ToolsAppManagementExtendPackageUpdateV2Response;
  "ToolsAppManagementExtendPackageUpdateV2V2": Models.ToolsAppManagementExtendPackageUpdateV2V2Response;
  "ToolsAppManagementHarmonyAppListV2": Models.ToolsAppManagementHarmonyAppListV2Response;
  "ToolsAppManagementIndustryInfoListV2": Models.ToolsAppManagementIndustryInfoListV2Response;
  "ToolsAppManagementShareAccountListV2": Models.ToolsAppManagementShareAccountListV2Response;
  "ToolsAppManagementUpdateAuthorizationV2": Models.ToolsAppManagementUpdateAuthorizationV2Response;
  "ToolsAppManagementUploadTaskCreateV2": Models.ToolsAppManagementUploadTaskCreateV2Response;
  "ToolsAppManagementUploadTaskListV2": Models.ToolsAppManagementUploadTaskListV2Response;
  "ToolsAssetLinkListV30": Models.ToolsAssetLinkListV30Response;
  "ToolsAwemeAuthAuthShareAdShareV2": Models.ToolsAwemeAuthAuthShareAdShareV2Response;
  "ToolsAwemeAuthCancelV2": Models.ToolsAwemeAuthCancelV2Response;
  "ToolsAwemeAuthListV2": Models.ToolsAwemeAuthListV2Response;
  "ToolsAwemeAuthRenewalV2": Models.ToolsAwemeAuthRenewalV2Response;
  "ToolsAwemeAuthV2": Models.ToolsAwemeAuthV2Response;
  "ToolsAwemeAuthorInfoGetV2": Models.ToolsAwemeAuthorInfoGetV2Response;
  "ToolsAwemeBannedCreateV30": Models.ToolsAwemeBannedCreateV30Response;
  "ToolsAwemeBannedDeleteV30": Models.ToolsAwemeBannedDeleteV30Response;
  "ToolsAwemeBannedListV30": Models.ToolsAwemeBannedListV30Response;
  "ToolsAwemeCategoryTopAuthorGetV2": Models.ToolsAwemeCategoryTopAuthorGetV2Response;
  "ToolsAwemeInfoSearchV2": Models.ToolsAwemeInfoSearchV2Response;
  "ToolsAwemeMultiLevelCategoryGetV2": Models.ToolsAwemeMultiLevelCategoryGetV2Response;
  "ToolsAwemeSimilarAuthorSearchV2": Models.ToolsAwemeSimilarAuthorSearchV2Response;
  "ToolsBidSuggestV2": Models.ToolsBidSuggestV2Response;
  "ToolsBidsSuggestV30": Models.ToolsBidsSuggestV30Response;
  "ToolsBlueFlowKeywordListV30": Models.ToolsBlueFlowKeywordListV30Response;
  "ToolsBlueFlowPackageListV30": Models.ToolsBlueFlowPackageListV30Response;
  "ToolsBpAssetManagementShareCancelV30": Models.ToolsBpAssetManagementShareCancelV30Response;
  "ToolsBpAssetManagementShareGetV30": Models.ToolsBpAssetManagementShareGetV30Response;
  "ToolsBpAssetManagementShareV30": Models.ToolsBpAssetManagementShareV30Response;
  "ToolsClueBridgeCallCreateV2": Models.ToolsClueBridgeCallCreateV2Response;
  "ToolsClueCallCreateV2": Models.ToolsClueCallCreateV2Response;
  "ToolsClueCallVirtualNumberGetV2": Models.ToolsClueCallVirtualNumberGetV2Response;
  "ToolsClueCallVirtualNumberRefundDetailGetV2": Models.ToolsClueCallVirtualNumberRefundDetailGetV2Response;
  "ToolsClueCallbackV2": Models.ToolsClueCallbackV2Response;
  "ToolsClueClueOverviewQueryV2": Models.ToolsClueClueOverviewQueryV2Response;
  "ToolsClueContactLogListV2": Models.ToolsClueContactLogListV2Response;
  "ToolsClueContactLogOverviewQueryV2": Models.ToolsClueContactLogOverviewQueryV2Response;
  "ToolsClueContactLogRecordUrlGetV2": Models.ToolsClueContactLogRecordUrlGetV2Response;
  "ToolsClueExtInfoCallbackV2": Models.ToolsClueExtInfoCallbackV2Response;
  "ToolsClueFormDetailV2": Models.ToolsClueFormDetailV2Response;
  "ToolsClueFormGetV2": Models.ToolsClueFormGetV2Response;
  "ToolsClueGetV2": Models.ToolsClueGetV2Response;
  "ToolsClueInfoGetV2": Models.ToolsClueInfoGetV2Response;
  "ToolsClueInfoUpdateV2": Models.ToolsClueInfoUpdateV2Response;
  "ToolsClueLifeCallbackV2": Models.ToolsClueLifeCallbackV2Response;
  "ToolsClueLifeGetV2": Models.ToolsClueLifeGetV2Response;
  "ToolsClueLiteContactGetV2": Models.ToolsClueLiteContactGetV2Response;
  "ToolsClueLiteContactRecordV2": Models.ToolsClueLiteContactRecordV2Response;
  "ToolsCluePrivateMessageCallbackV2": Models.ToolsCluePrivateMessageCallbackV2Response;
  "ToolsClueRefundDetailGetV2": Models.ToolsClueRefundDetailGetV2Response;
  "ToolsClueRefundInfoQueryV2": Models.ToolsClueRefundInfoQueryV2Response;
  "ToolsClueRefundReportGetV2": Models.ToolsClueRefundReportGetV2Response;
  "ToolsClueRefundViewGetV2": Models.ToolsClueRefundViewGetV2Response;
  "ToolsClueRobotScriptQueryV2": Models.ToolsClueRobotScriptQueryV2Response;
  "ToolsClueRobotTaskCancelV2": Models.ToolsClueRobotTaskCancelV2Response;
  "ToolsClueRobotTaskCreateV2": Models.ToolsClueRobotTaskCreateV2Response;
  "ToolsClueSmartPhoneGetV2": Models.ToolsClueSmartPhoneGetV2Response;
  "ToolsClueWebrtcCreateV2V30": Models.ToolsClueWebrtcCreateV2V30Response;
  "ToolsClueWebrtcTokenGetV2": Models.ToolsClueWebrtcTokenGetV2Response;
  "ToolsClueWebrtcTokenGetV2V30": Models.ToolsClueWebrtcTokenGetV2V30Response;
  "ToolsCommentGetV30": Models.ToolsCommentGetV30Response;
  "ToolsCommentHideV30": Models.ToolsCommentHideV30Response;
  "ToolsCommentMetricsGetV30": Models.ToolsCommentMetricsGetV30Response;
  "ToolsCommentMid2itemIdV30": Models.ToolsCommentMid2itemIdV30Response;
  "ToolsCommentReplyGetV30": Models.ToolsCommentReplyGetV30Response;
  "ToolsCommentReplyV30": Models.ToolsCommentReplyV30Response;
  "ToolsCommentStickOnTopV30": Models.ToolsCommentStickOnTopV30Response;
  "ToolsCommentTermsBannedAddV30": Models.ToolsCommentTermsBannedAddV30Response;
  "ToolsCommentTermsBannedDeleteV30": Models.ToolsCommentTermsBannedDeleteV30Response;
  "ToolsCommentTermsBannedGetV30": Models.ToolsCommentTermsBannedGetV30Response;
  "ToolsCommentTermsBannedUpdateV30": Models.ToolsCommentTermsBannedUpdateV30Response;
  "ToolsCountryInfoV2": Models.ToolsCountryInfoV2Response;
  "ToolsCreativeWordSelectV2": Models.ToolsCreativeWordSelectV2Response;
  "ToolsDiagnosisSuggestionGetV30": Models.ToolsDiagnosisSuggestionGetV30Response;
  "ToolsDownloadPackageGetV2": Models.ToolsDownloadPackageGetV2Response;
  "ToolsDownloadPackageParseV2": Models.ToolsDownloadPackageParseV2Response;
  "ToolsEbpAppDetailV30": Models.ToolsEbpAppDetailV30Response;
  "ToolsEbpAppExtendCreateV30": Models.ToolsEbpAppExtendCreateV30Response;
  "ToolsEbpAppExtendListV30": Models.ToolsEbpAppExtendListV30Response;
  "ToolsEbpAppExtendUpdateV30": Models.ToolsEbpAppExtendUpdateV30Response;
  "ToolsEbpAppGameBookListV30": Models.ToolsEbpAppGameBookListV30Response;
  "ToolsEbpAppListV30": Models.ToolsEbpAppListV30Response;
  "ToolsEbpAppPublishV30": Models.ToolsEbpAppPublishV30Response;
  "ToolsEbpAppUpdateV30": Models.ToolsEbpAppUpdateV30Response;
  "ToolsEbpAssetAuthCancelV30": Models.ToolsEbpAssetAuthCancelV30Response;
  "ToolsEbpAssetAuthListV30": Models.ToolsEbpAssetAuthListV30Response;
  "ToolsEbpAssetAuthV30": Models.ToolsEbpAssetAuthV30Response;
  "ToolsEbpMaterialAuthCreateV30": Models.ToolsEbpMaterialAuthCreateV30Response;
  "ToolsEbpMaterialAuthDeleteV30": Models.ToolsEbpMaterialAuthDeleteV30Response;
  "ToolsEbpMaterialAuthListV30": Models.ToolsEbpMaterialAuthListV30Response;
  "ToolsEbpMaterialListV30": Models.ToolsEbpMaterialListV30Response;
  "ToolsEbpMicroAppletCreateV30": Models.ToolsEbpMicroAppletCreateV30Response;
  "ToolsEbpMicroAppletLinkListV30": Models.ToolsEbpMicroAppletLinkListV30Response;
  "ToolsEbpMicroAppletListV30": Models.ToolsEbpMicroAppletListV30Response;
  "ToolsEbpMicroAppletUpdateV30": Models.ToolsEbpMicroAppletUpdateV30Response;
  "ToolsEbpMicroGameCreateV30": Models.ToolsEbpMicroGameCreateV30Response;
  "ToolsEbpMicroGameLinkListV30": Models.ToolsEbpMicroGameLinkListV30Response;
  "ToolsEbpMicroGameListV30": Models.ToolsEbpMicroGameListV30Response;
  "ToolsEbpMicroGameUpdateV30": Models.ToolsEbpMicroGameUpdateV30Response;
  "ToolsEbpPlayableDeleteV30": Models.ToolsEbpPlayableDeleteV30Response;
  "ToolsEbpPlayableListV30": Models.ToolsEbpPlayableListV30Response;
  "ToolsEbpPlayableUploadV30": Models.ToolsEbpPlayableUploadV30Response;
  "ToolsEbpStarTaskGetV30": Models.ToolsEbpStarTaskGetV30Response;
  "ToolsEbpStarTaskListV30": Models.ToolsEbpStarTaskListV30Response;
  "ToolsEbpStarTaskTaskAuthorGetV30": Models.ToolsEbpStarTaskTaskAuthorGetV30Response;
  "ToolsEbpStarTaskTaskAuthorVedioGetV30": Models.ToolsEbpStarTaskTaskAuthorVedioGetV30Response;
  "ToolsEbpStarTaskTaskVideoDataGetV30": Models.ToolsEbpStarTaskTaskVideoDataGetV30Response;
  "ToolsEbpSubjectListV30": Models.ToolsEbpSubjectListV30Response;
  "ToolsEbpVideoAttributesListV30": Models.ToolsEbpVideoAttributesListV30Response;
  "ToolsEbpVideoDeleteV30": Models.ToolsEbpVideoDeleteV30Response;
  "ToolsEbpVideoUpdateV30": Models.ToolsEbpVideoUpdateV30Response;
  "ToolsEbpVideoUploadV30": Models.ToolsEbpVideoUploadV30Response;
  "ToolsEbpWechatAppletCreateV30": Models.ToolsEbpWechatAppletCreateV30Response;
  "ToolsEbpWechatAppletListV30": Models.ToolsEbpWechatAppletListV30Response;
  "ToolsEbpWechatAppletUpdateV30": Models.ToolsEbpWechatAppletUpdateV30Response;
  "ToolsEbpWechatGameCreateV30": Models.ToolsEbpWechatGameCreateV30Response;
  "ToolsEbpWechatGameListV30": Models.ToolsEbpWechatGameListV30Response;
  "ToolsEbpWechatGameUpdateV30": Models.ToolsEbpWechatGameUpdateV30Response;
  "ToolsEstimateAudienceV2": Models.ToolsEstimateAudienceV2Response;
  "ToolsEstimatedPriceGetV2": Models.ToolsEstimatedPriceGetV2Response;
  "ToolsEventAllAssetsDetailV2": Models.ToolsEventAllAssetsDetailV2Response;
  "ToolsEventAllAssetsListV2": Models.ToolsEventAllAssetsListV2Response;
  "ToolsEventAssetsGetV2": Models.ToolsEventAssetsGetV2Response;
  "ToolsEventConvertOptimizedGoalGetV30": Models.ToolsEventConvertOptimizedGoalGetV30Response;
  "ToolsForbiddenLinkGreyGetV30": Models.ToolsForbiddenLinkGreyGetV30Response;
  "ToolsGrayGetV30": Models.ToolsGrayGetV30Response;
  "ToolsHotMaterialDeriveAdoptV30": Models.ToolsHotMaterialDeriveAdoptV30Response;
  "ToolsHotMaterialDeriveGetV30": Models.ToolsHotMaterialDeriveGetV30Response;
  "ToolsHotMaterialDeriveListV30": Models.ToolsHotMaterialDeriveListV30Response;
  "ToolsHotMaterialDeriveSubmitV30": Models.ToolsHotMaterialDeriveSubmitV30Response;
  "ToolsInactiveAdvertiserListV30": Models.ToolsInactiveAdvertiserListV30Response;
  "ToolsIndustryGetV2": Models.ToolsIndustryGetV2Response;
  "ToolsInterestActionActionKeywordV2": Models.ToolsInterestActionActionKeywordV2Response;
  "ToolsInterestActionId2wordV2": Models.ToolsInterestActionId2wordV2Response;
  "ToolsInterestActionInterestKeywordV2": Models.ToolsInterestActionInterestKeywordV2Response;
  "ToolsInterestActionKeywordSuggestV2": Models.ToolsInterestActionKeywordSuggestV2Response;
  "ToolsIsSupportUniversalGetV2": Models.ToolsIsSupportUniversalGetV2Response;
  "ToolsJointBidCreateV30": Models.ToolsJointBidCreateV30Response;
  "ToolsJointBidGetV30": Models.ToolsJointBidGetV30Response;
  "ToolsJointBidUpdateV30": Models.ToolsJointBidUpdateV30Response;
  "ToolsKeywordsBidRatioCreateV30": Models.ToolsKeywordsBidRatioCreateV30Response;
  "ToolsKeywordsBidRatioDeleteV30": Models.ToolsKeywordsBidRatioDeleteV30Response;
  "ToolsKeywordsBidRatioGetV30": Models.ToolsKeywordsBidRatioGetV30Response;
  "ToolsKeywordsBidRatioUpdateV30": Models.ToolsKeywordsBidRatioUpdateV30Response;
  "ToolsKeywordsProjectInfoGetV30": Models.ToolsKeywordsProjectInfoGetV30Response;
  "ToolsLandingGroupCreateV2": Models.ToolsLandingGroupCreateV2Response;
  "ToolsLandingGroupGetV2": Models.ToolsLandingGroupGetV2Response;
  "ToolsLandingGroupSiteOptStatusUpdateV2": Models.ToolsLandingGroupSiteOptStatusUpdateV2Response;
  "ToolsLandingGroupUpdateV2": Models.ToolsLandingGroupUpdateV2Response;
  "ToolsLiveAuthorizeListV2": Models.ToolsLiveAuthorizeListV2Response;
  "ToolsLogSearchDetailGetV2": Models.ToolsLogSearchDetailGetV2Response;
  "ToolsLogSearchV2": Models.ToolsLogSearchV2Response;
  "ToolsMaterialRaiseCreateV30": Models.ToolsMaterialRaiseCreateV30Response;
  "ToolsMaterialRaiseGetV30": Models.ToolsMaterialRaiseGetV30Response;
  "ToolsMaterialRaiseMaterialIdsGetV30": Models.ToolsMaterialRaiseMaterialIdsGetV30Response;
  "ToolsMaterialRaiseRecordsGetV30": Models.ToolsMaterialRaiseRecordsGetV30Response;
  "ToolsMaterialRaiseStatusGetV30": Models.ToolsMaterialRaiseStatusGetV30Response;
  "ToolsMaterialRaiseStopV30": Models.ToolsMaterialRaiseStopV30Response;
  "ToolsMicroAppCreateV30": Models.ToolsMicroAppCreateV30Response;
  "ToolsMicroAppListV30": Models.ToolsMicroAppListV30Response;
  "ToolsMicroAppUpdateV30": Models.ToolsMicroAppUpdateV30Response;
  "ToolsMicroGameConvertWindowGetV30": Models.ToolsMicroGameConvertWindowGetV30Response;
  "ToolsMicroGameConvertWindowUpdateV30": Models.ToolsMicroGameConvertWindowUpdateV30Response;
  "ToolsMicroGameCreateV30": Models.ToolsMicroGameCreateV30Response;
  "ToolsMicroGameListV30": Models.ToolsMicroGameListV30Response;
  "ToolsMicroGameUpdateV30": Models.ToolsMicroGameUpdateV30Response;
  "ToolsNoBidSuggestBidV2": Models.ToolsNoBidSuggestBidV2Response;
  "ToolsOrangeSiteGetV30": Models.ToolsOrangeSiteGetV30Response;
  "ToolsPioneerProgramAttachmentUploadV2": Models.ToolsPioneerProgramAttachmentUploadV2Response;
  "ToolsPlayableCloudGameListV2": Models.ToolsPlayableCloudGameListV2Response;
  "ToolsPlayableCreateV2": Models.ToolsPlayableCreateV2Response;
  "ToolsPlayableGrantResultV2": Models.ToolsPlayableGrantResultV2Response;
  "ToolsPlayableGrantV2": Models.ToolsPlayableGrantV2Response;
  "ToolsPlayableListGetV2": Models.ToolsPlayableListGetV2Response;
  "ToolsPlayableSaveV2": Models.ToolsPlayableSaveV2Response;
  "ToolsPlayableUploadV2": Models.ToolsPlayableUploadV2Response;
  "ToolsPlayableValidateV2": Models.ToolsPlayableValidateV2Response;
  "ToolsPreAuditGetV2": Models.ToolsPreAuditGetV2Response;
  "ToolsPreAuditSendV2": Models.ToolsPreAuditSendV2Response;
  "ToolsPrivativeWordAdAddV2": Models.ToolsPrivativeWordAdAddV2Response;
  "ToolsPrivativeWordAdUpdateV2": Models.ToolsPrivativeWordAdUpdateV2Response;
  "ToolsPrivativeWordBatchGetV30": Models.ToolsPrivativeWordBatchGetV30Response;
  "ToolsPrivativeWordCampaignAddV2": Models.ToolsPrivativeWordCampaignAddV2Response;
  "ToolsPrivativeWordCampaignUpdateV2": Models.ToolsPrivativeWordCampaignUpdateV2Response;
  "ToolsPrivativeWordGetV2": Models.ToolsPrivativeWordGetV2Response;
  "ToolsPrivativeWordProjectAddV30": Models.ToolsPrivativeWordProjectAddV30Response;
  "ToolsPrivativeWordProjectUpdateV30": Models.ToolsPrivativeWordProjectUpdateV30Response;
  "ToolsPrivativeWordPromotionAddV30": Models.ToolsPrivativeWordPromotionAddV30Response;
  "ToolsPrivativeWordPromotionUpdateV30": Models.ToolsPrivativeWordPromotionUpdateV30Response;
  "ToolsProjectMaterialTypeUpdateV30": Models.ToolsProjectMaterialTypeUpdateV30Response;
  "ToolsPromotionCardRecommendGetV2": Models.ToolsPromotionCardRecommendGetV2Response;
  "ToolsPromotionCardRecommendTitleGetV2": Models.ToolsPromotionCardRecommendTitleGetV2Response;
  "ToolsPromotionDiagnosisSuggestionAcceptV30": Models.ToolsPromotionDiagnosisSuggestionAcceptV30Response;
  "ToolsPromotionDiagnosisSuggestionGetV30": Models.ToolsPromotionDiagnosisSuggestionGetV30Response;
  "ToolsPromotionRaiseSetV30": Models.ToolsPromotionRaiseSetV30Response;
  "ToolsPromotionRaiseStatusCurrentIdsGetV30": Models.ToolsPromotionRaiseStatusCurrentIdsGetV30Response;
  "ToolsPromotionRaiseStatusGetV30": Models.ToolsPromotionRaiseStatusGetV30Response;
  "ToolsPromotionRaiseStopV30": Models.ToolsPromotionRaiseStopV30Response;
  "ToolsPromotionRaiseVersionGetV30": Models.ToolsPromotionRaiseVersionGetV30Response;
  "ToolsQuotaGetV2": Models.ToolsQuotaGetV2Response;
  "ToolsRegionGetV2": Models.ToolsRegionGetV2Response;
  "ToolsRtaGetInfoTmpV2": Models.ToolsRtaGetInfoTmpV2Response;
  "ToolsRtaGetInfoV2": Models.ToolsRtaGetInfoV2Response;
  "ToolsRtaGetV2": Models.ToolsRtaGetV2Response;
  "ToolsRtaScopeGetV30": Models.ToolsRtaScopeGetV30Response;
  "ToolsRtaSetScopeV2": Models.ToolsRtaSetScopeV2Response;
  "ToolsRtaStatusUpdateV2": Models.ToolsRtaStatusUpdateV2Response;
  "ToolsRubeexPlayableAdListV2": Models.ToolsRubeexPlayableAdListV2Response;
  "ToolsRubeexPlayableListV2": Models.ToolsRubeexPlayableListV2Response;
  "ToolsRubeexRemarkV2": Models.ToolsRubeexRemarkV2Response;
  "ToolsRubeexVersionGetV2": Models.ToolsRubeexVersionGetV2Response;
  "ToolsSearchBidRatioGetV2": Models.ToolsSearchBidRatioGetV2Response;
  "ToolsSiteCopyV2": Models.ToolsSiteCopyV2Response;
  "ToolsSiteCreateV2": Models.ToolsSiteCreateV2Response;
  "ToolsSiteFormsListV2": Models.ToolsSiteFormsListV2Response;
  "ToolsSiteGetV2": Models.ToolsSiteGetV2Response;
  "ToolsSiteHandselV2": Models.ToolsSiteHandselV2Response;
  "ToolsSitePreviewV2": Models.ToolsSitePreviewV2Response;
  "ToolsSiteReadV2": Models.ToolsSiteReadV2Response;
  "ToolsSiteTemplateCreateV2": Models.ToolsSiteTemplateCreateV2Response;
  "ToolsSiteTemplateGetV2": Models.ToolsSiteTemplateGetV2Response;
  "ToolsSiteTemplatePicUrlGetV2": Models.ToolsSiteTemplatePicUrlGetV2Response;
  "ToolsSiteTemplatePreviewV2": Models.ToolsSiteTemplatePreviewV2Response;
  "ToolsSiteTemplateSiteCreateV2": Models.ToolsSiteTemplateSiteCreateV2Response;
  "ToolsSiteUpdateStatusV2": Models.ToolsSiteUpdateStatusV2Response;
  "ToolsSiteUpdateV2": Models.ToolsSiteUpdateV2Response;
  "ToolsStarTaskSettlementConfigV2": Models.ToolsStarTaskSettlementConfigV2Response;
  "ToolsStarTaskTitleTopicGetV2": Models.ToolsStarTaskTitleTopicGetV2Response;
  "ToolsSuggestBudgetGetV30": Models.ToolsSuggestBudgetGetV30Response;
  "ToolsTaskRaiseCreateV2": Models.ToolsTaskRaiseCreateV2Response;
  "ToolsTaskRaiseDataGetV2": Models.ToolsTaskRaiseDataGetV2Response;
  "ToolsTaskRaiseGetV2": Models.ToolsTaskRaiseGetV2Response;
  "ToolsTaskRaiseOptimizationIdsGetV2": Models.ToolsTaskRaiseOptimizationIdsGetV2Response;
  "ToolsTaskRaiseStatusStopV2": Models.ToolsTaskRaiseStatusStopV2Response;
  "ToolsThirdSiteDeleteV2": Models.ToolsThirdSiteDeleteV2Response;
  "ToolsThirdSiteGetV2": Models.ToolsThirdSiteGetV2Response;
  "ToolsThirdSitePreviewV2": Models.ToolsThirdSitePreviewV2Response;
  "ToolsThirdSiteUpdateV2": Models.ToolsThirdSiteUpdateV2Response;
  "ToolsToolsTaskDetailGetV30": Models.ToolsToolsTaskDetailGetV30Response;
  "ToolsToolsTaskGetV30": Models.ToolsToolsTaskGetV30Response;
  "ToolsUnionFlowPackageCreateV2": Models.ToolsUnionFlowPackageCreateV2Response;
  "ToolsUnionFlowPackageDeleteV2": Models.ToolsUnionFlowPackageDeleteV2Response;
  "ToolsUnionFlowPackageGetV2": Models.ToolsUnionFlowPackageGetV2Response;
  "ToolsUnionFlowPackagePromotionReportV30": Models.ToolsUnionFlowPackagePromotionReportV30Response;
  "ToolsUnionFlowPackageReportV2": Models.ToolsUnionFlowPackageReportV2Response;
  "ToolsUnionFlowPackageUpdateV2": Models.ToolsUnionFlowPackageUpdateV2Response;
  "ToolsVideoCheckAvailableAnchorV2": Models.ToolsVideoCheckAvailableAnchorV2Response;
  "ToolsVideoCoverSuggestV2": Models.ToolsVideoCoverSuggestV2Response;
  "ToolsWechatAppletCreateV30": Models.ToolsWechatAppletCreateV30Response;
  "ToolsWechatAppletListV30": Models.ToolsWechatAppletListV30Response;
  "ToolsWechatAppletUpdateV30": Models.ToolsWechatAppletUpdateV30Response;
  "ToolsWechatGameCreateV30": Models.ToolsWechatGameCreateV30Response;
  "ToolsWechatGameListV30": Models.ToolsWechatGameListV30Response;
  "UniProjectAwemeAuthorizedGetV30": Models.UniProjectAwemeAuthorizedGetV30Response;
  "UniProjectCreateV30": Models.UniProjectCreateV30Response;
  "UniProjectListGetV30": Models.UniProjectListGetV30Response;
  "UniProjectMonetizationModeUpdateV30": Models.UniProjectMonetizationModeUpdateV30Response;
  "UniProjectUpdateV30": Models.UniProjectUpdateV30Response;
  "UploadStatementV2": Models.UploadStatementV2Response;
  "UserInfoV2": Models.UserInfoV2Response;
  "WalletChargeVerifyGetV30": Models.WalletChargeVerifyGetV30Response;
  "WalletPrepayChargeGenerateRemittanceCodeCreateV30": Models.WalletPrepayChargeGenerateRemittanceCodeCreateV30Response;
  "WalletRemittanceCodeListGetV30": Models.WalletRemittanceCodeListGetV30Response;
  "YuntuAudienceInfoCreateV30": Models.YuntuAudienceInfoCreateV30Response;
  "YuntuAudienceInfoDeleteV30": Models.YuntuAudienceInfoDeleteV30Response;
  "YuntuAudienceInfoGetV30": Models.YuntuAudienceInfoGetV30Response;
  "YuntuAudienceLabelCreateV30": Models.YuntuAudienceLabelCreateV30Response;
  "YuntuAudienceLabelDeleteV30": Models.YuntuAudienceLabelDeleteV30Response;
  "YuntuAudienceLabelGetV30": Models.YuntuAudienceLabelGetV30Response;
  "YuntuBrandInfoGetV30": Models.YuntuBrandInfoGetV30Response;
}
