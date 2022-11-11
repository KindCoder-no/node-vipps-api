// Import package
const VippsClient = require('vipps-api')

// Create Vipps Client
const client = new VippsClient({
    id: "49468c5d-ecf9-4c0b-b4e1-1191ef56ab94",
    secret: "11rWOChOGDHKMINvu2HhCTjNqGA=",
    subscriptionId: "c6390f7de9d04b7baa02dccc162bd6f8",
    // Run in Test (https://apitest.vipps.no)
    testDrive: true
});



async function getAccessToken(){
    // Try to get access token
    try {
        return await client.getAccessToken();
    } catch(err) {
        // Error handling
        console.log(err)
        return "Error"
    }
}


async function initiatePayment(){
    // Try to initiate payment
    try {
        var payment = await client.initiatePayment({order: {
            "customerInfo": {
            "mobileNumber": "45864960" // Phone number of customer (Not required)
            },
            "merchantInfo": {
            "authToken": await getAccessToken().access_token, // use access token from previous function
            "callbackPrefix": "https://example.com/vipps/callbacks-for-payment-update-from-vipps", // callbackPrefix (Where the user is sent after payment)
            "consentRemovalPrefix": "https://example.com/vipps/consent-removal",
            "fallBack": "https://example.com/vipps/fallback-result-page-for-both-success-and-failure/acme-shop-123-order123abc",
            "isApp": false,
            "merchantSerialNumber": "266636", // Your serial number
            "paymentType": "eComm Regular Payment",
            "shippingDetailsPrefix": "https://example.com/vipps/shipping",
            "staticShippingDetails": [
                {
                "isDefault": "Y",
                "priority": 0,
                "shippingCost": 9900,
                "shippingMethod": "Posten Servicepakke",
                "shippingMethodId": "posten-servicepakke"
                }
            ]
            },
            "transaction": {
            "amount": 49900, // Amount
            "orderId": Date.now(), // Remember / store this (Or store it when you get it back from Vipps)
            "transactionText": "One pair of Vipps socks",
            "skipLandingPage": false,
            "scope": "name address email",
            "additionalData": {
                "passengerName": "FLYER / MARY MS.",
                "airlineCode": "074",
                "airlineDesignatorCode": "KL",
                "ticketNumber": "074-5799804843",
                "agencyInvoiceNumber": "123456"
            },
            "useExplicitCheckoutFlow": true
            }
        }});
        console.log(payment)
        
        return payment
    } catch(err) {
        // Error handling
        console.log(err)
        return "error"
    }
}



async function runStuff(){
    const paymentdetails = await initiatePayment()

    var paymentURL = paymentdetails.url // the url you need to send the user to
    var orderId = paymentdetails.orderId // The order id you should store to process payment/update order status
    
    
}

runStuff()