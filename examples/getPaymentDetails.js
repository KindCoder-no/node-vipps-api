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
