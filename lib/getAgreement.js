// Create function
function getAgreement ({ client, agreementId }) {
    return client.fetch({
        uri: `/recurring/v2/agreements/${agreementId}`,
        method: 'GET'
    })
}

// Export function 
module.exports = getAgreement