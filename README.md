# node-vipps-api
A simple package to use the Vipps API

You can view the required body models documented in Vipps swagger documentation

[Ecom Documentation](https://vippsas.github.io/vipps-ecom-api/)
[Recurring Documentation](https://vippsas.github.io/vipps-recurring-api/)

This is an updated version of [CrystallizeAPI/node-vipps](https://github.com/CrystallizeAPI/node-vipps)

## Install
```
npm install vipps-api
```

## Usage

### Initiate the client

```
const client = new VippsClient({
    id: "MY_VIPPS_CLIENT_ID",
    secret: "MY_VIPPS_CLIENT_SECRET",
    subscriptionId: "MY_VIPPS_SUB_KEY",
    testDrive: isProd ? false : true
});
```

### Initiate a payment<br/>

```
await client.initiatePayment({order:VippsCheckoutModel});
```

### Capture a payment<br/>

```
await client.capture({ orderId: VippsOrderId, body: VippsCaptureBodyModel });
```

### Refund a payment<br/>

```
await client.refund({ orderId: VippsOrderId, body: VippsRefundBodyModel });
```

### Get order payment details<br/>

```
await client.getOrderDetails({ orderId: VippsOrderId});
```

### Create Recurring Agreement

```
await client.createAgreement({ body: VippsRefundBodyModel});
```

### Get Recurring Agreement details

```
await client.getAgreement({ orderId: VippsOrderId });
```

### Update Recurring Agreement

```
await client.updateAgreement({ orderId: VippsOrderId, body: VippsRefundBodyModel});
```

### Get an access token

```
await client.getAccessToken();
```