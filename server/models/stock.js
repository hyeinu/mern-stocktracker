const request = require('request')
const parser = require('xml2json')

const getStocks = function(text, cb){
  request(`http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=${text}`, function (error, response, body) {
    if (error) cb(error)
    if (!error && response.statusCode == 200) {
      let stocks = JSON.parse(body)
      cb(null, stocks)
    }
  })
}

module.exports = getStocks;
