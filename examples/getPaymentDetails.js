// Import package
const VippsClient = require('vipps-api')

// Create Vipps Client
const client = new VippsClient({
    id: CLIENT_ID,
    secret: CLIENT_SECRET,
    subscriptionId: CLIEN_SUBSCRIPTION_KEY,
    // Run in Test (https://apitest.vipps.no)
    testDrive: true
});

var orderId = "1668167746774" // The order id from payment



async function getPaymentDetails(orderId){
    try {
        return await client.getOrderDetails({ orderId: orderId});
    } catch(err) {
        // Error handling
        console.log(err)
        return "Error"
    }
}

async function runStuff(orderid){
    const paymentdetails = await getPaymentDetails(orderId) // Order Information

    console.log(paymentdetails)
    
}

runStuff(orderId)
