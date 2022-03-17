// Include packages
const axios = require('axios')

// Create function
/*function initiatePayment ({ client, order }) {
    return client.fetch({
        uri: '/ecomm/v2/payments',
        body: order
    })
}*/

function initiatePayment ({ client, order }){
    var config = {
        method: 'post',
        url: 'https://apitest.vipps.no/ecomm/v2/payments/',
        headers: { 
          'Content-Type': 'application/json', 
          'Ocp-Apim-Subscription-Key': client.config.subscriptionId, 
          'Authorization': 'Bearer ' + this.getAccessToken
        },
        data : JSON.stringify(order)
    };
      
    axios(config)
    .then(function (response) {
        return response.data
        //console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        return error
    });
}

// Export function 
module.exports = initiatePayment