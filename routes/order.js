const express  = require('express');
const router = express.Router();
const Order = require('../database/models/order');
const orderCntrl = require('../controller/order');
const moment = require('moment')

router.get('/', orderCntrl.getOrders)
router.post('/', orderCntrl.createOrder);


router.get('/search/:orderId',async(req,res)=>{

    const order =await Order.findOne({orderId:req.params.orderId.toString()});

    if(order){
        res.send(order);

    }
    else{
        res.send('does not exist')
    }
})
router.get('/list/:order_date',async(req,res)=>{
    const order = await Order.find({order_date:req.params.order_date});

    if(order){
        res.send(order);

    }
    else{
        res.send('does not exist')
    }
})
router.put('/update/:id', async (req,res)=>{
    const order = await Order.findByIdAndUpdate(req.params.id,{
        itemName:req.body.itemName,
        cost: req.body.cost,
        delivery_date:req.body.delivery_date 
      },{new:true});
    res.send(order);
});


router.delete('/:id', (req,res)=>{

    // if(!mongoose.isValidObjectId(req.params.id)){
    //   res.status(400).json('invalid product')
    // }
     Order.findByIdAndRemove(req.params.id).then(order=>{
        if(order){
          return res.status(200).json({status:'success', message:'order deleted successfully'})
        }
         res.status(400).json({status:'failed', message:'order not found'})
      }).catch(err=>{
        res.status(500).json({success:'failed', error:err})
      })
  });
module.exports = router;