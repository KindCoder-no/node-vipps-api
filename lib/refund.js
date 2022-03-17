// Create function
function refund ({ client, orderId, body }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/refund`,
    body: body
  })
}

// Export function
module.exports = refund