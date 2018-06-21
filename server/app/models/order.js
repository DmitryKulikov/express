var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Order = new Schema({
    from: String,
    to: String,
    weight: Number,
    volume: Number,
    body_download: String,
    comment:String
});


var OrderModel = mongoose.model('Order', Order);

module.exports.OrderModel = OrderModel;