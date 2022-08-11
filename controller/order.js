const Order = require('../database/models/order');

exports.getOrders = async (req,res)=>{
    const orders = await Order.find();
    if(!orders) return res.status(404).json('No orders found');
    res.status(200).json(orders);
}
exports.createOrder = (req,res,next)=>{
    // const order= req.body;
    Order.findOne({orderId:req.body.orderId}).exec((err,order)=>{
    if(order){
        return res.status(400).json({ message: 'order exists.' });
    }
  else{

    const order = new Order();

    order.orderId = req.body.orderId;
    order.itemName = req.body.itemName;
    order.cost = req.body.cost;
    order.delivery_date = req.body.delivery_date;
    order.save((err, doc) => {
            if (!err)
            res.send(doc);
            else
                return next(err);
        
            })
  }

})
}