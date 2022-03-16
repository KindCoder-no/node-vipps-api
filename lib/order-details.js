// Create function
function getOrderDetails ({ client, orderId }) {
  return client.fetch({
    uri: `/ecomm/v2/payments/${orderId}/details`,
    method: 'GET'
  })
}

// Export function
module.exports = getOrderDetails