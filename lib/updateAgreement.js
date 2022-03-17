// Create function
function updateAgreement ({ client, agreementId, body }) {
    return client.fetch({
        uri: `/recurring/v2/agreements/${agreementId}`,
        body: body,
        method: 'put'
    })
}

// Export function 
module.exports = updateAgreement