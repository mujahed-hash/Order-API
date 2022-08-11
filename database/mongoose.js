const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/orderDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected successfully to mongo');
  })
  .catch((e) => {
    console.log('error while connecting to mongoDB');
    console.log(e);
  });



module.exports = {
  mongoose,
};