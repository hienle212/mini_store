var Customer = mongoose.model('Customer')

module.exports = (function(){
  return {
    index: function(req, res) {
      Customer.find({}).populate('_orders').exec(function(err, customer){
        res.json(customer)
      })
    },
    create: function(req, res){
      var customer = new Customer(req.body);
      customer.save(function(err){
        if(err) res.json({'status': false, 'errors': 'validation failed'})
        else res.json({'status': true})
      })
    },
    show: function(req, res){
      Customer.findOne({_id: req.params.id }, function(err, customer){
        if(err) res.json(err)
        else res.json(customer)
      })
    },
    delete: function(req, res){
      Customer.remove({_id: req.params.id }, function(err, customer){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    }
    // update: function(req, res){
    //   Customer.findOne({_id: req.params.id }, function(err, customer){
    //     if(err) res.json(err)
    //     else{
    //       // player.j_num = req.body.j_num
    //       // player.name = req.body.name
    //       // customer.save(function(err){
    //         if(err) res.json(err)
    //         else res.json({'status': true})
    //       })
        // }
      // })
    // }
  }
})()