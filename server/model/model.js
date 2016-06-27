var mongoose = require('mongoose');

///////////////CUSTOMER_MODEL//////////////////////

var customerModel = new mongoose.Schema({
	name : {type: String, required:true, minlength:4, maxlength:45 },
	_orders: [{type: mongoose.Schema.Types.ObjectId, ref:'Order'}]
}, {timestamps:true});

///////////////PRODUCT_MODEL//////////////////////


var productModel = new mongoose.Schema({
	product_name : {type: String},
	quantity : {type: Number},
	description : {type: String},
	image : {type: String}
}, {timestamps:true});


///////////////ORDER_MODEL//////////////////////

var orderModel = new mongoose.Schema({
	name : {type: String}, 
	product_name : {type: String },
	quantity : {type: Number},
	_customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
	_product: {type: mongoose.Schema.Types.ObjectId, ref:'Product'}
}, {timestamps:true});


///*****************************///

mongoose.model('Customer', customerModel)
mongoose.model('Order', orderModel)
mongoose.model('Product', productModel)


