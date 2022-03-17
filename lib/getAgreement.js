// Create function
function getAgreement ({ client, orderId }) {
    return client.fetch({
        uri: `/recurring/v2/agreements/${orderId}`,
        method: 'GET'
    })
}

// Export function 
module.exports = getAgreement