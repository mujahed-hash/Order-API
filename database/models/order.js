const mongoose = require('mongoose');
const moment = require('moment')
var todayDate = new Date(); 
var todayDateFormat = moment(todayDate, 'DD-MM-YYYY').format('MM-DD-YYYY');
const orderSchema = mongoose.Schema({
    orderId:{
        type:String,
        unique:true
    },
    itemName:{
        type:String,
    },
    cost:{
        type:String
    },
    order_date:{
        type:String,
        default:todayDateFormat
       },
       delivery_date:{
        type:Date
       }
},
{timestamps:true});

module.exports = mongoose.model('Order', orderSchema);