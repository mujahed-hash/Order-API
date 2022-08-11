 
const express = require('express');
const {mongoose} = require('./database/mongoose');
const app = express();
const orderRoute = require('./routes/order')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/order', orderRoute )

app.listen(3000, function(){
    console.log('connected to express on port 3000')
});