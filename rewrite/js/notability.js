/**
 * notability解锁plus，如果解锁无效果，点击恢复计划
 * 公众号：木瞳科技Pro
 *
 * [MITM]
 * hostname = notability.com
 * 
 * 
 * 
 */

const SCRIPT_NAME = 'Notability';

let data = {
    processAppleReceipt: {
      error: 0,
      subscription: {
        productId: "com.gingerlabs.Notability.premium_subscription",
        originalTransactionId: "570001184068302",
        tier: "premium",
        refundedDate: null,
        refundedReason: null,
        isInBillingRetryPeriod: false,
        expirationDate: "2999-12-31T23:59:59.000Z",
        gracePeriodExpiresAt: null,
        overDeviceLimit: false,
        expirationIntent: null,
        __typename: "AppStoreSubscription",
        user: null,
        status: "canceled",
        originalPurchaseDate: "2021-01-01T00:00:00.000Z"
      },
      __typename: "SubscriptionResult"
    }
};

const plus = /^https?:\/\/notability\.com\/(global|subscriptions)/;

if(plus.test($request.url)) {
    let obj = JSON.parse($resopnse.body);
    obj.data = data;
    let body=JSON.stringify(obj);
}
$done({body})