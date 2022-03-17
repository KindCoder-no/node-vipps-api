// Create function
function updateAgreement ({ client, order, body }) {
    return client.fetch({
        uri: '/recurring/v2/agreements' + order,
        body: body
    })
}

// Export function 
module.exports = updateAgreement