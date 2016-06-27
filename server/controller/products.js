var Product = mongoose.model('Product')

module.exports = (function(){
  return {
    index: function(req, res) {
      Product.find({}, function(err, product){
        res.json(product)
      })
    },
    create: function(req, res){
      console.log(req.body)
      var items = new Product(req.body);
      items.save(function(err){
        if(err) res.json({'status': false, 'errors': 'validation failed'})
        else res.json({'status': true})
      })
    },
    show: function(req, res){
      Product.findOne({_id: req.params.id }, function(err, product){
        if(err) res.json(err)
        else res.json(product)
      })
    },
    delete: function(req, res){
      Product.remove({_id: req.params.id }, function(err, product){
        if(err) res.json(err)
        else res.json({'status': true})
      })
    }
    }

})()