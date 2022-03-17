// Create function
function updateAgreement ({ client, orderId, body }) {
    return client.fetch({
        uri: `/recurring/v2/agreements/${orderId}`,
        body: body,
        method: 'put'
    })
}

// Export function 
module.exports = updateAgreement