// Create function
function getAgreement ({ client, order }) {
    return client.fetch({
        uri: '/recurring/v2/agreements/' + order,
        method: 'GET'
    })
}

// Export function 
module.exports = getAgreement