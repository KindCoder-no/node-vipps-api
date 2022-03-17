// Create function
function captureOrder ({ client, orderId, body }) {
    return client.fetch({
      uri: `/ecomm/v2/payments/${orderId}/capture`,
      body: body
    })
}

// Export function
module.exports = captureOrder