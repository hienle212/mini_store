var customer = require('../controller/customers.js')
var order = require('../controller/orders.js')
// var dashboard = require('../controller/dashboards.js')
var product = require('../controller/products.js')

module.exports = function(app){
  app.get('/customers', customer.index );
  app.post('/customers', customer.create );
  app.delete('/customers/:id', customer.delete );

  app.get('/products', product.index );
  app.post('/products', product.create );
  app.delete('/products/:id', product.delete );

  app.get('/orders', order.index );
  app.post('/orders', order.create );
  app.delete('/orders/:id', order.delete );

}