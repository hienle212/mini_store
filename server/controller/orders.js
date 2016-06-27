var Order = mongoose.model('Order')
var Customer = mongoose.model('Customer')
var Product = mongoose.model('Product')

module.exports = (function(){
  return {
    index: function(req, res) {
      Order.find({}).populate('_customer, _product').exec(function(err, order){
        res.json(order)
      })
    },
    create: function(req, res){
      var order = new Order(req.body);
      console.log(order)
      order.save(function(err){
        if(err) res.json(err)
        else{
            // Customer.findOne({_id: req.body._customer}, function(err, result){
            //   Customer._orders.push(order._id)
            //     results.save(function(err){
            //     if(err){
            //          res.json({'status': false, 'errors': 'validation failed'})
            //      }
            // else{
              Product.findOne({_id: req.body._product}, function(err, product){
                  var new_qty = Product.quantity - req.body.quantity;
                    Product.findOneAndUpdate({_id: req.body._product}, {quantity : new_qty}, function(err){
                if(err){
                     res.json({'status': false, 'errors': 'validation failed'})
                 }
                else { res.json({success: true});   
                }        
          })
        })
          }
      // })
      // })
      })             
    },
    show: function(req, res){
      Order.findOne({_id: req.params.id }, function(err, order){
        if(err) res.json(err)
        else res.json(order)
      })
    },
    delete: function(req, res){
      Order.remove({_id: req.params.id }, function(err, order){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    }
  }
})()