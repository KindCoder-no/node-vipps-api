// Create function
function createAgreement ({ client, order }) {
    return client.fetch({
        uri: '/recurring/v2/agreements',
        body: order
    })
}

// Export function 
module.exports = initiatePayment